import { ReactElement } from "react";
import quoteImg from "../../assets/quote.png";
import "./card.css";
interface CardProps {
  type?: "normal" | "other";
  imgSrc: string;
  title?: string;
  desc?: string;
  imgWidth?: number | string;
}

const Card = ({
  type = "normal",
  imgSrc,
  title,
  desc,
  imgWidth = 384,
}: CardProps) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} width={imgWidth} />
      {type === "normal" ? <h3>{title}</h3> : <h4>{title}</h4>}
      {type === "normal" ? <p>{desc}</p> : <span>{desc}</span>}
    </div>
  );
};

export default Card;

interface MissionCardProps {
  imgSrc: string;
  title?: string;
  desc?: string;
  children?: ReactElement;
  imageWidth?: number;
  imageHeight?: number;
}

export const MissionCard = ({
  imgSrc,
  title,
  desc,
  children,
  imageWidth = 80,
  imageHeight = 68,
}: MissionCardProps) => {
  return (
    <div className="missionCard">
      <img src={imgSrc} alt={title} width={imageWidth} height={imageHeight} />
      {title && <h3>{title}</h3>}
      {desc && <p>{desc}</p>}
      <>{children}</>
    </div>
  );
};

interface TestimonialCardProps {
  comment: string;
  authorImg: string;
  authorName: string;
  authorTitle: string;
}

export const TestimonialCard = ({
  comment,
  authorImg,
  authorName,
  authorTitle,
}: TestimonialCardProps) => {
  return (
    <div className="testimonialCard">
      <img
        src={quoteImg}
        alt="quote"
        width={58.25}
        height={51.85}
        className="testimonialCard__quoteImg"
      />
      <p className="testimonialCard__comment">{comment}</p>

      <div className="testimonialCard__author">
        <img src={authorImg} alt={authorName} width={80} height={80} />
        <div>
          <p className="testimonialCard__name">{authorName}</p>
          <span className="testimonialCard__title">{authorTitle}</span>
        </div>
      </div>
    </div>
  );
};
