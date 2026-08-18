import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="contact-lead">
          Have a question about an order or a product? Reach out, we're happy to help.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item glass">
              <h3>Email</h3>
              <p>support@nexora.com</p>
            </div>
            <div className="contact-info-item glass">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
            <div className="contact-info-item glass">
              <h3>Address</h3>
              <p>NEXORA HQ, Sector 21, Rajpura, Punjab, India</p>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <p className="contact-success">
                Thanks! Your message has been sent. We'll get back to you soon.
              </p>
            ) : (
              <>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact