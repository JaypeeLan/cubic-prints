import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="/" className="header-logo">
        <img src={Logo} alt="logo" width={"100%"} height={40} />
      </a>

      <div className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        {NavLinks.map((l) => (
          <a key={l.name} href={l.link} onClick={handleLinkClick}>
            {l.name}
          </a>
        ))}
      </div>

      <div className="header-controls">
        <Button text="Get a Free Quote" onClick={() => {}} type="tertiary" />
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
