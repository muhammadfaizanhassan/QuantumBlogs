import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-500 to-blue-600 text-white text-center py-24 shadow-md">
        <h2 className="text-5xl font-extrabold">Let's Build Something Amazing</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Have a question, a project in mind, or looking to collaborate? We're excited to hear from you.
        </p>
      </section>

      {/* Contact Form & AI Assistance Section */}
      <section className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* AI-Powered Smart Form */}
          <div>
            <h3 className="text-4xl font-bold text-indigo-700 mb-6">Let’s Talk</h3>
            {!submitted ? (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className="block text-gray-700 font-semibold">Your Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Message</label>
                  <textarea
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="4"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center text-indigo-700">
                <h4 className="text-2xl font-bold">🎉 Thank You!</h4>
                <p className="mt-2 text-lg">We’ll get back to you within 24 hours.</p>
              </div>
            )}
          </div>

          {/* Contact Information & AI Assistant */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-indigo-700 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {[
                { title: "📍 Office Address", detail: "123 Tech Street, San Francisco, CA 94103" },
                { title: "📞 Phone Number", detail: "+1 (123) 456-7890" },
                { title: "📧 Email", detail: "contact@ourblog.com" },
                { title: "🕒 Working Hours", detail: "Mon-Fri: 9 AM - 6 PM" },
              ].map((item) => (
                <div key={item.title} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all">
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-4xl font-bold text-center text-indigo-700 mb-6">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { question: "How soon can I expect a reply?", answer: "We typically respond within 24 hours." },
            { question: "Do you offer free consultations?", answer: "Yes! Contact us to schedule a free 30-minute consultation." },
            { question: "Can I request a custom project?", answer: "Absolutely! We specialize in custom solutions tailored to your needs." },
            { question: "What industries do you work with?", answer: "We work with startups, tech companies, and enterprises worldwide." },
          ].map((faq) => (
            <div key={faq.question} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold">{faq.question}</h4>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA & Partnerships */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-500 text-white text-center py-16 shadow-lg">
        <h3 className="text-4xl font-bold">Let’s Create Something Unique</h3>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          We believe in partnerships that lead to growth. Let’s discuss how we can work together!
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all">
          Start a Conversation
        </button>
      </section>

      {/* Google Map Section */}
      <section className="container mx-auto px-6 py-12 bg-gray-100 shadow-lg rounded-lg">
        <h3 className="text-4xl font-bold text-center text-indigo-700 mb-6">Find Us on the Map</h3>
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.22744032403!2d74.00471645165393!3d31.483103654855885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739876943358!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
