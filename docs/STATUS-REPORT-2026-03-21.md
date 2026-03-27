# Tarot & Tử Vi System — Status Report
> **Last Updated:** 2026-03-27
> **Plan:** `docs/superpowers/plans/2026-03-20-tarot-tuvi-improvements.md`
> **Total lines of code (5 files):** 6,631

---

## I. FILE INVENTORY

| File | Lines | Status | Role |
|------|-------|--------|------|
| `lunar-data.js` | 323 | **DONE** | Ho Ngoc Duc lunar calendar (1800–2199), `gregorianToLunar()`, `formatLunarDate()` |
| `tuvi-data.js` | 1,837 | **DONE** | 25 data tables + functions: star positions, Tứ Hóa, Cách Cục (33 patterns), 168 palace×star meanings, Đại Hạn, Tổng Luận templates |
| `tarot-data.js` | 1,335 | **DONE** | 16 data structures: reversed meanings (78), Major position interp (22×3), Minor position interp (56×3), interactions (32), elements, energy, confidence |
| `natal_chart.html` | 1,717 | **DONE** | Full Tử Vi chart: deterministic algo, 12-palace interp, Tổng Luận, Cách Cục recognition, borrowed star logic |
| `tarot-example.html` | 1,419 | **DONE** | Tarot reader: reversed mechanic, question model UI, synthesis engine, bilingual |

---

## II. COMPLETED TASKS

### Phase 1: Tử Vi Data Infrastructure

#### Task 1 — lunar-data.js ✅
- Ho Ngoc Duc algorithm (replaced old LUNAR_INFO table)
- Year range: 1800–2199 via TK19/TK20/TK21/TK22 tables
- `gregorianToLunar()`, `formatLunarDate()` (VI/EN), helpers
- Verified: Oct 1 2005→28/08, Feb 9 2005 (Tết)→1/1, Feb 10 2024 (Tết)→1/1

#### Task 2 — tuvi-data.js core tables ✅
- `TU_VI_POS`: Cục 2–6 × days 1–30 lookup
- `deriveMainStarPositions()`: 14 main stars derived from Tử Vi
- Auxiliary stars: `AUX_BY_HOUR`, `AUX_BY_MONTH`, `AUX_BY_CAN`, `AUX_BY_CHI`
- `getHoaTinhPos()`, `getLinhTinhPos()`: special computation
- `TU_HOA_TABLE`: 10 Can → 4 stars each (deterministic)
- `STAR_BRIGHTNESS_TABLE`: 14 stars × 12 branches
- `getTrangSinhCycle()`: element + Can + gender → 12 phases
- `SINH_CYCLE`, `KHAC_CYCLE`, `BRANCH_ELEMENT`, `NGU_HANH_EFFECTS`

#### Task 3 — tuvi-data.js interpretation data ✅
- `CACH_CUC_PATTERNS`: 33 patterns with condition functions (bilingual)
- `PALACE_STAR_MEANINGS`: 12 palaces × 14 stars = 168 entries (VI+EN)
- `DAI_HAN_MEANINGS`: 12 palace Đại Hạn templates (VI+EN)
- `TONG_LUAN_TEMPLATES`: synthesis templates
- `EMPTY_PALACE_MEANINGS`: 12 palaces (VI+EN)

### Phase 2: Tử Vi Algorithm

#### Task 4 — generateChart() ✅
- Step 1: Lunar conversion (auto or manual input)
- Step 2: Nạp Âm & Cục via `deriveCuc(canIdx, menhBranchIdx)`
- Step 3: Mệnh `(2 + month - 1 - hour + 24) % 12` / Thân `(2 + month - 1 + hour) % 12` — formulas correct
- Steps 4–9: Palace grid, Tử Vi placement, 14 main stars, auxiliaries, Tràng Sinh, Tứ Hóa
- Step 10: Tuần `((chiIdx-canIdx)%12+12)%12` → +10,+11 / Triệt `(8 - 2*(canIdx%5) + 12) % 12` → +1
- Step 11: Đại Hạn with starting age from Cục, direction from Dương/Âm + gender

#### Task 5 — Manual Lunar Input ✅
- Checkbox toggle + 3 fields, `toggleManualLunar()`, `updateLunarPreview()`

### Phase 3: Tử Vi Interpretation

#### Task 6 — Full 12-Palace Interpretation ✅
- `generateInterpretations()` uses `PALACE_STAR_MEANINGS`, `EMPTY_PALACE_MEANINGS`
- Ngũ Hành sinh/khắc via `NGU_HANH_EFFECTS`
- Tứ Hóa annotations per palace
- Đại Hạn interpretation per palace
- Empty Mệnh borrows from Thiên Di (opposite palace, ~40% reduced effect)
- Tuần/Triệt age-weighted display (Triệt weakens >30, Tuần strengthens >30)

#### Task 7 — Tổng Luận + Cách Cục ✅
- `generateTongLuan()` with `CACH_CUC_PATTERNS` (33 patterns, argument passing fixed)
- Tứ Hóa summary, current Đại Hạn identification, final advice

#### Task 8 — generateGuidance() ✅
- Deterministic: chart data (Mệnh stars, Đại Hạn, Tuần/Triệt, Hóa Kỵ) → guidance
- Seeded PRNG for remaining slots (chart+date hash) — reproducible daily

### Phase 4: Tarot Data Infrastructure

#### Task 9 — tarot-data.js ✅
- `REVERSED_MEANINGS`: 78 cards (VI+EN)
- `MAJOR_POSITION_INTERP`: 22 Major × 3 positions (VI+EN)
- `POSITION_FRAMES`: 3 positions with prefix templates (fallback for Minor)
- `SUIT_ELEMENT`, `ELEMENT_NAMES`, `ELEMENT_DOMINANT`, `ELEMENT_MISSING`
- `CARD_INTERACTIONS`: 32 patterns + `ELEMENT_TRANSITIONS` fallback
- `QUESTION_MODELS` (4 types), `QUESTION_MODEL_OPENINGS`
- `ENERGY_TYPES` (5), `CONFIDENCE_LEVELS` (3), `ARCANA_RATIO_TEXT`

### Phase 5: Tarot Algorithm & UI

#### Task 10 — Reversed Mechanic + Question Model UI ✅
- 50% reversal probability, `.reversed` CSS class (180° rotation), badge overlay
- Question model button group: general / problem / solution / crossroads
- `selectQuestionModel()` with active state toggle

#### Task 11 — Synthesis Engine ✅
- `showReading()`: uses `MAJOR_POSITION_INTERP` for Major, `MINOR_POSITION_INTERP` for Minor, `POSITION_FRAMES` as fallback, shows reversed meanings
- `generateConclusion()`: Opening → Thread → Elements → Path → Energy/Confidence badges
- `analyzeElements()`, `findInteraction()`, `determineEnergy()`, `determineConfidence()`
- `generateActionSteps()`: 2 steps (future card + question model based)

### Phase 6: Validation & Bug Fixes

#### Task 12 — End-to-End Validation ✅
- 5 critical bugs found and fixed (see Section IV)
- 3 test cases validated in browser with deterministic Cục and Tứ Hóa
- `tuvi-data.js` loading bug fixed (duplicate const declarations removed)
- Translation overhaul: all data standardized to `{vi: ..., en: ...}` format

### Phase 9: Tarot Analysis Quality (Partial)

#### Task 14 — Viết lại Card Meanings ✅
- 78 × 2 languages rewritten: 3–5 sentences per card
- Structure: Tình huống → Ý nghĩa cốt lõi → Lời khuyên cụ thể
- Verified: meanings are specific and actionable (not generic fortune-cookie style)

#### Task 15 — Minor Arcana Position Interpretation ✅
- `MINOR_POSITION_INTERP`: 56 cards × 3 positions × 2 languages = 336 entries
- `showReading()` now checks `MINOR_POSITION_INTERP` with typeof guard
- `POSITION_FRAMES` prefix kept as fallback only

---

## III. INCOMPLETE TASKS (Priority: High → Low)

### 🔴 HIGH PRIORITY

#### Task 16 — Nâng cấp Reading Synthesis `generateConclusion()` — PLANNED
**Why:** "Sợi Chỉ Đỏ" (Thread) section only has 32 interaction patterns → many 3-card combos fall through to generic element fallback. No true narrative arc connecting Past→Present→Future as a story.
**Scope:** `tarot-data.js` + `tarot-example.html`
**Work needed:**
- Add ~40 more `CARD_INTERACTIONS` patterns (Court↔Court, Ace↔Ten, same-number-across-suits, Major↔Minor specifics)
- Add element flow analysis (fire→water = passion cooling) and element conflict detection
- Integrate reversed card context into Thread narrative (currently reversed info is separate)
- Add "The Story" section that reads as continuous narrative across 3 positions

#### Task 17 — Action Steps cụ thể theo context — PLANNED
**Why:** Currently only 2 generic steps. Not linked to specific cards drawn.
**Scope:** `tarot-data.js` + `tarot-example.html`
**Work needed:**
- Increase to 3–4 steps: Past lesson → Present action → Future preparation → Model-specific advice
- Create `CARD_ACTION_TEMPLATES` (78 cards × 3 roles: past_lesson, present_action, future_prep)
- Each step references the drawn card by name

#### Task 18 — Reflection Questions — PLANNED
**Why:** Readings are passive — user reads but doesn't engage. Reflection questions help users connect the reading to their life.
**Scope:** `tarot-data.js` + `tarot-example.html`
**Work needed:**
- Add `REFLECTION_QUESTIONS`: 78 cards × 2–3 questions × 2 languages
- Display below each card's reading section
- Example: *"Bạn đang cố kiểm soát điều gì mà thực ra cần buông bỏ?"*

#### Task 19 — Energy & Confidence Badge Improvements — PLANNED
**Why:** Current badges are too terse (single word/icon). No explanation of why.
**Scope:** `tarot-data.js` + `tarot-example.html`
**Work needed:**
- Add descriptions to each energy type (not just icon+label)
- Confidence level shows reasoning (e.g., "High — cards aligned, no reversals")
- Add "Reading Tone" badge: Optimistic / Cautionary / Transformative / Contemplative

### 🟡 MEDIUM PRIORITY

#### Task 13 — Mobile & Tablet Responsive Overhaul — PLANNED
**Why:** Both `natal_chart.html` and `tarot-example.html` are desktop-only. Chart grid and tarot layout break on small screens.
**Scope:** CSS media queries in both HTML files
**Work needed:**
- Media queries for mobile (<768px), tablet (768–1024px), desktop (>1024px)
- Refactor `chart-grid` (12-palace grid) for small screens: scrollable or stacked
- Responsive nav, footer, card display
- Touch-friendly interactive elements

#### Bilingual Leak Check — PENDING VERIFICATION
**Why:** Card names (e.g., "The Tower") appear in English even in Vietnamese mode. Need full crawl.
**Scope:** `tarot-example.html` + `natal_chart.html`
**Known issue:** `tarot-example.html` line 1196–1201 uses `${futureCard.name}` (English) inside Vietnamese sentences
**Note:** `natal_chart.html` appears clean — all text respects `currentLang`

#### Script Loading Error Handling — PLANNED
**Why:** Under `file://` protocol, external .js files can silently fail to load. All features fall back to simplified algorithms with no user warning.
**Scope:** `tarot-example.html` + `natal_chart.html`
**Work needed:**
- Add `console.warn` or UI banner if `tuvi-data.js`, `tarot-data.js`, or `lunar-data.js` fail to load
- Check: `if (typeof TU_VI_POS === 'undefined') showWarning('tuvi-data.js not loaded')`

### 🟢 LOW PRIORITY

#### User Account System — PLANNED
**Why:** No persistence. Readings are lost on page close.
**Scope:** New page + modifications to `index.html`, `tarot-example.html`, `natal_chart.html`
**Work needed:**
- Centralized Login/Signup page
- Session persistence (LocalStorage or server-side)
- "Login/Signup" button in top-right of all pages
- CTA: suggest login after generating a reading to save history

#### Master Plan Checkbox Sync — HOUSEKEEPING
**Why:** All 102 checkboxes in `docs/superpowers/plans/2026-03-20-tarot-tuvi-improvements.md` are still `[ ]` despite ~95% completion.
**Work needed:** Update checkboxes to reflect actual completion status.

---

## IV. BUGS FOUND & FIXED (Historical)

| # | Bug | Severity | File | Fix |
|---|-----|----------|------|-----|
| 1 | Mệnh/Thân formulas swapped | CRITICAL | natal_chart.html | Mệnh backward by hour, Thân forward |
| 2 | Tuần Không formula wrong (ignored chiIdx) | CRITICAL | natal_chart.html | `((chiIdx-canIdx)%12+12)%12` → +10, +11 |
| 3 | Triệt Lộ formula wrong | CRITICAL | natal_chart.html | `(8 - 2*(canIdx%5) + 12) % 12` → +1 |
| 4 | AUX_BY_MONTH off-by-one | MEDIUM | natal_chart.html | `positions[lunarMonth - 1]` |
| 5 | CACH_CUC_PATTERNS argument mismatch | HIGH | natal_chart.html | Built proper starPositions/auxPositions/hoaMap objects |
| 6 | tuvi-data.js duplicate const declarations | CRITICAL | tuvi-data.js | Removed duplicates; defined only in natal_chart.html |
| 7 | Cục derivation missing | CRITICAL | natal_chart.html | Added `deriveCuc(canIdx, menhBranchIdx)` |

---

## V. ARCHITECTURE REFERENCE

### Script Loading Order
```html
<!-- natal_chart.html -->
</script>                         ← Inline script (defines all functions)
<script src="lunar-data.js"></script>    ← Lunar calendar conversion
<script src="tuvi-data.js"></script>     ← All Tử Vi data tables

<!-- tarot-example.html -->
</script>                         ← Inline script (defines all functions)
<script src="tarot-data.js"></script>    ← All Tarot data tables
```
All functions use `typeof X !== 'undefined'` guards. Scripts load after inline code but before user interaction.

### Function Chains
```
natal_chart.html:
  Form submit → generateChart() → renderChart()
                                 → generateInterpretations()
                                 → generateTongLuan()
                                 → generateGuidance()

tarot-example.html:
  Draw cards → animateCards() → showReading() → generateConclusion()
                                                 ├─ analyzeElements()
                                                 ├─ findInteraction()
                                                 ├─ determineEnergy()
                                                 ├─ determineConfidence()
                                                 └─ generateActionSteps()
```

### Bilingual System
- Global `currentLang` variable (`'vi'` or `'en'`)
- All data objects: `{ vi: '...', en: '...' }`
- Language toggle re-renders dynamically
- Known issue: Tarot card names stay in English in Vietnamese mode

### Data Table Summary
| Table | Location | Size |
|-------|----------|------|
| `REVERSED_MEANINGS` | tarot-data.js:5 | 78 cards |
| `MAJOR_POSITION_INTERP` | tarot-data.js:330 | 22 × 3 positions |
| `MINOR_POSITION_INTERP` | tarot-data.js:642 | 56 × 3 positions |
| `CARD_INTERACTIONS` | tarot-data.js:1015 | 32 patterns |
| `ELEMENT_TRANSITIONS` | tarot-data.js:1190 | 20 transitions |
| `TU_VI_POS` | tuvi-data.js:19 | 5 Cục × 30 days |
| `TU_HOA_TABLE` | tuvi-data.js:186 | 10 Can × 4 stars |
| `CACH_CUC_PATTERNS` | tuvi-data.js:420 | 33 patterns |
| `PALACE_STAR_MEANINGS` | tuvi-data.js:945 | 12 × 14 = 168 entries |
| `DAI_HAN_MEANINGS` | tuvi-data.js:1661 | 12 palaces |
| `EMPTY_PALACE_MEANINGS` | tuvi-data.js:1782 | 12 palaces |

### Test Cases (All Verified 2026-03-21)
| Case | Input | Cục | Tứ Hóa |
|------|-------|-----|--------|
| 1 | Male, 1990-02-06, Dần | Thủy Nhị Cục ✅ | Thái Dương/Lộc, Vũ Khúc/Quyền, Thái Âm/Khoa, Thiên Đồng/Kỵ ✅ |
| 2 | Female, 2000-08-15, Ngọ | Thổ Ngũ Cục ✅ | Same as TC1 (both Canh) ✅ |
| 3 | Male, 1985-03-18, Tý | Mộc Tam Cục ✅ | Thiên Cơ/Lộc, Thiên Lương/Quyền, Tử Vi/Khoa, Thái Âm/Kỵ ✅ |

---

## VI. PROGRESS OVERVIEW

| Category | Status |
|----------|--------|
| Tử Vi Algorithms | 100% ✅ |
| Tử Vi Data Tables | 100% ✅ |
| Tử Vi Interpretation | 100% ✅ |
| Tarot Data Tables | 100% ✅ |
| Tarot Card Meanings | 100% ✅ (rewritten, specific & actionable) |
| Tarot Position Interp | 100% ✅ (Major + Minor covered) |
| Tarot Synthesis Engine | 70% — needs narrative arc, more interactions, integrated reversed context |
| Tarot Action Steps | 50% — works but generic (2 steps, not card-specific) |
| Responsive Design | 0% — not started |
| Authentication | 0% — not started |
| Bilingual QA | 95% — known card-name issue in tarot Vietnamese mode |
| Error Handling | 0% — no load-failure warnings |
