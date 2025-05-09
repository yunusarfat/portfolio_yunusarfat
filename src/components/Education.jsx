import React from "react";
import { Card, CardContent } from "./ui/card";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins text-navy-dark">
          My <span className="text-blue-600">Education</span>
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-blue-200 hidden md:block"></div>

          {/* First education item */}
          <div className="flex flex-col md:flex-row items-center mb-12 relative">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
              <Card className="shadow-md border-0 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-dark">Bachelor of Engineering in Computer Science</h3>
                  <p className="text-blue-600 font-medium">International Islamic University Chittagong</p>
                  <p className="text-gray-600 mt-1">2023-present</p>
                </CardContent>
              </Card>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-10 hidden md:block"></div>

            <div className="md:w-1/2 md:pl-12"></div>
          </div>

          {/* Second education item */}
          <div className="flex flex-col md:flex-row items-center mb-12 relative">
            <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block"></div>

            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white z-10 hidden md:block"></div>

            <div className="md:w-1/2 md:pl-12">
              <Card className="shadow-md border-0 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-dark">Higher Secondary</h3>
                  <p className="text-blue-600 font-medium">Sir Ashutosh Government College</p>
                  <p className="text-gray-600 mt-1">2021</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
