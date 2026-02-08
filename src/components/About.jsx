import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  const coursework = [
    "Object-Oriented Programming (OOP)",
    "Web Development",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Software Engineering",
    "Compilers",
  ];

  const certifications = [
    {
      title: "AI+ Prompt Engineer Level 1™",
      issuer: "AI CERTs",
    },
    {
      title: "Craft effective prompts for Microsoft 365 Copilot",
      issuer: "Microsoft",
    },
  ];

  return (
    <section
      id="about"
      className="py-2 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
          About{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        {/* Summary Card */}
        <Card className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg mb-12 hover:shadow-2xl transition-all duration-300 fade-in-up"
          style={{ animation: "fadeInUp 0.8s ease-out forwards" }}
        >
          <CardContent className="p-6">
            <h3 className="text-xl lg:text-2xl font-bold text-purple-400 mb-4">
              Summary of Qualifications
            </h3>
            <p className="text-gray-500 leading-relaxed">
              I am a full-stack developer with expertise in building scalable and user-friendly web applications using Next.js, React.js, Node.js, and Django REST Framework. I specialize in creating responsive, intuitive interfaces and modern frontend technologies, while also designing and integrating secure RESTful APIs and authentication systems. With experience working across both SQL and NoSQL databases, along with Git/GitHub workflows, Postman testing, and collaborative projects, I bring clean code practices, problem-solving skills, and teamwork to deliver impactful software solutions.
            </p>
          </CardContent>
        </Card>

        {/* Coursework and Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Coursework */}
          <div className="fade-in-up" style={{ animation: "fadeInUp 0.8s ease-out forwards", animationDelay: "150ms" }}>
            <h3 className="text-xl lg:text-2xl font-bold text-purple-400 mb-4">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-3">
              {coursework.map((course) => (
                <Badge
                  key={course}
                  variant="outline"
                  className="bg-gray-800 text-purple-400 border border-purple-500/30 px-4 py-2"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="fade-in-up" style={{ animation: "fadeInUp 0.8s ease-out forwards", animationDelay: "300ms" }}>
            <h3 className="text-xl lg:text-2xl font-bold text-purple-400 mb-4">
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.title} className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <p className="text-white font-semibold">{cert.title}</p>
                  <p className="text-purple-400 text-sm mt-1">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
