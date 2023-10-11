import Card from "./Card";

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
    <section className="h-screen ">
      <div className="flex gap-4  items-center justify-evenly">
        {techStackArray.map((tech, i) => (
          <Card key={i} imgUrl={`../src/assets/techIcons/${tech.name}.svg`} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
