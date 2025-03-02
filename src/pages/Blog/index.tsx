import { useEffect, useState } from "react";
import client from "../../client";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "../../App.css";
import Footer from "../../components/Sections/Footer";
import Cta from "../../components/Sections/Cta";
import { BlogCard } from "../../components/Card";
import Loader from "../../components/Loader";

interface Article {
  title: string;
  slug: { current: string };
  subTitle: string;
  body: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  publishedAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post']{
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
        }`
      )
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((err) => console.log("error", err));
  }, []);

  if (blogs) {
    console.log("blogs", blogs);
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="blog">
      <div className="blog__hero">
        <Header mode="dark" />

        {blogs.length > 0 && (
          <Link
            to={`/blog/${blogs?.[0].slug.current}`}
            key={blogs?.[0].slug.current}
          >
            <div className="blog__blog">
              <div className="blog__blog-article">
                <h1>{blogs[0]?.title}</h1>
                <p>{blogs[0]?.subTitle}</p>
                <span>
                  {new Date(blogs[0]?.publishedAt).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <img
                src={blogs[0]?.mainImage.asset.url}
                alt={blogs[0]?.mainImage?.alt}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </Link>
        )}
      </div>

      {/* ---- */}

      <div className="blog-section">
        {blogs.length > 1 && (
          <div className="blog-cards">
            {blogs.map((b: Article) => (
              <div className="blog-card">
                <Link to={`/blog/${b.slug.current}`} key={b.slug.current}>
                  <BlogCard
                    imgSrc={b?.mainImage?.asset?.url}
                    title={b?.title}
                    desc={b?.subTitle}
                    date={new Date(blogs[0]?.publishedAt).toLocaleString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  ></BlogCard>
                </Link>
              </div>
            ))}
          </div>
        )}

        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
