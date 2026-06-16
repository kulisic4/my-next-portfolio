"use client";
import React from "react";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Logo / name*/}
        <div className="text-lg font-bold">
          © {new Date().getFullYear()} Danilo Kulišić
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/@kulisicd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-200"
          >
            <Youtube />
          </a>
          
          <a
            href="/contact"
            className="hover:text-sky-200"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}