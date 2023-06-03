import './globals.css'
import { Sidebar } from '../components/sidebar'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Sixian Li',
    template: '%s | Sixian Li',
  },
  description: "Sixian's floating thoughts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div
          aria-hidden
          className="pointer-events-none fixed top-0 z-10 h-20 w-full select-none bg-white/50 backdrop-blur gradient-mask-b-0 after:absolute after:inset-0 after:h-full after:w-full after:bg-gradient-to-b after:from-white/80 after:to-transparent after:content-['']"
        />
        <div className="flex h-full flex-col items-center justify-start font-serif md:relative md:flex-row md:items-start md:justify-center md:gap-6 md:p-32">
          <Sidebar />
          <main className="max-w-[60ch] px-6 md:w-[60ch]">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
