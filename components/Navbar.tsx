'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* iPhone Notch Style Navbar */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[60vw] min-w-[700px]">
        <div className="bg-white/80 backdrop-blur-md rounded-b-[50px] px-10 py-3 flex items-center justify-between gap-8 h-[70px] w-full" style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)'
        }}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <Image 
              src="/logo 2 .png" 
              alt="Logo" 
              width={55} 
              height={55}
              className="object-contain"
              priority
            />
          </Link>

          {/* Name Text */}
          <div className="font-[family-name:var(--font-major-mono)] text-sm md:text-base lg:text-lg whitespace-nowrap flex-1 text-center">
            Karolína Romana Pifflová
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1 w-7 h-7 items-center justify-center flex-shrink-0"
            aria-label="Menu"
          >
            <span 
              className={`w-5 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span 
              className={`w-5 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`w-5 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-20 right-8 z-40 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="py-4 px-6 space-y-4 min-w-[200px]">
          <li>
            <Link
              href="/"
              className="block text-lg hover:text-gray-600 transition-colors font-[family-name:var(--font-major-mono)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Domov
            </Link>
          </li>
          <li>
            <a
              href="#o-mne"
              className="block text-lg hover:text-gray-600 transition-colors font-[family-name:var(--font-major-mono)]"
              onClick={() => setIsMenuOpen(false)}
            >
              O mne
            </a>
          </li>
          <li>
            <a
              href="#moje-prace"
              className="block text-lg hover:text-gray-600 transition-colors font-[family-name:var(--font-major-mono)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Moje práce
            </a>
          </li>
          <li>
            <a
              href="#kontakt"
              className="block text-lg hover:text-gray-600 transition-colors font-[family-name:var(--font-major-mono)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

