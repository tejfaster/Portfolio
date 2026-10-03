import { ArrowRight, Mail } from 'lucide-react'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true" />

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">AN INTERACTIVE CAREER STORY</p>

        <h1 className="hero__title">
          Turning <span>data</span>
          <br />
          into real <span>impact.</span>
        </h1>

        <p className="hero__description">
          From building applications to engineering data systems.
          <br />
          Master&apos;s student in AI &amp; Data Science, passionate about{' '}
          <br className="hero__desktop-break" />
          solving real-world problems with data, ML and scalable systems.
        </p>

        <a href="#journey" className="hero__primary">
          <span>Explore my journey</span>
          <ArrowRight size={18} strokeWidth={2} />
        </a>

        <div className="hero__socials">
          <a
            href="https://github.com/tejfaster"
            target="_blank"
            rel="noreferrer"
            className="hero__social"
            aria-label="GitHub"
          >
            <span className="hero__social-icon">GH</span>
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="hero__social"
            aria-label="LinkedIn"
          >
            <span className="hero__social-icon">in</span>
            <span>LinkedIn</span>
          </a>

          <a
            href="#contact"
            className="hero__social"
            aria-label="Email"
          >
            <Mail size={19} />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="hero__timeline-marker" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

export default Hero