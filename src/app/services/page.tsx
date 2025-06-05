'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaDog, FaBone, FaPaw } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fefdfb] text-[#1e1e1e]">
      <Navbar />

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#7e1f1d] text-center mb-12">Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaDog className="text-5xl text-[#7e1f1d] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Kennel Boarding</h3>
            <p className="text-gray-700">
              Safe, climate-controlled kennels with daily playtime and 24/7 care. Ideal for overnight or extended stays.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaBone className="text-5xl text-[#7e1f1d] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Obedience Training</h3>
            <p className="text-gray-700">
              Personalized training programs for puppies and adult dogs, tailored to your dog&#39;s breed and temperament.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaPaw className="text-5xl text-[#7e1f1d] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Daycare</h3>
            <p className="text-gray-700">
              Daily care with structured play, socialization, and enrichment activities for your pet while you’re at work.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}