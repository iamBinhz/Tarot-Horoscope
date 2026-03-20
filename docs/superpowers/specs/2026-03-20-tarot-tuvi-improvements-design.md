# Design Spec: Tarot & Tu Vi System Improvements

**Date:** 2026-03-20
**Status:** Reviewed (spec review passed, pending user approval)
**Scope:** Parallel improvements to tarot-example.html and natal_chart.html

---

## Context

Two research documents ("Bao Cao Chi Tiet Ve Tarot" and "Bao Cao Tu Vi Kinh Dich Chuyen Sau") revealed critical gaps between how these systems *should* work and how they're currently implemented. This spec covers the algorithmic, analytical, and communication improvements needed to bring both systems to research-faithful quality.

**Decisions made during brainstorming:**
- Both systems improved in parallel (not sequentially)
- Tu Vi: full authentic deterministic calculation (not approximation)
- Tarot: maximum interpretation depth (element analysis + position-specific + card interactions + question-model framing + actionable steps)
- Communication: mystical framing with practical substance (blend voice)
- Language: Vietnamese-primary for Tu Vi, English-primary for Tarot

---

## Track 1: Tarot System (tarot-example.html)

### 1.1 Reversed Card Meanings

**Current state:** Each card in the DECK array has only `meaning` (upright). No reversed meanings exist.

**Change:** Add `reversed` field to every card object in both DECK and DECK_VI arrays.

```js
// Before
{ id:0, name:"The Fool", ..., meaning:"New beginnings, innocence..." }

// After
{ id:0, name:"The Fool", ..., meaning:"New beginnings, innocence...", reversed:"Recklessness, fear of the unknown, holding back..." }
```

**Mechanic:** When dealing, each card gets a `isReversed` boolean (50% chance). Reversed cards use the `reversed` meaning instead of `meaning`.

**Visual treatment of reversed cards:** Since card faces are text-based (symbol + name + keywords), rotating the entire face 180deg would make text unreadable. Instead:
- The card **back** shows an inverted indicator (rotated symbol or "R" badge) during the face-down phase
- On flip, the card front renders normally (right-side-up text) but with a visual reversed indicator: a small inverted arrow icon next to the card name, and the card border/glow changes from gold to a muted purple/silver
- The reading panel clearly labels "(Reversed)" / "(Ngược)" next to the card name
- This keeps text readable while clearly communicating the reversed state

**Data volume:** 78 reversed meanings (English) + 78 Vietnamese translations = 156 new text entries.

### 1.2 Position-Specific Interpretation

**Current state:** Card meaning is displayed identically regardless of position (Past/Present/Future).

**Change:** Add a position-interpretation engine that modifies how the card's meaning is framed based on its spread position.

**Implementation:** A `positionFraming` object maps each position to interpretation modifiers:

```js
const POSITION_FRAMES = {
  past: {
    prefix_en: "In your past, this card reveals",
    prefix_vi: "Trong quá khứ, lá bài này cho thấy",
    lens: "completed_event", // interpretation treats meaning as something already experienced
    tenseShift: "past" // for narrative generation
  },
  present: {
    prefix_en: "Right now, this card shows",
    prefix_vi: "Hiện tại, lá bài này cho thấy",
    lens: "active_energy",
    tenseShift: "present"
  },
  future: {
    prefix_en: "Ahead of you, this card points to",
    prefix_vi: "Phía trước, lá bài này hướng tới",
    lens: "emerging_potential",
    tenseShift: "future"
  }
};
```

Additionally, each Major Arcana card gets a position-specific interpretation snippet (22 cards x 3 positions = 66 entries). Minor Arcana use templated position framing based on their suit + number range (Ace-3 = beginning, 4-6 = development, 7-9 = challenge, 10 = completion) combined with position.

### 1.3 Element Dominance Analysis

**Current state:** No element analysis exists. The `generateConclusion()` function ignores suit distribution entirely.

**Change:** After dealing 3 cards, analyze the element composition:

```js
function analyzeElements(cards) {
  const elements = { fire: 0, water: 0, air: 0, earth: 0, spirit: 0 };
  cards.forEach(c => {
    if (c.arcana === 'major') elements.spirit++;
    else elements[SUIT_ELEMENT[c.suit]]++;
  });

  const dominant = Object.entries(elements).filter(([,v]) => v >= 2);
  const missing = ['fire','water','air','earth'].filter(e => elements[e] === 0);

  return { elements, dominant, missing };
}
```

**Interpretation templates:**
- Dominant element: "Fire dominates your spread — passion, action, and creative force drive this reading."
- Missing element: "The absence of Water suggests emotional needs may be overlooked or suppressed."
- All different: "A balanced spread of elements — multiple life areas are in play."
- Major Arcana heavy: "The presence of [N] Major Arcana cards signals cosmic-scale forces beyond everyday concerns."

Each element combination (dominant + missing) maps to a paragraph of interpretive text in both languages.

### 1.4 Major vs Minor Arcana Ratio

**Current state:** No analysis of arcana distribution.

**Change:** Count Major vs Minor in the spread and generate insight:

| Majors | Interpretation |
|--------|---------------|
| 0 | "Your reading is grounded in everyday practical matters. The answers lie in daily actions and choices." |
| 1 | "One Major Arcana card anchors this reading — [card name] carries the most weight here." |
| 2 | "Two Major Arcana cards signal powerful forces at work. This situation runs deeper than surface events." |
| 3 | "All three cards are Major Arcana — this is a pivotal moment. Forces larger than yourself are converging." |

### 1.5 Card Interaction Engine

**Current state:** Cards are interpreted in complete isolation. No connection between them.

**Change:** Analyze pairs of adjacent cards (Past→Present and Present→Future) for narrative connections.

**Implementation:** A pattern-matching system with ~40 key interaction rules:

```js
const CARD_INTERACTIONS = [
  {
    condition: (a, b) => a.name === "The Tower" && b.name === "The Star",
    en: "The Tower's destruction clears the way for The Star's healing light — what was broken is being made whole.",
    vi: "Sự sụp đổ của Tháp mở đường cho ánh sáng chữa lành của Ngôi Sao..."
  },
  {
    condition: (a, b) => a.name === "Death" && b.arcana === "major",
    en: "Death's transformation feeds directly into a major cosmic shift — this is not a small change, it's a complete metamorphosis.",
    vi: "Sự chuyển hóa của Tử Thần dẫn thẳng đến một bước ngoặt lớn..."
  },
  // Suit-based interactions
  {
    condition: (a, b) => a.suit === "wands" && b.suit === "cups",
    en: "The fire of action (Wands) meets the water of emotion (Cups) — passion must now be tempered with feeling.",
    vi: "Lửa hành động (Gậy) gặp nước cảm xúc (Cốc)..."
  },
  // Number progression — uses function for dynamic text
  {
    condition: (a, b) => a.arcana === "minor" && b.arcana === "minor" && b.num > a.num,
    text: (a, b) => ({
      en: `The energy escalates from ${a.num} to ${b.num} — this situation is intensifying.`,
      vi: `Năng lượng tăng từ ${a.num} lên ${b.num} — tình huống đang leo thang.`
    })
  },
  // ... ~36 more patterns
];
// Note: entries with static text use {en, vi} strings.
// Entries needing card data use text(a,b) functions returning {en, vi}.
```

**Fallback templates:** If no specific pattern matches, use element-transition templates. These are critical to quality since ~40 patterns cannot cover all 6084 possible pairs:

```js
const ELEMENT_TRANSITIONS = {
  'fire→water': {
    en: "Fiery momentum gives way to emotional depth — action must now yield to feeling.",
    vi: "Đà lửa nhường chỗ cho chiều sâu cảm xúc — hành động giờ phải nhường chỗ cho cảm nhận."
  },
  'fire→earth': {
    en: "Creative fire seeks grounding — inspiration wants to become something tangible.",
    vi: "Lửa sáng tạo tìm kiếm nền tảng — cảm hứng muốn trở thành hiện thực."
  },
  'fire→air': {
    en: "Passion meets intellect — act on what you believe, but think it through.",
    vi: "Đam mê gặp trí tuệ — hãy hành động theo niềm tin, nhưng suy nghĩ kỹ."
  },
  // ... all 12 element pairs (4×3) + major→minor, minor→major transitions
  'spirit→any': {
    en: "A cosmic force channels into everyday reality — pay attention to how this manifests in your daily life.",
    vi: "Lực lượng vũ trụ đi vào thực tại hàng ngày — hãy chú ý cách nó biểu hiện."
  }
};
// Additional fallback: same-suit progression, same-number echo, court card transitions
```

### 1.6 Question-Model Framing

**Current state:** No question context. Reading is always generic.

**Change:** Before shuffling, user selects one of three question models (or "General" for no framing):

| Model | English | Vietnamese | Lens |
|-------|---------|------------|------|
| Problem Analysis | "What is blocking me?" | "Phân Tích Vấn Đề" | Obstacles, root causes, what needs attention |
| Solution/Action | "What should I do?" | "Giải Pháp / Hành Động" | Guidance, recommended actions, resources available |
| Crossroads | "Which path should I take?" | "Ngã Rẽ Cuộc Đời" | Comparison, trade-offs, timing |
| General | (default) | "Tổng Quát" | No specific framing applied |

**UI:** A row of 4 buttons below the "Shuffle" button. Labels switch with the bilingual toggle. Selected model highlighted with gold border. Default is "General" / "Tổng Quát".

**Impact on synthesis:** The question model affects:
- The opening line of the conclusion
- How position meanings are weighted (e.g., Problem Analysis weights Present more heavily)
- The framing of actionable steps
- The confidence/energy indicator label

### 1.7 Synthesis Engine (generateConclusion replacement)

**Current state:** Counts positive vs challenge cards, outputs one of 3 tones with generic bullet points.

**Replace with a multi-section synthesis:**

```
┌─────────────────────────────────────────┐
│  ✦ THE READING SPEAKS ✦                │
│                                         │
│  [Mystical Opening - 2-3 sentences]     │
│  Atmospheric, poetic framing of the     │
│  overall energy. Sets the mood.         │
│                                         │
│  ── The Thread ──                       │
│  [Narrative Arc - 3-4 sentences]        │
│  Connects Past → Present → Future       │
│  using card interactions and position   │
│  analysis. Tells the story.             │
│                                         │
│  ── The Elements ──                     │
│  [Element + Arcana Analysis]            │
│  Dominant/missing elements, Major/Minor │
│  ratio insight. 2-3 sentences.          │
│                                         │
│  ── Your Path Forward ──               │
│  [Actionable Steps - 2 items]           │
│  Concrete, specific guidance based on   │
│  the Future card + question model.      │
│                                         │
│  ⚡ Energy: [Transformative/Healing/    │
│     Challenging/Harmonious/Intense]     │
│  🎯 Confidence: [High/Moderate/Low]    │
│     (based on card harmony)             │
└─────────────────────────────────────────┘
```

**Energy types** derived from element + arcana analysis:
- Transformative: Death, Tower, Wheel present OR major element shift between positions
- Healing: Star, Temperance, Cups dominant
- Challenging: many reversed cards OR Swords dominant
- Harmonious: elements balanced, no reversed Majors
- Intense: 2+ Major Arcana OR all same suit

**Confidence** based on card harmony:
- High: cards tell a coherent story (matching elements, progressive numbers)
- Moderate: mixed signals but discernible pattern
- Low: contradictory cards (e.g., reversed card in Future position after two positive cards)

### 1.8 Communication Style (Blend Voice)

All generated text follows this pattern:
1. **Mystical hook** — Atmospheric opening using celestial/elemental imagery
2. **Clear insight** — Plain-language explanation of what the cards suggest
3. **Practical takeaway** — Actionable advice grounded in the reading

Example (English):
> "The cards weave a tapestry of fire and starlight across your spread. ✦ What began as sudden upheaval (The Tower) has given way to a period of deep emotional healing (The Star). The Nine of Pentacles in your future promises material stability earned through this transformation. Your path forward: (1) Release any remaining attachment to what The Tower destroyed — it served its purpose. (2) Invest in a skill or project this week that aligns with The Star's creative energy."

Example (Vietnamese):
> "Các lá bài dệt nên bức tranh của lửa và ánh sao trên trải bài của bạn. ✦ Những gì bắt đầu như một biến động bất ngờ (Tháp) đã nhường chỗ cho giai đoạn chữa lành sâu sắc (Ngôi Sao)..."

---

## Track 2: Tu Vi System (natal_chart.html)

### 2.0 Gregorian-to-Lunar Calendar Conversion (Prerequisite)

**Current state:** The form collects Gregorian dates (`<input type="date">`) and uses `d.getDate()` (Gregorian day) directly. Tu Vi Dau So requires lunar calendar dates (lunar day, lunar month, lunar year) for all calculations.

**Change:** Implement a Gregorian-to-Vietnamese-lunar conversion algorithm.

**Approach: Built-in lookup table (no external APIs).**

The Vietnamese lunar calendar is based on astronomical observations with leap month adjustments. A practical approach for a client-side app:

1. **Precomputed lunar data table** covering years 1900-2100. Each year entry stores:
   - Leap month index (0 = no leap month, 1-12 = which month is repeated)
   - 12-13 bit flags for month lengths (29 or 30 days per month)
   - This is a well-known dataset (~200 entries, ~3 lines per entry compressed)

2. **Conversion function:**
```js
function gregorianToLunar(year, month, day) {
  // Uses the precomputed LUNAR_DATA table
  // Returns { lunarYear, lunarMonth, lunarDay, isLeapMonth }
  // Algorithm: count days from a known epoch, walk through lunar months
}
```

3. **Known dataset source:** The "Vietnamese/Chinese lunar calendar" lookup tables are widely used in Tu Vi software. The compressed format is ~400 lines of hex data.

**UX change:** After the user enters a Gregorian date, the form displays the converted lunar date below the input for transparency: "Âm lịch: Ngày 15 tháng 2 năm Bính Ngọ"

**Edge case: Invalid conversions.** If a Gregorian date falls outside the supported range (pre-1900 or post-2100), display a warning and offer manual lunar date input as a fallback.

**Alternative input:** Add a checkbox "Tôi biết ngày âm lịch" / "I know my lunar birthday" that reveals manual lunar date fields (lunar day, lunar month, lunar year, is leap month). This bypasses conversion entirely and is more accurate for users who know their lunar birth date.

### 2.1 Deterministic Star Placement

**Current state:** Main stars distributed by Fisher-Yates shuffle with seeded RNG. Only Tử Vi uses day-based position `(day-1)%12`, Thiên Phủ = `(12 - tuViPos)%12`.

**Change:** Implement the authentic Tu Vi Dau So star placement algorithm.

#### Step 1: Tử Vi Position Lookup

Tử Vi's position is determined by **lunar day** and **Cục** (derived from the combination of Mệnh cung's Earthly Branch Ngũ Hành and the birth year's Thiên Can):

**Cục derivation (corrected):** The Cục is determined by the Nạp Âm Ngũ Hành of the combination of the **Thiên Can of the birth year** and the **Địa Chi of the Mệnh cung**, NOT simply from the birth year's Nạp Âm. The steps are:
1. Get the Thiên Can of the birth year
2. Get the Địa Chi of the Mệnh cung (computed from lunar month + birth hour)
3. Combine this Thiên Can + Địa Chi pair → look up in Nạp Âm table → get Ngũ Hành → map to Cục

This corrects the current oversimplification where Cục comes directly from the birth year's Nạp Âm.

| Cục | Value |
|-----|-------|
| Thủy Nhị Cục | 2 |
| Mộc Tam Cục | 3 |
| Kim Tứ Cục | 4 |
| Thổ Ngũ Cục | 5 |
| Hỏa Lục Cục | 6 |

**Tử Vi position lookup table** — maps (Cục, lunar day) → branch index (0-11):

This is a 6×30 table (6 Cục values × 30 possible lunar days). The algorithm:
1. Get Cục from Nạp Âm of birth year (already exists: `CUC_MAP` + `getNapAmHanh()`)
2. Look up Tử Vi position from (Cục value, lunar day)

```js
// TU_VI_POS[cucValue][lunarDay] = branch index (0-11)
// Example entries:
const TU_VI_POS = {
  2: { 1:1, 2:2, 3:2, 4:3, 5:3, ... },  // Thủy Nhị Cục
  3: { 1:1, 2:1, 3:2, 4:2, 5:2, ... },  // Mộc Tam Cục
  4: { 1:1, 2:1, 3:1, 4:2, 5:2, ... },  // Kim Tứ Cục
  5: { 1:1, 2:1, 3:1, 4:1, 5:2, ... },  // Thổ Ngũ Cục
  6: { 1:1, 2:1, 3:1, 4:1, 5:1, ... },  // Hỏa Lục Cục
};
```

Full table to be populated from reference materials. The formula: Tử Vi position = ceiling(lunarDay / cucValue), adjusted to branch index.

#### Step 2: Main Star Derivation from Tử Vi

Once Tử Vi's position is known, the other 13 main stars are placed at fixed offsets:

```js
// MAIN_STAR_OFFSETS[starName] = offset from Tử Vi position
// These are fixed relationships in Tu Vi Dau So
const MAIN_STAR_OFFSETS = {
  'Thiên Phủ': (tuViPos) => (12 - tuViPos) % 12,  // Mirror of Tử Vi (already correct)
  'Thiên Cơ': (tuViPos) => (tuViPos + 11) % 12,    // Tử Vi - 1
  'Thái Dương': (tuViPos) => (tuViPos + 9) % 12,   // Tử Vi - 3
  'Vũ Khúc': (tuViPos) => (tuViPos + 8) % 12,      // Tử Vi - 4
  'Thiên Đồng': (tuViPos) => (tuViPos + 7) % 12,   // Tử Vi - 5
  'Liêm Trinh': (tuViPos) => (tuViPos + 4) % 12,   // Tử Vi - 8
  // Stars derived from Thiên Phủ position:
  'Thái Âm': (tuViPos, tpPos) => (tpPos + 1) % 12,
  'Tham Lang': (tuViPos, tpPos) => (tpPos + 2) % 12,
  'Cự Môn': (tuViPos, tpPos) => (tpPos + 3) % 12,
  'Thiên Tướng': (tuViPos, tpPos) => (tpPos + 4) % 12,
  'Thiên Lương': (tuViPos, tpPos) => (tpPos + 5) % 12,
  'Thất Sát': (tuViPos, tpPos) => (tpPos + 6) % 12,
  'Phá Quân': (tuViPos, tpPos) => (tpPos + 10) % 12,
};
```

#### Step 3: Auxiliary Star Placement

Auxiliary stars have their own placement rules based on various inputs:

| Star Group | Placement Basis |
|-----------|----------------|
| Văn Xương, Văn Khúc | Birth hour (Giờ sinh) |
| Tả Phụ, Hữu Bật | Birth month |
| Thiên Khôi, Thiên Việt | Thiên Can of birth year |
| Lộc Tồn, Kình Dương, Đà La, Thiên Mã | Thiên Can / Địa Chi of birth year |
| Hỏa Tinh, Linh Tinh | Birth hour + birth year branch |
| Địa Không, Địa Kiếp | Birth hour |
| Thiên Không, Đào Hoa, Hồng Loan | Birth year branch |
| Thai Phụ, Phong Cáo | Birth month + birth hour |

Each gets a lookup table or formula. ~30 auxiliary stars total, each with a deterministic rule.

#### Step 4: Tràng Sinh Cycle Placement

**Current state:** Tràng Sinh starting position is randomly assigned (`Math.floor(rng() * 12)`).

**Change:** The Tràng Sinh (twelve life phases) cycle starting position is determined by the **Cục's Ngũ Hành** and the **Mệnh cung's Địa Chi**, with direction (clockwise/counterclockwise) determined by **Âm/Dương** of the chart (based on birth year + gender):

```js
// Starting palace for Tràng Sinh based on Cục element
const TRANG_SINH_START = {
  'Thủy': 8,  // Thân
  'Mộc': 2,   // Dần (Hợi for some schools)
  'Kim': 5,   // Tỵ
  'Thổ': 8,   // Thân
  'Hỏa': 2,   // Dần
};

// 12 phases in order
const TRANG_SINH_PHASES = [
  'Trường Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan', 'Đế Vượng', 'Suy',
  'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng'
];

// Direction: Dương (male born in yang year, female born in yin year) = clockwise
// Âm (male born in yin year, female born in yang year) = counterclockwise
```

The 12 phases distribute from the starting palace in the determined direction, one per branch.

### 2.2 Tứ Hóa by Thiên Can

**Current state:** Randomly assigned to 4 stars.

**Change:** Proper lookup table:

```js
const TU_HOA_TABLE = {
  // ThienCan: [Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ]
  'Giáp': ['Liêm Trinh', 'Phá Quân', 'Vũ Khúc', 'Thái Dương'],
  'Ất':   ['Thiên Cơ', 'Thiên Lương', 'Tử Vi', 'Thái Âm'],
  'Bính': ['Thiên Đồng', 'Thiên Cơ', 'Văn Xương', 'Liêm Trinh'],
  'Đinh': ['Thái Âm', 'Thiên Đồng', 'Thiên Cơ', 'Cự Môn'],
  'Mậu':  ['Tham Lang', 'Thái Âm', 'Hữu Bật', 'Thiên Cơ'],
  'Kỷ':   ['Vũ Khúc', 'Tham Lang', 'Thiên Lương', 'Văn Khúc'],
  'Canh':  ['Thái Dương', 'Vũ Khúc', 'Thái Âm', 'Thiên Đồng'],
  'Tân':  ['Cự Môn', 'Thái Dương', 'Văn Khúc', 'Văn Xương'],
  'Nhâm': ['Thiên Lương', 'Tử Vi', 'Tả Phụ', 'Vũ Khúc'],
  'Quý':  ['Phá Quân', 'Cự Môn', 'Thái Âm', 'Tham Lang'],
};
// Source: Northern school (Bắc Phái) convention. Some Southern school
// sources differ on select entries (e.g., Giáp Hóa Lộc → Lộc Tồn).
// This spec follows Bắc Phái as referenced in the research document.
```

### 2.3 Star Brightness System

**Current state:** Hash-based: `Math.abs(hash) % 5` → random brightness level.

**Change:** Proper lookup table mapping (star, branch position) → brightness level.

```js
// BRIGHTNESS[starName][branchIndex] = 'Miếu' | 'Vượng' | 'Đắc' | 'Bình' | 'Hãm'
const STAR_BRIGHTNESS = {
  'Tử Vi': {
    0: 'Miếu', 1: 'Vượng', 2: 'Đắc', 3: 'Bình', 4: 'Miếu',
    5: 'Vượng', 6: 'Miếu', 7: 'Vượng', 8: 'Đắc', 9: 'Bình',
    10: 'Miếu', 11: 'Vượng'
  },
  'Thiên Cơ': { ... },
  // ... 14 main stars × 12 branches = 168 entries
};
```

**Impact on interpretation:** Brightness modifies star meaning:
- Miếu/Vượng: star at full power, positive expression
- Đắc: good but not peak
- Bình: neutral
- Hãm: star weakened, negative tendencies surface

### 2.4 Full 12-Palace Interpretation

**Current state:** Only 4 palaces interpreted (Mệnh, Tài Bạch, Quan Lộc, Phu Thê).

**Change:** All 12 palaces get interpretation based on:
1. Stars present in the palace
2. Star brightness in that position
3. Tứ Hóa affecting stars in the palace
4. Tuần/Triệt presence
5. Ngũ Hành interaction (star element vs palace element)

**Palace interpretation template:**

```js
function interpretPalace(palace, stars, hoaMap, tuanTriet) {
  let reading = {
    summary: "",      // 1-2 sentence overview
    strengths: [],    // positive indicators
    challenges: [],   // areas of concern
    advice: "",       // practical guidance
    hoaEffects: [],   // transformation influences
    brightness: "",   // overall palace energy level
  };

  // Analyze each star
  stars.forEach(star => {
    const brightness = STAR_BRIGHTNESS[star.name]?.[palace.branchIdx];
    const hoa = hoaMap[star.name];
    const inTuan = tuanTriet.tuan.includes(palace.branchIdx);
    const inTriet = tuanTriet.triet.includes(palace.branchIdx);

    // Get base meaning for star-in-palace
    const baseMeaning = PALACE_STAR_MEANINGS[palace.name]?.[star.name];

    // Modify by brightness
    const modifiedMeaning = applyBrightness(baseMeaning, brightness);

    // Modify by Hóa
    if (hoa) modifiedMeaning = applyHoa(modifiedMeaning, hoa);

    // Modify by Tuần/Triệt
    if (inTuan || inTriet) modifiedMeaning = applyVoid(modifiedMeaning, inTuan ? 'tuan' : 'triet');
  });

  return reading;
}
```

**Empty palaces:** Some palaces may have no main stars after deterministic placement — this is normal and meaningful in Tu Vi. An empty palace is interpreted through:
1. Its Tràng Sinh phase (which is always present)
2. Any auxiliary stars present
3. The "borrowed star" concept: an empty Mệnh palace borrows from the opposite palace (Thiên Di)
4. The palace element itself and its Ngũ Hành relationship with the chart's Cục

```js
function interpretEmptyPalace(palace, trangSinhPhase, auxStars, oppositePalaceStars) {
  // Tràng Sinh phase gives the baseline energy
  // Auxiliary stars modify it
  // For Mệnh specifically, borrow main star interpretation from Thiên Di
}
```

**Data requirement:** `PALACE_STAR_MEANINGS` — 12 palaces × 14 main stars = 168 base interpretation entries (Vietnamese primary + English). This is the largest data component. Realistic estimate: ~1000-1400 lines at 3-4 lines per entry.

### 2.5 Ngũ Hành Sinh Khắc Analysis

**Current state:** Element interaction text exists but uses random palace elements.

**Change:** Palace elements are determined by the Cung's Địa Chi (branch), which maps to a fixed element:

```js
const BRANCH_ELEMENT = {
  0: 'Thủy', // Tý
  1: 'Thổ',  // Sửu
  2: 'Mộc',  // Dần
  3: 'Mộc',  // Mão
  4: 'Thổ',  // Thìn
  5: 'Hỏa',  // Tỵ
  6: 'Hỏa',  // Ngọ
  7: 'Thổ',  // Mùi
  8: 'Kim',  // Thân
  9: 'Kim',  // Dậu
  10: 'Thổ', // Tuất
  11: 'Thủy' // Hợi
};
```

**Sinh/Khắc cycle:**
```
Sinh (generating): Mộc → Hỏa → Thổ → Kim → Thủy → Mộc
Khắc (overcoming): Mộc → Thổ → Thủy → Hỏa → Kim → Mộc
```

When star element **sinh** palace element → enhanced positive effect
When star element is **sinh by** palace element → supported, favorable
When star element **khắc** palace element → tension, star dominates environment
When star element is **khắc by** palace element → star weakened by environment

### 2.6 Expanded Cách Cục Recognition

**Current state:** Only 2 patterns recognized (Tử Vi + Thiên Phủ, and Thất Sát/Phá Quân).

**Change:** Implement 25-30 common Cách Cục patterns:

```js
const CACH_CUC_PATTERNS = [
  {
    name: 'Tử Phủ Đồng Cung',
    condition: (chart) => samePlace(chart, 'Tử Vi', 'Thiên Phủ'),
    meaning_vi: 'Cách cục vua quan, quyền lực và phú quý...',
    meaning_en: 'Emperor pattern — authority and wealth combined...',
  },
  {
    name: 'Cơ Nguyệt Đồng Lương',
    condition: (chart) => adjacentOrSame(chart, ['Thiên Cơ','Thái Âm','Thiên Đồng','Thiên Lương']),
    meaning_vi: 'Cách cục công chức, ổn định trong sự nghiệp...',
    meaning_en: 'Civil servant pattern — career stability...',
  },
  {
    name: 'Sát Phá Liêm Tham',
    condition: (chart) => adjacentOrSame(chart, ['Thất Sát','Phá Quân','Liêm Trinh','Tham Lang']),
    meaning_vi: 'Cách cục võ tướng, mạnh mẽ và quyết đoán...',
    meaning_en: 'Warrior pattern — strength and decisiveness...',
  },
  {
    name: 'Tam Kỳ Gia Hội',
    condition: (chart) => hasHoaInTriangle(chart, ['Lộc','Quyền','Khoa']),
    meaning_vi: 'Ba may mắn hội tụ, vận mệnh cực tốt...',
    meaning_en: 'Three Fortunes Convergence — extremely auspicious destiny...',
  },
  // ... 20+ more patterns
];
```

### 2.7 Tuần/Triệt Integration

**Current state:** Positions calculated but not used.

**Change:** Stars in Tuần or Triệt positions have modified interpretations:

- **Tuần (Void):** Star's energy is "empty" — positive stars lose some benefit, BUT negative stars also lose their harm. Tuần can paradoxically help by neutralizing malefic stars.
- **Triệt (Severance):** Star's energy is "cut off" — more disruptive than Tuần. Positive stars lose most benefit. Negative stars are weakened but may manifest as sudden events.
- **Age-based weighting:** Before age 30, Triệt has stronger effect. After 30, Tuần becomes dominant.

```js
function applyVoid(meaning, voidType, age) {
  const weight = voidType === 'triet'
    ? (age < 30 ? 0.8 : 0.4)  // Triệt stronger before 30
    : (age < 30 ? 0.4 : 0.8); // Tuần stronger after 30

  // Modify star interpretation by weight
  // Positive meanings reduced by weight factor
  // Negative meanings also reduced (double-edged)
}
```

### 2.8 Đại Hạn (10-Year Period) Interpretation

**Current state:** Calculated as year ranges but not interpreted.

**Change:** Each Đại Hạn period gets:
1. The palace it falls in
2. Stars in that palace at birth
3. Ngũ Hành interaction between Đại Hạn palace and natal palace
4. Current Đại Hạn highlighted and given detailed interpretation

```js
function interpretDaiHan(daiHanPalace, natalChart, currentAge) {
  return {
    period: `${startAge}-${endAge}`,
    palace: daiHanPalace.name,
    stars: getStarsInPalace(natalChart, daiHanPalace),
    element_interaction: analyzeNguHanh(daiHanPalace.element, natalMenh.element),
    interpretation_vi: "...",
    interpretation_en: "...",
    isCurrent: currentAge >= startAge && currentAge < endAge,
  };
}
```

### 2.9 Chart-Based Daily Guidance

**Current state:** Randomly picks from static DOS/DONTS arrays.

**Change:** Guidance derived from:
1. Stars in Mệnh palace + their brightness → personality-based advice
2. Current Đại Hạn palace → period-relevant focus areas
3. Tứ Hóa effects → specific strengths/weaknesses to leverage/watch

No more random selection. Every piece of guidance traces back to the chart.

### 2.10 Tổng Luận (Overall Synthesis)

**Current state:** No overall synthesis exists. Individual palace interpretations are not connected.

**Change:** Add a synthesis section (paralleling the Tarot system's synthesis engine) that weaves together:

```
┌─────────────────────────────────────────────┐
│  ✦ TỔNG LUẬN LÁ SỐ / CHART SYNTHESIS ✦     │
│                                             │
│  [Classical Opening - 2-3 sentences]        │
│  Chart identity: Cục, Mệnh palace, dominant │
│  stars, overall energy.                     │
│                                             │
│  ── Cách Cục Chủ Đạo ──                   │
│  [Dominant Pattern - 2-3 sentences]         │
│  Named Cách Cục + meaning. If multiple      │
│  patterns found, rank by significance.      │
│                                             │
│  ── Tứ Hóa Tác Động ──                    │
│  [Transformation Analysis - 3-4 sentences]  │
│  How the 4 Hóa interact with the chart.     │
│  Especially Hóa Lộc (fortune source) and    │
│  Hóa Kỵ (challenge area).                  │
│                                             │
│  ── Đại Hạn Hiện Tại ──                   │
│  [Current Period - 2-3 sentences]           │
│  What the current 10-year period means.     │
│  Ngũ Hành interaction with natal chart.     │
│                                             │
│  ── Lời Khuyên ──                          │
│  [Actionable Guidance - 2-3 items]          │
│  Based on Mệnh + current Đại Hạn + Tứ Hóa.│
│  Framed as "conditional determinism."       │
│                                             │
│  ⚡ Mệnh Cách: [label based on dominant    │
│     pattern — e.g., Văn/Võ/Tài/Phúc]       │
└─────────────────────────────────────────────┘
```

### 2.11 Age Calculation Fix

**Current state:** Age computed as `currentYear - year` (approximate, ignores birth month).

**Change:** Use proper age calculation: `Math.floor((currentDate - birthDate) / (365.25 * 86400000))`. This matters for Tuần/Triệt age-based weighting (threshold at 30) and determining the current Đại Hạn period.

### 2.12 Communication Style (Tu Vi)

Vietnamese-primary with blend voice adapted for Tu Vi's more scholarly tradition:

1. **Classical opening** — References the chart's dominant energy using traditional Vietnamese astrological language
2. **Clear analysis** — Plain Vietnamese explanation of what the stars indicate
3. **Practical guidance** — Actionable advice framed as "conditional determinism" (the chart sets parameters, free will operates within them)

Example:
> "Lá số của bạn mang cách cục Tử Phủ Đồng Cung — cung Mệnh tại Ngọ, Hỏa vượng, Tử Vi và Thiên Phủ đồng tọa trong trạng thái Miếu. ✦ Đây là lá số của người có thiên mệnh lãnh đạo, quyền lực tự nhiên và phúc đức dày. Tứ Hóa năm Giáp đặt Hóa Lộc tại Liêm Trinh — tài lộc đến từ sự liêm chính và kỷ luật. ✦ Lời khuyên: Trong giai đoạn Đại Hạn hiện tại (25-34 tuổi) tại cung Tài Bạch, hãy tập trung xây dựng nền tảng tài chính. Đừng vội tìm kiếm sự nghiệp lớn — vận Quan Lộc sẽ đến mạnh ở Đại Hạn tiếp theo."

---

## Data Volume Estimates

| Component | Entries | Notes |
|-----------|---------|-------|
| Tarot reversed meanings | 78×2 lang | New field on existing cards |
| Major Arcana position interpretations | 22×3 positions ×2 lang | ~132 entries |
| Element analysis templates | ~20 combinations ×2 lang | Dominant/missing combos |
| Card interaction patterns | ~40 patterns ×2 lang | Pair-based |
| Question model templates | 4 models ×2 lang | Framing text |
| Synthesis templates | ~30 template fragments ×2 lang | For conclusion builder |
| Tu Vi position lookup | 6 Cục × 30 days | ~180 entries |
| Main star offsets | 13 formulas | From Tử Vi position |
| Auxiliary star tables | ~30 stars × varied | Lookup tables |
| Star brightness | 14 stars × 12 branches | 168 entries |
| Tứ Hóa table | 10 × 4 | 40 entries |
| Palace × star meanings | 12 × 14 × 2 lang | ~336 entries (largest) |
| Cách Cục patterns | 25-30 patterns × 2 lang | Condition + meaning |
| Đại Hạn templates | 12 palaces × 2 lang | Period interpretations |

| Lunar calendar data | ~200 year entries | Compressed hex format |
| Tràng Sinh tables | 5 elements × 12 phases | Starting positions + phase names |
| Empty palace templates | 12 palaces × 2 lang | Fallback for starless palaces |
| Tổng Luận templates | ~20 fragments × 2 lang | Synthesis text |

**Revised total estimate:** ~4,500-6,000 lines across both files (each file growing to ~3,400-4,200 lines). The palace×star meanings table alone accounts for ~1,000-1,400 lines.

---

## What Does NOT Change

- Visual design, layout, CSS styling
- Starfield canvas animation
- Card flip mechanics and shuffle animation
- Custom cursor behavior
- Page structure and HTML layout
- Bilingual toggle mechanism (body.lang-vi class)
- Google Fonts CDN loading
- Single-file architecture (however, a separate `tuvi-data.js` loaded via `<script src>` is acceptable if natal_chart.html exceeds ~4000 lines, since this still works offline with direct file opening)

---

## Success Criteria

**Tarot:**
- Every card has both upright and reversed meanings
- Reversed cards display with visual indicator (inverted arrow + color shift), text remains readable
- Conclusion contains: mystical opening, narrative arc, element analysis, actionable steps
- Question model selection affects interpretation framing
- Adjacent cards are analyzed for narrative connections
- Reading feels cohesive, not like 3 isolated card descriptions

**Tu Vi:**
- Gregorian dates correctly convert to lunar dates (verify against known lunar calendars)
- Same birth data always produces the same chart (deterministic)
- Star positions match reference calculations for known test cases
- Tứ Hóa correctly determined by Thiên Can
- All 12 palaces have interpretations (including empty palaces)
- Star brightness uses proper lookup, not hash
- Tràng Sinh cycle placed deterministically by Cục element
- Đại Hạn periods are interpreted with current period highlighted
- Tuần/Triệt effects visible in interpretation
- Tổng Luận synthesis section connects all analysis threads
- Reading provides chart-based (not random) guidance

---

## Validation Test Cases

To verify Tu Vi calculation correctness, the implementation must produce correct results for these reference cases (to be validated against established Tu Vi software):

**Test Case 1:** Male, born 1990-02-06 (Gregorian), Giờ Dần (3-5 AM)
- Lunar: Canh Ngọ year, tháng Giêng, ngày 11
- Expected: Thiên Can = Canh, Tứ Hóa = [Thái Dương/Lộc, Vũ Khúc/Quyền, Thái Âm/Khoa, Thiên Đồng/Kỵ]

**Test Case 2:** Female, born 2000-08-15 (Gregorian), Giờ Ngọ (11AM-1PM)
- Lunar: Canh Thìn year
- Expected: Thiên Can = Canh, same Tứ Hóa as above but different Mệnh/Thân cung

**Test Case 3:** Male, born 1985-03-18 (Gregorian), Giờ Tý (11PM-1AM)
- Lunar: Ất Sửu year
- Expected: Thiên Can = Ất, Tứ Hóa = [Thiên Cơ/Lộc, Thiên Lương/Quyền, Tử Vi/Khoa, Thái Âm/Kỵ]

Full star positions for each test case to be verified against reference Tu Vi software (e.g., tuvi.vn or laso.vn) during implementation.
