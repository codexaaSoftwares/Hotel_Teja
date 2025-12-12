import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slide data for thumbnails
  const slides = [
    {
      id: 1,
      thumbnail: "/assets/images/WhatsApp Image 2025-12-12 at 12.12.05 PM.jpeg",
      title: "Restaurant"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&h=1080&fit=crop",
      title: "Rooms"
    },
    {
      id: 3,
      thumbnail: "/assets/images/banquet hall.jpg",
      title: "Banquet"
    }
  ]

  // Custom Arrow Components
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} banner-arrow banner-arrow-next`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    )
  }

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} banner-arrow banner-arrow-prev`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    )
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    pauseOnHover: true,
    pauseOnFocus: false,
    arrows: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => {
      return (
        <div className="banner-thumbnail-item">
          <img 
            src={slides[i].thumbnail} 
            alt={slides[i].title}
            className="banner-thumbnail-img"
            onError={(e) => {
              console.error('Thumbnail image failed to load:', slides[i].thumbnail);
            }}
          />
        </div>
      )
    }
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="banner-section banner-slider-section">
      <div className="banner-slider-wrapper">
        <Slider {...sliderSettings} className="banner-slider">
          {/* Slide 1 - Hero/Restaurant */}
          <div className="banner-slide banner-slide-hero">
            <div 
              className="banner-slide-bg"
              style={{
                backgroundImage: "url('/assets/images/WhatsApp Image 2025-12-12 at 12.12.05 PM.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="banner-overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-content banner-content-animate">
                      <div className="sub-title-wrapper">
                        <span className="title-accent"></span>
                        <h1 className="main-sub-title">
                          <span className="word">Best</span>
                          <span className="word">dishes</span>
                          <span className="word">&amp;</span>
                          <span className="word">ingredients</span>
                        </h1>
                      </div>
                      <h1 className="main-title title-gradient">
                        <span className="title-line">
                          <span className="word">Always</span>
                          <span className="word">Delivering</span>
                        </span>
                        <span className="title-line">
                          <span className="word">Amazing</span>
                          <span className="word">Experience</span>
                        </span>
                      </h1>
                      <a 
                        href="#booking" 
                        className="hero-btn"
                        onClick={(e) => scrollToSection(e, 'booking')}
                      >
                        <span>Book With Confidence</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Rooms */}
          <div className="banner-slide banner-slide-rooms">
            <div 
              className="banner-slide-bg"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&h=1080&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="banner-overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-content banner-content-animate">
                      <div className="sub-title-wrapper">
                        <span className="title-accent"></span>
                        <h1 className="main-sub-title">
                          <span className="word">Luxury</span>
                          <span className="word">Accommodation</span>
                        </h1>
                      </div>
                      <h1 className="main-title title-gradient">
                        <span className="title-line">
                          <span className="word">Comfortable</span>
                          <span className="word">Rooms</span>
                        </span>
                        <span className="title-line">
                          <span className="word">For</span>
                          <span className="word">Your</span>
                          <span className="word">Stay</span>
                        </span>
                      </h1>
                      <a 
                        href="#rooms" 
                        className="hero-btn"
                        onClick={(e) => scrollToSection(e, 'rooms')}
                      >
                        <span>Explore Our Rooms</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 - Banquet */}
          <div className="banner-slide banner-slide-banquet">
            <div 
              className="banner-slide-bg"
              style={{
                backgroundImage: "url('/assets/images/banquet hall.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="banner-overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-content banner-content-animate">
                      <div className="sub-title-wrapper">
                        <span className="title-accent"></span>
                        <h1 className="main-sub-title">
                          <span className="word">Plan</span>
                          <span className="word">Your</span>
                          <span className="word">Next</span>
                          <span className="word">Event</span>
                        </h1>
                      </div>
                      <h1 className="main-title title-gradient">
                        <span className="title-line">
                          <span className="word">Elegant</span>
                          <span className="word">Banquet</span>
                        </span>
                        <span className="title-line">
                          <span className="word">For</span>
                          <span className="word">Special</span>
                          <span className="word">Occasions</span>
                        </span>
                      </h1>
                      <a 
                        href="#events" 
                        className="hero-btn"
                        onClick={(e) => scrollToSection(e, 'events')}
                      >
                        <span>Book Your Event</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Banner

