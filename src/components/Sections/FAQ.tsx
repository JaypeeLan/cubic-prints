import { useState } from "react";
import addIcon from "../../assets/add.png";
import removeIcon from "../../assets/remove.png";
import { FAQs } from "../../data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__left" data-aos="fade-down">
          <h2>Do you have questions, we are here to help!</h2>
        </div>

        {/* ------ */}
        <div className="faq__display" data-aos="fade-left">
          {FAQs.map((faq, i) => (
            <FaqCard
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              toggle={() => toggleAnswer(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const FaqCard = ({
  q,
  a,
  isOpen,
  toggle,
}: {
  q: string;
  a?: string;
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <section className={`faq__card ${isOpen ? "open" : ""}`}>
      <div className="faq__card-top" onClick={toggle}>
        <p>{q}</p>
        <div style={{ cursor: "pointer" }}>
          <img
            src={isOpen ? removeIcon : addIcon}
            width={20}
            height={20}
            alt={isOpen ? "close" : "view"}
          />
        </div>
      </div>
      <div className={`faq__card-ans ${isOpen ? "show" : ""}`}>
        <p>{a}</p>
      </div>
    </section>
  );
};
