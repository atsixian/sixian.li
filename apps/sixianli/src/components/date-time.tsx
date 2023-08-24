import clsx from "clsx";

export function DateTime({ date, className }: { date: string, className?: string }) {
  return (
    <time dateTime={date} className={clsx("text-sm text-fg-secondary-color", className)}>
      {new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  )
}
