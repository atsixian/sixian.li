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
        <div className="flex h-full flex-col items-center justify-start font-serif md:relative md:flex-row md:items-start md:justify-center md:gap-6 md:p-32">
          <Sidebar />
          <main className="max-w-[60ch] px-6 md:w-[60ch]">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
