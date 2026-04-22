import { Play } from 'lucide-react'

export function ContinueWatchingCard({ card }) {
  return (
    <article className="continue-card">
      <img src={card.image} alt={card.title} className="continue-card__image" />
      <div className="continue-card__overlay" />
      <div className="continue-card__row">
        <button type="button" className="continue-card__play" aria-label={`Resume ${card.title}`}>
          <Play size={14} fill="currentColor" />
        </button>
        <span className="continue-card__elapsed">{card.elapsed}</span>
        <span className="continue-card__progress-text">{card.progress}%</span>
      </div>
      <h3 className="continue-card__title">{card.title}</h3>
      <div className="continue-card__progress-track">
        <span className="continue-card__progress-fill" style={{ width: `${card.progress}%` }} />
      </div>
    </article>
  )
}
