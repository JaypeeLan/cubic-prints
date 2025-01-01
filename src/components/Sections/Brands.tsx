import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";
import brand7 from "../../assets/brand7.png";
import brand8 from "../../assets/brand8.png";
import brand9 from "../../assets/brand9.png";
import brand10 from "../../assets/brand10.png";
import brand11 from "../../assets/brand11.png";
import brand12 from "../../assets/brand12.png";
import brand1Mob from "../../assets/brand1-mob.png";
import brand2Mob from "../../assets/brand2-mob.png";
import brand3Mob from "../../assets/brand3-mob.png";
import brand4Mob from "../../assets/brand4-mob.png";
import brand5Mob from "../../assets/brand5-mob.png";
import brand6Mob from "../../assets/brand6-mob.png";
import brand7Mob from "../../assets/brand7-mob.png";
import brand8Mob from "../../assets/brand8-mob.png";
import brand9Mob from "../../assets/brand9-mob.png";
import brand10Mob from "../../assets/brand10-mob.png";
import brand11Mob from "../../assets/brand11-mob.png";
import brand12Mob from "../../assets/brand12-mob.png";

const brandImages = [
  { desktop: brand1, mobile: brand1Mob },
  { desktop: brand2, mobile: brand2Mob },
  { desktop: brand3, mobile: brand3Mob },
  { desktop: brand4, mobile: brand4Mob },
  { desktop: brand5, mobile: brand5Mob },
  { desktop: brand6, mobile: brand6Mob },
  { desktop: brand7, mobile: brand7Mob },
  { desktop: brand8, mobile: brand8Mob },
  { desktop: brand9, mobile: brand9Mob },
  { desktop: brand10, mobile: brand10Mob },
  { desktop: brand11, mobile: brand11Mob },
  { desktop: brand12, mobile: brand12Mob },
];

const Brands = () => {
  return (
    <section className="brand" data-aos="fade-up">
      <div className="brands">
        <p className="brands-title">Brands Highlight</p>
        <div className="brands-imgs">
          {brandImages.map((img, index) => (
            <img
              key={index}
              src={img.desktop}
              srcSet={`${img.mobile} 600w, ${img.desktop} 1200w`}
              sizes="(max-width: 600px) 100vw, 50vw"
              alt={`brand ${index + 1}`}
              width={"100%"}
              height={"100%"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
