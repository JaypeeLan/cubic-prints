import { PACKAGING } from "../../data";
import { MissionCard } from "../Card";

const Packaging = () => {
  return (
    <section className="packaging">
      <h2>Packaging is more than just a container for your products —</h2>

      <p className="body2">
        it’s a powerful tool that influences customer perception and purchasing
        decisions. Packaging does more than hold your product.
      </p>

      <div className="packaging-show">
        {PACKAGING.map((p) => (
          <MissionCard
            imgSrc={p.imgSrc}
            desc={p.text}
            imageWidth={282}
            imageHeight={360}
          />
        ))}
      </div>
    </section>
  );
};

export default Packaging;
