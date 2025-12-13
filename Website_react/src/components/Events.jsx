import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Events = () => {

  return (
    <>
      <Helmet>
        {/* Meta tags only - title is set by main page Banner component */}
        <meta name="description" content="Best event hall and birthday party hall in Lunawada, Mahisagar. Teja Hotel offers projector, DJ-music, lights, and food catering service for birthday parties, corporate events, and family occasions." />
        <meta name="keywords" content="event hall Lunawada, birthday party hall Lunawada, corporate events Lunawada, projector rental Lunawada, DJ music Lunawada, food catering Lunawada, family occasions Lunawada, banquet hall Lunawada, event venue Mahisagar" />
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
                PLAN YOUR NEXT
              </motion.h6>
              <motion.h2 
                className="title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                EVENT
              </motion.h2>
              <motion.p 
                className="text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px auto' }}
              >
                Perfect venue for birthday parties, corporate events, and family occasions in Lunawada, Mahisagar. We provide projector, DJ-music, lights, and food catering service.
              </motion.p>
            </div>
            
            <div className="event-features" style={{ 
              marginBottom: '40px', 
              padding: '40px', 
              background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
              borderRadius: '15px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}>
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
                Event Services & Facilities
              </motion.h4>
              <div className="row">
                {[
                  { icon: '🎂', title: 'Birthday Parties', desc: 'Perfect birthday party hall in Lunawada' },
                  { icon: '💼', title: 'Corporate Events', desc: 'Business meetings and conferences' },
                  { icon: '📽️', title: 'Projector', desc: 'HD projector for presentations' },
                  { icon: '🎵', title: 'DJ & Music', desc: 'Professional sound system and DJ' },
                  { icon: '💡', title: 'Lights', desc: 'Decorative lighting and stage lights' },
                  { icon: '🍽️', title: 'Food Catering', desc: 'Delicious food service for events' },
                  { icon: '👨‍👩‍👧‍👦', title: 'Family Occasions', desc: 'Ring ceremonies and celebrations' }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="col-lg-6 col-md-6 col-sm-6"
                    style={{ marginBottom: '25px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '15px',
                        padding: '20px',
                        background: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)'
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(220, 53, 69, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)'
                      }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '30px',
                        boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)'
                      }}>
                        {feature.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h5 style={{ 
                          margin: 0, 
                          fontSize: '18px', 
                          fontWeight: '700', 
                          marginBottom: '6px',
                          color: '#333'
                        }}>
                          {feature.title}
                        </h5>
                        <p style={{ 
                          margin: 0, 
                          fontSize: '14px', 
                          color: '#666',
                          lineHeight: '1.5'
                        }}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <motion.a
                href="tel:+919104009138"
                className="custom-button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)',
                  border: 'none',
                  cursor: 'pointer'
                }}
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
                <i className="fas fa-phone-alt" style={{ fontSize: '14px' }}></i>
                <span>Call to Book Now</span>
                <span style={{ fontSize: '12px', opacity: 0.9, marginLeft: '4px' }}>+91 9104009138</span>
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

