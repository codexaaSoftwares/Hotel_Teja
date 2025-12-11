import { motion } from 'framer-motion'

const Amenities = () => {
  const amenities = [
    { icon: '/assets/images/ic1(1).png', text: 'Parking Available' },
    { icon: '/assets/images/ic3(1).png', text: 'Menu à la Carte' },
    { icon: '/assets/images/icon1.png', text: 'Free WiFi' },
    { icon: '/assets/images/icon2.png', text: 'AC' },
    { icon: '/assets/images/icon3.png', text: 'TV' },
    { icon: '/assets/images/icon4.png', text: 'Mini Fridge' },
    { icon: '/assets/images/ic1.png', text: 'Room Service' },
    { icon: '/assets/images/ic2.png', text: 'Bathroom' },
    { icon: '/assets/images/ic3.png', text: 'Extra Beds' }
  ]

  return (
    <section className="amenities-section" id="visitus">
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
                  AMENITIES
                </motion.h6>
                <motion.h2 
                  className="title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Make Plans To Visit Us
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {amenities.map((amenity, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="single-amenities">
                <div className="icon">
                  <img src={amenity.icon} alt={amenity.text} />
                </div>
                <p className="text">{amenity.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities

