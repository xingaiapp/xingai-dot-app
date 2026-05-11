export type Locale = "en" | "zh" | "ko";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ko: "한국어",
};

const translations = {
  en: {
    // Nav
    navApps: "Apps",
    navAbout: "About",
    navContact: "Contact",

    // Home
    tagline: "AI lifestyle decision systems\u2014built for clarity on the web.",
    lead: "Founded by Xing and Allen\u2014co-founders and AI architects\u2014xingai.app ships thoughtful tools at the intersection of local AI, decision intelligence, and everyday life.",
    homeAppsHeading: "Our apps",
    homeAppsLead: "AI tools we build and ship. Each one solves a real problem with clarity, speed, and a transparent stack.",
    viewAllApps: "View all apps",
    homeCta: "Get in touch",

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
    aboutLead: "We are two AI architects building lifestyle decision systems in public\u2014clear interfaces, fast workflows, and tools that feel grounded instead of gimmicky.",
    aboutMission: "Mission",
    aboutMissionText: "Ship AI tools that help people make better everyday decisions\u2014food, health, finance, productivity\u2014without complexity or hype. Every product we launch prioritizes reliability and clarity over feature count.",
    aboutStack: "Tech stack",
    aboutStackText: "Next.js for the frontend. FastAPI for the backend. Local AI models where privacy matters. Vercel for deployment. Everything open where possible.",
    aboutBuilding: "Building in public",
    aboutBuildingText: "Experiments, refinements, and releases\u2014we share the process on GitHub, LinkedIn, and X. We favor shipping and iterating over perfecting in silence.",

    // Apps listing
    appsHeading: "Apps & demos",
    appsLead: "Every AI tool we build. Browse by category, try the demos, and choose the version that fits.",
    appViewDetails: "View details",

    // App detail
    appDemo: "Live demo",
    appVersions: "Versions & pricing",
    appFeatures: "Features",
    appFree: "Free",
    appPro: "Pro",
    appEnterprise: "Enterprise",
    appFreePrice: "$0",
    appProPrice: "$9/mo",
    appEnterprisePrice: "Contact us",
    appGetStarted: "Get started",
    appUpgrade: "Upgrade",
    appContactSales: "Contact sales",
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

    // Footer
    elsewhere: "Elsewhere",
    footerBuild: "AI we build \u2014 demos and product links will grow here as we publish each surface.",

    // Shared
    backToHome: "Back to home",
  },
  zh: {
    navApps: "\u5e94\u7528",
    navAbout: "\u5173\u4e8e",
    navContact: "\u8054\u7cfb",

    tagline: "AI \u751f\u6d3b\u51b3\u7b56\u7cfb\u7edf\u2014\u2014\u4e3a\u6e05\u6670\u800c\u751f\u3002",
    lead: "\u7531 Xing \u548c Allen \u8054\u5408\u521b\u7acb\u2014\u2014AI \u67b6\u6784\u5e08\u2014\u2014xingai.app \u5728\u672c\u5730 AI\u3001\u51b3\u7b56\u667a\u80fd\u548c\u65e5\u5e38\u751f\u6d3b\u7684\u4ea4\u6c47\u5904\u6253\u9020\u7528\u5fc3\u7684\u5de5\u5177\u3002",
    homeAppsHeading: "\u6211\u4eec\u7684\u5e94\u7528",
    homeAppsLead: "\u6211\u4eec\u6784\u5efa\u548c\u53d1\u5e03\u7684 AI \u5de5\u5177\u3002\u6bcf\u4e00\u4e2a\u90fd\u4ee5\u6e05\u6670\u3001\u5feb\u901f\u548c\u900f\u660e\u7684\u6280\u672f\u6808\u89e3\u51b3\u5b9e\u9645\u95ee\u9898\u3002",
    viewAllApps: "\u67e5\u770b\u6240\u6709\u5e94\u7528",
    homeCta: "\u8054\u7cfb\u6211\u4eec",

    cofounders: "\u8054\u5408\u521b\u59cb\u4eba",
    cofounder: "\u8054\u5408\u521b\u59cb\u4eba",
    aiArchitect: "AI \u67b6\u6784\u5e08",
    xingBio: "AI \u67b6\u6784\u3001\u4ea7\u54c1\u65b9\u5411\u4e0e\u51b3\u7b56\u667a\u80fd\u2014\u2014\u6211\u4eec\u5982\u4f55\u5851\u9020\u6a21\u578b\u3001\u6570\u636e\u548c\u7528\u6237\u4f53\u9a8c\uff0c\u4f7f\u7cfb\u7edf\u59cb\u7ec8\u4fdd\u6301\u53ef\u7406\u89e3\u3002",
    allenBio: "AI \u67b6\u6784\u3001\u5de5\u7a0b\u4e0e\u53ef\u9760\u7cfb\u7edf\u2014\u2014Next.js\u3001FastAPI \u548c\u672c\u5730 AI \u65e0\u7f1d\u8fde\u63a5\uff0c\u786e\u4fdd\u884c\u4e3a\u53ef\u8ffd\u6eaf\u4e14\u5b89\u5168\u3002",
    contactNote: "\u6709\u4efb\u4f55\u95ee\u9898\uff1f",
    contactTail: "\u2014\u2014 \u6211\u4eec\u90fd\u4f1a\u67e5\u770b\u8fd9\u4e2a\u90ae\u7bb1\u3002",

    aboutHeading: "\u5173\u4e8e xingai.app",
    aboutLead: "\u6211\u4eec\u662f\u4e24\u4f4d AI \u67b6\u6784\u5e08\uff0c\u516c\u5f00\u6784\u5efa\u751f\u6d3b\u51b3\u7b56\u7cfb\u7edf\u2014\u2014\u6e05\u6670\u7684\u754c\u9762\u3001\u5feb\u901f\u7684\u5de5\u4f5c\u6d41\u548c\u8e0f\u5b9e\u7684\u5de5\u5177\u3002",
    aboutMission: "\u4f7f\u547d",
    aboutMissionText: "\u6253\u9020 AI \u5de5\u5177\uff0c\u5e2e\u52a9\u4eba\u4eec\u505a\u51fa\u66f4\u597d\u7684\u65e5\u5e38\u51b3\u7b56\u2014\u2014\u7f8e\u98df\u3001\u5065\u5eb7\u3001\u8d22\u52a1\u3001\u751f\u4ea7\u529b\u2014\u2014\u65e0\u9700\u590d\u6742\u6027\u6216\u70ed\u5ea6\u3002\u6bcf\u4e2a\u4ea7\u54c1\u90fd\u4f18\u5148\u8003\u8651\u53ef\u9760\u6027\u548c\u6e05\u6670\u5ea6\u3002",
    aboutStack: "\u6280\u672f\u6808",
    aboutStackText: "\u524d\u7aef Next.js\u3002\u540e\u7aef FastAPI\u3002\u9690\u79c1\u4f18\u5148\u65f6\u4f7f\u7528\u672c\u5730 AI \u6a21\u578b\u3002Vercel \u90e8\u7f72\u3002\u5c3d\u53ef\u80fd\u5f00\u6e90\u3002",
    aboutBuilding: "\u516c\u5f00\u6784\u5efa",
    aboutBuildingText: "\u5b9e\u9a8c\u3001\u4f18\u5316\u548c\u53d1\u5e03\u2014\u2014\u6211\u4eec\u5728 GitHub\u3001LinkedIn \u548c X \u4e0a\u5206\u4eab\u8fc7\u7a0b\u3002\u6211\u4eec\u504f\u597d\u53d1\u5e03\u548c\u8fed\u4ee3\uff0c\u800c\u975e\u65e0\u58f0\u5b8c\u5584\u3002",

    appsHeading: "\u5e94\u7528\u548c\u6f14\u793a",
    appsLead: "\u6211\u4eec\u6784\u5efa\u7684\u6bcf\u4e00\u4e2a AI \u5de5\u5177\u3002\u6309\u7c7b\u522b\u6d4f\u89c8\uff0c\u8bd5\u7528\u6f14\u793a\uff0c\u9009\u62e9\u9002\u5408\u7684\u7248\u672c\u3002",
    appViewDetails: "\u67e5\u770b\u8be6\u60c5",

    appDemo: "\u5728\u7ebf\u6f14\u793a",
    appVersions: "\u7248\u672c\u4e0e\u4ef7\u683c",
    appFeatures: "\u529f\u80fd",
    appFree: "\u514d\u8d39\u7248",
    appPro: "\u4e13\u4e1a\u7248",
    appEnterprise: "\u4f01\u4e1a\u7248",
    appFreePrice: "\u514d\u8d39",
    appProPrice: "$9/\u6708",
    appEnterprisePrice: "\u8054\u7cfb\u6211\u4eec",
    appGetStarted: "\u5f00\u59cb\u4f7f\u7528",
    appUpgrade: "\u5347\u7ea7",
    appContactSales: "\u8054\u7cfb\u9500\u552e",
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

    elsewhere: "\u5176\u4ed6\u94fe\u63a5",
    footerBuild: "\u6211\u4eec\u6784\u5efa\u7684 AI \u2014 \u6f14\u793a\u548c\u4ea7\u54c1\u94fe\u63a5\u5c06\u968f\u7740\u6bcf\u4e2a\u754c\u9762\u7684\u53d1\u5e03\u800c\u589e\u52a0\u3002",
    backToHome: "\u8fd4\u56de\u9996\u9875",
  },
  ko: {
    navApps: "\uc571",
    navAbout: "\uc18c\uac1c",
    navContact: "\uc5f0\ub77d",

    tagline: "AI \ub77c\uc774\ud504\uc2a4\ud0c0\uc77c \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\u2014\uc6f9\uc5d0\uc11c \uba85\ud655\ud558\uac8c.",
    lead: "Xing\uacfc Allen\uc774 \uacf5\ub3d9 \ucc3d\ub9bd\u2014AI \uc544\ud0a4\ud14d\ud2b8\u2014xingai.app\uc740 \ub85c\uceec AI, \uc758\uc0ac\uacb0\uc815 \uc778\ud154\ub9ac\uc804\uc2a4, \uc77c\uc0c1\uc758 \uad50\ucc28\uc810\uc5d0\uc11c \uc0ac\ub824 \uae4a\uc740 \ub3c4\uad6c\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",
    homeAppsHeading: "\uc6b0\ub9ac\uc758 \uc571",
    homeAppsLead: "\uc6b0\ub9ac\uac00 \ub9cc\ub4e4\uace0 \ubc30\ud3ec\ud558\ub294 AI \ub3c4\uad6c. \uac01\uac01\uc774 \uba85\ud655\ud568, \uc18d\ub3c4, \ud22c\uba85\ud55c \uae30\uc220 \uc2a4\ud0dd\uc73c\ub85c \uc2e4\uc81c \ubb38\uc81c\ub97c \ud574\uacb0\ud569\ub2c8\ub2e4.",
    viewAllApps: "\ubaa8\ub4e0 \uc571 \ubcf4\uae30",
    homeCta: "\uc5f0\ub77d\ud558\uae30",

    cofounders: "\uacf5\ub3d9 \ucc3d\ub9bd\uc790",
    cofounder: "\uacf5\ub3d9 \ucc3d\ub9bd\uc790",
    aiArchitect: "AI \uc544\ud0a4\ud14d\ud2b8",
    xingBio: "AI \uc544\ud0a4\ud14d\ucc98, \uc81c\ud488 \ubc29\ud5a5 \ubc0f \uc758\uc0ac\uacb0\uc815 \uc778\ud154\ub9ac\uc804\uc2a4\u2014\ubaa8\ub378, \ub370\uc774\ud130, UX\ub97c \uc124\uacc4\ud558\uc5ec \uc2dc\uc2a4\ud15c\uc774 \uc774\ud574\ud558\uae30 \uc27d\ub3c4\ub85d \ub9cc\ub4ed\ub2c8\ub2e4.",
    allenBio: "AI \uc544\ud0a4\ud14d\ucc98, \uc5d4\uc9c0\ub2c8\uc5b4\ub9c1 \ubc0f \uc548\uc815\uc801\uc778 \uc2dc\uc2a4\ud15c\u2014Next.js, FastAPI, \ub85c\uceec AI\ub97c \uc5f0\uacb0\ud558\uc5ec \ub3d9\uc791\uc744 \ucd94\uc801 \uac00\ub2a5\ud558\uace0 \uc548\uc804\ud558\uac8c \uc720\uc9c0\ud569\ub2c8\ub2e4.",
    contactNote: "\ubb38\uc758\uc0ac\ud56d\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",
    contactTail: "\u2014 \uc774 \uba54\uc77c\uc744 \ud568\uaed8 \ud655\uc778\ud569\ub2c8\ub2e4.",

    aboutHeading: "xingai.app \uc18c\uac1c",
    aboutLead: "\uc6b0\ub9ac\ub294 \ub450 \uba85\uc758 AI \uc544\ud0a4\ud14d\ud2b8\ub85c, \ub77c\uc774\ud504\uc2a4\ud0c0\uc77c \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\uc744 \uacf5\uac1c\uc801\uc73c\ub85c \uac1c\ubc1c\ud569\ub2c8\ub2e4\u2014\uba85\ud655\ud55c \uc778\ud130\ud398\uc774\uc2a4, \ube60\ub978 \uc6cc\ud06c\ud50c\ub85c\uc6b0, \uc2e4\uc6a9\uc801\uc778 \ub3c4\uad6c.",
    aboutMission: "\ubbf8\uc158",
    aboutMissionText: "\uc0ac\ub78c\ub4e4\uc774 \ub354 \ub098\uc740 \uc77c\uc0c1 \uacb0\uc815\uc744 \ub0b4\ub9b4 \uc218 \uc788\ub3c4\ub85d AI \ub3c4\uad6c\ub97c \ub9cc\ub4ed\ub2c8\ub2e4\u2014\uc74c\uc2dd, \uac74\uac15, \uc7ac\uc815, \uc0dd\uc0b0\uc131\u2014\ubcf5\uc7a1\uc131\uc774\ub098 \ud654\uc81c\uc131 \uc5c6\uc774. \ubaa8\ub4e0 \uc81c\ud488\uc740 \uae30\ub2a5 \uc218\ubcf4\ub2e4 \uc2e0\ub8b0\uc131\uacfc \uba85\ud655\uc131\uc744 \uc6b0\uc120\ud569\ub2c8\ub2e4.",
    aboutStack: "\uae30\uc220 \uc2a4\ud0dd",
    aboutStackText: "\ud504\ub860\ud2b8\uc5d4\ub4dc Next.js. \ubc31\uc5d4\ub4dc FastAPI. \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\uac00 \uc911\uc694\ud55c \uacf3\uc5d0\ub294 \ub85c\uceec AI. Vercel \ubc30\ud3ec. \uac00\ub2a5\ud55c \ud55c \uc624\ud508\uc18c\uc2a4.",
    aboutBuilding: "\uacf5\uac1c \uac1c\ubc1c",
    aboutBuildingText: "\uc2e4\ud5d8, \uac1c\uc120, \ubc30\ud3ec\u2014GitHub, LinkedIn, X\uc5d0\uc11c \uacfc\uc815\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4. \uc870\uc6a9\ud788 \uc644\ubcbd\ud558\uac8c \ub9cc\ub4dc\ub294 \uac83\ubcf4\ub2e4 \ubc30\ud3ec\ud558\uace0 \ubc18\ubcf5\ud558\ub294 \uac83\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.",

    appsHeading: "\uc571 & \ub370\ubaa8",
    appsLead: "\uc6b0\ub9ac\uac00 \ub9cc\ub4dc\ub294 \ubaa8\ub4e0 AI \ub3c4\uad6c. \uce74\ud14c\uace0\ub9ac\ubcc4\ub85c \ud0d0\uc0c9\ud558\uace0, \ub370\ubaa8\ub97c \uccb4\ud5d8\ud558\uace0, \ub9de\ub294 \ubc84\uc804\uc744 \uc120\ud0dd\ud558\uc138\uc694.",
    appViewDetails: "\uc790\uc138\ud788 \ubcf4\uae30",

    appDemo: "\ub77c\uc774\ube0c \ub370\ubaa8",
    appVersions: "\ubc84\uc804 & \uac00\uaca9",
    appFeatures: "\uae30\ub2a5",
    appFree: "\ubb34\ub8cc",
    appPro: "\ud504\ub85c",
    appEnterprise: "\uc5d4\ud130\ud504\ub77c\uc774\uc988",
    appFreePrice: "\ubb34\ub8cc",
    appProPrice: "$9/\uc6d4",
    appEnterprisePrice: "\ubb38\uc758",
    appGetStarted: "\uc2dc\uc791\ud558\uae30",
    appUpgrade: "\uc5c5\uadf8\ub808\uc774\ub4dc",
    appContactSales: "\uc601\uc5c5\ud300 \ubb38\uc758",
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

    elsewhere: "\ub2e4\ub978 \ucc44\ub110",
    footerBuild: "\uc6b0\ub9ac\uac00 \ub9cc\ub4dc\ub294 AI \u2014 \uac01 \uc11c\ube44\uc2a4\ub97c \ubc1c\ud45c\ud560 \ub54c\ub9c8\ub2e4 \ub370\ubaa8\uc640 \uc81c\ud488 \ub9c1\ud06c\uac00 \ucd94\uac00\ub429\ub2c8\ub2e4.",
    backToHome: "\ud648\uc73c\ub85c \ub3cc\uc544\uac00\uae30",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export default translations;
