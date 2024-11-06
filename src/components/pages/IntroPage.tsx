import SkillsPage from "./SkillsPage";
import PrevoiusPage from "./PrevoiusPage";
import MyProject from "./MyProjectPage";


const IntroPage = () => {

  return (
    <div className="max-w-7xl mx-auto">
        <div className="mb-12 bg-[#000000] border-2 border-[#33ff33] p-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-[#33ff33]">
            Akash Bhardwaj
          </h1>
          <p className="text-lg md:text-xl text-[#33ff33]">Web-Developer</p>
        </div>

        <SkillsPage />
        <MyProject />
       <PrevoiusPage />
      </div>
  );
};

export default IntroPage;

{
  /* <div
key={index}
className={`py-2 px-4 bg-transparent -inset-4 border border-zinc-100 border-solid shadow-xl text-lg m-2 rounded-md text-[#FEE2E2] hover:cursor-pointer`}
>
{skill}
</div> */
}
