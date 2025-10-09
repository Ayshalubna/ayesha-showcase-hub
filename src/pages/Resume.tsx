import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const skills = {
    "Programming": ["Python", "R", "SQL", "C/C++"],
    "Machine Learning": ["Scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch"],
    "Data Analytics": ["Power BI", "Tableau", "Looker Studio", "Advanced Excel"],
    "Cloud & DevOps": ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Jenkins"],
    "Big Data": ["Apache Spark", "Apache Kafka", "Apache Airflow", "dbt"],
    "Tools": ["Git", "Jupyter", "VS Code", "MLflow", "FastAPI", "Streamlit"],
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative">
      {/* Backdrop effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my AI/ML Engineer resume
          </p>
        </div>

        {/* Resume Download */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-glow border-primary/30 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <FileText size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl">My Resume</CardTitle>
              </div>
              <CardDescription className="text-base">
                Focused on machine learning, AI engineering, and deep learning expertise
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold mb-3 text-primary">Highlights</h4>
                <ul className="space-y-2">
                  {[
                    "Machine Learning & AI specialization",
                    "Deep Learning with TensorFlow & PyTorch",
                    "MLOps and cloud deployment experience",
                    "Generative AI and LLM fine-tuning",
                  ].map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="w-full shadow-glow bg-gradient-primary border-0 hover:shadow-glow text-white">
                <a href="/resumes/ayesha-lubna-resume.pdf" download="Ayesha_Lubna_Resume.pdf">
                  <Download className="mr-2" size={18} />
                  Download PDF
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Skills Overview */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <Card
                key={index}
                className="shadow-card border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-primary/20 shadow-glow">
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can contribute to your team
            </p>
            <Button asChild size="lg" className="shadow-glow bg-gradient-primary border-0 hover:shadow-glow">
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
