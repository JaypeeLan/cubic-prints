import Logo from "../../assets/CubicLogo.png";
import Button from "../Button";
import "./header.css";

const NavLinks = [
  {
    name: "About Cubic Prints",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Featured",
    link: "#featured",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={Logo} alt="logo" width={136} height={40} />
      </a>

      <div className="nav">
        {NavLinks.map((l) => (
          <a href={l.link}>{l.name}</a>
        ))}
      </div>

      <Button text="Get a Free Quote" onClick={() => {}} />
    </div>
  );
};

export default Header;
