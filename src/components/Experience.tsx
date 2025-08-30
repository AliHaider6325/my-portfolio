type SkillProps = {
  category: string;
  img: string | undefined;
};
const Experience = ({ category, img }: SkillProps) => {
  return (
    <button
      className={`flex-center text-shadow-2xs flex-col p-1 px-3 border rounded-md text-gray-300 font-serif text-[0.6rem] h-20 w-20 md:h-30 md:w-30 bg-[#1B1B1B] border-gray-700 active:bg-white active:text-black`}
    >
      <p>{category}</p>
      <img src={img} className="w-10 h-10 mt-2" />
    </button>
  );
};

export default Experience;
