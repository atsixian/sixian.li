'use client'
import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FloatingMenu } from '../floating-menu'
import { NAV_LINKS, SOCIAL_LINKS } from './nav'
import NextLink from 'next/link'
import { Moon } from '@/components/moon'

const navIcon = (
  <motion.div
    variants={{
      open: { transition: { staggerChildren: 0 } },
      closed: { transition: { staggerChildren: 0 } },
    }}
  >
    <svg
      viewBox="0 0 20 20"
      strokeLinecap="round"
      className="h-5 w-5 stroke-zinc-100 stroke-[1.5] dark:stroke-zinc-800"
    >
      <motion.path
        d="M 2 2.5 L 20 2.5"
        variants={{
          open: { d: 'M 3 16.5 L 17 2.5' },
          closed: { d: 'M 2 2.5 L 20 2.5' },
        }}
      />
      <motion.path
        d="M 2 9.423 L 20 9.423"
        variants={{
          open: { opacity: '0' },
          closed: { opacity: '1' },
        }}
      />
      <motion.path
        d="M 2 16.346 L 20 16.346"
        variants={{
          open: { d: 'M 3 2.5 L 17 16.346' },
          closed: { d: 'M 2 16.346 L 20 16.346' },
        }}
      />
    </svg>
  </motion.div>
)

function NavItems() {
  const navItemVariants: Variants = {
    open: {
      x: '0',
      opacity: '100%',
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
    closed: {
      x: '30vw',
      opacity: '0%',
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
  }

  const currentRoute = usePathname()

  return (
    <>
      <motion.li className="flex" variants={navItemVariants}>
        <NextLink href="/" aria-label="home" className="m-auto">
          <Moon />
        </NextLink>
      </motion.li>
      {NAV_LINKS.map(link => (
        <motion.li key={link.href} variants={navItemVariants}>
          <NextLink
            href={link.href}
            className={clsx(
              'text-2xl tracking-tight',
              currentRoute !== '/' &&
                (currentRoute?.startsWith(link.href)
                  ? 'shadow-current drop-shadow'
                  : 'opacity-50')
            )}
          >
            {link.node}
          </NextLink>
        </motion.li>
      ))}
      <motion.div variants={navItemVariants} className="mt-3 flex gap-2">
        {SOCIAL_LINKS.map(link => (
          <li key={link.href}>
            <NextLink href={link.href} target="_blank">
              {link.node}
            </NextLink>
          </li>
        ))}
      </motion.div>
    </>
  )
}
export function FloatingNav() {
  return (
    <FloatingMenu icon={navIcon}>
      <NavItems />
    </FloatingMenu>
  )
}
