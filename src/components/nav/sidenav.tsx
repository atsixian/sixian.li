import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, SOCIAL_LINKS } from './nav'
import NextLink from 'next/link'
import { Link } from '../link'
import { Moon } from '../moon'

export function SideNav() {
  const currentRoute = usePathname()

  return (
    <nav className="top-32 -ml-20 hidden w-20 md:sticky md:block">
      <ul className="flex flex-col justify-between gap-4">
        <li className="flex">
          <NextLink href="/" aria-label="home" className="m-auto">
            <Moon />
          </NextLink>
        </li>
        <div className="group flex flex-col items-center gap-3">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                className={clsx(
                  currentRoute !== '/' &&
                    (currentRoute?.startsWith(link.href)
                      ? 'shadow-current drop-shadow'
                      : '[&:not(:hover)]:opacity-50')
                )}
              >
                {link.node}
              </Link>
            </li>
          ))}
        </div>
        <div className="group flex flex-col items-center gap-2">
          {SOCIAL_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                target="_blank"
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
              >
                {link.node}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  )
}
