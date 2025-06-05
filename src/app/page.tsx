'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDog, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fefdfb] text-[#1e1e1e]">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 bg-[#7e1f1d] text-white shadow-md">
        <Image
          src="/logo.png"
          alt="Okie Dogo Kennels Logo"
          width={120}
          height={120}
          className="mb-6"
        />

        <div className="text-2xl font-bold tracking-wide">Okie Dogo Kennels</div>
        <ul className="flex gap-6 font-medium">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-[#fffafa]">
        <motion.h1
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Home of the Argentina Dogo
        </motion.h1>
        <p className="text-lg max-w-xl text-gray-700 mb-8">
          Trusted dog kenneling in Newkirk, Oklahoma — providing a safe, loving environment for your canine companions.
        </p>
        <a
          href="#contact"
          className="bg-[#7e1f1d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5c1615] transition"
        >
          Book a Stay
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#7e1f1d]">About Us</h2>
        <p className="text-gray-800 leading-relaxed">
          At Okie Dogo Kennels, we specialize in the Argentina Dogo breed and offer top-notch kenneling services. Our facility is built with love, care, and a deep respect for every pup we host. Your dog’s comfort and safety are our top priorities.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#f5f1ee] px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-[#7e1f1d] text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaDog className="text-[#7e1f1d] text-4xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Kennel Boarding</h3>
            <p>Clean, climate-controlled spaces and supervised care 24/7.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MdOutlineEmail className="text-[#7e1f1d] text-4xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Booking & Scheduling</h3>
            <p>Easy contact and scheduling for overnight or long-term stays.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaPhoneAlt className="text-[#7e1f1d] text-4xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Support & Communication</h3>
            <p>Updates during your pet’s stay and fast responses to questions.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#7e1f1d] text-white px-6 py-8 mt-16 text-center">
        <p>&copy; {new Date().getFullYear()} Okie Dogo Kennels. All rights reserved.</p>
      </footer>
    </main>
  );
}