---
name: tarot-code-audit
description: "Code quality audit checklist for Tarot reading files"
version: 1.0.0
---

# Tarot Code Audit Skill

## When to Use
When performing a code quality review of the Tarot reading feature.

## Target Files
- `.src/.main/tarot-example.html` (inline script + styles)
- `.src/.main/.support/tarot-data.js`
- `.src/.main/.support/tarot-interactions.js`

## Audit Checklist

### 1. JavaScript Quality
- [ ] No `var` declarations (use `const`/`let`)
- [ ] No undeclared/undefined variable references
- [ ] No unreachable/dead code blocks
- [ ] Proper error handling (try-catch where needed)
- [ ] No console.log left in production code
- [ ] Functions have clear single responsibilities

### 2. Bilingual Data Compliance
- [ ] All new data uses `{ vi: "...", en: "..." }` format
- [ ] `currentLang` variable properly switches content
- [ ] Card names displayed in English only (`card.name` from `DECK`)
- [ ] No `DECK_VI[x].name` used for display
- [ ] Vietnamese card names only in descriptive contexts

### 3. CARD_INTERACTIONS_MAP Quality
- [ ] All keys follow `"smallerId_largerId"` format
- [ ] No duplicate keys
- [ ] All entries have both `vi` and `en` fields
- [ ] Word count within 20-40 words per language
- [ ] No generic descriptions ("good combination", etc.)
- [ ] Trailing comma after each entry's closing `}`
- [ ] Count: `grep -c '"[0-9]*_[0-9]*":' <file>`

### 4. CSS Quality
- [ ] No inline `style=""` in HTML (except JS runtime dynamic values)
- [ ] `backdrop-filter` has `-webkit-backdrop-filter` prefix
- [ ] No `-webkit-overflow-scrolling: touch`
- [ ] Responsive breakpoints present (1024px, 768px, 480px)

### 5. Data Guards
- [ ] All external data references use `typeof X !== 'undefined'` guard
- [ ] Example: `if (typeof CARD_INTERACTIONS_MAP !== 'undefined') { ... }`

### 6. Function Chain Integrity
- [ ] `animateCards()` → `showReading()` → `generateConclusion()` chain intact
- [ ] `analyzeElements()` returns valid elemental analysis
- [ ] `findInteraction()` handles missing keys gracefully
- [ ] `determineEnergy()`, `determineConfidence()`, `determineReadingTone()` return valid values
- [ ] `generateActionSteps()` / `generateIntegratedActions()` produces actionable output
- [ ] `generateUnifiedNarrative()` produces 6-part story
- [ ] `extractDomain()` correctly detects domain from `#qInput`

## Output Format
For each checklist item, report: ✅ PASS | ⚠️ WARNING | ❌ FAIL + details

## Note
Algorithm/formula bugs found: NOTE in report for user to fix — do NOT fix.
