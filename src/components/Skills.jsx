import React from "react";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "C", icon: "bxs-terminal" },
      { name: "C++", icon: "bxl-c-plus-plus" },
      { name: "JavaScript", icon: "bxl-javascript" },
      { name: "TypeScript", icon: "bxl-typescript" },
      { name: "Python", icon: "bxl-python" },
    ],
  },
  {
    name: "Front-End",
    skills: [
      { name: "Next.js", icon: "bxl-javascript" },
      { name: "HTML", icon: "bxl-html5" },
      { name: "Tailwind CSS", icon: "bxl-tailwind-css" },
      { name: "React.js", icon: "bxl-react" },
      { name: "Redux Toolkit", icon: "bxl-redux" },
      { name: "Framer Motion", icon: "bxs-bolt" },
      { name: "Shadcn UI", icon: "bxs-cube" },
    ],
  },
  {
    name: "Back-End",
    skills: [
      { name: "Node.js", icon: "bxl-nodejs" },
      { name: "Express.js", icon: "bxs-data" },
      { name: "RESTful APIs", icon: "bx bx-transfer" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: "bxl-mongodb" },
      { name: "SQL Server", icon: "bxs-data" },
      { name: "PostgreSQL", icon: "bxl-postgresql" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git/GitHub", icon: "bxl-github" },
      { name: "Postman", icon: "bxs-envelope" },
    ],
  },
  {
    name: "Competitive Programming",
    skills: [
      {
        name: "300+ problems solved",
        icon: "bxs-brain",
      },
    ],
  },
  {
    name: "Machine Learning",
    skills: [
      { name: "Supervised Learning", icon: "bxs-brain" },
      { name: "Unsupervised Learning", icon: "bxs-network-chart" },
      { name: "Model Evaluation", icon: "bxs-check-shield" },
      { name: "Feature Engineering", icon: "bxs-filter-alt" },
    ],
  },
  {
    name: "Python Libraries",
    skills: [
      { name: "NumPy", icon: "bxs-bar-chart-alt-2" },
      { name: "Pandas", icon: "bxs-spreadsheet" },
      { name: "Matplotlib", icon: "bxs-pie-chart-alt-2" },
    ],
  },
    
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            My
          </span>{" "}
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animation: "fadeInUp 0.8s ease-out forwards" }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
                <i className="bx bxs-folder text-2xl"></i> {category.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="bg-gray-900 rounded-2xl shadow-lg p-5 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-800 hover:border-purple-500/40"
                    style={{
                      animationDelay: `${idx * 100}ms`,
                      animation: "fadeInUp 0.8s ease-out forwards",
                    }}
                  >
                    <i className={`bx ${skill.icon} text-4xl text-purple-400 mb-3`}></i>
                    <p className="text-sm lg:text-base font-medium text-gray-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

export default Skills;
