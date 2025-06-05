'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-[#fffafa]">
            <motion.h1
                className="text-5xl font-extrabold mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Your Dog&#39;s Second Home
            </motion.h1>
            <p className="text-lg max-w-xl text-gray-700 mb-8">
                Okie Kennels offers top-quality training and boarding for dogs of all breeds in Newkirk, OK. We treat your pets like family.
            </p>
            <a
                href="/contact"
                className="bg-[#7e1f1d] text-white px-6 py-3 m-6 rounded-full font-semibold hover:bg-[#5c1615] transition"
            >
                Book a Stay
            </a>
            <section className="bg-[#fdf6f5] px-6 py-16 text-center">
                <h2 className="text-3xl font-bold text-[#7e1f1d] mb-8">Why Choose Okie Kennels?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Breed-Experienced Staff</h3>
                        <p className="text-gray-700 text-sm">From small breeds to Dogos, we understand every dog’s needs.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Secure & Clean Facilities</h3>
                        <p className="text-gray-700 text-sm">24/7 monitoring and strict hygiene protocols for peace of mind.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Oklahoma Family Owned</h3>
                        <p className="text-gray-700 text-sm">Proudly serving Newkirk and surrounding areas with love.</p>
                    </div>
                </div>
            </section>

        </section>

    );
}