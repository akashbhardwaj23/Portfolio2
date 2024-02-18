"use clientt"


import IntroPage from "@/components/IntroPage";
import MyProject from "@/components/MyProject";

export default function Home() {

  
  return (
    <div className=" md:flex justify-center">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{background: "radial-gradient(600px at 275px 3234.4px, rgba(29, 78, 216, 0.15), transparent 80%;", backgroundColor: "red"}}></div>
      <div className="w-[85%] grid md:grid-cols-12 grid-cols-1" >
        <div className="md:col-span-6 flex justify-end">
          <IntroPage />
        </div>
        <MyProject />
      </div>
    </div>
  );
}
