import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import PMFoundation from './pages/PMFoundation'
import PMEntertainment from './pages/PMEntertainment'
import Nantegh from './pages/Nantegh'
import Cyto from './pages/Cyto'
import Blacklaa from './pages/Blacklaa'
import Modeling from './pages/Modeling'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pm-foundation" element={<PMFoundation />} />
          <Route path="pm-entertainment" element={<PMEntertainment />} />
          <Route path="nantegh" element={<Nantegh />} />
          <Route path="cyto" element={<Cyto />} />
          <Route path="blacklaa" element={<Blacklaa />} />
          <Route path="modeling" element={<Modeling />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
