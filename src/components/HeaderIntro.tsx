import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
// import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";

const HeaderIntro: React.FC = () => {
  // const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-max max-lg:gap-2"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/6 drop-shadow-2xl rounded-full my-5 shadow-2xl avatar-img max-lg:w-3/4"
      />
      <h1 className="max-lg:my-2">
        {headerIntroData.title.en}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>
      <h1 className="color-effect max-lg:my-2">{headerIntroData.subtitle}</h1>
      <p className="w-1/2 text-center max-lg:hidden">
        {headerIntroData.description.en}
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-8 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </div>
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
