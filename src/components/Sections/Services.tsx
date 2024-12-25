import { SERVICES } from "../../data";
import Card from "../Card";
import Carousel from "../Slider";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>We specialize in creating packaging solutions for every need</h2>

      <Carousel>
        <div className="services__offered">
          {SERVICES.map((s) => (
            <Card imgSrc={s.imgSrc} title={s.title} desc={s.desc} />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Services;
