# ADR-0020：invest 站頭語言切換改整頁跳轉（修軟導航下文章不換語言）

- **編號**：ADR-0020
- **日期**：2026-10-16
- **網站**：invest.xingai.app
- **狀態**：Accepted

## 背景與原因

星哥 2026-10-16 22:31 在新上線的持倉研究報告首篇（/portfolio-daily/2026-10-16，ADR-0019）上發現：在站頭語言選擇切到繁中/韓文，文章沒有跟著換語言。

實測定位（headless Chromium 逐頁復現）：

- 各語言版**直讀網址**一直正確（/zh/…、/ko/… 伺服器按語系渲染無誤）；/portfolio-daily 在 lib/public-locale.ts 的 `INDEXABLE_PREFIXES` 登記也正確，不是新路徑漏登記。
- 出事的是站頭切換器的**客戶端軟導航**：切換器用 `router.push(目標語言 URL)`，而 middleware 會把 /zh、/ko 網址 rewrite 回無前綴路徑，Next.js 客戶端路由緩存按「重寫後的路徑」建鍵——三個語言共用同一條緩存，於是點選後網址變了、正文卻仍是上一個語言的伺服器渲染。
- 受影響範圍是**全部**可索引公開路徑（/portfolio-daily、/wall-street-views/ep01、/etf 均復現），非新文章線獨有，只是星哥在新頁上先撞到。

## 決策內容

- 站頭語言切換器（components/dashboard/header.tsx）在可索引公開路徑上改用整頁跳轉 `window.location.assign(target)` 取代 `router.push(target)`，保證切換後由伺服器按所選語系重新渲染。
- 控制台等非公開路徑的原地切換（只換 UI 語言、不跳網址）保持不變；middleware 的 rewrite 架構與 ADR-059 的語系網址設計不動。
- 此修法與路徑無關：今後新增文章路徑只要進 `INDEXABLE_PREFIXES`（免責彈窗/可索引清單本來就必登記的一處），語言切換自動可用，不需再為切換器逐條登記。

## 誰拍板

星哥發現並回報（2026-10-16 22:31）；修復方案屬執行層 bug 修復，由小甜甜決定並同日落地。

## 影響與後果

- 公開頁切換語言會整頁重新載入一次（短暫重載），換來語言必定正確；控制台內切換體驗不變。
- 線上實測驗證（2026-10-16 修復部署後，headless Chromium 點選站頭菜單）：EN→繁中落 https://invest.xingai.app/zh/portfolio-daily/2026-10-16（標題轉繁中）；EN→韓文落 /ko/portfolio-daily/2026-10-16（標題轉韓文）；/zh 版切回 EN 落無前綴版（標題轉英文）；/wall-street-views/ep01 與 /etf 切繁中後正文同步轉繁中——三方向＋兩條旁證全過。
- 遺留觀察：若日後升級 Next.js 或改 middleware 架構（例如語系改走 redirect），可重新評估是否恢復軟導航；改前先讀本筆。

## 關聯

- Commit：xingaiapp/xingai-invest-ai `802c1a0`（header.tsx 切換改整頁跳轉，基於 ADR-0019 的 `96b55c2` 之後）
- 相關 ADR：ADR-0019（問題被發現的文章線）、ADR-0009（同模板的周報文章線，同 bug 一併修好）；invest repo 內 docs/adr/059（公開研究語系網址方案，本筆不動其設計）
