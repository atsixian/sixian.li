import { allCrafts } from 'contentlayer/generated'
import { GroupByYear } from '@/components/group-by-year'

export const metadata = {
  title: 'Craft',
  description: 'Creative explorations',
}

export default function Craft() {
  return <GroupByYear allItems={allCrafts} title="Craft" />
}
