import { ReactElement, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AnimatedWrapper = ({ children }: { children: ReactElement }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 100,
      //   once: true,
      easing: "ease-out",
    });
  }, []);

  return <>{children}</>;
};

export default AnimatedWrapper;
