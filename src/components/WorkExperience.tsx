import { CASESTUDY } from "../data/project";
import WorkExp from "./WorkExp";

const WorkExperience = () => {
  return (
    <div>
      <div className="dark:text-gray-200 dark:bg-[#1B1B1B] flex justify-center items-center flex-col">
        <div className="font-bold text-2xl dark:text-gray-200 text-black my-5">
          Experience
        </div>
        <p className="text-gray-700 dark:text-gray-200 mx-2">
          BS Computer Science student with market experience in software
          development, focused on creating efficient and innovative solutions.
        </p>
      </div>
      <div className=" m-2 md:flex md:items-start md:gap-8">
        <WorkExp
          img={CASESTUDY.img[0]}
          name={CASESTUDY.name[0]}
          exp={CASESTUDY.exp[0]}
          cardIndex={CASESTUDY.cardIndex[0]}
        />
        <WorkExp
          img={CASESTUDY.img[1]}
          name={CASESTUDY.name[1]}
          exp={CASESTUDY.exp[1]}
          cardIndex={CASESTUDY.cardIndex[1]}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
