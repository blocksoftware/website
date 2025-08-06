import './AboutPage.css'
import { FaLightbulb, FaUsers, FaRocket, FaBullseye, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <div className="badge badge-blue mb-6">About Block Software</div>
            <h1 className="mb-6">We Build Software That Drives Success</h1>
            <p className="hero-description about-hero-description">
              Block Software Inc. is a team of passionate developers and innovators based in Prince Edward Island, 
              dedicated to creating custom software solutions that help businesses worldwide thrive in the digital age.
            </p>
            <div className="hero-stats mt-20">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
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

      <section className="story-section section">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="story-content">
                <p className="mb-4">
                  Founded in Prince Edward Island, Block Software Inc. began with a simple mission: 
                  to help businesses worldwide leverage technology for growth and efficiency.
                </p>
                <p className="mb-4">
                  What started as a small team of developers in PEI has grown into a trusted remote development partner for 
                  companies across various industries globally, from startups to established enterprises.
                </p>
                <p>
                  We believe in building long-term relationships with our clients, understanding 
                  their unique challenges, and delivering solutions that exceed expectations.
                </p>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <FaUsers className="placeholder-icon" />
                <p>Team Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section section bg-gray-50">
        <div className="container text-center">
          <div className="mission-content">
            <h2 className="mb-6">Our Mission</h2>
            <p className="mission-text">
              To empower businesses worldwide through innovative software solutions that drive growth, 
              improve efficiency, and create competitive advantages in today's digital landscape, delivered with PEI hospitality.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Drives Us</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our core values guide everything we do, from how we approach projects to how we work with our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="value-card">
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We stay at the forefront of technology, constantly exploring new tools and methodologies 
                to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaBullseye />
              </div>
              <h3 className="value-title">Quality Focus</h3>
              <p className="value-description">
                Every project receives our full attention to detail, ensuring robust, scalable, 
                and maintainable software solutions.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3 className="value-title">Client Partnership</h3>
              <p className="value-description">
                We work closely with our clients, treating their success as our own and building 
                lasting relationships based on trust and results.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaRocket />
              </div>
              <h3 className="value-title">Agile Delivery</h3>
              <p className="value-description">
                Our agile development process ensures fast, iterative delivery with regular 
                communication and transparency throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="team-image">
              <div className="image-placeholder">
                <FaRocket className="placeholder-icon" />
                <p>Innovation & Growth</p>
              </div>
            </div>
            <div>
              <h2 className="mb-6">Why Choose Block Software?</h2>
              <div className="team-benefits">
                <div className="benefit-item">
                  <h4>Expert Team</h4>
                  <p>Experienced developers with deep expertise in modern technologies and best practices.</p>
                </div>
                <div className="benefit-item">
                  <h4>Local Presence</h4>
                  <p>Based in Prince Edward Island, we understand the local business landscape and needs.</p>
                </div>
                <div className="benefit-item">
                  <h4>Full-Service Approach</h4>
                  <p>From initial consultation to ongoing support, we handle every aspect of your software needs.</p>
                </div>
                <div className="benefit-item">
                  <h4>Proven Track Record</h4>
                  <p>50+ successful projects and 99% client satisfaction rate speak to our commitment to excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2 className="mb-4">Ready to Work Together?</h2>
            <p className="mb-8">
              Let's discuss your project requirements and see how we can help bring your vision to life.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project
                <FaArrowRight />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 