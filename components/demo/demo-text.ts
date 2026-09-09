import type { Locale } from "@/lib/i18n/dictionaries"

const text = {
  en: {
    pomodoro: {
      focus: "Focus",
      shortBreak: "Short break",
      longBreak: "Long break",
      start: "Start",
      pause: "Pause",
      reset: "Reset",
      session: "Session",
      sessionsUntilLong: "sessions until long break",
      phase: (n: number) => (n === 1 ? "Focus" : n === 2 ? "Short break" : "Long break"),
    },
    stopwatch: {
      start: "Start",
      pause: "Pause",
      reset: "Reset",
      lap: "Lap",
      lapsEmpty: "No laps yet — press Lap during a run.",
      clear: "Clear laps",
    },
    typing: {
      wpm: "WPM",
      accuracy: "Accuracy",
      done: "Done!",
      pressStart: "Press Start, then type what you see.",
      start: "Start",
      reset: "Reset",
    },
    memory: {
      moves: "Moves",
      matched: "Matched",
      restart: "Restart",
      win: (moves: number) => `You solved it in ${moves} moves!`,
    },
    slot: {
      spin: "Spin",
      score: "Score",
    },
    colorMixer: {
      title: "RGB Mixer",
      r: "R",
      g: "G",
      b: "B",
      hex: "Hex",
    },
  },
  th: {
    pomodoro: {
      focus: "โฟกัส",
      shortBreak: "พักสั้น",
      longBreak: "พักยาว",
      start: "เริ่ม",
      pause: "หยุด",
      reset: "รีเซ็ต",
      session: "เซสชัน",
      sessionsUntilLong: "เซสชันจะถึงพักยาว",
      phase: (n: number) =>
        n === 1 ? "โฟกัส" : n === 2 ? "พักสั้น" : "พักยาว",
    },
    stopwatch: {
      start: "เริ่ม",
      pause: "หยุด",
      reset: "รีเซ็ต",
      lap: "แลป",
      lapsEmpty: "ยังไม่มีแลป — กดแลประหว่างวิ่งครับ",
      clear: "ล้างแลป",
    },
    typing: {
      wpm: "คำ/นาที",
      accuracy: "ความแม่นยำ",
      done: "เสร็จแล้ว!",
      pressStart: "กดเริ่ม แล้วพิมพ์ตามที่เห็นครับ",
      start: "เริ่ม",
      reset: "รีเซ็ต",
    },
    memory: {
      moves: "การเปิด",
      matched: "ที่จับคู่ได้",
      restart: "เริ่มใหม่",
      win: (moves: number) => `เก่งมาก! เปิดทั้งหมด ${moves} ครั้งก็ชนะแล้ว!`,
    },
    slot: {
      spin: "ปั่น",
      score: "คะแนน",
    },
    colorMixer: {
      title: "มิกเซอร์สี RGB",
      r: "R",
      g: "G",
      b: "B",
      hex: "เลขสี",
    },
  },
} as const

export function demoText(locale: Locale) {
  return text[locale]
}

export type DemoText = {
  [K in Locale]: (typeof text)[K]
}