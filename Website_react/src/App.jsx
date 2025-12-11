import { useEffect } from 'react'
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

function App() {
  useEffect(() => {
    // Initialize any React-specific functionality here
    // All third-party JS libraries have been replaced with React alternatives
  }, [])

  const handleOverlayClick = () => {
    // Close menu when overlay is clicked
    const menu = document.querySelector('.menu')
    const headerBar = document.querySelector('.header-bar')
    if (menu) menu.classList.remove('active')
    if (headerBar) headerBar.classList.remove('active')
    const overlay = document.querySelector('.overlay')
    if (overlay) overlay.classList.remove('active')
  }

  return (
    <div className="App">
      <Preloader />
      <div className="overlay" onClick={handleOverlayClick}></div>
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

