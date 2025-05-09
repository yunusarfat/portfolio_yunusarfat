import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CodeCanvas (Online Code IDE)",
      description: "A full-stack collaborative code editor with real-time editing and syntax highlighting.",
      details: [
        "Built a full-stack collaborative code editor with Monaco Editor supporting real-time code editing and syntax highlighting.",
        "Implemented user authentication using JWT to manage secure login and route protection.",
        "Created RESTful APIs with Express.js and MongoDB to handle user data and code sessions.",
        "Designed UI with Tailwind CSS for an intuitive coding experience."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Monaco Editor"],
      demoLink: "#",
      codeLink: "https://github.com/yunusarfat/CodeCanvas-online-code-IDE-with-MERN"
    },
    {
      id: 2,
      title: "Taskify (Notes App)",
      description: "A full-featured notes application with user authentication and database integration.",
      details: [
        "Developed RESTful APIs with Node.js and Express.js, integrating MongoDB for dynamic notes and user data.",
        "Implemented user Authentication with JWT."
      ],
      tags: ["React.js", "Express.js", "MongoDB", "Node.js", "JavaScript"],
      demoLink: "#",
      codeLink: "https://github.com/yunusarfat/Taskify_notes_app_using_MERN"
    },
    {
      id: 3,
      title: "ImagiNest (Photo Sharing App)",
      description: "A full-stack image uploading and sharing platform with cloud storage integration.",
      details: [
        "A full-stack image uploading platform developed using the MERN stack.",
        "Users can upload photos, which are stored securely on Cloudinary.",
        "Integrated optimized image management."
      ],
      tags: ["React.js", "Express.js", "MongoDB", "Node.js", "JavaScript", "Cloudinary"],
      demoLink: "#",
      codeLink: "https://github.com/yunusarfat/ImagiNest_PhotoSharing_using_MERN"
    },
    {
      id: 4,
      title: "Spotify Clone",
      description: "A music streaming application replica with modern responsive design.",
      details: [
        "A music streaming app replica inspired by Spotify.",
        "Includes music browsing, playlists, and a modern responsive design."
      ],
      tags: ["React.js", "Tailwind CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "https://github.com/yunusarfat/Spotify_clone-using-react.js-and-tailwind"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-navy-dark">
          My <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-md">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-blue-100">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 text-gray-700 mb-4">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 pt-0">
                
                {project.codeLink && (
                  <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                    <a href={project.codeLink} target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
