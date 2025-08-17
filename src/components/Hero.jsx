import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import image from "../assets/profile.jpg";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState("Full-Stack ");
  const titles = ["MERN ", "Software ", "Next.js ", "Full-Stack "];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => {
        const currentIndex = titles.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titles.length;
        return titles[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-gray-900 to-gray-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-12">
            <h1 className=" text-white animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight font-poppins">
              Hi, I'm Mohammad Arfat{" "}
              <span className="block text-blue-400">
                <span className="inline-block min-w-[250px]">
                  <AnimatedTitle title={currentTitle} />
                  Developer
                </span>
              </span>
            </h1>
            
            <p
              className="animate-slide-up text-lg text-gray-300 mb-8 delay-100 "
              style={{ animationDelay: "0.2s" }}
            >
              Proficient in building responsive and scalable web applications with
              Next.js, React.js, Node.js, Django RestFramework.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-slide-up "
              style={{ animationDelay: "0.4s" }}
            >
              <button
                size="lg"
                className="items-center justify-center gap-2 px-2 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
                onClick={() => window.open("/CV-ARFAT.pdf", "_blank")}
              >
                Download CV
              </button>
              <button
                size="lg"
                variant="outline"
                className=" items-center justify-center gap-2 px-2 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>
            <div
              className="flex mt-8 gap-6 animate-slide-up "
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="https://www.linkedin.com/in/yunus-mohammad-arfat-8227a228b"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/yunusarfat"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="mailto:mdarfatyunus.gmail.com"
                className="text-gray-300 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
           <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
            <div className="relative rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-purple-500 shadow-2xl animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400 opacity-30 z-10"></div>
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

const AnimatedTitle = ({ title }) => {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setDisplayedTitle(title);
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [title]);

  return (
    <span
      className={`transition-all duration-500 ease-in-out ${
        isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
      }`}
    >
      {displayedTitle}
    </span>
  );
};

export default Hero;
