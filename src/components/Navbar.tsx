import { useState } from "react";

type NavbarProps = {
  onHomeClick: () => void;
  onProjectsClick: () => void;
  onSkillsClick: () => void;
  onExperienceClick: () => void;
  onContactClick: () => void;
};

export default function Navbar({
  onHomeClick,
  onProjectsClick,
  onSkillsClick,
  onExperienceClick,
  onContactClick,
}: NavbarProps) {
  const [togglemenu, isToggleMenu] = useState(false);
  function toggleMenu() {
    isToggleMenu(!togglemenu);
  }
  return (
    <div className="flex items-center justify-center">
      <nav className=" transform w-3/4 text-white shadow-md rounded-md bg-[#1B1B1B]">
        <div className="flex justify-between items-center p-2 sm:p-4 ">
          <ul className="hidden sm:flex pl-15 space-x-6 lg:space-x-16 xl:space-x-22 text-gray-300 ">
            <li onClick={onHomeClick}>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li onClick={onProjectsClick}>
              <a href="#Projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li onClick={onSkillsClick}>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li onClick={onExperienceClick}>
              <a href="#Experience" className="hover:text-white">
                Experience
              </a>
            </li>
            <li onClick={onContactClick}>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
          {/* ) : ( */}
          <div className="sm:hidden flex justify-between items-center p-4 ">
            <img
              height={30}
              width={30}
              onClick={toggleMenu}
              src={togglemenu ? "cross.png" : "menu.png"}
              alt="toogler"
              className={togglemenu ? "invert" : ""}
            ></img>
          </div>
          {/* // )} */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/muhammad-ali-9b32252b7/"
              className="hover:text-blue-400"
            >
              <img
                src="linkedin.svg"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-7 md:h-7"
                alt="linkedIn Icon"
              ></img>
            </a>
            <a
              href="https://github.com/AliHaider6325"
              className="hover:text-blue-400"
            >
              <img
                src="/Tools/github.svg"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-7 md:h-7"
                alt="Github Icon"
              ></img>
            </a>
            <a
              href="https://leetcode.com/u/Ali6325/"
              className="hover:text-blue-400 pt-0.5"
            >
              <img
                src="leetcode.svg"
                className="w-5 h-5 sm:w-7 sm:h-7 md:w-7 md:h-7"
                alt="Leetcode Icon"
              ></img>
            </a>
          </div>
        </div>
      </nav>
      {togglemenu && (
        <div className="absolute z-50 top-[64px] left-1/2 transform -translate-x-1/2 w-3/4 bg-amber-50 shadow-md rounded-b-lg">
          <ul className="flex flex-col p-4 space-y-2 text-gray-800">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#Experience" className="hover:text-blue-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
