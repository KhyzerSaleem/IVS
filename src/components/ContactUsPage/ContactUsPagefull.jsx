"use client";

import { useState } from "react";

export default function ContactUsPageFull() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      console.log("Server response:", data);

      alert("Thank you for your message. We will get back to you soon!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-gray-50">
      {/* Header Banner with Enhanced Styling */}
      <div className="bg-[#0c3452] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Got a question or a request? We'd love to hear from you. Send us a
            message by using the contact form and we'll respond as soon as
            possible.
          </p>
        </div>
      </div>

      <div className="container bg-[#0c3452] mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form with Enhanced Styling */}
          <div className="w-full  md:w-2/3">
            <div className="bg-[#0c3452] border border-gray-300 rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send us a message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 placeholder-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border placeholder-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder=" Your Email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border placeholder-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full p-3 border placeholder-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information with Enhanced Styling */}
          <div className="w-full md:w-1/3">
            <div className="bg-[#0c3452] rounded-xl shadow-lg p-6 border border-gray-300 h-full">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h2>

              <div className="mb-6 flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <a
                    href="https://goo.gl/maps/YourLocationLink"
                    className="text-white hover:text-blue-700 transition duration-300"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Address</h3>
                  <p className="text-white mb-1">Zijlweg 203</p>
                  <p className="text-white mb-1">2015 CK, Haarlem</p>
                  <p className="text-white">The Netherlands</p>
                </div>
              </div>

              <div className="mb-6 flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  <a
                    href="mailto:info@ivs-alliance.nl"
                    className="text-white hover:text-blue-700 transition duration-300"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">Email Us</h3>
                  <div>
                    <p className="text-white text-sm">General Inquiries:</p>
                    <p className="text-white font-medium">
                      info@ivs-alliance.nl
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6">
                <h3 className="font-semibold text-lg mb-4 text-white">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  {/* LinkedIn Icon */}
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-700 transition duration-300"
                  >
                    <div className="w-12 h-12 bg-gray-100 hover:bg-blue-50 rounded-full flex items-center justify-center shadow-md transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </div>
                  </a>

                  {/* Instagram Icon */}
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-700 transition duration-300"
                  >
                    <div className="w-12 h-12 bg-gray-100 hover:bg-blue-50 rounded-full flex items-center justify-center shadow-md transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </a>

                  {/* Twitter/X Icon */}
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-700 transition duration-300"
                  >
                    <div className="w-12 h-12 bg-gray-100 hover:bg-blue-50 rounded-full flex items-center justify-center shadow-md transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl  md:text-4xl font-semibold my-8 text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Find Us
          </h2>
          <div className="w-full rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.6943394540745!2d4.612715425294863!3d52.38746951779404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef1adf92d041%3A0x4728c4fd1d6524e3!2sZijlweg%20203%2C%202015%20CK%20Haarlem%2C%20Netherlands!5e0!3m2!1sen!2s!4v1744729718338!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-white">
            <p>
              <strong>Address:</strong> Zijlweg 203, 2015 CK Haarlem,
              Netherlands
            </p>
            <p className="mt-2">
              <strong>Hours:</strong> Monday-Friday: 9am-5pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
