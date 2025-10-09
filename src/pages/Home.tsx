import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Database, Brain, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import techBackdrop1 from "@/assets/tech-backdrop-1.jpg";
import techBackdrop2 from "@/assets/tech-backdrop-2.jpg";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Technical Backdrop */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20">
          <img src={techBackdrop1} alt="" className="w-full h-full object-cover mix-blend-screen" />
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20">
          <img src={techBackdrop2} alt="" className="w-full h-full object-cover mix-blend-screen" />
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4 backdrop-blur-sm">
              <Sparkles size={16} />
              AI/ML Engineer & Data Scientist
            </div>

            <div className="space-y-2">
              <p className="text-lg text-primary">Hello! I Am</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Ayesha Lubna
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Data Scientist who{" "}
              <span className="text-primary font-semibold">transforms data</span> into{" "}
              <span className="text-accent font-semibold">intelligent solutions</span>
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming complex data into actionable insights and building intelligent solutions
              with machine learning, analytics, and cloud technologies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button asChild size="lg" className="group shadow-glow hover:shadow-glow transition-all bg-gradient-primary border-0">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/10">
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects", value: "10+" },
              { label: "Technologies", value: "20+" },
              { label: "Certifications", value: "8+" },
              { label: "Experience", value: "2+ Yrs" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-card animate-scale-in hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Machine Learning & AI",
                icon: Brain,
                skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Deep Learning"],
              },
              {
                title: "Data Analytics & BI",
                icon: Database,
                skills: ["SQL", "Power BI", "Tableau", "Excel", "Pandas", "NumPy"],
              },
              {
                title: "Cloud & DevOps",
                icon: Cloud,
                skills: ["AWS", "Docker", "Jenkins", "MLflow", "FastAPI", "Git"],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="p-12 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="shadow-glow hover:shadow-glow transition-all bg-gradient-primary border-0">
                <Link to="/resume">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
