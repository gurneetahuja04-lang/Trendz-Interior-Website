import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80',
    heading: 'Walls That Tell Stories',
    sub: 'Discover 10,000+ premium wallpaper designs for every space',
  },
  {
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1920&q=80',
    heading: 'Texture. Colour. Character.',
    sub: 'Transform your interiors with the finest wall coverings from around the world',
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80',
    heading: 'A House of Wall Coverings',
    sub: "Expert guidance from New Delhi's most trusted wallpaper destination",
  },
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80',
    heading: 'Crafted for Every Space',
    sub: 'Residential, commercial, hospitality — we have a design for every vision',
  },
  {
    image: 'https://images.unsplash.com/photo-1560448075-bb485b1f5f6b?w=1920&q=80',
    heading: 'Where Style Meets Surface',
    sub: 'Exclusive collections curated by design experts',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt=""
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-body">
              Trendz Interiors Pvt. Ltd.
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-white text-shadow font-bold leading-tight mb-6">
              {slides[current].heading}
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-body font-light mb-10 max-w-xl mx-auto">
              {slides[current].sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/collections"
                className="bg-gold text-white px-8 py-3.5 font-body font-medium text-sm tracking-wide hover:bg-opacity-90 transition-all rounded-sm"
              >
                Explore Collections
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3.5 font-body font-medium text-sm tracking-wide hover:bg-white hover:text-dark transition-all rounded-sm"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
