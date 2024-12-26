import mtn from "../../assets/mtn.png";
import airtel from "../../assets/airtel.png";
const Brands = () => {
  return (
    <section className="brand">
      <div className="brands">
        <p className="brands-title">Brands Highlight</p>
        <div className="brands-imgs">
          <img src={airtel} alt="airtel" width={128} height={32} />
          <img src={mtn} alt="mtn" width={64} height={32} />
          <img src={airtel} alt="airtel" width={128} height={32} />
          <img src={mtn} alt="mtn" width={64} height={32} />
          <img src={airtel} alt="airtel" width={128} height={32} />
          <img src={mtn} alt="mtn" width={64} height={32} />
          <img src={airtel} alt="airtel" width={128} height={32} />
          <img src={mtn} alt="mtn" width={64} height={32} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
