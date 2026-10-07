'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-inner">
        {/* LEFT — Logo */}
        <a href="#top" className="navbar-logo">
          <span className="logo-main">Blushing</span>{' '}
          <span className="logo-accent">Bride</span>
        </a>

        {/* RIGHT — Pill menu + CTA */}
        <div className="navbar-right">
          <div className="nav-pill">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-gold">
            Book a Session
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              marginTop: 12,
              marginLeft: 16,
              marginRight: 16,
              borderRadius: 16,
              background: 'rgba(15, 23, 41, 0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(176,141,87,0.15)',
            }}
          >
            <div style={{
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              alignItems: 'center',
            }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#D8C3A5',
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-gold"
                style={{ marginTop: 8 }}
              >
                Book a Session
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}