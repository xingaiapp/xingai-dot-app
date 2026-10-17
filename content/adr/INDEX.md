# ADR 總索引

四站全部架構決策一覽。寫法與規則見 [README.md](README.md)；新筆格式見 [template.md](template.md)。索引與檔案對不上時以檔案為準並立即修索引。

## 全部決策（編號序）

| 編號 | 日期 | 網站 | 標題 | 狀態 |
|---|---|---|---|---|
| ADR-0001 | 2026-10-16 | invest | /etf 策展研究頁上線（12 組 30 支定版） | Accepted |
| ADR-0002 | 2026-10-16 | invest | ETF 數據刷新走後端 cache 服務（取代人工月更） | Accepted |
| ADR-0003 | 2026-10-16 | invest | /disclaimer 審計補強＋/etf 結構風險提示行 | Accepted |
| ADR-0004 | 2026-10-16 | 四站 | 互嵌標準：facade 點擊才載入、改動只加不改 | Accepted |
| ADR-0005 | 2026-10-16 | invest | 首頁 Watch 格＋/etf 頁嵌片 | Accepted |
| ADR-0006 | 2026-10-16 | travel | 首頁「最新影片」RSS 30 分鐘自動更新 | Accepted |
| ADR-0007 | 2026-10-16 | cook | 首頁「Watch XingAI Cook」一節 | Accepted |
| ADR-0008 | 2026-10-16 | travel | 禱告專頁 /prayer 上線（兩清單 facade 連播） | Accepted |
| ADR-0009 | 2026-10-16 | invest | 周報文章版 /wall-street-views/ep01 上線並定為每期模板 | Accepted |
| ADR-0010 | 2026-10-16 | travel | 禱告處境頁 /prayer/for-you 上線 | Accepted |
| ADR-0011 | 2026-10-16 | xingai.app | 主站頻道中心頁 /channels 上線 | Superseded（被 ADR-0012 取代） |
| ADR-0012 | 2026-10-16 | xingai.app | 主站頻道中心頁 /channels 撤除（主站保持乾淨） | Reverted |
| ADR-0013 | 2026-10-16 | travel | 禱告處境頁擴充（為明天擔心獨立格＋喪親格） | Accepted |
| ADR-0014 | 2026-10-16 | travel | 禱告處境頁改數據驅動自動化（發片即上頁） | Accepted |
| ADR-0015 | 2026-10-16 | cook | 食譜頁系統 /recipes 上線＋便當 Short 描述回鏈 | Accepted |
| ADR-0016 | 2026-10-16 | 四站 | cache 架構約定（前端只讀 cache、後端全包） | Accepted |
| ADR-0017 | 2026-10-16 | xingai.app | ADR 決策紀錄發布到主站 /adr（noindex 內部文件櫃） | Accepted |
| ADR-0018 | 2026-10-16 | cook | 家人本名自公開內容移除（食譜頁＋嫩豆腐鍋英韓片） | Accepted |

## xingai.app（主站）

| 編號 | 標題 | 狀態 |
|---|---|---|
| ADR-0011 | 主站頻道中心頁 /channels 上線 | Superseded（被 ADR-0012 取代） |
| ADR-0012 | 主站頻道中心頁 /channels 撤除（主站保持乾淨） | Reverted |
| ADR-0017 | ADR 決策紀錄發布到主站 /adr（noindex 內部文件櫃） | Accepted |

## invest.xingai.app

| 編號 | 標題 | 狀態 |
|---|---|---|
| ADR-0001 | /etf 策展研究頁上線（12 組 30 支定版） | Accepted |
| ADR-0002 | ETF 數據刷新走後端 cache 服務（取代人工月更） | Accepted |
| ADR-0003 | /disclaimer 審計補強＋/etf 結構風險提示行 | Accepted |
| ADR-0005 | 首頁 Watch 格＋/etf 頁嵌片 | Accepted |
| ADR-0009 | 周報文章版 /wall-street-views/ep01 上線並定為每期模板 | Accepted |

## travel.xingai.app

| 編號 | 標題 | 狀態 |
|---|---|---|
| ADR-0006 | 首頁「最新影片」RSS 30 分鐘自動更新 | Accepted |
| ADR-0008 | 禱告專頁 /prayer 上線（兩清單 facade 連播） | Accepted |
| ADR-0010 | 禱告處境頁 /prayer/for-you 上線 | Accepted |
| ADR-0013 | 禱告處境頁擴充（為明天擔心獨立格＋喪親格） | Accepted |
| ADR-0014 | 禱告處境頁改數據驅動自動化（發片即上頁） | Accepted |

## cook.xingai.app

| 編號 | 標題 | 狀態 |
|---|---|---|
| ADR-0007 | 首頁「Watch XingAI Cook」一節 | Accepted |
| ADR-0015 | 食譜頁系統 /recipes 上線＋便當 Short 描述回鏈 | Accepted |
| ADR-0018 | 家人本名自公開內容移除（食譜頁＋嫩豆腐鍋英韓片） | Accepted |

## 四站通用

| 編號 | 標題 | 狀態 |
|---|---|---|
| ADR-0004 | 互嵌標準：facade 點擊才載入、改動只加不改 | Accepted |
| ADR-0016 | cache 架構約定（前端只讀 cache、後端全包） | Accepted |
