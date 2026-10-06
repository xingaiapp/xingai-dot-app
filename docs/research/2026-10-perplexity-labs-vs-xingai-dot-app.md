# xingai.app 对比 Perplexity / Google Labs（2026-10 实测）

> 测试日期：2026-10-05 · 测试人：Claude（代 Xing）· 均为未登录、生产环境

## 1. 方法与局限

- **场景**（取自 xingai.app 首页自己的示例 “5 days in March, under $2,000”）：
  从 SFO 出发，2027-03-10 → 03-14，情侣，总预算 $2,000，温暖、可步行、好吃；**硬约束：单程飞行不超过 8 小时**；要求 1 个推荐 + 2 个备选 + 为什么排除其他。
- **路径**：手机宽度 375×812 起测，之后看桌面。从各自首页出发，记录到“第一个真实结果”的每一步。
- **对比对象**：
  - **Perplexity**（perplexity.ai）——访客心里真正的替代品：同一个问题直接问通用 AI。
  - **Google Labs**（labs.google）——结构最像的“一家公司、多个 AI 产品”的门户页。
- **局限**：
  - 未登录、未接受任何 Cookie（Perplexity 选了 “Decline optional”）。
  - Travel AI 在本次测试中**没能产出结果**（见 §4），所以“推荐质量”这一行我方是空的，不是我方赢或输。
  - 我在排查时额外打了 1 次空请求到 `/api/compare`（返回 400），它也计入了每日额度；真实用户的失败路径是 2 次 502 + 1 次 429。
  - Perplexity 的回答随时间与模型变化，单次结果不代表稳定水平。

## 2. 定位：是否直接竞品？

| | 回答的问题 | 旅程阶段 | 市场信号 |
|---|---|---|---|
| **xingai.app** | “XingAI 是什么？我该先试哪个决策系统？” —— 门户 / 品牌页，本身不产出答案 | 了解 → 分流到子产品 | 英 / 中 / 韩，USD，美国 |
| **Perplexity** | “直接告诉我答案，并给出处” | 决策本身 | 英语为主，全球 |
| **Google Labs** | “Google 有哪些 AI 实验可以试？” | 了解 → 分流 | 英语，全球 |

**结论（事实 + 推断）**：
- xingai.app 是门户，**结构上的直接对手是 Google Labs 这类“产品目录首页”**。
- 但首页卖的是“不是聊天，而是会研究、会反驳、给证据的决策系统”。对一个普通访客来说，这个承诺的**真实替代品是 Perplexity / ChatGPT**。所以首页的说服力最终由子产品能不能比 Perplexity 更好地回答同一个问题来决定。

## 3. 对比表

标注：**实测** = 本次浏览器测得；**自述** = 对方自己页面的说法；**未知** = 没测到。

| 维度 | Perplexity | Google Labs | xingai.app（→ Travel AI） | 谁更强 |
|---|---|---|---|---|
| 定位 / 首屏一句话 | 一个输入框 “What do you want to know?”（实测） | “The home for AI experiments at Google”，首屏即产品卡（实测） | “AI Decision Systems — Not just chat.” + 一段 90 词介绍（实测） | Labs 最直白；我方首屏信息量偏大 |
| 首屏到“能用”的步数（手机） | 关闭全屏 App 安装弹窗 + Cookie 横幅 → 输入 → 点发送（Return 在手机上是换行）≈ 3 步（实测） | 开场动画约 2–3 秒白屏文字 → 卡片 “Try It Now” 1 步进产品（实测） | 首页 → “Try it in Travel AI” 进的是**介绍页**而非产品 → “Live demo” 新标签打开 → “Make My Travel Decision” 锚点 → 填表 → “Compare destinations” ≈ 5 步（实测） | Perplexity / Labs |
| 首个结果耗时 | 提交后约 15 秒出完整答案（“Researched 3s”）（实测） | 不适用（门户） | **未出结果**：2 次 502，然后 429 当日额度用完（实测） | Perplexity |
| 输入方式 | 一句自然语言（实测） | 不适用 | 结构化表单，已预填示例值；“Trip notes” 可写自由约束（实测） | 各有利：表单更不易漏信息，自由文本更快 |
| 推荐 + 备选 + 排除理由 | 墨西哥城为首选；巴亚尔塔港、圣地亚哥为备选，各有 “Why it is not the top pick”（实测） | 不适用 | 未知（未出结果）；产品自述 “1 winner · 2 alternatives · clear trade-offs” | Perplexity（我方未能证明） |
| 硬约束（≤ 8 小时） | 遵守，并写明各航线时长 4h15–4h45 / 3h37 / 1h45（实测） | 不适用 | 未知；Trip Snapshot 把它摘要成 “Avoid: Long flights, extreme heat”——**数字 8 小时没出现在摘要里**（实测） | Perplexity |
| 可验证性 / 来源 | 每段带来源标签（google、aeromexico、usnews 等）（实测） | 不适用 | 未知 | Perplexity |
| 价格数据 | 预算分项表 $1,750–2,000，明确说是估算不是报价（实测） | 不适用 | 未知；产品页自述“合作方搜索链接” | Perplexity |
| 免费额度 / 墙 | 未登录即可得完整答案；有 “Open in App” 引导（实测） | 无墙（实测） | 无注册墙，但**每 IP 每天 3 次**，失败也扣次数（实测 + 代码确认） | Perplexity / Labs |
| 多语言 | 未知 | 英语 | 门户 en/zh/ko，Travel 还有 ES（实测） | 我方 |
| 信任 / 免责 | 预算说明 “target, not a fare quote”（实测） | 隐私 / 条款在页脚（实测） | 首页 FAQ 写明 “Outputs are informational”，/legal 齐全（实测） | 我方略强（显式、跨产品一致） |
| SEO / AEO | 未测 | 未测 | `llms.txt`、`sitemap.xml`、`robots.txt`、`/zh`、`/ko` 均 200；首页有面向 AI 搜索的 “Quick answers”（实测） | 我方做得完整 |
| 速度（HTML） | 未测（curl 被 403） | TTFB ~0.07s，HTML 50 KB（实测） | TTFB ~0.21s，HTML 125 KB，load ~170ms（缓存后）（实测） | 都很快 |
| 首页长度（手机） | 1 屏 | ~5 屏（实测） | **~11 屏、10 个区块**（实测） | Labs |
| 视觉一致性（门户 → 产品） | 不适用 | 统一 Google 风格 | 门户深色渐变 → Travel 浅色照片风，字体、配色、导航都换了（实测） | Labs |
| 历史 / 分享 | 每次问答生成可分享链接（实测） | 不适用 | Travel 本地浏览器历史（自述，产品页） | Perplexity |

## 4. 我方自己的问题（可复现）

1. **Travel AI 推荐接口失败（严重）**
   - 复现：手机宽度打开 `https://travel.xingai.app/decide` → 保持预填值或按 §1 场景修改 → 点 “Compare destinations →”。
   - 结果：`POST /api/compare` 返回 **502**，界面显示 “We couldn't complete the recommendation. Try again.”。两次都失败。
   - 代码层面：路由在模型调用失败（含 1 次自动重试）后返回 `OPENAI_ERROR` / 502。根因（模型 key / 配额 / 响应校验）需要看线上日志，本次未能确认。
   - 影响：首页 “From question to your decision” 演示的就是这个产品，**首页承诺的唯一可点链路走不通**。

2. **失败也扣每日额度（严重）**
   - 每 IP 每天 3 次（`lib/rate-limit.ts`），计数在调模型**之前**发生，502 也算一次。
   - 结果：真实用户遇到 2 次 502 后再点一次就看到 “You've reached today's decision limit. Try again tomorrow.”，一次成功结果都没拿到就被锁一天。

3. **额度用完后仍显示 “Try again” 按钮（中）**
   - 429 时界面同时出现 “Try again tomorrow” 文案和 “Try again” 按钮，点了只会再 429。

4. **硬约束被摘要弱化（中）**
   - Trip notes 写 “no flight longer than 8 hours each way”，Trip Snapshot 显示为 “Avoid: Long flights, extreme heat”：丢了 8 小时这个数字，还多了一条用户没说的 “extreme heat”。用户无法从摘要确认硬约束被理解了。

5. **首页 “Try it in Travel AI →” 不直达产品（中）**
   - 链到 `xingai.app/apps/travel-ai`（介绍 + 定价 + 路线图页），还要再点 “Live demo” 才进产品，且在新标签打开。首页示例问题（3 月 / $2,000）也没有带进表单。

6. **“Live” 与 “Live demo” 用词不一致（低）**
   - 首页卡片标 “Live”，产品介绍页按钮写 “Live demo / Try free demo”，FAQ 又把另一批产品叫 “Public demos”。访客难判断哪些是正式可用。

7. **门户与子产品视觉断层（低，但属品牌层面）**
   - 门户深色 + 紫蓝渐变，Travel 浅色 + 照片 + 衬线大标题；主题偏好也没有跨子域延续。

8. **首页过长（低）**
   - 手机约 11 屏、10 个区块（产品、流程、System Spine、五位 Agent、联合创始人、FAQ、服务、CTA…）。Labs 约 5 屏，且只放产品。

## 5. 启示（事实 / 推断 / 建议分开）

1. **事实**：同一场景下，Perplexity 未登录 15 秒内给出了“1 推荐 + 2 备选 + 排除理由 + 出处 + 预算表”，正好是 xingai.app 首页描述的 “research → challenge → evidence → you decide”。
   **推断**：首页的差异化如果靠文案讲，很容易被访客当成“Perplexity 也能做”。差异必须靠子产品**跑通并更好**来证明。
   **建议（待 Xing 决定）**：先修 §4-1、§4-2（失败不扣额度），再考虑任何首页改版。

2. **事实**：Labs 首页每张卡都是 “Try It Now” 直达产品；我方首页最主要的演示链接先到介绍页。
   **建议（待 Xing 决定）**：首页 “Try it in Travel AI” 直达 `travel.xingai.app/decide`，并可选地把示例场景作为预填参数带过去。介绍页保留在 /apps（不删现有功能，符合升级规则）。

3. **推断**：我方真正能拉开距离的是 Perplexity 没有的东西：结构化表单保证不漏约束、明确的“不替你订/不替你买”边界、en/zh/ko 一致的免责与 SEO/AEO。
   **建议（待 Xing 决定）**：在 Travel 结果里把硬约束**原样回显并逐条打勾**（“≤ 8h 单程 ✓ 4h30”），这是对 Perplexity 最可见的优势，也直接修 §4-4。

4. **事实**：首页 ~11 屏，团队 / 联合创始人 / System Spine 占一半以上篇幅。
   **建议（待 Xing 决定）**：不删除这些区块，但可以把顺序调整为“产品可用性先于团队故事”，或把 Spine / Agent 折叠为一个入口区块，缩短到首个可用产品的滚动距离。

5. **事实**：门户与 Travel 视觉体系不同。
   **建议（待 Xing 决定）**：不重做任何一方；只统一跨产品的“桥”元素（顶栏 logo、主题延续、CTA 颜色），让跳转时不像换了一家公司。

## 6. 来源

- https://xingai.app/ 、https://xingai.app/apps/travel-ai （实测，2026-10-05）
- https://travel.xingai.app/decide （实测；`/api/compare` 502 / 429 响应）
- https://invest.xingai.app/ai-map （实测，可正常加载）
- https://www.perplexity.ai/ （实测，未登录，Decline optional cookies）
- https://labs.google/ （实测）
