'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ArrowUpLeft, List } from 'lucide-react'
import NextLink from 'next/link'
import { useHeadings } from '@/hooks/use-headings'
import { Link, linkStyle } from '@/components/link'
import { FloatingMenu } from '@/components/floating-menu'
import { navItemVariants } from '@/components/common'

export interface Heading {
  text: string
  level: number
}

export interface TocProps {
  headings: Heading[]
}

export function ToC({ headings }: TocProps) {
  const { ids, activeId } = useHeadings()

  return (
    <>
      <nav className="sticky hidden overflow-y-scroll p-6 md:top-32 md:block md:w-32 md:overflow-hidden lg:-ml-52 lg:w-52">
        <Link href="/writing" className="group mb-12 flex items-center gap-1">
          <ArrowUpLeft
            size={16}
            strokeWidth={1.5}
            className="shrink-0 transition-transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
          />
          Writing
        </Link>
        <ul className="group hidden text-sm text-fg-secondary-color lg:flex lg:flex-col lg:gap-2">
          {headings.map((h, idx) => {
            const id = ids[idx]
            return (
              <li
                key={h.text}
                style={{ paddingInlineStart: `${h.level - 2}em` }}
              >
                {/* TODO: Use Link when URL hash handling is fixed 
                https://github.com/vercel/next.js/issues/44295#issuecomment-1457042542
                */}
                <a
                  href={`#${id}`}
                  className={clsx(
                    linkStyle,
                    activeId === id &&
                      'text-fg-color shadow-current drop-shadow'
                  )}
                >
                  {h.text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <FloatingToC headings={headings.filter(h => h.level === 2)} />
    </>
  )
}

export function FloatingToC({ headings }: TocProps) {
  const h2Headings = headings.filter(h => h.level === 2)
  const { ids, activeId } = useHeadings('article > h2')

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
              activeId === ids[idx]
                ? 'shadow-current drop-shadow'
                : 'opacity-70'
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
