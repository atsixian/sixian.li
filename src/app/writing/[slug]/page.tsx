import type { Metadata } from 'next'
import { allArticles } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx'

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

  const { title, date, slug } = article

  return {
    title,
  }
}

export default async function Article({ params }: ArticleProps) {
  const article = allArticles.find(article => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="prose prose-zinc mb-10">
      <time dateTime={article.date}>
        {new Date(article.date).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <h1>{article.title}</h1>
      <Mdx code={article.body.code} />
    </article>
  )
}
