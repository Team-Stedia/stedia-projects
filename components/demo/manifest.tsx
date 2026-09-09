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
import { LandingPage } from "./pages/landing"
import { ShopPage } from "./pages/shop"
import { UserDashboardPage } from "./pages/user-dashboard"
import { AdminDashboardPage } from "./pages/admin-dashboard"
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
  "page-landing": LandingPage,
  "page-shop": ShopPage,
  "page-user-dashboard": UserDashboardPage,
  "page-admin-dashboard": AdminDashboardPage,
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