import type { Locale } from "../i18n/translations";

/**
 * The engineering agent team that builds and maintains the XingAI websites.
 * Structure is locale-independent; duties and page copy are localized.
 * Source of truth: the founder-confirmed org chart (2026-10-31).
 */

export type AgentAccess = "read-only" | "can-edit" | "gated";

export type AgentMember = {
  id: string;
  access: AgentAccess;
  /** Short duty line, EN — used verbatim in the structure diagram. */
  dutyEn: string;
  duty: Record<Locale, string>;
};

export type AgentGroup = {
  id: "research" | "product" | "growth" | "build" | "release";
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  accent: string;
  members: AgentMember[];
};

export const dispatcher = {
  id: "xing-chief",
  dutyEn: "Splits the stage. Merges P0 / P1 / P2. Does not edit code.",
  duty: {
    en: "Splits the stage. Merges P0 / P1 / P2. Does not edit code.",
    zh: "拆分階段、合併 P0／P1／P2，自己不改程式碼。",
    ko: "단계를 나누고 P0 / P1 / P2로 합친다. 코드는 직접 고치지 않는다.",
  } satisfies Record<Locale, string>,
};

export const agentGroups: AgentGroup[] = [
  {
    id: "research",
    name: { en: "Research", zh: "Research 研究", ko: "Research 리서치" },
    tagline: {
      en: "Facts before opinions.",
      zh: "先有事實，再有意見。",
      ko: "의견보다 사실이 먼저.",
    },
    accent: "#2675ff",
    members: [
      {
        id: "xing-researcher",
        access: "read-only",
        dutyEn: "Facts vs inference.",
        duty: {
          en: "Facts vs inference — labels which is which.",
          zh: "事實與推論，分開標明。",
          ko: "사실과 추론을 구분해 표시.",
        },
      },
      {
        id: "xing-invest-compliance",
        access: "read-only",
        dutyEn: "Research, not advice.",
        duty: {
          en: "Research, not advice.",
          zh: "只做研究，不給建議。",
          ko: "조언이 아닌 리서치.",
        },
      },
      {
        id: "xing-security-privacy",
        access: "read-only",
        dutyEn: "Secrets and policy.",
        duty: {
          en: "Secrets and policy.",
          zh: "守密鑰與隱私政策。",
          ko: "비밀 정보와 정책 수호.",
        },
      },
    ],
  },
  {
    id: "product",
    name: { en: "Product", zh: "Product 產品", ko: "Product 제품" },
    tagline: {
      en: "The site as the visitor meets it.",
      zh: "訪客實際遇到的那個網站。",
      ko: "방문자가 실제로 만나는 사이트.",
    },
    accent: "#8a2be2",
    members: [
      {
        id: "xing-ux-expert",
        access: "read-only",
        dutyEn: "Mobile, states, flow.",
        duty: {
          en: "Mobile, states, flow.",
          zh: "手機、狀態、流程。",
          ko: "모바일, 상태, 흐름.",
        },
      },
      {
        id: "xing-i18n-a11y",
        access: "read-only",
        dutyEn: "EN / ZH / KO, keyboard.",
        duty: {
          en: "EN / ZH / KO, keyboard and accessibility.",
          zh: "英／中／韓，鍵盤與無障礙。",
          ko: "영/중/한, 키보드와 접근성.",
        },
      },
      {
        id: "xing-search-visibility",
        access: "read-only",
        dutyEn: "Sitemap, links.",
        duty: {
          en: "Sitemap, links — how pages get found.",
          zh: "網站地圖與連結。",
          ko: "사이트맵과 링크.",
        },
      },
    ],
  },
  {
    id: "growth",
    name: { en: "Growth", zh: "Growth 增長", ko: "Growth 성장" },
    tagline: {
      en: "Evidence from real usage.",
      zh: "用真實使用證據說話。",
      ko: "실제 사용 데이터로 말한다.",
    },
    accent: "#0e9f6e",
    members: [
      {
        id: "xing-growth-analytics",
        access: "read-only",
        dutyEn: "Funnels, experiments.",
        duty: {
          en: "Funnels, experiments.",
          zh: "漏斗與實驗。",
          ko: "퍼널과 실험.",
        },
      },
      {
        id: "xing-youtube-growth",
        access: "read-only",
        dutyEn: "Topics back to sites.",
        duty: {
          en: "Topics back to sites.",
          zh: "把題目帶回網站。",
          ko: "주제를 사이트로 되돌린다.",
        },
      },
    ],
  },
  {
    id: "build",
    name: { en: "Build", zh: "Build 建設", ko: "Build 구축" },
    tagline: {
      en: "The only group that writes code.",
      zh: "唯一能寫程式碼的組。",
      ko: "코드를 쓰는 유일한 그룹.",
    },
    accent: "#e2711d",
    members: [
      {
        id: "xing-feature-dev",
        access: "can-edit",
        dutyEn: "Confirmed spec only.",
        duty: {
          en: "Confirmed spec only.",
          zh: "只做已確認的規格。",
          ko: "확정된 스펙만 구현.",
        },
      },
      {
        id: "xing-bug-lead",
        access: "can-edit",
        dutyEn: "Reproduce, then fix.",
        duty: {
          en: "Reproduce, then fix.",
          zh: "先重現，再修復。",
          ko: "재현한 뒤에 고친다.",
        },
      },
      {
        id: "xing-perf-lead",
        access: "can-edit",
        dutyEn: "Measure one bottleneck.",
        duty: {
          en: "Measure one bottleneck.",
          zh: "一次量測一個瓶頸。",
          ko: "병목은 한 번에 하나씩 측정.",
        },
      },
    ],
  },
  {
    id: "release",
    name: { en: "Release", zh: "Release 發布", ko: "Release 출시" },
    tagline: {
      en: "Nothing ships unverified.",
      zh: "沒驗證過的，不許上線。",
      ko: "검증 없이는 출시도 없다.",
    },
    accent: "#d64570",
    members: [
      {
        id: "xing-qa-lead",
        access: "read-only",
        dutyEn: "Tests, no code edits.",
        duty: {
          en: "Tests, no code edits.",
          zh: "只跑測試，不改程式碼。",
          ko: "테스트만, 코드 수정 없음.",
        },
      },
      {
        id: "xing-devops",
        access: "gated",
        dutyEn: "Git only, after OK.",
        duty: {
          en: "Git only, after OK.",
          zh: "只做 git，且須先獲批准。",
          ko: "git만, 승인 후에만.",
        },
      },
      {
        id: "xing-ops-monitor",
        access: "read-only",
        dutyEn: "Live site vs HEAD.",
        duty: {
          en: "Live site vs HEAD.",
          zh: "線上站對比 HEAD。",
          ko: "라이브 사이트와 HEAD 비교.",
        },
      },
    ],
  },
];

export type AgentTeamCopy = {
  eyebrow: string;
  heading: string;
  lead: string;
  intro: string[];
  diagramCaption: string;
  groupsHeading: string;
  groupsLead: string;
  accessLabels: Record<AgentAccess, string>;
  groupAccessNote: string;
  permissionsHeading: string;
  permissionsLead: string;
  stats: { value: string; label: string }[];
  rules: string[];
  crossHeading: string;
  crossBody: string[];
  systemsNote: string;
  closingSlogan: string;
  closingLine: string;
  outroTeam: string;
  outroAbout: string;
};

const en: AgentTeamCopy = {
  eyebrow: "How XingAI builds",
  heading: "15 agents. One dispatcher.",
  lead: "One dispatcher assigns work. Fourteen specialists report back.",
  intro: [
    "XingAI's websites are built and maintained by a small human team plus a standing team of 15 AI agents. The humans set direction and make the final calls. The agents do the research, the checking and — inside narrow limits — the building.",
    "The structure is deliberate: one chain of command, read-only by default, write access kept narrow, and a human OK before anything reaches production. This page is the org chart, published so anyone can see exactly how the work is divided.",
  ],
  diagramCaption:
    "The structure: xing-chief dispatches, five groups report back. Specialists never assign work to each other.",
  groupsHeading: "The five groups",
  groupsLead:
    "Fourteen specialists in five groups. Every card shows what that agent may touch — most can only look.",
  accessLabels: {
    "read-only": "Read-only",
    "can-edit": "Can edit code",
    gated: "Gated",
  },
  groupAccessNote: "agents",
  permissionsHeading: "Permissions are the point",
  permissionsLead:
    "Most AI setups hand every agent every tool. Ours does the opposite — least privilege, enforced by structure rather than by trust.",
  stats: [
    { value: "10 of 15", label: "agents are read-only" },
    { value: "4", label: "may touch the code repos" },
    { value: "1", label: "can run git — only after the founder says OK" },
  ],
  rules: [
    "Specialists report only to the dispatcher. They never assign work to each other.",
    "The dispatcher splits the work and merges results into P0 / P1 / P2 — and never edits code itself.",
    "QA runs tests but writes no code. Ops compares the live site against HEAD and changes nothing.",
    "Releases go through xing-devops — git only — and only after a human OK.",
  ],
  crossHeading: "Cross-checking: no single point of trust",
  crossBody: [
    "The same 15-agent team runs in three independent coding systems — Claude, Cursor and Codex. If one system runs out of quota or goes down, another picks the work up and nothing stops.",
    "On ordinary days the duplication is itself the test: the same task runs in more than one system and the results are compared. We pick tools by measured results, not by loyalty. The same rule runs underneath everything at XingAI — every key role has a second source, and every important number is checked against two.",
  ],
  systemsNote: "One team, three systems — Claude · Cursor · Codex",
  closingSlogan: "When in doubt, ask XingAI.",
  closingLine: "A small human team. A standing agent team. Every step checked twice.",
  outroTeam: "Meet the people",
  outroAbout: "About XingAI",
};

const zh: AgentTeamCopy = {
  eyebrow: "XingAI 如何建站",
  heading: "15 個 agent，一個調度員",
  lead: "調度員一個人派工，十四個專家只向他匯報。",
  intro: [
    "XingAI 的網站由一支很小的真人團隊，加上一支常設的 15 個 AI agent 團隊共同建設與維護。真人定方向、做最終決定；agent 負責研究、核對，以及在嚴格限定的範圍內動手建站。",
    "這套結構是刻意的：指揮鏈單一、預設只讀、寫入權限收窄、上線之前必須由人點頭。這一頁就是組織圖，公開出來，讓任何人都能看清工作是怎麼分工的。",
  ],
  diagramCaption: "結構：xing-chief 派工，五組匯報。專家之間從不互相派工。",
  groupsHeading: "五個組",
  groupsLead: "十四位專家、五個組。每張卡都標明這個 agent 能碰什麼——大多數只能看。",
  accessLabels: {
    "read-only": "只讀",
    "can-edit": "可改程式碼",
    gated: "需點頭",
  },
  groupAccessNote: "個 agent",
  permissionsHeading: "權限設計才是重點",
  permissionsLead:
    "多數 AI 配置讓每個 agent 什麼工具都能用。我們反著來——最小權限，靠結構強制，不靠信任。",
  stats: [
    { value: "10 / 15", label: "個 agent 只有只讀權限" },
    { value: "4", label: "個能碰程式碼倉庫" },
    { value: "1", label: "個能跑 git——且要創始人先點頭" },
  ],
  rules: [
    "專家只向調度員匯報，從不互相派工。",
    "調度員拆工、把結果合併成 P0／P1／P2——自己從不改程式碼。",
    "QA 只跑測試不寫程式碼；運維只對比線上站與 HEAD，不動任何東西。",
    "上線只走 xing-devops（只做 git）這一條路，且必須先有人點頭。",
  ],
  crossHeading: "Cross checking：不把信任押在單一來源",
  crossBody: [
    "同一套 15 個 agent 團隊，在 Claude、Cursor、Codex 三個獨立系統裡各跑一份。一個系統額度用完或掛掉，另一個立刻接上，工作不斷線。",
    "平常日子裡，這份重複本身就是測試：同一個任務在不止一個系統裡各跑一遍，結果拿來對照。我們用實測結果選工具，不靠偏好站隊。這條規矩貫穿 XingAI 的一切——每個關鍵崗位都有第二來源，每個重要數字都要雙源核對。",
  ],
  systemsNote: "一套團隊，三個系統——Claude · Cursor · Codex",
  closingSlogan: "遇事不決，先問 XingAI",
  closingLine: "一支很小的真人團隊，一支常設的 agent 團隊，每一步都核對兩遍。",
  outroTeam: "認識團隊的人",
  outroAbout: "關於 XingAI",
};

const ko: AgentTeamCopy = {
  eyebrow: "XingAI가 사이트를 만드는 방식",
  heading: "에이전트 15명, 디스패처 1명",
  lead: "디스패처 한 명이 일을 나누고, 전문가 열네 명이 그에게만 보고합니다.",
  intro: [
    "XingAI의 웹사이트는 작은 인간 팀과 상시 운영되는 AI 에이전트 15명의 팀이 함께 만들고 유지합니다. 방향과 최종 결정은 사람이, 리서치와 검증, 그리고 좁게 제한된 범위 안에서의 구축은 에이전트가 맡습니다.",
    "이 구조는 의도적입니다. 지휘 체계는 하나, 기본값은 읽기 전용, 쓰기 권한은 좁게, 프로덕션 반영 전에는 반드시 사람의 승인. 이 페이지는 그 조직도이며, 일이 어떻게 나뉘는지 누구나 볼 수 있게 공개합니다.",
  ],
  diagramCaption:
    "구조: xing-chief가 배분하고 다섯 그룹이 보고합니다. 전문가끼리는 서로 일을 맡기지 않습니다.",
  groupsHeading: "다섯 그룹",
  groupsLead:
    "전문가 열네 명, 다섯 그룹. 각 카드에는 그 에이전트가 무엇을 건드릴 수 있는지가 적혀 있습니다. 대부분은 보기만 합니다.",
  accessLabels: {
    "read-only": "읽기 전용",
    "can-edit": "코드 수정 가능",
    gated: "승인 필요",
  },
  groupAccessNote: "명",
  permissionsHeading: "핵심은 권한 설계",
  permissionsLead:
    "대부분의 AI 구성은 모든 에이전트에게 모든 도구를 줍니다. 우리는 반대입니다. 최소 권한을 신뢰가 아니라 구조로 강제합니다.",
  stats: [
    { value: "10 / 15", label: "명은 읽기 전용" },
    { value: "4", label: "명만 코드 저장소에 닿을 수 있다" },
    { value: "1", label: "명만 git 실행 가능 — 창업자 승인이 먼저" },
  ],
  rules: [
    "전문가는 디스패처에게만 보고하고, 서로 일을 맡기지 않습니다.",
    "디스패처는 일을 나누고 결과를 P0 / P1 / P2로 합칩니다. 코드는 직접 고치지 않습니다.",
    "QA는 테스트만 하고 코드를 쓰지 않습니다. 운영 모니터는 라이브 사이트와 HEAD를 비교할 뿐, 아무것도 바꾸지 않습니다.",
    "배포는 xing-devops(git만) 한 길로만, 사람의 승인이 먼저입니다.",
  ],
  crossHeading: "크로스 체킹: 신뢰를 한 곳에 걸지 않는다",
  crossBody: [
    "같은 15명의 팀이 Claude, Cursor, Codex 세 개의 독립 시스템에서 각각 돌아갑니다. 한 시스템의 한도가 다하거나 멈추면 다른 시스템이 바로 이어받아 일이 끊기지 않습니다.",
    "평소에는 이 중복 자체가 테스트입니다. 같은 작업을 여러 시스템에서 돌려 결과를 비교합니다. 도구는 취향이 아니라 측정 결과로 고릅니다. 이 원칙은 XingAI의 모든 일에 흐릅니다. 핵심 역할마다 두 번째 출처가 있고, 중요한 숫자는 두 곳과 대조합니다.",
  ],
  systemsNote: "한 팀, 세 시스템 — Claude · Cursor · Codex",
  closingSlogan: "When in doubt, ask XingAI.",
  closingLine: "작은 인간 팀, 상시 에이전트 팀. 모든 단계를 두 번 확인합니다.",
  outroTeam: "사람들 만나기",
  outroAbout: "XingAI 소개",
};

const copy: Record<Locale, AgentTeamCopy> = { en, zh, ko };

export function getAgentTeamCopy(locale: Locale): AgentTeamCopy {
  return copy[locale];
}

export function agentTeamTitle(locale: Locale): string {
  if (locale === "zh") return "Agent 團隊：15 個 AI agent 如何建 XingAI 的網站";
  if (locale === "ko") return "에이전트 팀: AI 에이전트 15명이 XingAI 사이트를 만드는 방식";
  return "The Agent Team: How 15 AI Agents Build XingAI's Websites";
}

export function agentTeamDescription(locale: Locale): string {
  if (locale === "zh") {
    return "XingAI 的網站由一支很小的真人團隊與 15 個 AI agent 共同建設：一個調度員、五個組、預設只讀、只有四個能改程式碼、上線前必須由人點頭。";
  }
  if (locale === "ko") {
    return "XingAI의 웹사이트는 작은 인간 팀과 AI 에이전트 15명이 만듭니다. 디스패처 1명, 그룹 5개, 기본은 읽기 전용, 코드 접근은 4명, 출시 전 사람 승인 필수.";
  }
  return "XingAI's websites are built by a small human team and 15 AI agents under one dispatcher: five groups, read-only by default, four with code access, and a human OK before anything ships.";
}
