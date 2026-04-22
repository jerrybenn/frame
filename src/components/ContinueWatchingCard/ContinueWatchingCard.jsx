import { Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './ContinueWatchingCard.css'

export function ContinueWatchingCard({ card }) {
  const navigate = useNavigate()
  const detailPath = `/title/${card.detailId ?? card.id}`

  return (
    <article
      className="continue-card"
      onClick={() => navigate(detailPath)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          navigate(detailPath)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <img src={card.image} alt="" className="continue-card__image" />
      <div className="continue-card__overlay" />
      <h3 className="continue-card__title">{card.title}</h3>
      <div className="continue-card__footer">
        <button
          type="button"
          className="continue-card__play"
          aria-label={`Resume ${card.title}`}
          onClick={(event) => {
            event.stopPropagation()
            navigate(detailPath)
          }}
        >
          <Play size={12} fill="currentColor" strokeWidth={0} />
        </button>
        <div
          className="continue-card__progress-pill"
          role="group"
          aria-label={`${card.elapsed}, ${card.progress}% watched`}
        >
          <div
            className="continue-card__progress-fill-bg"
            style={{ width: `${card.progress}%` }}
            aria-hidden
          />
          <div className="continue-card__progress-inner">
            <span className="continue-card__elapsed">{card.elapsed}</span>
            <span className="continue-card__pct">{card.progress}%</span>
          </div>
        </div>
      </div>
    </article>
  )
}
