import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { WORKING } from "../data/project";
interface props {
  img: string;
  name: string;
  exp: string;
  cardIndex: number;
}
const WorkExp = ({ img, name, exp, cardIndex }: props) => {
  const [knowMoreState, setKnowMore] = useState(false);
  function knowMore() {
    setKnowMore(!knowMoreState);
  }
  return (
    <div className="flex justify-center items-center flex-col text-black md:w-1/2">
      <div className="mt-10">
        <img className=" h-60 w-100" src={img}></img>
      </div>
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <p className="font-xs">{exp}</p>
      <div className="">
        <div className="flex-center group cursor-pointer" onClick={knowMore}>
          <span className="font-bold">Know more</span>
          <BiChevronRight
            className={`mt-1 h-6 w-6 transition-all duration-300 opacity-100 group-hover:w-8 group-hover:rotate-90 
              ${knowMoreState ? "rotate-90" : ""}`}
          />
        </div>
        <div
          className={`${
            knowMoreState && cardIndex == 0 ? "block fadeIn" : "hidden"
          }`}
        >
          <h2 className="font-bold text-xl mb-2 mt-3">Problem Faced</h2>
          <p>{WORKING.problemFaced[cardIndex]}</p>
          <h2 className="font-bold text-xl my-2">My Role</h2>
          <p>{WORKING.myrole[cardIndex]}</p>
          <h2 className="font-bold text-xl my-2">Tech Stack</h2>
          <p>{WORKING.techStack[cardIndex]}</p>
          <h2 className="font-bold text-xl my-2">Process</h2>
          <p>{WORKING.process[cardIndex]}</p>
          <h2 className="font-bold text-xl my-2">Results</h2>
          <p>{WORKING.result[cardIndex]}</p>
        </div>

        <div
          className={`${
            knowMoreState && cardIndex == 1 ? "block fadeIn" : "hidden"
          }`}
        >
          <h2 className="font-bold text-xl mb-2 mt-3">Problem Faced</h2>
          <p>{WORKING.problemFaced[cardIndex]}</p>
          <h2 className="font-bold text-xl my-2">My Role</h2>
          <p>{WORKING.myrole[cardIndex]}</p>
          <h2 className="font-bold text-xl my-2">Tech Stack</h2>
          <p>{WORKING.techStack[cardIndex]}</p>
          <h2 className="font-bold text-xl my-2">Process</h2>
          <p>{WORKING.process[cardIndex]}</p>
          <h2 className="font-bold text-xl my-2">Results</h2>
          <p>{WORKING.result[cardIndex]}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
