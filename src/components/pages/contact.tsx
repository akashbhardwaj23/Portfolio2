'use client'

import { contactItems } from "@/lib/contact";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [contactItemId, setContactItemId] = useState<number | null>(null);
  return (
    <div className="flex flex-col justify-center item-center md:gap-1 mb-2">
      <h1>Connect With Me</h1>
      <div className="flex items-center justify-center gap-2">
        {contactItems.map((contactItem, index) => {
          return (
            <motion.div key={index}
            onHoverStart={() => setContactItemId(index)}
            onHoverEnd={() => setContactItemId(null)}
            initial={{
              scale : 1
            }} animate = {{
              scale : contactItemId === index ? 1.2 : 1,
            }}>
              <Link
                href={contactItem.href}
                target="_blank"
                key={contactItem.name}
              >
                <img
                  src={contactItem.imgsrc}
                  alt={contactItem.name}
                  className="mr-2 md:w-8 w-6"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
