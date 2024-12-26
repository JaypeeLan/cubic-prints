import film from "../../assets/film.png";
import Button from "../Button";
import Slider from "../Slider";
import Card from "../Card";

import img1 from "../../assets/01.webp";
import img2 from "../../assets/02.webp";
import img3 from "../../assets/03.webp";
import img4 from "../../assets/04.webp";
import img5 from "../../assets/05.webp";
import img6 from "../../assets/06.webp";
import img7 from "../../assets/07.webp";
import img8 from "../../assets/08.webp";
import img9 from "../../assets/09.webp";
import img10 from "../../assets/10.webp";

const Showcase = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section className="showcase" id="featured">
      <h2 data-aos="fade-down">
        We’ve worked with some of Africa’s most exciting brands, delivering
        packaging that makes customers happy.
      </h2>
      <Slider data-aos="fade-up">
        {images.map((img, index) => (
          <Card imgSrc={img} type="other" key={index} imgWidth={300} />
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
          onClick={() =>
            window.open("https://linktr.ee/cubicprintsandcrafts", "_blank")
          }
        />
      </div>
    </section>
  );
};

export default Showcase;
