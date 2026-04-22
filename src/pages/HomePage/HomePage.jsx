import { useState } from 'react'
import { AppShell } from '../../components/AppShell/AppShell'
import { GenreTabs } from '../../components/GenreTabs/GenreTabs'
import { HeroCarousel } from '../../components/HeroCarousel/HeroCarousel'
import { MovieGrid } from '../../components/MovieGrid/MovieGrid'
import { categoryOptions, genres, movies } from '../../data/homeContent'
import './HomePage.css'

export function HomePage() {
  const [activeGenre, setActiveGenre] = useState('Action')
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0])

  return (
    <AppShell
      categoryOptions={categoryOptions}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    >
      <HeroCarousel />
      <GenreTabs genres={genres} activeGenre={activeGenre} onGenreSelect={setActiveGenre} />
      <MovieGrid movies={movies} />
    </AppShell>
  )
}
