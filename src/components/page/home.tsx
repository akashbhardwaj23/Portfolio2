"use client"

import { useState, useEffect } from 'react'
import { IconType } from 'react-icons'
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
} from "react-icons/si"
import { Terminal, Shield } from "lucide-react"

interface Skill {
  name: string
  icon: IconType | typeof Terminal | typeof Shield
}

export default function Component() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)

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
    { name: "Java", icon : SiExpress},
    { name: "Python", icon: SiPython },
    { name: "Eth. Hacking", icon: Shield },
    { name: "SQL", icon: SiPostgresql },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "CLI", icon: Terminal },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev === null || prev === skills.length - 1) ? 0 : prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [skills.length])

  return (
    <div className="min-h-screen bg-[#000080] text-white p-8 font-['Press_Start_2P',_monospace] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 bg-[#c0c0c0] border-t-4 border-l-4 border-[#ffffff] border-b-4 border-r-4 border-[#808080] p-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-black">Akash Bhardwaj</h1>
          <p className="text-lg md:text-xl text-[#000080]">Web-Developer</p>
        </div>
        
        <div className="bg-[#c0c0c0] border-t-4 border-l-4 border-[#ffffff] border-b-4 border-r-4 border-[#808080] p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className={`relative bg-[#000080] border-2 border-[#00ffff] p-2 flex flex-col items-center justify-center transition-all duration-300 ${
                  activeSkill === index ? 'animate-pulse' : ''
                }`}
              >
                <skill.icon className="w-8 h-8 mb-2 text-[#00ffff]" />
                <span className="text-[0.6rem] text-center text-[#00ffff]">{skill.name}</span>
                <div className="absolute inset-0 bg-[#00ffff] opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <a href="#" className="bg-[#c0c0c0] text-black px-4 py-2 border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] hover:bg-[#d3d3d3] transition duration-300 flex items-center space-x-2">
            <SiGithub className="w-4 h-4" />
            <span className="text-xs">Github</span>
          </a>
          <a href="#" className="bg-[#c0c0c0] text-black px-4 py-2 border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] hover:bg-[#d3d3d3] transition duration-300 text-xs">
            Previous PortFolio
          </a>
          <a href="#" className="bg-[#c0c0c0] text-black px-4 py-2 border-t-2 border-l-2 border-[#ffffff] border-b-2 border-r-2 border-[#808080] hover:bg-[#d3d3d3] transition duration-300 group flex items-center space-x-1 text-xs">
            <span>View Full Resume</span>
            <span className="transform group-hover:translate-x-1 transition duration-300">→</span>
          </a>
        </div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-[0.1]" 
             style={{backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)"}}></div>
      </div>
    </div>
  )
}