import { useCallback, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Heart, Play } from 'lucide-react'
import { heroSlides } from '../data/homeContent'
import './heroCarousel.css'

export function HeroCarousel({ slides = heroSlides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return undefined

    const syncSelected = () => setSelectedIndex(emblaApi.selectedScrollSnap())

    emblaApi.on('select', syncSelected)
    emblaApi.on('reInit', syncSelected)

    const frameId = requestAnimationFrame(syncSelected)

    return () => {
      cancelAnimationFrame(frameId)
      emblaApi.off('select', syncSelected)
      emblaApi.off('reInit', syncSelected)
    }
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollNext, scrollPrev],
  )

  if (!slides.length) {
    return null
  }

  const nextIndex = (selectedIndex + 1) % slides.length

  return (
    <section
      className="heroCarousel"
      aria-roledescription="carousel"
      aria-label="Featured titles"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="heroCarousel__viewportWrap">
        <div className="heroCarousel__dots" role="tablist" aria-label="Slide indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Slide ${index + 1} of ${slides.length}`}
              className={`heroCarousel__dot${index === selectedIndex ? ' is-active' : ''}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="heroCarousel__arrow heroCarousel__arrow--prev"
          aria-label="Previous slide"
          onClick={scrollPrev}
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>
        <button
          type="button"
          className="heroCarousel__arrow heroCarousel__arrow--next"
          aria-label="Next slide"
          onClick={scrollNext}
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>

        <div className="heroCarousel__viewport" ref={emblaRef}>
          <div className="heroCarousel__track">
            {slides.map((slide, index) => {
              const isActive = index === selectedIndex
              const isPreview = index === nextIndex && slides.length > 1
              const slideMods = [
                'heroCarousel__slide',
                isActive ? 'heroCarousel__slide--active' : '',
                isPreview ? 'heroCarousel__slide--preview' : '',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <div key={slide.id} className={slideMods}>
                  <article
                    className="heroCarousel__card"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="heroCarousel__fade" />

                    <div className="heroCarousel__meta">
                      <span className="heroCarousel__pill">{slide.duration}</span>
                      {slide.tags.map((tag) => (
                        <span key={`${slide.id}-${tag}`} className="heroCarousel__pill">
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
                          <strong>{slide.title}</strong>
                          <small>{slide.subtitle}</small>
                        </span>
                      </button>
                      <button type="button" className="heroCarousel__wishlist" aria-label="Add to list">
                        <Heart size={17} />
                      </button>
                    </footer>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
