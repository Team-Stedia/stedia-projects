export type DemoCategory = "tool" | "game" | "ui"

export type Project = {
  slug: string
  category: DemoCategory
  tags: Record<"en" | "th", string[]>
  thumbnail: string
  title: Record<"en" | "th", string>
  description: Record<"en" | "th", string>
  demoType: "iframe" | "component"
  demoUrl?: string
  demoComponent?: string
}

export const demoCategories: DemoCategory[] = ["tool", "game", "ui"]

export const projects: Project[] = [
  {
    slug: "mini-calculator",
    category: "tool",
    tags: {
      en: ["Interactive Demo", "UI", "React"],
      th: ["เดโม่แบบเล่นได้", "UI", "React"],
    },
    thumbnail: "gradient:calc",
    title: { en: "Mini Calculator", th: "เครื่องคิดเลขจิ๋ว" },
    description: {
      en: "A tiny calculator that runs fully in the browser. Real layout and keystroke handling — a working slice of a product.",
      th: "เครื่องคิดเลขเล็ก ๆ ที่รันบนเบราว์เซอร์เต็มรูปแบบ ทั้งเลย์เอาต์และการกดปุ่ม — ชิ้นส่วนผลงานที่ใช้งานได้จริง",
    },
    demoType: "component",
    demoComponent: "mini-calculator",
    demoUrl: "/demo/mini-calculator",
  },
  {
    slug: "todo-list",
    category: "tool",
    tags: {
      en: ["Interactive Demo", "State", "React"],
      th: ["เดโม่แบบเล่นได้", "State", "React"],
    },
    thumbnail: "gradient:todo",
    title: { en: "Interactive Todo List", th: "รายการสิ่งที่ต้องทำ" },
    description: {
      en: "A live todo list demonstrating state management and smooth UI updates — the same patterns we ship into production dashboards.",
      th: "รายการสิ่งที่ต้องทำแบบสด ๆ สาธิตการจัดการ state และ UI ที่ลื่นไหล — แพตเทิร์นเดียวกับที่เราใช้ใน dashboard จริง",
    },
    demoType: "component",
    demoComponent: "todo-list",
    demoUrl: "/demo/todo-list",
  },
  {
    slug: "pomodoro-timer",
    category: "tool",
    tags: {
      en: ["Timer", "Focus", "Productivity"],
      th: ["ตัวจับเวลา", "โฟกัส", "ประสิทธิภาพ"],
    },
    thumbnail: "gradient:pomodoro",
    title: { en: "Pomodoro Timer", th: "ตัวจับเวลาพอมโมโดโร่" },
    description: {
      en: "Focus and rest in cycles. Start, pause and reset with a live countdown that respects your session.",
      th: "ช่วงโฟกัสและพักเป็นรอบ เริ่ม หยุด และรีเซ็ตได้ พร้อมนับถอยหลังสด ๆ ตามเซสชันของเฮีย",
    },
    demoType: "component",
    demoComponent: "pomodoro-timer",
    demoUrl: "/demo/pomodoro-timer",
  },
  {
    slug: "stopwatch",
    category: "tool",
    tags: {
      en: ["Stopwatch", "Lap", "Timer"],
      th: ["นาฬิกาจับเวลา", "แลป", "Timer"],
    },
    thumbnail: "gradient:stopwatch",
    title: { en: "Stopwatch", th: "นาฬิกาจับเวลา" },
    description: {
      en: "A precise stopwatch with lap recording, built to show off clean state transitions and fast UI updates.",
      th: "นาฬิกาจับเวลาที่แม่นยำพร้อมบันทึกแลป ออกแบบมาเพื่อโชว์การเปลี่ยน state ที่สะอาดและการอัปเดต UI ที่รวดเร็ว",
    },
    demoType: "component",
    demoComponent: "stopwatch",
    demoUrl: "/demo/stopwatch",
  },
  {
    slug: "typing-speed",
    category: "game",
    tags: {
      en: ["Game", "Typing", "Speed"],
      th: ["เกม", "พิมพ์ดีด", "ความเร็ว"],
    },
    thumbnail: "gradient:typing",
    title: { en: "Typing Speed Test", th: "ทดสอบความเร็วพิมพ์" },
    description: {
      en: "Race through a phrase while we measure your WPM and accuracy in real time. A favourite for fun, instant engagement.",
      th: "แข่งพิมพ์ผ่านบทความสั้น ๆ ขณะที่เราวัด WPM และความแม่นยำแบบเรียลไทม์ เกมสนุก ๆ ที่ดึงดูดใจทันที",
    },
    demoType: "component",
    demoComponent: "typing-speed",
    demoUrl: "/demo/typing-speed",
  },
  {
    slug: "memory-flip",
    category: "game",
    tags: {
      en: ["Game", "Memory", "Cards"],
      th: ["เกม", "ความจำ", "การ์ด"],
    },
    thumbnail: "gradient:memory",
    title: { en: "Memory Flip", th: "เกมพลิกการ์ดความจำ" },
    description: {
      en: "Flip cards to find matching pairs. A 4×4 board that tests your memory and shows off springy motion.",
      th: "พลิกการ์ดเพื่อหาคู่ที่ตรงกัน บอร์ด 4×4 ที่ทดสอบความจำและโชว์อนิเมชันที่เด้งได้เป็นธรรมชาติ",
    },
    demoType: "component",
    demoComponent: "memory-flip",
    demoUrl: "/demo/memory-flip",
  },
  {
    slug: "slot-machine",
    category: "game",
    tags: {
      en: ["Game", "Slot", "Luck"],
      th: ["เกม", "สล็อต", "ดวง"],
    },
    thumbnail: "gradient:slot",
    title: { en: "Slot Machine", th: "เครื่องสล็อต" },
    description: {
      en: "A playful three-reel slot with random spins — another proof that interfaces can be genuinely fun to touch.",
      th: "สล็อตสามวงล้อสุดสนุกที่สุ่มผลลัพธ์ทุกครั้ง — อีกหนึ่งข้อพิสูจน์ว่า UI ทำเป็นของสนุกที่อยากแตะได้จริง",
    },
    demoType: "component",
    demoComponent: "slot-machine",
    demoUrl: "/demo/slot-machine",
  },
  {
    slug: "color-mixer",
    category: "ui",
    tags: {
      en: ["UI", "Color", "Slider"],
      th: ["UI", "สี", "Slider"],
    },
    thumbnail: "gradient:color",
    title: { en: "RGB Color Mixer", th: "มิกเซอร์สี RGB" },
    description: {
      en: "Drag the sliders and watch the colour change instantly — a crisp example of reactive UI and live preview.",
      th: "ลากสไลเดอร์แล้วดูสีเปลี่ยนทันที — ตัวอย่างที่ชัดเจนของ UI ยืดหยุ่นและพรีวิวสด",
    },
    demoType: "component",
    demoComponent: "color-mixer",
    demoUrl: "/demo/color-mixer",
  },
]