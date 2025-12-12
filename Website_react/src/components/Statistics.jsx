import { motion } from 'framer-motion'

const Statistics = () => {
  const cuisines = [
    { icon: '/assets/images/stat01.png', label: 'GUJARATI' },
    { icon: '/assets/images/stat02.png', label: 'PUNJABI' },
    { icon: '/assets/images/stat03.png', label: 'SOUTH' },
    { icon: '/assets/images/stat04.png', label: 'CHINESE' }
  ]

  return (
    <section className="statistics-section" id="cuisines">
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
                  OUR CUISINES
                </motion.h6>
                <motion.h2 
                  className="title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  A Culinary Journey Across Lunawada
                </motion.h2>
                <motion.p 
                  className="text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Experience the rich and diverse flavors of India with our authentic cuisine selection. From the sweet and savory delights of Gujarat to the robust flavors of Punjab, the aromatic spices of Chinese cuisine, and the traditional taste of South India - we bring you the best of every region.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-wrapper">
          <div className="row">
            {cuisines.map((cuisine, index) => (
              <motion.div 
                key={index} 
                className="col-lg-3 col-sm-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-item">
                  <div className="icon">
                    <img src={cuisine.icon} alt={cuisine.label} />
                    <div className="stat-content">
                      <span className="info">{cuisine.label}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics

