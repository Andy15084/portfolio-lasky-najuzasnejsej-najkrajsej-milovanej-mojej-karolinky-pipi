'use client';

import { useRef } from 'react';
import Image from 'next/image';

const galleryImages = [
  '/Artboard 3.PNG',
  '/Artboard 18.PNG',
  '/4.PNG',
  '/IMG_1538.PNG',
  '/IMG_1540.PNG',
  '/IMG_1640.PNG',
  '/glass post 1.png',
  '/gradient IG post 1.png',
  '/NLSM v 1.png',
];

export default function GalleryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  // Create infinite array by repeating images
  const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Previous"
      >
        <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Gallery Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-12 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {infiniteImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="flex-shrink-0 snap-center relative group"
          >
            <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Next"
      >
        <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

