'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#fefdfb] text-[#1e1e1e]">
            <Navbar />

            <ContactForm />

            <Footer />
        </main>
    );
}