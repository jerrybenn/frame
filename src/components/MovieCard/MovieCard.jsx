import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

export function MovieCard({ movie }) {
  const detailPath = `/title/${movie.detailId ?? movie.id}`

  return (
    <Link className="movie-card" to={detailPath} aria-label={`Open details for ${movie.title}`}>
      <img src={movie.image} alt={movie.title} className="movie-card__poster" />
      <h3>{movie.title}</h3>
      <p>
        {movie.year}
        <span>
          <Star size={12} fill="currentColor" />
          {movie.rating}
        </span>
      </p>
    </Link>
  )
}
