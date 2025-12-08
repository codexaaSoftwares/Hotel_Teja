import { useEffect, useState } from 'react'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide preloader when page is loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader" style={{ display: isLoading ? 'flex' : 'none' }}>
      <div className="preloader-inner">
        <div className="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Preloader

