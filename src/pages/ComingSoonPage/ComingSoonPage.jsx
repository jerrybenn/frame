import { useState } from 'react'
import { AppShell } from '../../components/AppShell/AppShell'
import { categoryOptions } from '../../data/homeContent'
import { PagePlaceholder } from '../PagePlaceholder/PagePlaceholder'
import './ComingSoonPage.css'

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
