import { Canvas } from "@react-three/fiber";

import { SpaceHelmet } from "../models/SpaceHelmet";
import { Environment, OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <section className="py-24 flex items-center gap-4 h-[60vh]">
      <div>
        <h1>Hello,</h1>
        <h1>
          I am <span className="text-green-400">Berkay,</span>
        </h1>
        <h1>Web Developer</h1>
        <p className=" text-xl text-primary-300 whitespace-nowrap">
          I love building{" "}
          <span className="text-green-400/80 font-bold">interactive</span> ,
          digital experiences on the web
        </p>
      </div>
      <div className=" flex-1 h-full">
        <Canvas>
          <ambientLight intensity={50} />
          <OrbitControls autoRotate autoRotateSpeed={0.2} enableZoom={false} />
          <Environment preset="city" />
          {/* <pointLight position={[0, 1, 0]} intensity={500} /> */}

          <SpaceHelmet />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
