import React from 'react'
import { MdRestaurant, MdPersonOutline, MdShoppingCart } from 'react-icons/md'

const projects = [
  {
    title: 'Restaurant Website',
    desc: 'A modern restaurant website with menu browsing, online reservations, and a responsive design for an amazing dining experience.',
    icon: MdRestaurant,
    iconColor: '#FF6B35',
    tags: [
      { label: 'React', variant: '' },
      { label: 'CSS', variant: 'cyan' },
      { label: 'Responsive', variant: 'purple' },
    ],
    live: '#',
    code: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'A personal portfolio showcasing projects, skills, and experience with smooth animations and a clean, modern aesthetic.',
    icon: MdPersonOutline,
    iconColor: '#00ff88',
    tags: [
      { label: 'React', variant: '' },
      { label: 'Vite', variant: 'cyan' },
      { label: 'CSS', variant: 'purple' },
    ],
    live: '#',
    code: '#',
  },
  {
    title: 'E-Commerce Website',
    desc: 'A full-featured e-commerce platform with product listings, shopping cart, checkout flow, and payment integration.',
    icon: MdShoppingCart,
    iconColor: '#00d4ff',
    tags: [
      { label: 'React', variant: '' },
      { label: 'Node.js', variant: 'cyan' },
      { label: 'MongoDB', variant: 'purple' },
    ],
    live: '#',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section-label">Featured Work</span>
        <h2 className="section-title">
          Selected <span className="highlight">projects</span>
        </h2>
        <p className="section-desc">
          A collection of projects that showcase my skills across the full stack.
        </p>

        <div className="projects__grid">
          {projects.map((p) => {
            const Icon = p.icon
            return (
              <div className="project-card" key={p.title}>
                <div className="project-card__image">
                  <Icon size={64} color={p.iconColor} />
                </div>
                <div className="project-card__body">
                  <div className="project-card__tags">
                    {p.tags.map((t) => (
                      <span
                        className={`project-card__tag${t.variant ? ` project-card__tag--${t.variant}` : ''}`}
                        key={t.label}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.desc}</p>
                  <div className="project-card__links">
                    <a href={p.live} className="project-card__link" target="_blank" rel="noopener noreferrer">
                      Live Demo ↗
                    </a>
                    <a href={p.code} className="project-card__link" target="_blank" rel="noopener noreferrer">
                      Source Code ↗
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
