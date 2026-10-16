# ADR-0017：ADR 決策紀錄發布到主站 /adr（noindex 內部文件櫃）

- **編號**：ADR-0017
- **日期**：2026-10-16
- **網站**：xingai.app（主站）
- **狀態**：Accepted

## 背景與原因

ADR 系統（ADR-0001～0016）原本只存放在 workspace 本地文件（~/workspace/architecture/adr/）。2026-10-16 星哥指示：這些 report 我們自己要能放到網站上隨時讀；後端代碼可以用開發機交給別人做，但決策紀錄要自己隨手可查。

## 決策內容

- 主站新增 /adr 總索引頁與 /adr/<slug> 每筆一頁（slug＝檔名去掉 .md 後小寫），內容照 ADR 原文渲染，不改字、不刪欄位（含「誰拍板」）。
- md 源文件同步一份進 repo（xingaiapp/xingai-dot-app 的 content/adr/）作為發布源；日後新增 ADR，同步 md 並推 main 即更新（步驟已寫入本目錄 README）。
- **不污染主站門面**：不進主導航、不進手機抽屜、不進頁腳、不進 sitemap；全頁加 robots noindex, nofollow。只有知道網址的人能讀，等於內部文件櫃。
- 英文為主：/adr 即英文路徑，/zh、/ko 不建（訪問回 404）。ADR 是工程文件，不做三語化。
- 與 ADR-0012「主站保持乾淨」的邊界：該筆管的是對外門面與公開入口；/adr 無任何公開入口、不被搜尋索引，屬內部文件，不在門面之列。

## 誰拍板

星哥指示（2026-10-16：「這些 report 我們要自己的把它放到網站上去，因為我們的 report 可以自己讀；後端 code 的話我們可以用開發機去讓別的人去做」）。

## 影響與後果

- 決策紀錄自此有一個穩定網址可隨手查閱（https://xingai.app/adr）。
- 維護成本：新增 ADR 時多一步「同步 md 到 repo content/adr/」；漏同步時以 workspace 檔案為準（README 既有規則）。
- /adr 為靜態內容、無動態數據，與 ADR-0016 cache 約定天然合規。

## 關聯

- Commit：08030fe（feat(adr): publish architecture decision records at /adr；基底 4cfa96a）
- 文件：~/workspace/architecture/adr/（源）；repo content/adr/（發布源副本）
- 相關 ADR：ADR-0012（主站保持乾淨——本筆為其邊界註腳）、ADR-0016（四站 cache 架構約定）
