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

export type AppLaunchStatus = "live" | "demo" | "coming-soon";

export type AppData = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  canDo: string;
  bestFor: string;
  clickTarget: string;
  launchStatus: AppLaunchStatus;
  icon: string;
  iconDark: string;
  favicon: string;
  screenshots: {
    src: string;
    srcDark?: string;
    alt: string;
    caption: string;
    /** Zoom crop for captures where UI overlaps the hero circle. */
    framing?: "hero-focus";
  }[];
  features: AppFeature[];
  roadmap: RoadmapItem[];
  demoUrl?: string;
  sourceUrl?: string;
  /** `gumroad` = paid template CTA; `github` = open repo CTA (default gumroad when sourceUrl set). */
  sourceKind?: "gumroad" | "github";
  comingSoon?: boolean;
  /** Invite-only product: free to request access via contact. */
  earlyAccess?: boolean;
};

type LocalizedAppCopy = Partial<
  Pick<AppData, "tagline" | "description" | "category" | "canDo" | "bestFor" | "clickTarget">
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
    canDo: "Suggest meals around preferences, dietary context, and weekly planning.",
    bestFor: "People who want healthier food decisions without tracking everything.",
    clickTarget: "Product details, free demo, and source-code option.",
    launchStatus: "demo",
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
    canDo: "Turn fridge or pantry ingredients into one practical dish and cooking steps.",
    bestFor: "Busy home cooks deciding what to make right now.",
    clickTarget: "Product details, live demo, and GitHub source.",
    launchStatus: "live",
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
    canDo: "Recommend an outfit using occasion, weather, and style context.",
    bestFor: "People who want faster, more confident daily outfit choices.",
    clickTarget: "Product details and live demo.",
    launchStatus: "live",
    screenshots: [
      {
        src: "/outfit-demo-light.jpg",
        srcDark: "/outfit-demo-dark.jpg",
        alt: "XingAI Outfit AI",
        caption: "Occasion \u2192 outfit recommendation \u2192 decide",
      },
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
    canDo: "Create a realistic habit rhythm with next actions and gentle nudges.",
    bestFor: "People rebuilding routines without rigid productivity systems.",
    clickTarget: "Product details, free demo, and GitHub source.",
    launchStatus: "demo",
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
    slug: "sat-ai",
    name: "XingAI SAT AI",
    tagline: "Prep Smarter",
    icon: "/sat-ai-icon.svg",
    iconDark: "/sat-ai-icon.svg",
    favicon: "/sat-ai-icon.svg",
    demoUrl: "https://sat.xingai.app/",
    description:
      "SAT mistake review for students\u2014take a photo, upload a screenshot, or type a missed question, then get structured AI feedback that explains the error and turns it into a study plan.",
    category: "Education AI",
    canDo: "Analyze SAT Math and Reading & Writing mistakes with OCR, explanations, and next steps.",
    bestFor: "Students who want to stop repeating missed SAT question patterns.",
    clickTarget: "Product details and free demo at sat.xingai.app.",
    launchStatus: "demo",
    screenshots: [
      {
        src: "/sat-demo-light.png",
        srcDark: "/sat-demo-dark.png",
        alt: "XingAI SAT AI",
        caption: "Photo OCR \u2192 mistake analysis \u2192 study plan",
      },
    ],
    features: [
      { name: "Photo OCR mistake capture", free: true, pro: true, enterprise: true },
      { name: "Upload screenshot OCR", free: true, pro: true, enterprise: true },
      { name: "Manual question input", free: true, pro: true, enterprise: true },
      { name: "SAT Math analysis", free: true, pro: true, enterprise: true },
      { name: "Reading & Writing review", free: true, pro: true, enterprise: true },
      { name: "Explain / improve / concept / plan flow", free: true, pro: true, enterprise: true },
      { name: "Local mistake history", free: true, pro: true, enterprise: true },
      { name: "Progress and weak-area tracking", free: false, pro: true, enterprise: true },
      { name: "Higher weekly analysis limit", free: false, pro: true, enterprise: true },
      { name: "Custom school or tutoring setup", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Photo, upload, and text mistake flow", status: "shipped" },
      { title: "OpenAI-powered SAT mistake analysis", status: "shipped" },
      { title: "Dark and Apple-like light themes", status: "shipped" },
      { title: "Mobile web camera and upload QA", status: "in-progress" },
      { title: "Account sync for cross-device study history", status: "planned" },
      { title: "Tutor and classroom dashboards", status: "planned" },
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
    canDo: "Organize parenting decisions around routines, milestones, and next steps.",
    bestFor: "Parents who want calm guidance without information overload.",
    clickTarget: "Roadmap details and early-access contact.",
    launchStatus: "coming-soon",
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
    canDo: "Compare destinations, itinerary trade-offs, and local context.",
    bestFor: "Travelers planning faster without juggling too many tabs.",
    clickTarget: "Roadmap details and early-access contact.",
    launchStatus: "coming-soon",
    screenshots: [
      {
        src: "/travel-demo-light.jpg",
        srcDark: "/travel-demo-dark.jpg",
        alt: "XingAI Travel AI",
        caption: "Travel planning flow",
        framing: "hero-focus",
      },
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
    canDo: "Summarize market context, macro signals, and risk-aware decision framing.",
    bestFor: "Self-directed investors who want structure before making decisions.",
    clickTarget: "Product details and live decision dashboard.",
    launchStatus: "live",
    screenshots: [
      { src: "/invest-demo-light.jpg", srcDark: "/invest-demo-dark.jpg", alt: "XingAI Investment Assistant", caption: "Investment decision flow" },
    ],
    features: [
      { name: "Macro consensus dashboard", free: true, pro: true, enterprise: true },
      { name: "Multi-engine voting view", free: true, pro: true, enterprise: true },
      { name: "AI decision feed", free: true, pro: true, enterprise: true },
      { name: "Legal disclaimers & terms", free: true, pro: true, enterprise: true },
      { name: "Risk-framing overlays", free: false, pro: true, enterprise: true },
      { name: "Watchlist & alerts", free: false, pro: true, enterprise: true },
      { name: "Portfolio context input", free: false, pro: true, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
      { name: "Custom branding & white-label", free: false, pro: false, enterprise: true },
      { name: "Dedicated support SLA", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Worker cache dashboard", status: "shipped" },
      { title: "Live at invest.xingai.app", status: "shipped" },
      { title: "Voluntary support (Stripe tips)", status: "shipped" },
      { title: "Paid plans & subscriptions", status: "in-progress" },
      { title: "Watchlist & price alerts", status: "planned" },
      { title: "Portfolio context & position sizing", status: "planned" },
    ],
  },
  {
    slug: "performance-sim",
    name: "Performance Sim",
    tagline: "Simulate Rules",
    icon: "/performance-sim-icon.png",
    iconDark: "/performance-sim-icon-dark.png",
    favicon: "/favicon-performance-sim.png",
    demoUrl: "https://lab.xingai.app/",
    description:
      "Performance simulation lab\u2014compare different trading rules and see paper outcomes without touching a broker.",
    category: "Finance AI",
    canDo: "Run a paper-style performance simulation under different rule sets.",
    bestFor: "People who want to sanity-check a rule before they treat it as real.",
    clickTarget: "Opens the live demo at lab.xingai.app.",
    launchStatus: "demo",
    screenshots: [
      {
        src: "/performance-sim-demo-light.jpg",
        srcDark: "/performance-sim-demo-dark.jpg",
        alt: "Performance Sim demo",
        caption: "Performance simulation overview",
      },
    ],
    features: [
      { name: "Rule-based simulation", free: true, pro: true, enterprise: true },
      { name: "Multi-rule comparison", free: true, pro: true, enterprise: true },
      { name: "Paper P&L chart", free: true, pro: true, enterprise: true },
      { name: "Win/loss & drawdown stats", free: false, pro: true, enterprise: true },
      { name: "Custom date-range backtesting", free: false, pro: true, enterprise: true },
      { name: "Export results (CSV)", free: false, pro: true, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Public demo at lab.xingai.app", status: "shipped" },
      { title: "Win/loss and drawdown analytics", status: "in-progress" },
      { title: "Custom date-range backtesting", status: "planned" },
      { title: "CSV export & report generation", status: "planned" },
    ],
  },
  {
    slug: "t-today",
    name: "T Today",
    tagline: "Plan Today",
    icon: "/t-today-icon.png",
    iconDark: "/t-today-icon-dark.png",
    favicon: "/favicon-t-today.png",
    demoUrl: "https://t.xingai.app/",
    earlyAccess: true,
    description:
      "Daily trading plan helper\u2014turn your holdings screenshot into structured rules + an AI plan for today. Early access is free: email us to join the allowlist.",
    category: "Finance AI",
    canDo: "Convert a holdings screenshot into a structured plan for the day.",
    bestFor: "Active traders who want a repeatable pre-market checklist and plan.",
    clickTarget: "Request free early access, then sign in at t.xingai.app.",
    launchStatus: "demo",
    screenshots: [
      {
        src: "/t-today-demo-light.jpg",
        srcDark: "/t-today-demo-dark.jpg",
        alt: "T Today demo",
        caption: "Daily plan flow",
      },
    ],
    features: [
      { name: "Holdings \u2192 plan workflow", free: true, pro: true, enterprise: true },
      { name: "Screenshot-to-rules parsing", free: true, pro: true, enterprise: true },
      { name: "AI daily plan generation", free: true, pro: true, enterprise: true },
      { name: "Pre-market checklist", free: false, pro: true, enterprise: true },
      { name: "Trade journal & review", free: false, pro: true, enterprise: true },
      { name: "Multi-account support", free: false, pro: false, enterprise: true },
      { name: "API access", free: false, pro: false, enterprise: true },
    ],
    roadmap: [
      { title: "Early access at t.xingai.app", status: "in-progress" },
      { title: "Pre-market checklist export", status: "planned" },
      { title: "Trade journal & end-of-day review", status: "planned" },
      { title: "Public launch", status: "planned" },
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
      canDo: "结合偏好、饮食语境和每周计划，给出餐食建议。",
      bestFor: "想吃得更健康，但不想每天精细记录的人。",
      clickTarget: "产品详情、免费 Demo 和源码选项。",
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
      canDo: "把冰箱或储物柜里的食材变成一道可执行的菜和烹饪步骤。",
      bestFor: "想立刻决定今天做什么的忙碌家庭厨师。",
      clickTarget: "产品详情、在线 Demo 和 GitHub 源码。",
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
      canDo: "根据场景、天气和风格语境推荐穿搭。",
      bestFor: "想更快、更有信心完成日常穿搭选择的人。",
      clickTarget: "产品详情和在线 Demo。",
      features: ["AI 穿搭推荐", "天气与场景语境", "模特效果预览", "本地档案与已保存造型"],
      roadmap: ["AI 穿搭推荐", "信心优先的决策流程", "结合衣橱的穿搭建议"],
    },
    "routine-ai": {
      tagline: "生活更稳定",
      category: "习惯 AI",
      description:
        "决定一个能坚持的每周节奏：描述习惯语境，选择重点与频率，获得一个现实计划、下一步行动和温和提醒。",
      canDo: "生成现实可坚持的习惯节奏、下一步行动和温和提醒。",
      bestFor: "想重建生活节奏，但不想被复杂效率系统压住的人。",
      clickTarget: "产品详情、免费 Demo 和 GitHub 源码。",
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
    "sat-ai": {
      tagline: "备考更聪明",
      category: "教育 AI",
      description:
        "面向 SAT 学生的错题复盘系统：拍照、上传截图或输入错题后，获得结构化 AI 反馈，解释错误原因，并转化为学习计划。",
      canDo: "通过 OCR、解释和下一步建议分析 SAT 数学与阅读写作错题。",
      bestFor: "想停止重复犯同类 SAT 错题的学生。",
      clickTarget: "产品详情和 sat.xingai.app 免费 Demo。",
      features: [
        "拍照 OCR 录入错题",
        "上传截图 OCR",
        "手动输入题目",
        "SAT 数学分析",
        "阅读与写作复盘",
        "解释 / 改进 / 概念 / 计划流程",
        "本地错题历史",
        "进度与薄弱点追踪",
        "更高每周分析额度",
        "学校或辅导机构定制配置",
      ],
      roadmap: [
        "拍照、上传和文字错题流程",
        "OpenAI SAT 错题分析",
        "深色与 Apple-like 浅色主题",
        "移动端网页相机与上传 QA",
        "跨设备学习历史同步",
        "导师和课堂仪表盘",
      ],
    },
    "parent-ai": {
      tagline: "家庭支持",
      category: "育儿 AI",
      description:
        "育儿决策支持，围绕作息、成长节点和温和建议，让你更有准备，而不是更焦虑。",
      canDo: "围绕作息、成长节点和下一步行动整理育儿决策。",
      bestFor: "想获得温和指导、减少信息过载的父母。",
      clickTarget: "路线图详情和 Early Access 联系入口。",
      roadmap: ["年龄相关成长节点追踪", "作息与日程建议", "公开预览"],
    },
    "travel-ai": {
      tagline: "旅行更好选",
      category: "旅行 AI",
      description:
        "旅行决策智能，帮助你比较目的地、行程取舍和本地信息，减少打开无数标签页的负担。",
      canDo: "比较目的地、行程取舍和本地语境。",
      bestFor: "想更快规划旅行、少开一堆网页的人。",
      clickTarget: "路线图详情和 Early Access 联系入口。",
      roadmap: ["目的地比较引擎", "行程决策流程", "公开预览"],
    },
    "investment-assistant": {
      tagline: "投资更系统",
      category: "金融 AI",
      description:
        "投资决策支持，用结构、语境和风险优先的框架帮助你按系统思考，而不是被新闻标题牵着走。",
      canDo: "整理市场语境、宏观信号和风险优先的决策框架。",
      bestFor: "想在做投资决定前先获得结构化视角的自主投资者。",
      clickTarget: "产品详情和在线决策仪表盘。",
      features: ["宏观共识仪表盘", "多引擎投票视图", "AI 决策流", "法律免责声明与条款"],
      roadmap: [
        "Worker 缓存仪表盘",
        "上线 invest.xingai.app",
        "自愿支持 Stripe tips",
        "付费计划与订阅",
      ],
    },
    "performance-sim": {
      tagline: "\u6a21\u62df\u7b56\u7565",
      category: "\u91d1\u878d AI",
      description:
        "\u7ee9\u6548\u6a21\u62df\u5b9e\u9a8c\u5ba4\uff1a\u5bf9\u6bd4\u4e0d\u540c\u4ea4\u6613\u89c4\u5219\uff0c\u4f7f\u7528\u7eb8\u9762\u8d26\u672c\u67e5\u770b\u7ed3\u679c\uff0c\u4e0d\u6d89\u53ca\u5b9e\u9645\u5238\u5546\u4e0b\u5355\u3002",
      canDo: "\u7528\u4e0d\u540c\u89c4\u5219\u8dd1\u4e00\u6b21\u7eb8\u9762\u7ee9\u6548\u6a21\u62df\u3002",
      bestFor: "\u60f3\u5148\u9a8c\u8bc1\u89c4\u5219\uff0c\u518d\u51b3\u5b9a\u8981\u4e0d\u8981\u5f53\u6210\u771f\u7684\u8def\u7ebf\u7684\u4eba\u3002",
      clickTarget: "\u6253\u5f00 lab.xingai.app \u7684\u5728\u7ebf Demo\u3002",
    },
    "t-today": {
      tagline: "\u4eca\u65e5\u8ba1\u5212",
      category: "\u91d1\u878d AI",
      description:
        "\u4ea4\u6613\u65e5\u8ba1\u5212\u52a9\u624b\uff1a\u628a\u6301\u4ed3\u622a\u56fe\u53d8\u6210\u89c4\u5219 + AI \u4eca\u65e5\u8ba1\u5212\u3002\u5185\u6d4b\u514d\u8d39\u7533\u8bf7\uff0c\u8054\u7cfb\u6211\u4eec\u5373\u53ef\u52a0\u5165\u767d\u540d\u5355\u3002",
      canDo: "\u4ece\u6301\u4ed3\u622a\u56fe\u751f\u6210\u7ed3\u6784\u5316\u7684\u5f53\u65e5\u8ba1\u5212\u3002",
      bestFor: "\u60f3\u8981\u53ef\u91cd\u590d\u7684\u5f00\u76d8\u524d\u68c0\u67e5\u6e05\u5355\u548c\u7b56\u7565\u8ba1\u5212\u7684\u6d3b\u8dc3\u4ea4\u6613\u8005\u3002",
      clickTarget: "\u514d\u8d39\u7533\u8bf7\u5185\u6d4b\uff0c\u901a\u8fc7\u540e\u767b\u5f55 t.xingai.app\u3002",
    },
  },
  ko: {
    "meal-coach": {
      tagline: "더 명확하게 먹기",
      category: "건강 AI",
      description:
        "AI 식사 결정 도우미입니다. 지금 무엇을 먹을지, 어떤 순서로 먹을지 빠르게 정하고 필요할 때 건강 맥락을 더합니다.",
      canDo: "선호, 식단 맥락, 주간 계획에 맞춰 식사를 제안합니다.",
      bestFor: "모든 것을 기록하지 않고 더 건강하게 먹고 싶은 사람.",
      clickTarget: "제품 상세, 무료 데모, 소스 코드 옵션.",
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
      canDo: "냉장고나 팬트리 재료를 실행 가능한 요리와 조리 단계로 바꿉니다.",
      bestFor: "지금 무엇을 만들지 빠르게 정해야 하는 바쁜 홈쿡.",
      clickTarget: "제품 상세, 라이브 데모, GitHub 소스.",
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
      canDo: "상황, 날씨, 스타일 맥락에 맞춰 의상을 추천합니다.",
      bestFor: "매일 더 빠르고 자신 있게 옷을 고르고 싶은 사람.",
      clickTarget: "제품 상세와 라이브 데모.",
      features: ["AI 의상 추천", "날씨와 상황 맥락", "데모 모델 미리보기", "로컬 프로필과 저장된 룩"],
      roadmap: ["AI 의상 추천", "확신 우선 결정 흐름", "옷장 기반 의상 제안"],
    },
    "routine-ai": {
      tagline: "더 나은 리듬",
      category: "습관 AI",
      description:
        "지속 가능한 주간 리듬을 결정합니다. 습관 맥락, 초점, 빈도를 정하면 현실적인 계획과 다음 행동, 부드러운 알림을 제공합니다.",
      canDo: "현실적인 습관 리듬, 다음 행동, 부드러운 알림을 만듭니다.",
      bestFor: "복잡한 생산성 시스템 없이 루틴을 다시 세우고 싶은 사람.",
      clickTarget: "제품 상세, 무료 데모, GitHub 소스.",
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
    "sat-ai": {
      tagline: "더 똑똑한 SAT 준비",
      category: "교육 AI",
      description:
        "SAT 오답 복습 시스템입니다. 사진, 스크린샷 업로드, 직접 입력으로 틀린 문제를 추가하고, AI가 오류 원인과 개선 계획을 구조화해 줍니다.",
      canDo: "OCR, 설명, 다음 단계를 통해 SAT 수학과 Reading & Writing 오답을 분석합니다.",
      bestFor: "같은 SAT 실수를 반복하지 않고 싶은 학생.",
      clickTarget: "제품 상세와 sat.xingai.app 무료 데모.",
      features: [
        "사진 OCR 오답 캡처",
        "스크린샷 업로드 OCR",
        "직접 문제 입력",
        "SAT 수학 분석",
        "Reading & Writing 복습",
        "설명 / 개선 / 개념 / 계획 흐름",
        "로컬 오답 기록",
        "진도와 약점 추적",
        "더 높은 주간 분석 한도",
        "학교 또는 튜터링 맞춤 설정",
      ],
      roadmap: [
        "사진, 업로드, 텍스트 오답 흐름",
        "OpenAI 기반 SAT 오답 분석",
        "다크 및 Apple-like 라이트 테마",
        "모바일 웹 카메라와 업로드 QA",
        "기기 간 학습 기록 동기화",
        "튜터와 교실 대시보드",
      ],
    },
    "parent-ai": {
      tagline: "가족 지원",
      category: "육아 AI",
      description:
        "일정, 성장 단계, 부드러운 가이드를 통해 부담보다 준비감을 주는 육아 결정 지원입니다.",
      canDo: "루틴, 성장 단계, 다음 행동을 중심으로 육아 결정을 정리합니다.",
      bestFor: "정보 과부하 없이 차분한 안내를 원하는 부모.",
      clickTarget: "로드맵 상세와 얼리 액세스 문의.",
      roadmap: ["나이별 성장 단계 추적", "일정과 루틴 제안", "공개 프리뷰"],
    },
    "travel-ai": {
      tagline: "더 잘 여행하기",
      category: "여행 AI",
      description:
        "목적지 선택, 일정의 장단점, 현지 맥락을 정리해 탭 과부하 없이 더 나은 여행 결정을 돕습니다.",
      canDo: "목적지, 일정의 장단점, 현지 맥락을 비교합니다.",
      bestFor: "여러 탭을 오가지 않고 더 빠르게 여행을 계획하고 싶은 사람.",
      clickTarget: "로드맵 상세와 얼리 액세스 문의.",
      roadmap: ["목적지 비교 엔진", "일정 결정 흐름", "공개 프리뷰"],
    },
    "investment-assistant": {
      tagline: "더 체계적으로 투자하기",
      category: "금융 AI",
      description:
        "뉴스 헤드라인이 아니라 구조, 맥락, 위험 우선 프레임으로 투자 결정을 생각하도록 돕습니다.",
      canDo: "시장 맥락, 매크로 신호, 위험 우선 결정 프레임을 정리합니다.",
      bestFor: "결정 전에 구조화된 관점을 원하는 자기주도 투자자.",
      clickTarget: "제품 상세와 라이브 결정 대시보드.",
      features: ["매크로 컨센서스 대시보드", "다중 엔진 투표 보기", "AI 결정 피드", "법적 고지와 약관"],
      roadmap: [
        "Worker 캐시 대시보드",
        "invest.xingai.app 라이브",
        "자발적 후원 Stripe tips",
        "유료 플랜과 구독",
      ],
    },
    "performance-sim": {
      tagline: "\uaddc\uce59 \uc2dc\ubbac\ub808\uc774\uc158",
      category: "\uae08\uc735 AI",
      description:
        "\uc131\uacfc \uc2dc\ubbac\ub808\uc774\uc158 \ub7a9\u2014\ub2e4\uc591\ud55c \uac70\ub798 \uaddc\uce59\uc744 \ube44\uad50\ud558\uace0 \ube0c\ub85c\ucee4 \uc5c6\uc774 \uc885\uc774 \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.",
      canDo: "\ub2e4\ub978 \uaddc\uce59 \uc138\ud2b8\ub85c \uc885\uc774 \uc131\uacfc\ub97c \uc2dc\ubbac\ub808\uc774\uc158\ud569\ub2c8\ub2e4.",
      bestFor: "\uc2e4\uc804 \uc804\uc5d0 \uaddc\uce59\uc744 \uac80\uc99d\ud558\uace0 \uc2f6\uc740 \uc0ac\ub78c\uc5d0\uac8c \uc801\ud569\ud569\ub2c8\ub2e4.",
      clickTarget: "lab.xingai.app \ub77c\uc774\ube0c \ub370\ubaa8\ub97c \uc5f4\uc5b4\uc694.",
    },
    "t-today": {
      tagline: "\uc624\ub298 \uacc4\ud68d",
      category: "\uae08\uc735 AI",
      description:
        "\ub9e4\uc77c \uac70\ub798 \uacc4\ud68d \ub3c4\uc6b0\ubbf8\u2014\ubcf4\uc720 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uaddc\uce59 + AI \uc624\ub298 \uacc4\ud68d\uc73c\ub85c \ubc14\uafb8\uc5b4 \uc90d\ub2c8\ub2e4. \uc5bc\ub9ac \uc561\uc138\uc2a4 \uc694\uccad \uac00\ub2a5\ud569\ub2c8\ub2e4.",
      canDo: "\ubcf4\uc720 \uc2a4\ud06c\ub9b0\uc0f7\uc744 \uad6c\uc870\ud654\ud558\uc5ec \uc624\ub298 \uacc4\ud68d\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.",
      bestFor: "\uc7a5 \uc2dc\uc791 \uc804 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\uc640 \uacc4\ud68d\uc744 \uc2b5\uad00\ud654\ud558\uace0 \uc2f6\uc740 \ud2b8\ub808\uc774\ub354\uc5d0\uac8c \uc801\ud569\ud569\ub2c8\ub2e4.",
      clickTarget: "\ubb34\ub8cc \uc5bc\ub9ac \uc561\uc138\uc2a4 \uc694\uccad \ud6c4 t.xingai.app\uc5d0 \ub85c\uadf8\uc778.",
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
    canDo: copy.canDo ?? app.canDo,
    bestFor: copy.bestFor ?? app.bestFor,
    clickTarget: copy.clickTarget ?? app.clickTarget,
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
