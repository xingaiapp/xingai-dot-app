import type { Locale } from "../i18n/translations";

/**
 * Series overview data (ADR-0288). Static, hand-maintained — the same
 * directory-page approach as app/data/apps.ts. Every outbound link below
 * was verified live on 2026-11-13 (series page returned 200; playlist
 * resolved to the named playlist). Series whose page or playlist could
 * not be verified simply carry no button — never guess a URL.
 */
export type SeriesStatus = "ongoing" | "upcoming" | "paused" | "completed";

type LText = Record<Locale, string>;

export type SeriesCard = {
  id: string;
  name: LText;
  pitch: LText;
  cadence: LText;
  status: SeriesStatus;
  pageUrl?: string;
  playlistUrl?: string;
};

export type SeriesGroup = {
  id: string;
  channel: LText;
  handles: string;
  pitch: LText;
  channelUrl: string;
  siteUrl: string;
  series: SeriesCard[];
};

export const seriesGroups: SeriesGroup[] = [
  {
    id: "travel",
    channel: { en: "XingAI Travel", zh: "XingAI Travel", ko: "XingAI Travel" },
    handles: "@xingaitravel",
    pitch: {
      en: "Scenery first — and the gratitude that follows it.",
      zh: "先看美景，感謝隨後自然來。",
      ko: "먼저 풍경, 감사는 그다음에 따라옵니다.",
    },
    channelUrl: "https://www.youtube.com/@xingaitravel",
    siteUrl: "https://travel.xingai.app",
    series: [
      {
        id: "100-days-of-morning-prayer",
        name: {
          en: "100 Days of Morning Prayer",
          zh: "100 Days of Morning Prayer《一百天晨禱》",
          ko: "100 Days of Morning Prayer",
        },
        pitch: {
          en: "A sunrise and a short prayer, every single morning at 6:45. One hundred days straight from November 2 — and when the hundred are done, 365 Days picks up the next morning.",
          zh: "每天早上 6:45，一個日出、一段禱告。從 11 月 2 日起連續一百天，一天不斷；一百天走完，第二天早上無縫接《365 Days》。",
          ko: "매일 아침 6시 45분, 일출 하나와 짧은 기도 하나. 11월 2일에 시작해 백 일을 하루도 거르지 않고 이어 가고, 백 일이 끝나면 다음 날 아침 《365 Days》로 그대로 이어집니다.",
        },
        cadence: {
          en: "Daily · 6:45 AM CT · Day 100 on Feb 9, 2027",
          zh: "每日 · 早上 6:45（CT）· Day 100＝2027 年 2 月 9 日",
          ko: "매일 · 오전 6:45 (CT) · Day 100 = 2027년 2월 9일",
        },
        status: "ongoing",
        pageUrl: "https://travel.xingai.app/stories/100-days-of-morning-prayer",
      },
      {
        id: "30-nights-of-prayer",
        name: {
          en: "30 Nights of Prayer — Counting Down to Christmas",
          zh: "30 Nights of Prayer《三十晚禱告——倒數聖誕》",
          ko: "30 Nights of Prayer — 크리스마스 카운트다운",
        },
        pitch: {
          en: "Thirty nights counting down to Christmas: a night view, a prayer and a worship song every evening, from November 25 to Christmas Eve.",
          zh: "聖誕倒數三十晚：每晚一處夜景、一段禱告、一首敬拜歌，11 月 25 日起陪你走到平安夜。",
          ko: "크리스마스까지 서른 밤 — 밤 풍경 하나, 기도 하나, 찬양 한 곡을 11월 25일부터 크리스마스이브까지 매일 저녁 전합니다.",
        },
        cadence: {
          en: "Nightly · 7:00 PM CT · Nov 25 – Dec 24, 2026",
          zh: "每晚 · 19:00（CT）· 2026 年 11 月 25 日至 12 月 24 日",
          ko: "매일 저녁 · 오후 7:00 (CT) · 2026년 11월 25일 – 12월 24일",
        },
        status: "upcoming",
      },
      {
        id: "los-cabos-with-love",
        name: {
          en: "Los Cabos, With Love",
          zh: "Los Cabos, With Love《帶著愛的洛斯卡沃斯》",
          ko: "Los Cabos, With Love",
        },
        pitch: {
          en: "Numbered postcards from the tip of Baja — lagoon pools, bougainvillea sunsets, the season's first whale. Eleven are out; the series picks back up when new Cabo footage lands.",
          zh: "從巴哈半島最南端寄回的編號明信片——潟湖泳池、九重葛色的日落、本季第一隻鯨魚。已出 11 支，新原片到手就續。",
          ko: "바하 반도 끝에서 보내는 번호 붙은 엽서 — 라군 풀, 부겐빌레아 노을, 시즌 첫 고래. 열한 편이 나왔고, 새 영상이 도착하면 다시 이어집니다.",
        },
        cadence: {
          en: "Numbered series · 11 episodes out",
          zh: "編號系列 · 已出 11 集",
          ko: "번호 시리즈 · 11편 공개",
        },
        status: "paused",
        pageUrl: "https://travel.xingai.app/stories/los-cabos-with-love",
      },
      {
        id: "my-los-cabos",
        name: {
          en: "My Los Cabos",
          zh: "My Los Cabos《我的洛斯卡沃斯》",
          ko: "My Los Cabos",
        },
        pitch: {
          en: "The earlier Cabo trip told as one short story season: mornings by the sea, evenings taken slowly, and the small moments that happen between the views.",
          zh: "早一趟卡沃之旅講成的一季短故事：海邊的清晨、慢慢來的傍晚，和風景之間的小片刻。",
          ko: "먼저 다녀온 카보 여행을 짧은 이야기 한 시즌으로 — 바다 곁의 아침, 느릿한 저녁, 풍경 사이의 작은 순간들.",
        },
        cadence: {
          en: "Story season · 4 episodes",
          zh: "故事季 · 全 4 集",
          ko: "스토리 시즌 · 전 4편",
        },
        status: "completed",
        pageUrl: "https://travel.xingai.app/stories/los-cabos",
      },
      {
        id: "highland-lakes-retreat",
        name: {
          en: "Highland Lakes Camp Retreat",
          zh: "Highland Lakes Camp Retreat《營地退修會》",
          ko: "Highland Lakes Camp Retreat",
        },
        pitch: {
          en: "One November weekend at camp with our church — young people praying together, hands raised, one voice singing. The stone cross above the lake went on to become a series of its own.",
          zh: "十一月的一個週末，全教會在營地退修——年輕人一起禱告、舉手敬拜、同聲唱歌。湖邊的石十字架，後來自己成了一個系列。",
          ko: "11월 어느 주말, 교회와 함께한 캠프 수련회 — 젊은이들의 함께 기도, 든 손, 한목소리의 찬양. 호수 위의 돌 십자가는 그 뒤로 독립 시리즈가 됐습니다.",
        },
        cadence: {
          en: "Story season · filmed Nov 2026, new films through the month",
          zh: "故事季 · 2026 年 11 月退修會，陸續出片",
          ko: "스토리 시즌 · 2026년 11월 수련회, 이달 내내 새 편 공개",
        },
        status: "ongoing",
        pageUrl: "https://travel.xingai.app/stories/highland-lakes-retreat",
      },
      {
        id: "the-next-generation-sings",
        name: {
          en: "The Next Generation Sings",
          zh: "The Next Generation Sings《下一代在歌唱》",
          ko: "The Next Generation Sings",
        },
        pitch: {
          en: "Filmed from the back row on Sunday nights: the young voices of our church, singing like they mean it. Faith, handed down loud.",
          zh: "主日晚從會眾後排拍的：教會裡的年輕人放聲唱，唱得像真相信一樣。信仰，就這樣一棒傳一棒。",
          ko: "주일 저녁, 회중 뒷자리에서 찍었습니다 — 교회의 젊은이들이 마음을 다해 부르는 찬양. 신앙은 이렇게 이어집니다.",
        },
        cadence: {
          en: "Sunday nights",
          zh: "每週日晚",
          ko: "매주 일요일 저녁",
        },
        status: "ongoing",
        pageUrl: "https://travel.xingai.app/stories/next-generation-sings",
      },
      {
        id: "hong-kong-nights",
        name: {
          en: "Hong Kong Nights",
          zh: "Hong Kong Nights《香港夜禱》",
          ko: "Hong Kong Nights",
        },
        pitch: {
          en: "Victoria Harbour after dark, every third night — city lights over the water, paired with a night prayer and a quiet worship song.",
          zh: "入夜的維多利亞港，三天一支——水面上的城市燈火，配一段夜禱和一首安靜的敬拜歌。",
          ko: "밤의 빅토리아 하버를 사흘에 한 번 — 물 위의 도시 불빛에 밤 기도와 잔잔한 찬양을 곁들였습니다.",
        },
        cadence: {
          en: "Every 3 days · 7:00 PM CT",
          zh: "每三天一支 · 19:00（CT）",
          ko: "3일에 한 번 · 오후 7:00 (CT)",
        },
        status: "ongoing",
      },
      {
        id: "top-views-niagara",
        name: {
          en: "Top Views — Niagara Falls",
          zh: "Top Views《最佳觀景——尼亞加拉瀑布》",
          ko: "Top Views — 나이아가라 폭포",
        },
        pitch: {
          en: "Thirteen looks at the Falls — into the mist by boat, from above, from the very brink — plus the full compilation film that ties them together.",
          zh: "十三個角度看瀑布——乘船進水霧、從高空看、站在邊緣看——外加一支把它們串起來的完整合集。",
          ko: "폭포를 보는 열세 가지 시선 — 배로 물안개 속까지, 하늘에서, 가장자리 바로 앞에서 — 그리고 열세 편을 하나로 묶은 전체 합본까지.",
        },
        cadence: {
          en: "Numbered series · 13 episodes + compilation",
          zh: "編號系列 · 13 支＋合集長片",
          ko: "번호 시리즈 · 13편 + 합본",
        },
        status: "completed",
        pageUrl: "https://travel.xingai.app/stories/niagara-falls",
      },
      {
        id: "my-lord-holy",
        name: {
          en: "My Lord, Holy",
          zh: "My Lord, Holy《我的主，聖潔》",
          ko: "My Lord, Holy",
        },
        pitch: {
          en: "Ten places where the view itself turned into a prayer — Niagara, Hong Kong harbour at night, a sunrise sail off Maui. Scenery first; the gratitude follows on its own.",
          zh: "十個地方，風景本身就成了禱告——尼亞加拉、夜裡的維港、茂宜島外海的日出帆影。先是美景，感謝自然就跟上來。",
          ko: "풍경 그 자체가 기도가 된 열 곳 — 나이아가라, 밤의 홍콩 하버, 마우이 앞바다의 일출 항해. 먼저 풍경이 있고, 감사는 뒤따라옵니다.",
        },
        cadence: {
          en: "Story season · 10 episodes",
          zh: "故事季 · 全 10 集",
          ko: "스토리 시즌 · 전 10편",
        },
        status: "completed",
        pageUrl: "https://travel.xingai.app/stories/my-lord-holy",
      },
      {
        id: "my-hong-kong",
        name: {
          en: "My Hong Kong",
          zh: "My Hong Kong《我的香港》",
          ko: "My Hong Kong",
        },
        pitch: {
          en: "Start with the sea at Victoria Harbour, then walk in — the food, the people, the city we keep finding reasons to go back to.",
          zh: "先從維港的海開始，再走進街裡——吃食、人、這座我們一去再去的城市。",
          ko: "빅토리아 하버의 바다에서 시작해 거리로 — 음식, 사람들, 자꾸 다시 가게 되는 도시.",
        },
        cadence: {
          en: "Story season · 2 episodes",
          zh: "故事季 · 全 2 集",
          ko: "스토리 시즌 · 전 2편",
        },
        status: "completed",
        pageUrl: "https://travel.xingai.app/stories/hong-kong",
      },
      {
        id: "my-macau",
        name: {
          en: "My Macau",
          zh: "My Macau《我的澳門》",
          ko: "My Macau",
        },
        pitch: {
          en: "Three European cities folded into one Cotai skyline, then an old town that has stood for four hundred years — Macau in two short chapters.",
          zh: "路氹天際線裡的三座歐洲城市，和站了四百年的老城——兩章講完澳門。",
          ko: "코타이 스카이라인 속 세 개의 유럽 도시, 그리고 사백 년을 서 있는 구시가 — 두 장으로 전하는 마카오.",
        },
        cadence: {
          en: "Story season · 2 episodes",
          zh: "故事季 · 全 2 集",
          ko: "스토리 시즌 · 전 2편",
        },
        status: "completed",
        pageUrl: "https://travel.xingai.app/stories/macau",
      },
      {
        id: "only-time",
        name: {
          en: "Only Time — Moments That Stay Forever",
          zh: "Only Time《留下的片刻》",
          ko: "Only Time — 머문 순간들",
        },
        pitch: {
          en: "A series we use sparingly, built around Enya's “Only Time”: the moments from our travels that never really left. It opens after Los Cabos, With Love finishes its run.",
          zh: "圍繞 Enya《Only Time》做的系列，我們用得很省：旅途中那些一直沒走遠的片刻。排在《Los Cabos, With Love》之後開跑。",
          ko: "Enya의 'Only Time'을 중심으로 한, 아껴 쓰는 시리즈 — 여행에서 끝내 떠나지 않은 순간들. 《Los Cabos, With Love》 다음에 시작합니다.",
        },
        cadence: {
          en: "In preparation",
          zh: "籌備中",
          ko: "준비 중",
        },
        status: "upcoming",
      },
    ],
  },
  {
    id: "cook",
    channel: { en: "XingAI Cook", zh: "XingAI Cook", ko: "XingAI Cook" },
    handles: "@xingaicook",
    pitch: {
      en: "A real family kitchen — never wonder what's for dinner.",
      zh: "一間真實的家庭廚房——不再糾結吃什麼。",
      ko: "진짜 가족의 주방 — 오늘 저녁 메뉴는 여기서 정하세요.",
    },
    channelUrl: "https://www.youtube.com/@xingaicook",
    siteUrl: "https://cook.xingai.app",
    series: [
      {
        id: "the-great-ramen-battle",
        name: {
          en: "The Great Ramen Battle",
          zh: "The Great Ramen Battle《拉麵大戰》",
          ko: "The Great Ramen Battle — 라면 대전",
        },
        pitch: {
          en: "One instant ramen at a time, cooked our way and scored out of ten — cucumber strips stirred in, a raw garlic clove beside the bowl. Weekday evenings; no packet is safe.",
          zh: "一次一款泡麵，照我們家的做法煮、十分制打分——黃瓜絲拌進去，旁邊放一瓣生蒜。週一到五傍晚，哪一包都逃不掉。",
          ko: "한 번에 라면 하나, 우리 집 방식으로 끓여 10점 만점으로 채점합니다 — 오이채는 넣고, 생마늘 한쪽은 곁에. 평일 저녁, 어느 봉지도 무사하지 못합니다.",
        },
        cadence: {
          en: "Mon–Fri · 6:00 PM CT",
          zh: "週一至五 · 18:00（CT）",
          ko: "월–금 · 오후 6:00 (CT)",
        },
        status: "ongoing",
        pageUrl: "https://cook.xingai.app/recipes/korean-ramen",
        playlistUrl: "https://www.youtube.com/playlist?list=PLJkts1kqi7F0",
      },
      {
        id: "popeyes-fried-chicken",
        name: {
          en: "Popeyes Fried Chicken — The Daily Box",
          zh: "Popeyes 炸雞——每日一盒",
          ko: "Popeyes 프라이드치킨 — 매일 한 박스",
        },
        pitch: {
          en: "A fresh Popeyes box at noon, every day — the crunch filmed close enough to hear. Every film is numbered, so the regulars keep count with us.",
          zh: "每天中午一盒新鮮 Popeyes——酥脆聲近到聽得見。每一支都編號，老觀眾跟我們一起數。",
          ko: "매일 정오, Popeyes 한 박스 — 바삭한 소리가 들릴 만큼 가까이 찍습니다. 매 편 번호를 붙였으니 단골들과 함께 세어 보세요.",
        },
        cadence: {
          en: "Daily · 12:00 PM CT",
          zh: "每日 · 12:00（CT）",
          ko: "매일 · 정오 12:00 (CT)",
        },
        status: "ongoing",
        pageUrl: "https://cook.xingai.app/recipes/popeyes-fried-chicken",
      },
      {
        id: "korean-barbecue",
        name: {
          en: "Korean Barbecue Nights",
          zh: "韓國烤肉之夜",
          ko: "한국 바비큐 나이트",
        },
        pitch: {
          en: "Meat on the grill at our own table and at Honey Pig — numbered evenings of sizzle, filmed close. The best rounds come back as long compilation films.",
          zh: "自家桌上和 Honey Pig 的烤肉——滋滋作響的編號夜晚，鏡頭貼得很近。最好的幾輪，會剪成長合集回來。",
          ko: "우리 집 식탁과 Honey Pig의 고기 — 지글지글한 소리를 가까이서 찍는 번호 붙은 저녁들. 가장 좋았던 판들은 긴 합본으로 다시 돌아옵니다.",
        },
        cadence: {
          en: "Daily · around 3:00 PM CT",
          zh: "每日 · 約 15:00（CT）",
          ko: "매일 · 오후 3:00경 (CT)",
        },
        status: "ongoing",
        pageUrl: "https://cook.xingai.app/recipes/korean-barbecue",
      },
      {
        id: "moms-love-bento",
        name: {
          en: "Mom's Love Bento",
          zh: "媽媽的愛心便當",
          ko: "엄마의 사랑 도시락",
        },
        pitch: {
          en: "A lunchbox packed at home on school mornings, filmed as it comes together — rice, something warm, something green. Resting for now, until the next run of bento mornings is filmed.",
          zh: "上學日早上在家裝的便當，邊裝邊拍——有飯、有熱菜、有一點綠。先休息一陣，等下一輪便當清晨拍好再續。",
          ko: "등교하는 아침마다 집에서 싸는 도시락, 싸는 과정을 그대로 찍습니다 — 밥, 따뜻한 반찬, 초록 한 가지. 다음 도시락 아침을 찍을 때까지 잠시 쉬어 갑니다.",
        },
        cadence: {
          en: "School mornings · on pause",
          zh: "上學日早上 · 暫停待料",
          ko: "등교일 아침 · 잠시 중단",
        },
        status: "paused",
        pageUrl: "https://cook.xingai.app/recipes/moms-love-bento-1",
      },
      {
        id: "my-simple-breakfast",
        name: {
          en: "My Simple Breakfast",
          zh: "我的簡單早餐",
          ko: "나의 간단한 아침",
        },
        pitch: {
          en: "Breakfast at our own table, exactly as it happens — five quiet minutes, nothing staged. A new episode lands whenever a real morning gives us something worth sharing.",
          zh: "自家餐桌上的早餐，原樣拍——安靜的五分鐘，不擺拍。有值得分享的真清晨，就有新的一集。",
          ko: "우리 집 식탁의 아침을 있는 그대로 — 조용한 5분, 연출은 없습니다. 나눌 만한 진짜 아침이 있으면 새 편이 나옵니다.",
        },
        cadence: {
          en: "New episodes as real mornings come",
          zh: "隨真實清晨更新",
          ko: "실제 아침이 있을 때 업데이트",
        },
        status: "ongoing",
        pageUrl: "https://cook.xingai.app/recipes/my-simple-breakfast",
        playlistUrl: "https://www.youtube.com/playlist?list=PLaOCsTgVN-kY",
      },
      {
        id: "one-minute-breakfast",
        name: {
          en: "One Minute Breakfast",
          zh: "一分鐘早餐",
          ko: "1분 아침 식사",
        },
        pitch: {
          en: "Friday's working-day breakfast in about a minute: two chocolate croissants, organic tofu, cucumber, cherry tomatoes, half a banana, half a lemon, a cup of instant coffee. Not fancy — simple, balanced, done.",
          zh: "週五上班日的一分鐘早餐：兩個巧克力可頌、有機豆腐、小黃瓜、小西紅柿、半根香蕉、半個檸檬、一杯速溶咖啡。不精緻——簡單、均衡、搞定。",
          ko: "금요일 출근날 아침을 1분 안에 — 초콜릿 크루아상 두 개, 유기농 두부, 오이, 방울토마토, 바나나 반 개, 레몬 반 개, 인스턴트 커피 한 잔. 화려하지 않게, 간단하고 균형 있게.",
        },
        cadence: {
          en: "Every Friday",
          zh: "每週五",
          ko: "매주 금요일",
        },
        status: "ongoing",
        pageUrl: "https://cook.xingai.app/recipes/one-minute-breakfast",
        playlistUrl: "https://www.youtube.com/playlist?list=PLKNRHes9TAi0",
      },
      {
        id: "korean-home-cooking-lessons",
        name: {
          en: "Korean Home Cooking, Lesson by Lesson",
          zh: "韓式家常菜教學",
          ko: "한국 집밥, 한 요리씩 배우기",
        },
        pitch: {
          en: "The Korean dishes our family actually eats, taught one at a time: a full-length lesson, three short episodes and a pitfalls cut for every dish, in that order.",
          zh: "我們家真正在吃的韓式家常菜，一道一道教：每道菜先一支長片教學、再三支短片、最後一支避坑片，照這個順序來。",
          ko: "우리 가족이 실제로 먹는 한국 집밥을 요리 하나씩 가르칩니다 — 요리마다 긴 강의 한 편, 짧은 편 세 개, 실패 방지 편 하나, 이 순서로 나갑니다.",
        },
        cadence: {
          en: "One dish at a time",
          zh: "逐道菜推進",
          ko: "요리 하나씩 진행",
        },
        status: "ongoing",
      },
      {
        id: "trying-other-cooks-ramen",
        name: {
          en: "Trying Other Cooks' Ramen",
          zh: "試做其他博主的拉麵法",
          ko: "다른 크리에이터의 라면 따라 하기",
        },
        pitch: {
          en: "We pick a ramen method from another creator, cook it their way first — then say honestly whether it earns a place in our kitchen.",
          zh: "挑一位博主的拉麵做法，先原樣照做——再老實說：這個方法，值不值得進我們家廚房。",
          ko: "다른 크리에이터의 라면 조리법을 골라, 먼저 그 방식 그대로 끓여 보고 — 우리 주방에 들일 만한지 솔직하게 말합니다.",
        },
        cadence: {
          en: "Pilot in preparation",
          zh: "試播籌備中",
          ko: "파일럿 준비 중",
        },
        status: "upcoming",
      },
    ],
  },
  {
    id: "invest",
    channel: { en: "XingAI Invest", zh: "XingAI Invest", ko: "XingAI Invest" },
    handles: "@axingstocks · @xingaiinvest",
    pitch: {
      en: "US stocks in Chinese and in English — the same homework, said twice, never hyped.",
      zh: "美股，中英雙語——同一份功課講兩遍，從不誇大。",
      ko: "미국 주식을 중국어와 영어로 — 같은 숙제를 두 번, 과장 없이 전합니다.",
    },
    channelUrl: "https://www.youtube.com/@xingaiinvest",
    siteUrl: "https://invest.xingai.app",
    series: [
      {
        id: "why-i-own-it",
        name: {
          en: "Why I Own It",
          zh: "我為什麼持有",
          ko: "내가 이 종목을 보유하는 이유",
        },
        pitch: {
          en: "One stock from our own portfolio per episode — why we bought it, and what would change our mind. Written up on Invest first, then filmed in Chinese for @axingstocks and in English for @xingaiinvest.",
          zh: "每集講一支自家持倉——為什麼買、什麼情況會改變主意。先在 Invest 站寫成文章，再拍成影片：中文發 @axingstocks，英文發 @xingaiinvest。",
          ko: "매회 우리 포트폴리오의 종목 하나 — 왜 샀는지, 어떤 일이 생기면 마음을 바꿀지. Invest 사이트에 먼저 기사로 쓰고, 그다음 중국어(@axingstocks)와 영어(@xingaiinvest) 영상으로 만듭니다.",
        },
        cadence: {
          en: "Mon · Wed · Fri",
          zh: "週一／三／五",
          ko: "월 · 수 · 금",
        },
        status: "ongoing",
        pageUrl: "https://invest.xingai.app/why-i-own-it",
      },
      {
        id: "wall-street-views-weekly",
        name: {
          en: "Wall Street Views — The Weekly",
          zh: "華爾街觀點周報",
          ko: "월스트리트 뷰 — 주간 리뷰",
        },
        pitch: {
          en: "What the big-name strategists said this week — Ives, Lee and the rest — checked line by line against the numbers, with our own one-line take at the end. Sundays, eight minutes and a bit, in both languages.",
          zh: "這週華爾街大名字們說了什麼——Ives、Lee 等人——逐句對著數字核一遍，最後加上我們的一句點評。週日晚八點，八分鐘出頭，中英雙版。",
          ko: "이번 주 월가의 큰 이름들이 한 말 — 아이브스, 리 등 — 을 숫자와 한 줄씩 대조해 확인하고, 마지막에 우리의 한 줄 평을 붙입니다. 일요일 저녁 8시, 8분 남짓, 두 가지 언어로.",
        },
        cadence: {
          en: "Sundays · 8:00 PM CT",
          zh: "週日 · 20:00（CT）",
          ko: "일요일 · 오후 8:00 (CT)",
        },
        status: "ongoing",
        pageUrl: "https://invest.xingai.app/wall-street-views",
      },
    ],
  },
];

export const seriesTotalCount = seriesGroups.reduce((n, g) => n + g.series.length, 0);
