import React, { useEffect, useState, Suspense } from 'react'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Banner from './components/Banner'
import StructuredData from './components/StructuredData'

// Lazy-load below-the-fold sections to reduce initial JS and improve performance
const About = React.lazy(() => import('./components/About'))
const Statistics = React.lazy(() => import('./components/Statistics'))
const Rooms = React.lazy(() => import('./components/Rooms'))
const BookingPlatforms = React.lazy(() => import('./components/BookingPlatforms'))
const Events = React.lazy(() => import('./components/Events'))
const Gallery = React.lazy(() => import('./components/Gallery'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  const [isOverlayActive, setIsOverlayActive] = useState(false)

  useEffect(() => {
    // Initialize any React-specific functionality here
    // All third-party JS libraries have been replaced with React alternatives
  }, [])

  // Sync overlay with menu state via event
  useEffect(() => {
    const handleMenuToggle = (e) => {
      setIsOverlayActive(e.detail.isOpen)
    }

    window.addEventListener('menuToggle', handleMenuToggle)
    return () => window.removeEventListener('menuToggle', handleMenuToggle)
  }, [])

  const handleOverlayClick = () => {
    setIsOverlayActive(false)
    // Dispatch event to close menu
    window.dispatchEvent(new CustomEvent('closeMenu'))
  }

  return (
    <div className="App">
      <StructuredData />
      <Preloader />
      <div className={`overlay ${isOverlayActive ? 'active' : ''}`} onClick={handleOverlayClick}></div>
      <ScrollToTop />
      <Header />
      {/* Fixed Instagram Logo on Side - Same as Footer */}
      <a 
        href="https://www.instagram.com/hotel_teja_lunawada/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed-instagram-logo"
        aria-label="Follow us on Instagram"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
          alt="Instagram" 
          className="instagram-logo"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'inline-block';
          }}
        />
        <i className="fab fa-instagram" style={{ display: 'none' }}></i>
      </a>
      <Banner />
      <Suspense fallback={null}>
        <About />
        <Statistics />
        <Rooms />
        <BookingPlatforms />
        <Events />
        <Gallery />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App

