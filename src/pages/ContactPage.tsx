import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa'
import './ContactPage.css'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const emailSubject = encodeURIComponent(`${formData.subject || 'Contact Form Submission'}`)
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Message: ${formData.message}`
    )
    
    const toEmail = 'contact@blocksoftware.ca'
    window.location.href = `mailto:${toEmail}?subject=${emailSubject}&body=${emailBody}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <div className="contact-hero-content">
            <div className="badge badge-blue mb-6">Get In Touch</div>
            <h1 className="mb-6">Let's Discuss Your Project</h1>
            <p className="hero-description mb-8">
              Ready to transform your ideas into reality? We'd love to hear about your project 
              and discuss how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-header mb-8">
                <h2 className="mb-4">Get In Touch</h2>
                <p className="text-lg text-secondary">
                  Choose the best way to reach us. We're here to help with your software development needs.
                </p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-content">
                    <h3>Email Us</h3>
                    <p>Get a response within 24 hours</p>
                    <a href="mailto:contact@blocksoftware.ca">contact@blocksoftware.ca</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-content">
                    <h3>Our Location</h3>
                    <p>Based in beautiful Prince Edward Island</p>
                    <a 
                      href="https://www.google.com/maps/place/Block+Software+Inc./@46.2800282,-63.1500548,17z/data=!3m1!4b1!4m6!3m5!1s0x4b5fb3639908eb8f:0x6abe6c93b86698eb!8m2!3d46.2800282!4d-63.1474799!16s%2Fg%2F11wmqkykky?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Charlottetown, PE, Canada
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaClock />
                  </div>
                  <div className="method-content">
                    <h3>Business Hours</h3>
                    <p>Atlantic Time Zone</p>
                    <span>Monday - Friday: 9:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header mb-8">
                  <h2 className="mb-4">Tell Us About Your Project</h2>
                  <p className="text-secondary">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <div className="form-group mb-6">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group mb-6">
                  <label htmlFor="subject" className="form-label">
                    Project Type <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Web Application, Mobile App, Consulting"
                    required
                  />
                </div>

                <div className="form-group mb-6">
                  <label htmlFor="message" className="form-label">
                    Project Details <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    required
                    rows={6}
                  />
                </div>

                <div className="form-footer">
                  <div className="form-note mb-6">
                    <p className="text-sm text-muted">
                      By submitting this form, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg submit-button">
                    Send Message
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-cta section bg-gray-50">
        <div className="container">
          <div className="consultation-content">
            <h2 className="mb-4 text-center">Not Sure Where to Start?</h2>
            <p className="text-center text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your project requirements and get expert advice 
              on the best approach for your business.
            </p>
            <div className="text-center">
              <a 
                href="mailto:contact@blocksoftware.ca?subject=Free%20Consultation%20Request" 
                className="btn btn-primary btn-lg"
              >
                Book Free Consultation
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 