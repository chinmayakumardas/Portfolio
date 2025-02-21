"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("services");

  useEffect(() => {
    gsap.from(".section", { opacity: 0, y: 50, duration: 0.6, stagger: 0.2 });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="section h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
        <h1 className="text-5xl font-bold text-gray-900">Empowering Your Business</h1>
        <p className="text-lg text-gray-600 mt-4">Innovative solutions for modern challenges</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section className="section py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
          {["Web Development", "Mobile Apps", "UI/UX Design"].map((service, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-gray-600 mt-2">Top-notch {service} solutions for your business.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry We Work In */}
      <section className="section py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Industries We Work In</h2>
        <div className="flex justify-center space-x-6 mt-8">
          {["Healthcare", "Finance", "E-commerce", "Education"].map((industry, index) => (
            <div key={index} className="px-6 py-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Recent Blogs */}
      <section className="section py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
          {["Tech Trends 2024", "AI in Business", "Cloud Computing"].map((blog, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
              <h3 className="text-xl font-semibold">{blog}</h3>
              <p className="text-gray-600 mt-2">Discover insights on {blog}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="section py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
