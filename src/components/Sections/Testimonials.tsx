import Slider from "../Slider";
import person from "../../assets/person.png";
import { TestimonialCard } from "../Card";
import { TESTIMONIALS } from "../../data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Don’t just take our word for it—hear from our happy customers</h2>

      <Slider>
        {TESTIMONIALS.map((t) => (
          <TestimonialCard
            authorImg={person}
            authorName={t.name}
            authorTitle={t.title}
            comment={t.comment}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
