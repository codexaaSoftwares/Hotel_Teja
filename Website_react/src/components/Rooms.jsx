import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Rooms = () => {
  const detailedRooms = [
    {
      image: '/assets/images/room/teja hotel - delux room.JPG',
      title: 'Deluxe Room',
      description: 'Big and comfortable room with AC, free WiFi, TV, and all modern facilities. Perfect for couples or business travelers in Lunawada.',
      size: '350 sq ft',
      capacity: '2 Guests',
      bed: 'King Size Bed',
      price: '₹2,500',
      amenities: ['Free WiFi', 'AC', 'TV', 'Mini Fridge', 'Room Service', 'Bathroom'],
      alt: 'Deluxe Room at Teja Hotel Lunawada - Spacious accommodation with modern amenities'
    },
    {
      image: '/assets/images/room/teja hotel - family room.JPG',
      title: 'Family Room',
      description: 'Large room perfect for families with children. Has two beds, extra space, and all amenities. Best family hotel room in Lunawada, Mahisagar.',
      size: '450 sq ft',
      capacity: '4-5 Guests',
      bed: '2 Queen Beds',
      price: '₹3,500',
      amenities: ['Free WiFi', 'AC', 'TV', 'Mini Fridge', 'Room Service', 'Extra Beds', 'Kids Amenities'],
      alt: 'Family Room at Teja Hotel Lunawada - Large family-friendly accommodation in Mahisagar'
    },
    {
      image: '/assets/images/room/teja hotel - standard room.JPG',
      title: 'Standard Room',
      description: 'Clean and comfortable AC room with all basic facilities. Great value for money. Perfect for short stays in Lunawada, Mahisagar.',
      size: '280 sq ft',
      capacity: '2 Guests',
      bed: 'Queen Size Bed',
      price: '₹1,800',
      amenities: ['Free WiFi', 'AC', 'TV', 'Room Service', 'Bathroom'],
      alt: 'Standard AC Room at Teja Hotel Lunawada - Comfortable accommodation with essential amenities'
    }
  ]

  return (
    <>
      <Helmet>
        {/* Meta tags only - title is set by main page Banner component */}
        <meta name="description" content="Book comfortable hotel rooms in Lunawada, Mahisagar. Teja Hotel offers Deluxe Rooms, Family Rooms, and Standard AC Rooms with AC, free WiFi, TV, and room service. Best hotel near Godhra-Lunawada highway for travelers and families." />
        <meta name="keywords" content="hotel rooms Lunawada, deluxe rooms Lunawada, family rooms Lunawada, AC rooms Lunawada, hotel accommodation Lunawada, Teja Hotel rooms" />
        <link rel="canonical" href="https://www.hotelteja.in/#rooms" />
      </Helmet>
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
                    Welcome to Teja Hotel in Lunawada, Mahisagar. We offer comfortable and clean hotel rooms for your stay. All our rooms have AC, free WiFi, TV, and room service. Choose from our Deluxe Rooms, Family Rooms, or Standard AC Rooms. We are the best hotel near the Godhra-Lunawada highway, perfect for travelers and families visiting Lunawada and Mahisagar.
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
    </>
  )
}

export default Rooms

