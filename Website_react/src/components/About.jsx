import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
        {/* Meta tags only - title is set by main page Banner component */}
        <meta name="description" content="Teja Hotel & Restaurant - Best restaurant in Lunawada and Mahisagar serving authentic Punjabi food, Gujarati cuisine, Chinese dishes, and South Indian food. Located near Godhra-Lunawada highway. Perfect for family dining and celebrations." />
        <meta name="keywords" content="about Teja Hotel Lunawada, Teja Restaurant Lunawada, hotel restaurant Mahisagar, dining Lunawada" />
        <link rel="canonical" href="https://www.hotelteja.in/#restaurant" />
      </Helmet>
      <section className="about-section" id="restaurant">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
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
                  Welcome to Teja Hotel & Restaurant, the best restaurant in Lunawada and Mahisagar. We serve fresh, tasty food every day. Our menu includes spicy Punjabi dishes, traditional Gujarati food, Chinese food, South Indian meals, and delicious snacks. After your meal, you can relax in <a href="#rooms">our comfortable hotel rooms</a> in Lunawada.
                </p>
                <p>
                  Teja Restaurant is located near the Godhra-Lunawada highway, making it easy to find. We use fresh ingredients and traditional recipes to make every meal special. Come visit us in Lunawada, Mahisagar, and taste the best Punjabi food and Gujarati cuisine in the area, then explore more of <a href="#cuisines">our delicious cuisines</a> and <a href="#gallery">view our hotel photos</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 align-self-center">
              <div className="img">
            <motion.img 
                src="/assets/images/image_thali.png" 
                alt="Teja Hotel & Restaurant traditional Indian thali meal in Lunawada, Mahisagar - Authentic cuisine" 
                loading="lazy"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
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

