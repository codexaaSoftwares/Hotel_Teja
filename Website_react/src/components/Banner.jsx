import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section className="banner-section">
      <motion.img 
        className="img1" 
        src="/assets/images/aimg1.png" 
        alt="Decorative element"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <motion.img 
        className="img2" 
        src="/assets/images/aimg2.png" 
        alt="Decorative element"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <img className="img3" src="/assets/images/aimg3.png" alt="Decorative element" />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="main-content">
              <motion.h1 
                className="main-sub-title"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Best dishes &amp; ingredients
              </motion.h1>
              <motion.h1 
                className="main-title"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Always Delivering
                <br />
                Amazing Experience
              </motion.h1>
              <motion.a 
                href="#" 
                className="hero-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                onClick={(e) => { e.preventDefault() }}
              >
                Book With Confidence
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

