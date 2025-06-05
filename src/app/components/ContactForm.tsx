'use client';

export default function ContactForm() {
  return (
    <section className="px-6 py-20 w-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#7e1f1d] text-center mb-10">Contact Us</h1>
      <form className="grid grid-cols-1 gap-6 bg-white shadow-md rounded-xl p-8">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e1f1d]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e1f1d]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-1">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Let us know how we can help..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e1f1d]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#7e1f1d] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#5c1615] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}