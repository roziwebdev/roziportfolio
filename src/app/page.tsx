import Projects from "./ui/Projects";
import Tools from "./ui/Tools";
import Hero from "./ui/Hero";
import Contacts from "./ui/Contacts";
import Navbar from "@/components/Navbar";
import Skills from "./ui/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </>

  );
}
