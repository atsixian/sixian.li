import { open_sans, roboto_mono } from './fonts'
import './globals.css'
import { Sidebar } from '../components/sidebar'

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
      <body className="h-screen">
        <div className="flex h-full flex-col items-center justify-start md:relative md:flex-row md:items-start md:justify-center md:gap-6 md:p-32">
          <Sidebar />
          <div className="max-w-[58ch] px-6 md:w-[58ch]">{children}</div>
        </div>
      </body>
    </html>
  )
}
