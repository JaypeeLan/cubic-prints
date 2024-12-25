import { ReactElement } from "react";
import "./button.css";
interface ButtonProps {
  type?: "normal" | "secondary";
  icon?: ReactElement;
  size?: "sm" | "lg";
  text: string;
  onClick: () => void;
}

const Button = ({
  type = "normal",
  text,
  icon,
  onClick,
  size,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button ${
        type === "normal" ? "button-normal" : "button-secondary"
      } ${size === "sm" ? "button-sm" : ""}`}
    >
      {text}
      {icon && <>{icon}</>}
    </button>
  );
};

export default Button;
