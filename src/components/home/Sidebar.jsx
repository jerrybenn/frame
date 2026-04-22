import {
  CalendarDays,
  Heart,
  House,
  MessageCircleQuestion,
  Settings,
  SquareChartGantt,
  TvMinimalPlay,
} from 'lucide-react'
import { ContinueWatchingCard } from './ContinueWatchingCard'
import { SidebarNavItem } from './SidebarNavItem'

const iconMap = {
  House,
  Heart,
  CalendarDays,
  SquareChartGantt,
  Settings,
  MessageCircleQuestion,
}

export function Sidebar({ items, continueWatchingCards }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand__icon">
          <TvMinimalPlay size={16} />
        </span>
        <span className="brand__text">serivia</span>
      </div>

      <nav className="sidebar__nav" aria-label="Primary navigation">
        {items.map((item) => (
          <SidebarNavItem
            key={item.id}
            label={item.label}
            active={Boolean(item.active)}
            icon={iconMap[item.icon]}
          />
        ))}
      </nav>

      <section className="continue-section" aria-label="Continue watching">
        <h2 className="continue-section__title">Continue Watching</h2>
        <div className="continue-section__stack">
          {continueWatchingCards.map((card) => (
            <ContinueWatchingCard key={card.id} card={card} />
          ))}
        </div>
      </section>
    </aside>
  )
}
