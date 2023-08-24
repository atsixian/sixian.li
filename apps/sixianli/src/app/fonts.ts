import { Inter, Noto_Serif_SC, Noto_Sans_SC } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const noto_serif_sc = Noto_Serif_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-sc',
  weight: ['400', '700'],
})

export const noto_sans_sc = Noto_Sans_SC({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
  weight: ['400', '700'],
})

