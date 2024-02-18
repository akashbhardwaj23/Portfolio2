"use clientt"


import Intro from "@/components/Intro";
import MyProject from "@/components/MyProject";

export default function Home() {

  
  return (
    <div className="min-h-full md:flex justify-center">
      <div className="w-[85%] min-h-full h-screen grid md:grid-cols-12 grid-cols-1">
        <div className="md:col-span-6 flex justify-end">
          <Intro />
        </div>
        <MyProject />
      </div>
    </div>
  );
}
