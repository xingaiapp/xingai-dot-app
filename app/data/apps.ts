import type { Locale } from "../i18n/translations";

export type AppFeature = {
  name: string;
  free: boolean;
  pro: boolean;
  enterprise: boolean;
};

export type RoadmapItem = {
  title: string;
  status: "shipped" | "in-progress" | "planned";
};

export type AppData = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  iconDark: string;
  favicon: string;
  screenshots: { src: string; srcDark?: string; alt: string; caption: string }[];
  features: AppFeature[];
  roadmap: RoadmapItem[];
  demoUrl?: string;
  sourceUrl?: string;
  /** `gumroad` = paid template CTA; `github` = open repo CTA (default gumroad when sourceUrl set). */
  sourceKind?: "gumroad" | "github";
  comingSoon?: boolean;
};

type LocalizedAppCopy = Partial<
  Pick<AppData, "tagline" | "description" | "category">
> & {
  features?: string[];
  roadmap?: string[];
  screenshots?: string[];
};

export const apps: AppData[] = [
  {
    slug: "meal-coach",
    name: "XingAI Meal Coach",
    tagline: "Eat Better",
    icon: "/meal-coach-icon.png",
    iconDark: "/meal-coach-icon-dark.png",
    favicon: "/favicon-meal-coach.png",
    demoUrl: "https://xingai-meal-coach-ai.vercel.app/",
    sourceUrl: "https://uwspstar.gumroad.com/l/ai-meal-planner-nextjs-fastapi",
    sourceKind: "gumroad",
    description:
      "AI-powered meal coaching\u2014personalized suggestions, dietary awareness, and clarity without analysis paralysis. Built with local AI where privacy matters.",
    category: "Health AI",
    screenshots: [
      {
        src: "/food-demo-light.jpg",
        srcDark: "/food-demo-dark.jpg",
        alt: "XingAI Meal Coach",
        caption: "Meal coaching flow",
      },
    ],
    features: [
      { name: "Meal suggestions", free: true, pro: true, enterprise: true },
      { name: "Dietary filters", free: true, pro: true, enterprise: true },
      { name: "Weekly meal plan", free: false, pro: true, enterprise: true },
      { name: "Grocery list export", free: false, pro: true, enterprise: true },
      { name: "Nutrition tracking", free: false, pro: true, enterprise: true },
      { name: "Family profiles", free: false, pro: false, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
      { name: "Custom branding", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Core meal suggestion engine", status: "shipped" },
      { title: "Light & dark theme UI", status: "shipped" },
      { title: "Dietary preference filters", status: "in-progress" },
      { title: "Weekly meal planner", status: "planned" },
      { title: "Grocery list generation", status: "planned" },
      { title: "Nutrition dashboard", status: "planned" },
    ],
  },
  {
    slug: "cook-ai",
    name: "XingAI Cook AI",
    tagline: "Cook Smarter",
    icon: "/cook-ai-icon.png",
    iconDark: "/cook-ai-icon-dark.png",
    favicon: "/favicon-cook-ai.png",
    demoUrl: "https://cook.xingai.app/",
    sourceUrl: "https://github.com/xingaiapp/xingai-cook-ai",
    sourceKind: "github",
    description:
      "Decide what to cook from what you already have\u2014scan your fridge or list ingredients, pick a meal slot, get one dish with an optional buy list and step-by-step cooking. OpenAI-powered live demo.",
    category: "Cooking AI",
    screenshots: [
      {
        src: "/cook-demo-light.jpg",
        srcDark: "/cook-demo-dark.jpg",
        alt: "XingAI Cook AI",
        caption: "Inventory \u2192 meal recommendation \u2192 cook",
      },
    ],
    features: [
      { name: "Fridge & pantry scan", free: true, pro: true, enterprise: true },
      { name: "Ingredient list input", free: true, pro: true, enterprise: true },
      { name: "Meal slot recommendations", free: true, pro: true, enterprise: true },
      { name: "Optional buy list", free: true, pro: true, enterprise: true },
      { name: "Step-by-step cooking", free: true, pro: true, enterprise: true },
      { name: "Speed mode constraints", free: true, pro: true, enterprise: true },
      { name: "Ingredient substitutions", free: true, pro: true, enterprise: true },
      { name: "Saved pantry & meals", free: false, pro: true, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
      { name: "Custom branding", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Inventory \u2192 meal \u2192 cook flow", status: "shipped" },
      { title: "Light & dark theme UI", status: "shipped" },
      { title: "OpenAI meal recommendations", status: "shipped" },
      { title: "Live demo at cook.xingai.app", status: "shipped" },
      { title: "Pantry & saved meals", status: "in-progress" },
      { title: "Real step timers", status: "planned" },
      { title: "Weekly meal planning", status: "planned" },
    ],
  },
  {
    slug: "outfit-ai",
    name: "XingAI Outfit AI",
    tagline: "Dress Smarter",
    icon: "/outfit-ai-icon.png",
    iconDark: "/outfit-ai-icon-dark.png",
    favicon: "/favicon-outfit-ai.png",
    demoUrl: "https://wear.xingai.app/",
    description:
      "Style and outfit decisions with structured AI guidance\u2014fewer tabs, clearer choices, and confidence before you walk out the door.",
    category: "Outfit AI",
    screenshots: [
      { src: "/wear-ai-demo-light.png", srcDark: "/wear-ai-demo-dark.png", alt: "XingAI Outfit AI Wear AI demo", caption: "AI outfit recommendation flow" },
    ],
    features: [
      { name: "AI outfit recommendation", free: true, pro: true, enterprise: true },
      { name: "Weather and occasion context", free: true, pro: true, enterprise: true },
      { name: "Demo model look preview", free: true, pro: true, enterprise: true },
      { name: "Local profile and saved looks", free: true, pro: true, enterprise: true },
    ],
    roadmap: [
      { title: "AI outfit recommendation", status: "shipped" },
      { title: "Confidence-first decision flow", status: "shipped" },
      { title: "Wardrobe-aware outfit suggestions", status: "planned" },
    ],
  },
  {
    slug: "routine-ai",
    name: "XingAI Routine AI",
    tagline: "Live Better",
    icon: "/routine-ai-icon.png",
    iconDark: "/routine-ai-icon-dark.png",
    favicon: "/favicon-routine-ai.png",
    demoUrl: "https://xingai-routine-ai.vercel.app/",
    sourceUrl: "https://github.com/xingaiapp/xingai-routine-ai",
    sourceKind: "github",
    description:
      "Decide a weekly rhythm that sticks\u2014describe your habit context, pick focus and cadence, get one realistic plan with next actions and a gentle nudge. OpenAI-powered live demo.",
    category: "Routine AI",
    screenshots: [
      {
        src: "/routine-demo-light.jpg",
        srcDark: "/routine-demo-dark.jpg",
        alt: "XingAI Routine AI",
        caption: "Context \u2192 rhythm \u2192 live it",
      },
    ],
    features: [
      { name: "Habit context input", free: true, pro: true, enterprise: true },
      { name: "Focus & cadence presets", free: true, pro: true, enterprise: true },
      { name: "AI rhythm recommendation", free: true, pro: true, enterprise: true },
      { name: "Next actions & gentle nudge", free: true, pro: true, enterprise: true },
      { name: "Profile & check-in flow", free: true, pro: true, enterprise: true },
      { name: "Light & dark theme", free: true, pro: true, enterprise: true },
      { name: "Saved routines & history", free: false, pro: true, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
      { name: "Custom branding", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Context \u2192 rhythm \u2192 live it flow", status: "shipped" },
      { title: "Light & dark theme UI", status: "shipped" },
      { title: "OpenAI routine recommendations", status: "shipped" },
      { title: "Live demo on Vercel", status: "shipped" },
      { title: "Habit design templates", status: "planned" },
      { title: "Accountability without guilt", status: "planned" },
      { title: "routine.xingai.app custom domain", status: "planned" },
    ],
  },
  {
    slug: "parent-ai",
    name: "XingAI Parent AI",
    tagline: "Family Support",
    icon: "/parent-ai-icon.png",
    iconDark: "/parent-ai-icon-dark.png",
    favicon: "/favicon-parent-ai.png",
    description:
      "Parenting decision support\u2014schedules, milestones, and gentle guidance so you feel prepared instead of overwhelmed.",
    category: "Parenting AI",
    screenshots: [
      { src: "/parent-demo-light.jpg", srcDark: "/parent-demo-dark.jpg", alt: "XingAI Parent AI", caption: "Parenting guidance flow" },
    ],
    features: [],
    comingSoon: true,
    roadmap: [
      { title: "Age-aware milestone tracking", status: "planned" },
      { title: "Schedule & routine suggestions", status: "planned" },
      { title: "Public preview", status: "planned" },
    ],
  },
  {
    slug: "travel-ai",
    name: "XingAI Travel AI",
    tagline: "Explore Better",
    icon: "/travel-ai-icon.png",
    iconDark: "/travel-ai-icon-dark.png",
    favicon: "/favicon-travel-ai.png",
    description:
      "Travel decision intelligence\u2014destination options, itinerary trade-offs, and local insights without tab overload.",
    category: "Travel AI",
    screenshots: [
      { src: "/travel-demo-light.jpg", srcDark: "/travel-demo-dark.jpg", alt: "XingAI Travel AI", caption: "Travel planning flow" },
    ],
    features: [],
    comingSoon: true,
    roadmap: [
      { title: "Destination comparison engine", status: "planned" },
      { title: "Itinerary decision flow", status: "planned" },
      { title: "Public preview", status: "planned" },
    ],
  },
  {
    slug: "investment-assistant",
    name: "XingAI Investment Assistant",
    tagline: "Invest Smarter",
    icon: "/investment-ai-icon.png",
    iconDark: "/investment-ai-icon-dark.png",
    favicon: "/favicon-investment-ai.png",
    demoUrl: "https://invest.xingai.app/",
    description:
      "Investing decision support\u2014structure, context, and risk-aware framing so you can think in systems, not headlines.",
    category: "Finance AI",
    screenshots: [
      { src: "/invest-demo-light.jpg", srcDark: "/invest-demo-dark.jpg", alt: "XingAI Investment Assistant", caption: "Investment decision flow" },
    ],
    features: [
      { name: "Macro consensus dashboard", free: true, pro: true, enterprise: true },
      { name: "Multi-engine voting view", free: true, pro: true, enterprise: true },
      { name: "AI decision feed", free: true, pro: true, enterprise: true },
      { name: "Legal disclaimers & terms", free: true, pro: true, enterprise: true },
    ],
    roadmap: [
      { title: "Worker cache dashboard", status: "shipped" },
      { title: "Live at invest.xingai.app", status: "shipped" },
      { title: "Voluntary support (Stripe tips)", status: "shipped" },
      { title: "Paid plans & subscriptions", status: "planned" },
    ],
  },
];

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((a) => a.slug === slug);
}

const localizedAppCopy: Partial<
  Record<Locale, Partial<Record<string, LocalizedAppCopy>>>
> = {
  zh: {
    "meal-coach": {
      tagline: "吃得更清楚",
      category: "健康 AI",
      description:
        "AI 饮食决策助手，帮助你快速判断现在吃什么、怎么吃更好，并在需要时加入饮食偏好和健康语境。",
      features: [
        "餐食建议",
        "饮食偏好筛选",
        "每周饮食计划",
        "购物清单导出",
        "营养追踪",
        "家庭成员档案",
        "API 访问",
        "自定义品牌",
      ],
      roadmap: [
        "核心饮食建议引擎",
        "亮色与深色主题 UI",
        "饮食偏好筛选",
        "每周饮食计划",
        "购物清单生成",
        "营养仪表盘",
      ],
    },
    "cook-ai": {
      tagline: "做饭更聪明",
      category: "烹饪 AI",
      description:
        "根据你已有的食材决定做什么菜：扫描冰箱或输入食材，选择用餐场景，获得一道菜、可选购买清单和分步烹饪指导。",
      features: [
        "冰箱与储物柜扫描",
        "食材列表输入",
        "用餐场景推荐",
        "可选购买清单",
        "分步烹饪",
        "快速模式约束",
        "食材替换建议",
        "已保存食材与菜谱",
        "API 访问",
        "自定义品牌",
      ],
      roadmap: [
        "食材到菜品再到烹饪流程",
        "亮色与深色主题 UI",
        "OpenAI 餐食推荐",
        "上线 cook.xingai.app",
        "储物柜与已保存菜品",
        "真实步骤计时器",
        "每周备餐计划",
      ],
    },
    "outfit-ai": {
      tagline: "穿搭更清楚",
      category: "穿搭 AI",
      description:
        "结构化 AI 穿搭决策，减少来回纠结，在出门前获得更清晰、更有信心的选择。",
      features: ["AI 穿搭推荐", "天气与场景语境", "模特效果预览", "本地档案与已保存造型"],
      roadmap: ["AI 穿搭推荐", "信心优先的决策流程", "结合衣橱的穿搭建议"],
    },
    "routine-ai": {
      tagline: "生活更稳定",
      category: "习惯 AI",
      description:
        "决定一个能坚持的每周节奏：描述习惯语境，选择重点与频率，获得一个现实计划、下一步行动和温和提醒。",
      features: [
        "习惯语境输入",
        "重点与频率预设",
        "AI 节奏推荐",
        "下一步行动与温和提醒",
        "档案与打卡流程",
        "亮色与深色主题",
        "已保存习惯与历史",
        "API 访问",
        "自定义品牌",
      ],
      roadmap: [
        "语境到节奏再到执行流程",
        "亮色与深色主题 UI",
        "OpenAI 习惯推荐",
        "Vercel 在线演示",
        "习惯设计模板",
        "没有负担感的陪伴",
        "routine.xingai.app 自定义域名",
      ],
    },
    "parent-ai": {
      tagline: "家庭支持",
      category: "育儿 AI",
      description:
        "育儿决策支持，围绕作息、成长节点和温和建议，让你更有准备，而不是更焦虑。",
      roadmap: ["年龄相关成长节点追踪", "作息与日程建议", "公开预览"],
    },
    "travel-ai": {
      tagline: "旅行更好选",
      category: "旅行 AI",
      description:
        "旅行决策智能，帮助你比较目的地、行程取舍和本地信息，减少打开无数标签页的负担。",
      roadmap: ["目的地比较引擎", "行程决策流程", "公开预览"],
    },
    "investment-assistant": {
      tagline: "投资更系统",
      category: "金融 AI",
      description:
        "投资决策支持，用结构、语境和风险优先的框架帮助你按系统思考，而不是被新闻标题牵着走。",
      features: ["宏观共识仪表盘", "多引擎投票视图", "AI 决策流", "法律免责声明与条款"],
      roadmap: [
        "Worker 缓存仪表盘",
        "上线 invest.xingai.app",
        "自愿支持 Stripe tips",
        "付费计划与订阅",
      ],
    },
  },
  ko: {
    "meal-coach": {
      tagline: "더 명확하게 먹기",
      category: "건강 AI",
      description:
        "AI 식사 결정 도우미입니다. 지금 무엇을 먹을지, 어떤 순서로 먹을지 빠르게 정하고 필요할 때 건강 맥락을 더합니다.",
      features: [
        "식사 제안",
        "식단 필터",
        "주간 식단 계획",
        "장보기 목록 내보내기",
        "영양 추적",
        "가족 프로필",
        "API 접근",
        "커스텀 브랜딩",
      ],
      roadmap: [
        "핵심 식사 제안 엔진",
        "라이트/다크 테마 UI",
        "식단 선호 필터",
        "주간 식단 플래너",
        "장보기 목록 생성",
        "영양 대시보드",
      ],
    },
    "cook-ai": {
      tagline: "더 똑똑하게 요리하기",
      category: "요리 AI",
      description:
        "이미 가진 재료로 무엇을 요리할지 결정합니다. 냉장고를 스캔하거나 재료를 입력하고, 식사 상황에 맞는 한 가지 요리와 구매 목록, 조리 단계를 받습니다.",
      features: [
        "냉장고와 팬트리 스캔",
        "재료 목록 입력",
        "식사 상황 추천",
        "선택적 구매 목록",
        "단계별 조리",
        "빠른 모드 제약",
        "재료 대체 제안",
        "저장된 팬트리와 식사",
        "API 접근",
        "커스텀 브랜딩",
      ],
      roadmap: [
        "재료에서 요리, 조리까지의 흐름",
        "라이트/다크 테마 UI",
        "OpenAI 식사 추천",
        "cook.xingai.app 라이브 데모",
        "팬트리와 저장된 식사",
        "실제 단계 타이머",
        "주간 식사 계획",
      ],
    },
    "outfit-ai": {
      tagline: "더 똑똑하게 입기",
      category: "스타일 AI",
      description:
        "구조화된 AI 스타일 결정으로 탭을 줄이고, 외출 전 더 자신 있는 선택을 돕습니다.",
      features: ["AI 의상 추천", "날씨와 상황 맥락", "데모 모델 미리보기", "로컬 프로필과 저장된 룩"],
      roadmap: ["AI 의상 추천", "확신 우선 결정 흐름", "옷장 기반 의상 제안"],
    },
    "routine-ai": {
      tagline: "더 나은 리듬",
      category: "습관 AI",
      description:
        "지속 가능한 주간 리듬을 결정합니다. 습관 맥락, 초점, 빈도를 정하면 현실적인 계획과 다음 행동, 부드러운 알림을 제공합니다.",
      features: [
        "습관 맥락 입력",
        "초점과 빈도 프리셋",
        "AI 리듬 추천",
        "다음 행동과 부드러운 알림",
        "프로필과 체크인 흐름",
        "라이트/다크 테마",
        "저장된 루틴과 기록",
        "API 접근",
        "커스텀 브랜딩",
      ],
      roadmap: [
        "맥락에서 리듬, 실행까지의 흐름",
        "라이트/다크 테마 UI",
        "OpenAI 루틴 추천",
        "Vercel 라이브 데모",
        "습관 설계 템플릿",
        "부담 없는 책임감",
        "routine.xingai.app 커스텀 도메인",
      ],
    },
    "parent-ai": {
      tagline: "가족 지원",
      category: "육아 AI",
      description:
        "일정, 성장 단계, 부드러운 가이드를 통해 부담보다 준비감을 주는 육아 결정 지원입니다.",
      roadmap: ["나이별 성장 단계 추적", "일정과 루틴 제안", "공개 프리뷰"],
    },
    "travel-ai": {
      tagline: "더 잘 여행하기",
      category: "여행 AI",
      description:
        "목적지 선택, 일정의 장단점, 현지 맥락을 정리해 탭 과부하 없이 더 나은 여행 결정을 돕습니다.",
      roadmap: ["목적지 비교 엔진", "일정 결정 흐름", "공개 프리뷰"],
    },
    "investment-assistant": {
      tagline: "더 체계적으로 투자하기",
      category: "금융 AI",
      description:
        "뉴스 헤드라인이 아니라 구조, 맥락, 위험 우선 프레임으로 투자 결정을 생각하도록 돕습니다.",
      features: ["매크로 컨센서스 대시보드", "다중 엔진 투표 보기", "AI 결정 피드", "법적 고지와 약관"],
      roadmap: [
        "Worker 캐시 대시보드",
        "invest.xingai.app 라이브",
        "자발적 후원 Stripe tips",
        "유료 플랜과 구독",
      ],
    },
  },
};

export function localizeApp(app: AppData, locale: Locale): AppData {
  const copy = localizedAppCopy[locale]?.[app.slug];
  if (!copy) return app;

  return {
    ...app,
    tagline: copy.tagline ?? app.tagline,
    description: copy.description ?? app.description,
    category: copy.category ?? app.category,
    features: app.features.map((feature, index) => ({
      ...feature,
      name: copy.features?.[index] ?? feature.name,
    })),
    roadmap: app.roadmap.map((item, index) => ({
      ...item,
      title: copy.roadmap?.[index] ?? item.title,
    })),
    screenshots: app.screenshots.map((shot, index) => ({
      ...shot,
      caption: copy.screenshots?.[index] ?? shot.caption,
    })),
  };
}

export function getLocalizedApps(locale: Locale): AppData[] {
  return apps.map((app) => localizeApp(app, locale));
}

export function getLocalizedAppBySlug(
  slug: string,
  locale: Locale,
): AppData | undefined {
  const app = getAppBySlug(slug);
  return app ? localizeApp(app, locale) : undefined;
}
