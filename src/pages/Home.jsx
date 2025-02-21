import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [visitorCount, setVisitorCount] = useState(5000); // Simulated visitor count
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // Simulating fetching trending posts from an API
    setTimeout(() => {
      setFeaturedPosts([
        { title: "Mastering React Hooks", category: "React", date: "March 1, 2025", author: "Jane Smith" },
        { title: "Latest JavaScript Trends", category: "JavaScript", date: "Feb 20, 2025", author: "John Doe" },
        { title: "How AI is Changing UI/UX", category: "AI & Tech", date: "Jan 15, 2025", author: "Emily Davis" },
      ]);
    }, 1500);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white text-center py-24 mt-16 shadow-xl animate-fade-in">
        <h2 className="text-6xl font-extrabold animate-slide-in">Discover, Learn & Innovate</h2>
        <p className="mt-4 text-lg">Stay ahead with the latest web development insights and tutorials.</p>
        <Link to="/blog">
          <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all">
            Explore Blogs
          </button>
        </Link>
        <div className="absolute top-4 right-4 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
          🔥 {visitorCount.toLocaleString()} active readers
        </div>
      </section>

      {/* AI-Powered Blog Recommendations */}
      <section className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
        <h3 className="text-4xl font-bold text-indigo-700 mb-6 text-center">Recommended for You</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded-full">{post.category}</span>
                <h4 className="text-xl font-bold mt-2">{post.title}</h4>
                <p className="text-gray-600 text-sm mt-1">By {post.author} · {post.date}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
                  Read More
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Fetching recommendations...</p>
          )}
        </div>
      </section>

      {/* Gamified Learning Progress Tracker */}
      <section className="container mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-md text-center">
        <h3 className="text-3xl font-bold text-indigo-700 mb-6">Your Learning Progress</h3>
        <p className="text-lg text-gray-600">Keep track of your reading journey and earn badges!</p>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-40">
            <h4 className="text-xl font-bold text-blue-500">🔥 Streak</h4>
            <p className="text-gray-600">5 Days</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-40">
            <h4 className="text-xl font-bold text-yellow-500">🏆 Badges</h4>
            <p className="text-gray-600">3 Earned</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-40">
            <h4 className="text-xl font-bold text-green-500">📖 Articles Read</h4>
            <p className="text-gray-600">12</p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-blue-600 text-white text-center py-12 mt-8 shadow-md">
        <h3 className="text-3xl font-bold">Stay Updated with Weekly Insights</h3>
        <p className="mt-4 text-lg">Join thousands of developers who get our exclusive content.</p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white px-4 py-2 rounded-l-lg w-64 text-gray-900"
          />
          &nbsp;
          <button className="px-6 py-2 bg-yellow-400 text-black rounded-r-lg hover:bg-yellow-500 transition-all">
            Subscribe
          </button>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-6">What Readers Say</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Sarah Williams", feedback: "The best blog for keeping up with tech trends!" },
            { name: "Michael Johnson", feedback: "I've learned more here than any course!" },
            { name: "Emily Davis", feedback: "The JavaScript guides are top-notch." },
          ].map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h5 className="text-lg font-bold mt-3">{testimonial.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-12 mt-8 shadow-lg">
        <h3 className="text-3xl font-bold">Level Up Your Skills Today</h3>
        <p className="mt-4 text-lg">Start reading and stay ahead in tech.</p>
        <Link to="/blog">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
