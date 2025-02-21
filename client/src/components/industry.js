// components/Industries.js
"use client";
export default function Industries() {
  return (
    
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
  );
}