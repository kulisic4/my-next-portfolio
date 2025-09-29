'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import WeatherWidget from './WeatherWidget'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white font-bold p-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">Danilo</Link>
      </div>

      {/* Weather */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <WeatherWidget />
      </div>

      {/* Hamburger dugme */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop linkovi */}
      <ul className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-sky-200">Home</Link>
        <Link href="/about" className="hover:text-sky-200">About</Link>
        <Link href="/projects" className="hover:text-sky-200">Apps</Link>
        <Link href="/contact" className="hover:text-sky-200">Contact</Link>
      </ul>

      {/* Mobile meni (dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-4 bg-black rounded-lg shadow-lg flex flex-col space-y-4 p-6 md:hidden"
          >
            <Link href="/" className="hover:text-sky-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-sky-200" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects" className="hover:text-sky-200" onClick={() => setIsOpen(false)}>Apps</Link>
            <Link href="/contact" className="hover:text-sky-200" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
