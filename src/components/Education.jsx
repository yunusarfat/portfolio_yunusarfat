import React from "react";
import { Card, CardContent } from "./ui/card";

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institute: "International Islamic University Chittagong",
    period: "2023 - Present",
  },
  {
    degree: "Higher Secondary",
    institute: "Sir Ashutosh Government College",
    period: "2021",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-purple-800/50 hidden md:block"></div>

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={edu.degree}
                className={` flex flex-col md:flex-row items-center mb-12 relative fade-in-up`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                {/* Empty side for alignment */}
                {isLeft ? (
                  <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                ) : null}

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 border-4 border-gray-900 z-10"></div>

                {/* Card */}
                <div className={`md:w-1/2 ${isLeft ? "md:pl-8" : "md:pr-8"}`}>
                  <Card className="bg-gray-900 shadow-lg border border-gray-800 hover:border-purple-500/40 transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-500 font-medium">
                        {edu.institute}
                      </p>
                      <p className="text-gray-500 mt-1">{edu.period}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty side for alignment */}
                {!isLeft ? (
                  <div className="md:w-1/2 md:pl-8 md:text-left hidden md:block"></div>
                ) : null}
              </div>
            );
          })}
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

export default Education;
