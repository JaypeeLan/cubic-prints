import Logo from "../../assets/logoWhite.png";
import linkedinIcon from "../../assets/linkedin.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import message from "../../assets/message.png";
import phone from "../../assets/phone.png";
import footerBg from "../../assets/footerBg.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-top__left">
            <img src={Logo} alt="logo" width={214} height={52} />

            <div className="footer-socialIcons">
              <a href="http://">
                <img width={29} height={29} src={ig} alt="instagram" />
              </a>
              <a href="http://">
                <img width={29} height={29} src={fb} alt="facebook" />
              </a>
              <a href="http://">
                <img width={29} height={29} src={linkedinIcon} alt="linkedin" />
              </a>
            </div>
          </div>

          <div className="footer-top__right">
            <span>Contact Us</span>

            <a href="tel:+234 812 345 6789" className="footer-tel">
              +234 812 345 6789
            </a>
            <a href="mailto:hello@cubicprints.africa" className="footer-mail">
              hello@cubicprints.africa
            </a>
            <p className="footer-addr">
              7 Oliyide Street, Mushin, Lagos, Nigeria
            </p>
          </div>
        </div>
        {/* ----- */}

        <div className="footer-bottom">
          <>
            <div className="footer-bottom__socials">
              <a href="  ">
                <img src={phone} alt="phone" width={64} height={64} />
              </a>
              <a href=" ">
                <img src={message} alt="message" width={64} height={64} />
              </a>
            </div>
            <img src={footerBg} width={"100%"} alt="footer" />
          </>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
