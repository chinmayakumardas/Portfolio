// components/Blog.js
export default function Blog() {
  return (
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
  );
}
