import { useState } from "react";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    { id: 1, title: "Understanding React Hooks", category: "React", date: "Feb 10, 2025", author: "John Doe" },
    { id: 2, title: "Mastering Tailwind CSS", category: "CSS", date: "Jan 20, 2025", author: "Jane Smith" },
    { id: 3, title: "The Future of JavaScript Frameworks", category: "JavaScript", date: "Mar 5, 2025", author: "Alice Johnson" },
    { id: 4, title: "Building Scalable APIs with Node.js", category: "Backend", date: "Apr 12, 2025", author: "Robert Brown" },
    { id: 5, title: "Optimizing Web Performance", category: "Web Development", date: "May 2, 2025", author: "Michael Scott" },
    { id: 6, title: "AI in Frontend Development", category: "AI", date: "Jun 18, 2025", author: "Emily Davis" },
  ];

  const categories = ["All", "React", "CSS", "JavaScript", "Backend", "Web Development", "AI"];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-400 to-blue-500 text-white text-center py-24 shadow-md">
        <h2 className="text-5xl font-extrabold">Explore Our Blog</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">Stay ahead in the tech world with our latest articles, insights, and tutorials.</p>
      </section>

      {/* Category Filter */}
      <div className="container mx-auto px-6 py-6 text-center">
        <h3 className="text-3xl font-bold text-indigo-700 mb-4">Categories</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white transition-all"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-4xl font-bold text-center text-indigo-700 mb-6">Latest Articles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => selectedCategory === "All" || post.category === selectedCategory)
            .map((post) => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h4 className="text-2xl font-bold">{post.title}</h4>
                <p className="text-gray-500 text-sm">By {post.author} · {post.date}</p>
                <p className="text-gray-600 mt-2">Explore the latest trends and best practices in {post.category}.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
                  Read More
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Trending Articles */}
      <section className="container mx-auto px-6 py-12 bg-gray-100 shadow-lg rounded-lg">
        <h3 className="text-4xl font-bold text-center text-indigo-700 mb-6">Trending Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold">{post.title}</h4>
              <p className="text-gray-500 text-sm">By {post.author} · {post.date}</p>
              <p className="text-gray-600 mt-2">Stay ahead with the most-read articles in {post.category}.</p>
              <button className="mt-4 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-500 text-white text-center py-16 shadow-lg">
        <h3 className="text-4xl font-bold">Stay Updated</h3>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Subscribe to our newsletter and never miss an update!
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white w-80 p-3 text-gray-900 rounded-l-lg focus:outline-none"
          />
          <button className="px-4 py-3 bg-yellow-400 text-black font-semibold rounded-r-lg hover:bg-yellow-500 transition-all">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}

export default Blog;
