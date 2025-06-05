'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fefdfb] text-[#1e1e1e]">
      <Navbar />
      <HeroBanner />
      <Hero />
      <Footer />
    </main>
  );
}
