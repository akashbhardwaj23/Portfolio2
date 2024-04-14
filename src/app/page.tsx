"use clientt"


import IntroPage from "@/components/IntroPage";
import MyProject from "@/components/MyProject";

export default function Home() {

  
  return (
    <div className=" md:flex md:justify-center md:overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{background: "radial-gradient(600px at 275px 3234.4px, rgba(29, 78, 216, 0.15), transparent 80%", backgroundColor: "red"}}></div>
      <div className="w-[98%] grid md:grid-cols-12 grid-cols-1" >
        <div className="md:col-span-6 flex md:justify-end justify-center">
          <IntroPage />
        </div>
        <MyProject />
      </div>
    </div>
  );
}
