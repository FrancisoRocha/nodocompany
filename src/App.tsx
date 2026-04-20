import { Suspense, lazy } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { GridBackground } from "./components/layout/GridBackground";
import { Hero } from "./components/sections/Hero";

const IsometricAI = lazy(() => import("./components/features/IsometricAI/IsometricAI").then(module => ({ default: module.IsometricAI })));
const TechBar = lazy(() => import("./components/sections/TechBar").then(module => ({ default: module.TechBar })));
const Services = lazy(() => import("./components/sections/Services").then(module => ({ default: module.Services })));
const Process = lazy(() => import("./components/sections/Process").then(module => ({ default: module.Process })));
const About = lazy(() => import("./components/sections/About").then(module => ({ default: module.About })));
const Team = lazy(() => import("./components/sections/Team").then(module => ({ default: module.Team })));
const CTA = lazy(() => import("./components/sections/CTA").then(module => ({ default: module.CTA })));

function App() {
  return (
    // Cambiamos a bg-slate-50 (#f8fafc) para un look más tech y limpio
    <div className="relative selection:bg-blue-100 selection:text-blue-900 bg-[#f8fafc] text-slate-900 overflow-x-hidden antialiased">
      <GridBackground />
      <Navbar />
      
      <Hero />
      
      <Suspense fallback={<div className="h-40 bg-transparent" />}>
        <main>
          <IsometricAI />
          <TechBar />
          <Services />
          <Process />
          <About />
          <Team />
          <CTA />
        </main>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
