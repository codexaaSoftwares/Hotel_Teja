import { motion } from 'framer-motion'

const FoodCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Punjabi',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Gujarati',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Chinese',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'South',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80'
    }
  ]

  return (
    <section className="food-categories-section">
      <div className="container">
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
    </section>
  )
}

export default FoodCategories

