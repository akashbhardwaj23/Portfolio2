"use client"

import { motion } from "motion/react"
import { skills } from "@/lib/skills"
import { useState } from "react"


export default function Skills(){
    const [hoveredId, setHoveredId] = useState<number | null>(null);


    return (
      <motion.div className="hidden sm:block bg-[#000000] border-2 border-[#33ff33] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`relative bg-[#000000] border border-[#33ff33] p-3 flex items-center transition-all duration-300 `}
                whileHover={{
                  scale : 0.95
                }}
                onHoverStart={() => setHoveredId(index)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <motion.div className="w-8 h-8 mr-3 flex items-center justify-center bg-[#33ff33] rounded-full" initial = {{
                  scale : 1,
                  y : 0,
                }} animate = {{
                  scale : hoveredId === index ? 2 : 1,
                  y : hoveredId === index ? -50 : 0,
                  backgroundColor : hoveredId === index ? "#fff" : "#33ff33",
                  zIndex : hoveredId === index ? "50" : "0"
                }}>
                  <skill.icon className="w-5 h-5 text-[#000000] hover:z-50 hover:bg-white" />
                </motion.div>
                <motion.span className="text-sm text-[#33ff33]" animate = {{
                  scale : hoveredId === index ? 1.5 : 1
                }}>{skill.name}</motion.span>
                <div className="absolute inset-0 bg-[#33ff33] opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
    )

}