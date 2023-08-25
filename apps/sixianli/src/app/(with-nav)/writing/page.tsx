import { allArticles } from 'contentlayer/generated'
import { GroupByYear } from '@/components/group-by-year'

export const metadata = {
  title: 'Writing',
  description: 'On life and tech',
}

export default function Writing() {
  return <GroupByYear allItems={allArticles} title="Writing" />
}
