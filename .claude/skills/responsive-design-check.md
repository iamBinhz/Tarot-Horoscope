---
name: responsive-design-check
description: "Verify responsive design across all breakpoints"
version: 1.0.0
---

# Responsive Design Check Skill

## When to Use
After modifying HTML or CSS that affects layout.

## Breakpoints to Check
| Breakpoint | Width | Device |
|---|---|---|
| Desktop | 1200px | Standard monitors |
| Tablet | ≤1024px | iPad |
| Mobile | ≤768px | iPhone Plus |
| Small Mobile | ≤480px | iPhone SE |
| Landscape Mobile | height < width, max-width 768px | iPhone landscape |

## Checks Per Breakpoint
1. Navigation: hamburger menu works, click-outside-to-close
2. Cards/grid: single-column on mobile, proper spacing
3. Form inputs: touch-friendly (min 44px tap targets)
4. Text: readable without zooming
5. Badges: stacked vertically on mobile
6. Custom cursor: hidden on touch devices (`@media (hover: none)`)

## Touch Device Rules
- `@media (hover: none), (pointer: coarse)` — hide custom cursor
- `cursor: auto` on all interactive elements
- No hover-dependent interactions

## Files to Check
- `tarot-example.html` — inline `<style>` media queries
- `natal_chart.html` → `.support/natal_chart.css` — external media queries
- `index.html` — inline `<style>` media queries
