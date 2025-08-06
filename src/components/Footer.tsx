import { FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

export function Footer() {
  const navigate = useNavigate()

  const handleServiceClick = (sectionId: string) => {
    navigate('/services')
    // Wait for navigation to complete, then scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleCompanyClick = (path: string) => {
    navigate(path)
    // Wait for navigation to complete, then scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-info">
                <h3>Block Software Inc.</h3>
                <p>
                  We create custom software solutions that help businesses thrive 
                  in the digital age. From web applications to blockchain development.
                </p>
              </div>
              <div className="footer-contact">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:contact@blocksoftware.ca">contact@blocksoftware.ca</a>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Charlottetown, PE, Canada</span>
                </div>
              </div>
            </div>
            
            <div className="footer-links-section">
              <div className="footer-column">
                <h4>Services</h4>
                <ul className="footer-links">
                  <li><button onClick={() => handleServiceClick('web')} className="footer-service-link">Web Applications</button></li>
                  <li><button onClick={() => handleServiceClick('software')} className="footer-service-link">Custom Software</button></li>
                  <li><button onClick={() => handleServiceClick('web3')} className="footer-service-link">Web3 & Blockchain</button></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Company</h4>
                <ul className="footer-links">
                  <li><button onClick={() => handleCompanyClick('/about')} className="footer-service-link">About Us</button></li>
                  <li><button onClick={() => handleCompanyClick('/services')} className="footer-service-link">Our Services</button></li>
                  <li><button onClick={() => handleCompanyClick('/contact')} className="footer-service-link">Contact</button></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Get Started</h4>
                <p className="footer-cta-text">Ready to start your project?</p>
                <button onClick={() => handleCompanyClick('/contact')} className="btn btn-primary btn-sm">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} Block Software Inc. All rights reserved.</p>
            </div>
            <div className="footer-tagline">
              <p>Made with <FaHeart className="heart-icon" /> in Prince Edward Island</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 