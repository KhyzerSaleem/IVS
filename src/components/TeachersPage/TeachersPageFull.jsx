import React from "react";
import Image from "next/image";

export default function TeachersPageFull() {
  // Sample teacher data
  const featuredTeachers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Business Management",
      experience: "15+ years",
      languages: ["English", "Dutch"],
      image: "/assets/Tes.jpg",
    },
    {
      id: 2,
      name: "Prof. Marco Bianchi",
      subject: "Hospitality Management",
      experience: "12+ years",
      languages: ["Italian", "English", "French"],
      image: "/assets/Tes2.jpg",
    },
    {
      id: 3,
      name: "Dr. Annika Müller",
      subject: "Fashion & Design",
      experience: "10+ years",
      languages: ["German", "English", "Dutch"],
      image: "/assets/Tes3.jpg",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="w-full bg-blue-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Our Teachers</h1>
          <p className="text-xl text-white">
            Experienced professionals dedicated to bilingual education
            excellence
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Connecting Teachers Globally
          </h2>
          <p className="text-lg mb-6">
            At IVS Alliance, we bring together talented educators from around
            the world to provide our students with exceptional bilingual
            education. Our teachers are passionate about crossing borders, both
            geographically and culturally, to create meaningful learning
            experiences.
          </p>
          <p className="text-lg mb-6">
            With educators from 24 countries, we offer students the opportunity
            to learn from diverse perspectives and teaching methods while
            maintaining consistently high standards across all our programs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4 flex items-center justify-center bg-[#0c3458] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">168 Teachers</h3>
            </div>
            <p className="text-gray-700">
              Our global network includes 168 educators from 24 countries,
              bringing diverse perspectives to our classrooms.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4 flex items-center justify-center bg-[#0c3458] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">38 Languages</h3>
            </div>
            <p className="text-gray-700">
              Our teachers collectively speak 38 different languages, enhancing
              our bilingual education programs.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4 flex items-center justify-center bg-[#0c3458] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">12+ Sectors</h3>
            </div>
            <p className="text-gray-700">
              Specialized instruction across business, hospitality, fashion,
              wholesale, management and more.
            </p>
          </div>
        </div>

       {/* Featured Teachers */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Featured Teachers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-blue-900">
                      {teacher.name}
                    </h3>
                    <p className="text-[#0c3458]">{teacher.subject}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <strong>Experience:</strong> {teacher.experience}
                  </p>
                  <p className="text-gray-700">
                    <strong>Languages:</strong> {teacher.languages.join(", ")}
                  </p>
                </div>
                <button className="w-full bg-[#0c3458] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team */}
      <div className="bg-[#0c3458] text-white p-8 rounded-lg">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">
              Join Our Teaching Team
            </h2>
            <p className="mb-4">
              Are you passionate about bilingual education? Do you believe in
              the power of education to change the world? Join our global
              alliance of educators and help shape the future of international
              education.
            </p>
            <p>
              We offer competitive compensation, professional development
              opportunities, and the chance to make a real difference in
              students' lives across borders.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          What Our Teachers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative mr-4">
                <Image
                  src="/assets/Tes.jpg"
                  alt="Teacher"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Prof. Elena Santos</h3>
                <p className="text-sm text-gray-600">
                  Business Communication, 8 years at IVS
                </p>
              </div>
            </div>
            <p className="italic text-gray-700">
              "Teaching at IVS Alliance has been a transformative experience
              for me professionally. The opportunity to collaborate with
              colleagues from around the world and teach students from diverse
              backgrounds has enriched my teaching methods and broadened my
              perspective."
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative mr-4">
                <Image
                  src="/assets/Tes3.jpg"
                  alt="Teacher"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">Dr. Thomas Weber</h3>
                <p className="text-sm text-gray-600">
                  Hotel Management, 5 years at IVS
                </p>
              </div>
            </div>
            <p className="italic text-gray-700">
              "What sets IVS Alliance apart is the commitment to bilingual
              education that truly prepares students for international
              careers. I've seen my students go on to succeed in global
              hospitality companies, using the language skills and
              cross-cultural awareness they developed in our program."
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-lg">
            Our teacher coordination team is here to help with any inquiries
            about teaching opportunities or our educational approach.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    type="text"
                    id="name"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    id="subject"
                  >
                    <option>Teaching Opportunities</option>
                    <option>Educational Programs</option>
                    <option>Collaborations</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
                    id="message"
                  ></textarea>
                </div>

                <div>
                  <button className="bg-[#0c3458] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
