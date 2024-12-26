import Header from "./components/Header";
import Cta from "./components/Sections/Cta";
import Discover from "./components/Sections/Discover";
import FAQ from "./components/Sections/FAQ";
import Footer from "./components/Sections/Footer";
import Hero from "./components/Sections/Hero";
import Mission from "./components/Sections/Mission";
import Packaging from "./components/Sections/Packaging";
import Services from "./components/Sections/Services";
import Showcase from "./components/Sections/Showcase";
import Testimonials from "./components/Sections/Testimonials";
import "./App.css";
import Brands from "./components/Sections/Brands";

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
