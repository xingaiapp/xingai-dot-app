# ADR-0018：家人本名自公開內容移除（cook 食譜頁＋嫩豆腐鍋英韓片）

- **編號**：ADR-0018
- **日期**：2026-10-16
- **網站**：cook.xingai.app
- **狀態**：Accepted

## 背景與原因

星哥太太不希望自己的名字出現在公開內容里。盤點發現三處公開面寫了她的本名（英文/韓文/中文三種寫法）：

1. 食譜頁 /recipes/kimchi-sundubu 三語文案共 12 處（菜名、介紹、kicker、註記）；全 repo 掃描確認只有 lib/recipe-pages.ts 一個檔案有，其餘頁面無。
2. 嫩豆腐鍋教學片：英文版旁白與字幕第一句唸了英文本名、韓文版第一句寫了韓文本名。
3. 該片發布包的英韓公開文案（標題稿、描述、旁白稿）。

## 決策內容

- **長期口徑**：家人本名一律不進公開內容——影片（旁白/字幕/標題/描述/置頂）、網站頁面、社媒文案都不寫；公開場合只用「Mom／媽媽／엄마」「韓國媽媽」這類稱呼，或直接不提人。本名只留在內部文件與記憶。
- 本次落地：
  - 食譜頁：三語 12 處全改中性說法（如 "Mom's …"、"Homemade …"、"a Korean mom's kitchen"、韓文 엄마의 부엌）；**只改文字，videoId 不動**（新 EN 片 ID 待主代理發布後另行同步）。
  - 教學片英韓兩版：只重渲 chunk 1（旁白＋字幕去人名），素材/切點/版式/BGM 全照舊，新版 QC 全套通過（逐 chunk 門禁、slogan 留尾 EN 0.68s／KR 0.79s、解碼 0 錯誤）。
  - 發布包：EN 描述首句改 "Homemade …"、韓文描述與旁白稿去人名主語，全包 grep 零殘留。

## 誰拍板

星哥拍板（2026-10-16 晚親口傳達太太意願：「把我太太的名字從一開始的對話／內容中去掉，她不太想要她的名字顯示出來」）。

## 影響與後果

- 食譜頁三語已部署並線上抽驗：en/zh/ko 三頁均 200、頁面零人名、新標題在位。
- 已公開的舊 EN 片（ZGu2qNpqXBo）第一句仍含本名——待主代理以重渲版替換發布後，再同步食譜頁 videoId；韓文舊版未發布，直接以重渲版為準（舊檔作廢）。此換片屬發布側待辦，不在本筆範圍。
- 日後所有新內容（含便當系列文案）照本口徑出稿，寫稿時就不寫本名，免再返工。

## 後續註記（2026-10-16 同日晚）

- 換片已完成：舊 EN 片 ZGu2qNpqXBo 已刪除，重渲版新 EN 片 **_GyTUgK8iPc** 已發布；食譜頁 `cook_v1/lib/recipe-pages.ts` 的 kimchi-sundubu 頁 videoId 已同步為新 ID（只改該一值），commit **b9a0c59** 推 main 部署。線上抽驗：en/zh/ko 三頁均 200，facade 縮圖與 embed 均指向新 ID，舊 ID 零殘留。本筆「影響與後果」所列的發布側待辦就此結清。

## 關聯

- Commit：cook repo f94576c（Remove family member's name from kimchi sundubu recipe page (privacy)；基底 ec1dced）；主站 ADR 同步 commit 477d7b1（docs(adr): add ADR-0018；本行 hash 由回填 commit 補入，照 ADR-0017 例）
- 文件：~/workspace/productions/2026-10-16/publish_pack_sundubu_chicken_en.md（發布包，已掃清並註記重渲版）
- 相關 ADR：ADR-0015（食譜頁系統——本筆改其 kimchi-sundubu 頁文案）、ADR-0017（ADR 發布到主站——本筆照其步驟同步）
