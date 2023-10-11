import { Canvas } from "@react-three/fiber";

import { SpaceHelmet } from "../models/SpaceHelmet";
import { Environment, Float, OrbitControls } from "@react-three/drei";
// import heroImg from "@/assets/hero.png";

const Hero = () => {
  return (
    <section className="flex items-center gap-4" id="About">
      <div>
        <h1>Hello,</h1>
        <h1>
          I am <span className="text-green-400">Berkay,</span>
        </h1>
        <h1>Web Developer</h1>
        <p className=" text-xl text-primary-300 ">
          I love building{" "}
          <span className="text-green-400/80 font-bold">interactive</span> ,
          digital experiences on the web
        </p>
      </div>
      <div className=" flex-1 h-full flex items-center justify-center   ">
        {/* <img src={heroImg} alt="hero" className="w-[800px]" /> */}
        <Canvas>
          <ambientLight intensity={50} />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            maxAzimuthAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 3}
          />
          <Environment preset="city" />
          <Float>
            <SpaceHelmet />
          </Float>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
