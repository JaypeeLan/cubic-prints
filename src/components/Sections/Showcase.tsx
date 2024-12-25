import film from "../../assets/film.png";
import Button from "../Button";
import Slider from "../Slider";
import Card from "../Card";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const Showcase = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="showcase" id="featured">
      <h2>
        We’ve worked with some of Africa’s most exciting brands, delivering
        packaging that makes customers happy.
      </h2>
      <Slider>
        {images.map((img, index) => (
          <Card imgSrc={img} type="other" key={index} />
        ))}
      </Slider>

      <div className="showcase-bottom">
        <p className="body2">
          See more of our success stories in our portfolio!
        </p>

        <Button
          type="secondary"
          text="View Our Portfolio"
          icon={<img src={film} width={20} height={20} />}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Showcase;
