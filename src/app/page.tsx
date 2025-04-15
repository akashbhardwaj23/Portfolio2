import Background from "@/components/backgroundcomponent";
import IntroComponent from "@/components/intro";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#33ff33] p-8 font-['VT323',monospace] overflow-hidden">
       <div className="relative sm:block max-w-7xl mx-auto top-10 sm:top-0">
        <IntroComponent />
       </div>
       <Background />
    </div>
  );
}
