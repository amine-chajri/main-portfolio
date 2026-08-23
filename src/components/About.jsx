import React from 'react'
import profileImg from '../img/profile.jpeg'

const stats = [
  { number: '2+', label: 'Years Exp' },
  { number: '3+', label: 'Projects' },
  { number: '3+', label: 'Clients' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="section-label">About Me</span>
        <div className="about__grid">
          <div className="about__image">
            <img src={profileImg} alt="Amine Chajri" className="about__image-inner" />
          </div>
          <div className="about__text">
            <h2 className="section-title">
              Turning ideas into <span className="highlight">digital reality</span>
            </h2>
            <p>
              I'm a fullstack developer based in San Francisco with a passion for
              building products that make a difference. I specialize in React, Node.js,
              and cloud-native architectures.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source, 
              writing technical articles, or exploring the latest in AI and Web3.
              I believe in writing code that humans can read first, machines second.
            </p>
            <div className="about__stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__number">{s.number}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
