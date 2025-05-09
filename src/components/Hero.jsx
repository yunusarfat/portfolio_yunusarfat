import React from "react";
import { Button } from "./ui/button";
import image from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-12">
            <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark mb-4 leading-tight font-poppins">
              Hi, I'm Mohammad Arfat
              <span className="block text-blue-600">Full-Stack Developer</span>
            </h1>

            <p
              className="animate-slide-up text-lg text-gray-700 mb-8 delay-100 "
              style={{ animationDelay: "0.2s" }}
            >
              Proficient in building responsive and scalable web applications with React.js, Node.js, Express.js, and MongoDB.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-slide-up "
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open("/CV-ARFAT.pdf", "_blank")}
              >
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
            </div>

            <div
              className="flex mt-8 gap-6 animate-slide-up "
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://www.linkedin.com/in/yunus-md-arfat"
                
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/yunusarfat"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="mailto:mdarfatyunus.gmail.com"
                className="text-gray-600 hover:text-blue-600"
              >
                {/* Email Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:w-2/5 mt-12 md:mt-0">
  <div className="relative rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden border-4 border-white shadow-xl animate-fade-in">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-90 z-10" />
    
    {/* 👇 Profile Image Here */}
    <img
      src={image}
      alt="Profile"
      className="absolute inset-0 w-full h-full object-cover z-20"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
