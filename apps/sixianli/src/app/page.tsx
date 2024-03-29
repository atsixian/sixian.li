import NextLink from 'next/link'
import { Nav } from '@/components/nav/nav'
import Me from './me.mdx'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mb-5 w-full px-6 md:flex md:max-w-xl">
        <article className="prose prose-zinc m-auto dark:prose-invert prose-h1:mb-5">
          <h1 className="mobile-header md:static md:my-0 md:block">
            Sixian Li
          </h1>
          <Me />
          <p className="mb-5 text-sm text-fg-secondary-color">
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
