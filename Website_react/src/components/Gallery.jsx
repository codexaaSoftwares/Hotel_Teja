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
      alt: 'Hotel Gallery Image 1'
    },
    {
      image: '/assets/images/J_J_5857.JPG',
      alt: 'Hotel Gallery Image 2'
    },
    {
      image: '/assets/images/J_J_5868.JPG',
      alt: 'Hotel Gallery Image 3'
    },
    {
      image: '/assets/images/J_J_5874.JPG',
      alt: 'Hotel Gallery Image 4'
    },
    {
      image: '/assets/images/J_J_5853.JPG',
      alt: 'Hotel Gallery Image 5'
    },
    {
      image: '/assets/images/J_J_5877.JPG',
      alt: 'Hotel Gallery Image 6'
    },
    {
      image: '/assets/images/J_J_5848.JPG',
      alt: 'Hotel Gallery Image 7'
    },
    {
      image: '/assets/images/J_J_5842.JPG',
      alt: 'Hotel Gallery Image 8'
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
