import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import MarqueeStrip from '../components/MarqueeStrip'
import { HiX, HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const allProducts = [
  // ── BEYOND Catalogue (Shinhan Wall) ──
  { id: 1,  title: 'Fountain',  category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_L0Tvxr3M_20251218044855.jpg', code: '88695-1' },
  { id: 2,  title: 'Fountain',  category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_OwrMau9Y_20251218044824.jpg', code: '88695-2' },
  { id: 3,  title: 'Fountain',  category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_Q3knoCzF_20251218044751.jpg', code: '88695-3' },
  { id: 4,  title: 'Fountain',  category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_JAqX9ydU_20251218044722.jpg', code: '88695-4' },
  { id: 5,  title: 'Sofpalm',   category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_Kp2PCs3O_20251218044646.jpg', code: '88694-1' },
  { id: 6,  title: 'Sofpalm',   category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_LYDAvK23_20251218044615.jpg', code: '88694-2' },
  { id: 7,  title: 'Arden',     category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_FWb9ZUeY_20251218044501.jpg', code: '88693-1' },
  { id: 8,  title: 'Arden',     category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_BGU2t8rj_20251218044427.jpg', code: '88693-2' },
  { id: 9,  title: 'Arden',     category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_UazSTqkB_20251218044319.jpg', code: '88693-4' },
  { id: 10, title: 'Lucorin',   category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_9limZuMc_20251218044240.jpg', code: '88692-1' },
  { id: 11, title: 'Lucorin',   category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_svhTkR41_20251218044124.jpg', code: '88692-3' },
  { id: 12, title: 'Marvik',    category: 'Beyond', image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_S1ehV3LZ_20251218044014.jpg', code: '88691-2' },
]

const categories = ['All', 'Beyond']

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
