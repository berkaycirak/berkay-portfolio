interface TechStackArray {
  name: string;
}
const techStackArray: TechStackArray[] = [
  { name: "typescript" },
  { name: "react" },
  { name: "javascript" },
  { name: "next" },
  { name: "tailwind" },
  { name: "threejs" },
  { name: "mongodb" },
];

const TechStack = () => {
  return (
    <section
      className="flex flex-col items-center justify-center"
      id="Techologies"
    >
      <h1 className="text-green-400 mb-24">Tech Stack</h1>
      <div className=" grid grid-cols-3 lg:grid-flow-col lg:grid-cols-none w-full items-center justify-center gap-12 ">
        {techStackArray.map((tech, i) => (
          <div
            className=" w-[75px] h-[75px] lg:w-[100px] lg:h-[100px] relative  backdrop-blur-[20px] cursor-pointer group"
            key={i}
          >
            <img
              src={`/${tech.name}.svg`}
              alt={tech.name}
              className="w-full h-full"
            />

            <div className="absolute w-full text-center transition duration-500  translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 mt-4 text-green-400/80 font-bold">
              <p>{tech.name!.charAt(0).toUpperCase() + tech.name!.slice(1)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
