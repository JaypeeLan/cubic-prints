import { ReactElement, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AnimatedWrapper = ({ children }: { children: ReactElement }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      //   once: true,
      easing: "ease-out",
    });
  }, []);

  return <>{children}</>;
};

export default AnimatedWrapper;
