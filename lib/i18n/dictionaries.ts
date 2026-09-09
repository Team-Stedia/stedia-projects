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
    badge: "Stedia — Web studio that ships clickable work",
    headlineBefore: "We build web products",
    headlineAccent: "you can try",
    headlineAfter: "before you buy.",
    sub: "Stedia is a small senior team designing and building production-ready websites and dashboards. Every project below ships with a live demo — click through the real thing, then decide.",
    ctaWork: "See selected work",
    ctaContact: "Start a project",
    stats: [
      { value: "12", label: "Working demos on this site" },
      { value: "4", label: "Full product builds" },
      { value: "100%", label: "Clickable, zero mockups" },
    ],
    visualBadge: "Live demo — click to explore",
    visualCaption: "Admin dashboard · one of our concept builds",
  },
  showcase: {
    eyebrow: "Selected Work",
    title: "Work we build, live on this page",
    subtitle: "Every case study ships with a demo you can actually play with — no download, no wait.",
    viewCase: "View case study",
  },
  stack: {
    label: "A modern stack, production-ready from day one",
  },
  selectedWork: {
    eyebrow: "Selected Work",
    title: "Real builds, running live",
    subtitle:
      "Four concept builds that show how we think — open any of them and click around. The full playground lives under Demos.",
    viewAll: "See all work & demos",
  },
  process: {
    eyebrow: "How we work",
    title: "From first call to launch in four steps",
    subtitle: "No black box. You see working software early and often.",
    steps: [
      {
        title: "Discover",
        desc: "A short call to map goals, users and scope. You get a fixed quote — not an open meter.",
      },
      {
        title: "Prototype",
        desc: "A clickable demo of the core flow within days. You react to software, not descriptions.",
      },
      {
        title: "Build",
        desc: "Weekly drops to a staging link you can click. Feedback lands in the very next drop.",
      },
      {
        title: "Launch & support",
        desc: "Deploy, analytics and handover docs — then we stick around for fixes and iteration.",
      },
    ],
  },
  principles: {
    eyebrow: "Why Stedia",
    title: "No slideware. Ever.",
    subtitle: "Three rules behind everything we ship.",
    items: [
      {
        title: "Demo first",
        desc: "If it can't be clicked, it doesn't count. Every proposal comes with something already running.",
      },
      {
        title: "Senior only",
        desc: "The people you talk to are the people who build. No handoffs, no juniors learning on your budget.",
      },
      {
        title: "Boring tech, exciting results",
        desc: "Next.js, NestJS and TypeORM — proven tools, so your product is fast, secure and maintainable.",
      },
    ],
  },
  about: {
    eyebrow: "About Stedia",
    title: "A small team with a large bias for doing",
    subtitle:
      "Stedia is a compact, senior studio. We believe the best way to judge a product is to touch it — so we never ship a screen deck when a working demo will do.",
    cardTitle: "Product-minded engineers",
    cardBody:
      "We sit between design and engineering — obsessing over performance, clean architecture and the small interactions that make software feel alive.",
    imageAlt: "Stedia team collaborating around a table",
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
        description:
          "Marketing sites and web apps your customers can use on day one — fast, accessible and easy to extend.",
      },
      {
        title: "UI Engineering",
        description:
          "Design systems and component libraries that keep every screen consistent as your product grows.",
      },
      {
        title: "Interactive Prototypes",
        description:
          "A clickable slice of your product in days, so stakeholders approve reality — not slideware.",
      },
      {
        title: "Product Launch",
        description:
          "From repo setup to CI/CD, monitoring and analytics — handed over with docs, not mysteries.",
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
    note: "We reply within one business day.",
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
    badge: "Stedia — สตูดิโอเว็บที่ส่งงานให้ลองกดก่อน",
    headlineBefore: "เราสร้างเว็บโปรดักต์",
    headlineAccent: "ที่ลองกดได้",
    headlineAfter: "ก่อนตัดสินใจจ้าง",
    sub: "Stedia คือทีมรุ่นพี่ขนาดเล็ก ออกแบบและสร้างเว็บไซต์กับแดชบอร์ดระดับ production ทุกโปรเจกต์ด้านล่างมีเดโม่สด — กดใช้งานของจริงก่อน แล้วค่อยตัดสินใจ",
    ctaWork: "ดูผลงานเด่น",
    ctaContact: "เริ่มโปรเจกต์",
    stats: [
      { value: "12", label: "เดโม่ใช้งานได้บนเว็บนี้" },
      { value: "4", label: "งานระดับโปรดักต์เต็มรูปแบบ" },
      { value: "100%", label: "กดได้จริง ไม่มี mockup" },
    ],
    visualBadge: "เดโม่สด — กดสำรวจได้",
    visualCaption: "Admin dashboard · หนึ่งใน concept build ของเรา",
  },
  showcase: {
    eyebrow: "ผลงานคัดสรร",
    title: "ผลงานที่เราสร้าง อยู่บนหน้านี้แบบเล่นได้จริง",
    subtitle: "ทุก case study มาพร้อมเดโม่ที่กดเล่นได้ทันที — ไม่ต้องดาวน์โหลด ไม่ต้องรอ",
    viewCase: "ดู case study",
  },
  stack: {
    label: "สแต็กยุคใหม่ พร้อม production ตั้งแต่วันแรก",
  },
  selectedWork: {
    eyebrow: "ผลงานเด่น",
    title: "งานจริงที่รันสดอยู่",
    subtitle:
      "4 concept build ที่โชว์วิธีคิดของเรา — เปิดชิ้นไหนก็กดเล่นได้ สนามเด็กเล่นทั้งหมดอยู่ในหน้าเดโม่",
    viewAll: "ดูผลงานและเดโม่ทั้งหมด",
  },
  process: {
    eyebrow: "วิธีทำงานของเรา",
    title: "จากสายแรกถึงวันปล่อยงานใน 4 ขั้น",
    subtitle: "ไม่มีกล่องดำ เฮียเห็นของที่ใช้งานได้ตั้งแต่เนิ่น ๆ และเห็นบ่อย",
    steps: [
      {
        title: "คุยให้ชัด",
        desc: "โทรสั้น ๆ เพื่อจับเป้าหมาย ผู้ใช้ และขอบเขต เฮียได้ใบเสนอราคาชัดเจน ไม่ใช่มิเตอร์เปิด",
      },
      {
        title: "ทำเดโม่ก่อน",
        desc: "เดโม่กดได้ของ flow หลักภายในไม่กี่วัน เฮียติของจริง ไม่ใช่คำอธิบาย",
      },
      {
        title: "สร้างจริง",
        desc: "ส่งงานให้กดดูทุกสัปดาห์บน staging link ฟีดแบ็กเข้ารอบถัดไปทันที",
      },
      {
        title: "ปล่อยงาน + ดูแล",
        desc: "Deploy, analytics และเอกสารส่งมอบ — แล้วเราอยู่ต่อช่วยแก้และต่อยอด",
      },
    ],
  },
  principles: {
    eyebrow: "ทำไมต้อง Stedia",
    title: "ไม่มีสไลด์ขายฝัน",
    subtitle: "3 กฎที่อยู่เบื้องหลังทุกงานที่เราส่ง",
    items: [
      {
        title: "เดโม่ต้องมาก่อน",
        desc: "ถ้ากดไม่ได้ถือว่าไม่นับ ทุกข้อเสนอมีของที่รันได้ติดมาด้วย",
      },
      {
        title: "รุ่นพี่ลงมือเอง",
        desc: "คนที่คุยกับเฮียคือคนที่สร้างงาน ไม่มีส่งต่อ ไม่มีเด็กฝึกงานมาลองของด้วยงบเฮีย",
      },
      {
        title: "เทคโนโลยีน่าเบื่อ ผลลัพธ์น่าตื่นเต้น",
        desc: "Next.js, NestJS และ TypeORM — ของที่พิสูจน์แล้ว เว็บเฮียเลยเร็ว ปลอดภัย ดูแลง่าย",
      },
    ],
  },
  about: {
    eyebrow: "เกี่ยวกับ Stedia",
    title: "ทีมเล็ก ๆ ที่ชอบลงมือทำจริง",
    subtitle:
      "Stedia คือสตูดิโอขนาดกะทัดรัดที่เต็มไปด้วยรุ่นพี่ ลองของจริงดีกว่าดูสไลด์เสมอ — เราเลยไม่ส่งแค่หน้าจอดีไซน์ แต่ส่งเดโม่ที่ใช้งานได้จริง",
    cardTitle: "วิศวกรหัวโปรดักต์",
    cardBody:
      "เรายืนอยู่ระหว่างดีไซน์กับวิศวกรรม — ให้ความสำคัญกับประสิทธิภาพ โค้ดที่สะอาด และอินเทอร์แอคชันเล็ก ๆ ที่ทำให้ซอฟต์แวร์มีชีวิตชีวา",
    imageAlt: "ทีม Stedia กำลังร่วมมือกันรอบโต๊ะทำงาน",
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
        description:
          "เว็บขายของและเว็บแอปที่ลูกค้าใช้ได้ตั้งแต่วันแรก — เร็ว เข้าถึงง่าย ต่อยอดสะดวก",
      },
      {
        title: "วิศวกรรม UI",
        description:
          "Design system และ component library ที่ทำให้ทุกจอคงเส้นคงวาแม้โปรดักต์จะโต",
      },
      {
        title: "Prototype แบบอินเทอร์แอคทีฟ",
        description:
          "ชิ้นส่วนโปรดักต์ที่กดได้ภายในไม่กี่วัน ให้ผู้บริหารอนุมัติของจริง — ไม่ใช่สไลด์",
      },
      {
        title: "ปล่อยโปรดักต์",
        description:
          "ตั้งแต่ตั้ง repo ไปจนถึง CI/CD, monitoring และ analytics — ส่งมอบพร้อมเอกสาร ไม่ใช่ปริศนา",
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
    note: "เราตอบกลับภายใน 1 วันทำการ",
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