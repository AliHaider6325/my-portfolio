import { BiMoon, BiSun } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const DarkModeDropdown = () => {
  const [mode, setMode] = useState<boolean | null>(() => {
    if (localStorage.theme === "dark") return true;
    if (localStorage.theme === "light") return false;
    return null;
  });

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDark =
      mode === null
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : mode;

    document.documentElement.classList.toggle("dark", isDark);

    if (mode === null) localStorage.removeItem("theme");
    else localStorage.theme = isDark ? "dark" : "light";
  }, [mode]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    { value: null, label: "System", icon: <FiMonitor className="mr-2" /> },
    { value: false, label: "Light", icon: <BiSun className="mr-2" /> },
    { value: true, label: "Dark", icon: <BiMoon className="mr-2" /> },
  ];

  return (
    <div
      className="absolute z-40 top-20 lg:top-0 mt-3 ml-2 w-44 text-black"
      ref={dropdownRef}
    >
      <button
        className="w-2/3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-[#1B1B1B] rounded-sm shadow-2xl flex items-center justify-between focus:outline-none appearance-none"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center">
          {mode === null ? (
            <FiMonitor className="inline mr-2" />
          ) : mode ? (
            <BiMoon className="inline mr-2" />
          ) : (
            <BiSun className="inline mr-2" />
          )}
          {mode === null ? "System" : mode ? "Dark" : "Light"}
        </span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-2/3 bg-white dark:bg-[#1B1B1B] dark:text-gray-200 shadow appearance-none">
          {options.map((opt) => (
            <li
              key={String(opt.value)}
              className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center cursor-pointer"
              onClick={() => {
                setMode(opt.value);
                setOpen(false);
              }}
            >
              {opt.icon} {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DarkModeDropdown;
