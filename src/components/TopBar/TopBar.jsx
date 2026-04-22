import { Bell } from 'lucide-react'
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
      <div className="topbar__trailing">
        <button type="button" className="topbar__notify" aria-label="Notifications">
          <Bell size={18} strokeWidth={1.75} />
        </button>
        <ProfileBadge />
      </div>
    </header>
  )
}
