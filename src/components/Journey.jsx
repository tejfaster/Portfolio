import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Award } from "lucide-react";

const journey = [
  {
    number: "01",
    period: "2018 — 2021",
    title: "BCA · Data Science",
    subtitle: "Where the data journey started.",
    description:
      "I started with a BCA in Data Science at Ajeenkya DY Patil University, building my foundation in programming, SQL, data mining, business analytics and exploratory data analysis. This was where I first began connecting software with the questions that data can answer.",
    tags: [
      "Data Science",
      "Python",
      "SQL",
      "Data Mining",
      "Business Analytics",
    ],
    side: "left",
    image: "/images/journey/chapter-01-bca-adypu.png",
  },

  {
    number: "02",
    period: "2021 — 2023",
    title: "Software Development",
    subtitle: "Learning how real products are built.",
    description:
      "I started professionally in software development, working across backend workflows, APIs, database schemas and application development. At QuikieBrain I supported backend data workflows and API communication, while at Antino Labs I worked with PostgreSQL, AWS infrastructure, Power BI and behavioural event data on a large edtech platform.",
    tags: [
      "React Native",
      "Node.js",
      "APIs",
      "PostgreSQL",
      "AWS",
    ],
    side: "right",
    image: "/images/journey/chapter-02-software-development.png",
  },

  {
    number: "03",
    period: "2023 — 2025",
    title: "Analytics Engineering",
    subtitle: "Then I wanted to understand the data.",
    description:
      "At Autobot, my work moved deeper into analytics engineering. I designed ETL pipelines across APIs, spreadsheets and internal databases, automated recurring workflows with Python and built Power BI reporting. These workflows reduced manual data collection by 65%, improved reporting accuracy from 82% to 96%, improved dashboard query performance by 40%, and saved more than 20 hours of manual work each month.",
    tags: [
      "ETL",
      "SQL",
      "Python",
      "Power BI",
      "Data Quality",
    ],
    side: "left",
    image: "/images/journey/chapter-03-analytics-engineering.png",
  },

  {
    number: "04",
    period: "2025 — Present",
    title: "M.Sc. · AI & Data Science",
    subtitle: "Going deeper into the problems behind the data.",
    description:
      "I am pursuing a joint M.Sc. in Artificial Intelligence and Data Science between Deggendorf Institute of Technology and the University of South Bohemia. The 120-ECTS program combines AI and machine learning with advanced data storage, feature engineering, parallel computing, mathematics and information theory, alongside a mandatory internship.",
    tags: [
      "AI",
      "Machine Learning",
      "Feature Engineering",
      "Data Systems",
      "Parallel Computing",
    ],
    side: "right",
    image: "/images/journey/chapter-04-msc-dit-usb.png",
  },

  {
    number: "05",
    period: "2026",
    title: "Building Data Systems",
    subtitle: "Turning concepts into working systems.",
    description:
      "I started building larger data-engineering systems to understand the complete path from raw data to business-ready information. CoreSync explores distributed processing and resource allocation with Spark, MarketPulse processes financial data into analyst-ready PostgreSQL models and Power BI insights, and Retail Analytics processes more than 100,000 e-commerce orders through structured data modelling and BI.",
    tags: [
      "Apache Spark",
      "Kafka",
      "Airflow",
      "PostgreSQL",
      "Power BI",
    ],
    side: "left",
    image: "/images/journey/chapter-05-data-systems.png",
  },

  {
    number: "06",
    period: "July 2026",
    title: "Databricks Certified Data Engineer Professional",
    subtitle: "A milestone in the data engineering journey.",
    description:
      "I earned the Databricks Certified Data Engineer Professional certification in July 2026. The certification validates advanced data-engineering capabilities on the Databricks platform, covering areas such as Python and SQL, ETL pipelines, Delta Lake, streaming, orchestration, governance, security, observability, performance optimization and deployment.",
    tags: [
      "Databricks",
      "Apache Spark",
      "Delta Lake",
      "PySpark",
      "ETL",
    ],
    side: "right",
    type: "certification",
    image: "/images/journey/chapter-06-databricks-professional.png",
  },

  {
    number: "07",
    period: "Where I Can Work With You",
    title: "Data Engineering · AI",
    subtitle: "Let's build something useful together.",
    description:
      "I am looking for a mandatory internship or working-student opportunity where I can bring together my software-development foundation, analytics-engineering experience, data-engineering projects and current AI & Data Science studies. I am particularly interested in building reliable data systems, analytics workflows and AI-driven solutions that solve real problems.",
    tags: [
      "Mandatory Internship",
      "Working Student",
      "Data Engineering",
      "Analytics Engineering",
      "AI",
    ],
    side: "left",
    type: "opportunity",
    image: "/images/journey/chapter-07-opportunity.png",
  },
];

function JourneyCard({ item, opacity }) {
  const isCertification = item.type === "certification";
  const isOpportunity = item.type === "opportunity";

  return (
    <div
      className={[
        "journey-card",
        `journey-card--${item.side}`,
        isCertification ? "journey-card--certification" : "",
        isOpportunity ? "journey-card--opportunity" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ opacity }}
    >
      <article className="journey-card__body">
        <span className="journey-card__period">
          CHAPTER {item.number} &nbsp;|&nbsp; {item.period}
        </span>

        <h3>{item.title}</h3>

        <h4>{item.subtitle}</h4>

        <p>{item.description}</p>

        <div className="journey-card__tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {isCertification && (
          <div className="journey-card__verified">
            <Award size={15} strokeWidth={1.8} />
            <span>Professional Certification</span>
          </div>
        )}

        {isOpportunity && (
          <div className="journey-card__actions">
            <a href="#projects">
              <span>Explore my work</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>

            <a href="#contact">
              <span>Let's connect</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </a>
          </div>
        )}
      </article>

      <div className="journey-card__marker">
        {isCertification ? (
          <Award size={20} strokeWidth={1.8} />
        ) : (
          item.number
        )}
      </div>

      <div className="journey-card__image">
        <img
          src={item.image}
          alt={`${item.title} — ${item.period}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function Journey() {
  const introRef = useRef(null);
  const cardRefs = useRef([]);

  const [introOpacity, setIntroOpacity] = useState(1);
  const [cardOpacities, setCardOpacities] = useState(() =>
    journey.map(() => 1),
  );

  useEffect(() => {
    const updateJourneyFade = () => {
      const intro = introRef.current;

      if (intro) {
        const rect = intro.getBoundingClientRect();

        const fadeStart = window.innerHeight * 0.35;
        const fadeEnd = window.innerHeight * 0.05;

        let opacity = 1;

        if (rect.top < fadeStart) {
          opacity =
            (rect.top - fadeEnd) /
            (fadeStart - fadeEnd);

          opacity = Math.min(Math.max(opacity, 0), 1);
        }

        setIntroOpacity(opacity);
      }

      const nextCardOpacities = cardRefs.current.map((card) => {
        if (!card) {
          return 1;
        }

        const rect = card.getBoundingClientRect();

        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;

        const fadeDistance = window.innerHeight * 0.55;

        const distanceFromCenter = Math.abs(
          cardCenter - viewportCenter,
        );

        let opacity =
          1 - distanceFromCenter / fadeDistance;

        opacity = Math.min(Math.max(opacity, 0), 1);

        return opacity;
      });

      setCardOpacities(nextCardOpacities);
    };

    updateJourneyFade();

    window.addEventListener("scroll", updateJourneyFade, {
      passive: true,
    });

    window.addEventListener("resize", updateJourneyFade);

    return () => {
      window.removeEventListener("scroll", updateJourneyFade);
      window.removeEventListener("resize", updateJourneyFade);
    };
  }, []);

  return (
    <section className="journey" id="journey">
      <div
        ref={introRef}
        className="journey__intro"
        style={{ opacity: introOpacity }}
      >
        <span className="journey__eyebrow">
          THE JOURNEY
        </span>

        <h2>
          How I got
          <span> here.</span>
        </h2>

        <p>
          Every step changed the kind of problems I wanted
          to solve. From building applications to
          engineering data systems.
        </p>

        <div className="journey__scroll">
          <ArrowDown size={18} strokeWidth={1.7} />
          <span>Follow the path</span>
        </div>
      </div>

      <div className="journey__timeline">
        <div className="journey__line" />

        {journey.map((item, index) => (
          <div
            key={item.number}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
          >
            <JourneyCard
              item={item}
              opacity={cardOpacities[index]}
            />
          </div>
        ))}
      </div>

      <div className="journey__next">
        <div>
          <span>THE NEXT CHAPTER</span>

          <h3>
            Ready to turn
            <br />
            data into impact.
          </h3>
        </div>

        <a href="#contact" aria-label="Let's connect">
          <ArrowUpRight size={22} strokeWidth={1.8} />
          <span>Let's connect</span>
        </a>
      </div>
    </section>
  );
}

export default Journey;