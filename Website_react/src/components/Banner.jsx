import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useRef, useEffect } from 'react'

const Banner = () => {
  const swiperRef = useRef(null)
  
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const slides = [
    {
      id: 1,
      image: "/assets/images/WhatsApp Image 2025-12-12 at 12.12.05 PM.jpeg",
      subtitle: ["Fine", "Dining", "Experience"],
      title: [
        ["Delicious", "Restaurant"],
        ["Food", "&", "Ambiance"]
      ],
      badges: ["Gujarati", "Punjabi", "Chinese", "South"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&h=1080&fit=crop",
      subtitle: ["Luxury", "Stay", "Experience"],
      title: [
        ["Comfortable", "Rooms"],
        ["Book", "Your", "Stay"]
      ],
      badges: ["Deluxe", "Family", "Standard", "AC"]
    },
    {
      id: 3,
      image: "/assets/images/banquet hall.jpg",
      subtitle: ["Celebrate", "Your", "Special", "Day"],
      title: [
        ["Birthday", "Parties"],
        ["&", "Events"]
      ],
      badges: ["Birthday Party", "Ring Ceremony", "Corporate Meetings"]
    }
  ]

  useEffect(() => {
    // Ensure autoplay is always running
    const checkAutoplay = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiper = swiperRef.current.swiper
        if (swiper.autoplay && !swiper.autoplay.running) {
          swiper.autoplay.start()
        }
      }
    }

    // Check immediately
    checkAutoplay()
    
    // Check periodically to ensure autoplay doesn't stop
    const interval = setInterval(checkAutoplay, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="banner-section banner-slider-section">
      <div className="banner-slider-wrapper">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            reverseDirection: false,
          }}
          speed={1500}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          className="banner-swiper"
          onSwiper={(swiper) => {
            // Force autoplay to start when swiper is ready
            setTimeout(() => {
              if (swiper && swiper.autoplay) {
                swiper.autoplay.start()
              }
            }, 100)
          }}
          onSlideChange={() => {
            // Ensure autoplay continues after slide change
            if (swiperRef.current && swiperRef.current.swiper) {
              const swiper = swiperRef.current.swiper
              if (swiper.autoplay && !swiper.autoplay.running) {
                swiper.autoplay.start()
              }
            }
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="banner-slide">
                <div 
                  className="banner-slide-bg"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
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
                              {slide.subtitle.map((word, index) => (
                                <span key={index} className="word">{word}</span>
                              ))}
                            </h1>
                          </div>
                          <h1 className="main-title title-gradient">
                            {slide.title.map((line, lineIndex) => (
                              <span key={lineIndex} className="title-line">
                                {line.map((word, wordIndex) => (
                                  <span key={wordIndex} className="word">{word}</span>
                                ))}
                              </span>
                            ))}
                          </h1>
                          <div className="banner-badges-wrapper">
                            {slide.badges.map((badge, badgeIndex) => (
                              <div key={badgeIndex} className="banner-badge">
                                <span>{badge}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Banner
