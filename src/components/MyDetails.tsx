import { AiOutlineDownload } from "react-icons/ai";
import { FcVoicePresentation } from "react-icons/fc";
const MyDetails = () => {
  return (
    <div className="flex flex-col justify-center mt-28 md:w-1/2 md:ml-6 lg:ml-20 mx-6">
      <h1 className="text-[22px] font-bold lg:text-3xl typing">
        MUHAMMAD ALI HAIDER
      </h1>
      <p className="pt-3 mx-2 text-[#E5F4E3] md:mx-0 lg:text-xl">
        I’m <b>Muhammad Ali Haider</b>, a developer dedicated to making the
        world a better place one line of code at a time.
      </p>
      <a href="/Ali'sCv.pdf" download={"Ali's Cv"}>
        <button className="flex items-center justify-center p-4 bg-[#E5F4E3] text-black font-bold rounded-2xl mt-3 cursor-pointer w-full overflow-hidden relative group">
          <FcVoicePresentation className="mr-2 text-2xl" />
          <span className="relative z-10">Get Resume</span>
          <AiOutlineDownload className="absolute right-4 opacity-0 transform translate-x-4 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
        </button>
      </a>
    </div>
  );
};

export default MyDetails;
