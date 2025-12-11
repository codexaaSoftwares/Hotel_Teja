import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  const rooms = [
    {
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
      title: 'Deluxe Room',
      price: '₹2,500',
      alt: 'Deluxe Room'
    },
    {
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      title: 'Suite Room',
      price: '₹4,500',
      alt: 'Suite Room'
    },
    {
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
      title: 'Family Room',
      price: '₹3,500',
      alt: 'Family Room'
    },
    {
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
      title: 'Executive Room',
      price: '₹3,200',
      alt: 'Executive Room'
    },
    {
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      title: 'Presidential Suite',
      price: '₹8,500',
      alt: 'Presidential Suite'
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      title: 'Standard Room',
      price: '₹1,800',
      alt: 'Standard Room'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rooms.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [rooms.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getCardStyle = (index) => {
    const offset = index - currentIndex
    const absOffset = Math.abs(offset)

    let translateX = offset * 320
    let translateZ = -absOffset * 50
    let scale = 1 - absOffset * 0.15
    let opacity = 1 - absOffset * 0.3
    let rotateY = offset * 15

    if (absOffset > 2) {
      opacity = 0.1
      scale = 0.7
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity: Math.max(opacity, 0.1),
      zIndex: rooms.length - absOffset,
    }
  }

  return (
    <section className="gallery-section" id="gallery">
      <div className="rooms-banner-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="content">
                <div className="section-header">
                  <motion.h6 
                    className="sub-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    OUR GALLERY
                  </motion.h6>
                  <motion.h2 
                    className="title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Experience Luxury & Comfort
                  </motion.h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rooms-slider-wrapper" ref={sliderRef}>
          <div className="rooms-slider-3d">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`room-slide-card ${index === currentIndex ? 'active' : ''}`}
                style={getCardStyle(index)}
                onClick={() => goToSlide(index)}
              >
                <div className="room-slide-image">
                  <img src={room.image} alt={room.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rooms-slider-dots">
          {rooms.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="rooms-slider-nav">
          <button 
            className="slider-nav-btn prev"
            onClick={() => goToSlide((currentIndex - 1 + rooms.length) % rooms.length)}
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="slider-nav-btn next"
            onClick={() => goToSlide((currentIndex + 1) % rooms.length)}
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery

