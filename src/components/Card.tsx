import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;
  description?: string;
  testLink?: string;
  techStack?: string[];
}

const Card = ({ title, description, testLink, techStack }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <div className="[perspective:850px]">
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={twMerge(
          " w-[200px] h-[250px] 2xl:w-[300px] 2xl:h-[400px] relative  rounded-lg flex items-center justify-center shadow-glass transition-[transform] duration-500 [transform-style:preserve-3d]  cursor-pointer group [&_div]:w-full [&_div]:h-full [&_div]:absolute [&_div]:[backface-visibility:hidden] [&_div]:rounded-lg select-none  ",
          isFlipped && "[transform:rotateY(-180deg)]"
        )}
      >
        {/* Frontside */}
        <div
          className={twMerge(
            "bg-inherit bg-cover bg-center  bg-no-repeat text-center group  relative group overflow-hidden",
            title.toLowerCase().includes("pharmto")
              ? " bg-pharmto"
              : title.toLowerCase().includes("heroes") && "bg-heroes"
          )}
        >
          <div className="bg-black/70 h-full transition"></div>
          <div className="flex items-center justify-center uppercase font-bold ">
            {title}
          </div>
          <div className="absolute   transition  translate-y-[100%] group-hover:translate-y-[90%] font-bold">
            <p className="text-orange-400">Click to see more!</p>
          </div>
        </div>
        {/* Backside */}
        <div className="bg-gray-700 [transform:rotateY(180deg)] p-2 flex flex-col justify-between items-center">
          <p className="">{description}</p>

          <span className="text-center">
            <h5 className="mt-4 mb-2">Tech Stack</h5>
            {techStack!.map((tech, i) => (
              <img
                key={i}
                src={`/${tech}.svg`}
                className="w-[50px] h-[40px] mx-2 inline-block"
              />
            ))}
          </span>

          <a
            href={testLink}
            target="_blank"
            className=" inline-block p-2 rounded-xl bg-green-400 text-black transition text-center  font-bold hover:scale-[1.05] w-full mb-8 "
          >
            Test App
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
