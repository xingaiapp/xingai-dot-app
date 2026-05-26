import type { Locale } from "./translations";

export type LegalDocId = "privacy" | "terms" | "disclaimer";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDoc = {
  title: string;
  metaDescription: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
};

const updated = "May 21, 2026";

const en: Record<LegalDocId, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    metaDescription:
      "How XingAI (xingai.app) collects, uses, and protects information when you browse the platform or use linked demos.",
    updated,
    intro:
      "This policy describes how XingAI (“we”, “us”) handles information on xingai.app and related marketing pages. Individual AI products may publish their own policies when you use a live demo on a separate domain.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "On this site we may collect information you send us directly, such as your email address and message contents when you contact us.",
          "We automatically receive basic technical data from your browser and device, including IP address, browser type, pages visited, and approximate region. This comes from standard hosting and analytics logs.",
          "When you open a linked demo (for example cook.xingai.app or invest.xingai.app), that product’s site may collect additional data under its own policy.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use contact messages to respond to you and improve our products.",
          "We use technical logs to keep the site secure, fix errors, and understand aggregate traffic patterns.",
          "We do not sell your personal information.",
        ],
      },
      {
        heading: "Cookies and similar technologies",
        paragraphs: [
          "We may use cookies or local storage for theme preference (light/dark), language selection, and basic site functionality.",
          "Third-party services embedded on demos or checkout flows may set their own cookies. Review those products before signing in or paying.",
        ],
      },
      {
        heading: "Sharing with service providers",
        paragraphs: [
          "We use infrastructure providers (for example Vercel for hosting) that process data on our behalf to deliver the site.",
          "We may disclose information if required by law or to protect the rights, safety, and security of users and the public.",
        ],
      },
      {
        heading: "Retention and security",
        paragraphs: [
          "We keep information only as long as needed for the purposes above, unless a longer period is required by law.",
          "We use reasonable technical and organizational measures to protect data, but no method of transmission over the internet is fully secure.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You may request access, correction, or deletion of personal information you sent us by emailing contact@xingai.app. We will respond where applicable law requires it.",
          "You can disable cookies in your browser, though some site features may not work correctly.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "This site is not directed at children under 13, and we do not knowingly collect personal information from them.",
        ],
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          "We may update this policy from time to time. The “Last updated” date at the top will change when we do.",
          "Questions: contact@xingai.app.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    metaDescription:
      "Terms for using xingai.app, browsing AI system listings, and accessing free demos during public beta.",
    updated,
    intro:
      "By using xingai.app you agree to these Terms. If you do not agree, do not use the site.",
    sections: [
      {
        heading: "The service",
        paragraphs: [
          "xingai.app is a marketing and discovery site for XingAI decision-system products. We describe apps, link to live demos, and share company information.",
          "Linked demos and downloadable source may be governed by separate terms on those properties.",
        ],
      },
      {
        heading: "Public beta and free tools",
        paragraphs: [
          "Many tools are offered free during public beta. Features, availability, and pricing may change without notice.",
          "We may limit, suspend, or end access to any demo to protect the platform or users.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          "You agree not to misuse the site: no unlawful activity, harassment, scraping that overloads our systems, attempts to break security, or misrepresentation of affiliation with XingAI.",
          "You are responsible for how you use AI outputs from linked products.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Site content, branding, and logos are owned by XingAI or licensors and may not be copied without permission except where open-source licenses clearly apply (for example GitHub repositories we link to).",
        ],
      },
      {
        heading: "Disclaimers",
        paragraphs: [
          "The site and demos are provided “as is” without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.",
          "AI outputs can be wrong or incomplete. See our Disclaimer page for domain-specific limitations (health, cooking, investing, etc.).",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, XingAI and its team are not liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill arising from your use of the site or linked demos.",
          "Our total liability for any claim relating to the site is limited to the greater of USD $100 or the amount you paid us for the service that gave rise to the claim in the twelve months before the claim.",
        ],
      },
      {
        heading: "Indemnity",
        paragraphs: [
          "You agree to indemnify and hold harmless XingAI from claims arising out of your misuse of the site or violation of these Terms.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law rules, except where mandatory consumer protections in your country apply.",
          "Disputes should first be raised at contact@xingai.app. Courts in Delaware may have exclusive jurisdiction where permitted by law.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update these Terms. Continued use after changes means you accept the updated Terms.",
          "Questions: contact@xingai.app.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    metaDescription:
      "Important limitations on AI decision tools listed on XingAI — not medical, legal, or investment advice.",
    updated,
    intro:
      "XingAI builds decision-support tools, not replacements for licensed professionals. Read this before relying on any output.",
    sections: [
      {
        heading: "General",
        paragraphs: [
          "Content on xingai.app and in linked demos is for informational and educational purposes.",
          "AI can be wrong, outdated, or biased. You are responsible for verifying information and for decisions you make.",
        ],
      },
      {
        heading: "Health and nutrition (Meal Coach)",
        paragraphs: [
          "Meal suggestions are not medical advice, diagnosis, or treatment. Consult a qualified health professional for medical conditions, allergies, or dietary restrictions.",
        ],
      },
      {
        heading: "Cooking (Cook AI)",
        paragraphs: [
          "Recipes and steps do not replace food-safety judgment. Check ingredients, allergens, and safe cooking temperatures yourself.",
        ],
      },
      {
        heading: "Education and test prep (SAT AI)",
        paragraphs: [
          "SAT mistake analysis is study support, not an official College Board score prediction or guaranteed outcome. Verify explanations, practice independently, and follow official test guidance.",
        ],
      },
      {
        heading: "Investing (Investment Assistant)",
        paragraphs: [
          "XingAI is not a registered investment advisor, broker-dealer, or fiduciary. AI outputs are not investment advice or recommendations to buy or sell any security.",
          "You are solely responsible for investment decisions and any gains or losses. Past performance does not guarantee future results.",
        ],
      },
      {
        heading: "Other domains",
        paragraphs: [
          "Style, routine, parenting, and travel tools offer suggestions only. Use common sense and professional guidance where stakes are high.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Questions: contact@xingai.app."],
      },
    ],
  },
};

const zh: Record<LegalDocId, LegalDoc> = {
  privacy: {
    title: "隐私政策",
    metaDescription: "XingAI（xingai.app）如何收集、使用和保护您的信息。",
    updated,
    intro:
      "本政策说明 XingAI（“我们”）如何在 xingai.app 及相关营销页面处理信息。当您使用独立域名上的 Demo 时，该产品可能适用其自有政策。",
    sections: [
      {
        heading: "我们收集的信息",
        paragraphs: [
          "您通过联系表单或邮件主动提供的信息（例如邮箱地址、消息内容）。",
          "浏览器与设备的基础技术数据（如 IP、浏览器类型、访问页面、大致地区），来自常规托管与访问日志。",
          "当您打开关联 Demo（如 cook.xingai.app）时，该产品站点可能按其政策收集额外数据。",
        ],
      },
      {
        heading: "信息用途",
        paragraphs: [
          "用于回复您的咨询并改进产品。",
          "用于保障安全、修复错误、了解整体流量趋势。",
          "我们不出售您的个人信息。",
        ],
      },
      {
        heading: "Cookie 与类似技术",
        paragraphs: [
          "我们可能使用 Cookie 或本地存储保存主题（浅色/深色）、语言偏好及基础功能。",
          "嵌入的第三方 Demo 或支付流程可能设置其自有 Cookie，请在登录或付款前查阅相关产品说明。",
        ],
      },
      {
        heading: "与服务提供商共享",
        paragraphs: [
          "我们使用托管等基础设施服务商（例如 Vercel）代表我们处理数据以提供网站服务。",
          "在法律要求或为保护用户与公众安全所必需时，我们可能披露信息。",
        ],
      },
      {
        heading: "保留与安全",
        paragraphs: [
          "我们仅在实现上述目的所需期限内保留信息，法律要求更长期限的除外。",
          "我们采取合理的技术与组织措施保护数据，但互联网传输无法保证绝对安全。",
        ],
      },
      {
        heading: "您的选择",
        paragraphs: [
          "您可致信 contact@xingai.app 请求访问、更正或删除您提供给我们的个人信息，我们将在适用法律要求范围内回复。",
          "您可在浏览器中禁用 Cookie，部分功能可能无法正常使用。",
        ],
      },
      {
        heading: "儿童",
        paragraphs: ["本网站不面向 13 岁以下儿童，我们也不会故意收集其个人信息。"],
      },
      {
        heading: "变更与联系",
        paragraphs: [
          "我们可能不时更新本政策，顶部“最后更新”日期将随之变更。",
          "问题请联系：contact@xingai.app。",
        ],
      },
    ],
  },
  terms: {
    title: "服务条款",
    metaDescription: "使用 xingai.app、浏览 AI 系统列表及公开 Beta Demo 的条款。",
    updated,
    intro: "使用 xingai.app 即表示您同意本条款；若不同意，请勿使用本网站。",
    sections: [
      {
        heading: "服务说明",
        paragraphs: [
          "xingai.app 是 XingAI 决策系统产品的介绍与发现站点，提供应用说明、Demo 链接与公司信息。",
          "关联 Demo 与可下载源码可能适用其各自条款。",
        ],
      },
      {
        heading: "公开 Beta 与免费工具",
        paragraphs: [
          "许多工具在公开 Beta 期间免费提供，功能、可用性与价格可能变更且恕不另行通知。",
          "我们可限制、暂停或终止任何 Demo 访问以保护平台或用户。",
        ],
      },
      {
        heading: "可接受使用",
        paragraphs: [
          "您不得滥用本站：包括违法活动、骚扰、过载式爬取、破坏安全或虚假宣称与 XingAI 的关联。",
          "您对如何使用关联产品中的 AI 输出自行负责。",
        ],
      },
      {
        heading: "知识产权",
        paragraphs: [
          "网站内容、品牌与标识归 XingAI 或授权方所有；除开源许可（如我们链接的 GitHub 仓库）明确允许外，未经许可不得复制。",
        ],
      },
      {
        heading: "免责声明",
        paragraphs: [
          "网站与 Demo 按“现状”提供，不作任何明示或默示保证（包括适销性、特定用途适用性、不侵权）。",
          "AI 输出可能错误或不完整，健康、烹饪、投资等限制见《免责声明》页面。",
        ],
      },
      {
        heading: "责任限制",
        paragraphs: [
          "在法律允许的最大范围内，XingAI 及其团队不对间接、附带、特殊、后果性或惩罚性损害，或利润、数据、商誉损失承担责任。",
          "就本站相关索赔，我们的总责任上限为您在索赔前十二个月内就该服务向我们支付金额与 100 美元中的较高者。",
        ],
      },
      {
        heading: "赔偿",
        paragraphs: ["您同意就因您滥用网站或违反本条款而产生的索赔，向 XingAI 作出赔偿并使其免受损害。"],
      },
      {
        heading: "适用法律",
        paragraphs: [
          "本条款受美国特拉华州法律管辖（冲突法规则除外），您所在国强制性消费者保护另有规定的除外。",
          "争议请先联系 contact@xingai.app；在法律允许范围内，特拉华州法院可享有专属管辖权。",
        ],
      },
      {
        heading: "变更",
        paragraphs: [
          "我们可更新本条款；继续使用即视为接受更新后的条款。",
          "问题请联系：contact@xingai.app。",
        ],
      },
    ],
  },
  disclaimer: {
    title: "免责声明",
    metaDescription: "XingAI 决策工具的重要限制——非医疗、法律或投资建议。",
    updated,
    intro: "XingAI 提供决策辅助工具，不能替代持证专业人士。依赖任何输出前请阅读本页。",
    sections: [
      {
        heading: "一般说明",
        paragraphs: [
          "xingai.app 及关联 Demo 内容仅供信息与教育用途。",
          "AI 可能错误、过时或存在偏见。您须自行核实信息并对所作决定负责。",
        ],
      },
      {
        heading: "健康与营养（Meal Coach）",
        paragraphs: [
          "膳食建议不构成医疗诊断或治疗。如有疾病、过敏或饮食限制，请咨询合格医疗专业人员。",
        ],
      },
      {
        heading: "烹饪（Cook AI）",
        paragraphs: [
          "食谱与步骤不能替代食品安全判断。请自行确认食材、过敏原与安全烹饪温度。",
        ],
      },
      {
        heading: "教育与备考（SAT AI）",
        paragraphs: [
          "SAT 错题分析仅作为学习辅助，不代表 College Board 官方评分预测，也不保证考试结果。请自行核实解释、独立练习，并遵循官方考试说明。",
        ],
      },
      {
        heading: "投资（Investment Assistant）",
        paragraphs: [
          "XingAI 非注册投资顾问、经纪商或受托人。AI 输出不构成投资建议或买卖任何证券的推荐。",
          "投资决策及盈亏由您自行承担。过往表现不保证未来结果。",
        ],
      },
      {
        heading: "其他场景",
        paragraphs: [
          "穿搭、习惯、育儿、旅行等工具仅提供建议；在重要事项上请结合常识并寻求专业意见。",
        ],
      },
      {
        heading: "联系",
        paragraphs: ["问题请联系：contact@xingai.app。"],
      },
    ],
  },
};

const ko: Record<LegalDocId, LegalDoc> = {
  privacy: {
    title: "개인정보 처리방침",
    metaDescription: "XingAI(xingai.app)의 정보 수집·이용·보호 방식.",
    updated,
    intro:
      "본 방침은 xingai.app 및 관련 마케팅 페이지에서 XingAI(“당사”)가 정보를 처리하는 방법을 설명합니다. 별도 도메인의 라이브 데모는 해당 제품 정책이 적용될 수 있습니다.",
    sections: [
      {
        heading: "수집하는 정보",
        paragraphs: [
          "문의 시 직접 제공하신 정보(이메일, 메시지 내용 등).",
          "브라우저·기기의 기본 기술 데이터(IP, 브라우저 유형, 방문 페이지, 대략적 지역) — 호스팅·접속 로그를 통해 수집됩니다.",
          "연결된 데모(예: cook.xingai.app) 이용 시 해당 사이트가 자체 정책에 따라 추가 정보를 수집할 수 있습니다.",
        ],
      },
      {
        heading: "이용 목적",
        paragraphs: [
          "문의 응답 및 제품 개선.",
          "보안 유지, 오류 수정, 전체 트래픽 패턴 파악.",
          "개인정보를 판매하지 않습니다.",
        ],
      },
      {
        heading: "쿠키 및 유사 기술",
        paragraphs: [
          "테마(라이트/다크), 언어 설정 등 기본 기능을 위해 쿠키 또는 로컬 스토리지를 사용할 수 있습니다.",
          "데모·결제에 포함된 제3자 서비스는 자체 쿠키를 설정할 수 있으니 로그인·결제 전 해당 제품을 확인하세요.",
        ],
      },
      {
        heading: "서비스 제공업체와 공유",
        paragraphs: [
          "사이트 제공을 위해 호스팅 등 인프라 업체(Vercel 등)가 당사를 대신해 데이터를 처리할 수 있습니다.",
          "법률에 따르거나 이용자·공공의 안전을 보호하기 위해 필요한 경우 정보를 공개할 수 있습니다.",
        ],
      },
      {
        heading: "보관 및 보안",
        paragraphs: [
          "위 목적에 필요한 기간 동안만 보관하며, 법률이 더 긴 기간을 요구하는 경우는 예외입니다.",
          "합리적인 기술·조직적 보호 조치를 사용하나, 인터넷 전송의 완전한 보안은 보장되지 않습니다.",
        ],
      },
      {
        heading: "이용자 선택",
        paragraphs: [
          "contact@xingai.app 으로 제공하신 개인정보의 열람·정정·삭제를 요청할 수 있으며, 적용 법률이 요구하는 범위에서 응답합니다.",
          "브라우저에서 쿠키를 비활성화할 수 있으나 일부 기능이 제한될 수 있습니다.",
        ],
      },
      {
        heading: "아동",
        paragraphs: ["본 사이트는 만 13세 미만을 대상으로 하지 않으며, 고의로 그들의 정보를 수집하지 않습니다."],
      },
      {
        heading: "변경 및 문의",
        paragraphs: [
          "방침을 수시로 업데이트할 수 있으며, 상단 ‘최종 업데이트’ 날짜가 변경됩니다.",
          "문의: contact@xingai.app",
        ],
      },
    ],
  },
  terms: {
    title: "이용약관",
    metaDescription: "xingai.app 이용, AI 시스템 목록 열람, 공개 베타 데모 이용에 관한 약관.",
    updated,
    intro: "xingai.app을 이용하면 본 약관에 동의한 것으로 봅니다. 동의하지 않으면 사이트를 이용하지 마세요.",
    sections: [
      {
        heading: "서비스",
        paragraphs: [
          "xingai.app은 XingAI 의사결정 시스템 제품의 소개·발견 사이트입니다. 앱 설명, 데모 링크, 회사 정보를 제공합니다.",
          "연결된 데모·소스 코드는 해당 속성의 별도 약관이 적용될 수 있습니다.",
        ],
      },
      {
        heading: "공개 베타 및 무료 도구",
        paragraphs: [
          "많은 도구가 공개 베타 기간 무료로 제공되며, 기능·가용성·가격은 예고 없이 변경될 수 있습니다.",
          "플랫폼·이용자 보호를 위해 데모 접근을 제한·중단·종료할 수 있습니다.",
        ],
      },
      {
        heading: "허용 가능한 이용",
        paragraphs: [
          "불법 행위, 괴롭힘, 시스템 과부하 스크래핑, 보안 침해, XingAI와의 무단 연계 표시 등 사이트 오용을 금지합니다.",
          "연결 제품의 AI 출력 사용 방식에 대한 책임은 이용자에게 있습니다.",
        ],
      },
      {
        heading: "지적 재산",
        paragraphs: [
          "사이트 콘텐츠·브랜드·로고는 XingAI 또는 라이선스 제공자 소유이며, 링크된 오픈소스(GitHub 등)에서 명시한 경우를 제외하고 무단 복제할 수 없습니다.",
        ],
      },
      {
        heading: "보증 부인",
        paragraphs: [
          "사이트·데모는 ‘있는 그대로’ 제공되며, 상품성·특정 목적 적합성·비침해 등 명시·묵시적 보증을 하지 않습니다.",
          "AI 출력은 틀리거나 불완전할 수 있습니다. 건강·요리·투자 등 제한은 면책 페이지를 참고하세요.",
        ],
      },
      {
        heading: "책임 제한",
        paragraphs: [
          "법이 허용하는 최대 한도에서, XingAI 및 팀은 간접·부수·특별·결과·징벌적 손해 또는 이익·데이터·평판 손실에 대해 책임지지 않습니다.",
          "사이트 관련 청구에 대한 총 책임은 청구 전 12개월간 해당 서비스에 지불한 금액과 100 USD 중 큰 금액으로 제한됩니다.",
        ],
      },
      {
        heading: "면책",
        paragraphs: ["사이트 오용 또는 본 약관 위반으로 발생하는 청구로부터 XingAI를 면책하고 보호하는 데 동의합니다."],
      },
      {
        heading: "준거법",
        paragraphs: [
          "본 약관은 미국 델라웨어주 법률의 적용을 받습니다(법률 충돌 규칙 제외). 이용자 국가의 강행 소비자 보호가 있는 경우 그에 따릅니다.",
          "분쟁은 먼저 contact@xingai.app 로 제기해 주세요. 법이 허용하는 범위에서 델라웨어 법원이 전속 관할을 가질 수 있습니다.",
        ],
      },
      {
        heading: "변경",
        paragraphs: [
          "약관을 업데이트할 수 있으며, 변경 후 계속 이용하면 업데이트된 약관에 동의한 것으로 봅니다.",
          "문의: contact@xingai.app",
        ],
      },
    ],
  },
  disclaimer: {
    title: "면책 고지",
    metaDescription: "XingAI AI 의사결정 도구의 한계 — 의료·법률·투자 자문이 아님.",
    updated,
    intro:
      "XingAI는 면허 전문가를 대체하지 않는 의사결정 지원 도구를 만듭니다. 어떤 출력에도 의존하기 전에 읽어 주세요.",
    sections: [
      {
        heading: "일반",
        paragraphs: [
          "xingai.app 및 연결 데모의 콘텐츠는 정보·교육 목적입니다.",
          "AI는 틀리거나 오래되었거나 편향될 수 있습니다. 정보를 검증하고 결정에 대한 책임은 이용자에게 있습니다.",
        ],
      },
      {
        heading: "건강·영양(Meal Coach)",
        paragraphs: [
          "식단 제안은 의료 진단·치료가 아닙니다. 질환·알레르기·식이 제한은 자격을 갖춘 전문가와 상담하세요.",
        ],
      },
      {
        heading: "요리(Cook AI)",
        paragraphs: [
          "레시피·조리 단계는 식품 안전 판단을 대체하지 않습니다. 재료·알레르기·안전 조리 온도를 직접 확인하세요.",
        ],
      },
      {
        heading: "교육 및 시험 준비(SAT AI)",
        paragraphs: [
          "SAT 오답 분석은 학습 지원이며 College Board의 공식 점수 예측이나 결과 보장이 아닙니다. 설명을 직접 확인하고, 독립적으로 연습하며, 공식 시험 안내를 따르세요.",
        ],
      },
      {
        heading: "투자(Investment Assistant)",
        paragraphs: [
          "XingAI는 등록 투자 자문사·브로커·수탁자가 아닙니다. AI 출력은 투자 자문이거나 증권 매매 권유가 아닙니다.",
          "투자 결정과 손익은 전적으로 이용자 책임입니다. 과거 성과가 미래 결과를 보장하지 않습니다.",
        ],
      },
      {
        heading: "기타 영역",
        paragraphs: [
          "스타일·루틴·육아·여행 도구는 제안일 뿐입니다. 중요한 결정에는 상식과 전문가 조언을 병행하세요.",
        ],
      },
      {
        heading: "문의",
        paragraphs: ["문의: contact@xingai.app"],
      },
    ],
  },
};

export const legalDocsByLocale: Record<Locale, Record<LegalDocId, LegalDoc>> = {
  en,
  zh,
  ko,
};

export const legalDocIds: LegalDocId[] = ["privacy", "terms", "disclaimer"];

export function isLegalDocId(slug: string): slug is LegalDocId {
  return legalDocIds.includes(slug as LegalDocId);
}

export function getLegalDoc(locale: Locale, id: LegalDocId): LegalDoc {
  return legalDocsByLocale[locale][id] ?? legalDocsByLocale.en[id];
}
