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

const updated = "October 7, 2026";

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
          "On this site we may collect information you send us directly, such as your email address and message contents when you contact us through the contact form or email.",
          "We automatically receive basic technical data from your browser and device, including IP address, browser type, pages visited, and approximate region. This comes from standard hosting logs and cookieless Vercel Web Analytics (page views and optional CTA events we attach in the product UI). The site also loads Ahrefs Web Analytics, which counts visits.",
          "When you open a linked demo (for example cook.xingai.app or invest.xingai.app), that product’s site may collect additional data under its own policy.",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use contact messages to respond to you and improve our products.",
          "We use technical logs and aggregate analytics to keep the site secure, fix errors, and understand traffic patterns.",
          "We do not sell your personal information.",
        ],
      },
      {
        heading: "Cookies and similar technologies",
        paragraphs: [
          "We may use cookies or local storage for theme preference (light/dark), language selection, and basic site functionality.",
          "Vercel Web Analytics on xingai.app is cookieless for page views. Third-party services embedded on demos or checkout flows may set their own cookies. Review those products before signing in or paying.",
        ],
      },
      {
        heading: "Sharing with service providers",
        paragraphs: [
          "We use infrastructure providers that process data on our behalf to deliver the site — including Vercel for hosting and analytics, Ahrefs for visit analytics, and Resend to deliver messages submitted through the contact form.",
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
      "Terms for using xingai.app, browsing AI system listings, and accessing Free-tier live tools and demos.",
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
        heading: "Free tier and paid plans",
        paragraphs: [
          "Many live tools are offered on a Free tier today, often with soft daily limits. Features, availability, and pricing may change. Pro and Unlimited tiers, when offered, will be described on the Pricing page.",
          "We may limit, suspend, or end access to any demo or Free-tier surface to protect the platform or users.",
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
        heading: "Health and nutrition (Eating Decision)",
        paragraphs: [
          "Meal suggestions are not medical advice, diagnosis, or treatment. Consult a qualified health professional for medical conditions, allergies, or dietary restrictions.",
        ],
      },
      {
        heading: "Cooking (Cook AI)",
        paragraphs: [
          "Cook AI offers one-meal cooking suggestions from ingredients you provide (including fridge photos). Outputs are not nutrition, allergen, or food-safety advice. Check ingredients, labels, and safe cooking temperatures yourself before you cook or serve.",
        ],
      },
      {
        heading: "Education and test prep (SAT AI)",
        paragraphs: [
          "SAT mistake analysis is study support, not an official College Board score prediction or guaranteed outcome. Verify explanations, practice independently, and follow official test guidance.",
        ],
      },
      {
        heading: "Investing (Invest AI)",
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
    title: "隱私政策",
    metaDescription: "XingAI（xingai.app）如何收集、使用和保護您的資訊。",
    updated,
    intro:
      "本政策說明 XingAI（“我們”）如何在 xingai.app 及相關營銷頁面處理資訊。當您使用獨立域名上的 Demo 時，該產品可能適用其自有政策。",
    sections: [
      {
        heading: "我們收集的資訊",
        paragraphs: [
          "您透過聯絡表單或郵件主動提供的資訊（例如郵箱地址、訊息內容）。",
          "瀏覽器與裝置的基礎技術資料（如 IP、瀏覽器型別、訪問頁面、大致地區），來自常規託管日誌，以及無 Cookie 的 Vercel Web Analytics（頁面瀏覽與我們在產品介面附加的 CTA 事件）。本站還載入 Ahrefs Web Analytics，用於統計訪問量。",
          "當您開啟關聯 Demo（如 cook.xingai.app）時，該產品站點可能按其政策收集額外資料。",
        ],
      },
      {
        heading: "資訊用途",
        paragraphs: [
          "用於回覆您的諮詢並改進產品。",
          "用於保障安全、修復錯誤、瞭解整體流量趨勢。",
          "我們不出售您的個人資訊。",
        ],
      },
      {
        heading: "Cookie 與類似技術",
        paragraphs: [
          "我們可能使用 Cookie 或本地儲存儲存主題（淺色/深色）、語言偏好及基礎功能。",
          "xingai.app 上的 Vercel Web Analytics 對頁面瀏覽不使用 Cookie。嵌入的第三方 Demo 或支付流程可能設定其自有 Cookie，請在登入或付款前查閱相關產品說明。",
        ],
      },
      {
        heading: "與服務提供商共享",
        paragraphs: [
          "我們使用基礎設施服務商代表我們處理資料以提供網站——包括 Vercel（託管與分析）、Ahrefs（訪問統計）以及 Resend（投遞聯絡表單訊息）。",
          "在法律要求或為保護使用者與公眾安全所必需時，我們可能披露資訊。",
        ],
      },
      {
        heading: "保留與安全",
        paragraphs: [
          "我們僅在實現上述目的所需期限內保留資訊，法律要求更長期限的除外。",
          "我們採取合理的技術與組織措施保護資料，但網際網路傳輸無法保證絕對安全。",
        ],
      },
      {
        heading: "您的選擇",
        paragraphs: [
          "您可致信 contact@xingai.app 請求訪問、更正或刪除您提供給我們的個人資訊，我們將在適用法律要求範圍內回覆。",
          "您可在瀏覽器中禁用 Cookie，部分功能可能無法正常使用。",
        ],
      },
      {
        heading: "兒童",
        paragraphs: ["本網站不面向 13 歲以下兒童，我們也不會故意收集其個人資訊。"],
      },
      {
        heading: "變更與聯絡",
        paragraphs: [
          "我們可能不時更新本政策，頂部“最後更新”日期將隨之變更。",
          "問題請聯絡：contact@xingai.app。",
        ],
      },
    ],
  },
  terms: {
    title: "服務條款",
    metaDescription: "使用 xingai.app、瀏覽 AI 系統列表及 Free 檔工具與 Demo 的條款。",
    updated,
    intro: "使用 xingai.app 即表示您同意本條款；若不同意，請勿使用本網站。",
    sections: [
      {
        heading: "服務說明",
        paragraphs: [
          "xingai.app 是 XingAI 決策系統產品的介紹與發現站點，提供應用說明、Demo 連結與公司資訊。",
          "關聯 Demo 與可下載原始碼可能適用其各自條款。",
        ],
      },
      {
        heading: "Free 檔與付費計劃",
        paragraphs: [
          "許多已上線工具目前在 Free 檔提供，通常帶有每日軟限額。功能、可用性與價格可能變更。Pro 與 Unlimited 開放時，將在定價頁說明。",
          "我們可限制、暫停或終止任何 Demo 或 Free 檔訪問以保護平臺或使用者。",
        ],
      },
      {
        heading: "可接受使用",
        paragraphs: [
          "您不得濫用本站：包括違法活動、騷擾、過載式爬取、破壞安全或虛假宣稱與 XingAI 的關聯。",
          "您對如何使用關聯產品中的 AI 輸出自行負責。",
        ],
      },
      {
        heading: "智慧財產權",
        paragraphs: [
          "網站內容、品牌與標識歸 XingAI 或授權方所有；除開源許可（如我們連結的 GitHub 倉庫）明確允許外，未經許可不得複製。",
        ],
      },
      {
        heading: "免責宣告",
        paragraphs: [
          "網站與 Demo 按“現狀”提供，不作任何明示或默示保證（包括適銷性、特定用途適用性、不侵權）。",
          "AI 輸出可能錯誤或不完整，健康、烹飪、投資等限制見《免責宣告》頁面。",
        ],
      },
      {
        heading: "責任限制",
        paragraphs: [
          "在法律允許的最大範圍內，XingAI 及其團隊不對間接、附帶、特殊、後果性或懲罰性損害，或利潤、資料、商譽損失承擔責任。",
          "就本站相關索賠，我們的總責任上限為您在索賠前十二個月內就該服務向我們支付金額與 100 美元中的較高者。",
        ],
      },
      {
        heading: "賠償",
        paragraphs: ["您同意就因您濫用網站或違反本條款而產生的索賠，向 XingAI 作出賠償並使其免受損害。"],
      },
      {
        heading: "適用法律",
        paragraphs: [
          "本條款受美國特拉華州法律管轄（衝突法規則除外），您所在國強制性消費者保護另有規定的除外。",
          "爭議請先聯絡 contact@xingai.app；在法律允許範圍內，特拉華州法院可享有專屬管轄權。",
        ],
      },
      {
        heading: "變更",
        paragraphs: [
          "我們可更新本條款；繼續使用即視為接受更新後的條款。",
          "問題請聯絡：contact@xingai.app。",
        ],
      },
    ],
  },
  disclaimer: {
    title: "免責宣告",
    metaDescription: "XingAI 決策工具的重要限制——非醫療、法律或投資建議。",
    updated,
    intro: "XingAI 提供決策輔助工具，不能替代持證專業人士。依賴任何輸出前請閱讀本頁。",
    sections: [
      {
        heading: "一般說明",
        paragraphs: [
          "xingai.app 及關聯 Demo 內容僅供資訊與教育用途。",
          "AI 可能錯誤、過時或存在偏見。您須自行核實資訊並對所作決定負責。",
        ],
      },
      {
        heading: "健康與營養（Eating Decision）",
        paragraphs: [
          "膳食建議不構成醫療診斷或治療。如有疾病、過敏或飲食限制，請諮詢合格醫療專業人員。",
        ],
      },
      {
        heading: "烹飪（Cook AI）",
        paragraphs: [
          "Cook AI 根據你提供的食材（含冰箱照片）給出單餐烹飪建議，不是營養、過敏原或食品安全專業意見。烹飪或上桌前請自行核對食材、標籤與安全溫度。",
        ],
      },
      {
        heading: "教育與備考（SAT AI）",
        paragraphs: [
          "SAT 錯題分析僅作為學習輔助，不代表 College Board 官方評分預測，也不保證考試結果。請自行核實解釋、獨立練習，並遵循官方考試說明。",
        ],
      },
      {
        heading: "投資（Invest AI）",
        paragraphs: [
          "XingAI 非註冊投資顧問、經紀商或受託人。AI 輸出不構成投資建議或買賣任何證券的推薦。",
          "投資決策及盈虧由您自行承擔。過往表現不保證未來結果。",
        ],
      },
      {
        heading: "其他場景",
        paragraphs: [
          "穿搭、習慣、育兒、旅行等工具僅提供建議；在重要事項上請結合常識並尋求專業意見。",
        ],
      },
      {
        heading: "聯絡",
        paragraphs: ["問題請聯絡：contact@xingai.app。"],
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
          "문의 양식이나 이메일로 직접 제공하신 정보(이메일, 메시지 내용 등).",
          "브라우저·기기의 기본 기술 데이터(IP, 브라우저 유형, 방문 페이지, 대략적 지역) — 호스팅 로그와 쿠키 없는 Vercel Web Analytics(페이지뷰 및 UI에 붙인 CTA 이벤트)를 통해 수집됩니다. 또한 방문 수를 세는 Ahrefs Web Analytics가 로드됩니다.",
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
          "xingai.app의 Vercel Web Analytics는 페이지뷰에 쿠키를 쓰지 않습니다. 데모·결제에 포함된 제3자 서비스는 자체 쿠키를 설정할 수 있으니 로그인·결제 전 해당 제품을 확인하세요.",
        ],
      },
      {
        heading: "서비스 제공업체와 공유",
        paragraphs: [
          "사이트 제공을 위해 인프라 업체가 당사를 대신해 데이터를 처리합니다 — Vercel(호스팅·분석), Ahrefs(방문 분석), Resend(문의 양식 메일 전달)를 포함합니다.",
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
    metaDescription: "xingai.app 이용, AI 시스템 목록 열람, Free 티어 도구·데모 이용에 관한 약관.",
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
        heading: "Free 티어 및 유료 플랜",
        paragraphs: [
          "많은 라이브 도구가 지금 Free 티어로 제공되며, 보통 소프트 일일 한도가 있습니다. 기능·가용성·가격은 바뀔 수 있습니다. Pro와 Unlimited가 열리면 요금 페이지에 설명합니다.",
          "플랫폼·이용자 보호를 위해 데모 또는 Free 티어 접근을 제한·중단·종료할 수 있습니다.",
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
        heading: "건강·영양(Eating Decision)",
        paragraphs: [
          "식단 제안은 의료 진단·치료가 아닙니다. 질환·알레르기·식이 제한은 자격을 갖춘 전문가와 상담하세요.",
        ],
      },
      {
        heading: "요리(Cook AI)",
        paragraphs: [
          "Cook AI는 제공한 재료(냉장고 사진 포함)로 한 끼 요리 제안을 합니다. 영양·알레르기·식품 안전 전문 조언이 아닙니다. 조리·제공 전 재료·라벨·안전 온도를 직접 확인하세요.",
        ],
      },
      {
        heading: "교육 및 시험 준비(SAT AI)",
        paragraphs: [
          "SAT 오답 분석은 학습 지원이며 College Board의 공식 점수 예측이나 결과 보장이 아닙니다. 설명을 직접 확인하고, 독립적으로 연습하며, 공식 시험 안내를 따르세요.",
        ],
      },
      {
        heading: "투자(Invest AI)",
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
