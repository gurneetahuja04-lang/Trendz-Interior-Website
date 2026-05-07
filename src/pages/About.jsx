import FadeIn from '../components/FadeIn'
import MarqueeStrip from '../components/MarqueeStrip'
import { Link } from 'react-router-dom'

const milestones = [
  { year: '1995', event: 'Founded in New Delhi\'s Pahar Ganj market' },
  { year: '2002', event: 'Expanded to 5,000+ wallpaper SKUs' },
  { year: '2010', event: 'Launched commercial & hospitality division' },
  { year: '2016', event: 'Reached 10,000+ design catalogue milestone' },
  { year: '2020', event: 'Pan-India delivery network established' },
  { year: '2024', event: 'Digital platform launch — now online' },
]

const values = [
  { title: 'Quality First', desc: 'Every product is sourced from certified manufacturers meeting international standards.' },
  { title: 'Customer Centric', desc: 'From selection to installation, our team guides you through every step.' },
  { title: 'Design Excellence', desc: 'We curate with an eye for detail — only the finest designs make our collection.' },
]

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80)' }}
      >
        <div className="absolute inset-0 bg-dark/65" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
              Passion for Beautiful Walls
            </h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              For nearly three decades, Trendz Interiors has been the trusted destination for premium wall coverings in New Delhi — and now, across India.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
                alt="Showroom"
                className="rounded-sm w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 text-center w-32 h-32 flex flex-col justify-center rounded-sm">
                <p className="font-display text-3xl font-bold">30+</p>
                <p className="text-xs font-body mt-1 text-white/80">Years of Excellence</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">About Us</p>
            <h2 className="font-display text-4xl text-dark mb-6">
              New Delhi's Most Trusted Wall Covering Destination
            </h2>
            <p className="text-dark/65 font-body leading-relaxed mb-4">
              Founded in the heart of Pahar Ganj, New Delhi, Trendz Interiors Pvt. Ltd. — operating under the brand name <strong className="text-dark">Wall Trendz</strong> — has been transforming spaces with premium wallpapers for over three decades.
            </p>
            <p className="text-dark/65 font-body leading-relaxed mb-4">
              With a catalogue of over 10,000 designs spanning textures, florals, geometrics, luxury metallics, and children's themes, we offer the widest selection under one roof in the city.
            </p>
            <p className="text-dark/65 font-body leading-relaxed mb-8">
              Our team of design consultants brings expertise, passion, and a personal touch to every project — whether you're redesigning a single room or furnishing an entire commercial complex.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold text-white px-8 py-3.5 text-sm font-medium font-body tracking-wide hover:bg-opacity-90 transition-all rounded-sm"
            >
              Visit Our Showroom
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Director */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="w-20 h-20 bg-cream rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="font-display text-2xl text-gold font-bold">IM</span>
            </div>
            <blockquote className="font-display text-2xl md:text-3xl text-dark italic leading-relaxed mb-6">
              "Our vision has always been simple — to bring the world's most beautiful wall coverings to every home and office in India."
            </blockquote>
            <p className="font-body text-dark/60 text-sm tracking-wide">
              — <strong className="text-dark font-medium">Inder Mohan Singh</strong>, Director, Trendz Interiors Pvt. Ltd.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">Journey</p>
            <h2 className="font-display text-4xl text-dark">Our Milestones</h2>
          </FadeIn>
          <div className="relative border-l border-cream ml-6">
            {milestones.map(({ year, event }, i) => (
              <FadeIn key={year} delay={i * 0.08}>
                <div className="mb-10 pl-8 relative">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold border-2 border-white" />
                  <p className="text-gold font-body text-sm font-semibold tracking-widest uppercase mb-1">{year}</p>
                  <p className="font-body text-dark/70">{event}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">Our Values</p>
            <h2 className="font-display text-4xl text-white">What We Stand For</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="p-8 border border-white/10 rounded-sm hover:border-gold transition-colors">
                  <div className="w-8 h-0.5 bg-gold mb-6" />
                  <h3 className="font-display text-xl text-white mb-3">{title}</h3>
                  <p className="text-white/55 text-sm font-body leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip />
    </main>
  )
}
