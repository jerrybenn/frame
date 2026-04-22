import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ComingSoonPage } from './pages/ComingSoonPage/ComingSoonPage'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'
import { FilmDetailPage } from './pages/FilmDetailPage/FilmDetailPage'
import { HomePage } from './pages/HomePage/HomePage'
import { SettingsPage } from './pages/SettingsPage/SettingsPage'
import { SupportPage } from './pages/SupportPage/SupportPage'
import { TrendingPage } from './pages/TrendingPage/TrendingPage'

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
        <Route path="/title/:filmId" element={<FilmDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
