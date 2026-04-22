import { Star } from 'lucide-react'

export function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-card__poster" />
      <h3>{movie.title}</h3>
      <p>
        {movie.year}
        <span>
          <Star size={12} fill="currentColor" />
          {movie.rating}
        </span>
      </p>
    </article>
  )
}
