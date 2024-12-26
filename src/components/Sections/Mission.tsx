import people from "../../assets/people.png";
import misson from "../../assets/missonImg.png";
import vision from "../../assets/vision.png";
import satisfied from "../../assets/satisfied.png";
import { MissionCard } from "../Card";

const Mission = () => {
  return (
    <section className="mission" id="about">
      <div className="mission__top">
        <div>
          <h2>90% of customers judge a product by their packaging</h2>
          <p className="p2">
            At Cubic Prints, we recognize what this means for every gift you
            send to your loved ones, business deliveries and brands.
          </p>
        </div>

        <div className="mission__img">
          <img src={people} alt="people" width={"100%"} height={"100%"} />
        </div>
      </div>

      <div className="mission__bottom">
        <MissionCard
          imgSrc={misson}
          title="Our mission is simple"
          desc="To deliver excellent packaging solutions in record time."
        />
        <MissionCard
          imgSrc={vision}
          title="Our Vision?"
          desc="To become Africa’s most preferred packaging brand."
        />
        <MissionCard
          imgSrc={satisfied}
          children={
            <p>
              And we're already on the path, with
              <strong>50,000+ satisfied customers</strong> across industries
              like retail, food, cosmetics, and more.
            </p>
          }
        />
      </div>
    </section>
  );
};

export default Mission;
