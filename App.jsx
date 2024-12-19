import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Icon from "./icons-svg/carat-u-white.svg";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const slides = [
    "https://via.placeholder.com/1200x500?text=Slide+1",
    "https://via.placeholder.com/1200x500?text=Slide+2",
    "https://via.placeholder.com/1200x500?text=Slide+3",
  ];
  const showSlide = (index) => {
    clearInterval(intervalId); // Stop interval on manual navigation
    setCurrentSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    // Start the slider interval
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    setIntervalId(interval);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [slides.length]);


const [Caret, setCaret] = useState(false);
useEffect(() => {
  const scroller =()=>{
    if (window.scrollY > 100) {
      setCaret(true)
    } else {
      setCaret(false)
    }
  }
  window.addEventListener("scroll", scroller)

  return () => {
    window.removeEventListener("scroll", scroller)
  }
}, [])

const scrollUp =function () {
  window.scrollTo({
    top: 0,
    behavior:'smooth',
  })
}
  // const typingInterval = useRef(null);
  // const [typedText, setTypedText] = useState('');
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Welcome to My Portfolio",
    "Showcasing My Projects & Skills",
    "Wetin You Dey Wait For Scroll Na, Abi Na Here You Wan Dey"
  ];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0); // Track which text to display
  const [charIndex, setCharIndex] = useState(0); // Track character in the current text
  const [isDeleting, setIsDeleting] = useState(false); // Track whether we are typing or deleting
  const typingSpeed = 100; // Typing speed in ms
  const deletingSpeed = 100; // Deleting speed in ms
  const pauseDuration = 1000; // Pause before deleting in ms
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = texts[index];
      if (!isDeleting) {
        // Typing effect
        setCurrentText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentPhrase.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting effect
        setCurrentText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimer); // Cleanup timeout on unmount
  }, [charIndex, isDeleting, texts, index]);


  // useEffect(() => {
  //   const text = textPhrases[currentTextIndex];
  //   let i = 0;
  //   setTypedText(''); // Clear the text when a new phrase is selected

  //   const typeText = () => {
  //     if (i < text.length ) {
  //       setTypedText((prev) => prev + text[i]);
  //       i++;
  //     } else {
  //       clearInterval(typingInterval.current); // Clear the typing interval once done
  //       setIsTyping(false);

  //       // Wait 2 seconds before starting the next phrase
  //       setTimeout(() => {
  //         setIsTyping(true);
  //         setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textPhrases.length);
  //       }, 2000);
  //     }
  //   };

  //   typingInterval.current = setInterval(typeText, 100); // Typing speed

  //   return () => clearInterval(typingInterval.current); // Clean up interval on text change
  // }, [currentTextIndex]);
  
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Matthew's Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-gray-200">About</a></li>
              <li><a href="#slider" className="hover:text-gray-200">Projects</a></li>
              <li><a href="#skills" className="hover:text-gray-200">Skills</a></li>
              <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">
            {currentText}
            <span className={ "cursor-blink"}></span>
          </h2>
          <p className="mt-4">Showcasing My Projects, Skills, and Experience</p>
          <a
            href="/resume.pdf"  // Replace with your resume's actual link
            download
            className="h-max bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-200"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">I'm Matthew, a passionate developer with expertise in web development and a love for creating seamless user experiences. My work combines creativity, functionality, and attention to detail to produce outstanding results.</p>
        </div>
      </section>

      <section id="slider" className="relative bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="slider flex overflow-hidden relative h-64">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img src={slide} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={() => showSlide(currentSlide - 1)} className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2">Prev</button>
            <button onClick={() => showSlide(currentSlide + 1)} className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2">Next</button>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <i className="fab fa-html5 text-4xl text-orange-500"></i>
              <h3 className="text-xl font-bold mt-4">HTML</h3>
            </div>
            <div>
              <i className="fab fa-css3-alt text-4xl text-blue-500"></i>
              <h3 className="text-xl font-bold mt-4">CSS</h3>
            </div>
            <div>
              <i className="fab fa-js-square text-4xl text-yellow-500"></i>
              <h3 className="text-xl font-bold mt-4">JavaScript</h3>
            </div>
            <div>
              <i className="fab fa-react text-4xl text-blue-300"></i>
              <h3 className="text-xl font-bold mt-4">React</h3>
            </div>
            <div>
              <i className="fab fa-css text-4xl text-blue-300"></i>
              <h3 className="text-xl font-bold mt-4">TailWind Css</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 rounded-lg" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 rounded-lg" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-200">Send</button>
          </form>
        </div>
      </section>

           {/* Caret Component */}
           {Caret && (
        <div
          className="bg-black p-2 h-10 w-10 flex fixed z-10 bottom-5 right-5 cursor-pointer rounded-full transition-opacity duration-500"
          onClick={scrollUp}
        >
          <img src={Icon} alt="Scroll to top" />
        </div>
      )}

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Matthew. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
