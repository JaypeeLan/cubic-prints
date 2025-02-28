import { useState } from "react";
import Logo from "../../assets/CubicLogo.png";
import Button from "../Button";
import "./header.css";
import LogoWhite from "../../assets/logoWhite.png";

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
  {
    name: "Blog",
    link: "/blog",
  },
];

const Header = ({ mode }: { mode?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  if (mode === "dark") {
    return (
      <header className={`header header-dark`}>
        <div className="header-dark__l">
          <div>
            <a href="/" className="header-logo">
              <img src={LogoWhite} alt="logo" width={"100%"} height={40} />
            </a>
          </div>

          <>
            <p>THE CUBIC BLOG</p>
          </>
        </div>

        <div className="header-controls">
          <Button
            text="Get a Free Quote"
            onClick={() =>
              window.open("https://wa.me/message/6VBDI2KDYA2KF1", "_blank")
            }
            type="normal"
            style={{
              backgroundColor: "white",
              color: "#222222",
            }}
          />
        </div>
      </header>
    );
  }

  return (
    <header className={`header `}>
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
        <Button
          text="Get a Free Quote"
          onClick={() =>
            window.open("https://wa.me/message/6VBDI2KDYA2KF1", "_blank")
          }
          type="tertiary"
        />
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
