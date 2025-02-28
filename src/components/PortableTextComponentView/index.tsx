/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "../../helpers/sanityImageUrl";

interface PortableTextComponentProps {
  value: PortableTextBlock[];
}

interface ImageValue {
  _type: string;
  asset?: {
    _ref: string;
  };
  alt?: string;
}

interface SocialMediaEmbedValue {
  _type: string;
  html?: string;
}

export const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="image-container">
          <img
            src={urlFor(value).url() ?? undefined}
            alt={value.alt || "Article image"}
            width={"100%"}
            height={"100%"}
          />
        </div>
      );
    },
    socialMediaEmbed: ({ value }: { value: SocialMediaEmbedValue }) => (
      <div
        dangerouslySetInnerHTML={{ __html: value?.html || "" }}
        className="embed-container"
        style={{ backgroundColor: "white", width: "max-content" }}
      />
    ),
  },
  block: {
    h1: (props) => <h1 className="heading-large">{props.children}</h1>,
    h2: (props) => <h2 className="heading-medium">{props.children}</h2>,
    normal: (props) => <p className="paragraph-text">{props.children}</p>,
    blockquote: (props) => {
      const text = Array.isArray(props.children)
        ? props.children.join("")
        : String(props.children);
      const [quote, author] = text.split("—").map((part) => part?.trim());

      return (
        <blockquote className="blockquote">
          <p>{quote}</p>
          {author && <footer className="blockquote-footer">— {author}</footer>}
          <div className="blockquote-line"></div>
        </blockquote>
      );
    },
  },
  list: {
    bullet: (props) => <ul className="bullet-list">{props.children}</ul>,
  },
  listItem: {
    bullet: (props) => <li className="bullet-list-item">{props.children}</li>,
  },
  marks: {
    strong: (props) => <strong>{props.children}</strong>,
    em: (props) => <em>{props.children}</em>,
    link: (props) => (
      <a
        href={props.value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="link-text"
      >
        {props.children}
      </a>
    ),
  },
};

const PortableTextComponent: React.FC<PortableTextComponentProps> = ({
  value,
}) => {
  return <PortableText value={value} components={components} />;
};

export default PortableTextComponent;
