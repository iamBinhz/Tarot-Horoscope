# Tarot & Horoscope — The Celestial Sanctum

A collection of mystical, standalone web pages exploring tarot card reading and Vietnamese astrology (Tu Vi Dau So). Each page is a self-contained HTML/CSS/JS application — no build tools, frameworks, or servers required. Just open in a browser.

---

## Pages

### [The Celestial Sanctum](index.html) — Landing Page
The main hub connecting all sections of the project. Features a dark purple-and-gold celestial theme with animated starfield background, portal cards linking to each sub-page, and a custom gold cursor effect.

**Theme:** Deep cosmic purple (`#0d0618`) with gold accents (`#c9a84c`)
**Fonts:** Cinzel Decorative, EB Garamond, Playfair Display

### [The Mystic Tarot](tarot-example.html) — Tarot Card Reading
A fully interactive tarot reading experience with a complete **78-card deck** (22 Major Arcana + 56 Minor Arcana). Users shuffle the deck and receive a **three-card spread** (Past, Present, Future) with detailed interpretations and an AI-style synthesized conclusion.

**Features:**
- Full 78-card tarot deck with unique meanings for each card
- Upright and reversed card interpretations
- Animated card flip and reveal sequence with starfield canvas
- Bilingual support (English / Vietnamese) — card names stay in English
- Grain texture overlay for atmosphere

**Theme:** Dark occult void (`#050403`) with gold, ember, and teal accents
**Fonts:** Cinzel Decorative, EB Garamond, Uncial Antiqua

### [Tu Vi Dau So](natal_chart.html) — Vietnamese Purple Star Astrology
A Vietnamese astrology (Tu Vi Dau So) natal chart calculator. Enter your birth date, time, and gender to generate a traditional 12-palace chart with star placements and personality readings.

**Features:**
- Full natal chart generation based on the lunar calendar
- 14 main stars + auxiliary stars placed across 12 palaces
- Detailed personality interpretation based on star combinations
- Four Transformations (Hoa Loc, Hoa Quyen, Hoa Khoa, Hoa Ky)
- Five Elements analysis (Kim, Moc, Thuy, Hoa, Tho)
- Bilingual support (English / Vietnamese)
- Light parchment theme with brown custom cursor

**Theme:** Warm parchment (`#d6cdb8`) with gold and earth tones
**Fonts:** Cinzel Decorative, Times New Roman, Roboto

### [The Obsidian Oracle](obsidian-oracle.html) — Oracle Card Reading
An oracle reading page with a dark, atmospheric interface. Features card spreads with detailed readings, starfield animation, and a cinematic reveal experience.

**Features:**
- Oracle card spread with position-based interpretations
- Animated starfield canvas background
- Reading panel with card-by-card breakdowns
- Bilingual support (English / Vietnamese)
- Grain texture overlay

**Theme:** Dark obsidian (`#050403`) with gold, ember, and teal
**Fonts:** Cinzel Decorative, EB Garamond, Uncial Antiqua

### [The Veil Between Worlds](mystic.html) — Mystic Landing Page
An atmospheric, scroll-driven experience introducing the mystical world. Features an animated sigil with concentric rotating rings, oracle card gallery, and ritual step sections.

**Features:**
- Animated sigil with three rotating concentric rings and glowing eye
- Oracle card showcase with hover effects
- Ritual steps section with scroll-triggered reveals
- Custom cursor with hover expansion on interactive elements
- Grain overlay and layered atmospheric effects

**Theme:** Dark void (`#060504`) with gold, ember, and teal
**Fonts:** Cinzel Decorative, EB Garamond, Uncial Antiqua

---

## Shared Design Language

All pages share a cohesive mystical aesthetic with these common elements:

| Element | Details |
|---|---|
| **Custom Cursor** | Fixed-position gold dot + trailing ring, expands on hover over interactive elements |
| **Color Palette** | Gold (`#c9a84c`), ember (`#d4622a`), teal (`#1e8a8a`) on dark backgrounds |
| **Typography** | Cinzel Decorative for headings, EB Garamond for body text |
| **Backgrounds** | Animated starfield canvas, gradient overlays, grain textures |
| **Animations** | CSS keyframes for fades, floats, and glows; JS-driven particle effects |
| **Bilingual** | English/Vietnamese toggle on all pages; Vietnamese text uses Roboto/Times New Roman for diacritic support |

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — no frameworks or libraries
- **Google Fonts** via CDN
- **Canvas API** for starfield and particle animations
- **CSS Custom Properties** for consistent theming
- **No build step** — open any `.html` directly in a browser

---

## Other Files

| File | Description |
|---|---|
| `Kinh Dich va Tu Vi_ Bao Cao Chi Tiet.docx` | Research document on I Ching and Tu Vi astrology |
| `la-so-tu-vi-2026-03-18.jpg` | Sample natal chart screenshot |

---

## Quick Start

```
git clone https://github.com/iamBinhz/Tarot-Horoscope.git
```

Open any `.html` file in your browser. No installation needed.
