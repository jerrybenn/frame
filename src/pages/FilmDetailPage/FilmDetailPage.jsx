import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppShell } from '../../components/AppShell/AppShell'
import { categoryOptions } from '../../data/homeContent'
import { filmDetailsById, getFilmDetailById } from '../../data/filmDetails'
import './FilmDetailPage.css'

function Score({ value }) {
  return <span className="film-detail__score">{value.toFixed(1)}</span>
}

export function FilmDetailPage() {
  const { filmId } = useParams()
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0])
  const film = getFilmDetailById(filmId)

  const related = useMemo(() => {
    if (!film?.relatedIds) return []
    return film.relatedIds.map((id) => filmDetailsById[id]).filter(Boolean)
  }, [film])

  return (
    <AppShell
      categoryOptions={categoryOptions}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    >
      {!film ? (
        <section className="film-detail film-detail--empty">
          <h1 className="film-detail__title">Title not found</h1>
          <p className="film-detail__synopsis">We could not find that film yet. Try a different title.</p>
          <Link className="film-detail__back-link" to="/">
            Back to Home
          </Link>
        </section>
      ) : (
        <section className="film-detail">
          <header className="film-detail__header">
            <div>
              <p className="film-detail__eyebrow">
                {film.type} • {film.year} • {film.duration} • {film.ageRating}
              </p>
              <h1 className="film-detail__title">{film.title}</h1>
              <p className="film-detail__tags">{film.genres.join(' • ')}</p>
            </div>
            <div className="film-detail__rating-wrap">
              <span>Audience</span>
              <Score value={film.rating} />
            </div>
          </header>

          <article className="film-detail__trailer-card">
            <img src={film.heroImage} alt={`${film.title} trailer still`} className="film-detail__trailer-image" />
            <div className="film-detail__trailer-overlay" />
            <div className="film-detail__trailer-content">
              <a href={film.trailerUrl} className="film-detail__trailer-button" target="_blank" rel="noreferrer">
                Watch Trailer ({film.trailerLength})
              </a>
            </div>
          </article>

          {film.progress ? (
            <section className="film-detail__panel">
              <h2>Continue watching</h2>
              <div className="film-detail__progress-row">
                <span>{film.progress.elapsed}</span>
                <span>{film.progress.percent}% watched</span>
              </div>
              <div className="film-detail__progress-track" aria-label="Watch progress">
                <span className="film-detail__progress-fill" style={{ width: `${film.progress.percent}%` }} />
              </div>
            </section>
          ) : null}

          <section className="film-detail__grid">
            <article className="film-detail__panel">
              <h2>Synopsis</h2>
              <p className="film-detail__synopsis">{film.synopsis}</p>
            </article>

            <article className="film-detail__panel">
              <h2>Pricing</h2>
              <ul className="film-detail__meta-list">
                <li>
                  <strong>Rent:</strong> {film.pricing.rent}
                </li>
                <li>
                  <strong>Buy:</strong> {film.pricing.buy}
                </li>
                <li>
                  <strong>Currency:</strong> {film.pricing.currency}
                </li>
              </ul>
              <p className="film-detail__note">{film.pricing.note}</p>
            </article>
          </section>

          <section className="film-detail__grid">
            <article className="film-detail__panel">
              <h2>Cast</h2>
              <ul className="film-detail__pill-list">
                {film.cast.map((person) => (
                  <li key={person}>{person}</li>
                ))}
              </ul>
            </article>
            <article className="film-detail__panel">
              <h2>Crew</h2>
              <ul className="film-detail__list">
                {film.crew.map((credit) => (
                  <li key={credit}>{credit}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="film-detail__panel film-detail__creator">
            <img src={film.creator.avatar} alt={film.creator.name} className="film-detail__creator-avatar" />
            <div>
              <h2>Creator</h2>
              <p className="film-detail__creator-name">
                {film.creator.name} — {film.creator.role}
              </p>
              <p className="film-detail__synopsis">{film.creator.bio}</p>
            </div>
          </section>

          <section className="film-detail__panel">
            <h2>Stills</h2>
            <div className="film-detail__stills">
              {film.stills.map((still) => (
                <img key={still} src={still} alt={`${film.title} still`} />
              ))}
            </div>
          </section>

          <section className="film-detail__panel">
            <h2>Reviews</h2>
            <div className="film-detail__reviews">
              {film.reviews.map((review) => (
                <article key={review.id} className="film-detail__review">
                  <p className="film-detail__review-head">
                    <strong>{review.author}</strong>
                    <Score value={review.score} />
                  </p>
                  <p>{review.quote}</p>
                </article>
              ))}
            </div>
          </section>

          {related.length ? (
            <section className="film-detail__panel">
              <h2>Related titles</h2>
              <div className="film-detail__related-grid">
                {related.map((item) => (
                  <Link key={item.id} className="film-detail__related-card" to={`/title/${item.id}`}>
                    <img src={item.heroImage} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>
                        {item.type} • {item.year}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </section>
      )}
    </AppShell>
  )
}
