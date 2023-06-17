'use client'
import clsx from 'clsx'
import { Github, Rss, Twitter, Youtube } from 'lucide-react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon } from '../app/moon'
import { Link } from './link'

type Link = {
  node: React.ReactNode
  href: string
  ariaLabel?: string
}

export const NAV_LINKS: Link[] = [
  { node: 'Writing', href: '/writing' },
  { node: 'Talks', href: '/talks' },
  { node: 'Visuals', href: '/visuals' },
]

export const SOCIAL_LINKS: Link[] = [
  {
    node: <Twitter />,
    href: 'https://twitter.com/noworkforsixian',
    ariaLabel: 'My Twitter',
  },
  {
    node: <Youtube />,
    href: 'https://www.youtube.com/channel/UC5md_sIlSGdcD_Zbsk9rKEA',
    ariaLabel: 'My YouTube channel',
  },
  {
    node: <Github />,
    href: 'https://github.com/Deerhound579/sixian.li',
    ariaLabel: 'GitHub repo for this site',
  },
  {
    node: <Rss />,
    href: '/feed.xml',
    ariaLabel: 'RSS',
  },
]

export function Sidebar() {
  const currentRoute = usePathname()

  return (
    <nav className="sticky top-32 -ml-20 hidden w-20 md:block">
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
