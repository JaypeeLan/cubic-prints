import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import client from "../../client";
import Loader from "../../components/Loader";
import { components } from "../../components/PortableTextComponentView";
import Header from "../../components/Header";
import linkImg from "../../assets/link.png";
import {
  FacebookShare,
  TelegramShare,
  TwitterShare,
  WhatsappShare,
} from "react-share-lite";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Article {
  title: string;
  slug: { current: string };
  subTitle: string;
  body: PortableTextBlock[];
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  publishedAt: string;
}

const BlogArticle = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post' && slug.current == $slug][0]{
          title,
          subTitle,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt,
          },
          publishedAt,
        }`,
        { slug }
      )
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching article:", err);
        setIsLoading(false);
      });
  }, [slug]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="blog-container">
      <Header />
      {isLoading ? (
        <Loader />
      ) : article ? (
        <article className="blog-article">
          <header className="blog-header">
            <h1 className="blog-title">{article.title}</h1>
            {article.subTitle && (
              <p className="blog-subtitle">{article.subTitle}</p>
            )}
            <p className="blog-date">
              {formatDate(article.publishedAt).toUpperCase()}
            </p>
          </header>

          {/* share section */}

          <div className="copy-section">
            <FacebookShare url={window.location.href} blankTarget={true} />
            <TwitterShare url={window.location.href} blankTarget={true} />
            <WhatsappShare url={window.location.href} blankTarget={true} />
            <TelegramShare url={window.location.href} blankTarget={true} />
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => alert("Link copied to clipboard!")}
            >
              <div className="copy-section__copy">
                <img src={linkImg} alt="link" width={21} height={11} />
                copy link
              </div>
            </CopyToClipboard>
          </div>
          {/* ---- */}

          {article.mainImage?.asset?._id && (
            <div className="blog-image-container">
              <img
                src={article.mainImage.asset.url}
                alt={article.mainImage.alt || "Article Image"}
                className="blog-image"
              />
            </div>
          )}

          <div className="blog-content">
            <PortableText value={article.body} components={components} />
          </div>
        </article>
      ) : (
        <div className="blog-not-found">
          <h2>Article not found</h2>
        </div>
      )}
    </div>
  );
};

export default BlogArticle;
