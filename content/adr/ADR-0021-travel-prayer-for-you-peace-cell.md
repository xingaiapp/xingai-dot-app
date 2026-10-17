# ADR-0021：travel 禱告處境頁補入「需要平安」格（海港 Part 1）

- **編號**：ADR-0021
- **日期**：2026-10-16
- **網站**：travel.xingai.app
- **狀態**：Accepted

## 背景與原因

ADR-0010/0013 預留：海港夜景《A Prayer For You Who Needs Peace Tonight》Part 1（jK80WrHqxqc）排程 2026-10-16 23:00 CT 公開，公開後才許補入處境頁「需要平安」格（守「核實才上格」）。本筆即該預留的收尾，由既有 cron prayer-foryou-harbour-add-20261016（23:10）執行。

## 決策內容

- 先核實公開：23:10 後實查 YouTube 公開頁——標題與發布包一致、可播放、已有觀看與評論，確認 Public 後才動網站。
- lib/content/prayer-for-you.ts 新增精選格 key "peace"：影片 jK80WrHqxqc，經文 Psalm 4:8 (KJV) 照該片發布包（publish_pack_night_harbor.md）原文；四語格名照頁面既有 i18n 與關鍵詞表定版（Needing peace／需要平安／평안이 필요할 때／Necesitas paz）。只加不改既有格。
- 配套：tests/prayer-for-you.test.ts 的 BLOCKED_IDS 移除 jK80WrHqxqc 一行（其封鎖理由僅為「排程未公開」，現已核實公開；RWOX8bR8_uI 維持封鎖）。禱告相關測試 20/20 通過。
- ADR-0014 的自動對位關鍵詞表本已含 peace 規則，本次精選格令該片永久釘住、不受 feed 窗口影響。

## 誰拍板

星哥拍板（ADR-0010 排程預留＋本 cron 任務書）。

## 影響與後果

- 處境頁由 9 格增至 10 格；上線後實測四語（en/zh/ko/es）頁面均 200 且平安格與經文正確顯示，facade 沿用既有組件未動。

## 關聯

- Commit：a5e7b5e（基於遠端 main a85f045；遠端其間變更經核未觸及本檔）
- 文件：~/workspace/productions/xingaitravel-shorts/2026-10-14/publish_pack_night_harbor.md（發布包）
- 相關 ADR：ADR-0010（處境頁上線）、ADR-0013（擴充・平安格預留）、ADR-0014（自動化）
