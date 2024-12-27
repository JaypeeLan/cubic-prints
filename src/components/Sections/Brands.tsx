import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";
import brand7 from "../../assets/brand7.png";
import brand8 from "../../assets/brand8.png";

const Brands = () => {
  return (
    <section className="brand" data-aos="fade-up">
      <div className="brands">
        <p className="brands-title">Brands Highlight</p>
        <div className="brands-imgs">
          <img src={brand1} alt="airtel" width={158} height={54} />
          <img src={brand2} alt="mtn" width={158} height={54} />
          <img src={brand3} alt="airtel" width={158} height={54} />
          <img src={brand4} alt="mtn" width={158} height={54} />
          <img src={brand5} alt="airtel" width={158} height={54} />
          <img src={brand6} alt="mtn" width={158} height={54} />
          <img src={brand7} alt="airtel" width={158} height={54} />
          <img src={brand8} alt="mtn" width={158} height={54} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
