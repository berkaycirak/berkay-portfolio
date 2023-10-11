import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[--navigation-height] px-24">
        <Hero />
        <TechStack />
      </div>
    </div>
  );
}

export default App;
