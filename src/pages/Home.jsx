import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import MarqueeStrip from '../components/MarqueeStrip'
import FadeIn from '../components/FadeIn'
import { HiSparkles, HiStar, HiCube, HiGlobe } from 'react-icons/hi'

const usps = [
  {
    icon: HiCube,
    title: '10,000+ Designs',
    desc: 'An unmatched range of textures, patterns and finishes for every aesthetic.',
  },
  {
    icon: HiSparkles,
    title: 'Premium Quality',
    desc: "Carefully sourced from the world's leading wallpaper manufacturers.",
  },
  {
    icon: HiStar,
    title: 'Expert Guidance',
    desc: 'Our design consultants help you choose the perfect wallpaper for your space.',
  },
  {
    icon: HiGlobe,
    title: 'Pan-India Delivery',
    desc: 'Doorstep delivery across India with professional installation support.',
  },
]

const categories = [
  {
    title: 'Beyond — Fountain',
    image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_L0Tvxr3M_20251218044855.jpg',
    count: 'Beyond Collection',
  },
  {
    title: 'Essence — Real Plaster',
    image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_ISs1zg3W_20230210030209.jpg',
    count: 'Essence Collection',
  },
  {
    title: 'Natural — Rain Tree',
    image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_AbcpdQsV_20240731041117.jpg',
    count: 'Natural Collection',
  },
  {
    title: 'Artis — Selvern',
    image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_EjIHaiRW_20230424045343.jpg',
    count: 'Artis Collection',
  },
  {
    title: 'Motive — Milton',
    image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_MCvdY7XR_20240104012639.jpg',
    count: 'Motive Collection',
  },
  {
    title: 'Beyond — Marvik',
    image: 'https://www.shinhanwall.co.kr/upload/product/3717407184_S1ehV3LZ_20251218044014.jpg',
    count: 'Beyond Collection',
  },
]

export default function Home() {
  return (
    <main>
      <HeroSlider />

      {/* Marquee */}
      <MarqueeStrip />

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">Why Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-dark">
              The Trendz Difference
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="group flex flex-col items-center text-center p-8 rounded-sm border border-cream hover:border-gold hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                    <Icon size={24} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl text-dark mb-3">{title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed font-body">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee (light variant) */}
      <MarqueeStrip light />

      {/* Featured Collections */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">Browse</p>
            <h2 className="font-display text-4xl md:text-5xl text-dark">Featured Collections</h2>
            <p className="text-dark/60 font-body mt-4 max-w-lg mx-auto">
              From timeless classics to contemporary masterpieces — find the design that speaks to you.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ title, image, count }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <Link
                  to="/collections"
                  className="group relative overflow-hidden rounded-sm aspect-[4/3] block"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-display text-xl text-white mb-1">{title}</h3>
                    <p className="text-gold text-xs tracking-widest uppercase font-body">{count}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-block border border-dark text-dark px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-dark hover:text-white transition-all rounded-sm font-body"
            >
              View All Collections
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-28 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1600&q=80)' }}
      >
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-4">Ready to Transform?</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Book a Free Design Consultation
            </h2>
            <p className="text-white/70 font-body text-lg mb-10">
              Visit our showroom at Pahar Ganj, New Delhi or send us an enquiry online.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-opacity-90 transition-all rounded-sm font-body"
            >
              Send an Enquiry
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
