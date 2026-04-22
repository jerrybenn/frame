import { Play } from 'lucide-react'
import './ContinueWatchingCard.css'

export function ContinueWatchingCard({ card }) {
  return (
    <article className="continue-card">
      <img src={card.image} alt="" className="continue-card__image" />
      <div className="continue-card__overlay" />
      <h3 className="continue-card__title">{card.title}</h3>
      <div className="continue-card__footer">
        <button type="button" className="continue-card__play" aria-label={`Resume ${card.title}`}>
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
