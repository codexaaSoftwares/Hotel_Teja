import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'

const Gallery = () => {
  const galleryImages = [
    {
      image: '/assets/images/J_J_5854.JPG',
      alt: 'Teja Hotel & Restaurant gallery - Interior view in Lunawada, Mahisagar'
    },
    {
      image: '/assets/images/J_J_5857.JPG',
      alt: 'Teja Hotel gallery - Dining area and ambiance in Lunawada'
    },
    {
      image: '/assets/images/J_J_5868.JPG',
      alt: 'Teja Restaurant gallery - Modern dining space in Lunawada, Gujarat'
    },
    {
      image: '/assets/images/J_J_5874.JPG',
      alt: 'Teja Hotel gallery - Hotel facilities and rooms in Lunawada'
    },
    {
      image: '/assets/images/J_J_5853.JPG',
      alt: 'Teja Restaurant gallery - Food presentation and dining experience in Lunawada'
    },
    {
      image: '/assets/images/J_J_5877.JPG',
      alt: 'Teja Hotel gallery - Accommodation and amenities in Lunawada, Mahisagar'
    },
    {
      image: '/assets/images/J_J_5848.JPG',
      alt: 'Teja Hotel & Restaurant gallery - Event space and banquet hall in Lunawada'
    },
    {
      image: '/assets/images/J_J_5842.JPG',
      alt: 'Teja Hotel gallery - Hotel exterior and facilities in Lunawada, Gujarat'
    }
  ]

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-carousel-wrapper">
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
                    Experience Luxury, Comfort & Culinary Delights
                  </motion.h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-swiper-container">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className="gallery-swiper"
          >
            {galleryImages.map((item, index) => (
              <SwiperSlide key={index} className="gallery-slide">
                <div className="gallery-image-wrapper">
                  <img src={item.image} alt={item.alt} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Gallery
