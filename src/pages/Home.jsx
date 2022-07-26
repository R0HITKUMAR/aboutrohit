import React from "react";
// import Preloader from "../components/begin/Preloader";
import Hero from "../components/hero/Hero.jsx";
import About from "../components/about/About.jsx";
import Skills from "../components/skills/Skills.jsx";
import Timeline from "../components/timeline/Timeline.jsx";
import Projects from "../components/projects/Projects.jsx";
import Certificates from "../components/certificates/Certificates.jsx";
import Badges from "../components/badges/Badges.jsx";
import Blog from "../components/blog/Blog.jsx";
import Map from "../components/contact/Map.jsx";
import Contact from "../components/contact/Contact.jsx";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Certificates />
      <Badges />
      <Blog />
      <Map />
      <Contact />
    </>
  );
}
