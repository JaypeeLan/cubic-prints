import Button from "../Button";
import receipt from "../../assets/receipt.png";

const Cta = () => {
  return (
    <section className="cta">
      <h2>Ready to elevate your brand? Let’s get started!</h2>

      <Button
        text="Get a Free Quote"
        onClick={() =>
          window.open("https://wa.me/message/6VBDI2KDYA2KF1", "_blank")
        }
        icon={<img src={receipt} width={20} height={20} />}
      />
    </section>
  );
};

export default Cta;
