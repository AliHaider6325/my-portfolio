import { projectData } from "../data/project";
import Projects from "./Projects";

const ExtraProject = () => {
  return (
    <div className="mb-10">
      {projectData.imgUrl.map((_, i) => (
        <div key={i}>
          <Projects
            imgUrl={projectData.imgUrl[i]}
            lang={projectData.lang[i]}
            title={projectData.title[i]}
            desc={projectData.desc[i]}
            btnText={projectData.btnText[i]}
            color={projectData.color[i]}
            reverse={i === 1 ? true : false}
            link={projectData.link[i]}
          />
        </div>
      ))}
    </div>
  );
};

export default ExtraProject;
