import { continueWatchingCards, sidebarItems } from '../data/homeContent'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import './app-shell.css'

export function AppShell({ children, categoryOptions, activeCategory, setActiveCategory }) {
  return (
    <div className="stream-page-bg">
      <section className="app-shell">
        <Sidebar items={sidebarItems} continueWatchingCards={continueWatchingCards} />
        <div className="app-shell__main">
          <TopBar
            categoryOptions={categoryOptions}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <main className="dashboard-main">{children}</main>
        </div>
      </section>
    </div>
  )
}
