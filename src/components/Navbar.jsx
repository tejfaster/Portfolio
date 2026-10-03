function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar__brand" aria-label="Tej Pratap home">
        <span className="navbar__logo">TP</span>

        <span className="navbar__identity">
          <strong>Tej Pratap</strong>
          <small>Data · AI · Analytics Engineering</small>
        </span>
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#journey">Journey</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="navbar__cta">
        <span className="navbar__status" />
        <span>Open to Opportunities</span>
      </a>
    </header>
  )
}

export default Navbar