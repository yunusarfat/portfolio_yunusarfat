import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react"; // Optional: lucide-react icons

const Experience = () => {
  const experiences = [
    {
      company: "Shop Online New York",
      role: "Frontend Developer Intern",
      period: "November 2025 - Present",
      location: "US-Based (Remote)",
      description: [
        "Collaborating with a US-based e-commerce team to implement high-performance UI features.",
        "Maintaining and optimizing the codebase for a seamless shopping experience.",
      ],
      skills: ["React.js", "Tailwind CSS", "E-commerce"],
    },
    {
      company: "IIUC Alumni Portal",
      role: "Frontend Lead and Backend contributor (Academic Project)",
      period: "October 2025 - December 2025",
      location: "Academic Team",
      description: [
        "Led a four-member frontend team, ensuring responsive UI/UX and smooth API integration.",
        "Implemented Role-Based Access Control (RBAC) to manage permissions and secure data.",
      ],
      skills: ["React.js", "Redux Toolkit", "Python", "API Integration"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
          Work{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0 fade-in-up"
              style={{ 
                animation: "fadeInUp 0.8s ease-out forwards", 
                animationDelay: `${index * 200}ms` 
              }}
            >
              {/* Desktop Timeline Layout */}
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                
                {/* Timeframe - Hidden on mobile, visible on MD+ */}
                <div className="hidden md:block md:col-span-3 text-right pt-4">
                  <p className="text-purple-400 font-medium">{exp.period}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                </div>

                {/* Vertical Line & Dot */}
                <div className="absolute left-0 md:left-auto md:col-span-1 h-full flex justify-center">
                  <div className="w-px bg-gray-700 h-full absolute"></div>
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900 z-10 mt-5"></div>
                </div>

                {/* Content Card */}
                <Card className="md:col-span-8 bg-gray-800/50 border border-gray-800 hover:border-purple-500/50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold tex-black">{exp.role}</h3>
                        <p className="text-pink-500 font-semibold text-lg">{exp.company}</p>
                      </div>
                      {/* Mobile Period Display */}
                      <div className="md:hidden mt-2 flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-900/30 text-purple-600 border-none hover:bg-purple-900/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;