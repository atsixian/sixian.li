import { notFound } from 'next/navigation'
import { Balancer } from 'react-wrap-balancer'
import { DateTime } from '@/components/date-time'
import { Mdx } from '@/components/mdx'
import { allCrafts } from 'contentlayer/generated'

export function generateStaticParams() {
  return allCrafts.map(craft => ({
    slug: craft.slug,
  }))
}

interface CraftProps {
  params: {
    slug: string
  }
}
export function generateMetadata({ params }: CraftProps) {
  const craft = allCrafts.find(a => a.slug === params.slug)
  if (!craft) {
    return
  }

  const { title, description, date, slug } = craft

  const ogImage = `https://sixian.li/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `https://sixian.li/craft/${slug}`,
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

export default function Craft({ params }: CraftProps) {
  const craft = allCrafts.find(a => a.slug === params.slug)

  if (!craft) {
    notFound()
  }

  return (
    <main className="w-full px-6 md:max-w-2xl">
      <div>
        <div className="sticky z-20 pt-6 md:block">
          <DateTime date={craft.date} />
          <h1 className="mb-2 mt-1 text-3xl font-bold dark:text-white">
            <Balancer>{craft.title}</Balancer>
          </h1>
          <p className="mb-12 text-fg-secondary-color">
            <Balancer>{craft.description}</Balancer>
          </p>
        </div>

        <Mdx code={craft.body.code} />
      </div>
    </main>
  )
}
