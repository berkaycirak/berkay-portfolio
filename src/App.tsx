import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[--navigation-height] px-24">
        <Hero />
      </div>
    </div>
  );
}

export default App;
