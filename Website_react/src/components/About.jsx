import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="about-section">
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
              <img src="/assets/images/sign.png" alt="Signature" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="img">
              <img className="bg-shape" src="/assets/images/vegetales-shapes.png" alt="Decorative shapes" />
              <img src="/assets/images/Image.png" alt="Restaurant interior" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

