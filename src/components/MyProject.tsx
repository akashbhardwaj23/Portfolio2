"use client"

import ListPage from "./ListPage"
import Resume from "./ResumeSection"
import { TextGenerateEffect } from "./ui/text-generator"


const MyProject = () => {
    return (
        <div className=" col-span-6 flex md:justify-end justify-center">
        <div className="w-[82%] h-screen md:pt-20 pt-20 md:text-2xl  text-4xl flex flex-col gap-y-40">
          <div>
            <TextGenerateEffect words="You Can See All My Personal Project As Well as Work Projects Here - " />
          </div>

          <ListPage />
          <Resume />
        </div>
      </div>
    )
}

export default MyProject