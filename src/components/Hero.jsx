import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

function Hero() {
  const [heroProgress, setHeroProgress] = useState(0);

  useEffect(() => {
    const updateHeroProgress = () => {
      const heroHeight = window.innerHeight;

      /*
       * The Hero starts disappearing before the
       * fixed navbar becomes visually dominant.
       */
      const fadeDistance = heroHeight * 0.55;

      const progress = Math.min(
        Math.max(window.scrollY / fadeDistance, 0),
        1
      );

      setHeroProgress(progress);
    };

    updateHeroProgress();

    window.addEventListener("scroll", updateHeroProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateHeroProgress);

    return () => {
      window.removeEventListener("scroll", updateHeroProgress);
      window.removeEventListener("resize", updateHeroProgress);
    };
  }, []);

  /*
   * Hero content fades and moves slightly upward
   * while the cinematic background stays fixed.
   */
  const opacity = 1 - heroProgress;

  const translateY = heroProgress * -80;

  return (
    <section className="hero" id="home">
      <div
        className="hero__content"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <p className="hero__eyebrow">
          AN INTERACTIVE CAREER STORY
        </p>

        <h1 className="hero__title">
          Turning <span>data</span>
          <br />
          into real <span>impact.</span>
        </h1>

        <p className="hero__description">
          From building applications to engineering data systems.
          <br />
          Master's student in AI &amp; Data Science, passionate about{" "}
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

      <div
        className="hero__timeline-marker"
        aria-hidden="true"
        style={{
          opacity: Math.max(0, 1 - heroProgress * 1.5),
        }}
      >
        <span />
      </div>
    </section>
  );
}

export default Hero;