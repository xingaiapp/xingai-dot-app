# ADR-0019：invest 持倉研究報告文章線 /portfolio-daily 上線（首篇 2026-10-16）

- **編號**：ADR-0019
- **日期**：2026-10-16
- **網站**：invest.xingai.app
- **狀態**：Accepted

## 背景與原因

持倉日報自 2026-10-16 起升級為「長＋短」雙片日更：短版 40 秒記分牌（中英雙版）、長版焦點深講（首支焦點 TSLA＋TSLL）。內容只活在 YouTube 上，搜尋引擎抓不到、觀眾也無法回訪查閱。星哥 2026-10-16 22:06 親自指示：「研究報告可以放到網站上，根據這兩個長短的片子。」與周報文章版（ADR-0009）同理：影片流量沉澱為可搜尋、可回訪的文字資產。

## 決策內容

- 新文章線 **/portfolio-daily/<日期>**，首篇 https://invest.xingai.app/portfolio-daily/2026-10-16（＋/zh、/ko 三語）上線；版式照 ADR-0009 周報文章版模板：頁首 facade 嵌片、分節、引用清單、JSON-LD、頁尾免責齊備。
- **內容邊界**：只沉澱當日長＋短視頻已核實的內容——今日總況、全名單分組記分牌（79 支，收盤漲跌%）、焦點組深講、2x 每日重置與震盪損耗結構講解、下一步觀察點。數字全用當日製作核對清單的雙源核實值（收盤口徑）；核不實者（如 HYPE 無可雙源核對的收盤價）只列名、不寫數字。
- **隱私邊界**：只報百分比，永不出現股數、金額、成本——持倉視頻的定版口徑，網站文章同守。
- **技術口徑**：靜態文章頁（照周報先例），不即時抓外部數據，符合 cache 約定（ADR-0016）；lib/public-locale.ts 加 `/portfolio-daily` 前綴（可索引＋免免責彈窗攔截，與 /wall-street-views 同等待遇，純加法）；sitemap 加一行。
- **嵌片**：facade 點擊才載入（ADR-0004）。首篇先嵌當日短版（按語系映射：zh 用中文版、en/ko 用英文版）；長版發布後補嵌——頁面已預留長版位，補嵌只需改一處視頻 ID 常量。
- **定為常規**：工作日持倉長短片出片日，同步出當日報告一篇；長版 ID 出來後回補嵌入並核實。

## 誰拍板

星哥拍板（2026-10-16 22:06 親自交辦）。

## 影響與後果

- invest 多一條日更文章線，持倉內容自此「雙片＋文章」三件套出品。
- 遺留待辦：①首篇長版今晚仍在製作，發布後須回補嵌入並核實（頁面已預留位）；②/portfolio-daily 索引頁與首頁入口未做——照「新東西先子站驗證、主站保持乾淨」原則，先跑幾期再議。

## 關聯

- Commit：xingaiapp/xingai-invest-ai `96b55c2`（新頁面＋public-locale 前綴＋sitemap 一行）
- 文件：首篇數據核對清單 ~/workspace/goals/weekly-market-recap-video/hidden_files/holdings-long-2026-10-16/data/data_check.md；持倉快照 ~/workspace/goals/weekly-market-recap-video/hidden_files/holdings-snapshot-2026-10-16.json
- 相關 ADR：ADR-0009（周報文章版模板，本線版式先例）、ADR-0004（facade 嵌入標準）、ADR-0016（cache 約定）、ADR-0003（免責與結構風險口徑）
