import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { TechBar } from "./components/TechBar/TechBar";
import { Services } from "./components/Services/Services";
import { Process } from "./components/Process/Process";
import { About } from "./components/About/About";
import { Team } from "./components/Team/Team";
import { CTA } from "./components/CTA/CTA";
import { Footer } from "./components/Footer/Footer";
import { GridBackground } from "./components/GridBackground/GridBackground";

function App() {
  return (
    <div className="relative">
      <GridBackground />
      <Navbar />
      <Hero />
      <TechBar />
      <Services />
      <Process />
      <About />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
