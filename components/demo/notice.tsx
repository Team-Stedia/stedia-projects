export function Notice({ message }: { message: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 px-6 text-center text-sm text-muted-foreground">
      {message}
    </div>
  )
}