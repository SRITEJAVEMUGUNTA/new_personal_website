import { ArrowDown } from "lucide-react";
import sound from "../assets/pron.m4a";
import { useState } from "react";
export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const play = () => {
    new Audio(sound).play();
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span
              onClick={play}
              className={`text-decoration-line underline transition-opacity duration-300 ${
                isHovered ? "opacity-50" : "opacity-100"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Sriteja
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Vemugunta
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a Computer Science & Data Science student at the University of
            Wisconsin–Madison with a passion for full-stack development and
            AI/ML. Always eager to learn, I thrive on tackling new challenges
            and building impactful solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <a href="#about">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </a>
    </section>
  );
};
