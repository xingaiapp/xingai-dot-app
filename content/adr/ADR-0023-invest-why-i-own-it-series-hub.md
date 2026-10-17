# ADR-0023：invest 《小散戶親身調研——我為什麼持有》系列首頁上線

- **編號**：ADR-0023
- **日期**：2026-10-17
- **網站**：invest.xingai.app
- **狀態**：Accepted

## 背景與原因

星哥 2026-10-17 親口定性並拍板「Do it」：invest 的個股研究開一條第一人稱系列——以個人小散戶身份，講每天親身在用這些公司的產品、感受到不可替代、所以買入並持有的真實理由；不是推薦、不是喊單，是持倉邏輯的自述（research not advice 站內口徑不變）。系列中文名《小散戶親身調研——我為什麼持有》、英文名 "Why I Own It — Notes From a Small Investor"。EP01 為 TSLA（2026-10-16 雙版持倉長版影片即本集）；EP02 為 AMZN（雙版影片與研究筆記製作中）。本筆為系列索引頁的落地紀錄。

## 決策內容

- 新增 https://invest.xingai.app/why-i-own-it （＋/zh、/ko 三語），檔案 app/why-i-own-it/page.tsx，版式照周報文章版模板（ADR-0009）：頁首 kicker＋標題、JSON-LD（CollectionPage＋EP01 VideoObject）、facade 嵌片（ADR-0004 組件 WatchVideo）、免責一節、訂閱引導、個股研究回鏈。靜態策展頁，不抓即時數據（cache 約定 ADR-0016 不受影響）。
- 頁面結構：系列簡介（定調＋「先用生活投票、再用錢投票」方法一句）→ EP01 節（嵌片＋三段敘事摘要＋「我們的一句話」＋連回 /portfolio-daily/2026-10-16)→ EP02 節（標「製作中」，放敘事簡介；雙版影片尚在製作，未產出連結前不嵌片、不編造連結，發布後另筆補嵌）→ 後續集數清單（GOOGL、META、SPCX、HOOD，各一句星哥原話理由，只列名不編內容）。
- 嵌片對應照站內慣例：中文頁嵌中文版（Q9lXu7Tepwg，@axingstocks），英文頁與韓文頁嵌英文版（WE30OVTwCZ8，@xingaiinvest）。
- 配套登記（均為只加不改）：lib/public-locale.ts 的 INDEXABLE_PREFIXES 與 UNGATED_EXACT_PATHS 各加 "/why-i-own-it"（新公開路徑比照 /etf 等研究頁登記，語言前綴與免責彈窗豁免才生效）；app/sitemap.ts 加一行（priority 0.7、monthly，照文章版行）；public/llms.txt 加一行系列連結。
- 站內互鏈：首頁「更多研究頁」清單加一張系列卡（標題＋一句簡介，三語），只加一項、既有版面結構未動。

## 誰拍板

星哥拍板（2026-10-17 親口定系列名與定位，並對建頁指示「Do it」）。

## 影響與後果

- 上線後實測：三語頁面均 HTTP 200；標題正確（英 "Why I Own It — a small investor's holding notes"、繁中《我為什麼持有——小散戶親身調研》、韓 "Why I Own It — 소액 투자자의 보유 노트")；嵌片 ID 逐語核對（zh=Q9lXu7Tepwg、en/ko=WE30OVTwCZ8)；EP02「製作中」標示三語俱在；後續清單四名俱在；首頁三語均有系列卡且 href 帶正確語言前綴；sitemap.xml 已含 /why-i-own-it 三語條目。
- EP02 影片與筆記發布後，需回本頁補嵌雙版影片與筆記連結，屆時另立一筆 ADR 紀錄補嵌。
- 本系列之後逐支成集（GOOGL、META、SPCX、HOOD），每集比照本頁節式追加，不另起新頁。

## 關聯

- Commit：66c031fe2287e726a0a9dfaf416f240c8356db49（repo xingaiapp/xingai-invest-ai，基於 6a06dd4）
- 文件：~/workspace/your_files/invest-amzn-owner-note-draft-20261017.md（EP02 研究筆記草稿，待星哥過目後另行上線）
- 相關 ADR：ADR-0009（周報文章版模板）、ADR-0004（facade 互嵌標準）、ADR-0016（cache 架構約定）、ADR-0019（持倉研究報告文章線，EP01 同集內容的另一沉澱面）
