import { cn } from "@/utils/cn";
import { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import LinkedinIcon from "@/assets/social_icons/linkedin_icon.svg";
import GithubIcon from "@/assets/social_icons/github_icon.svg";
import MediumIcon from "@/assets/social_icons/medium_icon.svg";
import YoutubeIcon from "@/assets/social_icons/youtube_icon.svg";

const SocialMediaContainer = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <div
      className={cn(
        " w-[75px] rounded-full border  fixed bottom-[20%] right-0 mr-4  cursor-pointer transition-[height] duration-500 flex flex-col-reverse items-center overflow-hidden justify-center ",
        isExpanded ? "h-[75px]" : "h-[400px]"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="[&_img]:h-[50px] flex flex-col items-center gap-5">
        <a href="https://www.youtube.com/@KindaDev" target="_blank">
          <img src={YoutubeIcon} alt="youtube" />
        </a>
        <a href="https://medium.com/@berkaycrk" target="_blank">
          <img src={MediumIcon} alt="medium" />
        </a>
        <MdOutlineAccountCircle size={70} color="white" />
        <a href="https://github.com/berkaycirak" target="_blank">
          <img src={GithubIcon} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/berkaycrk/" target="_blank">
          <img src={LinkedinIcon} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaContainer;
