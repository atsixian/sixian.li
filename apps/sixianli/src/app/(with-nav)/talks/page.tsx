import type { Talk } from 'contentlayer/generated'
import { allTalks } from 'contentlayer/generated'
import { DateTime } from '@/components/date-time'

export const metadata = {
  title: 'Talks',
  description: 'From my mind to the world',
}

export default function Talks() {
  allTalks.sort((t1, t2) => t1.order - t2.order)
  return (
    <>
      <h1 className="mobile-header">Talks</h1>
      <div className="mb-5 flex flex-col gap-6">
        {allTalks.map(talk => (
          <TalkCard key={talk.title} talk={talk} />
        ))}
      </div>
    </>
  )
}

function TalkCard({ talk }: { talk: Talk }) {
  return (
    <div className="rounded border border-zinc-300 bg-zinc-50 p-1 font-sans shadow-md dark:border-zinc-600 dark:bg-zinc-800 dark:shadow-none">
      <iframe
        title={talk.title}
        src={talk.url}
        allowFullScreen
        className="aspect-[4/3] w-full rounded"
      />
      <p
        className="prose prose-sm prose-zinc p-2 dark:prose-invert md:prose-base"
        dangerouslySetInnerHTML={{ __html: talk.body.html }}
      />
      <div className="flex">
        <DateTime date={talk.date} className="ml-auto text-xs md:text-sm" />
      </div>
    </div>
  )
}
