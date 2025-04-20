"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaNewspaper,
  FaPhone,
  FaUserFriends,
  FaShieldAlt,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Function to handle navigation
  const handleNavigation = (path) => {
    setMenuOpen(false); // Close the menu
    router.push(path);
  };

  return (
    <>
      <header className="lg:bg-white bg-[#0c3458] shadow-md relative">
        {/* Top Bar */}
        <div className="flex justify-between items-center text-[#fdfdfd] lg:px-6 px-2 py-2">
          <div className="text-2xl font-bold flex items-center">
            {/* Logo for Large Screens */}
            <Link href="/" legacyBehavior>
              <Image
                src="/assets/logo.png"
                alt="IVS Alliance Logo"
                width={200}
                height={200}
                priority
                className="lg:block hidden cursor-pointer lg:ms-12"
                suppressHydrationWarning
              />
            </Link>

            {/* Logo for Medium and Smaller Screens */}
            {/* <Link href="/" legacyBehavior>
              <Image
                src="/assets/logo2.png"
                alt="IVS Alliance Logo 2"
                width={150}
                height={150}
                priority
                className="lg:hidden block cursor-pointer"
                suppressHydrationWarning
              />
            </Link> */}
          </div>

          {/* Social Links for Desktop */}
          <div className="space-x-4 text-black me-20 text-lg lg:flex hidden">
            <FaLinkedinIn className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white md:text-4xl text-2xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="bg-[#052C4F] text-white lg:flex text-center hidden justify-center">
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-8 px-6 py-3 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-Us"
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Students"
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors"
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                href="/Teachers"
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors"
              >
                Teachers
              </Link>
            </li>
           
            <li>
              <Link
                href="/posts"
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/contact-Us"
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/Member"
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors"
              >
                Members
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <nav
          className={`fixed rounded-[30px] inset-0 bg-[#0c3458] z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:hidden`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 left-12 text-5xl md:text-7xl text-white hover:text-yellow-700 transition-colors"
          >
            <IoMdClose />
          </button>

          <div className="space-x-4 md:space-x-6 text-white me-20 text-lg md:text-2xl flex absolute top-[30px] right-0">
            <FaLinkedinIn className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>

          <ul className="flex flex-col ms-8 space-y-6 md:space-y-8 px-6 py-3 md:mt-28 mt-20 text-lg md:text-2xl text-white font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors flex items-center gap-2"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-Us"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors flex items-center gap-2"
              >
                <FaShieldAlt /> About
              </Link>
            </li>
            <li>
              <Link
                href="/Students"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors flex items-center gap-2"
              >
                <FaUserGraduate /> Students
              </Link>
            </li>
            <li>
              <Link
                href="/Teachers"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors flex items-center gap-2"
              >
                <FaChalkboardTeacher /> Teachers
              </Link>
            </li>
            
            <li>
              <Link
                href="/posts"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors flex items-center gap-2"
              >
                <FaNewspaper /> Posts
              </Link>
            </li>
            <li>
              <Link
                href="/contact-Us"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors flex items-center gap-2"
              >
                <FaPhone /> Contact
              </Link>
            </li>
            <li>
              <Link
                href="/Member"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-blue-700 duration-300 transition-colors flex items-center gap-2"
              >
                <FaUserFriends /> Members
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
