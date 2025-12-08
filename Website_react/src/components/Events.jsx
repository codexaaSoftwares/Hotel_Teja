import { useState } from 'react'
import { motion } from 'framer-motion'

const Events = () => {
  const [activeTab, setActiveTab] = useState('tabone')

  const eventTabs = [
    { id: 'tabone', icon: '/assets/images/ic1.png' },
    { id: 'tabtwo', icon: '/assets/images/ic2.png' },
    { id: 'tabthree', icon: '/assets/images/ic3.png' }
  ]

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
              <a href="#" className="book-btn" onClick={(e) => { e.preventDefault() }}>
                Book Now <img src="/assets/images/icon.png" alt="Book icon" />
              </a>
              <div className="tab-content">
                {eventTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                    role="tabpanel"
                  >
                    <div className="event-img">
                      <img src="/assets/images/event1.png" alt="Event" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

