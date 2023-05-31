import { Twitter, Youtube, Github } from 'lucide-react'
import NextLink from 'next/link'
import { Moon } from './moon'

type Link = {
  node: React.ReactNode
  href: string
}

const NAV_LINKS: Link[] = [
  { node: '写作', href: '/writing' },
  { node: '演讲', href: '/talk' },
  { node: '视觉', href: '/visuals' },
]

const SOCIAL_LINKS: Link[] = [
  { node: <Twitter />, href: '#' },
  { node: <Youtube />, href: '#' },
  { node: <Github />, href: '#' },
]

export function Sidebar() {
  const linkStyle =
    'transition-all duration-300 hover:text-zinc-900 hover:duration-200 group-hover:[&:not(:hover)]:opacity-30'
  return (
    <nav className="w-full max-w-[58ch] p-6 md:w-auto md:p-0">
      <ul className="flex flex-row justify-between text-zinc-700 md:flex-col md:gap-4">
        <li>
          <NextLink href="/">
            <Moon />
          </NextLink>
        </li>
        <div className="group flex flex-row items-center gap-3 md:flex-col">
          {NAV_LINKS.map(link => (
            <li key={link.href} className={linkStyle}>
              <NextLink href={link.href}>{link.node}</NextLink>
            </li>
          ))}
        </div>
        <div className="group flex items-center gap-2 md:flex-col">
          {SOCIAL_LINKS.map(link => (
            <li key={link.href} className={linkStyle}>
              <NextLink href={link.href}>{link.node}</NextLink>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  )
}
