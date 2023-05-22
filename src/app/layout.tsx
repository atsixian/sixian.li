import { open_sans, roboto_mono } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Sixian Li',
  description: "Sixian's floating thoughts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${open_sans.variable} ${roboto_mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
