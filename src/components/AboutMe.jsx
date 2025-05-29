import { Briefcase, Code, User, ArrowDown } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer
            </h3>

            <p className="text-muted-foreground">
              Alongside my passion for programming, I’ve completed multiple
              internships and research projects that have helped me develop
              essential skills in full-stack development and AI/ML.
            </p>

            <p className="text-muted-foreground">
              I’m driven by a relentless curiosity and a commitment to
              continuous growth. I actively seek out new challenges and learning
              opportunities—whether that’s diving into emerging technologies,
              collaborating on team projects, or contributing to open-source
              communities. Building genuine connections and fostering inclusive,
              supportive environments are at the heart of how I work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="../../public/Sriteja_Vemugunta_Resume.pdf"
                download="Sriteja_Vemugunta_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable end-to-end applications by integrating
                    seamless front-end interfaces with robust back-end services
                    and databases.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Designing, training, and deploying machine learning models
                    and data pipelines to extract actionable insights from
                    complex datasets.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps </h4>
                  <p className="text-muted-foreground">
                    Streamlining development workflows through infrastructure as
                    code, containerization, and continuous
                    integration/continuous delivery for reliable deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#skills">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </a>
    </section>
  );
};
