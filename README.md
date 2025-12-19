# Ryan Ning — Portfolio

A minimal, clean portfolio website built with Next.js 14, featuring Apple-like typography polish and Vercel-style grid aesthetics.

## ✨ Features

- **Minimal Design**: Clean, calm, premium aesthetic with generous whitespace
- **Vercel-Style Grid**: Visible 1px hairline borders at 12% opacity for structure
- **Apple-Quality Typography**: Inter (variable) + IBM Plex Mono with refined scale
- **Fully Responsive**: Mobile-first with fluid sizing (no hard breakpoints)
- **Accessible**: WCAG AAA contrast, keyboard navigation, focus states
- **Performance**: No unnecessary JS, static export ready, perfect Lighthouse scores
- **Dark Mode Ready**: Token-based system (light mode implemented)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized build
npm run build

# Serve production build locally
npm start
```

### Static Export (for GitHub Pages, Netlify, etc.)

The site is already configured for static export:

```bash
npm run build
# Output will be in the /out directory
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system + grid CSS
│   │   ├── layout.tsx           # Root layout with fonts
│   │   └── page.tsx             # Home page
│   └── components/
│       ├── Hero.tsx             # Minimal hero section
│       ├── Projects.tsx         # Featured projects list
│       ├── About.tsx            # About + Now sections
│       └── Contact.tsx          # Contact links + footer
├── public/
│   └── fonts/
│       └── IBMPlexMono-Medium.ttf
├── tailwind.config.ts           # Custom design tokens
└── DESIGN_SYSTEM.md            # Complete design documentation
```

## 🎨 Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete documentation including:

- Color tokens
- Typography scale  
- Spacing system
- Grid implementation
- Component patterns
- Accessibility guidelines
- What was intentionally removed

### Quick Token Reference

```css
/* Colors */
--background: #fafafa
--foreground: #0a0a0a
--muted: #737373
--border: rgba(0, 0, 0, 0.12)

/* Typography */
text-hero      /* 40-64px fluid */
text-display   /* 32-48px fluid */
text-title     /* 24px */
text-body-lg   /* 18px */
text-body      /* 16px */

/* Spacing */
section-spacing   /* 64-128px between sections */
container-padding /* 24-48px container edges */

/* Grid */
grid-border-top      /* Top border */
grid-border-bottom   /* Bottom border */
grid-card           /* Interactive card with border */
```

## 🛠️ Customization

### Update Content

1. **Hero**: Edit `src/components/Hero.tsx` - change name, headline, links
2. **Projects**: Edit `projects` array in `src/components/Projects.tsx`
3. **About**: Edit `src/components/About.tsx` - bio and "now" list
4. **Contact**: Edit `links` array in `src/components/Contact.tsx`

### Adjust Design Tokens

Edit `tailwind.config.ts` to customize:
- Colors (background, foreground, muted, border)
- Typography scale
- Spacing values

Edit `src/app/globals.css` to adjust:
- Grid line opacity
- Transition durations
- Focus ring styles

### Add Dark Mode

Uncomment and customize dark mode section in `globals.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #fafafa;
    --muted: #a3a3a3;
    --border: rgba(255,255,255,0.12);
  }
}
```

Update Tailwind config to use CSS variables for colors.

## 📱 Responsive Behavior

- **Mobile (< 640px)**: Single column, hero ~40px
- **Tablet (640-1024px)**: Maintained single column, hero ~48px  
- **Desktop (1024px+)**: Two-column About section, hero ~64px
- **Container**: Max 1200px with fluid padding (24-48px)

All typography uses `clamp()` for fluid scaling without breakpoints.

## ♿ Accessibility

- Semantic HTML throughout
- Focus-visible rings on all interactive elements
- WCAG AAA contrast (18.5:1) for main text
- WCAG AA contrast (4.8:1) for muted text
- Keyboard navigation support
- `prefers-reduced-motion` support
- Alt text ready (add to images when you add them)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Deploy (automatic configuration)

### Netlify

1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

### GitHub Pages

```bash
npm run build
# Push /out directory to gh-pages branch
```

## 🎯 Design Philosophy

This portfolio follows three core principles:

1. **Subtract Before You Add**: Every element must justify its existence
2. **Content First**: Design serves content, not the reverse
3. **Calm Technology**: No attention-grabbing, just clarity

Inspired by:
- Apple's product pages (typography, spacing)
- Vercel's website (grid structure, restraint)
- Dieter Rams' design principles (less but better)

## 📝 To-Do

- [ ] Replace filler text with your actual content
- [ ] Add real project links and images (optional)
- [ ] Update contact links with your info
- [ ] Add favicon (optional)
- [ ] Add OG image for social sharing (optional)
- [ ] Consider adding case study detail pages

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 🙏 Credits

- **Fonts**: [Inter](https://rsms.me/inter/) by Rasmus Andersson, [IBM Plex Mono](https://github.com/IBM/plex)
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

Built with ☕ by Ryan Ning • 2025
