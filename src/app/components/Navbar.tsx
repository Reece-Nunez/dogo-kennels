'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-[#7e1f1d] text-white shadow-md">
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="Okie Kennels Logo" width={40} height={40} className="h-10" />
        <div className="text-2xl font-bold tracking-wide">Okie Kennels</div>
      </div>
      <ul className="flex gap-6 font-medium">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href="/services" className="hover:underline">Services</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
}