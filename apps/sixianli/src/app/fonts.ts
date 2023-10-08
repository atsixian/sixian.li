// import { Lato } from 'next/font/google'
import localFont from 'next/font/local'

export const sentient = localFont({
  src: './sentient-var-italic.woff2',
  variable: '--font-sentient',
  display: 'swap',
  style: 'italic'
})

export const lato = localFont({
  src: './lato-regular.ttf',
  variable: '--font-lato',
  display: 'swap',
  weight: '400',
})

// export const lato = Lato({
//   subsets: ['latin'],
//   style: 'normal',
//   display: 'swap',
//   variable: '--font-lato',
//   weight: ['100', '300', '400', '700']
// })
