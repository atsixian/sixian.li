'use client'
import { Moon } from '@/app/moon'
import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { NAV_LINKS, SOCIAL_LINKS } from './sidebar'

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

const arrowVariants: Variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
}

const blurBgVariants: Variants = {
  open: {
    clipPath: 'circle(140% at 95% 95%)',
    opacity: '100%',
    transition: {
      opacity: {
        duration: 0.5,
      },
    },
  },
  closed: {
    clipPath: 'circle(0% at 95% 95%)',
    opacity: '0%',
    transition: {
      opacity: {
        duration: 0.5,
      },
    },
  },
}

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <motion.div
      initial={false}
      className="md:hidden"
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { transition: { staggerChildren: 0.1 } },
        closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
      }}
    >
      <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <BlurBg />
      <NavItems />
    </motion.div>
  )
}

function NavButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div className="fixed bottom-4 right-4 z-[99] flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 drop-shadow-md dark:bg-zinc-100">
      <input
        id="menu"
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(prev => !prev)}
        className="hidden appearance-none"
      />
      <motion.label
        htmlFor="menu"
        className="text-zinc-100 dark:text-zinc-800"
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
      </motion.label>
    </div>
  )
}

function BlurBg() {
  return (
    <motion.div
      className="fixed inset-0 z-[98] h-full w-full bg-bg-color/80 backdrop-blur-md"
      variants={blurBgVariants}
    ></motion.div>
  )
}

function NavItems() {
  const currentRoute = usePathname()

  return (
    <nav className="fixed bottom-20 right-7 z-[99]">
      <motion.ul
        className="flex flex-col items-end gap-3"
        variants={{
          open: { transition: { staggerChildren: 0.05 } },
          closed: {
            transition: { staggerDirection: -1, staggerChildren: 0.05 },
          },
        }}
      >
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
                    : '[&:not(:hover)]:opacity-50')
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
      </motion.ul>
    </nav>
  )
}
