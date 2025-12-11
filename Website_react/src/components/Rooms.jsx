import { motion } from 'framer-motion'

const Rooms = () => {
  const detailedRooms = [
    {
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
      title: 'Deluxe Room',
      description: 'Spacious and elegantly designed room with modern amenities.',
      size: '350 sq ft',
      capacity: '2 Guests',
      bed: 'King Size Bed',
      price: '₹2,500',
      amenities: ['Free WiFi', 'AC', 'TV', 'Mini Fridge', 'Room Service', 'Bathroom'],
      alt: 'Deluxe Room'
    },
    {
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
      title: 'Family Room',
      description: 'Large family-friendly room with extra space and amenities.',
      size: '450 sq ft',
      capacity: '4-5 Guests',
      bed: '2 Queen Beds',
      price: '₹3,500',
      amenities: ['Free WiFi', 'AC', 'TV', 'Mini Fridge', 'Room Service', 'Extra Beds', 'Kids Amenities'],
      alt: 'Family Room'
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      title: 'Standard Room',
      description: 'Comfortable and well-appointed room with all essential amenities.',
      size: '280 sq ft',
      capacity: '2 Guests',
      bed: 'Queen Size Bed',
      price: '₹1,800',
      amenities: ['Free WiFi', 'AC', 'TV', 'Room Service', 'Bathroom'],
      alt: 'Standard Room'
    }
  ]

  return (
    <section className="rooms-section" id="rooms">
      {/* Detailed Rooms Section */}
      <div className="rooms-header-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content">
                <div className="section-header">
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
                  <motion.p 
                    className="section-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Experience comfort and luxury in our thoughtfully designed rooms. Each room is equipped with modern amenities 
                    to ensure a memorable stay. From cozy standard rooms to luxurious suites, we have the perfect accommodation for every guest.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
          {detailedRooms.map((room, index) => (
            <motion.div 
              key={index} 
              className={index === 0 ? "col-lg-12" : "col-lg-6 col-md-6"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {room.title === 'Deluxe Room' ? (
                <div className="room-box room-box-fullwidth">
                  <div className="room-image">
                    <img src={room.image} alt={room.alt} />
                    <div className="room-hero-overlay">
                      <div className="room-hero-content">
                        <h4 className="room-hero-title">{room.title}</h4>
                        <p className="room-hero-description">{room.description}</p>
                        <div className="room-hero-details">
                          <div className="detail-item">
                            <i className="fas fa-ruler-combined"></i>
                            <span>{room.size}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-users"></i>
                            <span>{room.capacity}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-bed"></i>
                            <span>{room.bed}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="room-box room-box-hero-grid">
                  <div className="room-image room-image-hero-grid">
                    <img src={room.image} alt={room.alt} />
                    <div className="room-hero-overlay room-hero-overlay-grid">
                      <div className="room-hero-content room-hero-content-grid">
                        <h4 className="room-hero-title room-hero-title-grid">{room.title}</h4>
                        <p className="room-hero-description room-hero-description-grid">{room.description}</p>
                        <div className="room-hero-details room-hero-details-grid">
                          <div className="detail-item">
                            <i className="fas fa-ruler-combined"></i>
                            <span>{room.size}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-users"></i>
                            <span>{room.capacity}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-bed"></i>
                            <span>{room.bed}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms

