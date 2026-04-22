import { useState } from 'react'
import { categoryOptions, genres, movies } from '../data/homeContent'
import { AppShell } from '../components/AppShell'
import { GenreTabs } from '../components/GenreTabs'
import { HeroCarousel } from '../components/HeroCarousel'
import { MovieGrid } from '../components/MovieGrid'

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
