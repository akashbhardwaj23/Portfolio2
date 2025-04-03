"use client"
import Skills from "./pages/skills";
import Footer from "./footercomponent";
import Project from "./pages/projects";
import Contact from "./pages/contact";
import { motion } from "motion/react"

const IntroComponent = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}    
    exit={{opacity: 0}}
    transition={{
      duration: 0.3,
      ease : "easeInOut"
    }}
    className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12 bg-[#000000] border-2 border-[#33ff33] p-4">
        <div>
          <h1 className="underline-text text-2xl md:text-4xl font-bold mb-2 text-[#33ff33]">
            Akash Bhardwaj
          </h1>
          <p className="text-lg md:text-xl text-[#33ff33]">Web-Developer, Web3 Developer</p>
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
