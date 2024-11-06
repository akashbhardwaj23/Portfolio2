"use client"

import { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";

import { Terminal, Shield } from "lucide-react";
import { useEffect, useState } from "react";



interface Skill {
  name: string;
  icon: IconType | typeof Terminal | typeof Shield;
}


export default function SkillsPage(){
    const [activeSkill, setActiveSkill] = useState<number | null>(null);
  
    const skills: Skill[] = [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Javascript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Java", icon: AiOutlineJava },
      { name: "Python", icon: SiPython },
      { name: "Eth. Hacking", icon: Shield },
      { name: "SQL", icon: SiPostgresql },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "CLI", icon: Terminal },
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSkill((prev) =>
          prev === null || prev === skills.length - 1 ? 0 : prev + 1
        );
      }, 2000);
      return () => clearInterval(interval);
    }, [skills.length]);
  


    return (
      <div className="bg-[#000000] border-2 border-[#33ff33] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`relative bg-[#000000] border border-[#33ff33] p-3 flex items-center transition-all duration-300 ${
                  activeSkill === index ? "animate-pulse" : ""
                }`}
              >
                <div className="w-8 h-8 mr-3 flex items-center justify-center bg-[#33ff33] rounded-full">
                  <skill.icon className="w-5 h-5 text-[#000000]" />
                </div>
                <span className="text-sm text-[#33ff33]">{skill.name}</span>
                <div className="absolute inset-0 bg-[#33ff33] opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
    )

}