"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function MembersPageFull() {
  const [activeTab, setActiveTab] = useState("current");

  // Sample member data
  const currentMembers = [
    {
      id: 1,
      name: "Amsterdam Business School",
      country: "Netherlands",
      joinDate: "2018",
      logo: "/assets/logo.png",
    },
    {
      id: 2,
      name: "Rotterdam School of Management",
      country: "Netherlands",
      joinDate: "2019",
      logo: "/assets/logo.png",
    },
    {
      id: 3,
      name: "International Business Academy",
      country: "Denmark",
      joinDate: "2020",
      logo: "/assets/logo.png",
    },
    {
      id: 4,
      name: "Berlin School of Business",
      country: "Germany",
      joinDate: "2020",
      logo: "/assets/logo.png",
    },
    {
      id: 5,
      name: "Paris International School",
      country: "France",
      joinDate: "2021",
      logo: "/assets/logo.png",
    },
    {
      id: 6,
      name: "Madrid Business Institute",
      country: "Spain",
      joinDate: "2022",
      logo: "/assets/logo.png",
    },
  ];

  // Sample testimonial data
  const testimonial = {
    name: "Dr. Maria Schmidt",
    institution: "Amsterdam Business School",
    quote: "Joining the IVS Alliance has transformed our educational offerings and opened new doors for our students. The collaborative network has been invaluable.",
    logo: "/assets/logo.png",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-gray-800">IVS </span>
              <span className="text-[#0c3458]">Alliance Members</span>
            </h1>
            <p className="text-lg mb-6">
              Our global network of educational institutions committed to
              providing outstanding bilingual education opportunities across
              sectors like business, hospitality, fashion, and management.
            </p>
            <p className="text-lg mb-8">
              Together we're connecting teachers globally and opening new doors
              for students in the Netherlands and beyond.
            </p>

            <button className="bg-[#0c3458] text-white px-6 py-3 rounded hover:bg-blue-700 inline-flex items-center">
              Become Member <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Member Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex border-b mb-8">
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === "current"
                ? "border-b-2 border-blue-600 text-[#0c3458]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("current")}
          >
            Current Members
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === "benefits"
                ? "border-b-2 border-blue-600 text-[#0c3458]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("benefits")}
          >
            Member Benefits
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === "join"
                ? "border-b-2 border-blue-600 text-[#0c3458]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("join")}
          >
            How to Join
          </button>
        </div>

        {/* Current Members Tab */}
        {activeTab === "current" && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Alliance Network</h2>
              <p className="mb-4">
                The IVS Alliance consists of {currentMembers.length} leading
                educational institutions across{" "}
                {
                  Array.from(new Set(currentMembers.map((m) => m.country)))
                    .length
                }{" "}
                countries, all committed to bilingual education excellence and
                crossing borders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentMembers.map((member) => (
                <div
                  key={member.id}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-4 flex items-center border-b bg-gray-50">
                    <Image
                      src={member.logo}
                      alt={`${member.name} logo`}
                      width={50}
                      height={50}
                      className="mr-4"
                    />
                    <h3 className="font-medium">{member.name}</h3>
                  </div>
                  <div className="p-4">
                    <p className="mb-2">
                      <span className="font-medium">Country:</span>{" "}
                      {member.country}
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Member since:</span>{" "}
                      {member.joinDate}
                    </p>
                    <button className="text-[#0c3458] hover:underline mt-2 inline-flex items-center">
                      View profile <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Member Benefits Tab */}
        {activeTab === "benefits" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Member Benefits</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#0c3458]"
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
                  <h3 className="text-xl font-medium">Global Network</h3>
                </div>
                <p>
                  Access to our network of 168 companies across 24 countries,
                  enabling international partnerships and exchange programs.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#0c3458]"
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
                  <h3 className="text-xl font-medium">Curriculum Support</h3>
                </div>
                <p>
                  Access to bilingual educational materials, teaching
                  methodologies, and curriculum frameworks that ensure A-level
                  equivalent diploma standards.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#0c3458]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">Teacher Exchange</h3>
                </div>
                <p>
                  Participate in our teacher exchange program, allowing
                  educators to gain international experience and bring new
                  perspectives to your institution.
                </p>
              </div>

              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#0c3458]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">Quality Assurance</h3>
                </div>
                <p>
                  Benefit from our quality assurance framework that helps
                  maintain high educational standards across all member
                  institutions.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.logo}
                  alt="Testimonial"
                  className="rounded-full mr-4"
                  width={50}
                  height={50}
                />
                <div>
                  <p className="italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-medium mt-2">
                    - {testimonial.name}, {testimonial.institution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* How to Join Tab */}
        {activeTab === "join" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Join the IVS Alliance</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-medium mb-4">
                Membership Requirements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0c3458] mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Commitment to bilingual education excellence</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0c3458] mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Accredited educational institution</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0c3458] mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Qualified teaching staff with bilingual capabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#0c3458] mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Willingness to participate in exchange programs and
                    collaborative initiatives
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-4 text-center">
                  <h3 className="text-xl font-medium">Step 1</h3>
                </div>
                <div className="p-4">
                  <p>
                    Submit initial expression of interest through our online
                    application form.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-4 text-center">
                  <h3 className="text-xl font-medium">Step 2</h3>
                </div>
                <div className="p-4">
                  <p>
                    Undergo quality assessment and evaluation by our membership
                    committee.
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white p-4 text-center">
                  <h3 className="text-xl font-medium">Step 3</h3>
                </div>
                <div className="p-4">
                  <p>
                    Upon approval, complete membership agreement and integration
                    process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-[#0c3458] mb-4">
                Ready to Join?
              </h3>
              <p className="mb-4">
                Take the first step toward becoming part of our global
                educational alliance. Complete the interest form below or
                contact our membership team.
              </p>
              <Link href="/contact-Us">
                <span className="bg-[#0c3458] text-white px-6 py-3 rounded hover:bg-blue-700">
                  Apply for Membership
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">168</div>
              <p>Partner companies across 24 countries</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8 Billion</div>
              <p>Educational products produced daily</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">850 Million</div>
              <p>People reached daily through our network</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}