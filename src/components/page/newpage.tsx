"use client";

import { useState, useEffect } from "react";
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
import { Terminal, Shield } from "lucide-react";

interface Skill {
  name: string;
  icon: IconType | typeof Terminal | typeof Shield;
}

export default function Component() {
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
    { name: "Java", icon: SiExpress },
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
    <div className="min-h-screen bg-[#1a1a1a] text-[#33ff33] p-8 font-['VT323',monospace] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 bg-[#000000] border-2 border-[#33ff33] p-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-[#33ff33]">
            Akash Bhardwaj
          </h1>
          <p className="text-lg md:text-xl text-[#33ff33]">Web-Developer</p>
        </div>

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

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <a
            href="#"
            className="bg-[#000000] text-[#33ff33] px-4 py-2 border border-[#33ff33] hover:bg-[#33ff33] hover:text-[#000000] transition duration-300 flex items-center space-x-2"
          >
            <SiGithub className="w-4 h-4" />
            <span className="text-sm">Github</span>
          </a>
          <a
            href="#"
            className="bg-[#000000] text-[#33ff33] px-4 py-2 border border-[#33ff33] hover:bg-[#33ff33] hover:text-[#000000] transition duration-300 text-sm"
          >
            Previous PortFolio
          </a>
          <a
            href="#"
            className="bg-[#000000] text-[#33ff33] px-4 py-2 border border-[#33ff33] hover:bg-[#33ff33] hover:text-[#000000] transition duration-300 group flex items-center space-x-1 text-sm"
          >
            <span>View Full Resume</span>
            <span className="transform group-hover:translate-x-1 transition duration-300">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[#33ff33] opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(51, 255, 51, 0.1) 1px, rgba(51, 255, 51, 0.1) 2px)",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, #33ff33 0%, rgba(51, 255, 51, 0) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
