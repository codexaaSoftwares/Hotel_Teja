import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      image: '/assets/images/service1.jpg',
      title: 'Buffet Service',
      description: 'Provides you with buffet service in the morning, at noon and at night.',
      linkText: 'Book Now'
    },
    {
      image: '/assets/images/service2.jpg',
      title: 'Food Delivery',
      description: 'Provides you with buffet service in the morning, at noon and at night.',
      linkText: 'Learn More'
    },
    {
      image: '/assets/images/service3.jpg',
      title: 'Cafeteria',
      description: 'Provides you with buffet service in the morning, at noon and at night.',
      linkText: 'Learn More'
    }
  ]

  return (
    <section className="service-section" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <div className="section-header white-color">
                <motion.h6 
                  className="sub-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Services
                </motion.h6>
                <motion.h2 
                  className="title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  What We Can Do For You
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-box">
                <div className="img">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="content">
                  <h4 className="title">{service.title}</h4>
                  <p className="text">{service.description}</p>
                  <a href="#" onClick={(e) => { e.preventDefault() }}>
                    {service.linkText} <img src="/assets/images/arrow.png" alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

