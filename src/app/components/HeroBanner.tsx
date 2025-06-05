'use client';

import Image from 'next/image';

export default function HeroBanner() {
    return (
        <section className="relative w-full h-[calc(100vh-80px)]">
            <Image
                src="/dog-kennel.png"
                alt="Dogs at Okie Kennels"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center px-4">
                    Where Dogs Feel at Home
                </h2>
            </div>
        </section>
    );
}
