import { AiOutlineFundView } from "react-icons/ai";
interface props {
  imgUrl: string;
  lang: string;
  title: string;
  desc: string;
  btnText: string;
  color: string;
  reverse: boolean;
  link: string;
}
function Navigate(link: string) {
  window.open(link, "_blank");
}
function renderDesc(desc: string) {
  return desc
    .split(/(\*\*.*?\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i}>{part.replace(/\*\*/g, "")}</strong>
      ) : (
        part
      )
    );
}
const Projects = ({
  imgUrl,
  lang,
  title,
  desc,
  btnText,
  color,
  reverse,
  link,
}: props) => {
  return (
    <div
      className={`bg-white dark:bg-[#1B1B1B] dark:text-gray-200 text-black mx-1 my-2 flex flex-col md:flex ${
        reverse ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div>
        <img
          src={imgUrl}
          alt="projects"
          className="mt-4 mb-4 h-48 lg:h-64 "
        ></img>
      </div>
      <div
        className={`md:w-1/2 lg:flex lg:flex-col lg:justify-center ${
          reverse ? "md:ml-28 md:mr-0 " : "md:mr-20"
        }`}
      >
        <h3
          className="inline lg:w-16 text-sm px-2 font-bold p-1 mt-12 rounded-2xl"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {lang}
        </h3>

        <h1 className="font-bold text-xl mt-2">{title}</h1>
        <p className="text-gray-700 dark:text-gray-200">{renderDesc(desc)}</p>
        <div className="flex justify-center items-center mt-2 mb-3">
          <button
            onClick={() => Navigate(link)}
            className="w-2/3 p-2 text-white font-bold flex items-center justify-center rounded-md"
            style={{ backgroundColor: `${color}` }}
          >
            <AiOutlineFundView className="mr-1 mt-1" />
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
