"use client"

import type { ComponentType } from "react"
import { MiniCalculator } from "./mini-calculator"
import { TodoList } from "./todo-list"
import { PomodoroTimer } from "./pomodoro"
import { Stopwatch } from "./stopwatch"
import { TypingSpeed } from "./typing-speed"
import { MemoryFlip } from "./memory-flip"
import { SlotMachine } from "./slot-machine"
import { ColorMixer } from "./color-mixer"
import { Notice } from "./notice"

export const demoComponents: Record<string, ComponentType> = {
  "mini-calculator": MiniCalculator,
  "todo-list": TodoList,
  "pomodoro-timer": PomodoroTimer,
  stopwatch: Stopwatch,
  "typing-speed": TypingSpeed,
  "memory-flip": MemoryFlip,
  "slot-machine": SlotMachine,
  "color-mixer": ColorMixer,
}

export type DemoComponentName = keyof typeof demoComponents

export function LiveDemo({ name }: { name?: string }) {
  if (!name) {
    return <Notice message="No live component was registered for this project yet." />
  }
  const Component = demoComponents[name] ?? null
  if (!Component) {
    return <Notice message={`Demo component "${name}" has not been registered yet.`} />
  }
  return <Component />
}