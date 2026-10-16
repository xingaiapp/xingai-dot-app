# ADR-0005：invest 首頁 Watch 格＋/etf 頁嵌片

- **編號**：ADR-0005
- **日期**：2026-10-16
- **網站**：invest.xingai.app
- **狀態**：Accepted

## 背景與原因

落實四站互嵌標準（ADR-0004）：invest 首頁與 /etf 頁需要影片入口，把網站訪客導向 YouTube 頻道訂閱。

## 決策內容

- 新增共用元件 components/watch-video.tsx（facade 實現，全站嵌片共用）。
- 首頁 Watch 格：en/ko 嵌《華爾街觀點周報》EP01 英文版（HmCcDv7PnTM，訂閱連 @xingaiinvest）、zh 嵌 EP01 中文版（0ggqnYVrgH8，訂閱連 @axingstocks）。
- /etf 頁（免責區前）：en 嵌 /etf 導覽 avcY2KfuU2Y、ko 嵌導覽 y_z2dW5Ym3g、zh 暫用周報中文版（中文桌面導覽公開狀態待核實——遺留觀察項）。
- **後續已排程**：cron invest-home-ep02-swap-20261018 於 2026-10-18 20:40 CT，在 EP02 中英雙版公開核實後，自動把首頁嵌入由 EP01 換成 EP02。

## 誰拍板

星哥拍板（屬 ADR-0004 批准範圍內的首批落地）。

## 影響與後果

- 首頁嵌入將隨周報期數滾動更換（EP02 起）；周報文章版（ADR-0009）上線後首頁 Watch 格下另加文章連結。

## 關聯

- Commit：556d5d4
- 文件：未記錄
- 相關 ADR：ADR-0004（互嵌標準）、ADR-0001（/etf 頁）、ADR-0009（周報文章版）
