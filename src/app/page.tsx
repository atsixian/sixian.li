import Me from './me.mdx'
import NextLink from 'next/link'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="w-full px-6 md:w-[60ch]">
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
