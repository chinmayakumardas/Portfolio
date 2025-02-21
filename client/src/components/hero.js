// components/Hero.js
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section ref={heroRef} className="text-center py-20">
      <h1 className="text-5xl font-bold">Welcome to AAS Information Technology</h1>
      <p className="text-xl mt-4 text-gray-600">Your Trusted Partner for Innovation</p>
    </section>
  );
}