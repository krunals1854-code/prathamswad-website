import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SplashScreen from "./components/SplashScreen";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return sessionStorage.getItem("pratham_splash_seen") !== "true";
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem("pratham_splash_seen", "true");
    setShowSplash(false);
  };

  return (
    <main>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <SmoothScroll />
          <Navbar />
          <Hero />
          <About />
          <Products />
          <WhyChooseUs />
          <Partners />
          <Blog />
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;