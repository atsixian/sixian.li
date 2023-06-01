import '@/katex/katex.min.css'

import type { Metadata } from 'next'
import { allArticles } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx'
import { Balancer } from 'react-wrap-balancer'

export async function generateStaticParams() {
  return allArticles.map(article => ({
    slug: article.slug,
  }))
}

type ArticleProps = {
  params: {
    slug: string
  }
}
export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata | undefined> {
  const article = allArticles.find(article => article.slug === params.slug)
  if (!article) {
    return
  }

  const { title, description } = article

  return {
    title,
    description,
  }
}

export default async function Article({ params }: ArticleProps) {
  const article = allArticles.find(article => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div>
      <time dateTime={article.date} className="text-sm text-zinc-500">
        {new Date(article.date).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <h1 className="mb-5 mt-1 text-3xl font-bold">
        <Balancer>{article.title}</Balancer>
      </h1>
      <Mdx code={article.body.code} />
    </div>
  )
}
