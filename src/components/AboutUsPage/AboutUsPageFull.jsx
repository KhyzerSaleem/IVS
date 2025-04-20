import Link from "next/link";
export default function AboutUsPageFull() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Tweetali gonderwijs IVS Alliance</h1>
          <p className="text-xl text-gray-600">
            Transforming education through global bilingual learning initiatives
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              WHO WE ARE
            </h2>
            <h3 className="text-3xl font-bold mb-6">
            We care about our students and teachers.
            </h3>
            <p className="mb-4 text-gray-700">
            Crossing borders is in the IVS Alliance genes. From day one the members try to be one step ahead. Offering classes in English, a double diploma program and internships abroad. All initiated by IVS Alliance members. What will be our next crossing?
            </p>
            <p className="mb-4 text-gray-700">
              Crossing borders is in the IVS Alliance genes. From day one the
              members try to be one step ahead, innovating education and
              creating global opportunities for students around the world.
            </p>
            <p className="mb-6 text-gray-700">
              Founded with the belief that education is the most powerful weapon
              we can use to change the world, our alliance brings together
              educational institutions, teachers, and industry partners to
              create meaningful learning experiences.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="bg-[#0c3458] hover:bg-blue-700 text-white px-6 py-3 inline-flex items-center"
              >
                Learn More About Our Mission
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-10">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="h-8 w-8 text-[#0c3458]"
                  xmlns="http://www.w3.org/2000/svg"
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
              <div>
                <h3 className="font-bold uppercase text-lg">
                connecting teachers

                </h3>
                <p className="text-gray-600">
                The IVS Alliance connect teachers from different schools that offer bilingual education. Through meetings and online platforms we stay in contact to enhance personal and professional contact.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="h-8 w-8 text-[#0c3458]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold uppercase text-lg">sharing knowledge</h3>
                <p className="text-gray-600">
                The IVS Alliance shares knowledge to further develop quality education. Teachers, students and entrepreneurs share ideas, best practices, learning materials and inspiration.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="h-8 w-8 text-[#0c3458]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold uppercase text-lg">
                New developments
                </h3>
                <p className="text-gray-600">
                Together we develop new programs and materials for students and teachers. Each school uses these programs and materials for their own benefit in a way that fits their college.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl uppercase font-bold mb-10 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-blue-100 p-4 rounded-full mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-[#0c3458]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl capitalize mb-3"> The path we want to take with our journey</h3>
              <p className="text-gray-600">
              The mission of the IVS Alliance is to grant support requests from teachers within the BTEC program to enable them to matter to students and entrepreneurs. The IVS Alliance trains, engages and inspires members.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-blue-100 p-4 rounded-full mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-[#0c3458]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="font-bold capitalize text-xl mb-3">How we see our role</h3>
              <p className="text-gray-600">
              The IVS Alliance wants to collectively support bilingual vocational colleges to improve the opportunities for their students.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="bg-blue-100 p-4 rounded-full mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-[#0c3458]"
                  xmlns="http://www.w3.org/2000/svg"
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
              <h3 className="font-bold text-xl mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We create educational opportunities that are accessible to all,
                regardless of background or circumstance.
              </p>
            </div>
          </div>
        </div>

        {/* Join Section */}
        <div className="mt-16 bg-gray-100 p-8 rounded-lg">
          <div className="md:flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Join the IVS Alliance</h2>
              <p className="text-gray-600 mb-4 md:mb-0">
                Become a member and help shape the future of bilingual education
              </p>
            </div>
            <Link
              href="/contact-Us"
              className="bg-[#0c3458] hover:bg-blue-800 text-white px-6 py-3 inline-flex items-center"
            >
              Become Member
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
