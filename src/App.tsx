import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[--navigation-height] px-6 lg:px-24">
        <Hero />
        <Projects />
        <TechStack />
      </div>
    </div>
  );
}

export default App;
