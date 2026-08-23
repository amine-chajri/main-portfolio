import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

const contactLinks = [
  { icon: FaEnvelope, label: 'amine@example.com', href: 'mailto:amine@example.com', color: '#00ff88' },
  { icon: FaGithub, label: 'github.com/amine-chajri', href: 'https://github.com/amine-chajri', color: '#f0f0f5' },
  { icon: FaLinkedin, label: 'linkedin.com/in/amine-chajri', href: 'https://www.linkedin.com/in/amine-chajri/', color: '#0A66C2' },
  { icon: FaWhatsapp, label: '+212 655-919461', href: 'https://wa.me/212655919461', color: '#25D366' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '9f9af265-a7c3-41a3-8792-b127578ad0e4',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">
          Let's <span className="highlight">connect</span>
        </h2>

        <div className="contact__wrapper">
          <div className="contact__info">
            <h3>Have a project in mind?</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision. Let's build 
              something amazing together.
            </p>
            <div className="contact__links">
              {contactLinks.map((l) => {
                const Icon = l.icon
                return (
                  <a href={l.href} className="contact__link" key={l.label} target="_blank" rel="noopener noreferrer">
                    <div className="contact__link-icon">
                      <Icon size={18} color={l.color} />
                    </div>
                    {l.label}
                  </a>
                )
              })}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              className="contact__input"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="contact__input"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="contact__input"
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              className="contact__textarea"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              className="contact__submit"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message →'}
            </button>
            {status === 'error' && (
              <p className="contact__error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
