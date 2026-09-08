import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import Partners from "../components/Partners";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Partners />
      <Blog />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;