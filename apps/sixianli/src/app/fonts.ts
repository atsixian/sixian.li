import { Lato } from 'next/font/google'
import localFont from 'next/font/local'

export const sentient = localFont({
  src: './sentient-var-italic.woff2',
  variable: '--font-sentient',
  display: 'swap',
  style: 'italic'
})

export const lato = Lato({
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  variable: '--font-lato',
  weight: ['400', '700']
})
