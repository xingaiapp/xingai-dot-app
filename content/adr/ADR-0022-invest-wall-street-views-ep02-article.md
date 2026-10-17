# ADR-0022：invest 周報文章版 EP02 上線（照 ADR-0009 模板）

- **編號**：ADR-0022
- **日期**：2026-10-17
- **網站**：invest.xingai.app
- **狀態**：Accepted

## 背景與原因

ADR-0009 已定版：《華爾街觀點周報》每期除雙版影片外，照 EP01 模板同步出三語文章版。EP02 雙版影片已製作完成並排定 2026-10-18（週日）20:00 CT 雙頻道首映（中文版 @axingstocks LwLKpBa4G-o、英文版 @xingaiinvest Zeq4R-zc-q4），本筆為其文章版的落地紀錄。

## 決策內容

- 新增 https://invest.xingai.app/wall-street-views/ep02 （＋/zh、/ko 三語），檔案 app/wall-street-views/ep02/page.tsx，版式與結構逐項照 EP01 模板：頁首 facade 嵌片、四人物分節（他是誰／他說了什麼／數據與邏輯／一句點評）、本期對照表、下周驗證點、引用清單、JSON-LD、免責與訂閱引導。
- 嵌片對應照 EP01 慣例：中文頁嵌中文版（LwLKpBa4G-o），英文頁與韓文頁嵌英文版（Zeq4R-zc-q4）；兩支為已排程首映，facade 先行上線，週日 20:00 公開後即為正常播放。
- **數據紀律（照 ADR-0009）**：數字全用 EP02 故事板核對清單（1–20 項）核實版；棄用數字一個未寫（JPM 營收、Ives「800–1,000 座數據中心」、MS 目標價 360 均未出現）；人物紀律照故事板——Ives 只作 Yorkville Ives（離開 Wedbush 僅作背景一句）、Belski 只作 Humilis（離開 BMO 僅作背景一句）、Belski 長牛框架如實標 2025 年 11 月出處。
- sitemap.ts 新增 /wall-street-views/ep02 一行（priority 0.7、monthly，照 EP01 行）；public-locale 的 /wall-street-views 前綴登記已涵蓋新頁，無需改登記（亦經 ADR-0020 的通用修法保障語言切換）。
- 首頁 Watch 格 EP01→EP02 換嵌不在本筆範圍：由既有 cron invest-home-ep02-swap-20261018（2026-10-18 20:40，週日播出後）負責，本次未動首頁。

## 誰拍板

星哥拍板（周報文章版每期同步上線為 ADR-0009 定版常規；EP02 本期製作由星哥 2026-10-16 拍板當日開工）。

## 影響與後果

- 上線後實測：三語頁面均 HTTP 200，標題、人物分節、對照表、驗證點、引用清單與免責均正確渲染；嵌片 ID 與排程首映一致（facade 組件與 EP01 共用，ID 於部署源碼層核對）。
- 周報自此維持「雙版影片＋三語文章版」三件套；EP03 起照同一模板與本筆流程辦理。

## 關聯

- Commit：76384313ecd7d8d8f49f0982d8342aa391043b34（repo xingaiapp/xingai-invest-ai，基於 802c1a0）
- 文件：~/workspace/goals/weekly-market-recap-video/files/ep02-storyboard-20261016.md（故事板＋核對清單）；~/workspace/goals/weekly-market-recap-video/files/publish_pack_ep02_zh.md、publish_pack_ep02_en.md（發布包）
- 相關 ADR：ADR-0009（周報文章版模板）、ADR-0004（facade 互嵌標準）、ADR-0020（invest 語言切換修復，同 repo 前一筆改動）
