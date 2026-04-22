import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Heart, Play } from 'lucide-react'
import { heroSlides } from '../../data/homeContent'
import './HeroCarousel.css'

function wrappedIndex(index, length) {
  return (index + length) % length
}

export function HeroCarousel({ slides = heroSlides, autoplayMs = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartXRef = useRef(null)

  const slideCount = slides.length

  const goTo = useCallback(
    (index) => {
      if (!slideCount) return
      const nextIndex = wrappedIndex(index, slideCount)
      setActiveIndex((current) => {
        if (current === nextIndex) return current
        setPreviousIndex(current)
        setIsTransitioning(true)
        return nextIndex
      })
    },
    [slideCount],
  )

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  useEffect(() => {
    if (!slideCount || isPaused) return undefined
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        const next = wrappedIndex(current + 1, slideCount)
        if (next !== current) {
          setPreviousIndex(current)
          setIsTransitioning(true)
        }
        return next
      })
    }, autoplayMs)
    return () => clearInterval(timer)
  }, [autoplayMs, isPaused, slideCount])

  useEffect(() => {
    if (!isTransitioning) return undefined
    const timer = setTimeout(() => {
      setIsTransitioning(false)
      setPreviousIndex(null)
    }, 1000)
    return () => clearTimeout(timer)
  }, [isTransitioning])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goNext()
      }
    },
    [goNext, goPrev],
  )

  const handleTouchStart = useCallback((event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null
  }, [])

  const handleTouchEnd = useCallback(
    (event) => {
      const startX = touchStartXRef.current
      const endX = event.changedTouches[0]?.clientX ?? null
      if (startX === null || endX === null) return
      const delta = endX - startX
      if (Math.abs(delta) < 44) return
      if (delta < 0) goNext()
      else goPrev()
      touchStartXRef.current = null
    },
    [goNext, goPrev],
  )

  const { activeSlide, previousSlide, peek1, peek2 } = useMemo(() => {
    if (!slideCount) return {}
    return {
      activeSlide: slides[activeIndex],
      previousSlide:
        previousIndex === null ? null : slides[wrappedIndex(previousIndex, slideCount)],
      peek1: slides[wrappedIndex(activeIndex + 1, slideCount)],
      peek2: slides[wrappedIndex(activeIndex + 2, slideCount)],
    }
  }, [activeIndex, previousIndex, slideCount, slides])

  if (!slideCount) return null

  return (
    <section
      className="heroCarousel"
      aria-roledescription="carousel"
      aria-label="Featured titles"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="heroCarousel__dots" role="tablist" aria-label="Slide indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Slide ${index + 1} of ${slideCount}`}
            className={`heroCarousel__dot${index === activeIndex ? ' is-active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <div className="heroCarousel__stage">
        <div className="heroCarousel__main" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {isTransitioning && previousSlide ? (
            <article
              className="heroCarousel__card heroCarousel__card--layer heroCarousel__card--leaving"
              style={{ backgroundImage: `url(${previousSlide.image})` }}
            >
              <div className="heroCarousel__fade" />

              <div className="heroCarousel__meta">
                <span className="heroCarousel__pill">{previousSlide.duration}</span>
                {previousSlide.tags.map((tag) => (
                  <span key={`${previousSlide.id}-${tag}`} className="heroCarousel__pill">
                    {tag}
                  </span>
                ))}
              </div>

              <footer className="heroCarousel__footer">
                <button type="button" className="heroCarousel__cta">
                  <span className="heroCarousel__ctaIcon">
                    <Play size={15} fill="currentColor" />
                  </span>
                  <span className="heroCarousel__ctaText">
                    <strong>{previousSlide.title}</strong>
                    <small>{previousSlide.subtitle}</small>
                  </span>
                </button>
                <button type="button" className="heroCarousel__wishlist" aria-label="Add to list">
                  <Heart size={17} />
                </button>
              </footer>
            </article>
          ) : null}
          <article
            className="heroCarousel__card heroCarousel__card--layer heroCarousel__card--active"
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          >
            <div className="heroCarousel__fade" />

            <div className="heroCarousel__meta">
              <span className="heroCarousel__pill">{activeSlide.duration}</span>
              {activeSlide.tags.map((tag) => (
                <span key={`${activeSlide.id}-${tag}`} className="heroCarousel__pill">
                  {tag}
                </span>
              ))}
            </div>

            <footer className="heroCarousel__footer">
              <button type="button" className="heroCarousel__cta">
                <span className="heroCarousel__ctaIcon">
                  <Play size={15} fill="currentColor" />
                </span>
                <span className="heroCarousel__ctaText">
                  <strong>{activeSlide.title}</strong>
                  <small>{activeSlide.subtitle}</small>
                </span>
              </button>
              <button type="button" className="heroCarousel__wishlist" aria-label="Add to list">
                <Heart size={17} />
              </button>
            </footer>
          </article>
        </div>

        <div className="heroCarousel__previewStack" aria-hidden>
          {/* Second tier — thin vertical strip behind peek 1 */}
          <article
            key={peek2.id}
            className="heroCarousel__previewCard heroCarousel__previewCard--peek2"
            style={{ backgroundImage: `url(${peek2.image})` }}
            onClick={() => goTo(activeIndex + 2)}
          >
            <div className="heroCarousel__previewFade heroCarousel__previewFade--deep" />
          </article>
          {/* First tier — main peek tucked under hero right edge */}
          <article
            key={peek1.id}
            className="heroCarousel__previewCard heroCarousel__previewCard--peek1"
            style={{ backgroundImage: `url(${peek1.image})` }}
            onClick={() => goTo(activeIndex + 1)}
          >
            <div className="heroCarousel__previewFade" />
          </article>
        </div>

      </div>
    </section>
  )
}
