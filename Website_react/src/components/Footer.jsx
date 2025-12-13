import { motion } from 'framer-motion'

const Footer = () => {

  const socialLinks = [
    { 
      icon: 'fab fa-instagram', 
      href: 'https://www.instagram.com/hotel_teja_lunawada/',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
    }
  ]

  return (
    <footer className="footer-section">
      <img className="shape" src="/assets/images/footer-shape.png" alt="Teja Hotel & Restaurant footer decorative shape" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="top-area">
              <div className="logo">
                <img src="/assets/images/logo.png" alt="Teja Hotel & Restaurant Lunawada Logo" />
              </div>
              <div className="footer-social-links">
                <span className="label">Follow us :</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <img 
                          src={social.logo} 
                          alt="Follow Teja Hotel & Restaurant Lunawada on Instagram" 
                          className="instagram-logo"
                          onError={(e) => {
                            // Fallback to Font Awesome icon if image fails
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'inline-block';
                          }}
                        />
                        <i className={social.icon} style={{ display: 'none' }}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="info-box">
                  <div className="icon">
                    <img src="/assets/images/ii1.png" alt="Contact Teja Hotel Lunawada - Phone icon" />
                  </div>
                  <p>Phone Number:</p>
                  <p>9104009138</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-box">
                  <div className="icon">
                    <img src="/assets/images/ii2.png" alt="Teja Hotel location in Lunawada, Mahisagar - Location icon" />
                  </div>
                  <p>
                    GJ SH 175, Modasa - Godhra Hwy
                    <br />
                    Jesingpur, Lunawada, Gujarat 389230
                  </p>
                  <p style={{ marginTop: '10px' }}>
                    <a 
                      href="https://maps.app.goo.gl/AFbyHoQSjpiLwe7S6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#fff', textDecoration: 'underline' }}
                      aria-label="View Teja Hotel & Restaurant on Google Maps"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-box">
                  <div className="icon">
                    <img src="/assets/images/ii3.png" alt="Contact Teja Hotel Lunawada - Email icon" />
                  </div>
                  <p>Drop us a line:</p>
                  <p>tejahotel11@gmail.com</p>
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
            <div className="developer-credit" style={{ 
              textAlign: 'center', 
              marginTop: '15px', 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.8)',
              paddingTop: '15px',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              Developed by{' '}
              <a 
                href="https://www.codexaatech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#fff', 
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Codexaa Software Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

