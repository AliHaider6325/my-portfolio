import MyDetails from "./components/MyDetails";
import MyImage from "./components/MyImage";
import Navbar from "./components/Navbar";
import SkillsSec from "./components/SkillsSec";

const App = () => {
  return (
    <div className=" bg-black min-h-screen text-white fadeIn">
      <Navbar />
      <div className="md:flex lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
        <MyImage />
        <MyDetails />
      </div>
      <SkillsSec />
    </div>
  );
};

export default App;
