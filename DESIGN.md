---
name: Chris Property Signature
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#434653'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#747685'
  outline-variant: '#c4c5d6'
  surface-tint: '#2a55c9'
  primary: '#002a81'
  on-primary: '#ffffff'
  primary-container: '#003eb3'
  on-primary-container: '#a2b6ff'
  inverse-primary: '#b5c4ff'
  secondary: '#495d92'
  on-secondary: '#ffffff'
  secondary-container: '#afc2fe'
  on-secondary-container: '#3b4f83'
  tertiary: '#631700'
  on-tertiary: '#ffffff'
  tertiary-container: '#8a2501'
  on-tertiary-container: '#ffa185'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#003cad'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b2c5ff'
  on-secondary-fixed: '#001848'
  on-secondary-fixed-variant: '#314578'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb59f'
  on-tertiary-fixed: '#3a0a00'
  on-tertiary-fixed-variant: '#862300'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
  card-gap: 32px
---

## Brand & Style

The design system is rooted in a **Corporate / Modern** aesthetic, tailored for the high-end real estate market. It prioritizes clarity, trust, and professional efficiency. The visual language uses generous white space to allow property imagery to take center stage, while structured layouts convey stability.

The brand personality is authoritative yet accessible. It avoids unnecessary decorative elements, favoring functional elegance through precise alignment, soft tonal transitions, and a sophisticated color palette. The goal is to evoke a sense of "home" and "security" through a polished, high-fidelity interface.

## Colors

The palette is anchored by a **Deep Blue** primary, symbolizing intelligence and reliability. This is supported by a darker navy for high-contrast text and a spectrum of cool grays for structural elements.

- **Primary:** Used for actionable elements, brand identifiers, and emphasis.
- **Secondary (Navy):** Reserved for primary headings and hero text to ensure maximum readability.
- **Surface & Backgrounds:** The main canvas is pure white, with a subtle off-white (`#F9FAFB`) used for section backgrounds and card containers to provide gentle depth.
- **Accents:** Muted blue-grays are used for borders and secondary icons to maintain a cohesive, monochromatic professional feel.

## Typography

The typography uses **Plus Jakarta Sans** for its modern, geometric character that remains highly legible at small sizes. The hierarchy is strictly enforced to guide the user through property details and value propositions.

- **Headlines:** Use Bold (700) or SemiBold (600) weights with tighter letter spacing for a premium "editorial" look.
- **Body Text:** Uses a Regular (400) weight with a comfortable line height (1.5 - 1.6) to ensure long-form content is digestible.
- **Captions & Labels:** Utilize uppercase styling with increased letter spacing to differentiate metadata (like property features) from narrative content.

## Layout & Spacing

The system follows a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **Grid Logic:** Listing sections (properties) utilize a 3-column layout on desktop to maximize image visibility, while the "Benefits" section uses a 4-column layout for icon-based information.
- **Vertical Rhythm:** Large sections are separated by 80px or 120px of whitespace to prevent cognitive overload.
- **Internal Spacing:** Components like cards use a base-8 scale, with 24px internal padding for comfort.

## Elevation & Depth

This design system uses **Ambient Shadows** and **Tonal Layers** to establish hierarchy. Surfaces do not feel "flat" but rather "floating" slightly above the canvas.

- **Low Elevation:** Used for property cards. A soft, high-diffusion shadow (`0 10px 25px rgba(0,0,0,0.05)`) makes cards appear interactive and distinct from the background.
- **Subtle Outlines:** A very light 1px border (`#E5E7EB`) is used on input fields and secondary containers to provide definition without adding visual weight.
- **Backdrop:** Background sections toggle between white and `#F9FAFB` to create "lanes" of information as the user scrolls.

## Shapes

The shape language is a mix of geometric precision and soft approachability. 

- **Standard Elements:** Cards and input fields use a **Rounded (0.5rem)** radius to maintain a professional look.
- **Interactive Elements:** Primary and Secondary buttons use a **Pill-shaped** (full round) radius. This distinctive shape makes CTA elements immediately identifiable and provides a friendly counterpoint to the structured grid.
- **Imagery:** Hero images and listing photos utilize the standard 0.5rem radius to soften the edges of the photography.

## Components

### Buttons
Buttons are strictly pill-shaped.
- **Primary:** Solid Deep Blue background with White text.
- **Secondary:** Outline variant or light-blue tinted background with Primary color text.
- **Hover States:** A subtle darken effect or a slight upward transform (2px) to signal interactivity.

### Property Cards
Cards are the core of the listings. They feature a top-aligned image with a 0.5rem radius, followed by a metadata section. The price is always emphasized in the Primary Blue color.

### Chips / Badges
Small, rounded-pill tags used for "New on Market" or "For Sale." They use low-saturation background colors with high-contrast text to remain legible without distracting from the main property image.

### Input Fields
Clean, bordered rectangles with 0.5rem rounding. Focus states are indicated by a 2px Primary Blue border and a soft outer glow.

### Lists & FAQs
Accordion-style lists are used for FAQs, featuring thin separators and subtle chevron icons to maintain a clean, organized look.