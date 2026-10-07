'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { packages, socials } from '@/data/weddingPackages'
import { InstagramIcon, FacebookIcon } from './BrandIcons'

type FormState = {
  name: string
  email: string
  phone: string
  date: string
  package: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', date: '', package: '', message: '',
  })
  const [errors, setErrors] = useState<Errors>({})

  const validate = (): Errors => {
    const e: Errors = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email'
    if (form.phone.trim().length < 6) e.phone = 'Please enter a valid phone'
    if (form.message.trim().length < 5) e.message = 'Tell us a bit more'
    return e
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', phone: '', date: '', package: '', message: '' })
  }

  const contactItems = [
    { icon: Phone, label: 'Call', value: socials.phone, href: `tel:${socials.phone}` },
    { icon: Mail, label: 'Email', value: socials.email, href: `mailto:${socials.email}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: socials.whatsapp },
    { icon: InstagramIcon, label: 'Instagram', value: '@blushingbridebd', href: socials.instagram },
    { icon: FacebookIcon, label: 'Facebook', value: 'Blushing Bride BD', href: socials.facebook },
    { icon: MapPin, label: 'Studio', value: socials.location, href: undefined },
  ]

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-head"
        >
          <span className="section-label">LET'S TALK</span>
          <h2 className="section-title">Reserve your date before it's gone.</h2>
          <p className="section-sub">
            Tell us about your celebration — Gaye Holud, Nikah, Reception, or all three.
            We'll build a crew that matches your day.
          </p>
          <div className="gold-divider" />
        </motion.div>

        <div className="contact-grid">
          {/* LEFT — Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="contact-cards"
          >
            {contactItems.map((c, i) => {
              const Icon = c.icon
              const Wrapper: any = c.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={i}
                  {...(c.href && {
                    href: c.href,
                    target: c.href.startsWith('http') ? '_blank' : undefined,
                    rel: 'noopener noreferrer',
                  })}
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <Icon size={18} />
                  </div>
                  <div style={{ minWidth: 0, width: '100%' }}>
                    <p className="contact-card-label">{c.label}</p>
                    <p className="contact-card-value">{c.value}</p>
                  </div>
                </Wrapper>
              )
            })}
          </motion.div>

          {/* RIGHT — Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-row">
              <div className="form-field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>
              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="+880 1XXX-XXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}
              </div>
              <div className="form-field">
                <label>Wedding Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
            </div>

            <div className="form-field" style={{ marginBottom: 20 }}>
              <label>Select Package</label>
              <select
                value={form.package}
                onChange={(e) => setForm({ ...form, package: e.target.value })}
              >
                <option value="">Choose a package</option>
                {packages.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.emoji}  {p.name} — ৳{p.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field" style={{ marginBottom: 20 }}>
              <label>Tell us about your day</label>
              <textarea
                placeholder="Your celebration, your vision, your story..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && <p className="form-error">{errors.message}</p>}
            </div>

            <button type="submit" className="form-btn">
              {sent ? '✓ Thank you — we will reach out' : 'Send Enquiry'}
            </button>

            {sent && (
              <div className="form-success">
                We'll get back to you within 24 hours.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}