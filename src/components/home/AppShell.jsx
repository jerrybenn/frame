import { useState } from 'react'
import { categoryOptions, continueWatchingCards, genres, movies, sidebarItems } from '../../data/homeContent'
import { GenreTabs } from './GenreTabs'
import { HeroCarousel } from '../HeroCarousel'
import { MovieGrid } from './MovieGrid'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import './home.css'

export function AppShell() {
  const [activeGenre, setActiveGenre] = useState('Action')
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0])

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
          <main className="dashboard-main">
            <HeroCarousel />
            <GenreTabs genres={genres} activeGenre={activeGenre} onGenreSelect={setActiveGenre} />
            <MovieGrid movies={movies} />
          </main>
        </div>
      </section>
    </div>
  )
}
