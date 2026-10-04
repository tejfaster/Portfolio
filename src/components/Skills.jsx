import { useEffect, useRef, useState } from "react";

const skills = [
  "Python",
  "SQL",
  "PySpark",
  "Apache Spark",
  "Kafka",
  "Delta Lake",
  "Databricks",
  "Airflow",
  "PostgreSQL",
  "Power BI",
  "Machine Learning",
  "PyTorch",
  "Feature Engineering",
  "Data Modelling",
  "ETL / ELT",
];

function Skills() {
  const sectionRef = useRef(null);
  const [fade, setFade] = useState({
    opacity: 0,
    translateY: 30,
  });

  useEffect(() => {
    let ticking = false;

    const updateFade = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * The content is fully visible when the
       * middle of the Skills section is around
       * the middle of the viewport.
       */
      const sectionCenter =
        rect.top + rect.height / 2;

      const viewportCenter =
        viewportHeight / 2;

      const distance =
        Math.abs(
          sectionCenter - viewportCenter,
        );

      /*
       * Larger range = smoother cinematic fade.
       */
      const fadeRange =
        viewportHeight * 0.8;

      let opacity =
        1 - distance / fadeRange;

      opacity = Math.min(
        Math.max(opacity, 0),
        1,
      );

      /*
       * Small movement makes the content
       * feel like it is entering the scene.
       */
      const translateY =
        (1 - opacity) * 35;

      setFade({
        opacity,
        translateY,
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(
          updateFade,
        );

        ticking = true;
      }
    };

    updateFade();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      updateFade,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        updateFade,
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="skills"
      id="skills"
    >
      <div
        className="skills__content"
        style={{
          opacity: fade.opacity,
          transform: `translateY(${fade.translateY}px)`,
        }}
      >
        <span className="skills__eyebrow">
          SKILLS &amp; TOOLKIT
        </span>

        <p className="skills__description">
          The tools I use to turn data into reliable
          systems, meaningful insights, and intelligent
          solutions.
        </p>

        <div className="skills__list">
          {skills.map((skill) => (
            <span
              className="skills__item"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;