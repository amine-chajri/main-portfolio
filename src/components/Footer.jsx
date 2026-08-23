import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa6'

const socials = [
  { icon: FaGithub, href: 'https://github.com/amine-chajri', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/amine-chajri/', label: 'LinkedIn' },

  { icon: FaWhatsapp, href: 'https://wa.me/212655919461', label: 'WhatsApp' },
  { icon: FaEnvelope, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          © 2026 Amine Chajri. Built with React & ❤️
        </div>
        <div className="footer__right">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a
                href={s.href}
                className="footer__social"
                key={s.label}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
