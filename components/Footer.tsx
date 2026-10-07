'use client'
import { MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from './BrandIcons'
import { socials } from '@/data/weddingPackages'

export default function Footer() {
  const links = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Packages', href: '#packages' },
    { label: 'Stories', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-logo">
          <span className="logo-main">Blushing</span>{' '}
          <span className="logo-accent">Bride</span>
        </p>
        <p className="footer-text">
          Luxury wedding photography & cinematography. Every detail, every
          ritual, forever preserved.
        </p>

        <div className="footer-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="footer-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="footer-socials">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Facebook"
          >
            <FacebookIcon size={18} />
          </a>
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Blushing Bride · Made with 🤍 in Bangladesh
        </p>
      </div>
    </footer>
  )
}