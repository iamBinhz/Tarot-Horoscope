# Tarot & Tử Vi System — Status Report
> **Last Updated:** 2026-03-28 (Task 13 complete — Responsive Design)
> **Plan:** `docs/superpowers/plans/2026-03-20-tarot-tuvi-improvements.md`
> **Total lines of code (5 files):** ~8,131

---

## I. FILE INVENTORY

| File | Lines | Status | Role |
|------|-------|--------|------|
| `lunar-data.js` | 323 | **DONE** | Ho Ngoc Duc lunar calendar (1800–2199), `gregorianToLunar()`, `formatLunarDate()` |
| `tuvi-data.js` | 1,837 | **DONE** | 25 data tables + functions: star positions, Tứ Hóa, Cách Cục (33 patterns), 168 palace×star meanings, Đại Hạn, Tổng Luận templates |
| `tarot-data.js` | ~3,840 | **DONE** | 21 data structures: reversed meanings (78), Major/Minor position interp, interactions (~65), elements, energy (with desc), confidence (with reasons), reading tones (4), confidence reasons (8), narrative templates, action templates (78×3), reflection questions (78×2-3×bilingual) |
| `natal_chart.html` | 1,717 | **DONE** | Full Tử Vi chart: deterministic algo, 12-palace interp, Tổng Luận, Cách Cục recognition, borrowed star logic |
| `tarot-example.html` | ~1,715 | **DONE** | Tarot reader: reversed mechanic, question model UI, synthesis engine, reflection questions, bilingual |

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
- `ENERGY_TYPES` (5, with descriptions), `CONFIDENCE_LEVELS` (3, with reasoning), `ARCANA_RATIO_TEXT`, `READING_TONES` (4), `CONFIDENCE_REASONS` (8)

### Phase 5: Tarot Algorithm & UI

#### Task 10 — Reversed Mechanic + Question Model UI ✅
- 50% reversal probability, `.reversed` CSS class (180° rotation), badge overlay
- Question model button group: general / problem / solution / crossroads
- `selectQuestionModel()` with active state toggle

#### Task 11 — Synthesis Engine ✅
- `showReading()`: uses `MAJOR_POSITION_INTERP` for Major, `MINOR_POSITION_INTERP` for Minor, `POSITION_FRAMES` as fallback, shows reversed meanings
- `generateConclusion()`: Opening → Thread → Elements → Path → Energy/Confidence badges
- `analyzeElements()`, `findInteraction()`, `determineEnergy()`, `determineConfidence()`
- `generateActionSteps()`: 4 card-specific steps (past lesson + present action + future prep + model advice)

### Phase 6: Validation & Bug Fixes

#### Task 12 — End-to-End Validation ✅
- 5 critical bugs found and fixed (see Section IV)
- 3 test cases validated in browser with deterministic Cục and Tứ Hóa
- `tuvi-data.js` loading bug fixed (duplicate const declarations removed)
- Translation overhaul: all data standardized to `{vi: ..., en: ...}` format

### Phase 9: Tarot Analysis Quality

#### Task 14 — Viết lại Card Meanings ✅
- 78 × 2 languages rewritten: 3–5 sentences per card
- Structure: Tình huống → Ý nghĩa cốt lõi → Lời khuyên cụ thể
- Verified: meanings are specific and actionable (not generic fortune-cookie style)

#### Task 15 — Minor Arcana Position Interpretation ✅
- `MINOR_POSITION_INTERP`: 56 cards × 3 positions × 2 languages = 336 entries
- `showReading()` now checks `MINOR_POSITION_INTERP` with typeof guard
- `POSITION_FRAMES` prefix kept as fallback only

#### Task 16 — Nâng cấp Reading Synthesis ✅
- **CARD_INTERACTIONS** expanded: 32 → ~65 patterns (Court↔Court rank-specific, Ace↔Ten, same-number-across-suits, 20+ Major↔Minor specifics)
- **ELEMENT_CONFLICT_PAIRS**: fire↔water, air↔earth conflict detection
- **ELEMENT_FLOW_ANALYSIS**: 4 conflict narratives + 18 three-element arc narratives (all permutations of fire/water/earth/air + 4 same-element arcs)
- **NARRATIVE_TEMPLATES**: per-position templates (past/present/future × major/minor/court × upright/reversed) + transition templates (same_element/conflict/shift)
- New functions: `extractBrief()`, `analyzeElementFlow()`, `generateStory()` — builds continuous narrative paragraph across 3 positions
- **"Câu Chuyện / The Story"** section added to Reading Synthesis between Opening and Thread
- Thread section now integrates reversed card context inline (not separate)
- Element Analysis now includes arc narratives and conflict warnings from `ELEMENT_FLOW_ANALYSIS`
- All new data uses `{vi: ..., en: ...}` bilingual format with `typeof` guards

#### Task 17 — Action Steps cụ thể theo context ✅
- **CARD_ACTION_TEMPLATES**: 78 cards × 3 positional roles (`past_lesson`, `present_action`, `future_prep`) × 2 languages = 468 entries
- Each template is specific to the card's energy and its role in the spread (not generic)
- **Rewrote `generateActionSteps()`**: now accepts all 3 drawn cards (not just future card)
- **4 steps instead of 2**: Past lesson → Present action → Future preparation → Question-model advice
- Each step shows the card name in bold before the action text
- Graceful fallback with `typeof CARD_ACTION_TEMPLATES` guard + generic keyword-based steps if templates unavailable
- All bilingual with `{vi: ..., en: ...}` format

#### Task 19 — Energy & Confidence Badge Improvements ✅
- **ENERGY_TYPES** expanded: each type now has a `desc` field with bilingual explanatory text (5 types × 2 languages)
- **CONFIDENCE_LEVELS** expanded: each level now has a `reasons` field with bilingual default reasoning
- **CONFIDENCE_REASONS**: 8 specific reason templates (aligned_upright, dominant_clear, future_upright, mixed_reversals, future_reversed, scattered_elements, all_reversed, no_dominant)
- **READING_TONES**: 4 tones (Optimistic/Cautionary/Transformative/Contemplative) × icon + desc × 2 languages
- **Rewrote `determineConfidence()`**: now returns `{ key, reasons[] }` with dynamic reason collection based on card state
- **New `determineReadingTone()`**: analyzes transformation cards, reversal count, contemplative cards, and elemental dominance
- **Badge rendering upgraded**: from inline labels to expanded card layout with descriptions, reason lists, and Reading Tone badge
- **New CSS**: `.synth-badges-expanded`, `.synth-badge-card`, `.badge-header`, `.badge-desc`, `.badge-reasons`
- All bilingual with `{vi: ..., en: ...}` format and `typeof` guards for graceful degradation

#### Task 18 — Reflection Questions ✅
- **REFLECTION_QUESTIONS**: 78 cards × 2–3 questions × 2 languages (~856 lines) in `tarot-data.js`
- Major Arcana: 3 questions per card (deep, archetypal), Minor Arcana: 2–3 questions per card (practical, suit-themed)
- Displayed below each card's reading section in `showReading()` with `typeof REFLECTION_QUESTIONS` guard
- Teal-accented styling (`.r-reflection`, `.r-reflection-label`, `.r-reflection-q`) with left border and subtle background
- Bilingual labels: "❓ Suy Ngẫm" / "❓ Reflect"

#### Task 13 — Mobile & Tablet Responsive Overhaul ✅
- **Touch devices**: `@media (hover: none), (pointer: coarse)` hides custom cursor, restores `cursor: auto` on all interactive elements
- **Tablet (≤1024px)**: Scaled chart grid, reading panels, badge cards
- **Mobile (≤768px)**: Single-column card readings, stacked badges, bottom-right lang toggle, horizontal-scroll chart grid with `← scroll →` hint, single-column form, compact accordions, touch-friendly tap targets
- **Small mobile (≤480px)**: 2×2 question model grid, tighter card sizes (100×175px), compact typography
- **Landscape mobile**: Cards stay in one row, hero description hidden
- **Files modified**: `tarot-example.html` (~120 lines CSS added), `natal_chart.html` (~115 lines CSS added/replaced)
- **Verified**: Desktop (1200px), Tablet (768px), Mobile (375px), Small (320px) — all breakpoints tested in browser

---

## III. INCOMPLETE TASKS (Priority: High → Low)

### 🟡 MEDIUM PRIORITY

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
                                                 ├─ determineReadingTone()
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
| `CARD_INTERACTIONS` | tarot-data.js:1015 | ~65 patterns (expanded Task 16) |
| `ELEMENT_TRANSITIONS` | tarot-data.js | 20 transitions |
| `ELEMENT_CONFLICT_PAIRS` | tarot-data.js | 4 pairs |
| `ELEMENT_FLOW_ANALYSIS` | tarot-data.js | 4 conflicts + 18 arcs |
| `NARRATIVE_TEMPLATES` | tarot-data.js | 5 positions × 6 types + transitions |
| `CARD_ACTION_TEMPLATES` | tarot-data.js | 78 cards × 3 roles × 2 languages |
| `READING_TONES` | tarot-data.js | 4 tones (icon + desc × 2 languages) |
| `CONFIDENCE_REASONS` | tarot-data.js | 8 specific reason templates × 2 languages |
| `REFLECTION_QUESTIONS` | tarot-data.js | 78 cards × 2–3 questions × 2 languages |
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
| Tarot Synthesis Engine | 100% ✅ — narrative arc, 65 interactions, element flow, reversed integration, badge descriptions & reasoning complete |
| Tarot Action Steps | 100% ✅ — 4 card-specific steps per reading (past lesson, present action, future prep, model advice) |
| Tarot Reflection Questions | 100% ✅ — 78 cards × 2–3 questions × bilingual, displayed below each card reading |
| Responsive Design | 100% ✅ — touch cursor, tablet, mobile, small mobile, landscape |
| Authentication | 0% — not started |
| Bilingual QA | 95% — known card-name issue in tarot Vietnamese mode |
| Error Handling | 0% — no load-failure warnings |
