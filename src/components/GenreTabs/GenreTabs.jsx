import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './GenreTabs.css'

export function GenreTabs({ genres, activeGenre, onGenreSelect }) {
  const scrollRef = useRef(null)
  const [edgeState, setEdgeState] = useState({ left: false, right: false })

  const updateEdges = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth
    const epsilon = 4
    setEdgeState({
      left: scrollLeft > epsilon,
      right: maxScroll > epsilon && scrollLeft < maxScroll - epsilon,
    })
  }, [])

  useLayoutEffect(() => {
    updateEdges()
  }, [genres, updateEdges])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const ro = new ResizeObserver(() => updateEdges())
    ro.observe(el)

    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)

    return () => {
      ro.disconnect()
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [genres, updateEdges])

  const scrollByAmount = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const amount = Math.min(280, Math.max(160, el.clientWidth * 0.45))
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section className="genre-tabs" aria-label="Browse by genre">
      <div className="genre-tabs__track-wrap">
        <div className="genre-tabs__scroll" ref={scrollRef}>
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              className={`genre-tab${activeGenre === genre ? ' is-active' : ''}`}
              onClick={() => onGenreSelect(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        <div
          className={`genre-tabs__fade genre-tabs__fade--left${edgeState.left ? ' is-visible' : ''}`}
          aria-hidden
        />
        <div
          className={`genre-tabs__fade genre-tabs__fade--right${edgeState.right ? ' is-visible' : ''}`}
          aria-hidden
        />
      </div>
      <div className="genre-tabs__nav" role="group" aria-label="Scroll genres">
        <button
          type="button"
          className="genre-tabs__arrow"
          aria-label="Previous genres"
          disabled={!edgeState.left}
          onClick={() => scrollByAmount(-1)}
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>
        <button
          type="button"
          className="genre-tabs__arrow"
          aria-label="Next genres"
          disabled={!edgeState.right}
          onClick={() => scrollByAmount(1)}
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>
    </section>
  )
}
