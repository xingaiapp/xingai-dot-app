# ADR-0015：cook 食譜頁系統 /recipes 上線＋便當 Short 描述回鏈

- **編號**：ADR-0015
- **日期**：2026-10-16
- **網站**：cook.xingai.app
- **狀態**：Accepted

## 背景與原因

「網站×YouTube 聯動」點子之二：每支便當 Short 配一頁食譜頁，Short 帶人到站、站把人導回訂閱與決策功能。2026-10-16 17:15 星哥再拍板剩下的接著做，並點名 Cook 食譜頁「好像還有點意思」；上線後星哥回覆「I like it.」確認。

## 決策內容

- 建 /recipes 索引＋便當 #1–#3 三支專屬頁（en/zh 雙語，照站內 /ingredients 既有架構：lib/recipe-pages.ts＋recipe-view＋recipe-article 元件，Recipe＋VideoObject JSON-LD、canonical/hreflang 齊備）：
  - #1 /recipes/moms-love-bento-1（配 Short nXrGye9JFJ8）
  - #2 /recipes/moms-love-bento-2（配 T6dukZnB6bg）
  - #3 /recipes/moms-love-bento-3（配 8lapxmCP4iA）
- 每頁：頁首 facade 嵌對應 Short、食材清單＋裝盒步驟、文末「今晚就做這道」CTA 連回首頁決策功能。
- **內容紀律**：食材與步驟只寫發布包與旁白確實有的，不編份量/時間/溫度/調味；步驟如實定位為「裝盒順序」並加誠實註記（本系列是成品展示、非教學課）。#3 中央白色圓片按星哥已確認口徑寫為起司；#1 包裡未點名的白色小丁不寫死、不入食材表。
- Short 描述回鏈：三支便當 Short 描述各補一行「Full recipe for this box: <對應食譜頁 URL>」，插在既有 cook.xingai.app 行之前；韓文版三支本次不補（食譜頁暫無韓文版，避免導錯語言）。
- 往後每日便當照此模板加一頁。

## 誰拍板

星哥拍板（點名優先做；上線後確認喜歡）。

## 影響與後果

- Cook 站形成「Short ↔ 食譜頁」雙向鏈路；回鏈清單已備（見關聯文件），Studio 補鏈由主代理辦完並核實。

## 關聯

- Commit：11304f3（基底含 ADR-0007 的 c49e496）
- 文件：~/workspace/productions/xingaicook-shorts/recipe-backlinks-20261016.md（回鏈清單）
- 相關 ADR：ADR-0007（cook 首頁 Watch 一節）
