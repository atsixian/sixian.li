import { Nav } from '@/components/nav/nav'

export default function SiderbarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className="w-full px-6 md:w-[60ch]">{children}</main>
    </>
  )
}
