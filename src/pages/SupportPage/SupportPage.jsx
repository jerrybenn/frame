import { useState } from 'react'
import { AppShell } from '../../components/AppShell/AppShell'
import { categoryOptions } from '../../data/homeContent'
import { PagePlaceholder } from '../PagePlaceholder/PagePlaceholder'
import './SupportPage.css'

export function SupportPage() {
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0])

  return (
    <AppShell
      categoryOptions={categoryOptions}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    >
      <PagePlaceholder title="Support" subtitle="Help center and contact options." />
    </AppShell>
  )
}
