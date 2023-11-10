import { FaHamburger } from "react-icons/fa";
import { tabs } from "./Navbar";
import { cn } from "@/utils/cn";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface HamburgerMenuProps {
  onHamburgerClicked: Dispatch<SetStateAction<boolean>>;
  isHamburgerClicked: boolean;
}
const HamburgerMenu = ({
  onHamburgerClicked,
  isHamburgerClicked,
}: HamburgerMenuProps) => {
  const [location, setLocation] = useState("about");

  const handleLocationChange = () => {
    setLocation(window.location.hash);
  };
  useEffect(() => {
    window.addEventListener("popstate", handleLocationChange);

    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);
  return (
    <div className=" w-full text-right mr-6  lg:hidden relative">
      <FaHamburger
        size={30}
        className="inline-block transition hover:scale-[0.97] hover:opacity-75"
        onClick={onHamburgerClicked}
      />
      <ul
        className={cn(
          "absolute right-0 min-w-[100px] px-2 py-2 text-start   transition-[height,opacity] duration-500 mt-4  overflow-hidden rounded-md bg-green-400/20  flex flex-col ",
          isHamburgerClicked ? "h-24 opacity-100" : "h-0 opacity-0 "
        )}
      >
        {tabs.map((tab, i) => (
          <a
            href={`#${tab.tabName}`}
            className={cn(
              "font-bold opacity-75 transition hover:text-green-400",
              location?.toLowerCase()?.includes(tab.tabName.toLowerCase()) &&
                "text-green-400"
            )}
            key={i}
            onClick={() => {}}
          >
            {tab.tabName}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
