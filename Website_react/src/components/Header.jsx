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

  // Close menu when clicking outside or on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMenuOpen(false)
      }
    }

    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.header-wrapper')) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    // Dispatch event for overlay sync
    window.dispatchEvent(new CustomEvent('menuToggle', { detail: { isOpen: newState } }))
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    window.dispatchEvent(new CustomEvent('menuToggle', { detail: { isOpen: false } }))
  }

  // Listen for close menu events
  useEffect(() => {
    const handleCloseMenu = () => {
      setIsMenuOpen(false)
    }
    window.addEventListener('closeMenu', handleCloseMenu)
    return () => window.removeEventListener('closeMenu', handleCloseMenu)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <header className={`header-section ${isSticky ? 'header-active' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu() }}>
              <img src="/assets/images/logo.png" alt="Teja Restaurant & Hotel Logo" />
              <span className="logo-text">Hotel Teja</span>
            </a>
          </div>
          <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#cuisines" onClick={(e) => scrollToSection(e, 'cuisines')}>Restaurant</a>
            </li>
            <li>
              <a href="#rooms" onClick={(e) => scrollToSection(e, 'rooms')}>Hotel & Room</a>
            </li>
            <li>
              <a href="#events" onClick={(e) => scrollToSection(e, 'events')}>Banquet</a>
            </li>
          </ul>
          <div 
            className={`header-bar d-lg-none ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleMenu()
              }
            }}
          >
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

