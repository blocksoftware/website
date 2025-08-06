import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ServicesPage } from './pages/ServicesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { FaCode, FaRocket, FaMobile, FaArrowRight, FaCheck, FaStar } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="flex-1">
              {/* Hero Section */}
              <section className="hero-section">
                <div className="container">
                  <div className="hero-content">
                    <div className="badge badge-blue mb-6">PEI's Leading Software Development Company</div>
                    <h1 className="hero-title mb-6">
                      Top Software Development Company in
                      <span className="text-blue"> Prince Edward Island</span>
                    </h1>
                    <p className="hero-description mb-16">
                      Based in Charlottetown, PEI, we create custom web applications, enterprise software, and blockchain solutions 
                      that drive growth for businesses worldwide. 15+ years of experience, 99% client satisfaction, serving clients globally.
                    </p>
                    <div className="hero-actions mb-12 mt-16">
                      <Link to="/contact" className="btn btn-primary btn-lg mt-8">
                        Start Your Project
                        <FaArrowRight />
                      </Link>
                      <Link to="/services" className="btn btn-outline btn-lg mt-8">
                        View Our Services
                      </Link>
                    </div>
                    <div className="hero-stats">
                      <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Projects Completed</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">99%</div>
                        <div className="stat-label">Client Satisfaction</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section className="services-section">
                <div className="container">
                  <div className="text-center mb-12">
                    <h2 className="mb-4">Professional Software Development Services in PEI</h2>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                      Headquartered in PEI, serving clients across Canada, the US, and internationally with expert software development, 
                      web applications, and custom business solutions.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    <div className="service-card">
                      <div className="service-icon">
                        <FaCode />
                      </div>
                      <h3 className="service-title">Web Application Development</h3>
                      <p className="service-description">
                        Custom web applications for businesses worldwide using React, TypeScript, and modern technologies. 
                        Responsive, fast, and scalable solutions delivered remotely.
                      </p>
                      <div className="service-features">
                        <span className="feature-tag">React</span>
                        <span className="feature-tag">TypeScript</span>
                        <span className="feature-tag">Next.js</span>
                      </div>
                      <Link to="/services#web" className="service-link">
                        Learn More <FaArrowRight />
                      </Link>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-icon">
                        <FaRocket />
                      </div>
                      <h3 className="service-title">Custom Business Software</h3>
                      <p className="service-description">
                        Enterprise software solutions for businesses globally. CRM, ERP, and custom applications 
                        designed for your industry needs with remote development and support.
                      </p>
                      <div className="service-features">
                        <span className="feature-tag">Python</span>
                        <span className="feature-tag">Java</span>
                        <span className="feature-tag">Cloud</span>
                      </div>
                      <Link to="/services#software" className="service-link">
                        Learn More <FaArrowRight />
                      </Link>
                    </div>
                    
                    <div className="service-card">
                      <div className="service-icon">
                        <FaMobile />
                      </div>
                      <h3 className="service-title">Web3 & Blockchain</h3>
                      <p className="service-description">
                        Next-generation blockchain applications and decentralized solutions for the future of digital innovation.
                      </p>
                      <div className="service-features">
                        <span className="feature-tag">Ethereum</span>
                        <span className="feature-tag">Solidity</span>
                        <span className="feature-tag">DeFi</span>
                      </div>
                      <Link to="/services#web3" className="service-link">
                        Learn More <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Features Section */}
              <section className="features-section">
                <div className="container">
                  <div className="grid grid-cols-2 gap-16 items-center">
                    <div>
                      <h2 className="mb-6">Why Choose Block Software for Your Business?</h2>
                      <div className="features-list">
                        <div className="feature-item">
                          <FaCheck className="feature-icon" />
                          <div>
                            <h4>Expert Development Team</h4>
                            <p>Our experienced developers use cutting-edge technologies and best practices.</p>
                          </div>
                        </div>
                        <div className="feature-item">
                          <FaCheck className="feature-icon" />
                          <div>
                            <h4>Agile Development Process</h4>
                            <p>Fast, iterative development with regular updates and transparent communication.</p>
                          </div>
                        </div>
                        <div className="feature-item">
                          <FaCheck className="feature-icon" />
                          <div>
                            <h4>Scalable Solutions</h4>
                            <p>Software that grows with your business and adapts to changing requirements.</p>
                          </div>
                        </div>
                        <div className="feature-item">
                          <FaCheck className="feature-icon" />
                          <div>
                            <h4>Ongoing Support</h4>
                            <p>Comprehensive support and maintenance to keep your software running smoothly.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-card">
                      <div className="testimonial-content">
                        <div className="testimonial-stars">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="star" />
                          ))}
                        </div>
                        <blockquote>
                          "Block Software delivered exactly what we needed. Their team was professional, 
                          communicative, and delivered on time. Highly recommended!"
                        </blockquote>
                        <div className="testimonial-author">
                          <strong>Ali</strong>
                          <span>CEO, BitSynapse IT Network Solutions Inc.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="cta-section">
                <div className="container">
                  <div className="cta-content">
                    <h2 className="mb-4">Ready to Start Your Project?</h2>
                    <p className="mb-8">
                      Let's discuss your requirements and see how we can help bring your ideas to life.
                    </p>
                    <div className="cta-actions">
                      <Link to="/contact" className="btn btn-primary btn-lg">
                        Get Free Consultation
                      </Link>
                      <Link to="/about" className="btn btn-secondary btn-lg">
                        Learn About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
