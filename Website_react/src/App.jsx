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
import Team from './components/Team'
import Events from './components/Events'
import Amenities from './components/Amenities'
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
      <Banner />
      <About />
      <Menu />
      <Statistics />
      <Services />
      <Rooms />
      <Team />
      <Events />
      <Amenities />
      <Footer />
    </div>
  )
}

export default App

