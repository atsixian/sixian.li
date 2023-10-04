import '@/katex/katex.min.css'

import NextLink from 'next/link'
import { notFound } from 'next/navigation'
import { Balancer } from 'react-wrap-balancer'
import clsx from 'clsx'
import { allArticles } from 'contentlayer/generated'
import { MyEmail } from '@/components/my-email'
import { Mdx } from '@/components/mdx'
import { DateTime } from '@/components/date-time'
import type { TocProps } from './toc'
import { ToC } from './toc'

export function generateStaticParams() {
  return allArticles.map(article => ({
    slug: article.slug,
  }))
}

interface ArticleProps {
  params: {
    slug: string
  }
}
export function generateMetadata({ params }: ArticleProps) {
  const article = allArticles.find(a => a.slug === params.slug)
  if (!article) {
    return
  }

  const { title, description, date, slug, lang } = article

  const ogImage = `https://sixian.li/og?title=${title}&lang=${lang}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `https://sixian.li/writing/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Article({ params }: ArticleProps) {
  const article = allArticles.find(a => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const headings = getHeadings(article.body.raw)

  return (
    <>
      <ToC headings={headings} />
      <main className={clsx('w-full px-6 md:flex md:max-w-2xl')}>
        <div className="m-auto">
          <div className="sticky z-20 pt-6 md:block">
            <DateTime date={article.date} />
            <h1 className="mb-2 mt-1 text-3xl font-bold dark:text-white">
              <Balancer>{article.title}</Balancer>
            </h1>
            <p className="mb-12 text-fg-secondary-color">
              <Balancer>{article.description}</Balancer>
            </p>
          </div>

          <Mdx code={article.body.code} />

          <p className="prose prose-zinc mb-10 border-y border-dotted border-zinc-400 py-6 text-center font-sans dark:prose-invert md:p-8">
            欢迎通过{' '}
            <NextLink href="https://twitter.com/noworkforsixian">
              Twitter
            </NextLink>{' '}
            或<MyEmail>邮件</MyEmail>告诉我你的想法
            <br />
            Find me on{' '}
            <NextLink href="https://twitter.com/noworkforsixian">
              Twitter
            </NextLink>{' '}
            or write me an <MyEmail>email</MyEmail>
          </p>
        </div>
      </main>
    </>
  )
}

function getHeadings(mdContent: string): TocProps['headings'] {
  const content = removeCodeBlockFromMd(mdContent)

  const headingRegex = /^(?<level>#+)\s+(?<text>.*)$/gm
  const headings = [...content.matchAll(headingRegex)]
    .filter(r => Boolean(r.groups))
    .map(r => ({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      level: r.groups!.level.length,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      text: r.groups!.text,
    }))
  return headings
}

// https://github.com/K-Sato1995/react-toc/blob/af8569d6dff8cbfb685b5614f7952eb19dceab73/src/utils.ts#LL39C1-L39C6
function removeCodeBlockFromMd(mdContent: string): string {
  const codeBlockRegex =
    /(?:(?:````[a-z]*\n[\s\S]*?\n````)|(?:```[a-z]*\n[\s\S]*?\n```)|(?:~~~[a-z]*\n[\s\S]*?\n~~~))/gms
  return mdContent.replace(codeBlockRegex, '')
}
