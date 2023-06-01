import { allArticles, Article } from 'contentlayer/generated'
import NextLink from 'next/link'

export const metadata = {
  title: 'Writing | Sixian Li',
  description: 'On life and tech',
}

export default function Writing() {
  allArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const articlesByYear = allArticles.reduce(
    (acc: Record<string, Article[]>, article: Article) => {
      const year = new Date(article.date).getFullYear()
      if (!acc[year]) {
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
    <div className="flex flex-col gap-3">
      {years.map(year => (
        <section
          key={year}
          className="border-b border-b-zinc-200 pb-4 text-zinc-700"
        >
          <h2 className="mb-3 text-3xl">{year}</h2>
          <ArticlesByYear articles={articlesByYear[year]} />
        </section>
      ))}
    </div>
  )
}

function ArticlesByYear({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-col gap-2">
      {articles.map(article => (
        <div
          key={article.slug}
          className="flex flex-row justify-between transition-all duration-300 hover:text-zinc-900 hover:duration-200"
        >
          <NextLink href={`/writing/${article.slug}`}>
            <h3>{article.title}</h3>
          </NextLink>
          <time dateTime={article.date} className="shrink-0">
            {new Date(article.date).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
      ))}
    </div>
  )
}
