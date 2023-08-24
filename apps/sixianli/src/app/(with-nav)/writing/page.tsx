import NextLink from 'next/link'
import type { Article } from 'contentlayer/generated'
import { allArticles } from 'contentlayer/generated'

export const metadata = {
  title: 'Writing',
  description: 'On life and tech',
}

export default function Writing() {
  allArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const articlesByYear = allArticles.reduce(
    (acc: Record<string, Article[]>, article: Article) => {
      const year = new Date(article.date).getFullYear()
      if (!(year in acc)) {
        acc[year] = []
      }
      acc[year].push(article)
      return acc
    },
    {}
  )

  const years = Object.keys(articlesByYear).sort(
    (a, b) => Number(b) - Number(a)
  )

  return (
    <>
      <h1 className="mobile-header">Writing</h1>
      <div className="flex flex-col gap-3">
        {years.map(year => (
          <section key={year} className="border-b border-b-zinc-200 pb-4">
            <h2 className="mb-3 text-3xl">{year}</h2>
            <ArticlesByYear articles={articlesByYear[year]} />
          </section>
        ))}
      </div>
    </>
  )
}

function ArticlesByYear({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-col gap-2">
      {articles.map(article => (
        <NextLink
          key={article.slug}
          href={`/writing/${article.slug}`}
          aria-label={article.title}
        >
          <div className="group flex flex-row justify-between gap-2">
            <h3 className="transition-colors group-hover:text-fg-hover-color">
              {article.title}
            </h3>
            <time
              dateTime={article.date}
              className="shrink-0 text-fg-secondary-color transition-colors group-hover:text-fg-secondary-hover-color"
            >
              {new Date(article.date).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
        </NextLink>
      ))}
    </div>
  )
}
