import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email)
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 rounded-lg" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email" className="w-full p-3 rounded-lg" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <textarea placeholder="Message" className="w-full p-3 rounded-lg" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Send Message</button>
      </form>
    </section> 
  );
};

export default Contact;
