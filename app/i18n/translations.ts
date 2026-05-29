export type Locale = "en" | "zh" | "ko";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ko: "한국어",
};

const translations = {
  en: {
    // Nav
    navHome: "Home",
    navApps: "Apps",
    navStory: "Story",
    navAbout: "About",
    navContact: "Contact",
    navMenu: "Menu",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    drawerMain: "Main",
    drawerSettings: "Settings",
    drawerAiSystems: "AI Systems",
    drawerFreeDemo: "Free Demo",
    drawerLanguage: "Language",
    drawerTheme: "Theme",
    themeLabel: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    footerNav: "Site",
    footerCustomAi: "Custom AI",
    footerCtaHeading: "Ready to try a clearer AI decision system?",
    footerCtaLead: "Live tools are free during public beta.",
    footerTryDemo: "Try free demo",
    footerSeeSystems: "See all systems",
    footerProduct: "Product",
    footerCompany: "Company",
    footerResources: "Resources",
    footerLegal: "Legal",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerDisclaimer: "Disclaimer",
    legalUpdated: "Last updated",
    legalRelated: "Related policies",
    legalNotFound: "Page not found",

    // Home
    heroBrand: "XingAI",
    heroValuePill: "AI decision systems, not just chat",
    tagline: "Get the right decision, every time.",
    heroSub:
      "AI answers for the questions you face every day\u2014what to eat, what to wear, how to study, and where to invest. Ten focused systems span meal planning, cooking, outfits, habits, SAT prep, parenting, travel, investing, Performance Sim backtests, and T Today plans. English \u00b7 \u4e2d\u6587 \u00b7 \ud55c\uad6d\uc5b4.",
    heroStoryLink: "How it fits together",
    heroGridLabel: "Our AI decision systems",
    heroPreviewLabel: "System preview",
    heroCoreSystems: "Explore core systems",
    homeAppsHeading: "AI systems, one platform",
    homeAppsLead:
      "Each product is a focused decision system\u2014not a generic chatbot. We ship publicly as the platform grows.",
    homeDemosHeading: "Demos",
    homeDemosLead:
      "Mobile product previews — open live demos in a new tab. T Today early access is free to request.",
    homeDemoCategoryInvest: "Invest",
    homeDemoOpen: "Open demo",
    homeDemoBadgeDemo: "Demo",
    homeDemoBadgeEarlyAccess: "Early access",
    homeDemoPerfName: "Performance Sim",
    homeDemoPerfLead: "Same signal. Different rules. See the paper ledger outcomes.",
    homeDemoTTodayName: "T Today",
    homeDemoTTodayLead:
      "Screenshot holdings \u2192 rules + AI plan for today. Free to request early access at t.xingai.app.",
    homeDemoRequestEarlyAccess: "Request early access",
    appTTodayEarlyAccessBanner:
      "t.xingai.app is invite-only during early access. It\u2019s free to ask\u2014email us and we\u2019ll add you to the allowlist.",
    homeDemoDisclaimer: "Paper structure only \u00b7 Not investment advice \u00b7 No broker integration.",
    viewAllApps: "Try free demo",
    homeCta: "Get in touch",
    publicBetaNote: "All live tools are currently free to try during public beta.",
    heroQuickDemosLabel: "Jump into a free demo",
    heroQuickDemoHint: "Opens live tool",
    answerHeading: "Quick answers",
    answerLead:
      "Short answers for people and AI search systems trying to understand what XingAI does.",
    answerQ1: "What is XingAI?",
    answerA1:
      "XingAI is a platform of 10 focused AI decision systems: Meal Coach, Cook AI, Outfit AI, Routine AI, SAT AI, Parent AI, Travel AI, Invest AI, Performance Sim, and T Today.",
    answerQ2: "How is XingAI different from a chatbot?",
    answerA2:
      "XingAI products are built around structured decisions and clear next actions instead of open-ended generic chat.",
    answerQ3: "What can I use XingAI for today?",
    answerA3:
      "You can try public demos for Meal Coach, Cook AI, Outfit AI, Routine AI, SAT AI, Travel AI, Invest AI, and Performance Sim. Parent AI is on the roadmap. T Today is in free early access via the Contact page. All apps are mobile-first with light/dark themes.",
    answerQ4: "Can XingAI build a custom AI product?",
    answerA4:
      "Yes. XingAI helps founders and teams design, build, and deploy focused AI products from idea to launch.",
    answerQ5: "How do I get access to T Today (t.xingai.app)?",
    answerA5:
      "T Today is in early access. It is free to ask — email contact@xingai.app or use the Contact page. We add your Google account to the allowlist, then you sign in at t.xingai.app.",

    // Build With Us
    buildHeading: "Have an idea? We\u2019ll build it with you.",
    buildLead:
      "We don\u2019t just build our own AI products\u2014we help teams and founders bring their ideas to life. From concept to launch, we work as your AI team: architecture, design, engineering, and deployment.",
    buildPoint1: "Share your idea \u2014 we\u2019ll map it into a focused AI product",
    buildPoint2: "We design, build, and ship \u2014 you stay in the driver\u2019s seat",
    buildPoint3: "Custom AI solutions on the same platform we use ourselves",
    buildCta: "Tell us your idea",

    // Co-founders (shared: home + about)
    cofounders: "Co-founders",
    cofounder: "Co-founder",
    aiArchitect: "AI architect",
    xingBio: "AI architecture, product direction, and decision intelligence\u2014how we shape models, data, and UX so the system stays understandable.",
    allenBio: "AI architecture, engineering, and reliable systems\u2014Next.js, FastAPI, and local AI wired so behavior stays traceable and safe.",
    contactNote: "Questions for either of us?",
    contactTail: "\u2014 we both read this inbox.",

    // About
    aboutHeading: "About xingai.app",
    aboutLead:
      "XingAI builds AI decision systems for everyday life. We are founders and AI architects shipping focused products\u2014not wrappers or generic chat.",
    aboutMission: "Mission",
    aboutMissionText: "Ship AI tools that help people make better everyday decisions\u2014food, health, finance, productivity\u2014without complexity or hype. Every product we launch prioritizes reliability and clarity over feature count.",
    aboutStack: "Tech stack",
    aboutStackText: "Next.js for the frontend. FastAPI for the backend. Local AI models where privacy matters. Vercel for deployment. Everything open where possible.",
    aboutBuilding: "Building in public",
    aboutBuildingText: "Experiments, refinements, and releases\u2014we share the process on GitHub, LinkedIn, and X. We favor shipping and iterating over perfecting in silence.",
    aboutStoryLink: "How our products fit together",

    // Story / ecosystem
    storyEyebrow: "Product map",
    storyHeading: "How XingAI fits together",
    storyLead:
      "One platform of focused decision systems\u2014not a pile of chatbots. Everyday tools and an invest cluster that share mobile-first web apps, light/dark themes, and EN / \u4e2d\u6587 / \ud55c\uad6d\uc5b4 where supported.",
    storyPrincipleTitle: "What we build",
    storyPrincipleLead:
      "Each app answers one decision with structured output and a clear next step.",
    storyPrinciplePoint1:
      "Everyday: what to eat, cook, wear, practice, plan travel, or coordinate family tasks.",
    storyPrinciplePoint2:
      "Same UX habits across products: mobile web, theme toggle, localized UI on the marketing site and in apps that ship i18n.",
    storyPrinciplePoint3:
      "Invest: dashboard context on invest.xingai.app, paper rule tests on lab.xingai.app, daily T plans on t.xingai.app (early access).",
    storyClustersTitle: "Two clusters",
    storyClustersLead:
      "Apps work standalone. Invest tools are meant to reinforce each other without one forced login.",
    storyClusterEverydayTitle: "Everyday decisions",
    storyClusterEverydayLead:
      "Food, style, habits, SAT, family, and travel\u2014each product owns a single job.",
    storyClusterInvestTitle: "Invest & trading tools",
    storyClusterInvestLead:
      "Portfolio context, Performance Sim on the lab, and T Today for screenshot \u2192 rules \u2192 plan.",
    storyInvestFlowTitle: "Invest cluster flow",
    storyInvestFlowLead:
      "Read macro and symbol context first, stress-test rules on the lab, then request free early access for T Today when you want a daily plan.",
    storyInvestRoleCore:
      "invest.xingai.app \u2014 decision dashboard: macro radar, allocations, and symbol context from precomputed cache.",
    storyInvestRoleLab:
      "lab.xingai.app \u2014 Performance Sim: same signals, different rule sets; paper ledger outcomes.",
    storyInvestRoleT:
      "t.xingai.app \u2014 T Today: holdings screenshot \u2192 rules + AI plan for today. Early access is free to request.",
    storyInvestDisclaimer:
      "Paper/simulation only \u00b7 Not investment advice \u00b7 No broker integration.",
    storyTryTitle: "Try it",
    storyTryLead:
      "Open public demos from Apps. For T Today, use Contact\u2014we add you to the allowlist at no cost during early access.",
    storyAboutTeaser: "Team, mission, and stack:",

    // Apps listing
    appsHeading: "Our AI systems",
    appsLead:
      "Decision intelligence across food, style, habits, investing, and more\u2014one coherent platform, not a random tool list.",
    appViewDetails: "View details",
    appComingSoonBadge: "Coming soon",
    appStatusLive: "\ud83d\udfe2 Live",
    appStatusDemo: "\ud83d\udfe1 Demo",
    appStatusComingSoon: "\u23f3 Coming soon",
    appCardCanDo: "Can do",
    appCardBestFor: "Best for",
    appCardClickTarget: "Opens",
    appComingSoonBanner:
      "This decision system is on our public roadmap. We share direction early\u2014reach out for collaboration or early access.",
    appEarlyAccessCta: "Request early access",

    // App detail
    appDemo: "Live demo",
    appVersions: "Versions & pricing",
    appFeatures: "Features",
    appFree: "Free",
    appPro: "Pro",
    appEnterprise: "Enterprise",
    appFreePrice: "$0",
    appProPrice: "Contact us",
    appEnterprisePrice: "Contact us",
    appGetStarted: "Get started",
    appUpgrade: "Upgrade",
    appContactSales: "Contact sales",
    appSourceCode: "Want the full source code?",
    appSourceText: "Get the complete source code — Next.js, FastAPI, and OpenAI integration. Build, customize, and deploy your own version.",
    appGetSource: "Get source code on Gumroad",
    appSourceTextGithub:
      "Fork the open-source Next.js app — inventory scan, meal recommendations, and cooking steps. Deploy your own instance on Vercel.",
    appGetSourceGithub: "View source on GitHub",
    appCustom: "Need a custom version?",
    appCustomText: "We build tailored versions for teams and businesses. Tell us what you need and we\u2019ll scope it together.",
    appRoadmap: "Release roadmap",
    appRoadmapLead: "What\u2019s coming next for this product.",
    appScreenshots: "Screenshots",
    included: "Included",
    notIncluded: "\u2014",

    // Contact
    contactHeading: "Contact us",
    contactLead: "Have a question, want a custom version, or just want to say hi? We\u2019d love to hear from you.",
    contactEmailLabel: "Email us directly",
    contactEmailDesc: "We typically respond within 24 hours.",
    contactCustomLabel: "Custom builds",
    contactCustomDesc: "Need a tailored version of one of our apps? Describe your requirements and we\u2019ll send a proposal.",
    contactSocialsLabel: "Find us online",
    contactFormLabel: "Send us a message",
    contactFormDesc: "Fill in the form and we’ll reply within 24 hours.",
    contactFormName: "Your name",
    contactFormEmail: "Your email",
    contactFormSubject: "Subject",
    contactFormSubjectOptions: "General question,Early access request,Custom build enquiry,Bug report,Other",
    contactFormMessage: "Message",
    contactFormSend: "Send message",
    contactFormSending: "Sending…",
    contactFormSuccess: "Message sent! We’ll get back to you within 24 hours.",
    contactFormError: "Something went wrong. Please email us directly at contact@xingai.app.",

    // Footer
    elsewhere: "Elsewhere",
    footerBuild:
      "AI decision systems for everyday life\u2014new demos and releases land here first.",

    // Shared
    backToHome: "Back to home",
  },
  zh: {
    navHome: "\u9996\u9875",
    navApps: "\u5e94\u7528",
    navStory: "\u751f\u6001",
    navAbout: "\u5173\u4e8e",
    navContact: "\u8054\u7cfb",
    navMenu: "\u83dc\u5355",
    menuOpen: "\u6253\u5f00\u83dc\u5355",
    menuClose: "\u5173\u95ed\u83dc\u5355",
    drawerMain: "\u4e3b\u8981",
    drawerSettings: "\u8bbe\u7f6e",
    drawerAiSystems: "AI \u7cfb\u7edf",
    drawerFreeDemo: "\u514d\u8d39 Demo",
    drawerLanguage: "\u8bed\u8a00",
    drawerTheme: "\u4e3b\u9898",
    themeLabel: "\u4e3b\u9898",
    themeLight: "\u6d45\u8272",
    themeDark: "\u6df1\u8272",
    footerNav: "\u7f51\u7ad9\u5bfc\u822a",
    footerCustomAi: "\u5b9a\u5236 AI",
    footerCtaHeading: "\u51c6\u5907\u4f53\u9a8c\u66f4\u6e05\u6670\u7684 AI \u51b3\u7b56\u7cfb\u7edf\uff1f",
    footerCtaLead: "\u516c\u5f00 Beta \u671f\u95f4\uff0c\u5df2\u4e0a\u7ebf\u5de5\u5177\u53ef\u514d\u8d39\u8bd5\u7528\u3002",
    footerTryDemo: "\u4f53\u9a8c\u514d\u8d39 Demo",
    footerSeeSystems: "\u67e5\u770b\u6240\u6709\u7cfb\u7edf",
    footerProduct: "\u4ea7\u54c1",
    footerCompany: "\u516c\u53f8",
    footerResources: "\u8d44\u6e90",
    footerLegal: "\u6cd5\u5f8b",
    footerPrivacy: "\u9690\u79c1\u653f\u7b56",
    footerTerms: "\u670d\u52a1\u6761\u6b3e",
    footerDisclaimer: "\u514d\u8d23\u58f0\u660e",
    legalUpdated: "\u6700\u540e\u66f4\u65b0",
    legalRelated: "\u76f8\u5173\u653f\u7b56",
    legalNotFound: "\u9875\u9762\u672a\u627e\u5230",

    heroBrand: "XingAI",
    heroValuePill: "AI \u51b3\u7b56\u7cfb\u7edf\uff0c\u4e0d\u53ea\u662f\u804a\u5929",
    tagline: "\u6bcf\u4e00\u6b21\uff0c\u90fd\u66f4\u6e05\u695a\u5730\u505a\u51b3\u5b9a\u3002",
    heroSub:
      "\u6bcf\u5929\u90fd\u5728\u95ee\u7684\u95ee\u9898\uff0cAI \u6765\u66ff\u4f60\u56de\u7b54\u2014\u2014\u5403\u4ec0\u4e48\u3001\u7a7f\u4ec0\u4e48\u3001\u600e\u4e48\u5b66\u3001\u5f80\u54ea\u6295\u3002\u5341\u4e2a\u4e13\u6ce8\u7cfb\u7edf\u8986\u76d6\u996e\u98df\u3001\u70f9\u996a\u3001\u7a7f\u642d\u3001\u4e60\u60ef\u3001SAT\u3001\u5bb6\u957f\u3001\u65c5\u884c\u3001\u6295\u8d44\u3001Performance Sim \u56de\u6d4b\u4e0e T Today \u65e5\u5185\u8ba1\u5212\u3002English \u00b7 \u4e2d\u6587 \u00b7 \ud55c\uad6d\uc5b4\u3002",
    heroStoryLink: "\u4ea7\u54c1\u5982\u4f55\u7ec4\u6210\u751f\u6001",
    heroGridLabel: "\u6211\u4eec\u7684 AI \u51b3\u7b56\u7cfb\u7edf",
    heroPreviewLabel: "\u7cfb\u7edf\u9884\u89c8",
    heroCoreSystems: "\u63a2\u7d22\u6838\u5fc3\u7cfb\u7edf",
    homeAppsHeading: "\u4e00\u4f53\u5e73\u53f0\uff0c\u591a\u4e2a AI \u7cfb\u7edf",
    homeAppsLead:
      "\u6bcf\u4e00\u6b3e\u4ea7\u54c1\u90fd\u662f\u4e13\u6ce8\u7684\u51b3\u7b56\u7cfb\u7edf\uff0c\u4e0d\u662f\u6cdb\u6cdb\u7684\u804a\u5929\u673a\u5668\u4eba\u3002\u6211\u4eec\u5728\u516c\u5f00\u8fed\u4ee3\u4e2d\u6301\u7eed\u53d1\u5e03\u3002",
    homeDemosHeading: "\u5728\u7ebf\u6f14\u793a",
    homeDemosLead:
      "\u79fb\u52a8\u7aef\u4ea7\u54c1\u9884\u89c8\u2014\u516c\u5f00 Demo \u65b0\u6807\u7b7e\u6253\u5f00\u3002T Today \u5185\u6d4b\u514d\u8d39\u7533\u8bf7\u3002",
    homeDemoCategoryInvest: "\u6295\u8d44",
    homeDemoOpen: "\u6253\u5f00\u6f14\u793a",
    homeDemoBadgeDemo: "Demo",
    homeDemoBadgeEarlyAccess: "\u5185\u6d4b",
    homeDemoPerfName: "\u7b56\u7565\u6a21\u62df",
    homeDemoPerfLead: "\u540c\u4e00\u4fe1\u53f7\uff0c\u4e0d\u540c\u89c4\u5219\u3002\u770b\u7eb8\u9762\u8d26\u672c\u4f1a\u53d8\u6210\u4ec0\u4e48\u6837\u3002",
    homeDemoTTodayName: "\u4eca\u65e5\u505aT",
    homeDemoTTodayLead:
      "\u5f00\u76d8\u524d\u622a\u56fe\u6301\u4ed3 \u2192 \u89c4\u5219 + AI \u4eca\u65e5\u8ba1\u5212\u3002t.xingai.app \u5185\u6d4b\u514d\u8d39\u7533\u8bf7\u3002",
    homeDemoRequestEarlyAccess: "\u7533\u8bf7\u5185\u6d4b",
    appTTodayEarlyAccessBanner:
      "t.xingai.app \u76ee\u524d\u4e3a\u9080\u8bf7\u5236\u5185\u6d4b\u3002\u514d\u8d39\u7533\u8bf7\u5373\u53ef\uff0c\u8054\u7cfb\u6211\u4eec\u52a0\u5165\u767d\u540d\u5355\u540e\u767b\u5f55\u4f7f\u7528\u3002",
    homeDemoDisclaimer: "\u4ec5\u7eb8\u9762\u7ed3\u6784 \u00b7 \u975e\u6295\u8d44\u5efa\u8bae \u00b7 \u975e\u5238\u5546 \u00b7 \u4e0d\u5bf9\u63a5\u4e0b\u5355\u3002",
    viewAllApps: "\u7acb\u5373\u4f53\u9a8c\u514d\u8d39 Demo",
    homeCta: "\u8054\u7cfb\u6211\u4eec",
    publicBetaNote: "\u516c\u5f00 Beta \u671f\u95f4\uff0c\u6240\u6709\u5df2\u4e0a\u7ebf\u5de5\u5177\u76ee\u524d\u90fd\u53ef\u514d\u8d39\u8bd5\u7528\u3002",
    heroQuickDemosLabel: "\u76f4\u63a5\u8fdb\u5165\u514d\u8d39 Demo",
    heroQuickDemoHint: "\u6253\u5f00\u5df2\u4e0a\u7ebf\u5de5\u5177",
    answerHeading: "快速了解",
    answerLead: "给用户和 AI 搜索系统的简短答案，帮助快速理解 XingAI 是什么。",
    answerQ1: "XingAI 是什么？",
    answerA1:
      "XingAI 是 10 个专注 AI 决策系统的平台：Meal Coach、Cook AI、Outfit AI、Routine AI、SAT AI、Parent AI、Travel AI、Invest AI、Performance Sim 与 T Today。",
    answerQ2: "XingAI 和普通聊天机器人有什么不同？",
    answerA2:
      "XingAI 产品围绕结构化决策和明确下一步行动设计，而不是开放式泛聊天。",
    answerQ3: "现在可以用 XingAI 做什么？",
    answerA3:
      "可公开体验 Meal Coach、Cook AI、Outfit AI、Routine AI、SAT AI、Travel AI、Invest AI 与 Performance Sim。Parent AI 在路线图中。T Today 可通过联系页免费申请内测。均为移动优先，支持浅色/深色主题。",
    answerQ4: "XingAI 可以定制 AI 产品吗？",
    answerA4:
      "可以。XingAI 帮助创始人和团队从想法到上线，设计、开发并部署专注的 AI 产品。",
    answerQ5: "如何申请 t.xingai.app（今日做T）内测？",
    answerA5:
      "目前为邀请制内测，可免费申请：发邮件至 contact@xingai.app 或使用联系页面。我们把你加入白名单后，即可用 Google 登录 t.xingai.app。",

    buildHeading: "\u6709\u60f3\u6cd5\uff1f\u6211\u4eec\u5e2e\u4f60\u5b9e\u73b0",
    buildLead:
      "\u6211\u4eec\u4e0d\u4ec5\u5f00\u53d1\u81ea\u5df1\u7684 AI \u4ea7\u54c1\u2014\u2014\u6211\u4eec\u4e5f\u5e2e\u52a9\u56e2\u961f\u548c\u521b\u59cb\u4eba\u5c06\u60f3\u6cd5\u53d8\u4e3a\u73b0\u5b9e\u3002\u4ece\u6982\u5ff5\u5230\u53d1\u5e03\uff0c\u6211\u4eec\u4f5c\u4e3a\u4f60\u7684 AI \u56e2\u961f\uff1a\u67b6\u6784\u3001\u8bbe\u8ba1\u3001\u5f00\u53d1\u548c\u90e8\u7f72\u3002",
    buildPoint1: "\u5206\u4eab\u4f60\u7684\u60f3\u6cd5 \u2014 \u6211\u4eec\u5c06\u5176\u8f6c\u5316\u4e3a\u4e13\u6ce8\u7684 AI \u4ea7\u54c1",
    buildPoint2: "\u6211\u4eec\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u4ea4\u4ed8 \u2014 \u4f60\u638c\u63a7\u65b9\u5411",
    buildPoint3: "\u5728\u6211\u4eec\u81ea\u5df1\u4f7f\u7528\u7684\u540c\u4e00\u5e73\u53f0\u4e0a\u5b9a\u5236 AI \u89e3\u51b3\u65b9\u6848",
    buildCta: "\u544a\u8bc9\u6211\u4eec\u4f60\u7684\u60f3\u6cd5",

    cofounders: "\u8054\u5408\u521b\u59cb\u4eba",
    cofounder: "\u8054\u5408\u521b\u59cb\u4eba",
    aiArchitect: "AI \u67b6\u6784\u5e08",
    xingBio: "AI \u67b6\u6784\u3001\u4ea7\u54c1\u65b9\u5411\u4e0e\u51b3\u7b56\u667a\u80fd\u2014\u2014\u6211\u4eec\u5982\u4f55\u5851\u9020\u6a21\u578b\u3001\u6570\u636e\u548c\u7528\u6237\u4f53\u9a8c\uff0c\u4f7f\u7cfb\u7edf\u59cb\u7ec8\u4fdd\u6301\u53ef\u7406\u89e3\u3002",
    allenBio: "AI \u67b6\u6784\u3001\u5de5\u7a0b\u4e0e\u53ef\u9760\u7cfb\u7edf\u2014\u2014Next.js\u3001FastAPI \u548c\u672c\u5730 AI \u65e0\u7f1d\u8fde\u63a5\uff0c\u786e\u4fdd\u884c\u4e3a\u53ef\u8ffd\u6eaf\u4e14\u5b89\u5168\u3002",
    contactNote: "\u6709\u4efb\u4f55\u95ee\u9898\uff1f",
    contactTail: "\u2014\u2014 \u6211\u4eec\u90fd\u4f1a\u67e5\u770b\u8fd9\u4e2a\u90ae\u7bb1\u3002",

    aboutHeading: "\u5173\u4e8e xingai.app",
    aboutLead:
      "XingAI \u6253\u9020\u9762\u5411\u65e5\u5e38\u751f\u6d3b\u7684 AI \u51b3\u7b56\u7cfb\u7edf\u3002\u6211\u4eec\u662f\u521b\u59cb\u4eba\u4e0e AI \u67b6\u6784\u5e08\uff0c\u4ea4\u4ed8\u7126\u70b9\u4ea7\u54c1\u2014\u2014\u4e0d\u662f\u5957\u58f3\u6216\u6cdb\u7528\u804a\u5929\u3002",
    aboutMission: "\u4f7f\u547d",
    aboutMissionText: "\u6253\u9020 AI \u5de5\u5177\uff0c\u5e2e\u52a9\u4eba\u4eec\u505a\u51fa\u66f4\u597d\u7684\u65e5\u5e38\u51b3\u7b56\u2014\u2014\u7f8e\u98df\u3001\u5065\u5eb7\u3001\u8d22\u52a1\u3001\u751f\u4ea7\u529b\u2014\u2014\u65e0\u9700\u590d\u6742\u6027\u6216\u70ed\u5ea6\u3002\u6bcf\u4e2a\u4ea7\u54c1\u90fd\u4f18\u5148\u8003\u8651\u53ef\u9760\u6027\u548c\u6e05\u6670\u5ea6\u3002",
    aboutStack: "\u6280\u672f\u6808",
    aboutStackText: "\u524d\u7aef Next.js\u3002\u540e\u7aef FastAPI\u3002\u9690\u79c1\u4f18\u5148\u65f6\u4f7f\u7528\u672c\u5730 AI \u6a21\u578b\u3002Vercel \u90e8\u7f72\u3002\u5c3d\u53ef\u80fd\u5f00\u6e90\u3002",
    aboutBuilding: "\u516c\u5f00\u6784\u5efa",
    aboutBuildingText: "\u5b9e\u9a8c\u3001\u4f18\u5316\u548c\u53d1\u5e03\u2014\u2014\u6211\u4eec\u5728 GitHub\u3001LinkedIn \u548c X \u4e0a\u5206\u4eab\u8fc7\u7a0b\u3002\u6211\u4eec\u504f\u597d\u53d1\u5e03\u548c\u8fed\u4ee3\uff0c\u800c\u975e\u65e0\u58f0\u5b8c\u5584\u3002",
    aboutStoryLink: "\u4ea7\u54c1\u5982\u4f55\u7ec4\u6210\u751f\u6001",

    storyEyebrow: "\u4ea7\u54c1\u5730\u56fe",
    storyHeading: "XingAI \u4ea7\u54c1\u751f\u6001\u600e\u4e48\u7ec4\u5408",
    storyLead:
      "\u4e00\u4e2a\u5e73\u53f0\u3001\u591a\u4e2a\u51b3\u7b56\u7cfb\u7edf\u2014\u2014\u4e0d\u662f\u4e00\u5806\u804a\u5929\u673a\u5668\u4eba\u3002\u65e5\u5e38\u5de5\u5177\u4e0e\u6295\u8d44\u96c6\u7fa4\u5171\u4eab\u79fb\u52a8\u7aef\u3001\u6d45/\u6df1\u8272\u4e3b\u9898\uff0c\u652f\u6301\u82f1\u6587 / \u4e2d\u6587 / \u97e9\u6587\uff08\u5404\u4ea7\u54c1\u6309\u5b9e\u9645\u652f\u6301\u60c5\u51b5\u3002",
    storyPrincipleTitle: "\u6211\u4eec\u505a\u4ec0\u4e48",
    storyPrincipleLead: "\u6bcf\u4e2a\u5e94\u7528\u56de\u7b54\u4e00\u4e2a\u51b3\u7b56\uff0c\u8f93\u51fa\u7ed3\u6784\u5316\u7684\u7ed3\u679c\u548c\u660e\u786e\u7684\u4e0b\u4e00\u6b65\u3002",
    storyPrinciplePoint1:
      "\u65e5\u5e38\uff1a\u5403\u4ec0\u4e48\u3001\u600e\u4e48\u70f9\u3001\u7a7f\u4ec0\u4e48\u3001\u4e60\u60ef\u3001SAT\u3001\u51fa\u884c\u3001\u5bb6\u5ead\u534f\u4f5c\u3002",
    storyPrinciplePoint2:
      "\u4ea7\u54c1\u4e4b\u95f4\u4e60\u60ef\u4e00\u81f4\uff1a\u79fb\u52a8\u7f51\u9875\u3001\u4e3b\u9898\u5207\u6362\u3001\u8425\u9500\u7ad9\u4e0e\u5df2\u4e0a\u7ebf\u5e94\u7528\u7684\u591a\u8bed\u8a00\u3002",
    storyPrinciplePoint3:
      "\u6295\u8d44\uff1ainvest.xingai.app \u770b\u677f\u5757\u4e0e\u7b26\u53f7\u4e0a\u4e0b\u6587\uff0clab.xingai.app \u6d4b\u89c4\u5219\uff0ct.xingai.app \u6bcf\u65e5 T \u8ba1\u5212\uff08\u5185\u6d4b\u7533\u8bf7\u514d\u8d39\u3002",
    storyClustersTitle: "\u4e24\u5927\u96c6\u7fa4",
    storyClustersLead:
      "\u5404\u5e94\u7528\u53ef\u72ec\u7acb\u4f7f\u7528\u3002\u6295\u8d44\u7ebf\u8bbe\u8ba1\u4e3a\u4e92\u76f8\u8865\u5145\uff0c\u4e0d\u5f3a\u5236\u5355\u4e00\u767b\u5f55\u3002",
    storyClusterEverydayTitle: "\u65e5\u5e38\u51b3\u7b56",
    storyClusterEverydayLead:
      "\u996e\u98df\u3001\u7a7f\u642d\u3001\u4e60\u60ef\u3001SAT\u3001\u5bb6\u5ead\u4e0e\u51fa\u884c\u2014\u2014\u6bcf\u4e2a\u4ea7\u54c1\u53ea\u505a\u4e00\u4ef6\u4e8b\u3002",
    storyClusterInvestTitle: "\u6295\u8d44\u4e0e\u4ea4\u6613\u5de5\u5177",
    storyClusterInvestLead:
      "\u6295\u8d44\u770b\u677f\u3001Performance Sim \u6a21\u62df\u76d8\u3001T Today \u622a\u56fe\u6301\u4ed3 \u2192 \u89c4\u5219 \u2192 \u8ba1\u5212\u3002",
    storyInvestFlowTitle: "\u6295\u8d44\u96c6\u7fa4\u94fe\u8def",
    storyInvestFlowLead:
      "\u5148\u770b\u5b8f\u89c2\u4e0e\u6807\u7684\u4e0a\u4e0b\u6587\uff0c\u518d\u5728 lab \u4e0a\u6d4b\u89c4\u5219\uff0c\u9700\u8981\u6bcf\u65e5\u8ba1\u5212\u65f6\u514d\u8d39\u7533\u8bf7 T Today \u5185\u6d4b\u3002",
    storyInvestRoleCore:
      "invest.xingai.app \u2014 \u51b3\u7b56\u770b\u677f\uff1a\u5b8f\u89c2\u96f7\u8fbe\u3001\u914d\u7f6e\u4e0e\u7b26\u53f7\u4e0a\u4e0b\u6587\uff08\u7f13\u5b58\u9884\u8ba1\u7b97\uff09\u3002",
    storyInvestRoleLab:
      "lab.xingai.app \u2014 Performance Sim\uff1a\u76f8\u540c\u4fe1\u53f7\u3001\u4e0d\u540c\u89c4\u5219\uff1b\u6a21\u62df\u76d8\u7ed3\u679c\u3002",
    storyInvestRoleT:
      "t.xingai.app \u2014 T Today\uff1a\u6301\u4ed3\u622a\u56fe \u2192 \u89c4\u5219 + \u4eca\u65e5 AI \u8ba1\u5212\u3002\u5185\u6d4b\u514d\u8d39\u7533\u8bf7\u3002",
    storyInvestDisclaimer:
      "\u4ec5\u6a21\u62df / \u7eb8\u9762 \u00b7 \u975e\u6295\u8d44\u5efa\u8bae \u00b7 \u65e0\u5238\u5546\u5bf9\u63a5\u3002",
    storyTryTitle: "\u5982\u4f55\u8bd5\u7528",
    storyTryLead:
      "\u5728\u5e94\u7528\u76ee\u5f55\u6253\u5f00\u516c\u5f00 Demo\u3002T Today \u8d70\u8054\u7cfb\u9875\u7533\u8bf7\u5185\u6d4b\uff0c\u6211\u4eec\u514d\u8d39\u52a0\u5165\u767d\u540d\u5355\u3002",
    storyAboutTeaser: "\u56e2\u961f\u3001\u4f7f\u547d\u4e0e\u6280\u672f\u6808\u89c1",

    appsHeading: "\u6211\u4eec\u7684 AI \u7cfb\u7edf",
    appsLead:
      "\u996e\u98df\u3001\u7a7f\u642d\u3001\u4e60\u60ef\u3001\u6295\u8d44\u7b49\u9886\u57df\u7684\u51b3\u7b56\u667a\u80fd\u2014\u2014\u540c\u4e00\u5e73\u53f0\u4e0b\u7684\u8fde\u8d2f\u4ea7\u54c1\u77e9\u9635\uff0c\u800c\u975e\u96f6\u6563\u5de5\u5177\u5217\u8868\u3002",
    appViewDetails: "\u67e5\u770b\u8be6\u60c5",
    appComingSoonBadge: "\u5373\u5c06\u63a8\u51fa",
    appStatusLive: "\ud83d\udfe2 \u5df2\u4e0a\u7ebf",
    appStatusDemo: "\ud83d\udfe1 \u6f14\u793a\u7248",
    appStatusComingSoon: "\u23f3 \u5373\u5c06\u5230\u6765",
    appCardCanDo: "\u80fd\u505a\u4ec0\u4e48",
    appCardBestFor: "\u9002\u5408\u8c01",
    appCardClickTarget: "\u70b9\u51fb\u540e\u53bb\u54ea",
    appComingSoonBanner:
      "\u8be5\u51b3\u7b56\u7cfb\u7edf\u5728\u6211\u4eec\u7684\u516c\u5f00\u8def\u7ebf\u56fe\u4e2d\u3002\u6211\u4eec\u65e9\u65e9\u5206\u4eab\u65b9\u5411\u2014\u2014\u6b22\u8fce\u8054\u7cfb\u5408\u4f5c\u6216\u62a2\u5148\u4f53\u9a8c\u3002",
    appEarlyAccessCta: "\u7533\u8bf7\u62a2\u5148\u4f53\u9a8c",

    appDemo: "\u5728\u7ebf\u6f14\u793a",
    appVersions: "\u7248\u672c\u4e0e\u4ef7\u683c",
    appFeatures: "\u529f\u80fd",
    appFree: "\u514d\u8d39\u7248",
    appPro: "\u4e13\u4e1a\u7248",
    appEnterprise: "\u4f01\u4e1a\u7248",
    appFreePrice: "\u514d\u8d39",
    appProPrice: "\u8054\u7cfb\u6211\u4eec",
    appEnterprisePrice: "\u8054\u7cfb\u6211\u4eec",
    appGetStarted: "\u5f00\u59cb\u4f7f\u7528",
    appUpgrade: "\u5347\u7ea7",
    appContactSales: "\u8054\u7cfb\u9500\u552e",
    appSourceCode: "\u60f3\u8981\u5b8c\u6574\u6e90\u4ee3\u7801\uff1f",
    appSourceText: "\u83b7\u53d6\u5b8c\u6574\u6e90\u4ee3\u7801 \u2014 Next.js\u3001FastAPI \u548c OpenAI \u96c6\u6210\u3002\u6784\u5efa\u3001\u81ea\u5b9a\u4e49\u5e76\u90e8\u7f72\u4f60\u81ea\u5df1\u7684\u7248\u672c\u3002",
    appGetSource: "\u5728 Gumroad \u83b7\u53d6\u6e90\u4ee3\u7801",
    appSourceTextGithub:
      "\u57fa\u4e8e\u5f00\u6e90 Next.js \u5e94\u7528 \u2014 \u98df\u6750\u626b\u63cf\u3001\u9910\u98df\u63a8\u8350\u4e0e\u70f9\u996a\u6b65\u9aa4\u3002\u53ef\u5728 Vercel \u90e8\u7f72\u81ea\u5df1\u7684\u5b9e\u4f8b\u3002",
    appGetSourceGithub: "\u5728 GitHub \u67e5\u770b\u6e90\u4ee3\u7801",
    appCustom: "\u9700\u8981\u5b9a\u5236\u7248\u672c\uff1f",
    appCustomText: "\u6211\u4eec\u4e3a\u56e2\u961f\u548c\u4f01\u4e1a\u6784\u5efa\u5b9a\u5236\u7248\u672c\u3002\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u9700\u6c42\uff0c\u6211\u4eec\u4f1a\u4e00\u8d77\u8ba8\u8bba\u3002",
    appRoadmap: "\u53d1\u5e03\u8def\u7ebf\u56fe",
    appRoadmapLead: "\u8be5\u4ea7\u54c1\u7684\u4e0b\u4e00\u6b65\u8ba1\u5212\u3002",
    appScreenshots: "\u622a\u56fe",
    included: "\u5305\u542b",
    notIncluded: "\u2014",

    contactHeading: "\u8054\u7cfb\u6211\u4eec",
    contactLead: "\u6709\u95ee\u9898\u3001\u9700\u8981\u5b9a\u5236\u7248\u672c\uff0c\u6216\u53ea\u662f\u60f3\u6253\u4e2a\u62db\u547c\uff1f\u6211\u4eec\u5f88\u4e50\u610f\u542c\u5230\u60a8\u7684\u58f0\u97f3\u3002",
    contactEmailLabel: "\u7ed9\u6211\u4eec\u53d1\u90ae\u4ef6",
    contactEmailDesc: "\u6211\u4eec\u901a\u5e38\u572824\u5c0f\u65f6\u5185\u56de\u590d\u3002",
    contactCustomLabel: "\u5b9a\u5236\u5f00\u53d1",
    contactCustomDesc: "\u9700\u8981\u6211\u4eec\u5e94\u7528\u7684\u5b9a\u5236\u7248\u672c\uff1f\u63cf\u8ff0\u60a8\u7684\u9700\u6c42\uff0c\u6211\u4eec\u5c06\u53d1\u9001\u63d0\u6848\u3002",
    contactSocialsLabel: "\u5728\u7ebf\u627e\u5230\u6211\u4eec",
    contactFormLabel: "\u7ed9\u6211\u4eec\u53d1\u6d88\u606f",
    contactFormDesc: "\u586b\u5199\u8868\u5355\uff0c\u6211\u4eec\u5c06\u572824\u5c0f\u65f6\u5185\u56de\u590d\u3002",
    contactFormName: "\u60a8\u7684\u59d3\u540d",
    contactFormEmail: "\u60a8\u7684\u90ae\u7bb1",
    contactFormSubject: "\u4e3b\u9898",
    contactFormSubjectOptions: "\u4e00\u822c\u54a8\u8be2,\u7533\u8bf7\u65e9\u671f\u4f53\u9669,\u5b9a\u5236\u5f00\u53d1\u548c\u4f5c,\u9519\u8bef\u53cd\u9988,\u5176\u4ed6",
    contactFormMessage: "\u6d88\u606f\u5185\u5bb9",
    contactFormSend: "\u53d1\u9001\u6d88\u606f",
    contactFormSending: "\u53d1\u9001\u4e2d\u2026",
    contactFormSuccess: "\u6d88\u606f\u5df2\u53d1\u9001\uff01\u6211\u4eec\u5c06\u572824\u5c0f\u65f6\u5185\u56de\u590d\u3002",
    contactFormError: "\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u76f4\u63a5\u53d1\u90ae\u4ef6\u81f3 contact@xingai.app\u3002",

    elsewhere: "\u5176\u4ed6\u94fe\u63a5",
    footerBuild:
      "\u9762\u5411\u65e5\u5e38\u751f\u6d3b\u7684 AI \u51b3\u7b56\u7cfb\u7edf\u2014\u2014\u65b0\u6f14\u793a\u4e0e\u53d1\u5e03\u5c06\u9996\u5148\u51fa\u73b0\u5728\u8fd9\u91cc\u3002",
    backToHome: "\u8fd4\u56de\u9996\u9875",
  },
  ko: {
    navHome: "\ud648",
    navApps: "\uc571",
    navStory: "\uc0dd\ud0dc\uacc4",
    navAbout: "\uc18c\uac1c",
    navContact: "\uc5f0\ub77d",
    navMenu: "\uba54\ub274",
    menuOpen: "\uba54\ub274 \uc5f4\uae30",
    menuClose: "\uba54\ub274 \ub2eb\uae30",
    drawerMain: "\uba54\uc778",
    drawerSettings: "\uc124\uc815",
    drawerAiSystems: "AI \uc2dc\uc2a4\ud15c",
    drawerFreeDemo: "\ubb34\ub8cc \ub370\ubaa8",
    drawerLanguage: "\uc5b8\uc5b4",
    drawerTheme: "\ud14c\ub9c8",
    themeLabel: "\ud14c\ub9c8",
    themeLight: "\ub77c\uc774\ud2b8",
    themeDark: "\ub2e4\ud06c",
    footerNav: "\uc0ac\uc774\ud2b8",
    footerCustomAi: "\ub9de\ucda4 AI",
    footerCtaHeading: "\ub354 \uba85\ud655\ud55c AI \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\uc744 \uccb4\ud5d8\ud574 \ubcf4\uc138\uc694.",
    footerCtaLead: "\uacf5\uac1c Beta \uae30\uac04 \ub3d9\uc548 \ub77c\uc774\ube0c \ub3c4\uad6c\ub97c \ubb34\ub8cc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
    footerTryDemo: "\ubb34\ub8cc \ub370\ubaa8 \uccb4\ud5d8",
    footerSeeSystems: "\ubaa8\ub4e0 \uc2dc\uc2a4\ud15c \ubcf4\uae30",
    footerProduct: "\uc81c\ud488",
    footerCompany: "\ud68c\uc0ac",
    footerResources: "\ub9ac\uc18c\uc2a4",
    footerLegal: "\ubc95\ub960",
    footerPrivacy: "\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68",
    footerTerms: "\uc774\uc6a9\uc57d\uad00",
    footerDisclaimer: "\uba74\ucc45 \uace0\uc9c0",
    legalUpdated: "\ucd5c\uc885 \uc5c5\ub370\uc774\ud2b8",
    legalRelated: "\uad00\ub828 \uc815\ucc45",
    legalNotFound: "\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",

    heroBrand: "XingAI",
    heroValuePill: "\ucc57\uc774 \uc544\ub2cc AI \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c",
    tagline: "\ub9e4\ubc88 \ub354 \uba85\ud655\ud55c \uacb0\uc815\uc744.",
    heroSub:
      "\ub9e4\uc77c \ub9de\ub2e5\ub728\ub9ac\ub294 \uc9c8\ubb38\uc5d0 AI\uac00 \ub2f5\ud569\ub2c8\ub2e4\u2014\ubb34\uc5c7\uc744 \uba39\uc744\uc9c0, \ubb34\uc5c7\uc744 \uc785\uc744\uc9c0, \uc5b4\ub5bb\uac8c \uacf5\ubd80\ud560\uc9c0, \uc5b4\ub514\uc5d0 \ud22c\uc790\ud560\uc9c0. \uc2dd\ub2e8\u00b7\uc694\ub9ac\u00b7\ucf54\ub514\u00b7\uc2b5\uad00\u00b7SAT\u00b7\uc721\uc544\u00b7\uc5ec\ud589\u00b7\ud22c\uc790\u00b7Performance Sim\u00b7T Today \uc5f4 \uac00\uc9c0 \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c. English \u00b7 \u4e2d\u6587 \u00b7 \ud55c\uad6d\uc5b4.",
    heroStoryLink: "\uc81c\ud488\uc774 \uc5b4\ub5bb\uac8c \ub9de\ub294\uc9c0",
    heroGridLabel: "\uc6b0\ub9ac\uc758 AI \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c",
    heroPreviewLabel: "\uc2dc\uc2a4\ud15c \ubbf8\ub9ac\ubcf4\uae30",
    heroCoreSystems: "\ud575\uc2ec \uc2dc\uc2a4\ud15c \ub458\ub7ec\ubcf4\uae30",
    homeAppsHeading: "\ud558\ub098\uc758 \ud50c\ub7ab\ud3fc, \uc5ec\ub7ec AI \uc2dc\uc2a4\ud15c",
    homeAppsLead:
      "\uac01 \uc81c\ud488\uc740 \ubc94\uc6a9 \ucc57\ubd07\uc774 \uc544\ub2c8\ub77c \ucd08\uc810 \ub9de\ucda4 \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4. \uacf5\uac1c\uc801\uc73c\ub85c \uacc4\uc18d \ucd9c\uc2dc\ud569\ub2c8\ub2e4.",
    homeDemosHeading: "\ub370\ubaa8",
    homeDemosLead:
      "\ubaa8\ubc14\uc6b0\uc804 \uc81c\ud488 \ubbf8\ub9ac\ubcf4\uae30\u2014\uacf5\uac1c \ub370\ubaa8\ub294 \uc0c8 \ud0ed. T Today\ub294 \ubb34\ub8cc \uc5bc\ub9ac \uc561\uc138\uc2a4 \uc694\uccad \uac00\ub2a5.",
    homeDemoCategoryInvest: "\ud22c\uc790",
    homeDemoOpen: "\ub370\ubaa8 \uc5f4\uae30",
    homeDemoBadgeDemo: "Demo",
    homeDemoBadgeEarlyAccess: "\uc5bc\ub9ac \uc561\uc138\uc2a4",
    homeDemoPerfName: "Performance Sim",
    homeDemoPerfLead: "\uac19\uc740 \uc2e0\ud638, \ub2e4\ub978 \uaddc\uce59. \uc885\uc774 \uc6d0\uc7a5 \uacb0\uacfc\ub97c \ube44\uad50\ud574\ubcf4\uc138\uc694.",
    homeDemoTTodayName: "T Today",
    homeDemoTTodayLead:
      "\ubcf4\uc720 \uc2a4\ud06c\ub9b0\uc0f7 \u2192 \uaddc\uce59 + AI \uc624\ub298 \uacc4\ud68d. t.xingai.app \uc5bc\ub9ac \uc561\uc138\uc2a4 \uc694\uccad \uac00\ub2a5.",
    homeDemoRequestEarlyAccess: "\uc5bc\ub9ac \uc561\uc138\uc2a4 \uc694\uccad",
    appTTodayEarlyAccessBanner:
      "t.xingai.app\uc740 \uc5bc\ub9ac \uc561\uc138\uc2a4 \uae30\uac04 \ucd08\uccad\uc81c\uc785\ub2c8\ub2e4. \ubb34\ub8cc\ub85c \uc694\uccad\ud558\uc2dc\uba74 \ud5c8\uc6a9 \ubaa9\ub85d\uc5d0 \ucd94\uac00\ud574 \ub4dc\ub9bd\ub2c8\ub2e4.",
    homeDemoDisclaimer: "\uc885\uc774 \uad6c\uc870\uc6a9 \u00b7 \ud22c\uc790 \uc870\uc5b8 \uc544\ub2d8 \u00b7 \ube0c\ub85c\ucee4 \uc5f0\ub3d9 \uc5c6\uc74c.",
    viewAllApps: "\ubb34\ub8cc \ub370\ubaa8 \uccb4\ud5d8",
    homeCta: "\uc5f0\ub77d\ud558\uae30",
    publicBetaNote: "\uacf5\uac1c Beta \uae30\uac04 \ub3d9\uc548 \ubaa8\ub4e0 \ub77c\uc774\ube0c \ub3c4\uad6c\ub97c \ubb34\ub8cc\ub85c \uccb4\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
    heroQuickDemosLabel: "\ubb34\ub8cc \ub370\ubaa8\ub85c \ubc14\ub85c \uc774\ub3d9",
    heroQuickDemoHint: "\ub77c\uc774\ube0c \ub3c4\uad6c \uc5f4\uae30",
    answerHeading: "빠른 답변",
    answerLead: "사용자와 AI 검색 시스템이 XingAI를 빠르게 이해할 수 있도록 정리한 짧은 답변입니다.",
    answerQ1: "XingAI는 무엇인가요?",
    answerA1:
      "XingAI는 10개의 집중형 AI 의사결정 시스템 플랫폼입니다: Meal Coach, Cook AI, Outfit AI, Routine AI, SAT AI, Parent AI, Travel AI, Invest AI, Performance Sim, T Today.",
    answerQ2: "XingAI는 일반 챗봇과 어떻게 다른가요?",
    answerA2:
      "XingAI 제품은 개방형 대화가 아니라 구조화된 결정과 명확한 다음 행동을 중심으로 설계됩니다.",
    answerQ3: "지금 XingAI로 무엇을 할 수 있나요?",
    answerA3:
      "Meal Coach, Cook AI, Outfit AI, Routine AI, SAT AI, Travel AI, Invest AI, Performance Sim 데모를 이용할 수 있습니다. Parent AI는 로드맵에 있습니다. T Today는 문의 페이지에서 무료 얼리 액세스를 요청할 수 있습니다. 모바일 우선, 라이트/다크 테마 지원.",
    answerQ4: "XingAI가 맞춤 AI 제품도 만들 수 있나요?",
    answerA4:
      "네. XingAI는 창업자와 팀이 아이디어부터 출시까지 집중된 AI 제품을 설계, 개발, 배포하도록 돕습니다.",
    answerQ5: "t.xingai.app(T Today) 얼리 액세스는 어떻게 받나요?",
    answerA5:
      "초청제 얼리 액세스이며 무료로 요청 가능합니다. contact@xingai.app 또는 문의 페이지로 연락해 주시면 허용 목록에 추가한 뒤 t.xingai.app에서 Google 로그인하세요.",

    buildHeading: "\uc544\uc774\ub514\uc5b4\uac00 \uc788\uc73c\uc2e0\uac00\uc694? \ud568\uaed8 \ub9cc\ub4e4\uc5b4 \ub4dc\ub9bd\ub2c8\ub2e4.",
    buildLead:
      "\uc6b0\ub9ac\ub294 \uc790\uccb4 AI \uc81c\ud488\ub9cc \ub9cc\ub4dc\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \ud300\uacfc \ucc3d\uc5c5\uc790\uc758 \uc544\uc774\ub514\uc5b4\ub97c \ud604\uc2e4\ub85c \ub9cc\ub4dc\ub294 \uac83\ub3c4 \ub3d5\uc2b5\ub2c8\ub2e4. \ucee8\uc149\ud2b8\ubd80\ud130 \ucd9c\uc2dc\uae4c\uc9c0, \uc6b0\ub9ac\uac00 \ub2f9\uc2e0\uc758 AI \ud300\uc774 \ub429\ub2c8\ub2e4.",
    buildPoint1: "\uc544\uc774\ub514\uc5b4\ub97c \uacf5\uc720\ud558\uc138\uc694 \u2014 \uc9d1\uc911\ub41c AI \uc81c\ud488\uc73c\ub85c \uc124\uacc4\ud574 \ub4dc\ub9bd\ub2c8\ub2e4",
    buildPoint2: "\uc6b0\ub9ac\uac00 \uc124\uacc4, \uac1c\ubc1c, \ubc30\ud3ec \u2014 \ub2f9\uc2e0\uc774 \ubc29\ud5a5\uc744 \uc815\ud569\ub2c8\ub2e4",
    buildPoint3: "\uc6b0\ub9ac\uac00 \uc9c1\uc811 \uc0ac\uc6a9\ud558\ub294 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \ub9de\ucda4\ud615 AI \uc194\ub8e8\uc158",
    buildCta: "\uc544\uc774\ub514\uc5b4\ub97c \uc54c\ub824\uc8fc\uc138\uc694",

    cofounders: "\uacf5\ub3d9 \ucc3d\ub9bd\uc790",
    cofounder: "\uacf5\ub3d9 \ucc3d\ub9bd\uc790",
    aiArchitect: "AI \uc544\ud0a4\ud14d\ud2b8",
    xingBio: "AI \uc544\ud0a4\ud14d\ucc98, \uc81c\ud488 \ubc29\ud5a5 \ubc0f \uc758\uc0ac\uacb0\uc815 \uc778\ud154\ub9ac\uc804\uc2a4\u2014\ubaa8\ub378, \ub370\uc774\ud130, UX\ub97c \uc124\uacc4\ud558\uc5ec \uc2dc\uc2a4\ud15c\uc774 \uc774\ud574\ud558\uae30 \uc27d\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4.",
    allenBio: "AI \uc544\ud0a4\ud14d\ucc98, \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1 \ubc0f \uc548\uc815\uc801\uc778 \uc2dc\uc2a4\ud15c\u2014Next.js, FastAPI, \ub85c\uceec AI\ub97c \uc5f0\uacb0\ud558\uc5ec \ub3d9\uc791\uc744 \ucd94\uc801 \uac00\ub2a5\ud558\uace0 \uc548\uc804\ud558\uac8c \uc720\uc9c0\ud569\ub2c8\ub2e4.",
    contactNote: "\ubb38\uc758\uc0ac\ud56d\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",
    contactTail: "\u2014 \uc774 \uba54\uc77c\uc744 \ud568\uaed8 \ud655\uc778\ud569\ub2c8\ub2e4.",

    aboutHeading: "xingai.app \uc18c\uac1c",
    aboutLead:
      "XingAI\ub294 \uc77c\uc0c1\uc744 \uc704\ud55c AI \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ucc3d\uc5c5\uc790\uc774\uc790 AI \uc544\ud0a4\ud14d\ud2b8\ub85c, \ub7a8\ud37c\ub098 \ubc94\uc6a9 \ucc57\uc774 \uc544\ub2cc \ucd08\uc810 \ub9de\ucda4 \uc81c\ud488\uc744 \ucd9c\uc2dc\ud569\ub2c8\ub2e4.",
    aboutMission: "\ubbf8\uc158",
    aboutMissionText: "\uc0ac\ub78c\ub4e4\uc774 \ub354 \ub098\uc740 \uc77c\uc0c1 \uacb0\uc815\uc744 \ub0b4\ub9b4 \uc218 \uc788\ub3c4\ub85d AI \ub3c4\uad6c\ub97c \ub9cc\ub4ed\ub2c8\ub2e4\u2014\uc74c\uc2dd, \uac74\uac15, \uc7ac\uc815, \uc0dd\uc0b0\uc131\u2014\ubcf5\uc7a1\uc131\uc774\ub098 \ud654\uc81c\uc131 \uc5c6\uc774. \ubaa8\ub4e0 \uc81c\ud488\uc740 \uae30\ub2a5 \uc218\ubcf4\ub2e4 \uc2e0\ub8b0\uc131\uacfc \uba85\ud655\uc131\uc744 \uc6b0\uc120\ud569\ub2c8\ub2e4.",
    aboutStack: "\uae30\uc220 \uc2a4\ud0dd",
    aboutStackText: "\ud504\ub860\ud2b8\uc5d4\ub4dc Next.js. \ubc31\uc5d4\ub4dc FastAPI. \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\uac00 \uc911\uc694\ud55c \uacf3\uc5d0\ub294 \ub85c\uceec AI. Vercel \ubc30\ud3ec. \uac00\ub2a5\ud55c \ud55c \uc624\ud508\uc18c\uc2a4.",
    aboutBuilding: "\uacf5\uac1c \uac1c\ubc1c",
    aboutBuildingText: "\uc2e4\ud5d8, \uac1c\uc120, \ubc30\ud3ec\u2014GitHub, LinkedIn, X\uc5d0\uc11c \uacfc\uc815\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4. \uc870\uc6a9\ud788 \uc644\ubcbd\ud558\uac8c \ub9cc\ub4dc\ub294 \uac83\ubcf4\ub2e4 \ubc30\ud3ec\ud558\uace0 \ubc18\ubcf5\ud558\ub294 \uac83\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.",
    aboutStoryLink: "\uc81c\ud488\uc774 \uc5b4\ub5bb\uac8c \ub9de\ub294\uc9c0",

    storyEyebrow: "\uc81c\ud488 \ub9f5",
    storyHeading: "XingAI \uc81c\ud488 \uc0dd\ud0dc\uacc4",
    storyLead:
      "\ud558\ub098\uc758 \ud50c\ub7ab\ud3fc, \uc5ec\ub7ec \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\u2014 \ubc94\uc6a9 \ucc57\uc774 \uc544\ub2d9\ub2c8\ub2e4. \uc77c\uc0c1 \ub3c4\uad6c\uc640 \ud22c\uc790 \ud074\ub7ec\uc2a4\ud130\uac00 \ubaa8\ubc14\uc77c \uc6f9, \ub77c\uc774\ud2b8\u00b7\ub2e4\ud06c \ud14c\ub9c8, EN\u00b7\u4e2d\u00b7\ud55c\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4(\uc81c\ud488\ubcc4 \uc9c0\uc6d0 \ubc94\uc704).",
    storyPrincipleTitle: "\ubb34\uc5c7\uc744 \ub9cc\ub4e4\uc9c0",
    storyPrincipleLead:
      "\uac01 \uc571\uc740 \ud558\ub098\uc758 \uacb0\uc815\uc5d0 \ub2f5\ud558\uace0, \uad6c\uc870\ud654\ub41c \uacb0\uacfc\uc640 \ub2e4\uc74c \ud589\ub3d9\uc744 \uc81c\uc2dc\ud569\ub2c8\ub2e4.",
    storyPrinciplePoint1:
      "\uc77c\uc0c1: \ubb34\uc5c7\uc744 \uba39\uace0, \uc694\ub9ac\ud558\uace0, \uc785\uace0, \uc2b5\uad00, SAT, \uc5ec\ud589, \uac00\uc871 \uc5c5\ubb34.",
    storyPrinciplePoint2:
      "\uc81c\ud488 \uac04 \ub3d9\uc77c\ud55c UX: \ubaa8\ubc14\uc77c \uc6f9, \ud14c\ub9c8 \uc804\ud658, \ub9c8\ucf00\ud305 \uc0ac\uc774\ud2b8 \ubc0f i18n \uc9c0\uc6d0 \uc571.",
    storyPrinciplePoint3:
      "invest.xingai.app \ub9e5\ub77d \u2192 lab.xingai.app \uaddc\uce59 \ud14c\uc2a4\ud2b8 \u2192 t.xingai.app \uc77c\uc77c T \uacc4\ud68d(\uc5bc\ub9ac \uc561\uc138\uc2a4).",
    storyClustersTitle: "\ub450 \uac70\uc758 \ud074\ub7ec\uc2a4\ud130",
    storyClustersLead:
      "\uc571\uc740 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \ud22c\uc790 \ub77c\uc778\uc740 \uc11c\ub85c \ubcf4\uc644\ud558\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
    storyClusterEverydayTitle: "\uc77c\uc0c1 \uc758\uc0ac\uacb0\uc815",
    storyClusterEverydayLead:
      "\uc2dd\uc0ac, \uc2a4\ud0c0\uc77c, \uc2b5\uad00, SAT, \uac00\uc871, \uc5ec\ud589\u2014 \uac01 \uc81c\ud488\uc740 \ud55c \uac00\uc9c0 \uc5ed\ud560\ub9cc \ub2f4\uc2b5\ub2c8\ub2e4.",
    storyClusterInvestTitle: "\ud22c\uc790 \u00b7 \ud2b8\ub808\uc774\ub529 \ub3c4\uad6c",
    storyClusterInvestLead:
      "\ud22c\uc790 \ub300\uc2dc\ubcf4\ub4dc, lab \uc131\uacfc \uc2dc\ubbac\ub808\uc774\uc158, T Today(\uc2a4\ud06c\ub9b0\uc0f7 \u2192 \uaddc\uce59 \u2192 \uacc4\ud68d).",
    storyInvestFlowTitle: "\ud22c\uc790 \ud074\ub7ec\uc2a4\ud130 \ud750\ub984",
    storyInvestFlowLead:
      "\uba3d\ub85c \ub9e5\ub85c\u00b7\uc2ec\ubcfc \ub9e5\ub77d\uc744 \ubcf4\uace0, lab\uc5d0\uc11c \uaddc\uce59\uc744 \uc2dc\ud5d8\ud55c \ub4a4, \uc77c\uc77c \uacc4\ud68d\uc774 \ud544\uc694\ud558\uba74 T Today \uc5bc\ub9ac \uc561\uc138\uc2a4\ub97c \uc694\uccad\ud558\uc138\uc694.",
    storyInvestRoleCore:
      "invest.xingai.app \u2014 \uc758\uc0ac\uacb0\uc815 \ub300\uc2dc\ubcf4\ub4dc: \ub9e5\ub85c \ub808\uc774\ub354, \uBC84\uBD84, \uc2ec\ubcfc \ub9e5\ub77d(\uc0ac\uc804 \uacc4\uc0b0 \uce90\uc2dc).",
    storyInvestRoleLab:
      "lab.xingai.app \u2014 Performance Sim: \ub3d9\uc77c \uc2e0\ud638, \ub2e4\ub978 \uaddc\uce59; \ubaa8\uc758 \uac70\ub798 \uacb0\uacfc.",
    storyInvestRoleT:
      "t.xingai.app \u2014 T Today: \ubcf4\uc720 \uc2a4\ud06c\ub9b0\uc0f7 \u2192 \uaddc\uce59 + \uc624\ub298\uc758 AI \uacc4\ud68d. \uc5bc\ub9ac \uc561\uc138\uc2a4\ub294 \ubb34\ub8cc \uc694\uccad.",
    storyInvestDisclaimer:
      "\ubaa8\uc758/\uc2dc\ubbac\ub808\uc774\uc158 \uc804\uc6a9 \u00b7 \ud22c\uc790 \uc870\uc5b8 \uc544\ub2d8 \u00b7 \uc99d\uad8c\uc0ac \uc5f0\ub3d9 \uc5c6\uc74c.",
    storyTryTitle: "\uc0ac\uc6a9\ud574 \ubcf4\uae30",
    storyTryLead:
      "Apps\uc5d0\uc11c \uacf5\uac1c \ub370\ubaa8\ub97c \uc5f4\uc5b4\ubcf4\uc138\uc694. T Today\ub294 Contact\ub85c \ubb34\ub8cc \uc5bc\ub9ac \uc561\uc138\uc2a4\ub97c \uc694\uccad\ud558\uba74 \ud5c8\uc6a9 \ubaa9\ub85d\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.",
    storyAboutTeaser: "\ud300, \ubbf8\uc158, \uc2a4\ud0dd:",

    appsHeading: "\uc6b0\ub9ac\uc758 AI \uc2dc\uc2a4\ud15c",
    appsLead:
      "\uc74c\uc2dd, \uc2a4\ud0c0\uc77c, \ub8e8\ud2f4, \ud22c\uc790 \ub4f1 \uc601\uc5ed\uc758 \uc758\uc0ac\uacb0\uc815 \uc778\ud154\ub9ac\uc804\uc2a4\u2014\ud754\uc5b4\uc9c4 \ub3c4\uad6c \ubaa9\ub85d\uc774 \uc544\ub2cc \ud558\ub098\uc758 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4.",
    appViewDetails: "\uc790\uc138\ud788 \ubcf4\uae30",
    appComingSoonBadge: "\ucd9c\uc2dc \uc608\uc815",
    appStatusLive: "\ud83d\udfe2 \ucd9c\uc2dc\ub428",
    appStatusDemo: "\ud83d\udfe1 \ub370\ubaa8",
    appStatusComingSoon: "\u23f3 \ucd9c\uc2dc \uc608\uc815",
    appCardCanDo: "\ud560 \uc218 \uc788\ub294 \uc77c",
    appCardBestFor: "\uc801\ud569\ud55c \uc0ac\ub78c",
    appCardClickTarget: "\ud074\ub9ad\ud558\uba74",
    appComingSoonBanner:
      "\uc774 \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\uc740 \uacf5\uac1c \ub85c\ub4dc\ub9f5\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \ubc29\ud5a5\uc744 \uc77c\uae30 \uacf5\uc720\ud569\ub2c8\ub2e4\u2014\ud611\uc5c5 \ud639\uc740 \uc5bc\ub9ac \uc561\uc138\uc2a4\ub294 \uc5f0\ub77d \uc8fc\uc138\uc694.",
    appEarlyAccessCta: "\uc5bc\ub9ac \uc561\uc138\uc2a4 \uc694\uccad",

    appDemo: "\ub77c\uc774\ube0c \ub370\ubaa8",
    appVersions: "\ubc84\uc804 & \uac00\uaca9",
    appFeatures: "\uae30\ub2a5",
    appFree: "\ubb34\ub8cc",
    appPro: "\ud504\ub85c",
    appEnterprise: "\uc5d4\ud130\ud504\ub77c\uc774\uc988",
    appFreePrice: "\ubb34\ub8cc",
    appProPrice: "\ubb38\uc758",
    appEnterprisePrice: "\ubb38\uc758",
    appGetStarted: "\uc2dc\uc791\ud558\uae30",
    appUpgrade: "\uc5c5\uadf8\ub808\uc774\ub4dc",
    appContactSales: "\uc601\uc5c5\ud300 \ubb38\uc758",
    appSourceCode: "\uc804\uccb4 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \uc6d0\ud558\uc2dc\ub098\uc694?",
    appSourceText: "\uc804\uccb4 \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ubc1b\uc73c\uc138\uc694 \u2014 Next.js, FastAPI, OpenAI \ud1b5\ud569. \uc9c1\uc811 \uad6c\ucd95, \ucee4\uc2a4\ud130\ub9c8\uc774\uc988, \ubc30\ud3ec\ud558\uc138\uc694.",
    appGetSource: "Gumroad\uc5d0\uc11c \uc18c\uc2a4 \ucf54\ub4dc \ubc1b\uae30",
    appSourceTextGithub:
      "\uc624\ud508\uc18c\uc2a4 Next.js \uc571 \u2014 \uc7ac\uace0 \uc2a4\uce94, \uc2dd\uc0ac \ucd94\ucc9c, \uc694\ub9ac \ub2e8\uacc4. Vercel\uc5d0 \uc9c1\uc811 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
    appGetSourceGithub: "GitHub\uc5d0\uc11c \uc18c\uc2a4 \ubcf4\uae30",
    appCustom: "\ub9de\ucda4 \ubc84\uc804\uc774 \ud544\uc694\ud558\uc2e0\uac00\uc694?",
    appCustomText: "\ud300\uacfc \uae30\uc5c5\uc744 \uc704\ud55c \ub9de\ucda4 \ubc84\uc804\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. \uc694\uad6c\uc0ac\ud56d\uc744 \uc54c\ub824\uc8fc\uc2dc\uba74 \ud568\uaed8 \ubc94\uc704\ub97c \uc815\ud558\uaca0\uc2b5\ub2c8\ub2e4.",
    appRoadmap: "\ubc30\ud3ec \ub85c\ub4dc\ub9f5",
    appRoadmapLead: "\uc774 \uc81c\ud488\uc758 \ub2e4\uc74c \uacc4\ud68d.",
    appScreenshots: "\uc2a4\ud06c\ub9b0\uc0f7",
    included: "\ud3ec\ud568",
    notIncluded: "\u2014",

    contactHeading: "\uc5f0\ub77d\ucc98",
    contactLead: "\uc9c8\ubb38\uc774 \uc788\uac70\ub098, \ub9de\ucda4 \ubc84\uc804\uc774 \ud544\uc694\ud558\uac70\ub098, \uc778\uc0ac\ub97c \uac74\ub124\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694? \uc5f0\ub77d\uc744 \uae30\ub2e4\ub9bd\ub2c8\ub2e4.",
    contactEmailLabel: "\uc774\uba54\uc77c \ubcf4\ub0b4\uae30",
    contactEmailDesc: "\ubcf4\ud1b5 24\uc2dc\uac04 \uc774\ub0b4\uc5d0 \ub2f5\ubcc0\ud569\ub2c8\ub2e4.",
    contactCustomLabel: "\ub9de\ucda4 \uac1c\ubc1c",
    contactCustomDesc: "\uc571\uc758 \ub9de\ucda4 \ubc84\uc804\uc774 \ud544\uc694\ud558\uc2e0\uac00\uc694? \uc694\uad6c\uc0ac\ud56d\uc744 \uc124\uba85\ud574 \uc8fc\uc2dc\uba74 \uc81c\uc548\uc11c\ub97c \ubcf4\ub0b4\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.",
    contactSocialsLabel: "\uc628\ub77c\uc778\uc5d0\uc11c \ucc3e\uae30",
    contactFormLabel: "\uba54\uc2dc\uc9c0 \ubcf4\ub0b4\uae30",
    contactFormDesc: "\uc591\uc2dd\uc744 \uc791\uc131\ud558\uc2dc\uba74 24\uc2dc\uac04 \uc774\ub0b4\uc5d0 \ub2f5\ubcc0\ud574 \ub4dc\ub9bd\ub2c8\ub2e4.",
    contactFormName: "\uc774\ub984",
    contactFormEmail: "\uc774\uba54\uc77c",
    contactFormSubject: "\ubb38\uc758 \uc720\ud615",
    contactFormSubjectOptions: "\uc77c\ubc18 \ubb38\uc758,\uc5bc\ub9ac \uc561\uc138\uc2a4 \uc694\uccad,\ub9de\ucda4 \uac1c\ubc1c \ubb38\uc758,\ubc84\uadf8 \uc2e0\uace0,\uae30\ud0c0",
    contactFormMessage: "\ub0b4\uc6a9",
    contactFormSend: "\uba54\uc2dc\uc9c0 \uc804\uc1a1",
    contactFormSending: "\uc804\uc1a1 \uc911\u2026",
    contactFormSuccess: "\uba54\uc2dc\uc9c0\uac00 \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4! 24\uc2dc\uac04 \uc774\ub0b4\uc5d0 \ub2f5\ubcc0\ud574 \ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.",
    contactFormError: "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. contact@xingai.app\uc73c\ub85c \uc9c1\uc811 \uc774\uba54\uc77c\uc744 \ubcf4\ub0b4\uc8fc\uc138\uc694.",

    elsewhere: "\ub2e4\ub978 \ucc44\ub110",
    footerBuild:
      "\uc77c\uc0c1\uc744 \uc704\ud55c AI \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\u2014\uc0c8 \ub370\ubaa8\uc640 \ub9b4\ub9ac\uc2a4\uac00 \uba3c\uc800 \uc774\uacf3\uc5d0 \uc62c\ub77c\uc635\ub2c8\ub2e4.",
    backToHome: "\ud648\uc73c\ub85c \ub3cc\uc544\uac00\uae30",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export default translations;
