import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Statistics = () => {
  const categories = [
    {
      id: 1,
      name: 'Punjabi',
      fullName: 'Punjabi Cuisine',
      image: '/assets/images/food/teja resturant punjabi.jpg',
      alt: 'Punjabi food at Teja Restaurant Lunawada, Mahisagar - Authentic North Indian cuisine',
      description: 'Authentic Punjabi food in Lunawada, Mahisagar. Traditional North Indian dishes with rich flavors and spices.'
    },
    {
      id: 2,
      name: 'Gujarati',
      fullName: 'Gujarati Cuisine',
      image: '/assets/images/food/teja resturant gujarati.jpg',
      alt: 'Gujarati food at Teja Restaurant Lunawada, Mahisagar - Traditional Gujarati thali and cuisine',
      description: 'Traditional Gujarati food in Lunawada, Mahisagar. Sweet and spicy flavors with authentic Gujarati thali.'
    },
    {
      id: 3,
      name: 'Chinese',
      fullName: 'Chinese Cuisine',
      image: '/assets/images/food/teja resturant chinese.jpg',
      alt: 'Chinese food at Teja Restaurant Lunawada, Mahisagar - Indo-Chinese dishes with fresh vegetables',
      description: 'Chinese food in Lunawada, Mahisagar. Indo-Chinese dishes with fresh vegetables and flavorful sauces.'
    },
    {
      id: 4,
      name: 'South',
      fullName: 'South Indian Cuisine',
      image: '/assets/images/food/teja resturant south indian.jpg',
      alt: 'South Indian food at Teja Restaurant Lunawada, Mahisagar - Traditional South Indian meals',
      description: 'South Indian food in Lunawada, Mahisagar. Traditional South Indian meals with rice, curry, and authentic flavors.'
    }
  ]

  // Generate structured data for MenuSection
  const menuSectionSchema = {
    "@context": "https://schema.org",
    "@type": "MenuSection",
    "name": "Our Cuisines - Teja Restaurant Lunawada",
    "description": "Best restaurant in Lunawada and Mahisagar serving authentic Punjabi food, Gujarati cuisine, Chinese dishes, and South Indian food.",
    "hasMenuSection": categories.map(category => ({
      "@type": "MenuSection",
      "name": `${category.fullName} - Teja Restaurant Lunawada`,
      "description": category.description,
      "image": `https://www.hotelteja.in${category.image}`
    }))
  }

  return (
    <>
      <Helmet>
        <title>Our Cuisines - Punjabi, Gujarati, Chinese & South Indian Food | Teja Restaurant Lunawada</title>
        <meta name="description" content="Explore our cuisines at Teja Restaurant in Lunawada, Mahisagar. Best Punjabi food, authentic Gujarati cuisine, Chinese dishes, and South Indian food. Traditional flavors in Lunawada, Gujarat." />
        <meta name="keywords" content="Punjabi food Lunawada, Gujarati food Lunawada, Chinese food Lunawada, South Indian food Lunawada, best restaurant Lunawada, Teja Restaurant cuisines, Mahisagar restaurant" />
        <link rel="canonical" href="https://www.hotelteja.in/#cuisines" />
        <meta property="og:title" content="Our Cuisines - Punjabi, Gujarati, Chinese & South Indian Food | Teja Restaurant Lunawada" />
        <meta property="og:description" content="Explore our cuisines at Teja Restaurant in Lunawada, Mahisagar. Best Punjabi food, authentic Gujarati cuisine, Chinese dishes, and South Indian food." />
        <meta property="og:url" content="https://www.hotelteja.in/#cuisines" />
        <meta property="og:image" content="https://www.hotelteja.in/assets/images/OUR CUISINES.png" />
        <meta name="twitter:title" content="Our Cuisines - Punjabi, Gujarati, Chinese & South Indian Food | Teja Restaurant Lunawada" />
        <meta name="twitter:description" content="Explore our cuisines at Teja Restaurant in Lunawada, Mahisagar. Best Punjabi food, authentic Gujarati cuisine, Chinese dishes, and South Indian food." />
        <meta name="twitter:image" content="https://www.hotelteja.in/assets/images/OUR CUISINES.png" />
        <script type="application/ld+json">
          {JSON.stringify(menuSectionSchema)}
        </script>
      </Helmet>
      <section className="statistics-section" id="cuisines" itemScope itemType="https://schema.org/MenuSection">
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
                  itemProp="name"
                >
                  Our Delicious Food Menu
                </motion.h2>
                <motion.p 
                  className="text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  itemProp="description"
                >
                  At Teja Restaurant in Lunawada, Mahisagar, we serve four types of authentic cuisine. Enjoy traditional Gujarati food with sweet and spicy flavors - the best Gujarati food in Lunawada. Try our spicy Punjabi dishes that are full of flavor - authentic Punjabi food in Mahisagar. Taste our Chinese food with fresh vegetables and sauces - delicious Chinese food in Lunawada. Or choose from our South Indian meals with rice and curry - traditional South Indian food in Mahisagar. All our food is made fresh daily with the best ingredients. Visit Teja Restaurant, the best restaurant in Lunawada and Mahisagar for authentic Indian cuisine.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-wrapper">
          <div className="row">
            {categories.map((category, index) => (
              <motion.article
                key={category.id}
                className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 mb-lg-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                itemScope
                itemType="https://schema.org/MenuSection"
              >
                <div className="food-category-card">
                  <figure 
                    className="category-image"
                    style={{
                      backgroundImage: `url('${category.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                    aria-label={category.alt}
                    itemProp="image"
                  >
                    {/* Hidden img for SEO - same as background image */}
                    <img 
                      src={category.image} 
                      alt={category.alt}
                      loading="lazy"
                      style={{ display: 'none' }}
                      itemProp="image"
                    />
                    <div className="category-overlay">
                      <h3 className="category-name" itemProp="name">
                        {category.name} Food
                        <span className="sr-only"> - {category.description}</span>
                      </h3>
                      <meta itemProp="description" content={category.description} />
                    </div>
                  </figure>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Statistics

