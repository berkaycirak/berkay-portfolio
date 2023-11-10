import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import SocialMediaContainer from "./components/SocialMediaContainer";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[--navigation-height] px-6 lg:px-24 relative">
        <Hero />
        <Projects />
        <TechStack />
        <SocialMediaContainer />

        <div className="bg-green-500 w-[500px] h-[500px] mb-24  transition-[transform] duration-[5000ms]  hover:[transform:rotateY(180deg)]  ">
          <div className="bg-red-500 w-[300px] h-[300px] mx-auto   ">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default App;
