'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fefdfb] text-[#1e1e1e]">
      <Navbar />

      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#7e1f1d] mb-6">About Okie Kennels</h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          At Okie Kennels, we’re passionate about dogs of all breeds. Located in Newkirk, Oklahoma, our mission is to provide a safe, clean,
          and caring environment where dogs can feel at home — whether they&#39;re staying the night or coming in for training.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-6">
          We were founded by lifelong dog lovers who specialize in both everyday care and professional training. While we have a deep
          appreciation for the Argentina Dogo, our team is experienced with a wide variety of breeds and temperaments.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-6">
          Whether you’re headed out of town or need expert help with obedience training, Okie Kennels is your trusted local solution.
        </p>
      </section>

      <Footer />
    </main>
  );
}