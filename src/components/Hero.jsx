import React from 'react'

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="line">I build things</span>
            <span className="line">
              that live on the{' '}
              <span className="gradient">internet</span>
            </span>
          </h1>

          <p className="hero__subtitle">
            Fullstack developer crafting performant web apps, 
            APIs, and cloud infrastructure. I turn complex 
            problems into elegant, scalable solutions.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Work ↓
            </a>
            <a href="#contact" className="hero__btn hero__btn--ghost">
              Get In Touch
            </a>
          </div>

          <div className="hero__code">
            <span className="comment">// fullstack developer</span>
            <br />
            <span className="keyword">const</span> <span className="func">amine</span> = {'{'}
            <br />
            &nbsp;&nbsp;stack: [<span className="string">"React"</span>, <span className="string">"Node"</span>, <span className="string">"PostgreSQL"</span>],
            <br />
            &nbsp;&nbsp;love: <span className="string">"clean architecture"</span>,
            <br />
            &nbsp;&nbsp;coffee: <span className="string">true</span>,
            <br />
            {'}'};
          </div>
        </div>
      </div>
    </section>
  )
}
