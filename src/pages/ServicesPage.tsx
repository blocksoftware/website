import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ServicesPage.css'
import { FaCode, FaRocket, FaMobile, FaCheck, FaArrowRight } from 'react-icons/fa'

const serviceDetails = {
  web: {
    title: "Web Applications",
    description: "Powerful, scalable web applications that deliver exceptional user experiences and drive business growth",
    icon: FaCode,
    details: [
      "Custom web applications tailored to your business requirements",
      "Responsive design ensuring perfect functionality across all devices",
      "Progressive Web Apps (PWA) with native app-like performance",
      "E-commerce platforms with secure payment integration",
      "Real-time applications with live data synchronization",
      "Content Management Systems (CMS) for easy content updates",
      "API development and third-party service integrations"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Next.js", "MongoDB", "PostgreSQL", "AWS", "Tailwind CSS"]
  },
  software: {
    title: "Custom Software",
    description: "Enterprise-grade software solutions engineered to optimize your business processes and increase operational efficiency",
    icon: FaRocket,
    details: [
      "Custom business applications designed for your workflow",
      "Cloud-native solutions with scalable architecture",
      "Enterprise resource planning (ERP) system development",
      "Customer relationship management (CRM) platforms",
      "Inventory management and tracking systems",
      "API development and microservices architecture",
      "Legacy system modernization and migration",
      "Data analytics and reporting dashboards"
    ],
    technologies: ["Python", "Java", "C#", ".NET", "AWS", "Azure", "Docker", "Kubernetes", "Redis", "Elasticsearch"]
  },
  web3: {
    title: "Web3 & Blockchain",
    description: "Cutting-edge blockchain solutions and decentralized applications that leverage the power of Web3 technology",
    icon: FaMobile,
    details: [
      "Smart contract development and deployment on multiple chains",
      "Decentralized Finance (DeFi) protocols and applications",
      "NFT marketplaces and tokenization platforms",
      "Decentralized Autonomous Organizations (DAO) development",
      "Cryptocurrency wallets and trading platforms",
      "Blockchain integration for existing applications",
      "Token economics design and implementation",
      "Cross-chain bridge development and interoperability"
    ],
    technologies: ["Ethereum", "Solidity", "Web3.js", "Ethers.js", "IPFS", "Polygon", "Binance Smart Chain", "Hardhat"]
  }
}

export function ServicesPage() {
  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash
    if (hash) {
      // Remove the # symbol and find the element
      const element = document.getElementById(hash.slice(1))
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <div className="services-hero-content">
            <div className="badge badge-blue mb-6">Our Services</div>
            <h1 className="mb-6">Professional Software Development Services</h1>
            <p className="hero-description mb-8">
              We deliver cutting-edge technology solutions tailored to your business needs, 
              from web applications to blockchain development.
            </p>
          </div>
        </div>
      </section>
      
      <section className="services-overview section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Choose Your Service</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Click on any service below to learn more about our approach and capabilities.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(serviceDetails).map(([key, service]) => (
              <a key={key} href={`#${key}`} className="service-overview-card">
                <div className="service-overview-icon">
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-overview-arrow">
                  <FaArrowRight />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section className="services-details section">
        <div className="container">
          {Object.entries(serviceDetails).map(([key, service], index) => (
            <div key={key} className={`service-detail ${index % 2 === 1 ? 'service-detail-reverse' : ''}`} id={key}>
              <div className="service-detail-content">
                <div className="service-detail-header">
                  <div className="service-detail-icon">
                    <service.icon />
                  </div>
                  <div>
                    <h2 className="mb-4">{service.title}</h2>
                    <p className="text-lg text-secondary mb-6">{service.description}</p>
                  </div>
                </div>
                
                <div className="service-detail-body">
                  <div className="service-features mb-8">
                    <h3 className="mb-4">What We Deliver</h3>
                    <div className="features-list">
                      {service.details.map((detail, index) => (
                        <div key={index} className="feature-item">
                          <FaCheck className="feature-check" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service-tech mb-8">
                    <h3 className="mb-4">Technology Stack</h3>
                    <div className="tech-stack">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="service-cta">
                    <Link to="/contact" className="btn btn-primary">
                      Get Started
                      <FaArrowRight />
                    </Link>
                    <p className="cta-note">Free consultation available</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta section">
        <div className="container">
          <div className="final-cta-content">
            <h2 className="mb-4">Ready to Start Your Project?</h2>
            <p className="mb-8">
              Let's discuss your requirements and see how we can help bring your vision to life.
            </p>
            <div className="final-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project
                <FaArrowRight />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 