export type StackCategory = "frontend" | "backend" | "tools"

export type StackItem = {
  /** display name shown under the icon */
  name: string
  /** group the stack is rendered under */
  category: StackCategory
  /**
   * brand icon served from /icons/stacks (Simple Icons, CC0).
   * Omit to fall back to the generic icon in the strip.
   *
   * To support a new stack: drop its svg into public/icons/stacks
   * and append one line to `stacks` below — nothing else changes.
   */
  iconSrc?: string
}

export const stackCategories: StackCategory[] = ["frontend", "backend", "tools"]

export const stacks: StackItem[] = [
  { name: "Next.js", category: "frontend", iconSrc: "/icons/stacks/nextdotjs.svg" },
  { name: "React", category: "frontend", iconSrc: "/icons/stacks/react.svg" },
  { name: "TypeScript", category: "frontend", iconSrc: "/icons/stacks/typescript.svg" },
  { name: "Tailwind CSS", category: "frontend", iconSrc: "/icons/stacks/tailwindcss.svg" },
  { name: "Node.js", category: "backend", iconSrc: "/icons/stacks/nodedotjs.svg" },
  { name: "NestJS", category: "backend", iconSrc: "/icons/stacks/nestjs.svg" },
  { name: "PostgreSQL", category: "backend", iconSrc: "/icons/stacks/postgresql.svg" },
  { name: "TypeORM", category: "backend" },
  { name: "Docker", category: "tools", iconSrc: "/icons/stacks/docker.svg" },
  { name: "Vercel", category: "tools", iconSrc: "/icons/stacks/vercel.svg" },
  { name: "GitHub Actions", category: "tools", iconSrc: "/icons/stacks/githubactions.svg" },
  { name: "Figma", category: "tools", iconSrc: "/icons/stacks/figma.svg" },
]
