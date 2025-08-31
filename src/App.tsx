import DarkMode from "./components/DarkModeDropdown";
import ExtraProject from "./components/ExtraProject";
import Footer from "./components/Footer";
import MyDetails from "./components/MyDetails";
import MyImage from "./components/MyImage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import SkillsSec from "./components/SkillsSec";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import { useScrollRefs } from "./hooks/useScrollRefs";
import LazyLoad from "./components/lazyload";
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
    <div className=" bg-black min-h-screen text-white fadeIn">
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
            <SkillsSec />
            <ExtraProject></ExtraProject>
          </LazyLoad>
        </div>
      </section>
      <section ref={skillsRef}>
        <LazyLoad>
          <Skills />
        </LazyLoad>
      </section>
      <section ref={experienceRef}>
        <div className="bg-white dark:bg-[#1B1B1B] text-white flex justify-center items-center">
          <LazyLoad>
            <WorkExperience />
          </LazyLoad>
        </div>
      </section>
      <section ref={contactRef}>
        <div className="bg-black">
          <LazyLoad>
            <Contact />
          </LazyLoad>
        </div>
      </section>
      <div className="bg-white text-black">
        <LazyLoad>
          <Footer />
        </LazyLoad>
      </div>
    </div>
  );
};

export default App;
