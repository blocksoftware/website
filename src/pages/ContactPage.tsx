import { useState } from 'react'
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
      <h1>Contact Us</h1>
      <p className="contact-intro">Get in touch with us for your next project</p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <div className="info-item">
            <h3>Email</h3>
            <p>contact@blocksoftware.ca</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=423+Mt+Edward+Rd+Charlottetown+PE+C1E+2A1+Canada"
              target="_blank"
              rel="noopener noreferrer"
            >
              423 Mt Edward Rd, Charlottetown, PE C1E 2A1, Canada
            </a>
          </div>
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 4pm AT</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  )
} 