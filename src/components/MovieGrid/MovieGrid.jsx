import { MovieCard } from '../MovieCard/MovieCard'
import './MovieGrid.css'

export function MovieGrid({ movies }) {
  return (
    <section className="movie-grid-section" aria-label="Movie posters">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}
