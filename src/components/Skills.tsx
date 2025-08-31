import { useRef, useState } from "react";
import Experience from "./Experience";
import Skill from "./Skill";
import { SKILLSARRAY } from "../data/project";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  // state to keep track of selected category
  const [selectedCategory, setSelectedCategory] = useState<string>(
    SKILLSARRAY[0].category
  );
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (category: string) => {
    setSelectedCategory(category);
    setTimeout(() => {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return (
    <div className="flex-center flex-col mt-10">
      <h1 className="font-bold text-2xl">My Skills</h1>

      {/* Category Buttons */}
      <div className="grid grid-cols-3 gap-x-3 gap-y-8 justify-items-center pt-4 md:gap-x-10 lg:gap-x-16">
        {SKILLSARRAY.map((skill, i) => (
          <div
            key={i}
            onClick={() => {
              handleClick(skill.category);
            }}
            className={`cursor-pointer rounded-md ${
              selectedCategory === skill.category
                ? "bg-white text-black"
                : "text-white bg-black"
            }`}
          >
            <Skill Skill={skill} />
          </div>
        ))}
      </div>

      {/* Animated Experience Section */}
      <div className="md:mx-20 lg:mx-32 mb-20" ref={skillsRef}>
        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              key={selectedCategory} // re-triggers animation when category changes
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-10 flex gap-6 flex-wrap justify-center lg:gap-10"
            >
              {SKILLSARRAY.find(
                (cat) => cat.category === selectedCategory
              )?.skills.map((s, i) => (
                <div key={i}>
                  <Experience img={s.img} category={s.name} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
