import React, { useState } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGooglecloud,
  SiGithubactions,
  SiLinux,
  SiGit,
  SiFigma,
  SiRedis,
  SiNginx,
} from 'react-icons/si'

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Tools']

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Backend' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'Backend' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
  { name: 'AWS', icon: SiGooglecloud, color: '#FF9900', category: 'DevOps' },
  { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF', category: 'DevOps' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624', category: 'DevOps' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Tools' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Tools' },
  { name: 'Nginx', icon: SiNginx, color: '#009639', category: 'Tools' },
]

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? skills : skills.filter((s) => s.category === active)

  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="section-label">Skills & Tech</span>
        <h2 className="section-title">
          My <span className="highlight">tech stack</span>
        </h2>
        <p className="section-desc">
          Technologies I work with daily to build modern, scalable applications.
        </p>

        <div className="skills__categories">
          {categories.map((c) => (
            <button
              key={c}
              className={`skills__tab${active === c ? ' active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {filtered.map((s) => {
            const Icon = s.icon
            return (
              <div className="skill-card" key={s.name}>
                <div className="skill-card__icon">
                  <Icon size={36} color={s.color} />
                </div>
                <div className="skill-card__name">{s.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
