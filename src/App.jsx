import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";

function App() {
  return (
    <>
      <Navbar />

      {/* Global cinematic background.
          This stays fixed while the career story scrolls over it. */}
      <div className="cinematic-background" aria-hidden="true">
        <div className="cinematic-background__image" />
        <div className="cinematic-background__overlay" />
      </div>

      <main className="portfolio-page">
        <Hero />
        <Journey />
      </main>
    </>
  );
}

export default App;