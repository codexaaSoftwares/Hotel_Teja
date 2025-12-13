import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Menu from './components/Menu'
import Statistics from './components/Statistics'
import Services from './components/Services'
import Rooms from './components/Rooms'
import BookingPlatforms from './components/BookingPlatforms'
import Events from './components/Events'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

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
      <About />
      {/* <Menu /> */}
      <Statistics />
      {/* <Services /> */}
      <Rooms />
      <BookingPlatforms />
      <Events />
      {/* <Amenities /> */}
      <Gallery />
      <Footer />
    </div>
  )
}

export default App

