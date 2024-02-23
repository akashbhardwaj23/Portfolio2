"use client";

import { useState } from "react";
import ContactProps from "./ContactProps";
import { Button } from "./ui/border";
import { theme, themeKeys, Theme } from "@/themes/theme";

// Need to use this import file

const IntroPage = () => {
  const [skills, setSkills] = useState([
    {
      myskill: "HTML",
      color: "bg-[#EF4444]",
    },
    {
      myskill: "CSS",
      color: "bg-[#F97316]",
    },
    {
      myskill: "Javascript",
      color: "bg-[#F59E0B]",
    },
    {
      myskill: "React",
      color: "bg-[#EAB308]",
    },
    {
      myskill: "Tailwind CSS",
      color: "bg-[#84CC16]",
    },
    {
      myskill: "Git",
      color: "bg-[#22C55E]",
    },
    {
      myskill: "GITHUB",
      color: "bg-[#10B981]",
    },
    {
      myskill: "Node.js",
      color: "bg-[#14B8A6]",
    },
    {
      myskill: "Express.js",
      color: "bg-[#06B6D4]",
    },
    {
      myskill: "Java",
      color: "bg-[#0EA5E9]",
    },
    {
      myskill: "Python",
      color: "bg-[#3B82F6]",
    },
    {
      myskill: "Ethical Hacking",
      color: "bg-[#8B5CF6]",
    },
    {
      myskill: "SQL",
      color: "bg-[#A855F7]",
    },
    {
      myskill: "MongoDB",
      color: "bg-[#D946EF]",
    },
    {
      myskill: "CLI",
      color: "bg-[#EF4444]",
    },
  ]);
  return (
    <div className="w-[82%]">
      <div className="md:pt-20 pt-6">
        <h1 className="text-5xl mb-2">Akash Bhardwaj</h1>
        <h2 className="text-2xl">WebDev Engineer</h2>
      </div>

      <div className="flex flex-wrap mt-12 mb-12">
        {skills.map((skill, index) => (
          <div key={index} className="m-2">
            <Button
              borderRadius="1.75rem"
              className="bg-white  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              borderClassName={`${skill.color}`}
            >
              {skill.myskill}
            </Button>
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
