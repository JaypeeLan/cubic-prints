import { ReactElement } from "react";
import quoteImg from "../../assets/quote.png";
import "./card.css";
interface CardProps {
  type?: "normal" | "other";
  imgSrc: string;
  title?: string;
  desc?: string;
  imgWidth?: number | string;
  priority?: "lazy" | "eager";
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
      <img src={imgSrc} alt={title} width={imgWidth} loading="lazy" />
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
  imageWidth?: number | string;
  imageHeight?: number | string;
  maxWidth?: string;
  date?: string;
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
      <div className="missionCard__img">
        <img src={imgSrc} alt={title} width={imageWidth} height={imageHeight} />
      </div>
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

  authorTitle?: string;
}

export const TestimonialCard = ({
  comment,
  authorImg,
  authorName,
  authorTitle,
}: // authorTitle,
TestimonialCardProps) => {
  return (
    <div className="testimonialCard">
      <img
        src={quoteImg}
        alt="quote"
        width={58.25}
        height={51.85}
        className="testimonialCard__quoteImg"
      />
      <div className="testimonialCard__content">
        <p className="testimonialCard__comment">{comment}</p>

        <div className="testimonialCard__author">
          <div>
            <img src={authorImg} alt={authorName} width={80} height={80} />
          </div>
          <div>
            <span className="testimonialCard__name">{authorName}</span>{" "}
            <span className="testimonialCard__title">{authorTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogCard = ({ imgSrc, title, desc, date }: MissionCardProps) => {
  return (
    <div className="blogCard">
      <div className="blogCard__img">
        <img src={imgSrc} alt={title} width={373} height={264} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <span>{date}</span>
    </div>
  );
};
