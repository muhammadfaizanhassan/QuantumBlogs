function Footer() {
    return (
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} QuantumBlogs. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-gray-300">Twitter</a>
          <a href="#" className="mx-2 hover:text-gray-300">LinkedIn</a>
          <a href="#" className="mx-2 hover:text-gray-300">GitHub</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  