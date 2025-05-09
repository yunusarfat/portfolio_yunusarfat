const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: "bxl-javascript" },
      { name: "TypeScript", icon: "bxl-typescript" },
      { name: "C++", icon: "bxl-c-plus-plus" },
      { name: "C", icon: "bxs-terminal" }
    ]
  },
  {
    name: "Front-End",
    skills: [
      { name: "React.js", icon: "bxl-react" },
      { name: "HTML & CSS", icon: "bxl-html5" },
      { name: "Tailwind CSS", icon: "bxl-tailwind-css" },
      { name: "Redux Toolkit", icon: "bxl-redux" },
      { name: "Framer Motion", icon: "bxs-bolt" }
    ]
  },
  {
    name: "Back-End",
    skills: [
      { name: "Node.js", icon: "bxl-nodejs" },
      { name: "Express.js", icon: "bxs-data" },
      { name: "RESTful APIs", icon: "bx bx-transfer" },
      { name: "MongoDB", icon: "bxl-mongodb" },
      { name: "SQL Server", icon: "bxs-data" }
    ]
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git/GitHub", icon: "bxl-github" },
      { name: "Postman", icon: "bxs-envelope" },
      { name: "Firebase", icon: "bxl-firebase" },
      { name: "AWS", icon: "bxl-aws" },
      { name: "Competitive Programming", icon: "bxs-brain" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-navy-dark mb-16 font-poppins">
          <span className="text-blue-600">My</span> Skills
        </h2>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-xl font-semibold text-blue-800 mb-6 flex items-center gap-2">
                <i className="bx bxs-folder text-2xl"></i> {category.name}
              </h3>
              <div className="grid bg-gray-200 p-3 rounded-2xl shadow-black hover:shadow-md grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-white rounded-xl shadow-md p-5 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105 fade-in delay-${index * 2}`}
                  >
                    <i className={`bx ${skill.icon} text-3xl text-blue-600 mb-2`}></i>
                    <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
