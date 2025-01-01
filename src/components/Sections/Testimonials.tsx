import Slider from "../Slider";
import { TestimonialCard } from "../Card";
import { TESTIMONIALS } from "../../data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 data-aos="fade-down">
        Don’t just take our word for it—hear from our happy customers
      </h2>

      <Slider data-aos="fade-up">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard
            authorImg={t.authorImg}
            authorName={t.name}
            // authorTitle={t.title}
            comment={t.comment}
            key={i}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
