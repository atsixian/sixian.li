'use client'
import { FloatingMenu } from '@/components/floating-menu'
import { Link, linkStyle } from '@/components/link'
import { useHeadingObserver } from '@/hooks/use-headings'
import { useMediaQuery } from '@/hooks/use-media-query'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ArrowUpLeft, List } from 'lucide-react'
import NextLink from 'next/link'
import { navItemVariants } from '@/components/common'

export type Heading = { text: string; level: number }

export type TocProps = {
  headings: Heading[]
}

export function ToC({ headings }: TocProps) {
  const { ids, activeId } = useHeadingObserver()

  const isMdScreen = useMediaQuery('(min-width: 768px)')

  return isMdScreen ? (
    <nav className="sticky overflow-y-scroll p-6 md:top-32 md:w-32 lg:-ml-56 lg:w-56">
      <Link href="/writing" className="group mb-4 flex items-center gap-1">
        <ArrowUpLeft
          size={16}
          strokeWidth={1.5}
          className="transition-transform group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]"
        />
        Writing
      </Link>
      <ul className="group hidden text-zinc-500 lg:block">
        {headings.map((h, idx) => (
          <li key={idx} style={{ paddingInlineStart: `${h.level - 2}em` }}>
            {/* TODO: Use Link when URL hash handling is fixed 
            https://github.com/vercel/next.js/issues/44295#issuecomment-1457042542
        */}
            <a
              href={`#${ids[idx]}`}
              className={clsx(
                linkStyle,
                activeId === ids[idx] &&
                  'text-fg-color shadow-current drop-shadow'
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <FloatingToC headings={headings.filter(h => h.level === 2)} />
  )
}

export function FloatingToC({ headings }: TocProps) {
  const h2Headings = headings.filter(h => h.level === 2)
  const { ids, activeId } = useHeadingObserver('article > h2')

  const tocIcon = (
    <motion.div
      variants={{
        open: { scale: 1.2 },
        closed: { scale: 1.0 },
      }}
    >
      <List strokeWidth={1.5} size={24} />
    </motion.div>
  )
  return (
    <FloatingMenu icon={tocIcon}>
      {h2Headings.map((h, idx) => (
        <motion.li key={ids[idx]} variants={navItemVariants}>
          <a
            href={`#${ids[idx]}`}
            className={clsx(
              'text-xl tracking-tight',
              activeId === ids[idx] ? 'shadow-current drop-shadow' : 'opacity-70'
            )}
          >
            {h.text}
          </a>
        </motion.li>
      ))}
      <motion.li variants={navItemVariants}>
        <NextLink className="flex items-center text-lg" href="/writing">
          <ArrowUpLeft size={22} strokeWidth={1.5} />
          Writing
        </NextLink>
      </motion.li>
    </FloatingMenu>
  )
}
