import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    description:
      "A first-principles simulation of the systems behind modern cloud data platforms — resource allocation, scheduling, distributed Spark processing and medallion architecture.",
    technologies: ["Python", "Apache Spark", "Parquet"],
    image: "/images/projects/coresync.png",
    projectUrl:
      "https://github.com/tejfaster/CoreSync-Engine-Distributed-Spark-System",
  },

  {
    number: "02",
    description:
      "A distributed market-data platform running across a two-node home cluster, taking live financial data through Kafka, Spark, Delta Lake, PostgreSQL and Power BI.",
    technologies: [
      "Kafka",
      "Apache Spark",
      "Delta Lake",
      "PostgreSQL",
      "Power BI",
    ],
    image: "/images/projects/marketpulse.png",
    projectUrl:
      "https://github.com/tejfaster/MarketPulse-Distributed-Stock-Intelligence-Platform",
  },

  {
    number: "03",
    description:
      "An end-to-end retail analytics pipeline transforming raw e-commerce orders into validated, dimensional data models and business intelligence dashboards.",
    technologies: [
      "PySpark",
      "Airflow",
      "Kubernetes",
      "PostgreSQL",
      "Power BI",
    ],
    image: "/images/projects/retail-analytics.png",
    projectUrl:
      "https://github.com/tejfaster/Retail_EndToEnd_project",
  },
];

function ProjectPanel({ project, opacity, cardRef }) {
  return (
    <article
      ref={cardRef}
      className="selected-project"
      style={{ opacity }}
    >
      <div className="selected-project__visual">
        <img
          src={project.image}
          alt={`Project ${project.number} architecture`}
          loading="lazy"
        />
      </div>

      <div className="selected-project__footer">
        <p className="selected-project__description">
          {project.description}
        </p>

        <div className="selected-project__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="selected-project__actions">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="selected-project__action selected-project__action--primary"
          >
            <span>View Project</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </article>
  );
}

function SelectedProjects() {
  const introRef = useRef(null);
  const cardRefs = useRef([]);

  const [introOpacity, setIntroOpacity] =
    useState(1);

  const [cardOpacities, setCardOpacities] =
    useState(() =>
      projects.map(() => 1)
    );

  useEffect(() => {
    const updateProjectsFade = () => {
      const intro = introRef.current;

      if (intro) {
        const rect =
          intro.getBoundingClientRect();

        const fadeStart =
          window.innerHeight * 0.35;

        const fadeEnd =
          window.innerHeight * 0.05;

        let opacity = 1;

        if (rect.top < fadeStart) {
          opacity =
            (rect.top - fadeEnd) /
            (fadeStart - fadeEnd);

          opacity = Math.min(
            Math.max(opacity, 0),
            1,
          );
        }

        setIntroOpacity(opacity);
      }

      const viewportCenter =
        window.innerHeight / 2;

      const fadeDistance =
        window.innerHeight * 0.55;

      const nextCardOpacities =
        cardRefs.current.map((card) => {
          if (!card) {
            return 1;
          }

          const rect =
            card.getBoundingClientRect();

          const cardCenter =
            rect.top +
            rect.height / 2;

          const distanceFromCenter =
            Math.abs(
              cardCenter -
                viewportCenter,
            );

          let opacity =
            1 -
            distanceFromCenter /
              fadeDistance;

          opacity = Math.min(
            Math.max(opacity, 0),
            1,
          );

          return opacity;
        });

      setCardOpacities(
        nextCardOpacities,
      );
    };

    updateProjectsFade();

    window.addEventListener(
      "scroll",
      updateProjectsFade,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      updateProjectsFade,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateProjectsFade,
      );

      window.removeEventListener(
        "resize",
        updateProjectsFade,
      );
    };
  }, []);

  return (
    <section
      className="selected-projects"
      id="projects"
    >
      <div
        ref={introRef}
        className="selected-projects__intro"
        style={{
          opacity: introOpacity,
        }}
      >
        <span className="selected-projects__eyebrow">
          SELECTED PROJECTS
        </span>

        <h2>
          Real projects.
          <br />
          <span>Real systems.</span>
        </h2>

        <p>
          A focused selection of data engineering
          and analytics systems built to understand
          how real data moves, transforms and creates
          value.
        </p>
      </div>

      <div className="selected-projects__grid">
        {projects.map((project, index) => (
          <ProjectPanel
            key={project.number}
            project={project}
            opacity={
              cardOpacities[index] ?? 1
            }
            cardRef={(element) => {
              cardRefs.current[index] =
                element;
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default SelectedProjects;