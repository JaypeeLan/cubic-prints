import { SERVICES } from "../../data";
import Card from "../Card";
import Carousel from "../Slider";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 data-aos="fade-down">
        We specialize in creating packaging solutions for every need
      </h2>

      <Carousel data-aos="fade-left">
        <div className="services__offered">
          {SERVICES.map((s) => (
            <Card
              imgSrc={s.imgSrc}
              title={s.title}
              desc={s.desc}
              key={s.imgSrc}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Services;
