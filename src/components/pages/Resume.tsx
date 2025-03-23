import Link from "next/link";

const ResumeComponent = () => {
  return (
    <div className="text-[1rem] pb-6 md:pb-0">
      <Link
        href={"/resume1.pdf"}
        target="_blank"
        className="bg-[#000000] text-[#33ff33] px-4 py-2 border border-[#33ff33] hover:bg-[#33ff33] hover:text-[#000000] transition duration-300 group flex items-center space-x-1 text-sm"
      >
        <span>View Full Resume</span>
        <span className="transform group-hover:translate-x-1 transition duration-300">
          →
        </span>
      </Link>
    </div>
  );
};

export default ResumeComponent;
