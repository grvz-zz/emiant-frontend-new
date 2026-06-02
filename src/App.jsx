import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar         from './components/Navbar'
import Footer         from './components/Footer'

// Pages
import HomePage       from './pages/HomePage'
import SiphothermPage from './pages/SiphothermPage'
import AboutPage      from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"           element={<HomePage />} />
          <Route path="/siphotherm" element={<SiphothermPage />} />
          <Route path="/about"      element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
