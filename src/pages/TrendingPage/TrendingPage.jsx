import { useState } from 'react'
import { AppShell } from '../../components/AppShell/AppShell'
import { categoryOptions } from '../../data/homeContent'
import { PagePlaceholder } from '../PagePlaceholder/PagePlaceholder'
import './TrendingPage.css'

export function TrendingPage() {
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0])

  return (
    <AppShell
      categoryOptions={categoryOptions}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    >
      <PagePlaceholder title="Trending" subtitle="What everyone is watching right now." />
    </AppShell>
  )
}
