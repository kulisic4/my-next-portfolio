'use client'
import Link from 'next/link'
import React from 'react'
import WeatherWidget from './WeatherWidget'

export default function Navbar() {
  return (
    <nav className="bg-black text-white font-bold p-4 flex justify-between items-center relative">
      <div className="text-xl font-bold">
        <Link href="/">Danilo</Link>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <WeatherWidget />
      </div >
      <ul className="flex space-x-6">
          <Link href="/" className="hover:text-sky-200">Home</Link>
          <Link href="/about" className="hover:text-sky-200">About</Link>
          <Link href="/projects" className="hover:text-sky-200">Apps</Link>
          <Link href="/contact" className="hover:text-sky-200">Contact</Link>
      </ul>
    </nav>
  )
}

