import React from "react";
import { ArrowRight, ExternalLink, Github, ArrowDown } from "lucide-react";
import certificateImage from "../assets/certificate.png";
import skin from "../assets/skin.png";
import ML from "../assets/ML.png";
import mobileGame from "../assets/mobileGame.png";
import video from "../assets/Hear_2_See_Demo.MP4";
const projects = [
  {
    id: 1,
    title: "JP Morgan Chase Virtual Project (Midas Core)",
    description:
      "As part of JPMorgan Chase’s Virtual Experience Program, I developed a microservice in Java using Spring Boot to process financial transactions via Kafka. The project emphasized secure transaction validation, database integrity, and integration with an external Incentive API to update recipient balances.",
    image: certificateImage,
    tags: ["Java", "Spring", "Kafka", "SQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Skin Cancer Detector - Pomona Valley Hospital",
    description:
      "Collaborated with a team under Dr. Giri Vuyyuru to develop a CNN for skin cancer detection using TensorFlow and Keras, trained on a dataset of over 30,000 medical images. Improved model accuracy by 7% through advanced tuning techniques and architectural optimizations.",
    image: skin,
    tags: ["Python", "TensorFlow", "OpenCV", "Keras"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ML Visualization Tool",
    description:
      'This visualization suite aims to shift the common perception of machine learning algorithms as mysterious "black boxes." Users can explore Linear Regression, Logistic Regression, and K-Means Clustering, observing how each algorithm processes and adapts to the data with every iteration. By placing points on the graph and clicking the iterate button, users can see that these algorithms are not as complex as they may seem, but rather are built on mathematical principles and human creativity.',
    image: ML,
    tags: ["Python", "JavaScript", "Flask"],
    demoUrl: "#",
    githubUrl: "https://github.com/SRITEJAVEMUGUNTA/ML-Visualization-Tool",
  },
  {
    id: 4,
    title: "Sheikah - Mobile App Game",
    description:
      "Created a React Native mobile app that rewards users with AI-generated collectibles based on their visits to nearby points of interest. Using DALL·E 3 for custom designs, Firebase for user and trade data management, and the OpenCage API for real-time geolocation, the app blends creativity with exploration.",
    image: mobileGame,
    tags: ["React Native", "JavaScript", "Supabase"],
    demoUrl: "#",
    githubUrl: "https://github.com/SRITEJAVEMUGUNTA/CheeseHacks2024-Sheikah",
  },
  {
    id: 5,
    title: "Hear-2-See",
    description:
      "Hear-2-See is a mobile app that converts images into audio descriptions to make visual content accessible through sound. By combining Google and Azure’s image recognition with OpenAI’s language model and Google Text-to-Speech, it empowers visually impaired users to better understand their surroundings through real-time, descriptive audio.",
    image: mobileGame,
    tags: ["Python", "Google Cloud Platform", "Microsoft Azure", "OpenAI"],
    demoUrl: "#",
    githubUrl: "https://github.com/SRITEJAVEMUGUNTA/CheeseHacks2024-Sheikah",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Each of these projects represents a milestone in my journey as a
          developer—driven by a passion for using technology to help others and
          grow through every challenge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {project.id !== 5 ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={video}
                    controls // show play/pause, volume, etc.
                    autoPlay={false} // set to true if you want autoplay
                    loop={false}
                    muted={false}
                    className="w-full rounded-lg shadow-lg"
                  >
                    Your browser doesn’t support HTML5 video.
                  </video>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SRITEJAVEMUGUNTA"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <a href="#contact">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </a>
    </section>
  );
};

export default Projects;
