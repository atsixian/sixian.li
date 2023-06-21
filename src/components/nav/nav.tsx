'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Github, Mail, Rss, Twitter, Youtube } from 'lucide-react'
import { Link } from '../link'
import { MyEmail } from '../my-email'
import { FloatingNav } from './floating-nav'
import { SideNav } from './sidenav'

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
    node: (
      <MyEmail>
        <Mail />
      </MyEmail>
    ),
    href: '',
    ariaLabel: 'My Email',
  },
  {
    node: <Rss />,
    href: '/feed.xml',
    ariaLabel: 'RSS',
  },
]

export function Nav() {
  return (
    <>
      <SideNav />
      <FloatingNav />
    </>
  )
}
