import { useEffect, useState, useRef } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const blogsPerPage = 9;
  const blogSectionRef = useRef<HTMLDivElement>(null);

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

  // Scroll to the top of the blog section when page changes
  useEffect(() => {
    if (blogSectionRef.current && !isLoading) {
      blogSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage, isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  // Always feature the first blog at the top
  const featuredBlog = blogs.length > 0 ? blogs[0] : null;

  // Exclude the featured blog from pagination
  const blogsForCards = blogs.slice(1);

  // Calculate total pages (excluding the featured blog)
  const totalPages = Math.ceil(blogsForCards.length / blogsPerPage);

  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = (currentPage - 1) * blogsPerPage;
  const currentPageBlogs = blogsForCards.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  // Change page with animation
  const paginate = (pageNumber: number) => {
    if (pageNumber === currentPage) return;

    setIsAnimating(true);

    // Apply animation timing
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsAnimating(false);
    }, 300); // Match this with the CSS animation duration
  };

  return (
    <div className="blog">
      <div className="blog__hero">
        <Header mode="dark" />

        {featuredBlog && (
          <Link
            to={`/blog/${featuredBlog.slug.current}`}
            key={featuredBlog.slug.current}
          >
            <div className="blog__blog">
              <div className="blog__blog-article">
                <h1>{featuredBlog.title}</h1>
                <p>{featuredBlog.subTitle}</p>
                <span>
                  {new Date(featuredBlog.publishedAt)
                    .toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                    .toUpperCase()}
                </span>
              </div>

              <img
                src={featuredBlog.mainImage.asset.url}
                alt={featuredBlog.mainImage?.alt}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </Link>
        )}
      </div>

      {/* Blog section with ref for scrolling */}
      <div className="blog-section" ref={blogSectionRef}>
        {blogsForCards.length > 0 && (
          <div className={`blog-cards ${isAnimating ? "fade-out" : "fade-in"}`}>
            {currentPageBlogs.map((blog: Article) => (
              <div className="blog-card" key={blog.slug.current}>
                <Link to={`/blog/${blog.slug.current}`}>
                  <BlogCard
                    imgSrc={blog?.mainImage?.asset?.url}
                    title={blog?.title}
                    desc={blog?.subTitle}
                    date={new Date(blog?.publishedAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <div className="pagination-container">
              <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1 || isAnimating}
                className="pagination-button"
              >
                Previous
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    disabled={isAnimating}
                    className={`pagination-number ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  paginate(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                disabled={currentPage === totalPages || isAnimating}
                className="pagination-button"
              >
                Next
              </button>
            </div>
          </div>
        )}

        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
