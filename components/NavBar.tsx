'use client'

import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-black text-white font-bold p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">Danilo</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-sky-200">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-sky-200">About</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-sky-200">Apps</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-sky-200">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

