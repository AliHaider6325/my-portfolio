import { GrProjects } from "react-icons/gr";
const SkillsSec = () => {
  return (
    <div className="bg-white text-black font-bold">
      <div className="flex items-center justify-center mt-16 ">
        <h1 className="flex items-center justify-center text-xl pt-4">
          <GrProjects size={20} className="mr-2" />
          Projects
        </h1>
      </div>
      <div className="flex items-center justify-center text-gray-700 mt-2">
        <p>Some of my projects include:</p>
      </div>
    </div>
  );
};

export default SkillsSec;
