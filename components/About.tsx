'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span className="section-label">YOUR STORY, OUR LENS</span>
          <h2 className="section-title">
            Because the moments you remember{' '}
            <span className="gradient-text" style={{ fontStyle: 'italic' }}>
              deserve to be beautifully preserved.
            </span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="about-grid">
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            <p>
              From the nervous excitement before the ceremony to the laughter
              shared with the people you love most, we document every meaningful
              detail with an artistic and timeless approach.
            </p>
            <p>
              Every package is built crew-up, so what you receive matches the
              size of the celebration you're having — from an intimate signature
              story to a full multi-event wedding.
            </p>
            <a href="#packages" className="about-link">
              Discover Our Packages →
            </a>
          </motion.div>

          {/* RIGHT — Double image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-collage"
          >
            {/* Main image */}
            <div className="about-image-main">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85"
                alt="Wedding moment"
                loading="lazy"
              />
              <div className="about-image-overlay" />
            </div>

            {/* Secondary floating image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="about-image-secondary"
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=85"
                alt="Behind the lens"
                loading="lazy"
              />
            </motion.div>

            {/* Gold frame decoration */}
            <div className="about-frame" />

            {/* Signature badge */}
            <div className="about-signature-badge">
              <p className="about-signature-label">With love,</p>
              <p className="about-signature-name">Blushing Bride</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}