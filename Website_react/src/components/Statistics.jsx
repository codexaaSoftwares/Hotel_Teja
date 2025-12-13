import { motion } from 'framer-motion'

const Statistics = () => {
  const cuisines = [
    { icon: '/assets/images/OUR CUISINES.png', label: 'GUJARATI' },
    { icon: '/assets/images/OUR CUISINES.png', label: 'PUNJABI' },
    { icon: '/assets/images/OUR CUISINES.png', label: 'SOUTH' },
    { icon: '/assets/images/OUR CUISINES.png', label: 'CHINESE' }
  ]

  return (
    <section className="statistics-section" id="cuisines">
      <style>{`
        .statistics-section .stat-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .statistics-section .stat-item:hover {
          transform: translateY(-10px);
        }
        .statistics-section .stat-item:hover .icon img {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
        .statistics-section .stat-item:hover .info {
          color: #dc3545;
          font-weight: 600;
        }
      `}</style>
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
                  Our Delicious Food Menu
                </motion.h2>
                <motion.p 
                  className="text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  At Teja Restaurant in Lunawada, Mahisagar, we serve four types of tasty food. Enjoy traditional Gujarati food with sweet and spicy flavors. Try our spicy Punjabi dishes that are full of flavor. Taste our Chinese food with fresh vegetables and sauces. Or choose from our South Indian meals with rice and curry. All our food is made fresh daily with the best ingredients.
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
                    <img src={cuisine.icon} alt={`${cuisine.label} cuisine at Teja Restaurant Lunawada, Mahisagar`} />
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

