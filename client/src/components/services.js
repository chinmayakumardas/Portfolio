
// components/Services.js
export default function Services() {
  return (
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
  );
}