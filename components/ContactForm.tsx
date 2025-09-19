'use client';
import React from 'react';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

  return (
    <form onSubmit ={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Your name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="you@example.com"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block mb-6">
        <span className="text-gray-700 font-medium">Message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Write your message..."
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}