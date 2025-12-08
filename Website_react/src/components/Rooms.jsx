import { motion } from 'framer-motion'

const Rooms = () => {
  const rooms = [
    {
      image: '/assets/images/service1.jpg',
      title: 'Deluxe Room',
      description: 'Spacious and comfortable room with modern amenities, perfect for a relaxing stay.',
      alt: 'Deluxe Room'
    },
    {
      image: '/assets/images/service2.jpg',
      title: 'Suite Room',
      description: 'Luxurious suite with separate living area, ideal for extended stays and special occasions.',
      alt: 'Suite Room'
    },
    {
      image: '/assets/images/service3.jpg',
      title: 'Family Room',
      description: 'Large family-friendly room with extra space and amenities for families traveling together.',
      alt: 'Family Room'
    }
  ]

  return (
    <section className="service-section" id="rooms">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <div className="section-header white-color">
                <motion.h6 
                  className="sub-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Accommodation
                </motion.h6>
                <motion.h2 
                  className="title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Our Hotel Rooms
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {rooms.map((room, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="img">
                  <img src={room.image} alt={room.alt} />
                </div>
                <div className="content">
                  <h4 className="title">{room.title}</h4>
                  <p className="text">{room.description}</p>
                  <a href="#" onClick={(e) => { e.preventDefault() }}>
                    Book Now <img src="/assets/images/arrow.png" alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms

