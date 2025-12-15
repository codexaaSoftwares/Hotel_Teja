import { useState, useEffect } from 'react'

const Header = () => {
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

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`header-section ${isSticky ? 'header-active' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo logo-centered">
            <a href="#" onClick={scrollToTop}>
              <img src="/assets/images/logo.png" alt="Teja Restaurant & Hotel Logo" />
              <span className="logo-text">Hotel Teja</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

