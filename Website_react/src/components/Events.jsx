import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Events = () => {
  const [activeTab, setActiveTab] = useState('tabone')

  const eventTabs = [
    { 
      id: 'tabone', 
      icon: '/assets/images/ic1.png',
      image: '/assets/images/event1.png'
    },
    { 
      id: 'tabtwo', 
      icon: '/assets/images/ic2.png',
      image: '/assets/images/service1.jpg'
    },
    { 
      id: 'tabthree', 
      icon: '/assets/images/ic3.png',
      image: '/assets/images/service2.jpg'
    }
  ]

  const activeEvent = eventTabs.find(tab => tab.id === activeTab) || eventTabs[0]

  return (
    <section className="event-section" id="events">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 d-flex flex-column justify-content-between">
            <div className="section-header">
              <motion.h6 
                className="sub-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                PLAN YOUR NEXT
              </motion.h6>
              <motion.h2 
                className="title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                EVENT
              </motion.h2>
              <p className="text">
                Transform your Event
                <br />
                from Ordinary to Extraordinary
              </p>
            </div>
            <div className="section-footer">
              <ul className="nav" role="tablist">
                {eventTabs.map((tab) => (
                  <li key={tab.id} className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveTab(tab.id)
                      }}
                      role="tab"
                      href={`#${tab.id}`}
                    >
                      <div className="icon">
                        <img src={tab.icon} alt={`Event type ${tab.id}`} />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="main-content">
              <div className="tab-content">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="tab-pane active"
                    role="tabpanel"
                  >
                    <div className="event-img">
                      <img src={activeEvent.image} alt="Event" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

