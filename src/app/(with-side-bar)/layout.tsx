import { FloatingNav } from '@/components/floating-nav'
import { Sidebar } from '@/components/sidebar'

export default function SiderbarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <FloatingNav />
      <Sidebar />
      <main className="w-full px-6 md:w-[60ch]">{children}</main>
    </>
  )
}
