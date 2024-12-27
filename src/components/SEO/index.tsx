import { Helmet } from "react-helmet";

const SEO = () => (
  <Helmet>
    <title>Cubic Prints - Excellence in Packaging</title>
    <meta
      name="description"
      content="Cubic Prints delivers exceptional custom packaging solutions with a focus on creativity, affordability, and timely delivery. Trusted by 500,000+ happy customers."
    />
    <meta
      name="keywords"
      content="Packaging, Custom Packaging, Eco-Friendly Packaging, Packaging Design, Packaging Solutions"
    />
    <meta name="author" content="Cubic Prints" />

    {/* Open Graph */}
    <meta
      property="og:title"
      content="Cubic Prints - Excellence in Packaging"
    />
    <meta
      property="og:description"
      content="Explore Cubic Prints' innovative packaging solutions. With over 5 years of expertise and 500,000+ satisfied customers, we're Africa's most preferred packaging brand."
    />
    <meta
      property="og:image"
      content="https://cubicprints.africa/web-share.png"
    />
    <meta property="og:url" content="https://cubicprints.africa/" />
    <meta property="og:type" content="website" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Cubic Prints - Excellence in Packaging"
    />
    <meta
      name="twitter:description"
      content="Explore Cubic Prints' innovative packaging solutions. With over 5 years of expertise and 500,000+ satisfied customers, we're Africa's most preferred packaging brand."
    />
    <meta
      name="twitter:image"
      content="https://cubicprints.africa/web-share.png"
    />

    {/* Structured Data */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Cubic Prints",
          "url": "https://cubicprints.africa/",
          "logo": "https://cubicprints.africa/favicon.png",
          "description": "Delivering excellent packaging solutions in record time.",
          "sameAs": [
            "https://www.facebook.com/cubicprints",
            "https://www.instagram.com/cubicprints"
          ]
        }
      `}
    </script>
  </Helmet>
);

export default SEO;
