"use client";
import Skills from "./pages/skills";
import Footer from "./footercomponent";
import Project from "./pages/projects";
import Contact from "./pages/contact";
import { motion } from "motion/react";

const IntroComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="max-w-7xl mx-auto"
    >
      <div className="flex justify-between items-center mb-12 bg-[#000000] border-2 border-[#33ff33] p-4">
        <div>
          <h1 className="relative text-2xl md:text-4xl font-bold mb-2 text-[#33ff33]">
            Akash Bhardwaj
            <svg
            viewBox="0 0 325 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-4 -top-4"
          >
            <motion.path
            initial={{pathLength : 0}}
            animate={{pathLength : 1}}
            transition={{
              duration : 1,
              ease : "easeInOut"
            }}
              d="M146 7.53746L118.5 9.13644L46 16.6364C-15.9999 19.6364 3.50001 46.5 10 51L19.5 57L31.5 61.5L40 63L123 67.5C149 62.5 313.5 83.6551 323 46.6551C328 -5.84486 72 -4.20838 102.5 10.7916L125.5 19"
              stroke="#E10000"
              strokeWidth="2"
            />
          </svg>
          </h1>
          <p className="text-lg md:text-xl text-[#33ff33]">
            Web-Developer, Web3 Developer
          </p>
        </div>
        <div>
          <Contact />
        </div>
      </div>

      <Skills />
      <Project />
      <Footer />
    </motion.div>
  );
};

export default IntroComponent;
