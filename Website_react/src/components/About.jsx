import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Teja Hotel & Restaurant Lunawada | Best Hotel & Dining in Mahisagar</title>
        <meta name="description" content="Learn about Teja Hotel & Restaurant in Lunawada, Mahisagar. Experience contemporary elegance, innovative cuisine, and excellent service. Ideal for business meetings, romantic evenings, and family dining." />
        <meta name="keywords" content="about Teja Hotel Lunawada, Teja Restaurant Lunawada, hotel restaurant Mahisagar, dining Lunawada" />
        <link rel="canonical" href="https://YOUR_DOMAIN_HERE/#restaurant" />
        <meta property="og:title" content="About Teja Hotel & Restaurant Lunawada | Best Hotel & Dining in Mahisagar" />
        <meta property="og:description" content="Learn about Teja Hotel & Restaurant in Lunawada, Mahisagar. Experience contemporary elegance, innovative cuisine, and excellent service." />
        <meta property="og:url" content="https://YOUR_DOMAIN_HERE/#restaurant" />
        <meta name="twitter:title" content="About Teja Hotel & Restaurant Lunawada | Best Hotel & Dining in Mahisagar" />
        <meta name="twitter:description" content="Learn about Teja Hotel & Restaurant in Lunawada, Mahisagar. Experience contemporary elegance, innovative cuisine, and excellent service." />
      </Helmet>
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
                alt="Teja Hotel & Restaurant interior in Lunawada, Mahisagar - Modern dining space" 
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
    </>
  )
}

export default About

