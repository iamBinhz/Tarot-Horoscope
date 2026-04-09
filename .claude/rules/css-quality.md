---
description: CSS and HTML quality standards
globs: ["*.html", "*.css"]
---

# CSS & HTML Quality Standards

## No Inline Styles
- NEVER add `style="..."` attributes to HTML elements
- Move all styles to `.css` file or `<style>` block
- Exception: JavaScript runtime dynamic values (e.g., `element.style.display = 'block'`)

## Vendor Prefixes (always both)
| Property | Required prefix |
|---|---|
| `backdrop-filter` | `-webkit-backdrop-filter` (Safari) |
| `user-select` | `-webkit-user-select` (Safari < 15.4) |

## Forbidden
- `-webkit-overflow-scrolling: touch` — deprecated, ignored by all modern browsers
- Inline `<style>` blocks in `natal_chart.html` — external CSS only
- Inline `<script>` blocks in `natal_chart.html` — external JS only

## Font
- Only `'EB Garamond', serif` across all pages
- Google Fonts CDN: all weights 400–800, italic + regular
