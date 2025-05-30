import React from "react";
import { cn } from "../lib/utils";
import { useState } from "react";

const skills = [
  // Programming Languages
  { name: "Python", category: "programming" },
  { name: "Java", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "C++", category: "programming" },
  { name: "Go/Golang", category: "programming" },
  { name: "HTML", category: "programming" },
  { name: "CSS", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "Kotlin", category: "programming" },
  { name: "x86-assembly", category: "programming" },

  // Frameworks
  { name: "React.js", category: "frameworks" },
  { name: "Node.js", category: "frameworks" },
  { name: "Express.js", category: "frameworks" },
  { name: "Flask", category: "frameworks" },
  { name: "TensorFlow", category: "frameworks" },
  { name: "PyTorch", category: "frameworks" },
  { name: "NumPy", category: "frameworks" },
  { name: "pandas", category: "frameworks" },
  { name: "Spring Boot", category: "frameworks" },
  { name: "Flutter", category: "frameworks" },

  // Databases / Query Languages
  { name: "MongoDB", category: "databases" },
  { name: "Mongoose", category: "databases" },
  { name: "MySQL", category: "databases" },
  { name: "Firebase", category: "databases" },
  { name: "PostgreSQL", category: "databases" },
  { name: "GraphQL", category: "databases" },

  // Technologies
  { name: "Git", category: "technologies" },
  { name: "Google Cloud Platform (GCP)", category: "technologies" },
  { name: "AWS (S3, EC2, RDS, SQS)", category: "technologies" },
  { name: "Docker", category: "technologies" },
  { name: "Kubernetes", category: "technologies" },
  { name: "Linux", category: "technologies" },
  { name: "Auth0", category: "technologies" },
  { name: "Kafka", category: "technologies" },
];

const categories = [
  "all",
  "programming",
  "frameworks",
  "databases",
  "technologies",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
