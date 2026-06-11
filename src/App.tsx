import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { ExperienceEducation } from "./components/ExperienceEducation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectShowcase />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
