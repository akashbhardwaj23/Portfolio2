"use clientt"


import Intro from "@/components/Intro";
import MyProject from "@/components/MyProject";

export default function Home() {

  
  return (
    <div className="min-h-full flex justify-center">
      <div className="w-[85%] min-h-full h-screen grid grid-cols-12">
        <div className="col-span-6 flex justify-end">
          <Intro />
        </div>
        <MyProject />
      </div>
    </div>
  );
}
