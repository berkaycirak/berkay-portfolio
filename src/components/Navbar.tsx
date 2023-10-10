import { useState } from "react";
import { cn } from "../utils/cn";
import logoImg from "../assets/logo.png";

type TabNames = "About" | "Tech Stack" | "Projects" | "Contact";
interface Tabs {
  tabName: TabNames;
  translateMultiplier: number;
}

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<TabNames>("About");
  const [translateMultiplier, setTranslateMultiplier] = useState(0);
  const tabs: Tabs[] = [
    {
      tabName: "About",
      translateMultiplier: 0,
    },
    {
      tabName: "Tech Stack",
      translateMultiplier: 1,
    },
    {
      tabName: "Projects",
      translateMultiplier: 2,
    },
    {
      tabName: "Contact",
      translateMultiplier: 3,
    },
  ];
  return (
    <nav className="h-[var(--navigation-height)] cursor-pointer flex  border-b border-primary-300 pr-24 fixed w-full">
      <img
        src={logoImg}
        alt="logo"
        className="h-[100px] w-[100px] bg-inherit border border-primary-300  rounded-full bg-primary-800"
      />

      <ul
        className={cn(
          "h-full flex flex-1 items-center justify-center relative after:bg-green-400 after:absolute after:w-[25%] after:bottom-0 after:left-0 after:h-[3px] after:transition after:duration-500  after:rounded-lg after:translate-x-0 ",
          {
            "after:translate-x-[100%]": translateMultiplier === 1,
            "after:translate-x-[200%]": translateMultiplier === 2,
            "after:translate-x-[300%]": translateMultiplier === 3,
          }
        )}
      >
        {tabs.map((tab, i) => (
          <li
            className={cn(
              "h-full flex items-center justify-center flex-1 relative transition duration-500 shadow-nav-item ",
              activeTab === tab.tabName && " text-green-400"
            )}
            key={i}
            onClick={() => {
              setActiveTab(tab.tabName);
              setTranslateMultiplier(tab.translateMultiplier);
            }}
          >
            {tab.tabName}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
