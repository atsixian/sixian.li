import clsx from 'clsx'
import NextLink from 'next/link'

export const linkStyle =
  'transition-all duration-300 hover:drop-shadow hover:shadow-current hover:text-fg-hover-color hover:duration-200 group-hover:[&:not(:hover)]:opacity-50'

export function Link({
  className,
  ...props
}: React.ComponentProps<typeof NextLink>) {
  return <NextLink className={clsx(linkStyle, className)} {...props} />
}
