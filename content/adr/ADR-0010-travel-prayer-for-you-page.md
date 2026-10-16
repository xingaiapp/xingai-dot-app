# ADR-0010：travel 禱告處境頁 /prayer/for-you 上線

- **編號**：ADR-0010
- **日期**：2026-10-16
- **網站**：travel.xingai.app
- **狀態**：Accepted

## 背景與原因

「網站×YouTube 聯動」點子之一：觀眾找禱告片是按「處境」找的（睡不著、焦慮、扛太多…），不是按清單找的。ADR-0008 的 /prayer 按清單組織，需要再補一頁按處境索引《A Prayer For You》系列。

## 決策內容

- 上線 https://travel.xingai.app/prayer/for-you （四語），數據檔 lib/content/prayer-for-you.ts。
- 上線時 7 格（每格一支已公開片＋對應經文）：睡不著 yCI0Wv3n7gQ（Isaiah 26:3）、焦慮 D6wfaDixavQ（1 Peter 5:7）、疲憊 WwWgYRVlj_E（Matthew 11:28）、想家 40e8-lhMjW8（Psalm 42:8）、需要平安 Za5qO1DWRlA（Psalm 4:8）、需要力量 3mc7JCtYaUY（Psalm 143:8）、感恩 AsWmISdSJfU（Psalm 107:1）。
- 嚴守「核實才上格」：兩格刻意留空——「等答案」EP05 有發布包但核不到可驗證公開 ID，不放；海港 P1 待 2026-10-16 23:00 公開後由 cron prayer-foryou-harbour-add-20261016（23:10）補入平安格。
- 舊記錄的 Can't Sleep 上傳 ID RWOX8bR8_uI 已不公開，禁用；現行公開版為 yCI0Wv3n7gQ。
- 入口：/prayer 頁引導卡＋主導航 More 下拉＋手機抽屜。

## 誰拍板

星哥拍板（「能今天做的開始做」，2026-10-16 16:39）。

## 影響與後果

- 後續演進：ADR-0013（處境擴充）、ADR-0014（改數據驅動自動化）均建在本頁之上。

## 關聯

- Commit：1b93cb1
- 文件：未記錄（數據檔 lib/content/prayer-for-you.ts 於站 repo 內）
- 相關 ADR：ADR-0008（/prayer 母頁）、ADR-0013、ADR-0014
