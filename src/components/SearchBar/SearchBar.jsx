import { Search, SlidersHorizontal } from 'lucide-react'
import './SearchBar.css'

export function SearchBar() {
  return (
    <div className="search-bar" role="search">
      <Search className="search-bar__search-icon" size={18} strokeWidth={1.75} aria-hidden />
      <input
        type="search"
        className="search-bar__input"
        placeholder="Movies, series, shows..."
        aria-label="Search movies, series, and shows"
      />
      <span className="search-bar__divider" aria-hidden />
      <button type="button" className="search-bar__filter" aria-label="Filters">
        <SlidersHorizontal size={17} strokeWidth={1.75} />
      </button>
    </div>
  )
}
