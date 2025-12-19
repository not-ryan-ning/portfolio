# Portfolio Design System

## Philosophy

This portfolio follows a **"calm product design"** approach inspired by Apple's typography polish and Vercel's editorial grid structure. The goal is to create a professional, scannable experience that feels premium without being busy.

---

## Design Tokens

### Colors (Light Mode)

```css
--background: #fafafa       /* Near-white, softer than pure white */
--foreground: #0a0a0a       /* Near-black, better for eyes than pure black */
--muted: #737373            /* Gray text, used for secondary content */
--border: rgba(0,0,0,0.12)  /* 12% opacity - visible grid lines */
--border-hover: rgba(0,0,0,0.20) /* 20% opacity - hover state */
--accent: #0a0a0a           /* Same as foreground, minimal palette */
```

**Rationale**: Only 3 core colors (bg, fg, muted) keeps the palette restrained. Border opacity at 12% creates visible-but-subtle grid structure.

---

### Typography Scale

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `hero` | 40-64px (fluid) | 1.1 | -0.02em | Hero headline only |
| `display` | 32-48px (fluid) | 1.2 | -0.01em | Section headings |
| `title` | 24px | 1.3 | -0.01em | Card titles |
| `body-lg` | 18px | 1.6 | 0 | Intro paragraphs |
| `body` | 16px | 1.6 | 0 | Body text |
| `label` | 14px | 1.4 | 0 | UI labels |
| `caption` | 12px | 1.4 | 0.02em | Uppercase labels |

**Fonts**:
- **Primary**: Inter (variable font) — Apple uses SF Pro, we use Inter as open-source alternative
- **Mono**: IBM Plex Mono (medium weight) — for labels/metadata

**Key Decisions**:
- Fluid sizing with `clamp()` for responsive without breakpoints
- Generous line-height (1.6) for readability
- Negative letter-spacing on large text for optical balance
- Positive letter-spacing on small uppercase text for legibility

---

### Spacing System (8pt Grid)

```css
--section-spacing: clamp(4rem, 12vw, 8rem)  /* 64-128px between sections */
--container-padding: clamp(1.5rem, 5vw, 3rem) /* 24-48px container edges */
```

**Base unit**: 8px (Tailwind's default)

**Common values**:
- 4px (0.5rem): Tight spacing, tags
- 8px (1rem): Element padding
- 12px (1.5rem): Small gaps
- 16px (2rem): Standard gaps
- 24px (3rem): Section padding
- 32-48px (4-6rem): Component spacing
- 64-128px (8-16rem): Section spacing

---

### Grid System

#### Grid Variables

```css
--grid-color: rgba(0, 0, 0, 0.12)
--grid-color-hover: rgba(0, 0, 0, 0.20)
--grid-size: 1px
```

#### Grid Classes

| Class | Purpose | Example |
|-------|---------|---------|
| `.grid-border-top` | Top border only | Section dividers |
| `.grid-border-bottom` | Bottom border | Section dividers |
| `.grid-border-x` | Left + right | Vertical containers |
| `.grid-border-all` | All sides | Cards, tags |
| `.grid-card` | Interactive card | Project cards, contact links |

#### Grid Philosophy

- **Vercel approach**: Lines define structure, not decoration
- **Visibility**: 12% opacity means lines are present but don't dominate
- **Hover**: 20% opacity on hover adds subtle interactivity
- **Consistency**: 1px lines everywhere, no thick borders

---

## Component Patterns

### Hero Section

**Structure**:
```
Label (mono, uppercase, muted)
↓
Headline (hero size, 1-2 lines max)
↓
Subtitle (body-lg, muted)
↓
CTAs (minimal links)
```

**Guidelines**:
- Hero text should be 1 core value proposition
- Max 2 lines to maintain impact
- Generous bottom border creates breathing room
- No background, no shadow, no decoration

---

### Project Cards

**Layout**:
```
Year (label, mono) ———————————— Arrow (hover)
Title (large, bold)
Description (muted)
Tags (bordered, mono labels)
```

**Interaction**:
- Entire card is clickable
- Hover: slight left padding shift + arrow appears
- Border becomes more visible on hover
- Smooth 200ms transition

**Spacing**:
- 48px (12) vertical padding per card
- Border between cards (not around)
- Tags have 1px border, no background

---

### Section Headers

**Pattern**:
```
LABEL (mono, uppercase)
Large Heading (display size)
```

**Usage**: Introduce each major section (Projects, About, Contact)

---

## Responsive Behavior

### Breakpoints

Using Tailwind defaults:
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px

### Mobile Adjustments

**Typography**: Fluid sizing handles most cases automatically
- Hero: 40px → 64px
- Display: 32px → 48px

**Layout**:
- About section: Stacks 1 column on mobile, 2 columns on `lg:`
- Contact cards: 1 column → 2 columns at `sm:`
- Container padding: 24px → 48px

**Grid**:
- Same 1px borders on mobile (not reduced)
- Spacing scales down via fluid values

---

## Accessibility

### Focus States

All interactive elements have visible focus rings:
```css
*:focus-visible {
  outline: 2px solid foreground;
  outline-offset: 4px;
}
```

### Keyboard Navigation

- All links and buttons are keyboard accessible
- Semantic HTML (`<section>`, `<article>`, `<nav>`)
- Skip to content link (can be added)

### Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Contrast

- Foreground on background: 18.5:1 (AAA)
- Muted text on background: 4.8:1 (AA Large)
- Borders: Decorative, not relied upon for meaning

---

## What Was Removed

Compared to typical portfolios, this system **eliminates**:

1. ❌ Shadows (no drop shadows, no elevation)
2. ❌ Gradients (solid colors only)
3. ❌ Colored backgrounds (neutral palette)
4. ❌ Heavy animations (subtle transitions only)
5. ❌ Decorative icons (functional only)
6. ❌ Round corners (sharp or minimal radius)
7. ❌ Background patterns (clean backgrounds)
8. ❌ Multiple font weights (mostly medium)
9. ❌ Complex layouts (simple vertical flow)
10. ❌ Floating elements (everything in flow)

---

## Implementation Details

### Grid System Approach

**Chosen method**: CSS border utilities with Tailwind

**Why not background gradients?**
- Harder to control on individual elements
- Creates visual noise when stacked
- Less performant

**Why not pseudo-elements?**
- More complex to maintain
- Adds extra DOM/rendering work

**Why CSS borders?**
- Simple, performant
- Easy to customize per-element
- Native browser rendering
- Works with existing Tailwind workflow

### Performance

- **No JavaScript** for UI (only Next.js framework)
- **Variable fonts** (Inter) reduces font files
- **No external dependencies** for styling
- **CSS-only animations** with reduced-motion support
- **Static export** possible with `output: 'export'`

### Lighthouse Targets

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Usage Examples

### Adding a New Section

```tsx
<section className="container-custom section-spacing">
  <div className="grid-border-top grid-border-bottom py-12">
    <div className="label-mono mb-3">Section Label</div>
    <h2 className="text-display font-medium">Section Title</h2>
    {/* Content */}
  </div>
</section>
```

### Creating a Grid Card

```tsx
<div className="grid-card p-6 hover:border-border-hover transition-smooth">
  <div className="label-mono mb-2">Label</div>
  <div className="text-body font-medium">Content</div>
</div>
```

### Typography Hierarchy

```tsx
{/* Page title */}
<h1 className="text-hero font-medium tracking-tight">

{/* Section heading */}
<h2 className="text-display font-medium">

{/* Card title */}
<h3 className="text-title font-medium">

{/* Body text */}
<p className="text-body text-muted">

{/* Label */}
<span className="label-mono">
```

---

## Future Considerations

### Dark Mode

To add dark mode, update tokens:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #fafafa;
    --muted: #a3a3a3;
    --border: rgba(255,255,255,0.12);
    --border-hover: rgba(255,255,255,0.20);
  }
}
```

### Additional Sections

Pattern supports:
- Writing/Blog list
- Case studies (detail pages)
- Photography grid
- Resume/CV section

### Animations

If adding motion:
- Keep under 200ms duration
- Use `cubic-bezier(0.4, 0, 0.2, 1)` easing
- Respect `prefers-reduced-motion`
- Only animate position/opacity, avoid layout shifts

---

## Quick Reference

**Container**: `container-custom`  
**Section spacing**: `section-spacing`  
**Grid border**: `grid-border-{top|bottom|x|all}`  
**Grid card**: `grid-card`  
**Label style**: `label-mono`  
**Smooth transition**: `transition-smooth`

---

**Last updated**: December 2025  
**Version**: 2.0


