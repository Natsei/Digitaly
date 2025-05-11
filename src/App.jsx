import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Hero from "./sections/Hero/Hero";
import Pricing from "./sections/Pricing/Pricing";
import Features from "./sections/Features/Features";
import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";

const App = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.08
      }}
      containerRef={containerRef}
    >
      <main 
        className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen"
        data-scroll-container 
        ref={containerRef}
      >
        <Hero />
        <Pricing />
        <Features />
        <About />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};

export default App;