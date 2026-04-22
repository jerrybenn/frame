import { Search } from 'lucide-react'
import './SearchBar.css'

export function SearchBar() {
  return (
    <label className="search-bar">
      <Search size={17} />
      <input type="search" placeholder="Movies, series, shows..." />
    </label>
  )
}
