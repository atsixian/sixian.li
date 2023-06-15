import { allArticles } from 'contentlayer/generated'
import RSS from 'rss'

export async function GET() {
  const feed = new RSS({
    title: 'Sixian Li',
    description: "Sixian's floating thoughts",
    site_url: 'https://sixian.li',
    feed_url: 'https://sixian.li/feed.xml',
    language: 'en-US',
    image_url: 'https://sixian.li/og.png',
  })

  const articles = allArticles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  articles.forEach(article => {
    feed.item({
      title: article.title,
      url: `https://sixian.li/writing/${article.slug}`,
      description: article.description ?? '',
      date: new Date(article.date),
      enclosure: {
        url: `https://sixian.li/og?title=${article.title}&lang=${article.lang}`, 
      },
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
