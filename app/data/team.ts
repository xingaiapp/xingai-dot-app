/**
 * Content for the /team page.
 *
 * Two layers, never mixed: real co-founders (Xing, Allen) and the agent
 * roles. The agents personify how we work. They are not employees, and the
 * orchestrator that would run them as one system is still planned (see
 * `ecosystem.ts`). Each agent points at the shipped product where its job is
 * visible today, or says "planned" when nothing ships yet.
 *
 * Character Bible poster: `team-persona-poster-{en,zh,ko}.webp` — 星哥 + five
 * leaders in castLeaderOrder with their nicknames; same image as /about. Full org-chart posters live in public/team/
 * but are not shown on /team yet.
 */

import type { Locale } from "../i18n/translations";

export type AgentId = "second-master" | "joker" | "lady-bull" | "sweetie" | "hua-an";

export type AgentStage = "demo" | "live" | "planned";

export type AgentRole = {
  id: AgentId;
  avatar: string;
  /** Original Chinese name; shown under the display name on en / ko pages. */
  zhName: string;
  /** Product slug in `apps.ts` where this job is visible today. */
  seenInSlug: string;
  stage: AgentStage;
};

export const agentRoles: AgentRole[] = [
  {
    id: "second-master",
    avatar: "/team/second-master.webp",
    zhName: "二当家",
    seenInSlug: "investment-assistant",
    stage: "live",
  },
  {
    id: "joker",
    avatar: "/team/joker.webp",
    zhName: "至尊宝",
    seenInSlug: "evidence-engine",
    stage: "planned",
  },
  {
    id: "lady-bull",
    avatar: "/team/lady-bull.webp",
    zhName: "牛夫人",
    seenInSlug: "evidence-engine",
    stage: "demo",
  },
  {
    id: "sweetie",
    avatar: "/team/sweetie.webp",
    zhName: "小甜甜",
    seenInSlug: "meal-coach",
    stage: "demo",
  },
  {
    id: "hua-an",
    avatar: "/team/hua-an.webp",
    zhName: "华安（唐伯虎）",
    seenInSlug: "engineering-coach",
    stage: "planned",
  },
];

/** Character Bible row order (left → right under Xing Ge). */
export const castLeaderOrder: AgentId[] = [
  "joker",
  "sweetie",
  "lady-bull",
  "second-master",
  "hua-an",
];

export const visionAvatar = "/team/xing-ge.webp";

export type AgentCopy = {
  name: string;
  title: string;
  /** Character nickname (e.g. 嘴最硬). */
  nickname: string;
  tag: string;
  quote: string;
  body: string;
  specialties: string[];
  asks: string[];
  seenIn: string;
};

export type FlowFace = AgentId | "vision" | "result";

export type FlowStep = {
  who: string;
  what: string;
  kind: "human" | "agent" | "result";
  /** Optional side note, e.g. the loop back to research. */
  note?: string;
  /** Avatars for this step (HTML cast faces, not poster). */
  faces?: FlowFace[];
};

export type TeamCopy = {
  eyebrow: string;
  heading: string;
  lead: string[];
  honesty: string;
  peopleHeading: string;
  peopleLead: string;
  agentsHeading: string;
  agentsLead: string;
  asksLabel: string;
  seenInLabel: string;
  stageLabels: Record<AgentStage, string>;
  agents: Record<AgentId, AgentCopy>;
  flowHeading: string;
  flowLead: string;
  flow: FlowStep[];
  flowLoop: string;
  banterHeading: string;
  banter: { who: AgentId; line: string }[];
  /** Xing Ge watching the argument from the side. */
  banterWatcherName: string;
  banterWatcherCaption: string;
  /** HTML cast lineup under the hero (not the poster). */
  castMission: string;
  castFooter: string;
  visionName: string;
  visionTitle: string;
  visionZhName: string;
  /** Behind-the-scenes Character Bible poster — share / download. */
  easterEggHeading: string;
  easterEggLead: string;
  easterEggAlt: string;
  easterEggSrc: string;
  easterEggDownload: string;
  outroStory: string;
  outroAbout: string;
};

/** Full org posters (en/zh/ko) kept under public/team/ for a future org-chart section. */

const en: TeamCopy = {
  eyebrow: "Meet the XingAI team",
  heading: "Five AI agents. One human decision.",
  lead: [
    "We don't want one AI to be the researcher, the critic, the checker, the builder and the decider at the same time.",
    "So each agent gets one job. They research, push back, verify, care about the user, and ship the tools. A person makes the call.",
  ],
  honesty:
    "The five agents are characters for how we work, not employees. Xing Ge (星哥) sits above them as Vision — the human who sets direction. Hua An (华安) is Tech & Tools — code, AI tooling, automation. Some jobs already run inside our products; the orchestrator that would run the agents together is still planned.",
  peopleHeading: "The people behind XingAI",
  peopleLead: "Two co-founders build every product and answer for it.",
  agentsHeading: "The agents inside XingAI",
  agentsLead: "One job each. Where you can see that job today is listed on every card.",
  asksLabel: "Usually asks",
  seenInLabel: "See it in",
  stageLabels: { live: "Live", demo: "Demo", planned: "Planned" },
  agents: {
    "second-master": {
      name: "Second Master",
      title: "Research & Intelligence Lead",
      nickname: "Scapegoat + Intel",
      tag: "Agent · Evidence",
      quote: "You two keep arguing. I'll go look it up.",
      body: "Goes to primary sources, gathers the data and cross-checks it before anyone gets to have an opinion.",
      specialties: ["Research", "Primary sources", "Data gathering", "Cross-checking"],
      asks: ["Where did this number come from?", "Is there a filing for that?"],
      seenIn: "Invest AI Industry Map: every layer cites public filings.",
    },
    joker: {
      name: "Joker",
      title: "Chief Challenger",
      nickname: "Sharpest tongue",
      tag: "Agent · Red team",
      quote: "When everyone agrees, I start working.",
      body: "Looks for the hole. A conclusion doesn't become true because the other agents like it.",
      specialties: ["Critical thinking", "Red team", "Counter-evidence", "Assumption testing"],
      asks: ["Says who?", "Is there evidence against this?", "What if we're wrong?"],
      seenIn: "Evidence Engine: counter-evidence retrieval is on the roadmap, not shipped yet.",
    },
    "lady-bull": {
      name: "Lady Bull",
      title: "Chief Accountability Officer",
      nickname: "Best at chasing blame",
      tag: "Agent · Verify",
      quote: "Looks done ≠ actually done.",
      body: "She doesn't ask how much got done. She asks whether it passed. No citation, no claim.",
      specialties: ["Verification", "Acceptance criteria", "Evidence validation", "Freshness"],
      asks: ["Was it checked?", "Which source backs this sentence?"],
      seenIn: "Evidence Engine: claim → evidence → citation checks.",
    },
    sweetie: {
      name: "Sweetie",
      title: "User Advocate",
      nickname: "Best at charming",
      tag: "Agent · Human context",
      quote: "An answer is useless until someone can act on it.",
      body: "Pulls the research back to the person asking: what are they actually trying to solve, and what do they do next?",
      specialties: ["User intent", "Context", "UX", "Next action"],
      asks: ["What does the user really need?", "Is this too complicated?", "What's the next step?"],
      seenIn: "Eating Decision: one question, one next meal.",
    },
    "hua-an": {
      name: "Hua An",
      title: "Tech & Tools Lead",
      nickname: "Code brush",
      tag: "Agent · Build",
      quote: "If we do this twice, I'll automate it.",
      body: "Turns decisions into running systems — code, AI tools, and the boring glue that keeps products reliable.",
      specialties: ["Implementation", "AI tooling", "Automation", "Tech support"],
      asks: ["Can we ship a thin slice?", "What breaks if this scale doubles?", "Is this still manual?"],
      seenIn: "Engineering Communication Coach: senior engineering craft is on the roadmap.",
    },
  },
  flowHeading: "They don't always agree. That's the point.",
  flowLead: "A decision goes through every role once, and back to research as often as it needs.",
  flow: [
    { who: "Xing", what: "Defines the question", kind: "human", faces: ["vision"] },
    {
      who: "Second Master",
      what: "Researches and brings evidence",
      kind: "agent",
      faces: ["second-master"],
    },
    {
      who: "Joker + Lady Bull",
      what: "Challenge it and check it",
      kind: "agent",
      note: "Not good enough? Back to research.",
      faces: ["joker", "lady-bull"],
    },
    { who: "Sweetie", what: "Turns it into one next step", kind: "agent", faces: ["sweetie"] },
    {
      who: "Hua An",
      what: "Builds tools and automates the path",
      kind: "agent",
      faces: ["hua-an"],
    },
    { who: "Xing", what: "Makes the decision", kind: "human", faces: ["vision"] },
    { who: "Result", what: "What actually happened", kind: "result", faces: ["result"] },
  ],
  flowLoop: "Learn from the result, then ask a better question.",
  banterHeading: "A typical meeting",
  banter: [
    { who: "joker", line: "I don't buy it." },
    { who: "lady-bull", line: "Evidence?" },
    { who: "sweetie", line: "Hey — can a real person use this?" },
    { who: "second-master", line: "…I'll go check." },
    { who: "hua-an", line: "I can wire a check for that." },
  ],
  banterWatcherName: "Xing",
  banterWatcherCaption: "Smiling. Watching them argue.",
  castMission: "Five personalities. One mission.",
  castFooter: "Five Leaders · One Team · One Mission",
  visionName: "Xing",
  visionTitle: "Vision",
  visionZhName: "星哥",
  easterEggHeading: "Five personalities. One mission.",
  easterEggLead:
    "The cast above is live HTML. This poster is the shareable Character Bible — same six characters, for download and social.",
  easterEggAlt:
    "XingAI team poster: Xing above five leaders with their nicknames \u2014 Joker (sharpest tongue), Sweetie (best at charming), Lady Bull (best at chasing blame), Second Master (scapegoat + intel) and Hua An (code brush).",
  easterEggSrc: "/team/team-persona-poster-en.webp",
  easterEggDownload: "Download poster",
  outroStory: "What we're building",
  outroAbout: "About XingAI",
};

const zh: TeamCopy = {
  eyebrow: "认识 XingAI 团队",
  heading: "五个 AI Agent，一个人来决定",
  lead: [
    "我们不希望一个 AI 同时扮演研究员、挑战者、验证者、工程师和决策者。",
    "所以每个 Agent 只做一件事。他们会研究、质疑、验收、站在用户这边，并把工具做出来。最后，由人做决定。",
  ],
  honesty:
    "这五个 Agent 是我们工作方法的拟人化，不是员工。星哥负责愿景与拍板——方向由人定。华安（唐伯虎）负责代码、技术与工具。他们的部分工作已经在产品里运行；把他们串成一个整体的编排器仍在规划中。",
  peopleHeading: "XingAI 背后的人",
  peopleLead: "两位联合创始人负责每一个产品，也为它负责。",
  agentsHeading: "XingAI 里的 Agent",
  agentsLead: "每人一份工作。每张卡片都写着：今天在哪能看到它。",
  asksLabel: "常问",
  seenInLabel: "在哪能看到",
  stageLabels: { live: "已上线", demo: "演示版", planned: "规划中" },
  agents: {
    "second-master": {
      name: "二当家",
      title: "研究与情报负责人",
      nickname: "背锅侠 + 情报员",
      tag: "Agent · 证据",
      quote: "你们先吵，我去查。",
      body: "先去一手来源找数据、交叉核对，然后大家才有资格发表意见。",
      specialties: ["研究", "一手来源", "数据收集", "交叉核对"],
      asks: ["这个数字从哪来的？", "有没有公开文件？"],
      seenIn: "Invest AI 产业地图：每一层都引用公开文件。",
    },
    joker: {
      name: "至尊宝",
      title: "首席挑战官",
      nickname: "嘴最硬",
      tag: "Agent · 红队",
      quote: "大家都同意的时候，我开始工作。",
      body: "专门找问题。不会因为其他 Agent 都认为一个答案正确，就接受这个答案。",
      specialties: ["批判性思考", "红队", "反面证据", "假设检验"],
      asks: ["凭什么？", "有没有相反证据？", "如果我们错了呢？"],
      seenIn: "Evidence Engine：反面证据检索在路线图上，还没上线。",
    },
    "lady-bull": {
      name: "牛夫人",
      title: "首席追责官",
      nickname: "最会追责",
      tag: "Agent · 验收",
      quote: "看起来做完了 ≠ 真的做完了。",
      body: "她不问做了多少，她问验收了没有。没有引用，就没有结论。",
      specialties: ["验证", "验收标准", "证据核验", "时效性"],
      asks: ["验收了吗？", "这句话的出处是哪一条？"],
      seenIn: "Evidence Engine：结论 → 证据 → 引用逐条核对。",
    },
    sweetie: {
      name: "小甜甜",
      title: "首席用户体验官",
      nickname: "最会哄人",
      tag: "Agent · 用户视角",
      quote: "答案没用，用户能采取行动才有用。",
      body: "把复杂的研究拉回到提问的人身上：他真正想解决什么？下一步做什么？",
      specialties: ["用户意图", "上下文", "体验", "下一步行动"],
      asks: ["用户真正需要什么？", "是不是太复杂了？", "下一步到底做什么？"],
      seenIn: "Eating Decision：一个问题，给出下一餐。",
    },
    "hua-an": {
      name: "华安（唐伯虎）",
      title: "技术与工具负责人",
      nickname: "最会写码",
      tag: "Agent · 工程",
      quote: "做两次的事，第三次我写成工具。",
      body: "把决定落成能跑的系统——写代码、搭 AI 工具、把重复劳动自动化。",
      specialties: ["技术实现", "AI 工具", "自动化", "技术支持"],
      asks: ["能不能先做薄切片？", "量翻倍会不会崩？", "这步还在手搓吗？"],
      seenIn: "Engineering Communication Coach：工程沟通能力在路线图上。",
    },
  },
  flowHeading: "他们不总是意见一致。这正是重点。",
  flowLead: "一个决定会经过每个角色一次；需要的话，可以反复打回去重查。",
  flow: [
    { who: "星哥", what: "定义问题", kind: "human", faces: ["vision"] },
    { who: "二当家", what: "研究，带回证据", kind: "agent", faces: ["second-master"] },
    {
      who: "至尊宝 + 牛夫人",
      what: "质疑它，验收它",
      kind: "agent",
      note: "不够？打回二当家重查。",
      faces: ["joker", "lady-bull"],
    },
    { who: "小甜甜", what: "综合成一个下一步", kind: "agent", faces: ["sweetie"] },
    { who: "华安", what: "把路径做成工具与自动化", kind: "agent", faces: ["hua-an"] },
    { who: "星哥", what: "做决定", kind: "human", faces: ["vision"] },
    { who: "结果", what: "实际发生了什么", kind: "result", faces: ["result"] },
  ],
  flowLoop: "从结果里复盘，再问一个更好的问题。",
  banterHeading: "日常开会现场",
  banter: [
    { who: "joker", line: "我不信。" },
    { who: "lady-bull", line: "证据呢？" },
    { who: "sweetie", line: "别吵了——用户听得懂吗？" },
    { who: "second-master", line: "……我去查。" },
    { who: "hua-an", line: "我可以接一条自动校验。" },
  ],
  banterWatcherName: "星哥",
  banterWatcherCaption: "笑着看他们吵。",
  castMission: "五种性格 · 一个使命",
  castFooter: "五位负责人 · 一个团队 · 一个使命",
  visionName: "星哥",
  visionTitle: "愿景",
  visionZhName: "星哥",
  easterEggHeading: "五种性格 · 一个使命",
  easterEggLead: "上面是网页班底。这张海报是可下载、可分享的 Character Bible——同一套六人。",
  easterEggAlt:
    "XingAI 团队海报：星哥（神秘大Boss）在上，下面是五位负责人——至尊宝（嘴最硬）、小甜甜（最会哄人）、牛夫人（最会追责）、二当家（背锅侠 + 情报员）和华安（最会写码）。",
  easterEggSrc: "/team/team-persona-poster-zh.webp",
  easterEggDownload: "下载海报",
  outroStory: "我们在造什么",
  outroAbout: "关于 XingAI",
};

const ko: TeamCopy = {
  eyebrow: "XingAI 팀 소개",
  heading: "AI 에이전트 다섯, 결정은 사람이",
  lead: [
    "AI 하나가 연구자, 비판자, 검증자, 엔지니어, 결정자를 동시에 맡는 걸 원하지 않습니다.",
    "그래서 에이전트마다 일을 하나씩 줍니다. 조사하고, 반박하고, 검증하고, 사용자를 챙기고, 도구를 만듭니다. 결정은 사람이 합니다.",
  ],
  honesty:
    "다섯 에이전트는 우리가 일하는 방식을 캐릭터로 표현한 것이며 직원이 아닙니다. 싱게(星哥)가 Vision으로 방향을 잡고, 화안(华安)이 Tech & Tools를 맡습니다. 일부 역할은 이미 제품 안에서 동작하고, 이들을 하나로 묶는 오케스트레이터는 아직 계획 단계입니다.",
  peopleHeading: "XingAI를 만드는 사람들",
  peopleLead: "두 공동 창립자가 모든 제품을 만들고 책임집니다.",
  agentsHeading: "XingAI 안의 에이전트",
  agentsLead: "각자 한 가지 일. 오늘 어디서 볼 수 있는지 카드마다 적어 두었습니다.",
  asksLabel: "자주 묻는 말",
  seenInLabel: "볼 수 있는 곳",
  stageLabels: { live: "라이브", demo: "데모", planned: "계획됨" },
  agents: {
    "second-master": {
      name: "Second Master",
      title: "리서치 · 인텔리전스 리드",
      nickname: "총알받이 + 정보원",
      tag: "에이전트 · 근거",
      quote: "둘이 먼저 싸워요. 저는 찾아볼게요.",
      body: "누가 의견을 내기 전에 1차 출처로 가서 데이터를 모으고 교차 확인합니다.",
      specialties: ["리서치", "1차 출처", "데이터 수집", "교차 확인"],
      asks: ["이 숫자 어디서 나왔어요?", "공시 자료가 있나요?"],
      seenIn: "Invest AI 산업 지도: 모든 레이어가 공개 공시를 인용합니다.",
    },
    joker: {
      name: "Joker",
      title: "최고 반론 책임자",
      nickname: "입이 제일 세다",
      tag: "에이전트 · 레드팀",
      quote: "모두가 동의할 때 제 일이 시작됩니다.",
      body: "빈틈을 찾습니다. 다른 에이전트가 모두 맞다고 해도 그것만으로 받아들이지 않습니다.",
      specialties: ["비판적 사고", "레드팀", "반대 근거", "가정 검증"],
      asks: ["근거가 뭔데요?", "반대 증거는 없나요?", "우리가 틀렸다면요?"],
      seenIn: "Evidence Engine: 반대 근거 검색은 로드맵에 있으며 아직 출시되지 않았습니다.",
    },
    "lady-bull": {
      name: "Lady Bull",
      title: "최고 책임 추궁관",
      nickname: "추궁 달인",
      tag: "에이전트 · 검증",
      quote: "끝난 것처럼 보인다 ≠ 실제로 끝났다.",
      body: "얼마나 했는지가 아니라 검수를 통과했는지를 묻습니다. 인용 없으면 주장도 없습니다.",
      specialties: ["검증", "완료 기준", "근거 확인", "최신성"],
      asks: ["검수했나요?", "이 문장의 출처는 어느 것이죠?"],
      seenIn: "Evidence Engine: 주장 → 근거 → 인용을 하나씩 확인합니다.",
    },
    sweetie: {
      name: "Sweetie",
      title: "사용자 대변인",
      nickname: "달래기 달인",
      tag: "에이전트 · 사용자 맥락",
      quote: "답은 쓸모없어요. 사용자가 행동할 수 있어야 쓸모 있죠.",
      body: "복잡한 리서치를 질문한 사람에게로 다시 가져옵니다. 이 사람이 정말 해결하려는 건 뭘까? 다음엔 뭘 하지?",
      specialties: ["사용자 의도", "맥락", "UX", "다음 행동"],
      asks: ["사용자에게 정말 필요한 건?", "너무 복잡하지 않나요?", "다음 단계는 뭐죠?"],
      seenIn: "Eating Decision: 질문 하나에 다음 한 끼.",
    },
    "hua-an": {
      name: "Hua An",
      title: "테크 · 툴 리드",
      nickname: "코드 붓",
      tag: "에이전트 · 빌드",
      quote: "두 번 하면, 세 번째는 자동화합니다.",
      body: "결정을 돌아가는 시스템으로 만듭니다 — 코드, AI 도구, 그리고 제품을 안정적으로 붙이는 접착제.",
      specialties: ["구현", "AI 툴링", "자동화", "기술 지원"],
      asks: ["얇게 먼저 낼 수 있나요?", "규모가 두 배면 뭐가 깨지나요?", "아직도 손으로 하나요?"],
      seenIn: "Engineering Communication Coach: 엔지니어링 크래프트는 로드맵에 있습니다.",
    },
  },
  flowHeading: "늘 의견이 같지는 않습니다. 그게 핵심입니다.",
  flowLead: "결정은 모든 역할을 한 번씩 거치고, 필요하면 몇 번이든 리서치로 돌아갑니다.",
  flow: [
    { who: "싱게", what: "질문을 정의합니다", kind: "human", faces: ["vision"] },
    {
      who: "Second Master",
      what: "조사하고 근거를 가져옵니다",
      kind: "agent",
      faces: ["second-master"],
    },
    {
      who: "Joker + Lady Bull",
      what: "반박하고 검증합니다",
      kind: "agent",
      note: "부족하면? 다시 리서치로.",
      faces: ["joker", "lady-bull"],
    },
    { who: "Sweetie", what: "다음 한 걸음으로 정리합니다", kind: "agent", faces: ["sweetie"] },
    { who: "Hua An", what: "도구를 만들고 자동화합니다", kind: "agent", faces: ["hua-an"] },
    { who: "싱게", what: "결정합니다", kind: "human", faces: ["vision"] },
    { who: "결과", what: "실제로 일어난 일", kind: "result", faces: ["result"] },
  ],
  flowLoop: "결과에서 배우고, 더 나은 질문을 합니다.",
  banterHeading: "평소 회의 풍경",
  banter: [
    { who: "joker", line: "못 믿겠어요." },
    { who: "lady-bull", line: "근거는요?" },
    { who: "sweetie", line: "잠깐 — 사용자가 이해할 수 있어요?" },
    { who: "second-master", line: "…찾아볼게요." },
    { who: "hua-an", line: "자동 체크를 붙일 수 있어요." },
  ],
  banterWatcherName: "싱게",
  banterWatcherCaption: "웃으며 구경 중.",
  castMission: "다섯 성격. 하나의 미션.",
  castFooter: "다섯 리더 · 한 팀 · 한 미션",
  visionName: "싱게",
  visionTitle: "Vision",
  visionZhName: "星哥",
  easterEggHeading: "다섯 성격. 하나의 미션.",
  easterEggLead:
    "위는 웹 캐스트입니다. 이 포스터는 같은 여섯 캐릭터의 Character Bible — 다운로드·공유용.",
  easterEggAlt:
    "XingAI 팀 포스터: 싱게 아래 다섯 리더와 별명 \u2014 Joker(입이 제일 세다), Sweetie(달래기 달인), Lady Bull(추궁 달인), Second Master(총알받이 + 정보원), Hua An(코드 붓).",
  easterEggSrc: "/team/team-persona-poster-ko.webp",
  easterEggDownload: "포스터 다운로드",
  outroStory: "우리가 만드는 것",
  outroAbout: "XingAI 소개",
};

const copy: Record<Locale, TeamCopy> = { en, zh, ko };

export function getTeamCopy(locale: Locale): TeamCopy {
  return copy[locale];
}

export function teamTitle(locale: Locale): string {
  if (locale === "zh") return "团队：五个 AI Agent，一个人来决定";
  if (locale === "ko") return "팀: AI 에이전트 다섯, 결정은 사람이";
  return "Team: Five AI agents, one human decision";
}

export function teamDescription(locale: Locale): string {
  if (locale === "zh") {
    return "XingAI 由 Xing 和 Allen 联合创立。五个 AI Agent——二当家（研究）、至尊宝（质疑）、牛夫人（验收）、小甜甜（用户视角）、华安（技术与工具）——加上星哥定方向，最终决定由人来做。";
  }
  if (locale === "ko") {
    return "XingAI는 Xing과 Allen이 공동 창립했습니다. 리서치·반론·검증·사용자·테크 다섯 에이전트와 Vision(星哥)이 일하는 방식이며, 최종 결정은 사람이 합니다.";
  }
  return "XingAI is co-founded by Xing and Allen. Five AI agent roles — research, challenge, verify, user context and tech & tools — plus Xing Ge for Vision describe how we work. A person makes the final decision.";
}
