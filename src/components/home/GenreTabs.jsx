export function GenreTabs({ genres, activeGenre, onGenreSelect }) {
  return (
    <section className="genre-tabs">
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
    </section>
  )
}
