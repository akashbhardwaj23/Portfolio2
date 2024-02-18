"use client"

import { useState } from "react";
import ContactProps from "./ContactProps";

const Intro = () => {
    const [skills, setSkills] = useState([
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Tailwind CSS",
        "Git",
        "GITHUB",
        "Java",
        "Python",
        "Ethical Hacking",
        "SQL",
        "MongoDB",
        "CLI",
      ]);
    return (
        <div className="w-[82%]">
            <div className="md:pt-20 pt-6">
              <h1 className="text-5xl mb-2">Akash Bhardwaj</h1>
              <h2 className="text-2xl">WebDev Engineer</h2>
            </div>

            <div className="flex flex-wrap mt-16 mb-28">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`py-2 px-4 bg-transparent -inset-4 border border-zinc-100 border-solid shadow-xl text-lg m-2 rounded-md text-[#FEE2E2] hover:cursor-pointer`}
                >
                  {skill}
                </div>
              ))}
            </div>

            <ContactProps />
          </div>
    )
}

export default Intro