import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ComingSoonPage } from './pages/ComingSoonPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { HomePage } from './pages/HomePage'
import { SettingsPage } from './pages/SettingsPage'
import { SupportPage } from './pages/SupportPage'
import { TrendingPage } from './pages/TrendingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
