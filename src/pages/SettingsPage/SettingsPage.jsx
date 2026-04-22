import { useState } from 'react'
import { AppShell } from '../../components/AppShell/AppShell'
import { categoryOptions } from '../../data/homeContent'
import { PagePlaceholder } from '../PagePlaceholder/PagePlaceholder'
import './SettingsPage.css'

export function SettingsPage() {
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0])

  return (
    <AppShell
      categoryOptions={categoryOptions}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    >
      <PagePlaceholder title="Settings" subtitle="Account, playback, and preferences." />
    </AppShell>
  )
}
