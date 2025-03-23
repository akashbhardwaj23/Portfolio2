import Skills from "./pages/skills";
import Footer from "./footer";
import Project from "./pages/projects";
import Contact from "./pages/contact";

const IntroComponent = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12 bg-[#000000] border-2 border-[#33ff33] p-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-[#33ff33]">
            Akash Bhardwaj
          </h1>
          <p className="text-lg md:text-xl text-[#33ff33]">Web-Developer</p>
        </div>
        <div>
            <Contact />
        </div>

      </div>

      <Skills />
      <Project />
      <Footer />
    </div>
  );
};

export default IntroComponent;
