import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import { Helmet } from "react-helmet";
import Cta from "../../components/Sections/Cta";
import Footer from "../../components/Sections/Footer";
import { BlogCard } from "../../components/Card";

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
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Fetch the current article
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

        client
          .fetch(
            `*[_type == 'post' && slug.current != $slug][0...2]{
              title,
              subTitle,
              slug,
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
          .then((relatedData) => {
            setRelatedArticles(relatedData);
            setIsLoading(false);
          })
          .catch((err) => {
            console.error("Error fetching related articles:", err);
            setIsLoading(false);
          });
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article?.title || "",
    description: article?.subTitle || "",
    image: article?.mainImage?.asset?.url || "",
    datePublished: article?.publishedAt || "",
    author: {
      "@type": "Person",
      name: "Cubic prints ",
    },
    publisher: {
      "@type": "Organization",
      name: "Cubic prints",
      logo: {
        "@type": "ImageObject",
        url: "https://cubicprints.africa/CubicLogo.png",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{article ? article.title : "Blog Article"}</title>
        <meta name="description" content={article?.subTitle || ""} />
        <meta property="og:title" content={article?.title || ""} />
        <meta property="og:description" content={article?.subTitle || ""} />
        <meta
          property="og:image"
          content={article?.mainImage?.asset?.url || ""}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article?.title || ""} />
        <meta name="twitter:description" content={article?.subTitle || ""} />
        <meta
          name="twitter:image"
          content={article?.mainImage?.asset?.url || ""}
        />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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

            {article.mainImage?.asset?._id && (
              <div className="blog-image-container">
                <img
                  src={article.mainImage.asset.url}
                  alt={article.mainImage.alt || "Article Image"}
                  className="blog-image"
                  loading="lazy"
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

        {/* Related Articles Section - Limited to 2 */}
        {relatedArticles.length > 0 && (
          <div className="read-more">
            <h1 className="blog-title">Read more</h1>
            <div className="related-articles">
              {relatedArticles.map((relatedBlog) => (
                <div className="blog-card" key={relatedBlog.slug.current}>
                  <Link to={`/blog/${relatedBlog.slug.current}`}>
                    <BlogCard
                      imgSrc={relatedBlog?.mainImage?.asset?.url}
                      title={relatedBlog?.title}
                      desc={relatedBlog?.subTitle}
                      date={new Date(relatedBlog?.publishedAt).toLocaleString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default BlogArticle;
