import { motion } from 'framer-motion'

const BookingPlatforms = () => {
  const platforms = [
    { 
      name: 'Zomato', 
      type: 'food',
      url: 'https://www.zomato.com/lunawada/teja-hotel-lunawada-locality/order',
      color: '#E23744',
      logo: 'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png',
      logoType: 'image'
    },
    { 
      name: 'MakeMyTrip', 
      type: 'booking',
      url: 'https://www.makemytrip.com',
      color: '#E23744',
      logo: '/assets/images/MMT logo.jpeg',
      logoType: 'image',
      logoBg: 'transparent'
    },
    { 
      name: 'Goibibo', 
      type: 'booking',
      url: 'https://www.goibibo.com',
      color: '#FF5722',
      logo: '/assets/images/Goibibo logo.jpeg',
      logoType: 'image',
      logoBg: 'transparent'
    },
    { 
      name: 'Booking.com', 
      type: 'booking',
      url: 'https://www.booking.com/hotel/in/teja-lunawada.html?aid=304142&label=gen173nr-10CAsobEINdGVqYS1sdW5hd2FkYUgzWARobIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCzYblyQbAAgHSAiRhMzE5OTJlNC05Yzk5LTRhMjQtOWFiOC02ZWM5NTMzOGM3MGTYAgHgAgE&sid=4286e817bfa83d425b0d8706e0d2ba5a&all_sr_blocks=1542568601_425618987_2_1_0&checkin=2025-12-16&checkout=2025-12-17&dest_id=-2102868&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1542568601_425618987_2_1_0&hpos=1&matching_block_id=1542568601_425618987_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1542568601_425618987_2_1_0__190000&srepoch=1765545565&srpvid=faf35dae1b820fff&type=total&ucfs=1&',
      color: '#003580',
      logo: 'https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png',
      logoType: 'image'
    }
  ]

  return (
    <section className="booking-platforms-section" id="booking">
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
                  BOOK WITH US
                </motion.h6>
                <motion.h2 
                  className="title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  We're Waiting For You!
                </motion.h2>
                <motion.p 
                  className="section-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Book your stay with us through your preferred platform and enjoy a memorable experience
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {platforms.map((platform, index) => (
            <motion.div 
              key={index} 
              className="col-lg-3 col-md-6 col-sm-6 col-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="platform-card">
                <a 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="platform-link"
                >
                  <div className="platform-logo-wrapper">
                    <div 
                      className="platform-logo" 
                      style={{ 
                        backgroundColor: platform.logoBg || platform.color,
                        background: platform.logoBg === 'transparent' ? 'transparent' : platform.color
                      }}
                    >
                      {platform.logoType === 'image' ? (
                        <img 
                          src={platform.logo} 
                          alt={platform.name}
                          className="platform-logo-img"
                          style={{
                            filter: platform.logoBg === 'transparent' ? 'none' : 'brightness(0) invert(1)'
                          }}
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            e.target.style.display = 'none';
                            const fallback = e.target.nextSibling;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <span className="logo-text" style={{ display: platform.logoType === 'image' ? 'none' : 'block' }}>
                        {platform.logo}
                      </span>
                    </div>
                  </div>
                  <div className="platform-info">
                    <h4 className="platform-name">{platform.name}</h4>
                    <span className="platform-badge">
                      {platform.type === 'food' ? 'Available on' : 'Book on'}
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookingPlatforms

