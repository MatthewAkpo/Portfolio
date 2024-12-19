import { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./Contact";
import Footer from "./Footer";
import Personal from "./Personal";
import Icon from "./icons-svg/carat-u-white.svg";
import Personal2 from "./Personal2";

function Portfolio() {
  // State to track if the caret should be visible
  const [showCaret, setShowCaret] = useState(false);

  // Scroll listener to toggle the visibility of the caret
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowCaret(true); // Show caret after scrolling 200px
      } else {
        setShowCaret(false); // Hide caret when near the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the Header
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects/>
      <Router>
      <Routes>
        <Route path="/" element={<Personal/>} />
        <Route path="/personal2" element={<Personal2 />} />
      </Routes>
    </Router>
      <Contact />
      <Footer />

      {/* Caret Component */}
      {showCaret && (
        <div
          className="bg-black p-2 h-10 w-10 flex fixed z-10 bottom-5 right-5 cursor-pointer rounded-full transition-opacity duration-500"
          onClick={scrollToTop}
        >
          <img src={Icon} alt="Scroll to top" />
        </div>
      )}
    </div>
  );
}

export default Portfolio;
