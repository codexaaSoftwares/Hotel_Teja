import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Events = () => {

  return (
    <>
      <Helmet>
        {/* Meta tags only - title is set by main page Banner component */}
        <meta name="description" content="Teja Banquet - Best banquet hall and event venue in Lunawada, Mahisagar. Perfect for birthday parties, corporate events, and family occasions. We provide projector, DJ-music, lights, and food catering service." />
        <meta name="keywords" content="Teja Banquet Lunawada, banquet hall Lunawada, event hall Lunawada, birthday party hall Lunawada, corporate events Lunawada, projector rental Lunawada, DJ music Lunawada, food catering Lunawada, family occasions Lunawada, event venue Mahisagar" />
        <link rel="canonical" href="https://www.hotelteja.in/#events" />
      </Helmet>
      <section className="event-section" id="events">
      <div className="container">
        <div className="row justify-content-center">
          {/* Content Section */}
          <div className="col-lg-10">
            <div className="section-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
              <motion.h6 
                className="sub-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                TEJA BANQUET
              </motion.h6>
              <motion.h2 
                className="title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Plan Your Next Event
              </motion.h2>
              <motion.p 
                className="text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px auto' }}
              >
                Welcome to Teja Banquet, the best banquet hall in Lunawada, Mahisagar. Perfect venue for birthday parties, corporate events, and family occasions. We provide projector, DJ-music, lights, and food catering service for your special day.
              </motion.p>
            </div>
            
            <div className="event-features">
              <motion.h4 
                style={{ 
                  marginBottom: '30px', 
                  fontSize: '26px', 
                  fontWeight: '700',
                  color: '#333',
                  textAlign: 'center'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Teja Banquet Services & Facilities
              </motion.h4>
              <div className="row">
                {[
                  { icon: '🎂', title: 'Birthday Parties', desc: 'Perfect birthday party at Teja Banquet in Lunawada' },
                  { icon: '💼', title: 'Corporate Events', desc: 'Business meetings and conferences at Teja Banquet' },
                  { icon: '📽️', title: 'Projector', desc: 'HD projector for presentations at Teja Banquet' },
                  { icon: '🎵', title: 'DJ & Music', desc: 'Professional sound system and DJ at Teja Banquet' },
                  { icon: '💡', title: 'Lights', desc: 'Decorative lighting and stage lights at Teja Banquet' },
                  { icon: '🍽️', title: 'Food Catering', desc: 'Delicious food service for events at Teja Banquet' },
                  { icon: '👨‍👩‍👧‍👦', title: 'Family Occasions', desc: 'Ring ceremonies and celebrations at Teja Banquet' }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="col-lg-6 col-md-6 col-sm-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="event-feature-card">
                      <div className="event-feature-icon">
                        {feature.icon}
                      </div>
                      <div className="event-feature-content">
                        <h5 className="event-feature-title">
                          {feature.title}
                        </h5>
                        <p className="event-feature-desc">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="event-booking-cta">
              <motion.a
                href="tel:+919104009138"
                className="event-book-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(220, 53, 69, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <i className="fas fa-phone-alt"></i>
                <span>Call to Book Now</span>
                <span className="phone-number">+91 9104009138</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Events

