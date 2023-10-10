import { Canvas } from "@react-three/fiber";

import { HumanHead } from "../models/HumanHead";

const Hero = () => {
  return (
    <section className="py-24 flex items-center gap-4 h-[60vh]">
      <div>
        <h1>Hello,</h1>
        <h1>
          I am <span className="text-green-400">Berkay,</span>
        </h1>
        <h1>Web Developer</h1>
      </div>
      <div className=" flex-1 h-full">
        <Canvas>
          {/* <ambientLight /> */}
          <pointLight position={[0, 1, 3]} />

          <HumanHead />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
