"use client";

import Link from "next/link";
import Image from "next/image";

const List = () => {
  return (
    <div className="">
      <ul className="group/lists">
        <li className="md:mb-12 mb-6 cursor-pointer">
          <Link href={"https://github.com/akashbhardwaj23"}>
            <div className="group relative flex items-center gap-y-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:text-teal-400  hover:!opacity-100 group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0  rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg  block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg"></div>
              <Image
                src="/github.png"
                alt="Github"
                width={40}
                height={40}
                className="mr-4 md:mr-0"
              />
              <h1 className="z-10 sm:order-2 sm:col-span-6 cursor-pointer text-lg ">
                Github
              </h1>
            </div>
          </Link>
        </li>
        <li className="mb-12 cursor-pointer">
          <Link href={"https://portfolio-akashbhardwaj.vercel.app/"}>
            <div className="group relative flex items-center gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:text-teal-400 hover:!opacity-100 group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg"></div>
              <Image
                src="/portfolio.gif"
                alt="Site"
                width={40}
                height={40}
                className="mix-blend-color-dodge"
              />
              <h1 className="z-10 sm:order-2 sm:col-span-6 cursor-pointer text-lg ">
                Previous PortFolio
              </h1>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default List;
