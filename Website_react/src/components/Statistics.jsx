import { motion } from 'framer-motion'

const Statistics = () => {
  const categories = [
    {
      id: 1,
      name: 'Punjabi',
      image: '/assets/images/food/teja resturant punjabi.jpg'
    },
    {
      id: 2,
      name: 'Gujarati',
      image: '/assets/images/food/teja resturant gujarati.jpg'
    },
    {
      id: 3,
      name: 'Chinese',
      image: '/assets/images/food/teja resturant chinese.jpg'
    },
    {
      id: 4,
      name: 'South',
      image: '/assets/images/food/teja resturant south indian.jpg'
    }
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
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 mb-lg-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="food-category-card">
                  <div 
                    className="category-image"
                    style={{
                      backgroundImage: `url('${category.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="category-overlay">
                      <h3 className="category-name">{category.name}</h3>
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

