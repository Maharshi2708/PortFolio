import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

interface RadialGradientProps {
  scale: string;
  opacity: string;
  position?: string;
  overflow?: string;
}

const RadialGradient: React.FC<RadialGradientProps> = ({
  scale,
  opacity,
  position,
  overflow,
}) => {
  const [mouseXpercentage, setMouseXPercentage] = useState<number>(50);
  const [mouseYpercentage, setMouseYPercentage] = useState<number>(50);
  const [isMouseInside, setIsMouseInside] = useState<boolean>(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setIsMouseInside(true);
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYPercentage = Math.round(
        (event.pageY / windowHeight) * 100
      );

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const radialGradientStyle: React.CSSProperties = {
    background: isMouseInside
      ? `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #8b3dff, ${
          theme === "light" ? "white" : "#2c2c2c"
        })`
      : theme === "light"
      ? "white"
      : "#2c2c2c",
  };

  return (
    <React.Fragment>
      <div
        className={`radial-gradient-styling absolute ${position} left-0 h-full w-full -z-[1] ${opacity} ${scale} ${overflow}`}
        style={radialGradientStyle}
      ></div>
    </React.Fragment>
  );
};

export default RadialGradient;
