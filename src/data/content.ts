import type { Locale } from "./site";

export type LandingContent = {
  locale: Locale;
  langLabel: string;
  seo: {
    title: string;
    description: string;
  };
  nav: {
    practice: string;
    community: string;
    trips: string;
    faq: string;
  };
  cta: {
    label: string;
    ariaLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    chips: string[];
    stats: { value: string; label: string }[];
  };
  pillars: {
    kicker: string;
    title: string;
    items: { title: string; text: string }[];
  };
  gymkhana: {
    kicker: string;
    title: string;
    body: string;
    bullets: string[];
    courseMap: {
      alt: string;
      caption: string;
      sourceLabel: string;
      sourceUrl: string;
    };
    courseVisual: {
      alt: string;
      caption: string;
    };
  };
  sunday: {
    kicker: string;
    title: string;
    body: string;
    steps: { title: string; text: string }[];
  };
  gallery: {
    kicker: string;
    title: string;
    body: string;
    photos: { label: string; alt: string; caption: string; src: string; width: number; height: number }[];
  };
  trips: {
    kicker: string;
    title: string;
    body: string;
    routes: { name: string; text: string }[];
  };
  videos: {
    kicker: string;
    title: string;
    body: string;
    titles: string[];
  };
  newHere: {
    title: string;
    body: string;
    items: string[];
  };
  finalCta: {
    title: string;
    body: string;
    points: string[];
  };
  faq: {
    kicker: string;
    title: string;
    items: { question: string; answer: string }[];
  };
};

export const content: Record<Locale, LandingContent> = {
  en: {
    locale: "en",
    langLabel: "English",
    seo: {
      title: "MotoBarna | MotoGymkhana and Motorcycle Community in Barcelona",
      description:
        "Join MotoBarna, a Barcelona MotoGymkhana and motorcycle community for Sunday cone courses, parking-lot hangs, and weekend rides around Catalunya.",
    },
    nav: {
      practice: "Practice",
      community: "Community",
      trips: "Trips",
      faq: "FAQ",
    },
    cta: {
      label: "Join Telegram",
      ariaLabel: "Join MotoBarna Telegram group",
    },
    hero: {
      eyebrow: "MotoBarna",
      title: "MotoGymkhana in Barcelona",
      lead:
        "Timed cone runs, Sunday parking-lot hangs, and motorcycle trips around Barcelona and Catalunya.",
      note:
        "Join the Telegram group to get the meeting pin, course maps, Sunday details, and ride plans.",
      chips: [
        "Every Sunday",
        "Meeting pin in Telegram",
        "New riders welcome",
        "Road trips too",
      ],
      stats: [
        { value: "Sundays", label: "MotoGymkhana practice and parking-lot hangs" },
        { value: "Private pin", label: "Exact meeting point is shared in Telegram" },
        { value: "All bikes", label: "Street-legal motorcycles and respectful riders" },
      ],
    },
    pillars: {
      kicker: "Three ways in",
      title: "A riding community, not only a practice session.",
      items: [
        {
          title: "Ride the course",
          text: "Walk the layout, ride timed runs, chase clean gates, and compare line choices.",
        },
        {
          title: "Hang out after runs",
          text: "Coffee, bike chat, setup talk, technique tips, and help from riders who have been there.",
        },
        {
          title: "Trips around Catalunya",
          text: "Coastal roads, mountain viewpoints, coffee stops, and relaxed weekend rides from Barcelona.",
        },
      ],
    },
    gymkhana: {
      kicker: "The sport",
      title: "MotoGymkhana is technical motorcycle time-trial riding.",
      body:
        "A MotoGymkhana course is a compact puzzle for a motorcycle: gates, slaloms, boxes, 270-degree turns, braking zones, and a finish stop. Riders walk the layout first, then ride for a clean, fast run. Speed matters, but the real work is reading the line and keeping control.",
      bullets: [
        "Walk the course before the first run",
        "Read gates, boxes, starts, and finish stops",
        "Ride the same layout and improve your line",
        "Work on body position, braking, throttle, and balance",
        "Keep it clean: cone mistakes add penalties",
      ],
      courseMap: {
        alt: "Gymkhana GP 2025 Stage 1 competition course map with cones, gates, arrows, start, finish, and dimensions",
        caption:
          "Example competition map: Gymkhana GP 2025 Stage 1. Real courses use gates, cone pairs, direction arrows, start boxes, finish stops, and measurements.",
        sourceLabel: "Source: Gymkhana GP / gymkhana-cup.com",
        sourceUrl: "https://gymkhana-cup.com/competitions/special-stage?id=39",
      },
      courseVisual: {
        alt: "MotoGymkhana rider seen from above riding through a technical cone course in a parking lot",
        caption: "Course geometry, line choice, and repeated attempts are the point.",
      },
    },
    sunday: {
      kicker: "The Sunday ritual",
      title: "Come for the cones. Stay for the people.",
      body:
        "The exact parking-lot location is shared inside Telegram so the public page stays private. You can ride, watch first, ask questions, or just meet local motorcycle people.",
      steps: [
        {
          title: "Arrive",
          text: "Say hi, park up, check the course, and meet whoever is already warming up.",
        },
        {
          title: "Walk layout",
          text: "Read the gates, turns, boxes, and finish stop before the first run.",
        },
        {
          title: "Ride timed runs",
          text: "Start clean, find flow, compare lines, and try a better approach next run.",
        },
        {
          title: "Compare lines",
          text: "Talk technique, mistakes, tires, bars, brakes, and bike setup between attempts.",
        },
        {
          title: "Hang out or ride",
          text: "Coffee, chat, route planning, and sometimes a group ride after practice.",
        },
      ],
    },
    gallery: {
      kicker: "Community proof",
      title: "Real Sundays, real riders.",
      body:
        "MotoBarna is built from ordinary Sundays: someone riding the course, someone watching the line, someone talking bikes by the helmets. The exact parking-lot pin stays inside Telegram.",
      photos: [
        {
          label: "MotoGymkhana",
          alt: "MotoBarna rider practicing MotoGymkhana around cones in a Barcelona parking lot",
          caption: "Rider through cones during a timed section",
          src: "/images/motobarna-gymkhana.png",
          width: 1490,
          height: 1300,
        },
        {
          label: "Hangout",
          alt: "MotoBarna riders hanging out beside motorcycles after Sunday practice",
          caption: "Coffee and bike chat between runs",
          src: "/images/motobarna-hanging-out.jpg",
          width: 1280,
          height: 720,
        },
        {
          label: "Trips",
          alt: "MotoBarna riders and motorcycles stopped on a mountain road in Catalunya",
          caption: "Group ride stop on a Catalunya route",
          src: "/images/motobarna-trip.jpg",
          width: 1280,
          height: 720,
        },
      ],
    },
    trips: {
      kicker: "Beyond the parking lot",
      title: "The roads are the rest of the story.",
      body:
        "MotoBarna also plans relaxed motorcycle trips around Barcelona and Catalunya: coastal roads, mountain viewpoints, coffee stops, and the occasional one-more-curve detour.",
      routes: [
        { name: "Costa Brava", text: "Coastal curves, sea views, and longer weekend ride days." },
        { name: "Montserrat", text: "Iconic mountain roads and viewpoint photos." },
        { name: "Montseny", text: "Flowing roads, forest air, and technical corners." },
        { name: "Sitges", text: "Easy coastal escape from Barcelona with coffee stops." },
        { name: "Collserola", text: "Close-to-city roads for short evening or Sunday rides." },
      ],
    },
    videos: {
      kicker: "Past rides",
      title: "Weekend trip videos from Catalunya.",
      body:
        "When the cones are packed away, the same group plans road days: coastal bends, mountain stops, and relaxed routes outside Barcelona.",
      titles: [
        "MotoBarna Catalunya weekend ride video",
        "MotoBarna motorcycle trip around Catalonia",
      ],
    },
    newHere: {
      title: "New here? You do not need to be fast.",
      body:
        "Bring a street-legal motorcycle, protective gear, curiosity, and respect for the group. Watching first is completely fine.",
      items: [
        "All brands and street bikes are welcome",
        "No public address; get the meeting pin in Telegram",
        "Ask before filming people or license plates",
        "Ride within your limits and leave ego at home",
      ],
    },
    finalCta: {
      title: "The hub is Telegram.",
      body:
        "Course maps, meeting pins, Sunday plans, trip ideas, and last-minute changes all happen in the group.",
      points: [
        "Meeting pin",
        "Sunday course plans",
        "Ride plans",
        "Community chat",
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Practical answers before you join.",
      items: [
        {
          question: "Is this a riding school?",
          answer:
            "No. MotoBarna is a community, not a paid school. Experienced riders share advice and everyone practices at their own responsibility.",
        },
        {
          question: "Can beginners come?",
          answer:
            "Yes. You can come watch first, chat, and decide when you want to ride. The important thing is control, respect, and learning at your pace.",
        },
        {
          question: "Where is the parking lot?",
          answer:
            "The exact meeting pin is shared in Telegram. That keeps the public page clean and avoids publishing the location broadly.",
        },
        {
          question: "Is it only slow-speed practice?",
          answer:
            "No. MotoGymkhana is a timed technical sport with cone courses, course walking, line choice, clean gates, and penalties.",
        },
      ],
    },
  },
  ru: {
    locale: "ru",
    langLabel: "Русский",
    seo: {
      title: "MotoBarna | Мотоджимхана и мотосообщество в Барселоне",
      description:
        "MotoBarna — русскоязычное мотосообщество в Барселоне: воскресная мотоджимхана, общение на парковке и поездки по Каталонии.",
    },
    nav: {
      practice: "Практика",
      community: "Комьюнити",
      trips: "Поездки",
      faq: "FAQ",
    },
    cta: {
      label: "В Telegram",
      ariaLabel: "Присоединиться к Telegram-группе MotoBarna",
    },
    hero: {
      eyebrow: "MotoBarna",
      title: "Мотоджимхана в Барселоне",
      lead:
        "Заезды на время по конусам, воскресные встречи на парковке и мотопоездки вокруг Барселоны и Каталонии.",
      note:
        "В Telegram мы публикуем точку встречи, схемы трасс, детали воскресенья и планы поездок.",
      chips: [
        "Каждое воскресенье",
        "Точка встречи в Telegram",
        "Новым райдерам рады",
        "Поездки тоже есть",
      ],
      stats: [
        { value: "Воскресенья", label: "Мотоджимхана, парковка и живое общение" },
        { value: "Приватная точка", label: "Точное место встречи публикуем в Telegram" },
        { value: "Любые мото", label: "Дорожные мотоциклы и спокойное отношение" },
      ],
    },
    pillars: {
      kicker: "Три причины приехать",
      title: "Это мотосообщество, а не только тренировка.",
      items: [
        {
          title: "Ездим трассу",
          text: "Разбираем схему, едем заезды на время, ищем чистые ворота и сравниваем траектории.",
        },
        {
          title: "Общаемся после заездов",
          text: "Кофе, разговоры про мотоциклы, настройки, технику и помощь от более опытных участников.",
        },
        {
          title: "Катаемся по Каталонии",
          text: "Побережье, горы, красивые точки, кофе-стопы и спокойные выезды из Барселоны.",
        },
      ],
    },
    gymkhana: {
      kicker: "Спорт",
      title: "Мотоджимхана — это техническая езда на время.",
      body:
        "Трасса мотоджимханы — это компактная головоломка для мотоцикла: ворота, слаломы, боксы, развороты на 270 градусов, зоны торможения и финишная остановка. Сначала схему проходят пешком, потом едут на чистый быстрый заезд. Скорость важна, но выигрывает контроль и траектория.",
      bullets: [
        "Сначала пешком разбираем схему",
        "Читаем ворота, боксы, старт и финиш",
        "Повторяем трассу и улучшаем траекторию",
        "Работаем с посадкой, торможением, газом и балансом",
        "Едем чисто: ошибки на конусах дают штрафы",
      ],
      courseMap: {
        alt: "Карта трассы Gymkhana GP 2025 Stage 1 с конусами, воротами, стрелками, стартом, финишем и размерами",
        caption:
          "Пример карты соревнования: Gymkhana GP 2025 Stage 1. На настоящих схемах есть ворота, пары конусов, стрелки направления, старт, финиш и размеры.",
        sourceLabel: "Источник: Gymkhana GP / gymkhana-cup.com",
        sourceUrl: "https://gymkhana-cup.com/competitions/special-stage?id=39",
      },
      courseVisual: {
        alt: "Райдер мотоджимханы сверху едет техническую конусную трассу на парковке",
        caption: "Геометрия трассы, траектория и повторные попытки — в этом суть.",
      },
    },
    sunday: {
      kicker: "Воскресный ритуал",
      title: "Приезжай за конусами. Останься ради людей.",
      body:
        "Точную парковку мы не публикуем открыто: точка встречи лежит в Telegram. Можно приехать кататься, сначала посмотреть, задать вопросы или просто познакомиться с местными мотоциклистами.",
      steps: [
        {
          title: "Приезд",
          text: "Поздороваться, припарковаться, посмотреть трассу и познакомиться с теми, кто уже на месте.",
        },
        {
          title: "Разбор схемы",
          text: "Пройти трассу пешком: ворота, повороты, боксы и финишную остановку.",
        },
        {
          title: "Заезды на время",
          text: "Чистый старт, поиск ритма, сравнение времени и новая попытка с лучшей траекторией.",
        },
        {
          title: "Разбор траекторий",
          text: "Техника, ошибки, резина, руль, тормоза и настройки мотоцикла между заездами.",
        },
        {
          title: "Общение или поездка",
          text: "Кофе, разговоры, планирование маршрутов и иногда общий выезд после практики.",
        },
      ],
    },
    gallery: {
      kicker: "Живое комьюнити",
      title: "Настоящие воскресенья, настоящие райдеры.",
      body:
        "MotoBarna держится на простых воскресных моментах: кто-то едет трассу, кто-то смотрит траекторию, кто-то обсуждает мотоциклы рядом со шлемами. Точную точку встречи оставляем внутри Telegram.",
      photos: [
        {
          label: "Мотоджимхана",
          alt: "Райдер MotoBarna тренирует мотоджимхану вокруг конусов на парковке в Барселоне",
          caption: "Райдер в конусной секции во время заезда на время",
          src: "/images/motobarna-gymkhana.png",
          width: 1490,
          height: 1300,
        },
        {
          label: "Общение",
          alt: "Участники MotoBarna общаются рядом с мотоциклами после воскресной практики",
          caption: "Кофе и разговоры про мотоциклы между заездами",
          src: "/images/motobarna-hanging-out.jpg",
          width: 1280,
          height: 720,
        },
        {
          label: "Поездки",
          alt: "Участники MotoBarna и мотоциклы на остановке горного маршрута в Каталонии",
          caption: "Остановка на групповом маршруте по Каталонии",
          src: "/images/motobarna-trip.jpg",
          width: 1280,
          height: 720,
        },
      ],
    },
    trips: {
      kicker: "За пределами парковки",
      title: "Дороги — вторая часть истории.",
      body:
        "MotoBarna — русскоязычное мотосообщество экспатов в Барселоне. Помимо воскресной практики мы планируем спокойные поездки по Барселоне и Каталонии: побережье, горы, красивые виды, кофе и еще один хороший поворот.",
      routes: [
        { name: "Costa Brava", text: "Побережье, морские виды и длинные выезды на выходных." },
        { name: "Montserrat", text: "Знаковые горные дороги и фотографии на смотровых." },
        { name: "Montseny", text: "Текучие дороги, лесной воздух и техничные повороты." },
        { name: "Sitges", text: "Быстрый выезд из Барселоны к морю и кофе." },
        { name: "Collserola", text: "Близкие к городу дороги для коротких вечерних или воскресных поездок." },
      ],
    },
    videos: {
      kicker: "Прошлые выезды",
      title: "Видео поездок выходного дня по Каталонии.",
      body:
        "Когда конусы убраны, та же компания планирует дорожные дни: побережье, горы, кофе-стопы и спокойные маршруты за пределами Барселоны.",
      titles: [
        "Видео поездки MotoBarna по Каталонии",
        "Мотопоездка MotoBarna вокруг Каталонии",
      ],
    },
    newHere: {
      title: "Новеньким не нужно быть быстрыми.",
      body:
        "Нужны дорожный мотоцикл, экипировка, любопытство и уважение к группе. Сначала просто посмотреть — абсолютно нормально.",
      items: [
        "Любые марки и дорожные мотоциклы приветствуются",
        "Публичного адреса нет; точка встречи в Telegram",
        "Перед съемкой людей или номеров лучше спросить",
        "Едем в своих пределах и без эго",
      ],
    },
    finalCta: {
      title: "Центр всего — Telegram.",
      body:
        "Схемы трасс, точка встречи, планы воскресенья, идеи поездок и последние изменения появляются в группе.",
      points: [
        "Точка встречи",
        "Планы воскресенья",
        "Маршруты поездок",
        "Общий чат",
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Коротко перед вступлением.",
      items: [
        {
          question: "Это мотошкола?",
          answer:
            "Нет. MotoBarna — комьюнити, а не платная школа. Опытные участники делятся советами, но каждый тренируется под свою ответственность.",
        },
        {
          question: "Можно новичкам?",
          answer:
            "Да. Можно сначала посмотреть, пообщаться и решить, когда хочется ехать. Главное — контроль, уважение и спокойное развитие.",
        },
        {
          question: "Где находится парковка?",
          answer:
            "Точная точка встречи публикуется в Telegram. Так мы не размещаем адрес широко на публичной странице.",
        },
        {
          question: "Это только медленная езда?",
          answer:
            "Нет. Мотоджимхана — технический спорт на время: конусная трасса, разбор схемы, траектория, чистые ворота и штрафы.",
        },
      ],
    },
  },
};
