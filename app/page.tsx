import About from "@/components/sections/About";
import Navbar from "@/components/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certs from "@/components/sections/Certs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div>
        <div id="top-sentinel" className="h-px" />
        <div id="about" className="scroll-mt-14">
          <About />
        </div>
        <div id="certification" className="scroll-mt-14">
          <Certs />
        </div>
        <div id="projects" className="scroll-mt-14">
          <Projects />
        </div>
        <div id="skills" className="scroll-mt-14">
          <Skills />
        </div>
        <div id="contact" className="scroll-mt-14">
          <Contact />
        </div>
      </div>
    </div>
  );
}
