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
    <nav className="z-20 hidden w-full p-6 md:sticky md:top-32 md:-ml-20 md:block md:w-20 md:p-0">
      <ul className="flex flex-row justify-between gap-2 md:flex-col md:justify-between md:gap-4">
        <li className="flex">
          <NextLink href="/" aria-label="home" className="m-auto">
            <Moon />
          </NextLink>
        </li>
        <div className="group mr-auto flex flex-row items-center gap-3 text-sm md:m-0 md:flex-col md:text-base">
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
        <div className="group flex items-center gap-2 md:flex-col">
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
