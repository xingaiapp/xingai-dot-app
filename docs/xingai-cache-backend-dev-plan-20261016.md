# XingAI 共用 Cache 後端開發計劃

版本：v1.0，2026-10-16
決策依據：xingai-dot-app `content/adr/ADR-0016-four-sites-cache-architecture.md`（主站 /adr 上的四站 cache 約定，已定版）。不是 Invest `stock-ai-back-end/doc/adr/0016-fastapi-backend-framework.md`，也不是 Travel `docs/adr/0016-traffic-404-faq-stories.md`：所有抓數據、拼內容的邏輯只放後端一層；前端永遠只讀 cache 顯示；TTL 由我方配置（30 分鐘／2 小時／5 小時等）；支持手動刷新；後端抓取失敗時前端讀舊 cache 加 stale 標記，頁面不許壞。
現有子規格：`invest-etf-backend-requirements-20261016.md`（ETF 數據集的詳細需求，本計劃的 Phase 1 以它為準）。

---

## 0. 現狀（開工前先認清）

- 四個站（xingai.app、invest.xingai.app、travel.xingai.app、cook.xingai.app）都是 Next.js，部署在 Vercel，代碼在 GitHub（xingaiapp 組織）。
- invest 已有真正的後端：FastAPI（Fly）。決策緩存是 SQLite（`cache.sqlite`），登入是 Auth.js（next-auth）JWT cookie。不是 Prisma，不是 Postgres，不是 iron-session。其餘三站沒有這塊後端。travel 首頁最新影片和禱告處境頁靠 Next.js ISR 在服務端抓 YouTube RSS 現拼。cook 食譜頁是寫死的 videoId，不抓片單。
- 第 9 節 D1 寫的「復用 invest 已有的 Postgres」前提不成立。開工前要按 FastAPI + SQLite 重定存儲。本輪只改正文第 0 節，D1 條目仍待星哥拍板。
- 流量規模：每站每天約百到千級訪問。**不要按大廠架構設計**，一切從簡、從便宜、從好維護出發。
- 人手現實：目前沒有專職後端團隊。本計劃按「一名後端開發（或一個開發 agent）分階段獨立完成」來切分，每個階段都能單獨上線、單獨驗收。

## 1. 目標與非目標

**目標**

1. 建一個共用的「cache 服務」：後端定時把各站需要的外部數據抓回來、核對好、存進 cache；四站前端只通過讀接口拿 cache，不再各自直連外部來源。
2. 每個數據集有獨立 TTL（可配置）、獨立的新鮮度標記（as_of）、抓取失敗保留舊值並標 stale。
3. 提供手動刷新入口：任何數據集可由管理員（或我方 agent 以令牌）觸發立即刷新，不等 TTL。
4. 前端讀取失敗時有最後兜底：頁面展示上一次的好數據（哪怕過期），永遠不白屏、不報錯。

**非目標（本期不做）**

- 不做即時行情／即時推送（WebSocket 等一律不做）。
- 不改四站現有頁面結構與 URL；前端改造僅限「數據來源從直抓改為讀 cache」。
- 不引入微服務拆分、不上 Kubernetes、不做多區域部署。

## 2. 總體架構

```
外部來源（YouTube RSS/API、ETF 發行商與數據商、財報日曆源…）
        │  只有後端能碰
        ▼
抓取任務（Fetcher Jobs，定時 + 手動觸發）
  - 抓取 → 標準化 → 核對（需要雙源的數據集在此核對）→ 寫入 cache
  - 抓取或核對失敗：不覆蓋舊值，記錄失敗原因，舊值標 stale
        │
        ▼
Cache 存儲（Postgres 一張通用表，見 §3）
        │  只讀接口
        ▼
讀接口（Read API，HTTP GET，只讀，帶 HTTP 緩存頭）
        ▲
        │  前端只走這一條路
四站前端（Next.js 服務端 fetch 讀接口，ISR revalidate = 該數據集 TTL）
```

要點：

- **前端讀的永遠是 cache 裡的成品 JSON**，前端代碼裡不許出現任何外部數據源的 URL、不許有解析外部格式的邏輯。
- 讀接口掛了或超時，前端用構建／上次渲染留下的靜態快照兜底（travel 禱告頁現行的「精選格」就是這個兜底模式，照此推廣）。

## 3. 數據模型（Cache 存儲）

一張通用表，一個數據集一行（或一行一個版本，保留最近 N 版供回溯；建議保留 10 版）：

| 欄位 | 說明 |
|---|---|
| `dataset` | 數據集鍵，如 `youtube:travel:uploads`、`etf:snapshot`、`earnings:calendar` |
| `payload` | JSONB，成品數據，前端拿來即用 |
| `fetched_at` | 本次成功抓取時間 |
| `as_of` | 數據本身的時點（如 ETF 數據的收盤日），可空 |
| `source` | 來源標識（哪個 feed／哪家數據商） |
| `status` | `fresh` / `stale`（抓取失敗沿用舊值時標 stale） |
| `error` | 最近一次抓取失敗原因，可空 |

存儲選型（待決策 D1）：優先復用 invest 已有的 Postgres（同庫不同表，最省）；若不希望跨站共用一庫，次選在同一 Postgres 實例開獨立 database。再不行才考慮各站各自的 Vercel KV／Blob——但那會讓「統一後端」落空，非必要不選。

## 4. 讀接口（Read API）契約

- `GET /v1/cache/{dataset}` → 200，Body：
  ```json
  {
    "dataset": "youtube:travel:uploads",
    "as_of": "2026-10-16T21:30:00Z",
    "stale": false,
    "data": { }
  }
  ```
- 回應帶 `Cache-Control: public, max-age=<該數據集 TTL>`，前端 ISR 的 revalidate 與 TTL 對齊，雙層緩存。
- 數據集不存在 → 404；服務異常 → 5xx，前端按兜底處理。
- 讀接口公開只讀（內容本就是要公開展示的數據），但**寫入與刷新接口必須驗令牌**（見 §5）。
- 部署位置（待決策 D2）：(a) 獨立小服務（一個 Next.js／Node 應用，部署 Vercel，連 §3 的 Postgres）；(b) 寄生在 invest 後端裡加一組路由。建議 (a)：四站平權、不綁死在 invest 的發布節奏上；代價是多一個要部署的應用。工期緊可先 (b) 再遷 (a)，接口契約不變所以前端無感。

## 5. 抓取任務與刷新

- 每個數據集一個 fetcher：`fetch → normalize → verify（可選雙源核對）→ upsert cache`。
- 觸發方式兩種：
  1. **定時**：Vercel Cron 或外部 cron 按數據集節奏觸發（YouTube 類 30 分鐘；ETF 類美股收盤後每日一次；財報日曆每日一次）。
  2. **手動**：`POST /v1/admin/refresh/{dataset}`，Header 帶管理令牌（環境變量存儲，絕不進代碼庫）。發布新片／改完數據要立即見效時用。
- 失敗紀律：抓取或核對失敗**絕不覆蓋**舊 payload；只更新 `status=stale` 與 `error`。同一數據集連續失敗 3 次，發郵件告警到 xing@xingai.app。
- 冪等：同一數據集的刷新任務不並發（簡單鎖即可）。

## 6. 數據集清單與 TTL（v1）

| 數據集 | 內容 | 來源 | TTL | 階段 |
|---|---|---|---|---|
| `etf:snapshot` | /etf 頁 12 組 30 支 ETF 的規模、費率、派息等（雙源核對，逐支 as_of） | 發行商官方頁 + 第二來源 | 收盤後日更；讀 TTL 5 小時 | Phase 1 |
| `youtube:travel:uploads` | @xingaitravel 上傳清單（近 50 支：標題、ID、時間、描述） | YouTube RSS（或 Data API） | 30 分鐘 | Phase 2 |
| `youtube:travel:playlists` | 《My Lord, Holy》《With You Tonight》清單內容 | 同上 | 30 分鐘 | Phase 2 |
| `youtube:cook:uploads`、`youtube:invest:uploads`、`youtube:axingstocks:uploads`、`youtube:app:uploads` | 其餘頻道上傳清單（供各站影片牆／最新影片位） | 同上 | 30 分鐘 | Phase 2 |
| `earnings:calendar` | 未來 2 周重點財報日（公司、日期、預估 EPS 等可核實欄位） | 雙源核對，核不實不寫 | 每日 1 次；讀 TTL 5 小時 | Phase 3 |

TTL 全部做成數據集級配置（數據庫配置行或環境配置檔），改 TTL 不改代碼。

## 7. 分階段實施

### Phase 0 — 決策與骨架（先做，半天級）

- 定 D1（存儲）、D2（服務部署位置）兩個決策，寫進 ADR。
- 建 cache 表、讀接口空殼、一個樣例數據集手動寫入並被一個頁面讀通（建議拿 travel 首頁最新影片位試點）。
- 驗收：樣例頁面只讀 cache 渲染；把 cache 表清空該行，頁面走兜底不壞。

### Phase 1 — ETF 數據集（規格現成）

- 按 `invest-etf-backend-requirements-20261016.md` 實現 fetcher：收盤後抓取、雙源核對、對不上保留舊值加 stale、逐支 as_of。
- invest /etf 前端改為讀 `etf:snapshot`，刪除頁面內的靜態數據文件（保留一份最後快照作兜底）。
- 驗收：人為讓一個來源返回錯誤數據，核對攔下、舊值保留、頁面標 stale；手動刷新即時生效；頁面顯示的 as_of 與 cache 一致。

### Phase 2 — YouTube 數據集（收編現行 ISR 直抓）

- 實現 5 個頻道的 uploads 與 travel 兩個清單的 fetcher（RSS 優先，配額或格式不夠再上 Data API）。
- travel 首頁最新影片、禱告處境頁改讀 cache；其餘站的影片位按需接入。
- 禱告頁的「標題關鍵詞對位＋經文摘取」邏輯**搬進 fetcher**：cache 裡直接存歸好格的結果，前端只渲染。（邏輯歸後端，正是 ADR-0016 的本意。）
- 驗收：發布一支新 Short，不做任何人工操作，TTL 內（30 分鐘）頁面自動出現新片且歸格正確；停掉 fetcher 一天，頁面顯示 stale 舊清單不壞。

### Phase 3 — 財報日曆數據集

- 選定雙來源、定義可寫欄位（核實不了的欄位寧可不寫），fetcher 每日刷新。
- invest 財報週曆頁（待建）直接讀 cache 上線。
- 驗收：抽查一周日曆與兩來源逐項對得上。

### Phase 4 — 收尾

- 管理小頁或 CLI：看每個數據集的 fetched_at／status／error，手動刷新按鈕。
- 失敗告警郵件接通；寫運維說明（一頁：數據集清單、TTL、怎麼手動刷新、壞了看哪）。

## 8. 風險與注意

- **YouTube RSS 只回最近約 15 支**：禱告頁這類要翻歷史的場景，fetcher 要把每次抓到的增量累積進 cache 自己存檔，不能只存最新一頁 RSS；或改用 Data API 拉全量。此點 Phase 2 開工前先驗證。
- 雙源核對口徑以各數據集規格為準（ETF 見子規格）；核對規則寫進 fetcher 並留日誌，不許静默吞掉不一致。
- 令牌與密鑰只走環境變量；GitHub 代碼庫裡不許出現任何密鑰。
- 成本：一個 Postgres＋一個 Vercel 小應用＋Cron，按現流量應在免費／最低檔內；超了先報星哥再升級。

## 9. 待決策清單（開工前請星哥／後端負責人定）

- D1：cache 存儲——復用 invest 的 Postgres（建議）還是獨立庫？
- D2：讀寫服務——獨立小應用（建議）還是寄生 invest 後端？
- D3：Phase 2 的 YouTube 抓取——先 RSS＋增量存檔，還是直接 Data API（要申請配額）？
- D4：財報日曆的兩個來源選哪兩家？（Phase 3 前定即可）

---

*本計劃由小甜甜按星哥 2026-10-16 指示撰寫：後端邏輯若複雜，不必由前端硬扛——寫成開發計劃交後端開發，前端只假設讀 cache。*
