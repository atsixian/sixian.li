import type { Variants } from 'framer-motion'

export const navItemVariants: Variants = {
  open: {
    x: '0',
    opacity: '100%',
    pointerEvents: 'auto',
    'aria-hidden': false,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
  closed: {
    x: '30vw',
    opacity: '0%',
    pointerEvents: 'none',
    'aria-hidden': true,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
}
