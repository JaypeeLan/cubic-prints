import heroImg from "../../assets/heroImg.png";
import receipt from "../../assets/receipt.png";
import film from "../../assets/film.png";
import Button from "../Button";
import customers from "../../assets/customers.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__left-one">
          <h1>
            Africa’s leading packaging brand - your products delivered with
            excellence{" "}
          </h1>

          <p className="p2">
            Join 5,000+ satisfied customers across Africa who have trusted Cubic
            Prints since 2019 for innovative packaging and branding solutions.
          </p>
        </div>

        <div className="hero__left-two">
          <Button
            text="Get a Free Quote"
            icon={<img src={receipt} width={20} height={20} />}
            onClick={() => {}}
          />
          <Button
            type="secondary"
            text="View Our Portfolio"
            icon={<img src={film} width={20} height={20} />}
            onClick={() => {}}
          />
        </div>

        <div className="hero__left-three">
          <img src={customers} alt="customers" width={168} height={48} />
          5k+ happy customers
        </div>
      </div>

      <div className="hero__img">
        <img src={heroImg} alt="hero" width={"100%"} height={"100%"} />
      </div>
    </section>
  );
};

export default Hero;
