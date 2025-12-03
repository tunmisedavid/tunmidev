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
        <div id="about">
          <About />
        </div>
        <div id="certification" className="">
          <Certs />
        </div>
        <div id="projects" className="">
          <Projects />
        </div>
        <div id="skills" className="">
          <Skills />
        </div>
        <div id="contact" className="">
          <Contact />
        </div>
      </div>
    </div>
  );
}
