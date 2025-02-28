import "./loader.css";
import Logo from "../../assets/logoWhite.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <img
        src={Logo}
        alt="Loading..."
        className="loader-logo"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default Loader;
