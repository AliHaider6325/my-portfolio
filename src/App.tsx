import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyDetails from "./components/MyDetails";
import MyImage from "./components/MyImage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SkillsSec from "./components/SkillsSec";
import WorkExperience from "./components/WorkExperience";
import { projectData } from "./data/project";
const App = () => {
  return (
    <div className=" bg-black min-h-screen text-white fadeIn">
      <Navbar />
      <div className="md:flex lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
        <MyImage />
        <MyDetails />
      </div>
      <div className="bg-white">
        <SkillsSec />
        <div className="mb-10">
          {projectData.imgUrl.map((_, i) => {
            return (
              <div key={i}>
                <Projects
                  imgUrl={projectData.imgUrl[i]}
                  lang={projectData.lang[i]}
                  title={projectData.title[i]}
                  desc={projectData.desc[i]}
                  btnText={projectData.btnText}
                  color={projectData.color[i]}
                  reverse={false}
                  link={projectData.link[i]}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="mb-10"> */}
      <Skills />
      {/* </div> */}
      {/* <Footer /> */}
      <div className="bg-white text-white flex justify-center items-center">
        <WorkExperience />
        {/* <Contact /> */}
      </div>
      <div className="bg-white text-black">
        <Footer />
      </div>
    </div>
  );
};

export default App;
