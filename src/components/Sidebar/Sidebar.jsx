import {
  CalendarDays,
  Clapperboard,
  Heart,
  House,
  MessageCircleQuestion,
  Settings,
  SquareChartGantt,
  TvMinimalPlay,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContinueWatchingCard } from '../ContinueWatchingCard/ContinueWatchingCard'
import { SidebarNavItem } from '../SidebarNavItem/SidebarNavItem'
import './Sidebar.css'

const iconMap = {
  House,
  Heart,
  CalendarDays,
  SquareChartGantt,
  Settings,
  MessageCircleQuestion,
}

const PRIMARY_NAV_IDS = ['home', 'favorites', 'coming-soon', 'trending']
const SECONDARY_NAV_IDS = ['settings', 'support']

export function Sidebar({ items, continueWatchingCards }) {
  const primaryItems = items.filter((item) => PRIMARY_NAV_IDS.includes(item.id))
  const secondaryItems = items.filter((item) => SECONDARY_NAV_IDS.includes(item.id))

  return (
    <aside className="sidebar">
      <Link className="brand brand--link" to="/">
        <span className="brand__icon" aria-hidden>
          <TvMinimalPlay size={24} strokeWidth={2} />
        </span>
        <span className="brand__text">serivia</span>
      </Link>

      <nav className="sidebar__nav" aria-label="Primary navigation">
        <div className="sidebar__nav-group">
          {primaryItems.map((item) => (
            <SidebarNavItem
              key={item.id}
              to={item.path}
              label={item.label}
              icon={iconMap[item.icon]}
              filledWhenActive={item.id === 'home'}
            />
          ))}
        </div>
        <div className="sidebar__nav-group sidebar__nav-group--secondary">
          {secondaryItems.map((item) => (
            <SidebarNavItem
              key={item.id}
              to={item.path}
              label={item.label}
              icon={iconMap[item.icon]}
              filledWhenActive={item.id === 'home'}
            />
          ))}
        </div>
      </nav>

      <div className="sidebar__spacer" aria-hidden />

      <section className="continue-section" aria-label="Continue watching">
        <h2 className="continue-section__title">
          <Clapperboard size={17} strokeWidth={1.75} className="continue-section__title-icon" aria-hidden />
          Continue Watching
        </h2>
        <div className="continue-section__stack">
          {continueWatchingCards.map((card) => (
            <ContinueWatchingCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </aside>
  )
}
