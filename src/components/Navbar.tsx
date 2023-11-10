import { useState } from "react";
import { cn } from "../utils/cn";
import logoImg from "../assets/logo.png";
import HamburgerMenu from "./HamburgerMenu";

type TabNames = "About" | "Techologies" | "Projects";
interface Tabs {
  tabName: TabNames;
  translateMultiplier: number;
}

export const tabs: Tabs[] = [
  {
    tabName: "About",
    translateMultiplier: 0,
  },
  {
    tabName: "Projects",
    translateMultiplier: 1,
  },
  {
    tabName: "Techologies",
    translateMultiplier: 2,
  },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<TabNames>("About");
  const [translateMultiplier, setTranslateMultiplier] = useState(0);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);

  return (
    <nav className="h-[var(--navigation-height)] cursor-pointer flex items-center  lg:border-b border-primary-300  fixed w-full backdrop-blur-lg z-10 lg:pr-24  ">
      <img
        src={logoImg}
        alt="logo"
        className="h-[100px] w-[100px] bg-[#0c0c1d] "
      />
      <HamburgerMenu
        isHamburgerClicked={isHamburgerMenuOpen}
        onHamburgerClicked={() => setHamburgerMenuOpen(!isHamburgerMenuOpen)}
      />
      {/* Normal Nav Menu */}
      <ul
        className={cn(
          "h-full lg:flex flex-1 items-center justify-center relative after:bg-green-400 after:absolute after:w-[25%] after:bottom-0 after:left-0 after:h-[3px] after:transition after:duration-500  after:rounded-lg after:translate-x-0 select-none hidden",
          {
            "after:translate-x-[145.33%]": translateMultiplier === 1,
            "after:translate-x-[280.66%]": translateMultiplier === 2,
          }
        )}
      >
        {tabs.map((tab, i) => (
          <a
            href={`#${tab.tabName}`}
            className={cn(
              "h-full flex items-center  justify-center flex-1 relative transition duration-500 shadow-nav-item ",
              activeTab === tab.tabName && " text-green-400"
            )}
            key={i}
            onClick={() => {
              setActiveTab(tab.tabName);
              setTranslateMultiplier(tab.translateMultiplier);
            }}
          >
            {tab.tabName}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
