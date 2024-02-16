

import List from "./List"
import Resume from "./ResumeSection"

const MyProject = () => {
    return (
        <div className=" col-span-6 flex  justify-end">
        <div className="w-[82%] h-screen pt-20 text-2xl flex flex-col gap-y-40">
          <div>
            You Can See All My Personal Project As Well as Work Projects Here
          </div>

          <List />

          <Resume />
        </div>
      </div>
    )
}

export default MyProject