import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">QuantumBlogs</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/blog" className="hover:text-gray-300">Blog</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-700 text-white py-2">
          <Link to="/" className="block px-4 py-2 hover:bg-blue-800">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-blue-800">About</Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-blue-800">Blog</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-blue-800">Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
