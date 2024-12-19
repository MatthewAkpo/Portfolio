import React, { useState } from 'react';

const Header = () => {
  const [ham,setHam] = useState("≡")
  const hue = ()=>{
    if (ham === "≡") {
      setHam("Ξ")
    } else {
      setHam("≡")
    }
  }
  return (
    <header className="bg-blue-500 text-white py-4 z-10 fixed top-0 w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Matthew's Portfolio</h1>
        <button className=' active:scale-75 font-semibold clark text-3xl md:hidden' onClick={hue}>{ham}</button>
        <ul className="hidden space-x-8 md:flex">
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          <li><a href="#personal" className='hover:text-yellow-400'>Personal Info</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
