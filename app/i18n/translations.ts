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
    heroBrand: "XingAI",
    tagline: "AI Decision Systems for Everyday Life",
    heroSub:
      "We build focused AI products that help you decide and act\u2014not endless generic chat. One platform, seven decision systems.",
    heroGridLabel: "Our AI decision systems",
    homeAppsHeading: "AI systems, one platform",
    homeAppsLead:
      "Each product is a focused decision system\u2014not a generic chatbot. We ship publicly as the platform grows.",
    viewAllApps: "Explore products",
    homeCta: "Get in touch",

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

    // Apps listing
    appsHeading: "Our AI systems",
    appsLead:
      "Decision intelligence across food, style, habits, investing, and more\u2014one coherent platform, not a random tool list.",
    appViewDetails: "View details",
    appComingSoonBadge: "Coming soon",
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
    footerBuild:
      "AI decision systems for everyday life\u2014new demos and releases land here first.",

    // Shared
    backToHome: "Back to home",
  },
  zh: {
    navApps: "\u5e94\u7528",
    navAbout: "\u5173\u4e8e",
    navContact: "\u8054\u7cfb",

    heroBrand: "XingAI",
    tagline: "\u9762\u5411\u65e5\u5e38\u751f\u6d3b\u7684 AI \u51b3\u7b56\u7cfb\u7edf",
    heroSub:
      "\u6211\u4eec\u6253\u9020\u7126\u70b9\u660e\u786e\u7684 AI \u4ea7\u54c1\uff0c\u5e2e\u4f60\u51b3\u7b56\u5e76\u884c\u52a8\u2014\u2014\u800c\u4e0d\u662f\u6cdb\u6cdb\u7684\u804a\u5929\u3002\u4e00\u4e2a\u5e73\u53f0\uff0c\u4e03\u5957\u51b3\u7b56\u7cfb\u7edf\u3002",
    heroGridLabel: "\u6211\u4eec\u7684 AI \u51b3\u7b56\u7cfb\u7edf",
    homeAppsHeading: "\u4e00\u4f53\u5e73\u53f0\uff0c\u591a\u4e2a AI \u7cfb\u7edf",
    homeAppsLead:
      "\u6bcf\u4e00\u6b3e\u4ea7\u54c1\u90fd\u662f\u4e13\u6ce8\u7684\u51b3\u7b56\u7cfb\u7edf\uff0c\u4e0d\u662f\u6cdb\u6cdb\u7684\u804a\u5929\u673a\u5668\u4eba\u3002\u6211\u4eec\u5728\u516c\u5f00\u8fed\u4ee3\u4e2d\u6301\u7eed\u53d1\u5e03\u3002",
    viewAllApps: "\u63a2\u7d22\u4ea7\u54c1",
    homeCta: "\u8054\u7cfb\u6211\u4eec",

    buildHeading: "\u6709\u60f3\u6cd5\uff1f\u6211\u4eec\u5e2e\u4f60\u5b9e\u73b0",
    buildLead:
      "\u6211\u4eec\u4e0d\u4ec5\u5f00\u53d1\u81ea\u5df1\u7684 AI \u4ea7\u54c1\u2014\u2014\u6211\u4eec\u4e5f\u5e2e\u52a9\u56e2\u961f\u548c\u521b\u59cb\u4eba\u5c06\u60f3\u6cd5\u53d8\u4e3a\u73b0\u5b9e\u3002\u4ece\u6982\u5ff5\u5230\u53d1\u5e03\uff0c\u6211\u4eec\u4f5c\u4e3a\u4f60\u7684 AI \u56e2\u961f\uff1a\u67b6\u6784\u3001\u8bbe\u8ba1\u3001\u5f00\u53d1\u548c\u90e8\u7f72\u3002",
    buildPoint1: "\u5206\u4eab\u4f60\u7684\u60f3\u6cd5 \u2014 \u6211\u4eec\u5c06\u5176\u8f6c\u5316\u4e3a\u4e13\u6ce8\u7684 AI \u4ea7\u54c1",
    buildPoint2: "\u6211\u4eec\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u4ea4\u4ed8 \u2014 \u4f60\u638c\u63e7\u65b9\u5411",
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

    appsHeading: "\u6211\u4eec\u7684 AI \u7cfb\u7edf",
    appsLead:
      "\u996e\u98df\u3001\u7a7f\u642d\u3001\u4e60\u60ef\u3001\u6295\u8d44\u7b49\u9886\u57df\u7684\u51b3\u7b56\u667a\u80fd\u2014\u2014\u540c\u4e00\u5e73\u53f0\u4e0b\u7684\u8fde\u8d2f\u4ea7\u54c1\u77e9\u9635\uff0c\u800c\u975e\u96f6\u6563\u5de5\u5177\u5217\u8868\u3002",
    appViewDetails: "\u67e5\u770b\u8be6\u60c5",
    appComingSoonBadge: "\u5373\u5c06\u63a8\u51fa",
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
    footerBuild:
      "\u9762\u5411\u65e5\u5e38\u751f\u6d3b\u7684 AI \u51b3\u7b56\u7cfb\u7edf\u2014\u2014\u65b0\u6f14\u793a\u4e0e\u53d1\u5e03\u5c06\u9996\u5148\u51fa\u73b0\u5728\u8fd9\u91cc\u3002",
    backToHome: "\u8fd4\u56de\u9996\u9875",
  },
  ko: {
    navApps: "\uc571",
    navAbout: "\uc18c\uac1c",
    navContact: "\uc5f0\ub77d",

    heroBrand: "XingAI",
    tagline: "\uc77c\uc0c1\uc744 \uc704\ud55c AI \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c",
    heroSub:
      "\ubc94\uc6a9 \ucc57\uc774 \uc544\ub2cc \ucd08\uc810 \ub9de\ucda4 AI \uc81c\ud488\uc744 \ub9cc\ub4ed\ub2c8\ub2e4. \ud558\ub098\uc758 \ud50c\ub7ab\ud3fc, \uc77c\uacf1 \uac00\uc9c0 \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c.",
    heroGridLabel: "\uc6b0\ub9ac\uc758 AI \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c",
    homeAppsHeading: "\ud558\ub098\uc758 \ud50c\ub7ab\ud3fc, \uc5ec\ub7ec AI \uc2dc\uc2a4\ud15c",
    homeAppsLead:
      "\uac01 \uc81c\ud488\uc740 \ubc94\uc6a9 \ucc57\ubd07\uc774 \uc544\ub2c8\ub77c \ucd08\uc810 \ub9de\ucda4 \uc758\uc0ac\uacb0\uc815 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4. \uacf5\uac1c\uc801\uc73c\ub85c \uacc4\uc18d \ucd9c\uc2dc\ud569\ub2c8\ub2e4.",
    viewAllApps: "\uc81c\ud488 \ub458\ub7ec\ubcf4\uae30",
    homeCta: "\uc5f0\ub77d\ud558\uae30",

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

    appsHeading: "\uc6b0\ub9ac\uc758 AI \uc2dc\uc2a4\ud15c",
    appsLead:
      "\uc74c\uc2dd, \uc2a4\ud0c0\uc77c, \ub8e8\ud2f4, \ud22c\uc790 \ub4f1 \uc601\uc5ed\uc758 \uc758\uc0ac\uacb0\uc815 \uc778\ud154\ub9ac\uc804\uc2a4\u2014\ud754\uc5b4\uc9c4 \ub3c4\uad6c \ubaa9\ub85d\uc774 \uc544\ub2cc \ud558\ub098\uc758 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4.",
    appViewDetails: "\uc790\uc138\ud788 \ubcf4\uae30",
    appComingSoonBadge: "\ucd9c\uc2dc \uc608\uc815",
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
