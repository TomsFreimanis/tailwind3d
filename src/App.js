import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [splineWidth, setSplineWidth] = useState(512); // Initial spline width
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to update spline width based on screen width
  const updateSplineWidth = () => {
    if (window.innerWidth <= 768) {
      setSplineWidth(256); // Adjust the width for mobile screens
    } else {
      setSplineWidth(512); // Default width for larger screens
    }
  };

  // Function to handle scrolling and change navbar background color
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add an event listener to update spline width on window resize
  useEffect(() => {
    window.addEventListener("resize", updateSplineWidth);
    // Initial update
    updateSplineWidth();
    window.addEventListener("scroll", handleScroll); // Listen for scroll events
    return () => {
      // Cleanup event listeners when the component unmounts
      window.removeEventListener("resize", updateSplineWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center "
      style={{
        // Set the background image
        backgroundImage: "url('/assets/38126.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <nav
        className={`w-screen  py-0 fixed top-0 z-10 ${
          isScrolled ? "bg-teal-950" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img
            src="/assets/devttf.png"
            alt="Logo"
            className="h-20 cursor-pointer"
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
            } md:flex space-x-6 text-white text-lg font-bold justify-center items-center m-0`}
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
      <div
        className={`container mx-auto text-center mt-8 md:mt-20 ${
          isMobileMenuOpen ? "hidden" : ""
        }`}
      >
        <span className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-500">
          Hi, I'm Toms
        </span>

        <p className="text-2xl text-teal-100 mt-6">
          Dive into a world of 3D creativity in my portfolio
        </p>
      </div>
      <div className={`mt-8 ${isMobileMenuOpen ? "hidden" : ""}`}>
        <Spline
          scene="https://prod.spline.design/OnXie33BXDe-Z7iO/scene.splinecode"
          width={splineWidth} // Set the width based on screen size
        />
      </div>
      {/* Additional content goes here */}
    </div>
  );
}

export default App;
