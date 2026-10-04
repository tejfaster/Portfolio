import { ArrowUpRight } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <a
        href="#home"
        className="navbar__brand"
        aria-label="Tej Pratap home"
      >
        <img
          src="/images/brand/tp-logo.png"
          alt="TP"
          className="navbar__logo"
        />

        <div className="navbar__identity">
          <strong>Tej Pratap</strong>

          <small>
            Data · AI · Analytics Engineering
          </small>
        </div>
      </a>

      <nav
        className="navbar__links"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="navbar__link"
        >
          Home
        </a>

        <a
          href="#journey"
          className="navbar__link"
        >
          Journey
        </a>

        <a
          href="#projects"
          className="navbar__link"
        >
          Projects
        </a>

        <a
          href="#skills"
          className="navbar__link"
        >
          Skills
        </a>

        <a
          href="/resume/Tej_Pratap_Master_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__link"
        >
          Resume
        </a>

        <a
          href="#contact"
          className="navbar__link"
        >
          Contact
        </a>
      </nav>

      <a
        href="#contact"
        className="navbar__opportunity"
      >
        <span
          className="navbar__opportunity-dot"
          aria-hidden="true"
        />

        <span>
          Open to Pflichtpraktikum & Working Student
        </span>

        <ArrowUpRight
          size={16}
          strokeWidth={1.8}
        />
      </a>
    </header>
  );
}

export default Navbar;