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
  display: 'swap'
})
