---
name: horoscope-code-audit
description: "Code quality audit checklist for Tử Vi / Kinh Dịch files"
version: 1.0.0
---

# Horoscope Code Audit Skill

## When to Use
When performing a code quality review of the Tử Vi / Kinh Dịch feature.

## Target Files
- `.src/.main/natal_chart.html` (no inline style/script allowed)
- `.src/.main/.support/natal_chart.js` (main logic)
- `.src/.main/.support/natal_chart.css` (styles)
- `.src/.main/.support/tuvi-data.js` (star and palace data)
- `.src/.main/.support/lunar-data.js` (lunar calendar data)

## Audit Checklist

### 1. JavaScript Quality
- [ ] No `var` declarations (use `const`/`let`)
- [ ] No undeclared/undefined variable references
- [ ] No unreachable/dead code blocks
- [ ] Proper error handling (try-catch where needed)
- [ ] No console.log left in production code (except debug logs in generateChart)
- [ ] Functions have clear single responsibilities
- [ ] No duplicate `const` declarations (historical bug)

### 2. Script Load Order
- [ ] `lunar-data.js` loads BEFORE `tuvi-data.js`
- [ ] `tuvi-data.js` loads BEFORE `natal_chart.js`
- [ ] All data available when `natal_chart.js` initializes

### 3. External File Convention
- [ ] `natal_chart.html` has NO inline `<style>` blocks
- [ ] `natal_chart.html` has NO inline `<script>` blocks (except src= references)
- [ ] All CSS in `natal_chart.css`
- [ ] All JS in `natal_chart.js`

### 4. Formula Verification (Critical Math)
NOTE: If formulas are wrong, note in report for user to fix.
- [ ] Mệnh Cung: `(2 + month - 1 - hour + 24) % 12`
- [ ] Thân Cung: `(2 + month - 1 + hour) % 12`
- [ ] Tuần: `((chiIdx - canIdx) % 12 + 12) % 12` → positions +10, +11
- [ ] Triệt: `(8 - 2*(canIdx % 5) + 12) % 12` → positions +0, +1
- [ ] Cục: `deriveCuc(canIdx, menhBranchIdx)` matches Nạp Âm table

### 5. CSS Quality
- [ ] No inline `style=""` in HTML
- [ ] `backdrop-filter` has `-webkit-backdrop-filter` prefix
- [ ] No `-webkit-overflow-scrolling: touch`
- [ ] Responsive breakpoints present
- [ ] Touch-friendly targets (min 44px)

### 6. Data Guards
- [ ] External data references use `typeof X !== 'undefined'` guard

### 7. Known Historical Bugs (Regression Check)
- [ ] Mệnh/Thân formulas NOT swapped
- [ ] Tuần uses chiIdx correctly
- [ ] Triệt formula matches specification
- [ ] AUX_BY_MONTH has no off-by-one error
- [ ] CACH_CUC_PATTERNS receives correct arguments
- [ ] No duplicate const declarations in tuvi-data.js
- [ ] Cục derivation function exists and is callable

## Output Format
For each checklist item, report: ✅ PASS | ⚠️ WARNING | ❌ FAIL + details

## Note
Algorithm/formula bugs found: NOTE in report for user to fix — do NOT fix.
