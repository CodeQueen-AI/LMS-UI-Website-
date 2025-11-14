"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Lobster&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <nav className="px-6 py-4 flex items-center justify-between relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="text-3xl font-bold" style={{ fontFamily: "'Lobster', cursive" }}>
        LearnSphere
      </div>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li className="relative group">
          <a href="/" className="transition-colors duration-300 group-hover:text-blue-900">Home</a>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="/About" className="transition-colors duration-300 group-hover:text-blue-900">About</a>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
        </li>
         <li className="relative group">
          <a href="/Tutor" className="transition-colors duration-300 group-hover:text-blue-900">Tutor</a>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
        </li>
         <li className="relative group">
          <a href="/Map" className="transition-colors duration-300 group-hover:text-blue-900">Search</a>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="/Contact" className="transition-colors duration-300 group-hover:text-blue-900">Contact</a>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <Link href="/signup">
      <div className="hidden md:block">
        <button className="bg-white text-blue-900 border border-blue-900 px-8 py-2 hover:bg-blue-900 hover:text-white hover:border-white transition cursor-pointer">
          Sign Up
        </button>
      </div>
      </Link>
      <div className="absolute bottom-0 left-10 right-10 border-b border-gray-300"></div>
    </nav>
  );
}
