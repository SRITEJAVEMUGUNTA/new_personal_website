import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { ContactSection } from "../components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
