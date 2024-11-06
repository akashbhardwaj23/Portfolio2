"use clientt"


import Background from "@/components/Background";
import IntroPage from "@/components/pages/IntroPage";

export default function Home() {

  
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#33ff33] p-8 font-['VT323',monospace] overflow-hidden">
       <div className="max-w-7xl mx-auto">
        <IntroPage />
       </div>
       <Background />
    </div>
  );
}
