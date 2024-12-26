import { DISCOVER } from "../../data";
import Card from "../Card";

const Discover = () => {
  return (
    <section className="discover">
      <h2 data-aos="fade-down">
        Discover what sets <br /> Cubic Prints apart
      </h2>

      <div className="discover__cards" data-aos="fade-up">
        {DISCOVER.map((d) => (
          <Card
            imgSrc={d.imgSrc}
            type="other"
            title={d.title}
            desc={d.desc}
            imgWidth={"100%"}
            key={d.title}
          />
        ))}
      </div>

      <p>
        When you choose Cubic Prints, you’re choosing more than packaging,
        you’re choosing excellence and affordability
      </p>
    </section>
  );
};

export default Discover;
