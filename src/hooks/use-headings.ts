import { useEffect, useRef, useState } from 'react'

const defaultSelector = 'article > h2, article > h3, article > h4'

export function useHeadings(selector: string = defaultSelector): {
  ids: string[]
  activeId: string
} {
  const observer = useRef<IntersectionObserver>()
  const [activeId, setActiveId] = useState('')
  const [ids, setIds] = useState<string[]>([])

  useEffect(() => {
    const handleObsever: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: '-0% 0% -70% 0%',
    })

    const headings = document.querySelectorAll(selector)
    setIds([...headings].map(h => h.id))
    headings.forEach(elem => observer.current?.observe(elem))

    return () => observer.current?.disconnect()
  }, [])

  return { ids, activeId }
}
