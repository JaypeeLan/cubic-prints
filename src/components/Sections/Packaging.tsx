import { PACKAGING } from "../../data";
import { MissionCard } from "../Card";
import { useState, useEffect } from "react";
import Slider from "../Slider";

const Packaging = () => {
  const [imageWidth, setImageWidth] = useState(282);

  useEffect(() => {
    // Set initial width
    const handleResize = () => {
      setImageWidth(window.innerWidth <= 600 ? 350 : 282);
    };

    // Set initial width on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="packaging">
      <div data-aos="fade-down">
        <h2>Packaging is more than just a container for your products —</h2>

        <p className="body2">
          it's a powerful tool that influences customer perception and
          purchasing decisions. Packaging does more than hold your product.
        </p>
      </div>

      <div className="packaging-show" data-aos="fade-up">
        <Slider>
          {PACKAGING.map((p) => (
            <MissionCard
              imgSrc={p.imgSrc}
              desc={p.text}
              imageWidth={imageWidth}
              imageHeight={360}
              key={p.imgSrc}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Packaging;
