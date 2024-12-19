import React, { useState, useEffect } from 'react';

const Hero = () => {
  const texts = ["Hi, I'm Matthew", "I am a Web Developer","And This Is My Portfolio"];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0); // Track which text to display
  const [charIndex, setCharIndex] = useState(0); // Track character in the current text
  const [isDeleting, setIsDeleting] = useState(false); // Track whether we are typing or deleting
  const typingSpeed = 100; // Typing speed in ms
  const deletingSpeed = 50; // Deleting speed in ms
  const pauseDuration = 2000; // Pause before deleting in ms

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

  return (
    <section
      id="hero"
      className="h-screen text-white flex items-center justify-center chisom"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-semibold font-[cursive]">
          {currentText}
          <span className="blink-cursor font-[cursive]">|</span>
        </h2>
        <p className="text-lg animate__animated animate__fadeInUp">
          Web Developer | React & Tailwind CSS Enthusiast
        </p>
        <a
          href="/portfolio.jsx"
          download
          className="inline-block bg-yellow-500 py-2 px-6 rounded-lg text-black font-semibold mt-4 animate__animated animate__fadeInUp"
        >
          Download Curriculum Vitae
        </a>
      </div>
    </section>
  );
};

export default Hero;
