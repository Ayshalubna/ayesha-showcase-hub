import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Telecom Churn Prediction",
      description: "Built Random Forest and XGBoost models achieving 88% accuracy, reducing projected churn by 12% and enabling proactive retention strategies.",
      technologies: ["Python", "Machine Learning", "Random Forest", "XGBoost", "Data Cleaning"],
      highlights: [
        "Cleaned and engineered 5,000+ customer records",
        "88% prediction accuracy",
        "12% reduction in projected churn",
      ],
    },
    {
      title: "Flight Price Prediction",
      description: "Developed Gradient Boosting regression models predicting flight prices with 90% accuracy and created interactive visualization dashboard.",
      technologies: ["Python", "Regression", "Gradient Boosting", "Plotly", "Feature Engineering"],
      highlights: [
        "90% price prediction accuracy",
        "Interactive Plotly dashboard",
        "Dynamic price visualization",
      ],
    },
    {
      title: "E-Commerce Segmentation & Recommendation",
      description: "Analyzed 200k+ transactions using RFM segmentation and built recommendation system achieving 15% uplift simulation.",
      technologies: ["SQL", "Python", "Tableau", "RFM Analysis", "CLTV"],
      highlights: [
        "200k+ transaction analysis",
        "Tableau dashboard with KPI scorecards",
        "15% uplift in recommendations",
      ],
    },
    {
      title: "Skin Disorder Prediction",
      description: "Trained CNN models (ResNet50, VGG16) achieving 92% classification accuracy for medical image diagnosis.",
      technologies: ["Python", "CNN", "Deep Learning", "ResNet50", "VGG16", "Streamlit"],
      highlights: [
        "92% classification accuracy",
        "Medical image preprocessing",
        "Streamlit diagnostic app",
      ],
    },
    {
      title: "AI Content Writing App",
      description: "Developed text-generation models using Hugging Face Transformers with Flask web interface deployed on Heroku.",
      technologies: ["Python", "NLP", "Transformers", "Flask", "Heroku", "API"],
      highlights: [
        "Real-time content generation",
        "Scalable API endpoints",
        "Improved content efficiency",
      ],
    },
    {
      title: "DevOps CI/CD Pipeline",
      description: "Designed and implemented automated deployment pipeline achieving 99% success rate with Jenkins and Docker.",
      technologies: ["Jenkins", "Docker", "GitHub", "AWS EC2", "CI/CD"],
      highlights: [
        "99% deployment success rate",
        "Automated builds via webhooks",
        "Fast software delivery",
      ],
    },
    {
      title: "Sales Performance Dashboard",
      description: "Designed and automated Tableau dashboard with KPI scorecards, reducing manual reporting tasks by 40%.",
      technologies: ["Tableau", "SQL", "KPI Design", "BI", "Automation"],
      highlights: [
        "40% reduction in manual tasks",
        "Automated KPI tracking",
        "Stakeholder-ready insights",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative">
      {/* Backdrop effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and AI engineering
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-card border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <CardHeader className="relative">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-primary">Key Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-primary/20 shadow-glow">
            <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button asChild size="lg" className="shadow-glow bg-gradient-primary border-0 hover:shadow-glow">
              <a
                href="https://github.com/Ayshalubna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={20} />
                Visit My GitHub
                <ExternalLink className="ml-2" size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
