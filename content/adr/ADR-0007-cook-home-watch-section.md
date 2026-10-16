# ADR-0007：cook 首頁「Watch XingAI Cook」一節

- **編號**：ADR-0007
- **日期**：2026-10-16
- **網站**：cook.xingai.app
- **狀態**：Accepted

## 背景與原因

落實四站互嵌標準（ADR-0004）：cook 首頁缺影片入口，網站訪客沒有路徑走到 @xingaicook 頻道。

## 決策內容

- 首頁 FAQ 前新增「Watch XingAI Cook」一節：主嵌導覽桌面英文版 9P7fGU3mdDA，旁列便當 #1 EN nXrGye9JFJ8；facade 點擊才載入＋訂閱連結。
- 附帶記錄：「每日小貼士卡」構想本日被星哥擱置，未做，不要主動重提。

## 誰拍板

星哥拍板（屬 ADR-0004 批准範圍內的首批落地；小貼士卡擱置亦為星哥裁定）。

## 影響與後果

- cook 站 repo 為 GitHub xingaiapp/xingai-cook-ai；後續 ADR-0015 的 /recipes 系統建在同一站上。

## 關聯

- Commit：c49e496
- 文件：未記錄
- 相關 ADR：ADR-0004（互嵌標準）、ADR-0015（/recipes 食譜頁系統）
