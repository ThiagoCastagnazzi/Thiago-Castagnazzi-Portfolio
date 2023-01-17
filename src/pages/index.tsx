import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-whiten">
      <Head>
        <title>Thiago Portfolio</title>
      </Head>

      <Header />

      <Nav />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-center ">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
}
