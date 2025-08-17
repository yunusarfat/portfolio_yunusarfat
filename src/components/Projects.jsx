import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TalkTutor",
      subtitle: "AI SaaS Voice Tutoring App",
      description:
        "Built a real-time AI tutoring platform that enables voice-based learning using Vapi voice synthesis. Integrated Supabase for session management, database storage, and user bookmarks.",
      technologies: [
        "TypeScript",
        "Next.js",
        "React.js",
        "Supabase",
        "Clerk",
        "Tailwind CSS",
        "Vapi",
      ],
      codeLink: "https://github.com/yunusarfat/TalkTutor_AI_SaaS_app_using_Nextjs",
      image: "/talk.png", // <-- Add your image path here
    },
    {
      id: 2,
      title: "CodeCanvas",
      subtitle: "Online Code IDE",
      description:
        "Built a full-stack collaborative code editor with Monaco Editor supporting real-time code editing and syntax highlighting. Implemented user authentication using JWT to manage secure login and route protection.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Monaco Editor",
      ],
      codeLink: "https://github.com/yunusarfat/CodeCanvas-online-code-IDE-with-MERN",
      image: "/canvas.png",
    },
    {
      id: 3,
      title: "Spotify Clone",
      subtitle: "Music Streaming App",
      description:
        "A music streaming app replica inspired by Spotify. Includes music browsing, playlists, and a modern responsive design with intuitive user interface.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      codeLink: "https://github.com/yunusarfat/Spotify_clone-using-react.js-and-tailwind",
      image: "/spotify.png",
    },
    {
      id: 4,
      title: "IIUC Alumni Portal",
      subtitle: "Academic Project (Frontend Lead & Backend Contributor)",
      description:
        "Led frontend development in a 4-member team, ensuring responsive UI/UX while integrating backend APIs, and contributed to backend features using Django REST Framework with API integrations and database management. Implemented Role-Based Access Control (RBAC) to secure data access and received an 'Excellent' rating from the faculty panel for clean code architecture and design quality.",
      technologies: ["React.js", "Django REST Framework", "Python", "JavaScript"],
      codeLink: "https://github.com/yunusarfat/IIUC_alumni_website_fronted",
      image: "/alumni.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in full-stack
            development, AI integrations, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-800 hover:border-purple-500/40"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Header */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-purple-400 mb-3">
                  {project.subtitle}
                </p>
                <p className="text-gray-400 whitespace-pre-line leading-relaxed text-sm lg:text-base mb-6">
                  {project.description}
                </p>

                {/* Tech List */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button (Code Only) */}
                <div className="flex">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.06 10.94c.59.1.8-.26.8-.58v-2.02c-3.28.72-3.97-1.58-3.97-1.58-.54-1.37-1.32-1.73-1.32-1.73-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.06 1.83 2.78 1.3 3.46.99.1-.77.41-1.3.74-1.6-2.62-.3-5.38-1.31-5.38-5.82 0-1.29.46-2.35 1.22-3.18-.12-.3-.53-1.52.11-3.17 0 0 .99-.32 3.24 1.21a11.3 11.3 0 015.9 0c2.25-1.53 3.24-1.21 3.24-1.21.64 1.65.23 2.87.11 3.17.76.83 1.22 1.89 1.22 3.18 0 4.52-2.77 5.52-5.41 5.81.42.36.8 1.08.8 2.18v3.23c0 .32.21.68.8.57A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
};

export default Projects;
