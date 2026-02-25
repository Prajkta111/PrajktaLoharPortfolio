import FloatingBlobs from "@/components/FloatingBlobs";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <FloatingBlobs />
    <ScrollProgress />
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Achievements />
    <Contact />
    <footer className="text-center py-8 text-sm text-muted-foreground border-t border-border relative z-10">
      © 2025 Prajkta Lohar. All rights reserved.
    </footer>
  </div>
);

export default Index;
