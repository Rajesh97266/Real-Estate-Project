import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    }
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex  justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent ">
        <img src={assets.logo} alt="logo" className="" />
        <ul className="hidden md:flex gap-8 text-white">
          <a href="#header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="menu"
          className="md:hidden cursor-pointer w-7"
        />
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-slate-50 transform transition-transform duration-500 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt="cross"
            className=" w-6"
          />
        </div>
        <ul className="flex flex-col items-center gap-2  px-5 text-lg font-medium mt-10   ">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#header"
            className="cursor-pointer px-4  inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#about"
            className="cursor-pointer px-4  inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#projects"
            className="cursor-pointer px-4  inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#testimonials"
            className="cursor-pointer px-4 inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
