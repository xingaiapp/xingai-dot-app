/**
 * Content for the /team page.
 *
 * Two layers, never mixed: real co-founders (Xing, Allen) and the four agent
 * roles. The agents personify how we work. They are not employees, and the
 * orchestrator that would run them as one system is still planned (see
 * `ecosystem.ts`). Each agent points at the shipped product where its job is
 * visible today, or says "planned" when nothing ships yet.
 */

import type { Locale } from "../i18n/translations";

export type AgentId = "second-master" | "joker" | "lady-bull" | "sweetie";

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
];

export type AgentCopy = {
  name: string;
  title: string;
  tag: string;
  quote: string;
  body: string;
  specialties: string[];
  asks: string[];
  seenIn: string;
};

export type FlowStep = {
  who: string;
  what: string;
  kind: "human" | "agent" | "result";
  /** Optional side note, e.g. the loop back to research. */
  note?: string;
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
  outroStory: string;
  outroAbout: string;
};

const en: TeamCopy = {
  eyebrow: "Meet the XingAI team",
  heading: "Four AI agents. One human decision.",
  lead: [
    "We don't want one AI to be the researcher, the critic, the checker and the decider at the same time.",
    "So each agent gets one job. They research, push back, argue and verify. A person makes the call.",
  ],
  honesty:
    "The four agents are characters for how we work, not employees. Some of their jobs already run inside our products; the orchestrator that would run them together is still planned.",
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
      tag: "Agent · Human context",
      quote: "An answer is useless until someone can act on it.",
      body: "Pulls the research back to the person asking: what are they actually trying to solve, and what do they do next?",
      specialties: ["User intent", "Context", "UX", "Next action"],
      asks: ["What does the user really need?", "Is this too complicated?", "What's the next step?"],
      seenIn: "Eating Decision: one question, one next meal.",
    },
  },
  flowHeading: "They don't always agree. That's the point.",
  flowLead: "A decision goes through every role once, and back to research as often as it needs.",
  flow: [
    { who: "Human", what: "Defines the question", kind: "human" },
    { who: "Second Master", what: "Researches and brings evidence", kind: "agent" },
    {
      who: "Joker + Lady Bull",
      what: "Challenge it and check it",
      kind: "agent",
      note: "Not good enough? Back to research.",
    },
    { who: "Sweetie", what: "Turns it into one next step", kind: "agent" },
    { who: "Human", what: "Makes the decision", kind: "human" },
    { who: "Result", what: "What actually happened", kind: "result" },
  ],
  flowLoop: "Learn from the result, then ask a better question.",
  banterHeading: "A typical meeting",
  banter: [
    { who: "joker", line: "I don't buy it." },
    { who: "lady-bull", line: "Evidence?" },
    { who: "second-master", line: "…I'll go check." },
  ],
  outroStory: "What we're building",
  outroAbout: "About XingAI",
};

const zh: TeamCopy = {
  eyebrow: "认识 XingAI 团队",
  heading: "四个 AI Agent，一个人来决定",
  lead: [
    "我们不希望一个 AI 同时扮演研究员、挑战者、验证者和决策者。",
    "所以每个 Agent 只做一件事。他们会研究、质疑、争论、验证。最后，由人做决定。",
  ],
  honesty:
    "这四个 Agent 是我们工作方法的拟人化，不是员工。他们的部分工作已经在产品里运行；把他们串成一个整体的编排器仍在规划中。",
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
      tag: "Agent · 用户视角",
      quote: "答案没用，用户能采取行动才有用。",
      body: "把复杂的研究拉回到提问的人身上：他真正想解决什么？下一步做什么？",
      specialties: ["用户意图", "上下文", "体验", "下一步行动"],
      asks: ["用户真正需要什么？", "是不是太复杂了？", "下一步到底做什么？"],
      seenIn: "Eating Decision：一个问题，给出下一餐。",
    },
  },
  flowHeading: "他们不总是意见一致。这正是重点。",
  flowLead: "一个决定会经过每个角色一次；需要的话，可以反复打回去重查。",
  flow: [
    { who: "人", what: "定义问题", kind: "human" },
    { who: "二当家", what: "研究，带回证据", kind: "agent" },
    {
      who: "至尊宝 + 牛夫人",
      what: "质疑它，验收它",
      kind: "agent",
      note: "不够？打回二当家重查。",
    },
    { who: "小甜甜", what: "综合成一个下一步", kind: "agent" },
    { who: "人", what: "做决定", kind: "human" },
    { who: "结果", what: "实际发生了什么", kind: "result" },
  ],
  flowLoop: "从结果里复盘，再问一个更好的问题。",
  banterHeading: "日常开会现场",
  banter: [
    { who: "joker", line: "我不信。" },
    { who: "lady-bull", line: "证据呢？" },
    { who: "second-master", line: "……我去查。" },
  ],
  outroStory: "我们在造什么",
  outroAbout: "关于 XingAI",
};

const ko: TeamCopy = {
  eyebrow: "XingAI 팀 소개",
  heading: "AI 에이전트 넷, 결정은 사람이",
  lead: [
    "AI 하나가 연구자, 비판자, 검증자, 결정자를 동시에 맡는 걸 원하지 않습니다.",
    "그래서 에이전트마다 일을 하나씩 줍니다. 조사하고, 반박하고, 논쟁하고, 검증합니다. 결정은 사람이 합니다.",
  ],
  honesty:
    "네 에이전트는 우리가 일하는 방식을 캐릭터로 표현한 것이며 직원이 아닙니다. 일부 역할은 이미 제품 안에서 동작하고, 이들을 하나로 묶는 오케스트레이터는 아직 계획 단계입니다.",
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
      tag: "에이전트 · 사용자 맥락",
      quote: "답은 쓸모없어요. 사용자가 행동할 수 있어야 쓸모 있죠.",
      body: "복잡한 리서치를 질문한 사람에게로 다시 가져옵니다. 이 사람이 정말 해결하려는 건 뭘까? 다음엔 뭘 하지?",
      specialties: ["사용자 의도", "맥락", "UX", "다음 행동"],
      asks: ["사용자에게 정말 필요한 건?", "너무 복잡하지 않나요?", "다음 단계는 뭐죠?"],
      seenIn: "Eating Decision: 질문 하나에 다음 한 끼.",
    },
  },
  flowHeading: "늘 의견이 같지는 않습니다. 그게 핵심입니다.",
  flowLead: "결정은 모든 역할을 한 번씩 거치고, 필요하면 몇 번이든 리서치로 돌아갑니다.",
  flow: [
    { who: "사람", what: "질문을 정의합니다", kind: "human" },
    { who: "Second Master", what: "조사하고 근거를 가져옵니다", kind: "agent" },
    {
      who: "Joker + Lady Bull",
      what: "반박하고 검증합니다",
      kind: "agent",
      note: "부족하면? 다시 리서치로.",
    },
    { who: "Sweetie", what: "다음 한 걸음으로 정리합니다", kind: "agent" },
    { who: "사람", what: "결정합니다", kind: "human" },
    { who: "결과", what: "실제로 일어난 일", kind: "result" },
  ],
  flowLoop: "결과에서 배우고, 더 나은 질문을 합니다.",
  banterHeading: "평소 회의 풍경",
  banter: [
    { who: "joker", line: "못 믿겠어요." },
    { who: "lady-bull", line: "근거는요?" },
    { who: "second-master", line: "…찾아볼게요." },
  ],
  outroStory: "우리가 만드는 것",
  outroAbout: "XingAI 소개",
};

const copy: Record<Locale, TeamCopy> = { en, zh, ko };

export function getTeamCopy(locale: Locale): TeamCopy {
  return copy[locale];
}

export function teamTitle(locale: Locale): string {
  if (locale === "zh") return "团队：四个 AI Agent，一个人来决定";
  if (locale === "ko") return "팀: AI 에이전트 넷, 결정은 사람이";
  return "Team: Four AI agents, one human decision";
}

export function teamDescription(locale: Locale): string {
  if (locale === "zh") {
    return "XingAI 由 Xing 和 Allen 联合创立。四个 AI Agent 角色——研究、质疑、验收、用户视角——代表我们的工作方法，最终决定由人来做。";
  }
  if (locale === "ko") {
    return "XingAI는 Xing과 Allen이 공동 창립했습니다. 리서치·반론·검증·사용자 관점의 네 에이전트 역할은 우리가 일하는 방식이며, 최종 결정은 사람이 합니다.";
  }
  return "XingAI is co-founded by Xing and Allen. Four AI agent roles — research, challenge, verify and user context — describe how we work. A person makes the final decision.";
}
