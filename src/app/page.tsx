import * as React from 'react'
import { Github, Twitter, Youtube } from 'lucide-react'
import NextLink from 'next/link'
import Me from './me.mdx'
import { Moon } from './moon'

type NavLink = {
  node: React.ReactNode
  href: string
}

const NAV_LINKS: NavLink[] = [
  { node: '写作', href: '/writing' },
  { node: '演讲', href: '/talk' },
  { node: '视觉', href: '/visuals' },
  { node: <Twitter />, href: '#' },
  { node: <Youtube />, href: '#' },
  { node: <Github />, href: '#' },
]

function Sidebar() {
  return (
    <nav className="h-full w-full max-w-[58ch] p-6 md:w-auto md:p-0">
      <ul className="flex flex-row items-center gap-3 text-zinc-700 md:flex-col">
        <li>
          <NextLink href="/">
            <Moon />
          </NextLink>
        </li>
        {NAV_LINKS.map(link => (
          <li
            key={link.href}
            className="transition-colors duration-300 hover:text-zinc-900 hover:duration-200"
          >
            <NextLink href={link.href}>{link.node}</NextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function MainContent() {
  return (
    <div className="max-w-[58ch] px-6">
      <article className="prose prose-zinc prose-h1:mb-5">
        <Me />
      </article>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex max-h-fit flex-col items-center justify-start md:flex-row md:items-start md:justify-center md:gap-6 md:pt-32">
      <Sidebar />
      <MainContent />
    </div>
  )
}
