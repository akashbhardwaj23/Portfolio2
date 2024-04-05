"use client";

import { useState } from "react";
import ContactProps from "./ContactProps";
import { Border } from "./ui/border";
import Image from "next/image";
import { theme, themeKeys, Theme } from "@/themes/theme";
import { HoverEffect } from "./ui/card-hover-effect";

// Need to use this import file

const IntroPage = () => {
  const [skills, setSkills] = useState([
    {
      myskill : "TypeScript", 
      color : "bg-[#EF4444]",
      logo : "/typescript.png"
    },
    {
      myskill: "Javascript",
      color: "bg-[#F59E0B]",
      logo : "/javascript.png"
    },
    {
      myskill: "React",
      color: "bg-[#EAB308]",
      logo: "/react.png"
    },
    {
      myskill: "Tailwind CSS",
      color: "bg-[#84CC16]",
      logo : "/tailwind-css.png"
    },
    {
      myskill: "Git",
      color: "bg-[#22C55E]",
      logo : "/git.png"
    },
    {
      myskill: "GITHUB",
      color: "bg-[#10B981]",
      logo : "/github.png",
    },
    {
      myskill: "HTML",
      color: "bg-[#EF4444]",
      logo : "/html.png"
    },
    {
      myskill: "CSS",
      color: "bg-[#F97316]",
      logo : "/css.png"
    },
    {
      myskill: "Node.js",
      color: "bg-[#14B8A6]",
      logo : "/nodejs.png"
    },
    {
      myskill: "Express.js",
      color: "bg-[#06B6D4]",
      logo : "/express.svg"
    },
    {
      myskill: "Java",
      color: "bg-[#0EA5E9]",
      logo : "/java.svg"
    },
    {
      myskill: "Python",
      color: "bg-[#3B82F6]",
      logo : "/python.svg"
    },
    {
      myskill: "Ethical Hacking",
      color: "bg-[#8B5CF6]",
      logo : "/ethical-hacking.jpg"
    },
    {
      myskill: "SQL",
      color: "bg-[#A855F7]",
      logo : "/sql.svg"
    },
    {
      myskill : "PostgreSQL",
      color : "bg-[#D946EF]",
      logo : "/postgresql.svg"
    },
    {
      myskill: "MongoDB",
      color: "bg-[#D946EF]",
      logo  : "/mongodb.svg"
    },
    {
      myskill: "CLI",
      color: "bg-[#EF4444]",
      logo : "/cli.png"
    },
  ]);
  return (
    <div className="md:w-[85%] w-[95%]">
      <div className="md:pt-20 pt-6">
        <h1 className="text-5xl mb-2">Akash Bhardwaj</h1>
        <h2 className="text-2xl">WebDev Engineer</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 mt-12 mb-12 md:gap-1 gap-0">
        {skills.map((skill, index) => (
          <div key={index} className="m-1">
          
            <Border
              borderRadius="0.775rem"
              className="bg-white  dark:bg-slate-900 text-black dark:text-white  dark:border-slate-800"
              borderClassName={`${skill.color}`}
            >
               <Image src={skill.logo} alt= {skill.myskill} width={20} height={20} className="mr-2"/>
              {skill.myskill}
            </Border>
          </div>
        ))}
      </div>

      <ContactProps />
    </div>
  );
};

export default IntroPage;

{
  /* <div
key={index}
className={`py-2 px-4 bg-transparent -inset-4 border border-zinc-100 border-solid shadow-xl text-lg m-2 rounded-md text-[#FEE2E2] hover:cursor-pointer`}
>
{skill}
</div> */
}
