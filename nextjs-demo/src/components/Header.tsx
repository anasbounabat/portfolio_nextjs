"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-blue p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif tracking-wider">
          YOUR NAME
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`md:flex space-x-8 ${isOpen ? "block" : "hidden"} md:block`}>
          <li className="my-4 md:my-0">
            <Link href="/projects" className="hover:text-gray-300 font-serif tracking-widest uppercase text-sm">
              Projects
            </Link>
          </li>
          <li className="my-4 md:my-0">
            <Link href="/skills" className="hover:text-gray-300 font-serif tracking-widest uppercase text-sm">
              Skills
            </Link>
          </li>
          <li className="my-4 md:my-0">
            <Link href="/about" className="hover:text-gray-300 font-serif tracking-widest uppercase text-sm">
              About
            </Link>
          </li>
          <li className="my-4 md:my-0">
            <Link href="/contact" className="hover:text-gray-300 font-serif tracking-widest uppercase text-sm">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
