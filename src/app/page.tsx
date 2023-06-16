import { FloatingNav } from '@/components/floating-nav'
import { Sidebar } from '@/components/sidebar'
import NextLink from 'next/link'
import Me from './me.mdx'

export default function Home() {
  return (
    <>
      <FloatingNav />
      <Sidebar />
      <main className="mb-5 w-full px-6 pt-9 md:w-[60ch] md:pt-0">
        <article className="prose prose-zinc dark:prose-invert prose-h1:mb-5">
          <Me />
          <p className="text-sm text-fg-secondary-color">
            <NextLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY-NC-SA 4.0
            </NextLink>{' '}
            2019-PRESENT © Sixian Li
          </p>
        </article>
      </main>
    </>
  )
}
