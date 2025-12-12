import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="about-section" id="restaurant">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="section-header">
                <motion.h6 
                  className="sub-title extra-padding"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  ABOUT US
                </motion.h6>
                <motion.h2 
                  className="title extra-padding"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Dedicated To 
                  <br />
                  Delight You     
                </motion.h2>
                <p>
                  Discover a culinary haven at Teja, where a diverse menu awaits. Savor the flavors of North Indian, Chinese, Gujarati, South Indian, Pizza, Sandwiches, and more. Indulge in a delightful array of beverages. Experience a gastronomic journey like no other.
                </p>
                <p>
                  Teja blends contemporary elegance and comfort with innovative cuisine and excellent service. The original menu and unique decor make Teja an ideal setting for business meetings, romantic 
                  evenings, or a night out with friends.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="img">
              <motion.img 
                src="/assets/images/J_J_5849.JPG" 
                alt="Hotel Teja Restaurant Interior" 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ width: '145%', height: 'auto', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 10px 40px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

