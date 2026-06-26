/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { BankCard } from './components/BankCard';
import { CardData } from './types';
import SpotlightReveal from './components/SpotlightReveal';

const CARDS: CardData[] = [
  { id: '1', cardholderName: 'Alice Smith', cardNumber: '**** **** **** 1234', cvv: '123', videoUrl: 'https://www.w3schools.com/howto/movie.mp4' },
  { id: '2', cardholderName: 'Bob Jones', cardNumber: '**** **** **** 5678', cvv: '456', videoUrl: 'https://www.w3schools.com/howto/movie.mp4' },
  { id: '3', cardholderName: 'Charlie Brown', cardNumber: '**** **** **** 9012', cvv: '789', videoUrl: 'https://www.w3schools.com/howto/movie.mp4' },
];

import { useState } from 'react';
import CarouselSection from './components/CarouselSection';
import NikeSection from './components/NikeSection';
import { CtaSection } from './components/CtaSection';
import { BlogSection } from './components/BlogSection';
import LithosHero from './components/LithosHero';
import ShaderPage from './components/ShaderPage';
import TestimonialsPage from './components/TestimonialsPage';

export default function App() {
  const [page, setPage] = useState<'carousel' | 'nike' | 'cta' | 'blog' | 'lithos' | 'shader' | 'testimonials'>('testimonials');

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <div className="absolute top-4 left-4 z-[200] flex flex-wrap gap-2">
        <button 
          onClick={() => setPage('testimonials')}
          className={`px-4 py-2 rounded text-white text-sm font-medium transition-all ${page === 'testimonials' ? 'bg-fuchsia-600 shadow-md shadow-fuchsia-600/30' : 'bg-slate-900/80 backdrop-blur border border-slate-800 hover:bg-slate-800'}`}
        >
          Testimonial Cards
        </button>
        <button 
          onClick={() => setPage('shader')}
          className={`px-4 py-2 rounded text-white text-sm font-medium transition-all ${page === 'shader' ? 'bg-indigo-600 shadow-md shadow-indigo-600/30' : 'bg-slate-900/80 backdrop-blur border border-slate-800 hover:bg-slate-800'}`}
        >
          Shader Background
        </button>
        <button 
          onClick={() => setPage('lithos')}
          className={`px-4 py-2 rounded text-white text-sm font-medium transition-all ${page === 'lithos' ? 'bg-blue-600' : 'bg-slate-900/80 backdrop-blur border border-slate-800 hover:bg-slate-800'}`}
        >
          Lithos
        </button>
        <button 
          onClick={() => setPage('carousel')}
          className={`px-4 py-2 rounded text-white text-sm font-medium transition-all ${page === 'carousel' ? 'bg-blue-600' : 'bg-slate-900/80 backdrop-blur border border-slate-800 hover:bg-slate-800'}`}
        >
          Carousel
        </button>
        <button 
          onClick={() => setPage('nike')}
          className={`px-4 py-2 rounded text-white text-sm font-medium transition-all ${page === 'nike' ? 'bg-blue-600' : 'bg-slate-900/80 backdrop-blur border border-slate-800 hover:bg-slate-800'}`}
        >
          Nike
        </button>
        <button 
          onClick={() => setPage('cta')}
          className={`px-4 py-2 rounded text-white text-sm font-medium transition-all ${page === 'cta' ? 'bg-blue-600' : 'bg-slate-900/80 backdrop-blur border border-slate-800 hover:bg-slate-800'}`}
        >
          CTA
        </button>
        <button 
          onClick={() => setPage('blog')}
          className={`px-4 py-2 rounded text-white text-sm font-medium transition-all ${page === 'blog' ? 'bg-blue-600' : 'bg-slate-900/80 backdrop-blur border border-slate-800 hover:bg-slate-800'}`}
        >
          Blog
        </button>
      </div>
      {page === 'testimonials' ? (
        <TestimonialsPage />
      ) : page === 'shader' ? (
        <ShaderPage />
      ) : page === 'lithos' ? (
        <LithosHero />
      ) : page === 'carousel' ? (
        <CarouselSection />
      ) : page === 'nike' ? (
        <NikeSection />
      ) : page === 'cta' ? (
        <CtaSection />
      ) : (
        <BlogSection />
      )}
    </div>
  );
}
