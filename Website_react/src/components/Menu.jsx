import { useState } from 'react'
import { motion } from 'framer-motion'
import { menuData } from '../data/menuData'

const Menu = () => {
  const [activeTab, setActiveTab] = useState('starters')

  const MenuItem = ({ item }) => (
    <tr>
      <td>
        <div className="col-one">
          <h4 className="title">{item.title}</h4>
          <span className="sub-title">{item.subtitle}</span>
        </div>
      </td>
      <td>
        <div className="col-two">
          <div className="count"></div>
        </div>
      </td>
      <td>
        <div className="col-three">
          <div className="price">{item.price}</div>
        </div>
      </td>
    </tr>
  )

  const tabs = [
    { id: 'starters', label: 'Starters', icon: '/assets/images/icon1.png' },
    { id: 'dishes', label: 'Dishes', icon: '/assets/images/icon2.png' },
    { id: 'desserts', label: 'Desserts', icon: '/assets/images/icon3.png' },
    { id: 'drinks', label: 'Drinks', icon: '/assets/images/icon4.png' }
  ]

  return (
    <section className="menu-section" id="menu">
      <img className="shape1" src="/assets/images/menu-left.png" alt="Decorative shape" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="menu-secrion-innner">
              <div className="row">
                <div className="col-lg-7">
                  <div className="section-header">
                    <motion.h6 
                      className="sub-title extra-padding"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      explore our menus
                    </motion.h6>
                    <motion.h2 
                      className="title extra-padding"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      Try Our Specialities
                    </motion.h2>
                  </div>
                  <div className="menu-tab-area">
                    <img className="shape-2" src="/assets/images/menu-right.png" alt="Decorative shape" />
                    <ul className="nav" role="tablist">
                      {tabs.map((tab) => (
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
                            <img src={tab.icon} alt={tab.label} />
                            {tab.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="tab-content">
                      {tabs.map((tab) => (
                        <div
                          key={tab.id}
                          className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                          role="tabpanel"
                        >
                          <div className="main-content">
                            <div className="table-responsive">
                              <table className="table">
                                <tbody>
                                  {menuData[tab.id].map((item, index) => (
                                    <MenuItem key={index} item={item} />
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="button-top text-center">
                    <a href="#" className="custom-button" onClick={(e) => { e.preventDefault() }}>View Full Menu</a>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="opening-time d-flex align-items-center">
                    <ul className="time-list">
                      <li>Monday.................12am - 10pm</li>
                      <li>Tuesday.................12am - 10pm</li>
                      <li>Wednesday.................12am - 10pm</li>
                      <li>Thursday.................12am - 10pm</li>
                      <li>Friday.................12am - 10pm</li>
                      <li>Saturday.................12am - 8pm</li>
                      <li>Sunday.................Closed</li>
                    </ul>
                    <div className="button">
                      <a href="#" className="bookbtn" onClick={(e) => { e.preventDefault() }}>Book a table</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu

