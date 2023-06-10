import Me from './me.mdx'
import NextLink from 'next/link'

export default function Home() {
  return (
    <article className="prose prose-zinc dark:prose-invert prose-h1:mb-5">
      <Me />
      <p className='text-sm text-fg-secondary-color'>
        <NextLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY-NC-SA 4.0
        </NextLink>{' '}
        2019-PRESENT © Sixian Li
      </p>
    </article>
  )
}
