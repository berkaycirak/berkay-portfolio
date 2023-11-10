import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { SpaceHelmet } from "../models/SpaceHelmet";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Hero = () => {
  return (
    <section
      className="flex flex-col   sm:flex-row items-center gap-4  "
      id="About"
    >
      <div className=" w-full lg:min-w-[400px]  mt-32">
        <h1>Hello,</h1>
        <h1>
          I am <span className="text-green-400">Berkay,</span>
        </h1>
        <h1>Web Developer</h1>
        <p className=" text-xl text-primary-300 ">
          I love building{" "}
          <span className="text-green-400/80 font-bold">interactive </span>
          apps
        </p>
      </div>
      <div className=" w-full h-[500px] md:h-[600px] lg:h-[800px] ">
        <Canvas>
          <Suspense fallback={null}>
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
          </Suspense>
        </Canvas>
      </div>

      <Loader />
    </section>
  );
};

export default Hero;
