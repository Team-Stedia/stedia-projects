"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Todo = { id: number; text: string; done: boolean }

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState("")

  const add = (e: React.FormEvent) => {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    setTodos((current) => [...current, { id: Date.now(), text: value, done: false }])
    setText("")
  }

  const toggle = (id: number) => {
    setTodos((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    )
  }

  const remove = (id: number) => {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }

  const clear = () => setTodos([])

  const remaining = todos.filter((todo) => !todo.done).length

  return (
    <div className="mx-auto w-full max-w-sm rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm">
          <span className="font-semibold">{remaining}</span> task{remaining === 1 ? "" : "s"} left
        </p>
        {todos.length > 0 && (
          <button
            type="button"
            onClick={clear}
            className="text-xs font-medium text-destructive hover:underline"
          >
            Clear all
          </button>
        )}
      </div>
      <form onSubmit={add} className="mb-4 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a task..."
          className="h-9 min-w-0 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <button
          type="submit"
          className="h-9 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
        >
          Add
        </button>
      </form>
      <ul className="flex flex-col gap-2">
        {todos.length === 0 && (
          <li className="rounded-lg border border-dashed border-border py-6 text-center text-sm text-muted-foreground">
            No tasks yet — add one above
          </li>
        )}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={cn(
              "group flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2",
              todo.done && "opacity-60"
            )}
          >
            <button
              type="button"
              aria-label={todo.done ? "Mark as not done" : "Mark as done"}
              onClick={() => toggle(todo.id)}
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                todo.done
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input hover:border-ring"
              )}
            >
              {todo.done ? "✓" : ""}
            </button>
            <span
              className={cn(
                "min-w-0 flex-1 truncate text-sm",
                todo.done && "line-through text-muted-foreground"
              )}
            >
              {todo.text}
            </span>
            <button
              type="button"
              onClick={() => remove(todo.id)}
              className="text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
              aria-label={`Delete ${todo.text}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}