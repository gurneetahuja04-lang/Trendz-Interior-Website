import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import MarqueeStrip from '../components/MarqueeStrip'
import { HiX, HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const allProducts = [
  { id: 1, title: 'Garden Bloom', category: 'Floral', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', code: 'WT-FL-001' },
  { id: 2, title: 'Marble Luxe', category: 'Luxury', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', code: 'WT-LX-002' },
  { id: 3, title: 'Urban Concrete', category: 'Textured', image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80', code: 'WT-TX-003' },
  { id: 4, title: 'Geo Lines', category: 'Abstract', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', code: 'WT-AB-004' },
  { id: 5, title: 'Petal Blush', category: 'Floral', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80', code: 'WT-FL-005' },
  { id: 6, title: 'Office Suite', category: 'Commercial', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', code: 'WT-CM-006' },
  { id: 7, title: 'Gold Leaf', category: 'Luxury', image: 'https://images.unsplash.com/photo-1616593871468-2a9e0e7f6c56?w=600&q=80', code: 'WT-LX-007' },
  { id: 8, title: 'Rainbow Dreams', category: 'Kids', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', code: 'WT-KD-008' },
  { id: 9, title: 'Wave Texture', category: 'Textured', image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?w=600&q=80', code: 'WT-TX-009' },
  { id: 10, title: 'Cherry Blossom', category: 'Floral', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80', code: 'WT-FL-010' },
  { id: 11, title: 'Midnight Grid', category: 'Abstract', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80', code: 'WT-AB-011' },
  { id: 12, title: 'Cloud Nine', category: 'Kids', image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80', code: 'WT-KD-012' },
]

const categories = ['All', 'Floral', 'Textured', 'Abstract', 'Luxury', 'Kids', 'Commercial']

export default function Collections() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? allProducts : allProducts.filter(p => p.category === active)

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="py-20 bg-offwhite text-center">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">Browse</p>
          <h1 className="font-display text-5xl md:text-6xl text-dark">Our Collections</h1>
          <p className="text-dark/60 font-body mt-4 max-w-lg mx-auto">
            Explore thousands of wallpaper designs curated for every taste and space.
          </p>
        </FadeIn>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-cream sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`shrink-0 px-5 py-2 text-sm font-body font-medium rounded-sm border transition-all ${
                active === cat
                  ? 'bg-dark text-white border-dark'
                  : 'bg-white text-dark border-cream hover:border-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filtered.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setLightbox(product)}
                >
                  <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                      <HiSearch size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold text-white text-xs px-2 py-1 rounded-sm font-body">{product.category}</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-display text-base text-dark">{product.title}</h3>
                    <p className="text-dark/40 text-xs font-body mt-0.5">{product.code}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-2xl w-full rounded-sm overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img src={lightbox.image} alt={lightbox.title} className="w-full object-cover max-h-[60vh]" />
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-1.5 hover:bg-white"
                  aria-label="Close"
                >
                  <HiX size={20} className="text-dark" />
                </button>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl text-dark">{lightbox.title}</h2>
                  <p className="text-dark/50 text-sm font-body mt-1">
                    {lightbox.category} · {lightbox.code}
                  </p>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setLightbox(null)}
                  className="bg-gold text-white text-sm font-body font-medium px-6 py-2.5 rounded-sm hover:bg-opacity-90 transition-all"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <MarqueeStrip light />
    </main>
  )
}
