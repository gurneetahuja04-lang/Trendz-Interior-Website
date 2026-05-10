import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span
            className="font-display font-bold text-2xl tracking-wide"
            style={{ background: 'linear-gradient(135deg, #7B3F3F 0%, #C4788A 60%, #D4909A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            Trendz
          </span>
          <span className={`text-xs font-body tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-gold' : 'text-gold'}`}>
            Trendz Interiors
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-body font-medium tracking-wide transition-colors relative group ${
                    scrolled
                      ? isActive ? 'text-gold' : 'text-dark hover:text-gold'
                      : isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`
                }
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-gold text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-opacity-90 transition-all"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-cream overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-body font-medium ${isActive ? 'text-gold' : 'text-dark'}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-block bg-gold text-white text-sm font-medium px-5 py-2 rounded-sm"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
