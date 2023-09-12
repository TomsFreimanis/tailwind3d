import React, { useState } from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center relative"
      style={{
        // Set the background image
        backgroundImage: "url('/assets/38126.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav className={`w-full py-4 fixed top-0 z-10 ${isMobileMenuOpen ? 'bg-black' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img
            src="/assets/devttf.png"
            alt="Logo"
            className="h-16 cursor-pointer"
          />

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-teal-300 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Items (Centered on desktop) */}
          <ul
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex space-x-6 text-white text-lg font-bold justify-center items-center`}
          >
            <li>
              <a
                href="#about"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className={`container mx-auto text-center mt-8 md:mt-20 ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-500">
          Hi, I'm Toms
        </span>

        <p className="text-2xl text-teal-100 mt-6">
          Dive into a world of 3D creativity in my portfolio
        </p>
      </div>
      <div className={`mt-8 ${isMobileMenuOpen ? 'hidden' : ''}`}>
      <Spline scene="https://prod.spline.design/njITtRL32vLLbkQv/scene.splinecode" />
      </div>
      {/* Additional content goes here */}
    </div>
  );
}

export default App;
