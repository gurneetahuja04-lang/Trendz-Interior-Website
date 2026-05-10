import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-display font-bold text-2xl mb-1">WALL TRENDZ</p>
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">A House of Wall Coverings</p>
          <p className="text-white/60 text-sm leading-relaxed">
            Trendz Interiors Pvt. Ltd., bringing the world's finest wall coverings to your space since decades.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">
            {[['/', 'Home'], ['/collections', 'Collections'], ['/about', 'About Us'], ['/contact', 'Contact & Enquiry']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex gap-3">
              <HiLocationMarker className="text-gold mt-0.5 shrink-0" size={18} />
              <span>Plot No.1, Block No-8, Basement, D.B. Gupta Road, Pahar Ganj, New Delhi‑110055</span>
            </li>
            <li className="flex gap-3 items-center">
              <HiPhone className="text-gold shrink-0" size={18} />
              <span>+91‑11‑41561466 / 42311466</span>
            </li>
            <li className="flex gap-3 items-center">
              <HiPhone className="text-gold shrink-0" size={18} />
              <span>+91‑9999994413</span>
            </li>
            <li className="flex gap-3 items-center">
              <HiMail className="text-gold shrink-0" size={18} />
              <a href="mailto:walltrends@gmail.com" className="hover:text-gold transition-colors">
                walltrends@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Trendz Interiors Pvt. Ltd. All rights reserved.</p>
        <p>Designed with care · New Delhi, India</p>
      </div>
    </footer>
  )
}
