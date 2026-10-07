'use client'
import { motion } from 'framer-motion'
import { testimonials } from '@/data/weddingPackages'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-alt">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <span className="section-label">KIND WORDS</span>
          <h2 className="section-title">Stories from our couples</h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="testimonial-card"
            >
              <p className="testimonial-quote">"</p>
              <p className="testimonial-text">{t.text}</p>
              <p className="testimonial-name">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}