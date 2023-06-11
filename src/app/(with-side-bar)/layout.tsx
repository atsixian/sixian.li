import { Sidebar } from '@/components/sidebar'

export default function SiderbarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="w-full px-6 md:w-[60ch]">{children}</main>
    </>
  )
}
