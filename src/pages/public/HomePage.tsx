import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react';

import banner1 from '../../images/B1.png';
import banner2 from '../../images/B2.png';
import banner3 from '../../images/B3.png';

const heroSlides = [
  {
    image: banner1,
    title: 'Your Perfect Smile Awaits',
    subtitle: 'World-class dental care delivered with precision, compassion, and artistry.',
  },
  {
    image: banner2,
    title: 'Advanced Dental Technology',
    subtitle: 'State-of-the-art equipment for comfortable, accurate, and lasting treatments.',
  },
  {
    image: banner3,
    title: 'Trusted by Thousands',
    subtitle: 'Join a community of patients who trust us with their most important asset — their smile.',
  },
];

export default function HomePage() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">

        {heroSlides.map((slide, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
          </motion.div>
        ))}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white/90 text-sm font-medium">
                5-Star Rated Dental Excellence
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* ✅ CTA SECTION */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">

              {/* BOOK BUTTON */}
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-2xl hover:from-sky-600 hover:to-cyan-700 transition-all shadow-2xl shadow-sky-500/40 hover:scale-105 active:scale-95"
              >
                Book Appointment
              </Link>

              {/* WHATSAPP BUTTON (UPDATED) */}
              <a
                href="https://wa.me/+923282333999"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-1 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-2xl hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95"
              >
                {/* Official WhatsApp SVG icon */}
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.04 3C9.41 3 4 8.41 4 15.04c0 2.64.86 5.08 2.32 7.05L4 29l7.14-2.25a12 12 0 0 0 4.9 1.02h.01c6.63 0 12.04-5.41 12.04-12.04C28.09 8.41 22.68 3 16.04 3zm0 21.9c-1.95 0-3.87-.52-5.54-1.51l-.4-.24-4.23 1.33 1.38-4.12-.26-.42a9.9 9.9 0 0 1-1.52-5.28c0-5.48 4.46-9.94 9.94-9.94 2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 0 1 2.91 7.02c0 5.48-4.46 9.94-9.94 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
                  </svg>

                  WhatsApp Us
                </div>

                {/* Faster response INSIDE BUTTON */}
                <span className="flex items-center gap-1 text-xs text-green-100 font-medium">
                  <Zap className="w-3 h-3" />
                  Faster response
                </span>

              </a>

            </div>

          </motion.div>

        </div>

        {/* DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all ${
                i === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
              } h-2 rounded-full`}
            />
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={() => setCurrentSlide(p => (p - 1 + heroSlides.length) % heroSlides.length)}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide(p => (p + 1) % heroSlides.length)}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      </div>
    </div>
  );
}
