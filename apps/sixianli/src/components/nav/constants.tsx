import { Github, Mail, Rss, Twitter, Youtube } from 'lucide-react'
import { MyEmail } from '../my-email'

interface Link {
  node: React.ReactNode
  href: string
  ariaLabel?: string
}

export const NAV_LINKS: Link[] = [
  { node: 'Writing', href: '/writing' },
  { node: 'Talks', href: '/talks' },
  { node: 'Craft', href: '/craft' },
]

export const SOCIAL_LINKS: Link[] = [
  {
    node: <Twitter strokeWidth={1.2} />,
    href: 'https://twitter.com/noworkforsixian',
    ariaLabel: 'My Twitter',
  },
  {
    node: <Youtube strokeWidth={1.2} />,
    href: 'https://www.youtube.com/channel/UC5md_sIlSGdcD_Zbsk9rKEA',
    ariaLabel: 'My YouTube channel',
  },
  {
    node: <Github strokeWidth={1.2} />,
    href: 'https://github.com/atsixian/sixian.li',
    ariaLabel: 'GitHub repo for this site',
  },
  {
    node: (
      <MyEmail>
        <Mail strokeWidth={1.2} />
      </MyEmail>
    ),
    href: '',
    ariaLabel: 'My Email',
  },
  {
    node: <Rss strokeWidth={1.2} />,
    href: '/feed.xml',
    ariaLabel: 'RSS',
  },
]
