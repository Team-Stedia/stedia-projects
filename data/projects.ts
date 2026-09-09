export type Project = {
  slug: string
  title: string
  tags: string[]
  thumbnail: string
  description: string
  demoType: "iframe" | "component"
  demoUrl?: string
  demoComponent?: string
}

export const projects: Project[] = [
  {
    slug: "mini-calculator",
    title: "Mini Calculator",
    tags: ["Interactive Demo", "UI", "React"],
    thumbnail: "gradient:calc",
    description:
      "A tiny calculator that runs fully in the browser. We used it to prove that interactive demos can live directly inside a case study — everything from layout to keystroke handling is a real, working product slice.",
    demoType: "component",
    demoComponent: "mini-calculator",
    demoUrl: "/demo/mini-calculator",
  },
  {
    slug: "todo-list",
    title: "Interactive Todo List",
    tags: ["Interactive Demo", "State", "React"],
    thumbnail: "gradient:todo",
    description:
      "A live todo list demonstrating state management and smooth UI updates. Add, complete and clear tasks instantly — the same patterns we ship into production dashboards for our clients.",
    demoType: "component",
    demoComponent: "todo-list",
    demoUrl: "/demo/todo-list",
  },
]