import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import SelectedProjects from "./components/SelectedProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div className="cinematic-background" aria-hidden="true">
        <div className="cinematic-background__image" />
        <div className="cinematic-background__overlay" />
      </div>

      <main className="portfolio-page">
        <Hero />
        <Journey />
        <SelectedProjects />
        <Skills />
         <Contact />
      </main>
    </>
  );
}

export default App;