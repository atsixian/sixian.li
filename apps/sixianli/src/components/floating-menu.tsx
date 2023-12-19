'use client'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FloatingMenu({
  children,
  icon,
}: {
  children: React.ReactNode
  icon: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isOpen])

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { transition: { staggerChildren: 0.1 } },
        closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
      }}
      onClick={() => {
        setIsOpen(false)
      }}
      className="md:hidden"
    >
      <Toggle isOpen={isOpen} setIsOpen={setIsOpen}>
        {icon}
      </Toggle>
      <BlurBg />

      <Content>{children}</Content>
    </motion.div>
  )
}

interface ToggleProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

function Toggle({ isOpen, setIsOpen, children }: ToggleProps) {
  return (
    <div
      role="presentation"
      className="fixed bottom-7 right-7 z-[99] flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 drop-shadow-md dark:bg-zinc-100"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      <input
        id="menu"
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(prev => !prev)}
        className="hidden appearance-none"
      />
      <label htmlFor="menu" className="text-zinc-100 dark:text-zinc-800">
        {children}
      </label>
    </div>
  )
}

function BlurBg() {
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
  return (
    <motion.div
      className="fixed inset-0 z-[98] h-full w-full bg-bg-color/80 backdrop-blur-md"
      variants={blurBgVariants}
    />
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <nav className="pointer-events-none fixed bottom-20 right-7 z-[99] max-w-[60%] select-none text-end">
      <motion.ul
        className="flex flex-col items-end gap-2"
        variants={{
          open: { transition: { staggerChildren: 0.02 } },
          closed: {
            transition: { staggerDirection: -1, staggerChildren: 0.02 },
          },
        }}
      >
        {children}
      </motion.ul>
    </nav>
  )
}
