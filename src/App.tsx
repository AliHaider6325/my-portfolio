import MyDetails from "./components/MyDetails";
import MyImage from "./components/MyImage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsSec from "./components/SkillsSec";
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
        <div>
          <Projects
            imgUrl={projectData.imgUrl[0]}
            lang={projectData.lang[0]}
            title={projectData.title[0]}
            desc={projectData.desc[0]}
            btnText={projectData.btnText}
            color={projectData.color[0]}
            reverse={false}
            link={projectData.link[0]}
          />
          <Projects
            imgUrl={projectData.imgUrl[1]}
            lang={projectData.lang[1]}
            title={projectData.title[1]}
            desc={projectData.desc[1]}
            btnText={projectData.btnText}
            color={projectData.color[1]}
            reverse={true}
            link={projectData.link[1]}
          />
          <Projects
            imgUrl={projectData.imgUrl[2]}
            lang={projectData.lang[2]}
            title={projectData.title[2]}
            desc={projectData.desc[2]}
            btnText={projectData.btnText}
            color={projectData.color[2]}
            link={projectData.link[2]}
            reverse={false}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
