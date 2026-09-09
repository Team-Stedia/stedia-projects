"use client"

import { MiniCalculator } from "./mini-calculator"
import { TodoList } from "./todo-list"
import { Notice } from "./notice"

export const demoComponents = {
  "mini-calculator": MiniCalculator,
  "todo-list": TodoList,
} as const

export type DemoComponentName = keyof typeof demoComponents

export function LiveDemo({ name }: { name?: string }) {
  if (!name) {
    return <Notice message="No live component was registered for this project yet." />
  }
  const Component = demoComponents[name as DemoComponentName] ?? null
  if (!Component) {
    return <Notice message={`Demo component "${name}" has not been registered yet.`} />
  }
  return <Component />
}