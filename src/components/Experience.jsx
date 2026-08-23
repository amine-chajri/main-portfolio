import React from 'react'

const experiences = [
  {
    date: '2024 — Present',
    role: 'Senior Fullstack Engineer',
    company: 'TechCorp Inc.',
    desc: 'Leading the frontend architecture migration from legacy systems to a modern Next.js micro-frontend platform. Reduced load times by 60% and improved developer velocity.',
    tech: ['Next.js', 'TypeScript', 'AWS', 'Terraform', 'PostgreSQL'],
  },
  {
    date: '2022 — 2024',
    role: 'Fullstack Developer',
    company: 'StartupXYZ',
    desc: 'Built the core product from 0 to 1 — a real-time collaboration tool used by 50K+ users. Designed the database schema, API layer, and React frontend.',
    tech: ['React', 'Node.js', 'WebSocket', 'Redis', 'Docker'],
  },
  {
    date: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'Digital Agency Co.',
    desc: 'Delivered 20+ client projects ranging from marketing sites to complex SaaS dashboards. Championed design system adoption and accessibility standards.',
    tech: ['Vue.js', 'Tailwind', 'GraphQL', 'Netlify', 'Figma'],
  },
  {
    date: '2020 — 2021',
    role: 'Junior Developer',
    company: 'WebDev Studio',
    desc: 'Started my professional journey building WordPress themes and custom plugins. Quickly transitioned to React and modern JavaScript frameworks.',
    tech: ['JavaScript', 'React', 'PHP', 'MySQL', 'Git'],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">
          Where I've <span className="highlight">worked</span>
        </h2>
        <p className="section-desc">
          My professional journey building products across the stack.
        </p>

        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline__item" key={exp.role + exp.company}>
              <div className="timeline__dot" />
              <div className="timeline__date">{exp.date}</div>
              <div className="timeline__role">{exp.role}</div>
              <div className="timeline__company">{exp.company}</div>
              <div className="timeline__desc">{exp.desc}</div>
              <div className="timeline__tech">
                {exp.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
