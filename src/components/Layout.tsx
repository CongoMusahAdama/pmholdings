import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'
import PageLoader from './PageLoader'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const location = useLocation()

  return (
    <>
      <PageLoader />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
