import { useState } from 'react'
import { categoryOptions } from '../data/homeContent'
import { AppShell } from '../components/AppShell'
import { PagePlaceholder } from './PagePlaceholder'

export function ComingSoonPage() {
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0])

  return (
    <AppShell
      categoryOptions={categoryOptions}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    >
      <PagePlaceholder title="Coming soon" subtitle="Upcoming releases and reminders." />
    </AppShell>
  )
}
