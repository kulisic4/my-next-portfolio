'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await res.json();
        setStatus(errorData.message || "Failed to send.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="font-sans bg-white text-black px-6 py-12">

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-6"
      >

        {/* TITLE */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Contact
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            For collaborations, performances, editions, or inquiries.
          </p>
        </div>

        {/* INPUTS */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
          className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition bg-transparent"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition bg-transparent"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Message"
          rows={5}
          className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition bg-transparent resize-none"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="mt-6 self-center px-10 py-3 border border-black hover:bg-black hover:text-white transition"
        >
          Send
        </button>

        {/* STATUS */}
        {status && (
          <p className="text-center text-sm text-gray-500 mt-2">
            {status}
          </p>
        )}

      </form>
    </div>
  );
}