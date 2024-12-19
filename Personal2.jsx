import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pic1 from './sasuke.jpg';
import pic2 from './sasori.jpg';
import pic3 from './kakashi.jpg'; // Add more images if needed

const Personal2 = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [pic1, pic2, pic3]; // Image URLs

  // Automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const showSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  const handleBackClick = () => {
    navigate('/'); // Navigate back to the initial area (Personal component)
  };

  return (
    <section
      id="personal2"
      className="h-screen bg-gray-200 flex items-center justify-center"
    >
      {/* Slider Section */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-gray-300 p-6">
        <div className="slider relative w-full h-3/4 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => showSlide(currentSlide - 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Prev
          </button>
          <button
            onClick={() => showSlide(currentSlide + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-white text-center p-6">
        <h3 className="text-4xl font-bold mb-4 text-gray-800">Coming Soon!</h3>
        <p className="text-lg text-gray-600">
          Detailed personal information and exciting features will be added soon. Stay tuned!
        </p>
        <button
          className="mt-8 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
          onClick={handleBackClick}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default Personal2;
