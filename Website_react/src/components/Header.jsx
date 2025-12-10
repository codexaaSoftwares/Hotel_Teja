import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Toggle overlay
    const overlay = document.querySelector('.overlay')
    if (overlay) {
      overlay.classList.toggle('active')
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    const overlay = document.querySelector('.overlay')
    if (overlay) {
      overlay.classList.remove('active')
    }
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header-section ${isSticky ? 'header-active' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <img src="/assets/images/logo.png" alt="Teja Restaurant & Hotel Logo" />
              <span className="logo-text">Hotel Teja</span>
            </a>
          </div>
          <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false) }}>Home</a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')}>Menu</a>
            </li>
            <li>
              <a href="#service" onClick={(e) => scrollToSection(e, 'service')}>Service</a>
            </li>
            <li>
              <a href="#events" onClick={(e) => scrollToSection(e, 'events')}>Events</a>
            </li>
            <li>
              <a href="#rooms" onClick={(e) => scrollToSection(e, 'rooms')}>Rooms</a>
            </li>
            <li>
              <a href="#visitus" onClick={(e) => scrollToSection(e, 'visitus')}>Visit Us</a>
            </li>
            <li>
              <a href="#" className="custom-button" onClick={(e) => { e.preventDefault() }}>Book A table</a>
            </li>
          </ul>
          <div className={`header-bar d-lg-none ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

