import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative bg-white text-black mt-20 dark:bg-[#1B1B1B] dark:text-gray-200">
      {/* Wavy Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="black"
            d="M0,160 C360,320 1080,0 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center py-16 px-6">
        <div className="text-center md:text-left mt-15">
          <h3 className="mb-4 text-sm font-medium">My social media links:</h3>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/muhammad-ali-9b32252b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer text-blue-700 hover:text-blue-500" />
            </a>{" "}
            <a
              href="https://wa.me/923448846631"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="cursor-pointer text-green-500 hover:text-green-300" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=meharbanali6325@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="gmail icon"
                src="gmail.svg"
                fetchPriority="low"
                className="h-6 w-6 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right mt-10 md:mt-0">
          <h3 className="mb-4 text-sm font-medium">
            More projects I’ve worked on
          </h3>
          <div className="flex justify-center md:justify-end items-center gap-2">
            <AiFillGithub className="text-2xl" />
            <a
              href="https://github.com/AliHaider6325"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              @Ali-Haider on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
