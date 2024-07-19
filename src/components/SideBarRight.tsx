import { Link } from "react-router-dom";
import { sideBarRightMail } from "../assets/lib/data";
import React from "react";
import { useTheme } from "../context/theme-context"; // Import the useTheme hook

const SiteBarLeft: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme from the context

  return (
    <div className="absolute flex items-center flex-col  bottom-0 right-0 mr-8  h-[50vh] max-lg:hidden ">
      <div className="h-[65%] w-[4rem] flex items-center justify-center ">
        <Link
          to={sideBarRightMail.link}
          className={`mb-2 [writing-mode:vertical-lr] absolute top-0 right-0 h-[50%] transition-all duration-200 ${
            theme === "light" ? "text-grey hover:text-[--darkblue]" : "text-tastycolor hover:text-[--lightblue]"
          }`}
        >
          {sideBarRightMail.text}
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col h-[2400%] ">
        <div className="w-[0.25rem] h-[100%] bg-[--orange]"></div>
      </div>
    </div>
  );
};

export default SiteBarLeft;
