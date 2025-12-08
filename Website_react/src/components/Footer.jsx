import { useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-google-plus-g', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' }
  ]

  return (
    <footer className="footer-section">
      <img className="shape" src="/assets/images/footer-shape.png" alt="Footer decorative shape" />
      <motion.img 
        className="f-left" 
        src="/assets/images/f-left.png" 
        alt="Footer decorative element"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.img 
        className="f-right" 
        src="/assets/images/f-right.png" 
        alt="Footer decorative element"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="top-area">
              <div className="logo">
                <img src="/assets/images/logo.png" alt="Teja Restaurant & Hotel Logo" />
              </div>
              <div className="footer-social-links">
                <span className="label">Follow us :</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.href} onClick={(e) => { e.preventDefault() }}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="newslater-wrapper">
              <form className="newslater-form" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="info-box">
                  <div className="icon">
                    <img src="/assets/images/ii1.png" alt="Phone icon" />
                  </div>
                  <p>Phone Number:</p>
                  <p>+1 111 000 111</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-box">
                  <div className="icon">
                    <img src="/assets/images/ii2.png" alt="Location icon" />
                  </div>
                  <p>
                    17 South Sherman Street
                    <br />
                    Astoria, NY 11106
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-box">
                  <div className="icon">
                    <img src="/assets/images/ii3.png" alt="Email icon" />
                  </div>
                  <p>Drop us a line:</p>
                  <p>hello@teja.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-text">
              &copy; 2025 Teja. All content, menu items, and text are the property of Teja. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

