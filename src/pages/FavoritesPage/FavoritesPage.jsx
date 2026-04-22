import { useState } from 'react'
import { AppShell } from '../../components/AppShell/AppShell'
import { categoryOptions } from '../../data/homeContent'
import { PagePlaceholder } from '../PagePlaceholder/PagePlaceholder'
import './FavoritesPage.css'

export function FavoritesPage() {
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0])

  return (
    <AppShell
      categoryOptions={categoryOptions}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    >
      <PagePlaceholder title="Favorites" subtitle="Your saved titles will show up here." />
    </AppShell>
  )
}
