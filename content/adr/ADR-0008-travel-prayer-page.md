# ADR-0008：travel 禱告專頁 /prayer 上線（兩清單 facade 連播）

- **編號**：ADR-0008
- **日期**：2026-10-16
- **網站**：travel.xingai.app
- **狀態**：Accepted

## 背景與原因

Faith 線是 @xingaitravel 的漲粉引擎（訂閱轉化前四名均為禱告片），但網站上禱告內容散落各故事集，沒有專頁承接。需要一個禱告入口頁，把兩大禱告播放清單集中呈現。

## 決策內容

- 上線 https://travel.xingai.app/prayer （＋/zh、/ko、/es 四語）。
- 頁內兩格，分別 facade 連播整張清單：
  - 《My Lord, Holy》PLWOzZDBAqYuY（20 支，首支 LjFRkfgBtxM）
  - 《With You Tonight》PLNX4iFXo0DJY（4 支，首支 yCI0Wv3n7gQ）
- 入口：主導航 More 下拉＋手機抽屜。

## 誰拍板

星哥拍板（屬四站互嵌/互導批准範圍）。

## 影響與後果

- 本頁為後續 ADR-0010（禱告處境頁 /prayer/for-you）的母頁；處境頁入口掛在本頁引導卡與主導航。

## 關聯

- Commit：32a4f66
- 文件：未記錄
- 相關 ADR：ADR-0004（互嵌標準）、ADR-0010（禱告處境頁）
