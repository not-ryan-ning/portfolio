# Visual Reference Guide

## Grid System Visualization

This document shows how the Vercel-style grid system creates structure throughout the portfolio.

### Grid Line Anatomy

```
┌─────────────────────────────────────────────┐
│  12% opacity line (--grid-color)            │ ← Visible but subtle
├─────────────────────────────────────────────┤
│                                             │
│  Content block with generous padding        │
│                                             │
├─────────────────────────────────────────────┤
│  20% opacity on hover (--grid-color-hover)  │ ← Interactive feedback
└─────────────────────────────────────────────┘
```

### Hero Section Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   DESIGNER × ENGINEER                    ← Label (mono)     │
│                                                              │
│   Building products that                 ← Hero (48-64px)   │
│   feel calm, intentional,                                   │
│   and human.                                                │
│                                                              │
│   Currently designing systems at scale.  ← Subtitle (18px)  │
│   Previously at startups building 0→1                       │
│   products.                                                 │
│                                                              │
│   View work →    Get in touch            ← CTAs             │
│                                                              │
├──────────────────────────────────────────────────────────────┤ ← Grid line
│                                                              │
```

### Project Card Layout

```
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   2024                                        ↗              │
│                                              (hover arrow)   │
│   Design System Infrastructure                              │
│                                                              │
│   Built a cohesive component library serving 50+            │
│   engineers. Reduced design-to-dev handoff time by 60%.     │
│                                                              │
│   ┌─────────┐  ┌────────────┐  ┌───────┐                  │
│   │ React   │  │ TypeScript │  │ Figma │  ← Tags           │
│   └─────────┘  └────────────┘  └───────┘                  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
```

### Contact Card

```
┌──────────────────────────┐  ┌──────────────────────────┐
│ ┌────────────────────────┤  │ ┌────────────────────────┤
│ │ EMAIL                  │  │ │ LINKEDIN               │
│ │                        │  │ │                        │
│ │ hello@example.com      │  │ │ linkedin.com/in/...    │
│ │                        │  │ │                        │
│ └────────────────────────┘  │ └────────────────────────┘
└──────────────────────────┘  └──────────────────────────┘
   ↑ Hover: border 12% → 20%
```

---

## Typography Hierarchy Example

```
Hero Headline
48-64px, Medium, -0.02em tracking
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Section Heading
32-48px, Medium, -0.01em tracking
─────────────────────────────────────

Card Title
24px, Medium, -0.01em tracking
─────────────────────────────

Body Large (Intro)
18px, Regular, 1.6 line-height
Normal tracking
─────────────────

Body Text
16px, Regular, 1.6 line-height
Normal tracking
─────────────

LABEL TEXT
12px, Mono, 0.02em tracking
Uppercase, Muted color
```

---

## Color Usage

### Text Hierarchy

```css
/* Primary content */
color: #0a0a0a (foreground) ━━━━━━━━━━━━━━ Darkest

/* Secondary content */  
color: #737373 (muted)      ────────────── Gray

/* Background */
background: #fafafa         ░░░░░░░░░░░░░░ Lightest
```

### Grid Lines

```
Resting state:    rgba(0, 0, 0, 0.12)  ─────  Subtle
Hover state:      rgba(0, 0, 0, 0.20)  ━━━━━  More visible
```

---

## Spacing Scale Examples

```
Section Spacing (64-128px)
┌─────────────────────────────────────┐
│                                     │
│                                     │
│         Generous breathing          │
│         room between                │
│         major sections              │
│                                     │
│                                     │
└─────────────────────────────────────┘


Card Padding (48px vertical)
┌─────────────────────────────────────┐
│ ↕                                   │
│   Content has room to breathe       │
│ ↕                                   │
└─────────────────────────────────────┘


Container Padding (24-48px)
↔    ┌─────────────────────────┐    ↔
     │   Content stays within   │
     │   comfortable margins    │
     └─────────────────────────┘
```

---

## Mobile vs Desktop

### Mobile (< 640px)

```
┌────────────────┐  24px padding
│                │
│  Hero 40px     │  Single column
│                │
│  Body 16px     │  Fluid sizing
│                │
└────────────────┘
```

### Desktop (> 1024px)

```
        48px padding
┌──────────────────────────────────────┐
│                                      │
│  Hero 64px                           │
│                                      │
│  Body 16px                           │
│                                      │
│  ┌─────────────┐  ┌─────────────┐  │  Two columns
│  │   About     │  │    Now      │  │  in About
│  └─────────────┘  └─────────────┘  │
│                                      │
└──────────────────────────────────────┘
       Max 1200px container
```

---

## Hover States

### Project Card Interaction

```
Resting:
├──────────────────────────────────────┤
│ Project Title                        │
│ Description...                       │
└──────────────────────────────────────┘
    ↑ border: 12% opacity


Hover:
├━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┤
│   Project Title                   ↗  │  ← Arrow appears
│   Description...                     │  ← Shifts right 16px
└──────────────────────────────────────┘
    ↑ border: 20% opacity
```

### Link Hover

```
Resting:    View work →     (foreground color)
Hover:      View work →     (muted color)
            ─────────       (200ms transition)
```

---

## Implementation Code Examples

### Basic Section

```tsx
<section className="container-custom section-spacing">
  <div className="grid-border-top grid-border-bottom py-12">
    {/* Content */}
  </div>
</section>
```

### Interactive Card

```tsx
<div className="grid-card p-6 hover:border-border-hover transition-smooth">
  <div className="label-mono mb-2">Label</div>
  <div className="text-body font-medium">Content</div>
</div>
```

### Typography Pattern

```tsx
<div className="label-mono mb-3">SECTION</div>
<h2 className="text-display font-medium mb-6">Heading</h2>
<p className="text-body text-muted">Body text here</p>
```

---

## What Makes This "Vercel-Style"

1. **Visible Grid Lines**: Not hidden, 12-15% opacity
2. **Editorial Feel**: Structured like a publication
3. **Minimal Palette**: Near-white, near-black, one gray
4. **Sharp Corners**: No border-radius (or minimal)
5. **Typography First**: Large, well-spaced type
6. **Subtle Interaction**: Border changes, not shadows
7. **Generous Spacing**: Breathing room everywhere
8. **No Decoration**: Every line serves structure

---

## Testing Checklist

- [ ] Hero text is readable at all sizes (40-64px)
- [ ] Grid lines visible but not dominant (12% opacity)
- [ ] Hover states work (borders darken to 20%)
- [ ] Touch targets min 44x44px
- [ ] Focus rings visible on tab
- [ ] Respects prefers-reduced-motion
- [ ] Works without JavaScript
- [ ] Text contrast meets WCAG AA (4.5:1 minimum)
- [ ] Layout doesn't break at any viewport size
- [ ] Project cards feel clickable

---

**Tip**: Open the site and squint. The grid lines should barely be visible but create a sense of structure. If they're too prominent, reduce opacity.


