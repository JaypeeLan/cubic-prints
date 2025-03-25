import AnimatedWrapper from "../../components/AnimatedWrapper";
import Header from "../../components/Header";
import Brands from "../../components/Sections/Brands";
import Cta from "../../components/Sections/Cta";
import Discover from "../../components/Sections/Discover";
import FAQ from "../../components/Sections/FAQ";
import Footer from "../../components/Sections/Footer";
import Hero from "../../components/Sections/Hero";
import Mission from "../../components/Sections/Mission";
import Packaging from "../../components/Sections/Packaging";
import Services from "../../components/Sections/Services";
import Showcase from "../../components/Sections/Showcase";
import Testimonials from "../../components/Sections/Testimonials";
import SEO from "../../components/SEO";
import "../../App.css";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#201e1e",
          paddingTop: "24px",
        }}
      >
        <SEO />
        <Header />
        <AnimatedWrapper>
          <>
            <Hero />
            <Mission />
            <Services />
            <Packaging />
            <Discover />
            <Showcase />
            <Brands />
            <Testimonials />
            <Cta />
            <FAQ />
          </>
        </AnimatedWrapper>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
