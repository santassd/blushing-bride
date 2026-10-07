'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Pkg, socials } from '@/data/weddingPackages'

export default function PackageModal({
  pkg,
  onClose,
}: {
  pkg: Pkg | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {pkg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-backdrop"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="modal"
          >
            <button onClick={onClose} className="modal-close" aria-label="Close">
              <X size={18} />
            </button>

            <div className="modal-head">
              <div className="modal-emoji">{pkg.emoji}</div>
              <div>
                <p className="package-id">Package {pkg.id} · {pkg.category}</p>
                <h3 className="modal-title">{pkg.name}</h3>
              </div>
            </div>

            <p className="modal-tagline">{pkg.tagline}</p>

            <div className="modal-price">
              Starting from ৳ {pkg.price.toLocaleString()}
            </div>

            <div className="modal-grid">
              <div>
                <h4 className="modal-section-title">✦ On-Site Crew</h4>
                {pkg.crew.map((group, i) => (
                  <div key={i} style={{ marginBottom: 16 }}>
                    {group.label && (
                      <p className="modal-group-label">{group.label}</p>
                    )}
                    <ul className="modal-list">
                      {group.items.map((item, j) => (
                        <li key={j}>
                          <span className="gold-bullet">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="modal-section-title">✦ What You Receive</h4>
                <ul className="modal-list">
                  {pkg.deliverables.map((d, i) => (
                    <li key={i}>
                      <span className="gold-bullet">✦</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                {pkg.culturalHighlights && (
                  <p
                    className="modal-section-title"
                    style={{ marginTop: 24, marginBottom: 0 }}
                  >
                    ✦ {pkg.culturalHighlights}
                  </p>
                )}
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={`${socials.whatsapp}?text=${encodeURIComponent(
                  `Hi! I'm interested in ${pkg.name} (Package ${pkg.id})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                💬 Book on WhatsApp
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="btn-outline-gold"
              >
                📧 Send Enquiry
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}