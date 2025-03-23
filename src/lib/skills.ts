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



export interface SkillType {
    name: string;
    icon: IconType | typeof Terminal | typeof Shield;
  }

export const skills: SkillType[] = [
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