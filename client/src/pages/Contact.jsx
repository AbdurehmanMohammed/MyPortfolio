// pages/Contact.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    phone: '', 
    email: '', 
    message: '' 
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic required field checking
    if (!form.firstName || !form.email || !form.message) {
      alert('Please fill in First Name, Email, and Message fields.')
      setIsSubmitting(false)
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    // Create mailto link with form data
    const subject = `Portfolio Contact from ${form.firstName} ${form.lastName}`
    const body = `Hello Abdurehman,

I'm reaching out through your portfolio website.

Contact Details:
Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}

Message:
${form.message}

Best regards,
${form.firstName}`

    const mailtoLink = `mailto:m.abdul2224@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.open(mailtoLink, '_blank')

    // Save to localStorage as demo backend (meets capture + redirect requirement)
    const stored = JSON.parse(localStorage.getItem('portfolio_messages') || '[]')
    stored.push({ 
      ...form, 
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'email_sent'
    })
    localStorage.setItem('portfolio_messages', JSON.stringify(stored))

    // Show success message
    alert(`Thank you ${form.firstName}! Your email client should open now with a pre-filled message. I'll get back to you soon!`)

    // Reset form
    setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' })

    // Redirect to home after brief delay
    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/')
    }, 2000)
  }

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Let's discuss your project ideas and how I can help bring them to life
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Information Panel */}
            <div className="contact-info-panel">
              <div className="info-card">
                <h2>Contact Information</h2>
                <p className="info-intro">
                  Ready to start your next project? I'm here to help you create 
                  something amazing. Get in touch and let's make it happen!
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-info">
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:m.abdul2224@gmail.com">
                          m.abdul2224@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">📱</div>
                    <div className="contact-info">
                      <h4>Phone</h4>
                      <p>
                        <a href="tel:+16477727448">
                          647-772-7448
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">🌍</div>
                    <div className="contact-info">
                      <h4>Location</h4>
                      <p>Toronto, Ontario, Canada</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">⏰</div>
                    <div className="contact-info">
                      <h4>Response Time</h4>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Connect With Me</h4>
                  <div className="social-buttons">
                    <a href="https://linkedin.com" className="social-btn linkedin" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    <a href="https://github.com" className="social-btn github" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Direct Email Button */}
                <div className="direct-contact">
                  <h4>Quick Contact</h4>
                  <a 
                    href="mailto:m.abdul2224@gmail.com?subject=Portfolio Inquiry&body=Hello Abdurehman,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0ABest regards"
                    className="btn btn-primary"
                    style={{ display: 'block', textAlign: 'center', marginTop: '15px' }}
                  >
                    📧 Send Quick Email
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-panel">
              <div className="form-card">
                <h2>Send Me a Message</h2>
                <p className="form-intro">
                  Fill out the form below and your email client will open with a pre-filled message.
                </p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input 
                        type="text"
                        id="firstName"
                        name="firstName" 
                        placeholder="Enter your first name" 
                        value={form.firstName} 
                        onChange={handleChange}
                        className={!form.firstName ? 'required' : ''}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text"
                        id="lastName"
                        name="lastName" 
                        placeholder="Enter your last name" 
                        value={form.lastName} 
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email"
                        id="email"
                        name="email" 
                        placeholder="Enter your email address" 
                        value={form.email} 
                        onChange={handleChange}
                        className={!form.email ? 'required' : ''}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel"
                        id="phone"
                        name="phone" 
                        placeholder="Enter your phone number" 
                        value={form.phone} 
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message"
                      name="message" 
                      placeholder="Tell me about your project or any questions you have..." 
                      value={form.message} 
                      onChange={handleChange}
                      rows="6"
                      className={!form.message ? 'required' : ''}
                      required
                    />
                  </div>

                  <div className="form-submit">
                    <button 
                      type="submit" 
                      className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '📧 Opening Email...' : '📧 Send via Email'}
                    </button>
                    <p className="required-note">* Required fields</p>
                    <p className="email-note">
                      This will open your default email client with a pre-filled message
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="contact-footer">
        <div className="container">
          <div className="footer-content">
            <h3>Let's Build Something Great Together</h3>
            <p>
              Whether you need a simple website, a complex web application, or just want to 
              discuss your ideas, I'm here to help. Every great project starts with a conversation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
