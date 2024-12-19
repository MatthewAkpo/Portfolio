import React, { useState } from 'react';
import icon from './icons-svg/info-white.svg';

const Lightbox = ({ imgSrc, description, onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (e) => {
    e.stopPropagation(); // Prevent closing the Lightbox when interacting with the popup
    setShowPopup(!showPopup);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Info Icon */}
      <img
        src={icon}
        className="h-[30px] fixed bottom-4 left-4 animate-bounce cursor-pointer hover:animate-none active:scale-75"
        onClick={togglePopup}
      />
      
      {/* Display Image */}
      <img src={imgSrc} alt="Project" className="max-w-3xl max-h-full" />

      {/* Description Popup */}
      {showPopup && (
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg text-black max-w-md top-20"
          onClick={(e) => e.stopPropagation()} // Prevent closing the Lightbox when interacting with the popup
        >
          <h4 className="text-lg font-bold mb-2">Description</h4>
          <p>{description}</p>
          <button
            className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
            onClick={togglePopup}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
