'use client'
import clsx from 'clsx'
import { Github, Twitter, Youtube } from 'lucide-react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon } from '../app/moon'

type Link = {
  node: React.ReactNode
  href: string
  ariaLabel?: string
}

const NAV_LINKS: Link[] = [
  { node: 'Writing', href: '/writing' },
  { node: 'Talks', href: '/talks' },
  { node: 'Visuals', href: '/visuals' },
]

const SOCIAL_LINKS: Link[] = [
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
]

export function Sidebar() {
  const currentRoute = usePathname()

  const linkStyle =
    'transition-all duration-300 hover:text-fg-hover-color hover:duration-200 group-hover:[&:not(:hover)]:opacity-50'
  return (
    <nav className="z-20 w-full max-w-[60ch] p-6 md:z-auto md:w-20 md:p-0">
      <ul className="flex flex-row justify-between gap-2 md:flex-col md:justify-between md:gap-4">
        <li className="flex">
          <NextLink href="/" aria-label="home" className="m-auto">
            <Moon />
          </NextLink>
        </li>
        <div className="group mr-auto flex flex-row items-center gap-3 md:m-0 md:flex-col">
          {NAV_LINKS.map(link => (
            <li
              key={link.href}
              className={clsx(
                linkStyle,
                currentRoute !== '/' &&
                  !currentRoute?.startsWith(link.href) &&
                  '[&:not(:hover)]:opacity-50'
              )}
            >
              <NextLink
                href={link.href}
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
              >
                {link.node}
              </NextLink>
            </li>
          ))}
        </div>
        <div className="group flex items-center gap-2 md:flex-col">
          {SOCIAL_LINKS.map(link => (
            <li key={link.href} className={linkStyle}>
              <NextLink
                href={link.href}
                target="_blank"
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
              >
                {link.node}
              </NextLink>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  )
}
