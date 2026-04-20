import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { GridBackground } from "./components/layout/GridBackground";
import { Hero } from "./components/sections/Hero";
import { TechBar } from "./components/sections/TechBar";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { About } from "./components/sections/About";
import { Team } from "./components/sections/Team";
import { CTA } from "./components/sections/CTA";
import { IsometricAI } from "./components/features/IsometricAI/IsometricAI";

function App() {
  return (
    <div className="relative">
      <GridBackground />
      <Navbar />
      <Hero />
      <IsometricAI />
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
