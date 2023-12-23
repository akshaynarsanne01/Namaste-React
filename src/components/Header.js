// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ccc3ab] p-4 text-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl hover:cursor-pointer">
          Your Logo
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <ul className="hidden lg:flex space-x-4 >">
          <li className="hover:cursor-pointer text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:cursor-pointer text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
