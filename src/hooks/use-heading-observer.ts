import { useEffect, useState, useRef } from 'react'

export const selector = 'article > h2, article > h3, article > h4'

export function useHeadingObserver() {
  const observer = useRef<IntersectionObserver>()
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleObsever: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: '-40% 0% -40% 0%',
    })

    const elements = document.querySelectorAll(selector)
    elements.forEach(elem => observer.current?.observe(elem))

    return () => observer.current?.disconnect()
  }, [])

  return { activeId }
}
