import avatar1 from "../assets/img/avatar.png";
import avatar2 from "../assets/img/avatar1.png";
import avatar3 from "../assets/img/otaku.png";


function About() {
    return (
      <div className="bg-gray-50 min-h-screen text-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-400 to-blue-500 text-white text-center py-24 shadow-md">
          <h2 className="text-6xl font-extrabold animate-fade-in">Our Journey</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto animate-fade-in">
            A mission to make learning fun, accessible, and impactful for developers worldwide.
          </p>
        </section>
  
        {/* Mission & Values Section */}
        <section className="container mx-auto px-6 py-12 text-center bg-gradient-to-r from-blue-100 to-white shadow-lg rounded-lg">
          <h3 className="text-4xl font-bold mb-6 text-indigo-700">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "🚀 Innovation", description: "Bringing cutting-edge technology to every article." },
              { title: "📚 Education", description: "Making learning simple, fun, and effective." },
              { title: "🤝 Community", description: "Building a network of passionate learners worldwide." },
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-indigo-50 transition-all">
                <h4 className="text-xl font-bold text-indigo-600">{value.title}</h4>
                <p className="text-gray-700 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Our Journey Timeline */}
        <section className="container mx-auto px-6 py-12 bg-gradient-to-r from-pink-100 to-white rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-center text-indigo-700 mb-8">Milestones & Growth</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2019", milestone: "Started as a passion project for tech enthusiasts." },
              { year: "2021", milestone: "Hit 50,000+ monthly readers & built a loyal community." },
              { year: "2023", milestone: "Expanded into courses, mentoring & global collaborations." },
            ].map((step) => (
              <div key={step.year} className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-indigo-500 hover:shadow-xl hover:bg-indigo-100 transition-all">
                <h4 className="text-2xl font-bold text-indigo-600">{step.year}</h4>
                <p className="text-gray-700 mt-2">{step.milestone}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Meet the Team */}
        <section className="container mx-auto px-6 py-12 text-center bg-gradient-to-r from-green-100 to-white shadow-lg rounded-lg">
          <h3 className="text-4xl font-bold text-indigo-700 mb-6">Meet the Experts Behind the Blog</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "John Doe", role: "Founder & Lead Writer", image: "/img/avatar.png" },
              { name: "Jane Smith", role: "Editor & Content Manager", image: "/img/avatar1.png" },
              { name: "Alice Johnson", role: "Community Manager", image: "/img/otaku.png" },
            ].map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all flex flex-col items-center">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-500" />
                <h4 className="text-xl font-bold text-indigo-700">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Key Achievements */}
        <section className="container mx-auto px-6 py-12 bg-gradient-to-r from-yellow-100 to-white rounded-lg shadow-md">
          <h3 className="text-4xl font-bold text-center text-indigo-700 mb-6">Our Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "🌍 120+ Countries", description: "Readers from all over the world!" },
              { title: "📈 1M+ Page Views", description: "Over a million reads on our blogs." },
              { title: "⭐ 5K+ Contributors", description: "Writers and experts sharing their knowledge." },
            ].map((achievement) => (
              <div key={achievement.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                <h4 className="text-xl font-bold text-indigo-700">{achievement.title}</h4>
                <p className="text-gray-700 mt-2">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Call to Action - Join Us */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-16 shadow-lg">
          <h3 className="text-4xl font-bold animate-pulse">Join the Future of Tech Learning</h3>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Want to contribute or be a part of our community? Let’s innovate together!
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all">
            Become a Contributor
          </button>
        </section>
      </div>
    );
  }
  
  export default About;
  