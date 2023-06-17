'use client'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Github, Rss, Twitter, Youtube } from 'lucide-react'
import { Link } from '../link'
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
    node: <Rss />,
    href: '/feed.xml',
    ariaLabel: 'RSS',
  },
]

export function Nav() {
  const isMdScreen = useMediaQuery('(min-width: 768px)')
  return isMdScreen ? <SideNav /> : <FloatingNav />
}
