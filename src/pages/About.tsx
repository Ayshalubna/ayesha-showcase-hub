import { GraduationCap, Briefcase, Award, Target } from "lucide-react";
import aboutPhoto from "@/assets/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 relative">
      {/* Backdrop effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging data science and AI to solve real-world problems
          </p>
        </div>

        {/* Single Photo Section */}
        <div className="flex justify-center mb-16 animate-scale-in">
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <img 
              src={aboutPhoto} 
              alt="Ayesha Lubna" 
              className="w-full h-full rounded-2xl object-cover object-top border-4 border-primary/30 shadow-glow hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="text-primary" size={24} />
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a results-oriented data professional specializing in Data Analytics, Machine Learning,
              AI Engineering, and Predictive Modeling. Currently pursuing my B.Tech in Information Science
              and Engineering at Guru Nanak Dev Engineering College with an impressive 84.55% CGPA.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in transforming complex datasets into strategic decisions and measurable
              business impact. I combine strong technical skills in Python, SQL, and cloud platforms
              with the ability to build data pipelines, deploy ML models, and deliver actionable BI insights.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 animate-slide-in">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="text-primary" size={28} />
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-card hover:shadow-glow transition-all">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    B.Tech in Information Science and Engineering
                  </h3>
                  <p className="text-primary font-medium">Guru Nanak Dev Engineering College (VTU)</p>
                  <p className="text-sm text-muted-foreground mt-1">CGPA: 84.55%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">2021 - 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-card hover:shadow-glow transition-all">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    12th (PUC - Science)
                  </h3>
                  <p className="text-primary font-medium">Shaheen Group of Institutions</p>
                  <p className="text-sm text-muted-foreground mt-1">Score: 93%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16 animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="text-primary" size={28} />
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-card hover:shadow-glow transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Artificial Intelligence Consultant Intern
                    </h3>
                    <p className="text-primary font-medium">Rubixe.ai</p>
                  </div>
                  <p className="text-sm font-medium">Jan - Mar 2024</p>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Built predictive models and Power BI dashboards enabling data-driven client decisions</li>
                  <li>Reduced reporting time by 35% through analytical dataset optimization</li>
                  <li>Performed data cleansing and analysis in SQL and Python</li>
                </ul>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-card hover:shadow-glow transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">DevOps Intern</h3>
                    <p className="text-primary font-medium">Seventh Sense Solutions</p>
                  </div>
                  <p className="text-sm font-medium">Oct - Nov 2023</p>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Automated CI/CD pipelines using Jenkins and Docker</li>
                  <li>Achieved 99% deployment success rate</li>
                  <li>Configured GitHub webhooks for automated builds on AWS EC2</li>
                </ul>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-card hover:shadow-glow transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Soft Skills Intern</h3>
                    <p className="text-primary font-medium">Seventh Sense Talent Solutions</p>
                  </div>
                  <p className="text-sm font-medium">2022</p>
                </div>
                <p className="text-muted-foreground">
                  Completed corporate communication and leadership training
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="text-primary" size={28} />
            Certifications & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "AI Engineer - DataMites",
              "Data Science Course - DataMites",
              "AI Assessment (Gold) - NASSCOM FutureSkills Prime",
              "ML with Python - IBM",
              "Python Programming - Infosys",
              "Organizer & Paper Presenter - Intl Conference on AI/IoT/ML 2024",
              "Job Simulations - Deloitte & BCG Digital Transformation (Forage)",
            ].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg shadow-card hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
