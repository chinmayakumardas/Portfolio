'use client'





import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // GSAP animation for dropdown
  useEffect(() => {
    if (dropdown) {
      gsap.fromTo(
        dropdownRef.current,
        { y: -20, opacity: 0, display: "none" },
        { y: 0, opacity: 1, display: "block", duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(dropdownRef.current, {
        y: -20,
        opacity: 0,
        display: "none",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [dropdown]);

  // GSAP animation for sidebar
  useEffect(() => {
    if (sidebarOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [sidebarOpen]);

  return (
    <nav className="bg-black text-white relative">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">Company</a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8">
          {["Insights", "Services", "More"].map((item) => (
            <li
              key={item}
              className="relative"
              onMouseEnter={() => setDropdown(item)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="px-3 py-2">{item}</button>
              {dropdown === item && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 w-screen bg-white text-black shadow-md p-6"
                >
                  <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
                    {item === "Insights" && ["Case Studies", "Blog", "News"].map((sub, i) => (
                      <div key={i} className="p-4 bg-gray-100 hover:bg-gray-200 transition rounded">
                        {sub}
                      </div>
                    ))}
                    {item === "Services" && ["Consulting", "Development", "Support"].map((sub, i) => (
                      <div key={i} className="p-4 bg-gray-100 hover:bg-gray-200 transition rounded">
                        {sub}
                      </div>
                    ))}
                    {item === "More" && ["Career", "About", "Contact"].map((sub, i) => (
                      <div key={i} className="p-4 bg-gray-100 hover:bg-gray-200 transition rounded">
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a href="#" className="hidden lg:flex items-center bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
          <FaPhone className="mr-2" /> Contact
        </a>

        {/* Hamburger Button (Mobile) */}
        <button className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Sidebar (Mobile Navigation) */}
      <div ref={sidebarRef} className="fixed top-0 right-0 h-full bg-white text-black shadow-lg transition-all duration-300"
        style={{ width: sidebarOpen ? "100%" : "0", overflow: "hidden" }}>
        <div className="p-6">
          <button className="absolute top-4 right-4" onClick={() => setSidebarOpen(false)}>
            <HiX size={30} />
          </button>
          <ul className="space-y-6 mt-10">
            {["Insights", "Services", "More"].map((item) => (
              <li key={item} className="relative">
                <button className="w-full text-left py-2">{item}</button>
                <div className="pl-4 mt-2">
                  {item === "Insights" && ["Case Studies", "Blog", "News"].map((sub) => <p key={sub} className="py-1">{sub}</p>)}
                  {item === "Services" && ["Consulting", "Development", "Support"].map((sub) => <p key={sub} className="py-1">{sub}</p>)}
                  {item === "More" && ["Career", "About", "Contact"].map((sub) => <p key={sub} className="py-1">{sub}</p>)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
