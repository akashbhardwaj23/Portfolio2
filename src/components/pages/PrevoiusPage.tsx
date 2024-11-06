import Link from "next/link";
import { SiGithub } from "react-icons/si";
import ResumePage from "./ResumePage";

const PrevoiusPage = () => {
  return (
    <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
     
    <Link
      href={"https://github.com/akashbhardwaj23"}
      className="bg-[#000000] text-[#33ff33] px-4 py-2 border border-[#33ff33] hover:bg-[#33ff33] hover:text-[#000000] transition duration-300 flex items-center space-x-2"
    >
      <SiGithub className="w-4 h-4" />
      <span className="text-sm">Github</span>
    </Link>
    <Link
      href={"https://portfolio-akashbhardwaj.vercel.app/"}
      className="bg-[#000000] text-[#33ff33] px-4 py-2 border border-[#33ff33] hover:bg-[#33ff33] hover:text-[#000000] transition duration-300 text-sm"
    >
      Previous PortFolio
    </Link>
    <ResumePage/>
  </div>
  );
};

export default PrevoiusPage;
