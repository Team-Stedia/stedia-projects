export const locales = ["en", "th"] as const

export type Locale = (typeof locales)[number]

export const en = {
  header: {
    work: "Work",
    about: "About",
    services: "Services",
    contact: "Contact",
    demos: "Demos",
    letsTalk: "Let's Talk",
  },
  hero: {
    badge: "Team Stedia — Interactive Studio",
    headlineBefore: "We design & build fast,",
    headlineAccent: "interactive",
    headlineAfter: "experiences.",
    sub: "Stedia is a small team that turns ideas into production-ready web products — with a demo you can actually click before you even talk to us.",
    ctaWork: "See our work",
    ctaContact: "Let's Talk",
    widget: {
      windowLive: "Live",
      windowPaused: "Paused",
      counterTitle: "Real-time interactions",
      counterCta: "Click me +",
      counterHint: (n: number): string =>
        n >= 20 ? "Maxed out — no limits, like us." : "Try it, this page interacts.",
      feedTitle: "Session feed",
      feedSub: "Live stream of clicks",
      footerHint: "Still here? Precisely what our demos feel like.",
    },
  },
  showcase: {
    eyebrow: "Selected Work",
    title: "Work we build, live on this page",
    subtitle: "Every case study ships with a demo you can actually play with — no download, no wait.",
    viewCase: "View case study",
  },
  about: {
    eyebrow: "About Stedia",
    title: "A small team with a large bias for doing",
    subtitle:
      "Stedia is a compact, senior studio. We believe the best way to judge a product is to touch it — so we never ship a screen deck when a working demo will do.",
    cardTitle: "Product-minded engineers",
    cardBody:
      "We sit between design and engineering — obsessing over performance, clean architecture and the small interactions that make software feel alive.",
    stats: [
      { value: "2+", label: "Live case studies" },
      { value: "100%", label: "Interactive demos" },
      { value: "Zero", label: "Fluff" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What we can do for you",
    subtitle:
      "Four ways we can help — each one starts with a conversation and ends with something real.",
    items: [
      {
        title: "Web Development",
        description: "Fast, accessible Next.js applications built with type-safe, maintainable code.",
      },
      {
        title: "UI Engineering",
        description: "Design systems, component libraries and motion that make interfaces feel considered.",
      },
      {
        title: "Interactive Prototypes",
        description:
          "Clickable, production-grade demos that validate ideas before a single line of backend.",
      },
      {
        title: "Product Launch",
        description:
          "From repo setup to CI/CD, monitoring and analytics — we take it across the finish line.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something you can click",
    subtitle:
      "Tell us about your project and we'll reply within a day. Got a vague idea? Even better — that's our favourite starting point.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    message: "Message",
    messagePlaceholder: "What do you want to build?",
    send: "Send message",
    errorText: "Please fill in the highlighted fields.",
    successTitle: "Message received",
    successBody:
      "Thanks for reaching out — we'll get back to you soon. (This form is UI-only for now, no backend attached yet.)",
    successAgain: "Send another",
  },
  footer: {
    rights: "All rights reserved.",
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      github: "GitHub",
    },
  },
  work: {
    eyebrow: "All Work",
    title: "Every project has a live demo",
    subtitle: "Browse our case studies — every one ships with something you can click.",
    all: "All",
    empty: "No projects with this tag yet.",
  },
  caseStudy: {
    back: "Back to work",
    liveDemo: "Live Demo",
    openFull: "Open Full Demo",
  },
  demos: {
    eyebrow: "Demos",
    title: "Interactive demos you can click right here",
    subtitle:
      "Every demo below is running live in this page — play with them, then open one full-screen or read the case study.",
    openFull: "Open full demo",
    viewCase: "Read case study",
    empty: "No demos in this category yet.",
    categoryTool: "Tool",
    categoryGame: "Game",
    categoryUi: "UI",
    shown: "demo",
  },
  demoPage: {
    back: "Back to case study",
    liveBadge: "Live Demo",
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist.",
    home: "Back to home",
  },
}

export const th: typeof en = {
  header: {
    work: "ผลงาน",
    about: "เกี่ยวกับ",
    services: "บริการ",
    contact: "ติดต่อ",
    demos: "เดโม่",
    letsTalk: "คุยกันเลย",
  },
  hero: {
    badge: "Team Stedia — Interactive Studio",
    headlineBefore: "เราออกแบบและสร้าง",
    headlineAccent: "อินเทอร์แอคทีฟ",
    headlineAfter: "ประสบการณ์ที่เร็วและจับต้องได้",
    sub: "Stedia คือทีมเล็ก ๆ ที่เปลี่ยนไอเดียให้เป็นเว็บโปรดักชันพร้อมใช้งาน — พร้อมเดโม่ที่เฮียกดเล่นได้จริงก่อนที่จะมาคุยกับเราเสียอีก",
    ctaWork: "ดูผลงานของเรา",
    ctaContact: "มาคุยกัน",
    widget: {
      windowLive: "สด",
      windowPaused: "หยุดชั่วคราว",
      counterTitle: "การโต้ตอบแบบเรียลไทม์",
      counterCta: "กดฉันสิ +",
      counterHint: (n: number) =>
        n >= 20 ? "เต็มแล้ว — ไม่มีลิมิตแบบเราแหละ" : "ลองกดดู หน้านี้มันโต้ตอบได้จริง",
      feedTitle: "ฟีดเซสชัน",
      feedSub: "สตรีมคลิกสด ๆ",
      footerHint: "ยังอยู่? แน่นอนว่าเดโม่ของเราเป็นแบบนี้เสมอ",
    },
  },
  showcase: {
    eyebrow: "ผลงานคัดสรร",
    title: "ผลงานที่เราสร้าง อยู่บนหน้านี้แบบเล่นได้จริง",
    subtitle: "ทุก case study มาพร้อมเดโม่ที่กดเล่นได้ทันที — ไม่ต้องดาวน์โหลด ไม่ต้องรอ",
    viewCase: "ดู case study",
  },
  about: {
    eyebrow: "เกี่ยวกับ Stedia",
    title: "ทีมเล็ก ๆ ที่ชอบลงมือทำจริง",
    subtitle:
      "Stedia คือสตูดิโอขนาดกะทัดรัดที่เต็มไปด้วยรุ่นพี่ ลองของจริงดีกว่าดูสไลด์เสมอ — เราเลยไม่ส่งแค่หน้าจอดีไซน์ แต่ส่งเดโม่ที่ใช้งานได้จริง",
    cardTitle: "วิศวกรหัวโปรดักต์",
    cardBody:
      "เรายืนอยู่ระหว่างดีไซน์กับวิศวกรรม — ให้ความสำคัญกับประสิทธิภาพ โค้ดที่สะอาด และอินเทอร์แอคชันเล็ก ๆ ที่ทำให้ซอฟต์แวร์มีชีวิตชีวา",
    stats: [
      { value: "2+", label: "Case study ที่เล่นได้จริง" },
      { value: "100%", label: "เดโม่แบบอินเทอร์แอคทีฟ" },
      { value: "Zero", label: "เรื่องน้ำท่วมทุ่ง" },
    ],
  },
  services: {
    eyebrow: "บริการ",
    title: "สิ่งที่เราช่วยเฮียได้",
    subtitle: "4 วิธีที่เราพอช่วยได้ — ทุกเส้นทางเริ่มที่บทสนทนา และจบด้วยของจริง",
    items: [
      {
        title: "พัฒนาเว็บ",
        description: "แอป Next.js ที่เร็ว ใช้งานง่าย ด้วยโค้ดที่ type-safe และดูแลรักษาง่าย",
      },
      {
        title: "วิศวกรรม UI",
        description: "Design system, component library และ motion ที่ทำให้อินเทอร์เฟซดูตั้งใจจริง",
      },
      {
        title: "Prototype แบบอินเทอร์แอคทีฟ",
        description: "เดโม่ที่คลิกได้มาตรฐาน production เพื่อพิสูจน์ไอเดียก่อนจะแตะ backend แม้แต่บรรทัดเดียว",
      },
      {
        title: "ปล่อยโปรดักต์",
        description: "ตั้งแต่ตั้ง repo ไปจนถึง CI/CD, monitoring และ analytics — พาไปถึงฝั่งด้วยกัน",
      },
    ],
  },
  contact: {
    eyebrow: "ติดต่อเรา",
    title: "มาสร้างของที่กดได้จริงด้วยกัน",
    subtitle:
      "เล่าโปรเจกต์ของเฮียมา แล้วเราจะตอบกลับภายใน 1 วัน ไอเดียยังมั่ว ๆ เหรอ? ยิ่งดี — นั่นคือจุดเริ่มต้นที่เราถนัดที่สุด",
    name: "ชื่อ",
    namePlaceholder: "ชื่อของเฮีย",
    email: "อีเมล",
    emailPlaceholder: "you@example.com",
    message: "ข้อความ",
    messagePlaceholder: "อยากสร้างอะไรกัน?",
    send: "ส่งข้อความ",
    errorText: "กรุณากรอกช่องที่ถูกไฮไลต์ให้ครบครับ",
    successTitle: "ได้รับข้อความแล้ว",
    successBody:
      "ขอบคุณที่ติดต่อมา — เราจะตอบกลับเร็ว ๆ นี้ (ฟอร์มนี้ตอนนี้เป็น UI อย่างเดียว ยังไม่ได้ต่อ backend ครับ)",
    successAgain: "ส่งอีกครั้ง",
  },
  footer: {
    rights: "สงวนลิขสิทธิ์ทั้งหมด",
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      github: "GitHub",
    },
  },
  work: {
    eyebrow: "ผลงานทั้งหมด",
    title: "ทุกโปรเจกต์มีเดโม่เล่นได้จริง",
    subtitle: "ไล่ดู case study ของเรา — ทุกชิ้นมีอะไรที่เฮียกดได้จริงติดมาด้วย",
    all: "ทั้งหมด",
    empty: "ยังไม่มีโปรเจกต์ในแท็กนี้ครับ",
  },
  caseStudy: {
    back: "กลับไปหน้าผลงาน",
    liveDemo: "เดโม่สด",
    openFull: "เปิดเดโม่เต็มจอ",
  },
  demos: {
    eyebrow: "เดโม่",
    title: "เดโม่อินเทอร์แอคทีฟ กดเล่นได้ตรงนี้เลย",
    subtitle: "ทุกเดโม่ด้านล่างรันสดอยู่บนหน้านี้ — เล่นดูได้เลย แล้วค่อยเปิดเต็มจอหรืออ่าน case study",
    openFull: "เปิดเดโม่เต็มจอ",
    viewCase: "อ่าน case study",
    empty: "ยังไม่มีเดโม่ในหมวดนี้ครับ",
    categoryTool: "เครื่องมือ",
    categoryGame: "เกม",
    categoryUi: "UI",
    shown: "เดโม่",
  },
  demoPage: {
    back: "กลับไป case study",
    liveBadge: "เดโม่สด",
  },
  notFound: {
    title: "ไม่พบหน้าที่ค้นหา",
    body: "หน้าที่เฮียมองหาไม่มีอยู่จริง",
    home: "กลับหน้าหลัก",
  },
}

export type Dictionary = typeof en

const dictionaries: Record<Locale, Dictionary> = { en, th }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en
}