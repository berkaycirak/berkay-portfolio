import { cn } from "@/utils/cn";
import { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <div
      className="[perspective:800px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          "w-[250px] h-[300px] relative border rounded-lg  cursor-pointer group transition-[transform] duration-[5000ms] [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
      >
        <div className="h-full w-full bg-red-400 absolute  ">Front Side</div>
        <div className="h-full w-full bg-green-400 absolute [transform:rotateY(180deg)] ">
          Back Side
        </div>
      </div>
    </div>
  );
};

export default Card;
