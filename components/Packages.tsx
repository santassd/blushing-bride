'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { packages, sections, Pkg } from '@/data/weddingPackages'
import PackageModal from './PackageModal'

function PackageCard({ pkg, onOpen }: { pkg: Pkg; onOpen: (p: Pkg) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="package-card"
    >
      {pkg.featured && <span className="package-badge">Featured</span>}

      <div className="package-head">
        <div className="package-emoji">{pkg.emoji}</div>
        <div style={{ minWidth: 0 }}>
          <p className="package-id">Package {pkg.id}</p>
          <p className="package-cat">{pkg.category}</p>
        </div>
      </div>

      <h3 className="package-name">{pkg.name}</h3>
      <p className="package-tagline">{pkg.tagline}</p>

      <div className="package-foot">
        <div>
          <p className="package-from">Starting From</p>
          <p className="package-price">৳ {pkg.price.toLocaleString()}</p>
        </div>

        {/* ✅ Ask — notun button */}
        <button
          type="button"
          onClick={() => onOpen(pkg)}
          className="package-ask-btn"
        >
          Ask
          <ArrowRight size={14} strokeWidth={2} className="ask-arrow" />
        </button>
      </div>
    </motion.div>
  )
}

export default function Packages() {
  const [selected, setSelected] = useState<Pkg | null>(null)

  return (
    <section id="packages" className="section section-alt">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-head"
        >
          <span className="section-label">{sections.packages.label}</span>
          <h2 className="section-title">{sections.packages.heading}</h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="packages-grid">
          {packages.map((p) => (
            <PackageCard key={p.id} pkg={p} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <PackageModal pkg={selected} onClose={() => setSelected(null)} />
    </section>
  )
}