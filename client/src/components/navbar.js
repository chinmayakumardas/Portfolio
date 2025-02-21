"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & Close Icons

const menuItems = {
  Home: ["Overview", "Updates", "Team", "Features", "News", "Projects"],
  Company: ["About Us", "Careers", "Press", "Values", "Mission"],
  Marketplace: ["Products", "Pricing", "Partners"],
  Resources: ["Blog", "Webinars", "Help Center", "Guides", "FAQs"],
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(100);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
    gsap.set(dropdownRef.current, { opacity: 0, y: -10, display: "none" });
  }, []);

  const openDropdown = (menu) => {
    if (activeDropdown === menu) return;
    gsap.to(dropdownRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveDropdown(menu);
        gsap.to(dropdownRef.current, {
          opacity: 1,
          y: 0,
          display: "block",
          duration: 0.4,
          ease: "power2.out",
        });
      },
    });
  };

  const closeDropdown = () => {
    gsap.to(dropdownRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setActiveDropdown(null),
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    gsap.to(sidebarRef.current, {
      x: isSidebarOpen ? "100%" : "0%",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <header ref={navbarRef} className="bg-white border-b border-gray-200 shadow-md relative z-[1000]">

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-6 h-[100px]">
        {/* Logo & Slogan */}
        <div className="flex flex-col items-start">
          <a href="#" className="text-3xl font-semibold text-gray-900">
            <img src="/logo.png" alt="Brand Logo" className="h-10 w-auto" />
          </a>
          <p className="text-gray-600 text-sm">Your Trusted Partner for Innovation</p>
        </div>

        {/* Desktop Navigation Links (Hidden on md & sm) */}
        <ul className="hidden lg:flex space-x-8">
          {Object.keys(menuItems).map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => openDropdown(item)}
              onMouseLeave={closeDropdown}
            >
              <button className="menu-button text-gray-900 hover:text-blue-600 px-3 py-2 focus:outline-none">
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
            {/* Contact Us - Always next to the Hamburger */}
            <a
              href="#"
              className="hidden sm:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
            >
              Contact Us ↗
            </a>
            {/* Hamburger Menu */}
            <button onClick={toggleSidebar} className="lg:hidden text-3xl">
              {isSidebarOpen ? <FiX /> : <FiMenu />}
            </button>

          </div>

      </nav>

      {/* Dropdown Section (For Desktop) */}
      <div
  ref={dropdownRef}
  className="absolute left-0 w-full bg-white shadow-lg border-t border-gray-200 p-6 z-[1100]"
  style={{ top: `${navbarHeight}px`, display: activeDropdown ? "block" : "none" }}
>

        {activeDropdown && (
          <div className="max-w-screen-xl z-5000  mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {menuItems[activeDropdown].map((subItem, idx) => (
              <div key={idx} className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
                <h3 className="font-semibold text-lg">{subItem}</h3>
                <p className="text-gray-600 text-sm mt-2">Learn more about {subItem}.</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar Menu (For Mobile & Tablet) */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
        style={{
          width: "100%",
          maxWidth: "100%",
          padding: "20px",
          width: window.innerWidth >= 768 ? "25vw" : "100vw", // 1/4 for medium, full for small
        }}
      >
        {/* Close Button */}
        <button className="lg:hidden text-gray-900 text-3xl fixed top-6 right-6" onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>


        {/* Sidebar Navigation */}
        <ul className="mt-10 space-y-4 text-lg">
          {Object.keys(menuItems).map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => openDropdown(item)}
                className="w-full text-left text-gray-900 hover:text-blue-600 px-3 py-2"
              >
                {item}
              </button>
              {activeDropdown === item && (
                <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                  {menuItems[item].map((subItem, idx) => (
                    <li key={idx} className="pl-3 border-l-2 border-gray-300 hover:text-blue-500">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Us Button (Inside Sidebar) */}
        <a
          href="#"
          className="block mt-6 bg-blue-600 text-white text-center px-5 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Contact Us ↗
        </a>
      </div>
    </header>
  );
}
