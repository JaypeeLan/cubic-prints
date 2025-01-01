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

const Brands = () => {
  return (
    <section className="brand" data-aos="fade-up">
      <div className="brands">
        <p className="brands-title">Brands Highlight</p>
        <div className="brands-imgs">
          <img src={brand1} alt="brand" width={"100%"} height={80} />
          <img src={brand2} alt="brand" width={"100%"} height={80} />
          <img src={brand3} alt="brand" width={"100%"} height={80} />
          <img src={brand4} alt="brand" width={"100%"} height={80} />
          <img src={brand5} alt="brand" width={"100%"} height={80} />
          <img src={brand6} alt="brand" width={"100%"} height={80} />
          <img src={brand7} alt="brand" width={"100%"} height={80} />
          <img src={brand8} alt="brand" width={"100%"} height={80} />
          <img src={brand9} alt="brand" width={"100%"} height={80} />
          <img src={brand10} alt="brand" width={"100%"} height={80} />
          <img src={brand11} alt="brand" width={"100%"} height={80} />
          <img src={brand12} alt="brand" width={"100%"} height={80} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
