import { lazy, Suspense } from "react";
import DarkMode from "./components/DarkModeDropdown";
import MyDetails from "./components/MyDetails";
import MyImage from "./components/MyImage";
import Navbar from "./components/Navbar";
import { useScrollRefs } from "./hooks/useScrollRefs";
import LazyLoad from "./components/LazyLoad";

// Lazy imports (code-splitting)
const ExtraProject = lazy(() => import("./components/ExtraProject"));
const Footer = lazy(() => import("./components/Footer"));
const Skills = lazy(() => import("./components/Skills"));
const SkillsSec = lazy(() => import("./components/SkillsSec"));
const WorkExperience = lazy(() => import("./components/WorkExperience"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const {
    homeRef,
    projectsRef,
    skillsRef,
    experienceRef,
    contactRef,
    scrollToSection,
  } = useScrollRefs();

  return (
    <div className="bg-black min-h-screen text-white fadeIn">
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onExperienceClick={() => scrollToSection(experienceRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      <section ref={homeRef}>
        <DarkMode />
        <div className="md:flex lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
          <MyImage />
          <MyDetails />
        </div>
      </section>

      <section ref={projectsRef}>
        <div className="bg-white dark:bg-[#1B1B1B] dark:text-gray-200">
          <LazyLoad>
            <Suspense fallback={<div>Loading...</div>}>
              <SkillsSec />
              <ExtraProject />
            </Suspense>
          </LazyLoad>
        </div>
      </section>

      <section ref={skillsRef}>
        <LazyLoad>
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        </LazyLoad>
      </section>

      <section ref={experienceRef}>
        <div className="bg-white dark:bg-[#1B1B1B] text-white flex justify-center items-center">
          <LazyLoad>
            <Suspense fallback={<div>Loading...</div>}>
              <WorkExperience />
            </Suspense>
          </LazyLoad>
        </div>
      </section>

      <section ref={contactRef}>
        <div className="bg-black">
          <LazyLoad>
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          </LazyLoad>
        </div>
      </section>

      <div className="bg-white text-black">
        <LazyLoad>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </LazyLoad>
      </div>
    </div>
  );
};

export default App;
