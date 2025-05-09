import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-poppins text-navy-dark">
            About <span className="text-blue-600">Me</span>
          </h2>

          <Card className="shadow-lg hover:shadow-xl  border-0 mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-navy-dark">Summary of Qualifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Proficient in full-stack development with expertise in React.js, Node.js, Express.js, and MongoDB.</span>
                </li>
                <li className="flex">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Skilled in responsive UI design using Tailwind CSS, Framer Motion, and modern front-end technologies.</span>
                </li>
                <li className="flex">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Experienced in designing and developing RESTful APIs, implementing authentication systems, conducting API testing, and utilizing Git, GitHub, and Postman.</span>
                </li>
                <li className="flex">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Competitive programmer with 450+ problems solved on Codeforces and CodeChef.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-navy-dark">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Object-Oriented Programming",
                  "Web Development",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Software Engineering",
                  "Compilers",
                ].map((course) => (
                  <Badge key={course} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-navy-dark">Certifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="pb-2 border-b border-gray-100">
                  <p className="font-medium">Complete Firebase Authentication Masterclass</p>
                  <p className="text-sm text-gray-500">Udemy</p>
                </li>
                <li className="pb-2 border-b border-gray-100">
                  <p className="font-medium">Unlock Your Digital Potential: Master MS Office, Web Development, and WordPress</p>
                  <p className="text-sm text-gray-500">Udemy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
