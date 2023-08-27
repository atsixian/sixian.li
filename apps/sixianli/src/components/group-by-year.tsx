import NextLink from 'next/link'

interface Content {
  date: string
  title: string
  slug: string
  url?: string
}

export function GroupByYear<T extends Content>({
  allItems,
  title,
}: {
  allItems: T[]
  title: string
}) {
  allItems.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const itemsByYear = allItems.reduce((acc: Record<string, T[]>, item: T) => {
    const year = new Date(item.date).getFullYear()
    if (!(year in acc)) {
      acc[year] = []
    }
    acc[year].push(item)
    return acc
  }, {})

  const years = Object.keys(itemsByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <>
      <h1 className="mobile-header">{title}</h1>
      <div className="flex flex-col gap-3">
        {years.map(year => (
          <section key={year} className="border-b border-b-zinc-200 pb-4">
            <h2 className="mb-3 text-3xl">{year}</h2>

            <div className="flex flex-col gap-2">
              {itemsByYear[year].map(item => (
                <NextLink
                  key={item.slug}
                  href={item.url ?? `/${title.toLowerCase()}/${item.slug}`}
                  aria-label={item.title}
                >
                  <div className="group flex flex-row justify-between gap-2">
                    <h3 className="transition-colors group-hover:text-fg-hover-color">
                      {item.title}
                    </h3>
                    <time
                      dateTime={item.date}
                      className="shrink-0 text-fg-secondary-color transition-colors group-hover:text-fg-secondary-hover-color"
                    >
                      {new Date(item.date).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </NextLink>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
