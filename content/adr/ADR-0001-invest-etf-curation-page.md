# ADR-0001：invest /etf 策展研究頁上線（12 組 30 支定版）

- **編號**：ADR-0001
- **日期**：2026-10-16
- **網站**：invest.xingai.app
- **狀態**：Accepted

## 背景與原因

invest 需要一個能沉澱 YouTube 流量的 ETF 研究落地頁（持倉片描述首行鉤子已由 /portfolio 切向 /etf）。要求：三語（en/zh/ko）、數據逐項核實、水位不許吹。

## 決策內容

- 上線 https://invest.xingai.app/etf （＋/zh/etf、/ko/etf），策展定版 **12 組 30 支**：
  - 股息收益（SCHD/VYM/DGRO/JEPI/JEPQ）、寬基核心（VOO/VTI/QQQ/QQQM）、風格動量（VUG/VTV/SPMO）、國際（VXUS/EWY）、債券現金（SGOV/BND/TLT）、房地產黃金（VNQ/GLD）、半導體（SMH/SOXX/SOXL）、科技軟件 AI（XLK/IGV/AIQ)、網絡安全（CIBR)、光電（LYTE)、加密（IBIT)、槓桿單一股票（TQQQ/TSLL）。
  - LYTE 註明為星哥所持 Roundhill Photonics & Optics ETF（光子學，非太陽能）。
  - 三支槓桿行（SOXL/TQQQ/TSLL）均帶行級風險旗標，連 /disclaimer。
  - DIVO/IWM 為守 30 支上限砍掉；星哥 2026-10-16 12:18 確認「不用，就這樣」——不加回，此為定版。
- **定位（星哥親口定）：只做 research、不做推薦**——不排高下、不說哪支比哪支好；頁面教人「怎麼研究一支 ETF」＋什麼情況的人適合哪一類。
- 數據形態：**策展靜態快照**，頁標明 as-of 2026-10-16，收益率/費用率/規模/派息頻率逐項雙源核實；非即時數據。（刷新方式另見 ADR-0002。）

## 誰拍板

星哥拍板（上線與 12 組 30 支定版、research not advice 定位均為星哥親口定）。

## 影響與後果

- /etf 成為 invest 最大流量入口（持倉片 817 支描述鉤子、ETF 分組解說 Shorts 描述錨點均指向此頁）。
- 後端刷新服務上線前，頁面維持此定版快照，數字不人工逐次改（見 ADR-0002）。

## 關聯

- Commit：未記錄（頁面建置 commit 未單獨標註；後續相關 commit 見 ADR-0003、ADR-0005）
- 文件：~/workspace/your_files/invest-etf-backend-requirements-20261016.md（刷新服務需求）
- 相關 ADR：ADR-0002（刷新架構）、ADR-0003（免責補強）、ADR-0005（頁面嵌片）、ADR-0016（cache 約定）
