import { useEffect, useRef } from "react"

interface IntiniteScroll {
  callback: () => void
}

export function InfiniteScroll({ callback }: IntiniteScroll) {

  const ScrollEnd = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const intersectOb = new IntersectionObserver(([entry]) => {
      const radio = entry.intersectionRatio
      if (radio > 0) {
        callback()
      }
    })

    if (ScrollEnd.current) {
      intersectOb.observe(ScrollEnd.current)
    }

    return () => {
      intersectOb.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ScrollEnd}></div>
  )
}