import React from 'react';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
  const navigate = useNavigate();

  const seeMore = () => {
    navigate('/personal2'); // Navigate to the Personal2 component
  };

  return (
    <section id="personal" className="py-20 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-6">Personal Info</h3>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        Even If I Am A Web Developer, I Still Have Some Personal But Not So Personal Info About Me.
      </p>
      <button
        className="inline-block bg-blue-500 py-2 px-6 rounded-lg text-white font-semibold mt-4 hover:bg-blue-600 transition duration-300"
        onClick={seeMore}
      >
        See More About Matthew
      </button>
    </section>
  );
};

export default Personal;
