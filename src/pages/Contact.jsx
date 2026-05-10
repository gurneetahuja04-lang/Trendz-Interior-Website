import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { HiPhone, HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'enquiry', ...form }).toString(),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    }
    setLoading(false)
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-offwhite text-center">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl text-dark">Contact & Enquiry</h1>
          <p className="text-dark/60 font-body mt-4 max-w-lg mx-auto">
            Visit our showroom, call us, or drop an enquiry below, we'll get back to you promptly.
          </p>
        </FadeIn>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <FadeIn>
            <h2 className="font-display text-3xl text-dark mb-8">Find Us</h2>
            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <HiLocationMarker className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-body font-medium text-dark text-sm mb-1">Showroom Address</p>
                  <p className="text-dark/60 font-body text-sm leading-relaxed">
                    Plot No.1, Block No-8, Basement,<br />
                    D.B. Gupta Road, Pahar Ganj,<br />
                    New Delhi‑110055 (Near Pahar Ganj Police Station)
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <HiPhone className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-body font-medium text-dark text-sm mb-1">Phone</p>
                  <a href="tel:+911141561466" className="text-dark/60 font-body text-sm hover:text-gold transition-colors block">+91‑11‑41561466</a>
                  <a href="tel:+911142311466" className="text-dark/60 font-body text-sm hover:text-gold transition-colors block">+91‑11‑42311466</a>
                  <a href="tel:+919999994413" className="text-dark/60 font-body text-sm hover:text-gold transition-colors block">+91‑9999994413</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center shrink-0">
                  <HiMail className="text-gold" size={20} />
                </div>
                <div>
                  <p className="font-body font-medium text-dark text-sm mb-1">Email</p>
                  <a href="mailto:walltrends@gmail.com" className="text-dark/60 font-body text-sm hover:text-gold transition-colors">
                    walltrends@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Google Maps Embed */}
            <div className="rounded-sm overflow-hidden border border-cream">
              <iframe
                title="Trendz Interiors Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.2100!3d28.6430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzM0LjgiTiA3N8KwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          {/* Enquiry Form */}
          <FadeIn delay={0.15}>
            <h2 className="font-display text-3xl text-dark mb-8">Send an Enquiry</h2>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 gap-4"
                >
                  <HiCheckCircle size={56} className="text-gold" />
                  <h3 className="font-display text-2xl text-dark">Thank You!</h3>
                  <p className="text-dark/60 font-body max-w-sm">
                    Your enquiry has been received. We'll reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    className="mt-4 border border-dark text-dark text-sm font-body font-medium px-6 py-2.5 rounded-sm hover:bg-dark hover:text-white transition-all"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  name="enquiry"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Netlify hidden input */}
                  <input type="hidden" name="form-name" value="enquiry" />

                  <div>
                    <label className="block text-sm font-body font-medium text-dark mb-1.5">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-cream rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-dark mb-1.5">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-cream rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-dark mb-1.5">
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-cream rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-dark mb-1.5">
                      Message / Enquiry Details
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your space, the type of wallpaper you're looking for, quantity, etc."
                      className="w-full border border-cream rounded-sm px-4 py-3 text-sm font-body focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-body">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold text-white py-4 text-sm font-body font-medium tracking-wide rounded-sm hover:bg-opacity-90 transition-all disabled:opacity-60"
                  >
                    {loading ? 'Sending…' : 'Send Enquiry'}
                  </button>

                  <p className="text-dark/40 text-xs font-body text-center">
                    We'll respond within 24 hours · walltrends@gmail.com
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
