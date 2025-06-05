'use client';

export default function Footer() {
  return (
    <footer className="bg-[#7e1f1d] text-white px-6 py-10 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="mb-2 font-semibold">Okie Kennels – Newkirk, OK</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Okie Kennels. All rights reserved.</p>
      </div>
    </footer>
  );
}
