import { Bell, SlidersHorizontal } from 'lucide-react'
import { CategoryDropdown } from '../CategoryDropdown/CategoryDropdown'
import { ProfileBadge } from '../ProfileBadge/ProfileBadge'
import { SearchBar } from '../SearchBar/SearchBar'
import './TopBar.css'

export function TopBar({ categoryOptions, activeCategory, setActiveCategory }) {
  return (
    <header className="topbar">
      <CategoryDropdown
        options={categoryOptions}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <SearchBar />
      <div className="topbar__actions">
        <button type="button" className="glass-square-btn" aria-label="Filters">
          <SlidersHorizontal size={17} />
        </button>
        <button type="button" className="glass-square-btn" aria-label="Notifications">
          <Bell size={17} />
        </button>
        <ProfileBadge />
      </div>
    </header>
  )
}
