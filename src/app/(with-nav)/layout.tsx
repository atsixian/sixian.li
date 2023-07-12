import { Nav } from '@/components/nav/nav'

export default function LayoutWithNav({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className="w-full px-6 md:max-w-2xl">{children}</main>
    </>
  )
}
