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
      </div>
    </div>
  );
}

export default App;
