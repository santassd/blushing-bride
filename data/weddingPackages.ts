export type Pkg = {
  id: string
  category: string
  name: string
  tagline: string
  price: number
  crew: { label?: string; items: string[] }[]
  deliverables: string[]
  culturalHighlights?: string
  featured?: boolean
  emoji: string
}

export const hero = {
  label: 'WEDDING PHOTOGRAPHY & CINEMATOGRAPHY',
  headline: 'Six ways to hold onto one day, forever.',
  subheadline:
    'From an intimate signature story to a full multi-event wedding — every package is built crew-up, so what you receive matches the size of the celebration you\u2019re having.',
}

export const sections = {
  packages: {
    label: 'OUR PACKAGES',
    heading: 'Pick the story that fits your day',
  },
}

export const packages: Pkg[] = [
  {
    id: '01', category: 'ESSENTIAL LUXURY', name: 'The Signature Story',
    tagline: 'Luxury coverage for intimate celebrations — the whole day, told with care.',
    price: 15000,
    crew: [{ items: ['1 Senior Photographer', '1 Traditional Photographer', '1 Senior Cinematographer'] }],
    deliverables: [
      'Full album, color-graded, high-resolution edits',
      '2–3 min cinematic trailer',
      '10–20 min full-length cinematic film',
    ],
    emoji: '🌸',
  },
  {
    id: '02', category: 'MODERN EDITORIAL', name: 'The Editorial Heirloom',
    tagline: 'Editorial aesthetics paired with same-day social coverage — timeless and instant.',
    price: 25000,
    crew: [{ items: ['2 Senior Photographers', '1 Senior Cinematographer', '1 Traditional Cinematographer', '1 Mobile Content Creator'] }],
    deliverables: [
      'Full album, color-graded, high-resolution edits',
      '100 specially edited hero photos',
      '10–20 min full-length film + 2–3 min trailer',
      '1 vertical reel, 24–48 hrs',
    ],
    emoji: '💎',
  },
  {
    id: '03', category: 'ULTRA LUXURY', name: 'The Royal Legacy',
    tagline: 'Full-scale documentation for the grandest celebrations, shot to be handed down.',
    price: 30000,
    crew: [{ items: ['Chief Photographer', '1 Senior Photographer', '1 Traditional Photographer', '1 Senior Cinematographer', '1 Traditional Cinematographer', '1 Mobile Content Creator', '1 Drone Specialist'] }],
    deliverables: [
      '1,000 master edited photos + full album',
      '6–8 min feature + aerial drone footage',
      '20–30 min full-length film',
    ],
    featured: true,
    emoji: '👑',
  },
  {
    id: '04', category: 'PRE-WEDDING', name: 'The Luxury Pre-Wedding',
    tagline: 'A cinematic prelude, before the wedding day even begins.',
    price: 12000,
    crew: [{ items: ['1 Senior Photographer', '1 Senior Cinematographer', '1 Drone Specialist', '1 Mobile Content Creator'] }],
    deliverables: [
      '300 master edited photos',
      '2–3 min cinematic trailer',
      '2–3 short-form videos',
    ],
    emoji: '🌙',
  },
  {
    id: '05', category: 'FULL MUSLIM WEDDING', name: 'The Grand Royal Nikah',
    tagline: 'Complete 360° coverage across all three events — Gaye Holud, Nikah, and Reception.',
    price: 60000,
    crew: [
      { label: 'Event 1 — Gaye Holud', items: ['1 Senior Photographer', '1 Traditional Photographer', '1 Senior Cinematographer'] },
      { label: 'Events 2 & 3 — Nikah & Reception', items: ['Chief Photographer', '1 Senior Photographer', '1 Traditional Photographer', '2 Senior Cinematographers', '1 Drone Specialist', '1 Mobile Content Creator'] },
    ],
    deliverables: [
      '1,200+ master edited highlight images + full album',
      '3 full-length cinematic videos (one per event)',
      '3 cinematic trailers',
      '3 social media reels',
      '1 luxury photo album',
    ],
    culturalHighlights: 'KEY CULTURAL HIGHLIGHTS',
    featured: true,
    emoji: '🕌',
  },
  {
    id: '06', category: 'FULL HINDU WEDDING', name: 'The Sanatan Legacy',
    tagline: 'Comprehensive 360° coverage of two major events: Gaye Holud and Wedding Day. Capturing every single detail of your celebration.',
    price: 60000,
    crew: [
      { label: 'Event 1 — Gaye Holud', items: ['1 Senior Photographer', '1 Traditional Photographer', '1 Senior Cinematographer'] },
      { label: 'Event 2 — Wedding Day', items: ['Chief Photographer', '1 Senior Photographer (portrait specialist)', '1 Senior Cinematographer (portrait specialist)', '1 Cinematographer — Dedicated Ritual & Detail Specialist', '1 Mobile Content Creator'] },
    ],
    deliverables: [
      '1,500+ master color-graded, high-resolution images + full album',
      '2 full-length cinematic videos (one per event)',
      '2 cinematic trailers',
      '3 vertical reels for social',
      '1 premium album',
    ],
    culturalHighlights: 'KEY CULTURAL HIGHLIGHTS',
    emoji: '🪔',
  },
  {
    id: '07', category: 'FULL HINDU WEDDING', name: 'The Sanatan Grand Legacy',
    tagline: 'Comprehensive 360° coverage for your complete wedding journey: Gaye Holud, Wedding Day, and Reception.',
    price: 80000,
    crew: [
      { label: 'Event 1 — Gaye Holud', items: ['1 Senior Photographer', '1 Traditional Photographer', '1 Senior Cinematographer'] },
      { label: 'Event 2 — Wedding Day', items: ['Chief Photographer', '1 Senior Photographer (portrait specialist)', '1 Senior Cinematographer (portrait specialist)', '1 Cinematographer — Dedicated Ritual & Detail Specialist', '1 Mobile Content Creator'] },
      { label: 'Event 3 — Reception', items: ['Chief Photographer', '1 Senior Photographer (portrait specialist)', '1 Senior Cinematographer (portrait specialist)', '1 Cinematographer — Dedicated Ritual & Detail Specialist', '1 Mobile Content Creator'] },
    ],
    deliverables: [
      '1,500+ master color-graded, high-resolution images + full album',
      '3 full-length cinematic videos (one per event)',
      '3 cinematic trailers',
      '3 vertical reels for social',
      '1 premium album',
    ],
    featured: true,
    emoji: '✨',
  },
]

export const testimonials = [
  { name: 'Ayesha & Rafi', text: 'They captured our Nikah like a film. We cry every time we watch the trailer.' },
  { name: 'Priya & Arnab', text: 'Gaye Holud, wedding, reception — every ritual was documented beautifully. Truly cinematic.' },
  { name: 'Nusrat & Tanvir', text: 'The same-day reel blew our guests away. Fast, elegant, emotional.' },
]

export const socials = {
  instagram: 'https://www.instagram.com/blushingbridebd',
  facebook: 'https://www.facebook.com/blushingbridebd',
  whatsapp: 'https://wa.me/8801000000000',
  phone: '+880 1XXX-XXXXXX',
  email: 'hello@blushingbride.com',
  location: 'Cumilla, Bangladesh',
}