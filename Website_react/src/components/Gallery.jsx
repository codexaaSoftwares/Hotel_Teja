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
      image: '/assets/images/gallary/Front Images.webp',
      alt: 'Teja Hotel & Restaurant front view in Lunawada, Mahisagar - Best hotel near Godhra-Lunawada highway'
    },
    {
      image: '/assets/images/gallary/hotel teja 1.jpg',
      alt: 'Teja Hotel exterior view in Lunawada, Mahisagar - Comfortable hotel rooms and restaurant'
    },
    {
      image: '/assets/images/gallary/hotel teja 2.jpg',
      alt: 'Teja Hotel building in Lunawada, Gujarat - Best hotel accommodation in Mahisagar district'
    },
    {
      image: '/assets/images/gallary/hotel teja 3.jpg',
      alt: 'Teja Hotel & Restaurant in Lunawada - Hotel rooms and dining facilities in Mahisagar'
    },
    {
      image: '/assets/images/gallary/hotel_view_1.jpg',
      alt: 'Teja Hotel view in Lunawada, Mahisagar - Hotel rooms and restaurant near Godhra-Lunawada highway'
    },
    {
      image: '/assets/images/gallary/J_J_5842.JPG',
      alt: 'Teja Hotel & Restaurant interior in Lunawada, Mahisagar - Modern hotel facilities and dining area'
    },
    {
      image: '/assets/images/gallary/J_J_5845.JPG',
      alt: 'Teja Restaurant dining area in Lunawada, Gujarat - Best Punjabi food and Gujarati cuisine in Mahisagar'
    },
    {
      image: '/assets/images/gallary/J_J_5848.JPG',
      alt: 'Teja Hotel banquet hall in Lunawada, Mahisagar - Event hall and birthday party venue'
    },
    {
      image: '/assets/images/gallary/J_J_5849.JPG',
      alt: 'Teja Restaurant interior in Lunawada - Authentic Punjabi food and Gujarati cuisine in Mahisagar'
    },
    {
      image: '/assets/images/gallary/J_J_5853.JPG',
      alt: 'Teja Hotel & Restaurant gallery in Lunawada, Mahisagar - Hotel rooms and restaurant dining space'
    },
    {
      image: '/assets/images/gallary/J_J_5854.JPG',
      alt: 'Teja Hotel accommodation in Lunawada, Gujarat - Comfortable rooms and modern amenities in Mahisagar'
    },
    {
      image: '/assets/images/gallary/J_J_5857.JPG',
      alt: 'Teja Restaurant dining experience in Lunawada, Mahisagar - Best restaurant for Punjabi and Gujarati food'
    },
    {
      image: '/assets/images/gallary/J_J_5868.JPG',
      alt: 'Teja Hotel facilities in Lunawada, Gujarat - Hotel rooms with AC and modern amenities in Mahisagar'
    },
    {
      image: '/assets/images/gallary/J_J_5874.JPG',
      alt: 'Teja Hotel & Restaurant in Lunawada, Mahisagar - Family hotel rooms and restaurant near Godhra-Lunawada highway'
    },
    {
      image: '/assets/images/gallary/J_J_5877.JPG',
      alt: 'Teja Hotel rooms in Lunawada, Gujarat - Deluxe rooms and family accommodation in Mahisagar'
    },
    {
      image: '/assets/images/gallary/J_J_5885.JPG',
      alt: 'Teja Restaurant ambiance in Lunawada, Mahisagar - Best restaurant for authentic Punjabi and Gujarati food'
    },
    {
      image: '/assets/images/gallary/J_J_5907.JPG',
      alt: 'Teja Hotel & Restaurant in Lunawada, Gujarat - Hotel accommodation and dining facilities in Mahisagar'
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
                    See Our Hotel & Restaurant Photos
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
