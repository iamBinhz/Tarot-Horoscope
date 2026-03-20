# Tarot & Tu Vi System Improvements — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace random/shallow algorithms in both tarot-example.html and natal_chart.html with research-faithful, deterministic systems that deliver deep, connected, bilingual interpretations.

**Architecture:** Two parallel tracks sharing no code. Track 1 (Tarot) adds reversed meanings, element analysis, card interactions, question models, and a multi-section synthesis engine. Track 2 (Tu Vi) replaces random star placement with authentic deterministic calculation, adds lunar conversion, proper brightness/Tứ Hóa/Tuần-Triệt systems, full 12-palace interpretation, Cách Cục recognition, Đại Hạn interpretation, and a Tổng Luận synthesis. Large data tables extracted to separate `.js` files loaded via `<script src>`.

**Tech Stack:** Vanilla HTML/CSS/JS, no frameworks, no build tools, Google Fonts CDN. Files opened directly in browser.

**Spec:** `docs/superpowers/specs/2026-03-20-tarot-tuvi-improvements-design.md`

---

## File Structure

### New files to create:
| File | Responsibility | Est. Lines |
|------|---------------|------------|
| `lunar-data.js` | Precomputed lunar calendar table (1900-2100) + `gregorianToLunar()` function | ~500 |
| `tuvi-data.js` | All Tu Vi lookup tables: Tử Vi position table, main star offsets, auxiliary star placement rules, star brightness table, Tứ Hóa table, Tràng Sinh tables, Cách Cục patterns, palace×star meanings, Đại Hạn templates, Tổng Luận templates, empty palace templates | ~2,200 |
| `tarot-data.js` | Reversed meanings (EN+VI), Major Arcana position interpretations, element analysis templates, card interaction patterns + fallbacks, question model templates, synthesis templates, energy/confidence logic | ~1,800 |

### Existing files to modify:
| File | Changes |
|------|---------|
| `natal_chart.html` | Replace `generateChart()` algorithm, wire lunar conversion, new interpretation engine, new synthesis section, new guidance logic, add `<script src>` tags for data files, add manual lunar input UI, add Tổng Luận UI section |
| `tarot-example.html` | Wire reversed card mechanic, add question model UI, new `showReading()` with position framing, new synthesis engine replacing `generateConclusion()`, add reversed visual treatment CSS, add `<script src>` tag for data file |

### Files NOT changed:
- `index.html`, `mystic.html`, `obsidian-oracle.html` — untouched
- All CSS styling, starfield canvas, card flip animation, custom cursor — preserved exactly

---

## Phase 1: Tu Vi Data Infrastructure

### Task 1: Create lunar-data.js — Lunar Calendar Conversion

**Files:**
- Create: `Makin_money/lunar-data.js`

This is the prerequisite for all Tu Vi calculations. The file contains a precomputed lunar data table covering 1900-2100 and the conversion function.

- [ ] **Step 1: Create lunar-data.js with the LUNAR_DATA table**

The table stores, for each year (1900-2100), the leap month index and month-length bit flags. This is a well-known dataset used in Chinese/Vietnamese calendar software. Use the standard compressed hex format.

```js
// lunar-data.js — Gregorian to Vietnamese Lunar Calendar Conversion
// Data covers 1900-2100 (201 years)

/**
 * Each entry: [monthLengthBits, leapMonthIndex]
 * monthLengthBits: 12-13 bit integer, bit i=1 means month i+1 has 30 days (else 29)
 * leapMonthIndex: 0 = no leap month, 1-12 = which month is repeated
 *
 * Lunar new year date (Gregorian) for each year is derived from the data.
 */
const LUNAR_DATA = [
  // 1900
  [0x04bd8, 0, 31, 1, 1900], // [monthBits, leapMonth, lunarNewYearGregDay, lunarNewYearGregMonth, lunarNewYearGregYear]
  // ... 200 more entries
  // Format: each entry stores enough to reconstruct all lunar months for that year
];
```

The actual data should be sourced from the widely-used lunar calendar dataset (same one used by tuvi.vn, lichvannien.net, etc.). The implementation should use the compact format where each year is encoded as a hex value containing month lengths and leap month info.

Reference implementation pattern:
```js
const LUNAR_INFO = [
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, // 1900-1904
  0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1905-1909
  // ... continues for 201 entries through 2100
];

// Each hex value encodes:
// Bits 0-11:  month lengths (1=30 days, 0=29 days) for months 1-12
// Bits 12-15: leap month (0=none, 1-12=which month)
// Bit 16+:    leap month length (0=29, 1=30 days)
```

- [ ] **Step 2: Implement gregorianToLunar() function**

```js
/**
 * Convert Gregorian date to Vietnamese lunar date
 * @param {number} year - Gregorian year (1900-2100)
 * @param {number} month - Gregorian month (1-12)
 * @param {number} day - Gregorian day
 * @returns {{ lunarYear, lunarMonth, lunarDay, isLeapMonth, thienCan, diaChi }}
 */
function gregorianToLunar(year, month, day) {
  // Algorithm:
  // 1. Calculate days from epoch (Jan 31, 1900 = lunar 1/1/1900)
  // 2. Walk through lunar years/months using LUNAR_INFO
  // 3. Return lunar date components

  // Also derive Thiên Can and Địa Chi of the lunar year
  const canIdx = (lunarYear - 4) % 10;
  const chiIdx = (lunarYear - 4) % 12;

  return { lunarYear, lunarMonth, lunarDay, isLeapMonth, canIdx, chiIdx };
}
```

Key edge cases:
- Dates near lunar new year (Gregorian Jan/Feb) — the lunar year may differ from Gregorian year
- Leap months — `isLeapMonth` flag must be set correctly
- Dates outside 1900-2100 range — return null with error flag

- [ ] **Step 3: Implement lunarMonthDays() and lunarYearDays() helpers**

```js
function lunarMonthDays(yearInfo, month) {
  // Return 29 or 30 based on the bit flag for this month
}

function leapMonthDays(yearInfo) {
  // Return 29 or 30 for the leap month (if any)
}

function lunarYearDays(yearInfo) {
  // Sum all month days for this lunar year
}
```

- [ ] **Step 4: Add formatLunarDate() for display**

```js
function formatLunarDate(lunar, lang) {
  // Returns formatted string like:
  // EN: "Lunar: Day 15, Month 2, Canh Ngọ year"
  // VI: "Âm lịch: Ngày 15 tháng 2 năm Canh Ngọ"
}
```

- [ ] **Step 5: Verify against known dates**

Open browser console and test:
```js
// Test Case 1 from spec: 1990-02-06 → Canh Ngọ, tháng Giêng, ngày 11
console.log(gregorianToLunar(1990, 2, 6));
// Expected: { lunarYear: 1990, lunarMonth: 1, lunarDay: 11, ... canIdx: 6 (Canh) }

// Test Case 3: 1985-03-18 → Ất Sửu year
console.log(gregorianToLunar(1985, 3, 18));
// Expected: { lunarYear: 1985, ..., canIdx: 1 (Ất) }

// Edge case: Lunar new year boundary
console.log(gregorianToLunar(2000, 2, 4)); // Should be last day of previous lunar year or first of new
```

- [ ] **Step 6: Commit**

```bash
cd Makin_money
git add lunar-data.js
git commit -m "feat(tuvi): add lunar calendar conversion (1900-2100)"
```

---

### Task 2: Create tuvi-data.js — Core Lookup Tables

**Files:**
- Create: `Makin_money/tuvi-data.js`

This file contains ALL Tu Vi lookup tables that the algorithm needs. Splitting this from natal_chart.html keeps the main file manageable.

- [ ] **Step 1: Add Tử Vi position lookup table**

The table maps (Cục value, lunar day) → branch index. This is the foundation of all star placement.

```js
// tuvi-data.js — Tu Vi Dau So Lookup Tables

/**
 * TU_VI_POS[cucValue][lunarDay] = branch index (0-11)
 * Formula: ceiling(lunarDay / cucValue), mapped to branch
 * Cục values: 2 (Thủy), 3 (Mộc), 4 (Kim), 5 (Thổ), 6 (Hỏa)
 */
const TU_VI_POS = {
  2: { 1:1, 2:2, 3:2, 4:3, 5:3, 6:4, 7:4, 8:5, 9:5, 10:6, 11:6, 12:7, 13:7, 14:8, 15:8, 16:9, 17:9, 18:10, 19:10, 20:11, 21:11, 22:0, 23:0, 24:1, 25:1, 26:2, 27:2, 28:3, 29:3, 30:4 },
  3: { /* ... 30 entries */ },
  4: { /* ... 30 entries */ },
  5: { /* ... 30 entries */ },
  6: { /* ... 30 entries */ },
};
```

The formula is: For Cục value N, Tử Vi position = branch index of `ceiling(lunarDay / N)` mapped into the 12 branches starting from Dần (index 2). Specifically:
- Position = (ceiling(lunarDay / cucValue) + 1) mapped to branch, with specific adjustments for odd/even days per traditional rules.

**IMPORTANT:** The exact table values must be verified against reference Tu Vi software. The formula `ceiling(lunarDay / cucValue)` is an approximation — the actual table has specific entries that don't always follow a simple formula (especially for Thủy Nhị Cục where even/odd days have different rules). Populate all 150 entries (5 Cục × 30 days) from authoritative reference.

- [ ] **Step 2: Add main star offset functions**

```js
/**
 * Given Tử Vi's branch position, derive all other 13 main star positions.
 * Returns: { starName: branchIndex, ... }
 */
function deriveMainStarPositions(tuViPos) {
  const tpPos = (12 - tuViPos) % 12; // Thiên Phủ = mirror of Tử Vi

  return {
    'Tử Vi': tuViPos,
    'Thiên Phủ': tpPos,
    // Stars derived from Tử Vi:
    'Thiên Cơ': (tuViPos + 11) % 12,
    'Thái Dương': (tuViPos + 9) % 12,
    'Vũ Khúc': (tuViPos + 8) % 12,
    'Thiên Đồng': (tuViPos + 7) % 12,
    'Liêm Trinh': (tuViPos + 4) % 12,
    // Stars derived from Thiên Phủ:
    'Thái Âm': (tpPos + 1) % 12,
    'Tham Lang': (tpPos + 2) % 12,
    'Cự Môn': (tpPos + 3) % 12,
    'Thiên Tướng': (tpPos + 4) % 12,
    'Thiên Lương': (tpPos + 5) % 12,
    'Thất Sát': (tpPos + 6) % 12,
    'Phá Quân': (tpPos + 10) % 12,
  };
}
```

- [ ] **Step 3: Add auxiliary star placement tables**

Each auxiliary star has its own deterministic rule. Organize by placement basis:

```js
/**
 * Auxiliary star positions based on birth hour (giờ sinh)
 * AUX_BY_HOUR[starName][hourIndex] = branchIndex
 */
const AUX_BY_HOUR = {
  'Văn Xương': [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11], // Tuất→Hợi counterclockwise
  'Văn Khúc':  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3],  // Thìn→Mão clockwise
  'Địa Không': [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  'Địa Kiếp':  [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

/**
 * Auxiliary stars based on birth month
 * AUX_BY_MONTH[starName][lunarMonth] = branchIndex
 */
const AUX_BY_MONTH = {
  'Tả Phụ':  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3],  // Starting Thìn, clockwise
  'Hữu Bật': [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11],   // Starting Tuất, counterclockwise
};

/**
 * Auxiliary stars based on Thiên Can of birth year
 * AUX_BY_CAN[starName][canIndex] = branchIndex
 */
const AUX_BY_CAN = {
  'Thiên Khôi': [1, 0, 11, 11, 1, 0, 7, 6, 3, 3],   // Varies by Can
  'Thiên Việt': [7, 8, 9, 9, 7, 8, 1, 2, 5, 5],
  'Lộc Tồn':   [2, 3, 5, 6, 5, 6, 8, 9, 11, 0],
  'Kình Dương': [3, 4, 6, 7, 6, 7, 9, 10, 0, 1],     // Lộc Tồn + 1
  'Đà La':     [1, 2, 4, 5, 4, 5, 7, 8, 10, 11],      // Lộc Tồn - 1
};

/**
 * Stars based on birth year's Địa Chi
 * AUX_BY_CHI[starName][chiIndex] = branchIndex
 */
const AUX_BY_CHI = {
  'Thiên Mã':  [2, 11, 8, 5, 2, 11, 8, 5, 2, 11, 8, 5], // Dần/Hợi/Thân/Tỵ cycle
  'Đào Hoa':   [9, 6, 3, 0, 9, 6, 3, 0, 9, 6, 3, 0],
  'Hồng Loan': [3, 2, 1, 0, 11, 10, 9, 8, 7, 6, 5, 4],
  'Thiên Hỉ':  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 10],
  'Cô Thần':   [2, 2, 5, 5, 5, 8, 8, 8, 11, 11, 11, 2],
  'Quả Tú':    [10, 10, 1, 1, 1, 4, 4, 4, 7, 7, 7, 10],
};

/**
 * Hỏa Tinh, Linh Tinh: based on birth year Chi group + birth hour
 * Group: Dần Ngọ Tuất (fire), Thân Tý Thìn (water), Tỵ Dậu Sửu (metal), Hợi Mão Mùi (wood)
 */
const HOA_TINH_START = { fire: 1, water: 2, metal: 1, wood: 9 }; // Starting branch by group
const LINH_TINH_START = { fire: 10, water: 10, metal: 3, wood: 3 };
// Position = (start + hourIndex) % 12 for Hỏa Tinh
// Position = (start + hourIndex) % 12 for Linh Tinh (counterclockwise variant)

function getYearGroup(chiIdx) {
  if ([2, 6, 10].includes(chiIdx)) return 'fire';   // Dần, Ngọ, Tuất
  if ([8, 0, 4].includes(chiIdx)) return 'water';    // Thân, Tý, Thìn
  if ([5, 9, 1].includes(chiIdx)) return 'metal';    // Tỵ, Dậu, Sửu
  return 'wood';                                       // Hợi, Mão, Mùi
}
```

**Note:** The exact values for each auxiliary star table MUST be verified against reference Tu Vi sources. The patterns shown above are the standard Northern school (Bắc Phái) placements. Some values may need adjustment during implementation.

- [ ] **Step 4: Add Tứ Hóa table (by Thiên Can)**

```js
const TU_HOA_TABLE = {
  0: ['Liêm Trinh', 'Phá Quân', 'Vũ Khúc', 'Thái Dương'],     // Giáp
  1: ['Thiên Cơ', 'Thiên Lương', 'Tử Vi', 'Thái Âm'],           // Ất
  2: ['Thiên Đồng', 'Thiên Cơ', 'Văn Xương', 'Liêm Trinh'],     // Bính
  3: ['Thái Âm', 'Thiên Đồng', 'Thiên Cơ', 'Cự Môn'],           // Đinh
  4: ['Tham Lang', 'Thái Âm', 'Hữu Bật', 'Thiên Cơ'],           // Mậu
  5: ['Vũ Khúc', 'Tham Lang', 'Thiên Lương', 'Văn Khúc'],        // Kỷ
  6: ['Thái Dương', 'Vũ Khúc', 'Thái Âm', 'Thiên Đồng'],        // Canh
  7: ['Cự Môn', 'Thái Dương', 'Văn Khúc', 'Văn Xương'],          // Tân
  8: ['Thiên Lương', 'Tử Vi', 'Tả Phụ', 'Vũ Khúc'],             // Nhâm
  9: ['Phá Quân', 'Cự Môn', 'Thái Âm', 'Tham Lang'],             // Quý
};
// Source: Bắc Phái convention
// Index: [Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ]
```

- [ ] **Step 5: Add star brightness table**

```js
/**
 * STAR_BRIGHTNESS_TABLE[starName][branchIndex] = 'Miếu'|'Vượng'|'Đắc'|'Bình'|'Hãm'
 * 14 main stars × 12 branches = 168 entries
 * Source: Standard Bắc Phái brightness table
 */
const STAR_BRIGHTNESS_TABLE = {
  'Tử Vi': ['Hãm','Vượng','Miếu','Đắc','Miếu','Vượng','Miếu','Đắc','Hãm','Bình','Miếu','Vượng'],
  'Thiên Cơ': ['Miếu','Hãm','Miếu','Vượng','Đắc','Bình','Vượng','Hãm','Đắc','Bình','Miếu','Vượng'],
  'Thái Dương': ['Hãm','Hãm','Vượng','Miếu','Miếu','Vượng','Miếu','Đắc','Đắc','Bình','Hãm','Hãm'],
  'Vũ Khúc': ['Miếu','Đắc','Bình','Hãm','Miếu','Hãm','Đắc','Bình','Vượng','Miếu','Miếu','Đắc'],
  'Thiên Đồng': ['Miếu','Hãm','Đắc','Vượng','Hãm','Miếu','Đắc','Hãm','Bình','Vượng','Bình','Hãm'],
  'Liêm Trinh': ['Hãm','Bình','Miếu','Hãm','Miếu','Đắc','Hãm','Bình','Vượng','Đắc','Miếu','Hãm'],
  'Thiên Phủ': ['Miếu','Đắc','Vượng','Bình','Đắc','Miếu','Vượng','Bình','Miếu','Đắc','Vượng','Bình'],
  'Thái Âm': ['Miếu','Vượng','Hãm','Hãm','Hãm','Hãm','Hãm','Đắc','Đắc','Vượng','Miếu','Miếu'],
  'Tham Lang': ['Miếu','Hãm','Bình','Vượng','Miếu','Bình','Hãm','Đắc','Đắc','Hãm','Bình','Vượng'],
  'Cự Môn': ['Miếu','Đắc','Miếu','Vượng','Hãm','Bình','Vượng','Hãm','Đắc','Bình','Miếu','Hãm'],
  'Thiên Tướng': ['Miếu','Bình','Đắc','Bình','Vượng','Hãm','Miếu','Đắc','Vượng','Bình','Đắc','Hãm'],
  'Thiên Lương': ['Miếu','Hãm','Đắc','Vượng','Hãm','Miếu','Vượng','Đắc','Bình','Hãm','Miếu','Đắc'],
  'Thất Sát': ['Miếu','Bình','Miếu','Hãm','Miếu','Đắc','Hãm','Bình','Vượng','Đắc','Vượng','Hãm'],
  'Phá Quân': ['Hãm','Đắc','Vượng','Hãm','Miếu','Bình','Hãm','Đắc','Miếu','Bình','Vượng','Hãm'],
};
// Note: These values MUST be verified against authoritative Tu Vi reference material.
// The values shown are representative of Bắc Phái convention but individual entries
// may need correction during implementation.
```

- [ ] **Step 6: Add Tràng Sinh tables**

```js
const TRANG_SINH_START = {
  'Thủy': 8,  // Thân
  'Mộc': 2,   // Dần
  'Kim': 5,   // Tỵ
  'Thổ': 8,   // Thân
  'Hỏa': 2,   // Dần
};

const TRANG_SINH_PHASES = [
  'Trường Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan', 'Đế Vượng', 'Suy',
  'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng'
];

/**
 * Determine Tràng Sinh direction
 * Dương chart (male+yang year or female+yin year) = clockwise (+1)
 * Âm chart (male+yin year or female+yang year) = counterclockwise (-1)
 */
function getTrangSinhDirection(canIdx, gender) {
  const isYangYear = canIdx % 2 === 0;
  const isMale = gender === 'M';
  return (isMale === isYangYear) ? 1 : -1;
}
```

- [ ] **Step 7: Add Cục derivation (corrected)**

```js
/**
 * Corrected Cục derivation:
 * 1. Get Thiên Can of birth year (canIdx)
 * 2. Get Địa Chi of Mệnh cung (menhBranchIdx)
 * 3. Combine Can + Chi → look up Nạp Âm → get Ngũ Hành → map to Cục
 */
function deriveCuc(canIdx, menhBranchIdx, NAP_AM_TABLE) {
  // The Nạp Âm index comes from the combination of the birth year's Thiên Can
  // and the Mệnh cung's Địa Chi (NOT the birth year's Địa Chi)
  const napAmIdx = (canIdx % 10) + (menhBranchIdx % 12);
  // Adjust to 60-cycle: need to find the 60 Giáp Tý cycle position
  // for the (Thiên Can, Mệnh Địa Chi) pair
  const cycleIdx = ((canIdx % 10) * 12 + menhBranchIdx) % 60;
  // But the Nạp Âm is looked up from the standard 60 Giáp Tý pairs
  // Each pair of consecutive entries shares a Nạp Âm
  const napAm = NAP_AM_TABLE[Math.floor(cycleIdx / 2) % 30] || NAP_AM_TABLE[0];
  const hanh = getNapAmHanh(napAm);
  return { cuc: CUC_MAP[hanh], cucValue: CUC_VALUES[hanh], hanh };
}

const CUC_VALUES = { 'Thủy': 2, 'Mộc': 3, 'Kim': 4, 'Thổ': 5, 'Hỏa': 6 };
```

**Note on Cục derivation:** This is one of the most critical calculations. The spec notes that the current implementation oversimplifies by using birth year Nạp Âm directly. The correct method uses the Thiên Can of the birth year combined with the Địa Chi of the Mệnh cung. This MUST be verified against reference software for the 3 test cases.

- [ ] **Step 8: Commit**

```bash
cd Makin_money
git add tuvi-data.js
git commit -m "feat(tuvi): add core lookup tables (star positions, brightness, Tu Hoa, Trang Sinh)"
```

---

### Task 3: Add Tu Vi Interpretation Data to tuvi-data.js

**Files:**
- Modify: `Makin_money/tuvi-data.js` (append)

- [ ] **Step 1: Add Cách Cục pattern definitions (25-30 patterns)**

```js
const CACH_CUC_PATTERNS = [
  {
    name: 'Tử Phủ Đồng Cung',
    condition: (starPositions) => starPositions['Tử Vi'] === starPositions['Thiên Phủ'],
    vi: 'Cách cục vua quan — Tử Vi và Thiên Phủ đồng cung tạo nên lá số hiếm có, mang quyền lực tự nhiên và phúc đức dày. Người có cách này thường có tầm nhìn xa trông rộng, được người khác kính nể và tín nhiệm.',
    en: 'Emperor Pattern — Tử Vi and Thiên Phủ in the same palace create a rare and powerful chart. Natural leadership combined with steady fortune. People with this pattern command respect and tend to build lasting legacies.',
    rank: 1, // significance ranking
  },
  {
    name: 'Cơ Nguyệt Đồng Lương',
    condition: (sp) => {
      const stars = ['Thiên Cơ', 'Thái Âm', 'Thiên Đồng', 'Thiên Lương'];
      const positions = stars.map(s => sp[s]);
      // Check if all 4 are in a triangle (Tam Hợp) or same palace
      return areInTriangle(positions) || allSame(positions);
    },
    vi: 'Cách cục công chức — Cơ Nguyệt Đồng Lương hội tụ cho thấy người ổn định trong sự nghiệp, thiên về công việc hành chính hoặc giáo dục. Cuộc sống bình an, ít biến động lớn nhưng đều đặn tiến lên.',
    en: 'Civil Servant Pattern — The convergence of these four gentle stars indicates career stability, often in education or administration. Life proceeds steadily without dramatic upheavals.',
    rank: 2,
  },
  {
    name: 'Sát Phá Liêm Tham',
    condition: (sp) => {
      const stars = ['Thất Sát', 'Phá Quân', 'Liêm Trinh', 'Tham Lang'];
      const positions = stars.map(s => sp[s]);
      return areInTriangle(positions) || allSame(positions);
    },
    vi: 'Cách cục võ tướng — Sát Phá Liêm Tham cho thấy người mạnh mẽ, quyết đoán, sẵn sàng đối mặt khó khăn. Cuộc đời nhiều thử thách nhưng thành tựu đến từ chính những lần vượt qua nghịch cảnh.',
    en: 'Warrior Pattern — These four powerful stars create a chart of strength and decisiveness. Life brings real challenges, but achievements come precisely from overcoming adversity.',
    rank: 2,
  },
  {
    name: 'Tam Kỳ Gia Hội',
    condition: (sp, hoaMap) => {
      // Hóa Lộc, Hóa Quyền, Hóa Khoa all in same palace or Tam Hợp
      const locPalace = hoaMap['Lộc'];
      const quyenPalace = hoaMap['Quyền'];
      const khoaPalace = hoaMap['Khoa'];
      return locPalace !== undefined && quyenPalace !== undefined && khoaPalace !== undefined
        && areInTriangle([locPalace, quyenPalace, khoaPalace]);
    },
    vi: 'Tam Kỳ Gia Hội — Ba may mắn (Lộc, Quyền, Khoa) hội tụ. Đây là dấu hiệu cực kỳ thuận lợi, cho thấy giai đoạn vận mệnh hanh thông, tài lộc dồi dào, danh tiếng vang xa.',
    en: 'Three Fortunes Convergence — When Lộc (fortune), Quyền (authority), and Khoa (fame) converge, it signals an extremely auspicious period with abundant opportunities in wealth, power, and recognition.',
    rank: 1,
  },
  // ... 20+ more patterns including:
  // 'Nhật Nguyệt Đồng Lâm' (Thái Dương + Thái Âm)
  // 'Tử Vi Tọa Mệnh' (Tử Vi in Mệnh palace)
  // 'Song Lộc' (Lộc Tồn + Hóa Lộc same palace)
  // 'Tài Ấm Giáp Mệnh' (Thiên Khôi + Thiên Việt flanking Mệnh)
  // 'Xương Khúc Giáp Mệnh' (Văn Xương + Văn Khúc flanking Mệnh)
  // 'Tả Hữu Đồng Cung' (Tả Phụ + Hữu Bật same palace)
  // 'Kình Đà Giáp Mệnh' (Kình Dương + Đà La flanking Mệnh)
  // 'Hỏa Linh Giáp Mệnh' (Hỏa Tinh + Linh Tinh flanking Mệnh)
  // 'Không Kiếp Giáp Mệnh' (Địa Không + Địa Kiếp flanking Mệnh)
  // etc.
];

// Helper: check if positions form a Tam Hợp (trine) in the 12 branches
function areInTriangle(positions) {
  // Tam Hợp groups: [2,6,10], [5,9,1], [8,0,4], [11,3,7]
  const triangles = [[2,6,10],[5,9,1],[8,0,4],[11,3,7]];
  // Check if all positions fall within the same triangle
  // (or are in the same palace)
  // Also check adjacent positions (Tam Phương)
  return triangles.some(t => positions.every(p => t.includes(p)));
}
```

- [ ] **Step 2: Add palace×star interpretation data**

This is the largest data component (~1000-1400 lines). Each of the 12 palaces gets interpretation text for each of the 14 main stars, in both languages.

```js
/**
 * PALACE_STAR_MEANINGS[palaceName][starName] = { vi, en, strengths_vi, strengths_en, challenges_vi, challenges_en }
 * 12 palaces × 14 stars = 168 base entries
 */
const PALACE_STAR_MEANINGS = {
  'Mệnh': {
    'Tử Vi': {
      vi: 'Tử Vi tọa thủ Mệnh cung — bạn mang khí chất đế vương, có phong thái lãnh đạo tự nhiên. Người khác thường tìm đến bạn để xin ý kiến hoặc nhờ dẫn dắt.',
      en: 'Tử Vi in your Destiny palace gives you a natural leadership presence. Others instinctively look to you for guidance and direction.',
      strengths_vi: ['Phong thái uy nghiêm', 'Khả năng quyết đoán', 'Được người khác tín nhiệm'],
      strengths_en: ['Commanding presence', 'Decisive ability', 'Trusted by others'],
      challenges_vi: ['Có thể trở nên độc đoán', 'Kỳ vọng cao đôi khi gây áp lực'],
      challenges_en: ['Can become authoritarian', 'High expectations may create pressure'],
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tọa Mệnh — đầu óc nhanh nhạy, giỏi phân tích và thích ứng. Bạn là người biết tính toán nhiều bước trước.',
      en: 'Thiên Cơ in Destiny — sharp analytical mind with excellent adaptability. You naturally think several steps ahead.',
      strengths_vi: ['Tư duy sắc bén', 'Khả năng thích ứng cao', 'Giỏi lập kế hoạch'],
      strengths_en: ['Sharp thinking', 'High adaptability', 'Excellent planning'],
      challenges_vi: ['Hay thay đổi quyết định', 'Đôi khi thiếu kiên định'],
      challenges_en: ['May change decisions too often', 'Can lack consistency'],
    },
    // ... remaining 12 stars for Mệnh
  },
  'Tài Bạch': {
    'Tử Vi': {
      vi: 'Tử Vi tại Tài Bạch — tài lộc đến từ vị trí lãnh đạo và khả năng quản lý. Tiền bạc thường gắn liền với quyền lực và uy tín.',
      en: 'Tử Vi in Wealth — fortune comes through leadership positions and management ability. Money is tied to authority and reputation.',
      strengths_vi: ['Tài chính ổn định', 'Tiền đến từ vị trí cao'],
      strengths_en: ['Stable finances', 'Income from high positions'],
      challenges_vi: ['Chi tiêu cho thể diện', 'Phụ thuộc vào chức vụ'],
      challenges_en: ['Spending on appearances', 'Income depends on position'],
    },
    // ... remaining stars for Tài Bạch
  },
  // ... remaining 10 palaces
};
```

**Implementation note:** This is 168 entries. Write all 168 with meaningful, distinct interpretations. Each entry should be 1-2 sentences. Avoid generic text — each star-palace combination has specific traditional meaning.

- [ ] **Step 3: Add Đại Hạn interpretation templates**

```js
const DAI_HAN_MEANINGS = {
  'Mệnh': {
    vi: 'Đại Hạn đi qua cung Mệnh — giai đoạn tập trung vào bản thân, định hình lại con người và hướng đi. Các quyết định cá nhân có trọng lượng đặc biệt lớn trong thời kỳ này.',
    en: 'Đại Hạn transits the Destiny palace — a period focused on self-definition and personal direction. Individual choices carry especially heavy weight during this phase.',
  },
  'Tài Bạch': {
    vi: 'Đại Hạn đi qua cung Tài Bạch — tài chính là trọng tâm. Đây là giai đoạn thuận lợi để xây dựng nền tảng tài chính, nhưng cũng cần cẩn trọng với các rủi ro đầu tư.',
    en: 'Đại Hạn transits the Wealth palace — finances take center stage. A favorable period for building financial foundations, but investment risks require careful attention.',
  },
  // ... remaining 10 palaces
};
```

- [ ] **Step 4: Add Tổng Luận synthesis templates**

```js
const TONG_LUAN_TEMPLATES = {
  opening: {
    vi: (cuc, menhPalace, dominantStar) =>
      `Lá số ${cuc}, cung Mệnh tại ${menhPalace}, ${dominantStar} tọa thủ — `,
    en: (cuc, menhPalace, dominantStar) =>
      `A ${cuc} chart with Destiny palace at ${menhPalace}, governed by ${dominantStar} — `,
  },
  cachCuc: {
    vi: (patterns) => patterns.length > 0
      ? `Cách cục chủ đạo: ${patterns[0].name}. ${patterns[0].vi}`
      : 'Lá số không có cách cục đặc biệt nổi bật, thiên về sự ổn định và phát triển từ từ.',
    en: (patterns) => patterns.length > 0
      ? `Dominant pattern: ${patterns[0].name}. ${patterns[0].en}`
      : 'No dominant pattern stands out — the chart favors steady, gradual development.',
  },
  tuHoa: {
    vi: (hoaData) => `Tứ Hóa: Hóa Lộc tại ${hoaData.loc} — tài lộc đến từ ${hoaData.locSource}. Hóa Kỵ tại ${hoaData.ky} — cần chú ý ${hoaData.kyWarning}.`,
    en: (hoaData) => `Four Transformations: Hóa Lộc in ${hoaData.loc} — fortune flows from ${hoaData.locSource}. Hóa Kỵ in ${hoaData.ky} — watch for ${hoaData.kyWarning}.`,
  },
  daiHan: {
    vi: (period, palace) => `Đại Hạn hiện tại (${period}): cung ${palace}. `,
    en: (period, palace) => `Current Đại Hạn (${period}): ${palace} palace. `,
  },
  advice: {
    vi: 'Lời khuyên: ',
    en: 'Guidance: ',
  },
  menhCach: {
    // Labels based on dominant chart character
    patterns: {
      'văn': { vi: 'Mệnh Cách: Văn (Học Thuật)', en: 'Chart Type: Scholar' },
      'võ': { vi: 'Mệnh Cách: Võ (Hành Động)', en: 'Chart Type: Warrior' },
      'tài': { vi: 'Mệnh Cách: Tài (Tài Chính)', en: 'Chart Type: Financier' },
      'phúc': { vi: 'Mệnh Cách: Phúc (Phúc Đức)', en: 'Chart Type: Blessed' },
      'quyền': { vi: 'Mệnh Cách: Quyền (Quyền Lực)', en: 'Chart Type: Authority' },
      'nghệ': { vi: 'Mệnh Cách: Nghệ (Sáng Tạo)', en: 'Chart Type: Creative' },
    },
  },
};
```

- [ ] **Step 5: Add empty palace interpretation templates**

```js
const EMPTY_PALACE_MEANINGS = {
  'Mệnh': {
    vi: 'Cung Mệnh vô chính diệu — mượn sao từ cung Thiên Di (đối cung). Người có Mệnh trống thường linh hoạt, dễ thích nghi nhưng cần thời gian để tìm thấy bản sắc riêng.',
    en: 'Empty Destiny palace — borrows stars from the opposite palace (Travel). People with an empty Mệnh are often flexible and adaptable, but may take time finding their personal identity.',
  },
  // ... remaining 11 palaces
};
```

- [ ] **Step 6: Add Ngũ Hành sinh khắc analysis functions**

```js
const SINH_CYCLE = { 'Mộc': 'Hỏa', 'Hỏa': 'Thổ', 'Thổ': 'Kim', 'Kim': 'Thủy', 'Thủy': 'Mộc' };
const KHAC_CYCLE = { 'Mộc': 'Thổ', 'Thổ': 'Thủy', 'Thủy': 'Hỏa', 'Hỏa': 'Kim', 'Kim': 'Mộc' };

const BRANCH_ELEMENT = [
  'Thủy', 'Thổ', 'Mộc', 'Mộc', 'Thổ', 'Hỏa',
  'Hỏa', 'Thổ', 'Kim', 'Kim', 'Thổ', 'Thủy'
];

function analyzeNguHanh(starElement, palaceElement) {
  if (SINH_CYCLE[starElement] === palaceElement) return 'sinh_out';   // star generates palace
  if (SINH_CYCLE[palaceElement] === starElement) return 'sinh_in';    // palace generates star
  if (KHAC_CYCLE[starElement] === palaceElement) return 'khac_out';   // star overcomes palace
  if (KHAC_CYCLE[palaceElement] === starElement) return 'khac_in';    // palace overcomes star
  if (starElement === palaceElement) return 'same';                    // same element
  return 'neutral';
}

const NGU_HANH_EFFECTS = {
  sinh_out: {
    vi: 'Sao sinh cung — năng lượng sao lan tỏa thuận lợi, nhưng sao bị tiêu hao một phần.',
    en: 'Star generates palace — energy flows favorably outward, though the star expends some power.',
  },
  sinh_in: {
    vi: 'Cung sinh sao — môi trường hỗ trợ sao phát huy hết tiềm năng. Rất thuận lợi.',
    en: 'Palace generates star — the environment nurtures the star to its full potential. Very favorable.',
  },
  khac_out: {
    vi: 'Sao khắc cung — sao áp đảo môi trường, có thể tạo căng thẳng nhưng sao vẫn mạnh.',
    en: 'Star overcomes palace — the star dominates its environment, creating tension but remaining powerful.',
  },
  khac_in: {
    vi: 'Cung khắc sao — môi trường kìm hãm sao, năng lượng sao bị suy giảm đáng kể.',
    en: 'Palace overcomes star — the environment suppresses the star, significantly reducing its energy.',
  },
  same: {
    vi: 'Đồng hành — sao và cung cùng hành, hỗ trợ lẫn nhau. Ổn định và hài hòa.',
    en: 'Same element — star and palace are in harmony, supporting each other. Stable and balanced.',
  },
};
```

- [ ] **Step 7: Commit**

```bash
cd Makin_money
git add tuvi-data.js
git commit -m "feat(tuvi): add interpretation data (Cach Cuc, palace meanings, Dai Han, synthesis)"
```

---

## Phase 2: Tu Vi Algorithm Replacement

### Task 4: Replace generateChart() with Deterministic Algorithm

**Files:**
- Modify: `Makin_money/natal_chart.html` (lines ~706-831)

This is the most critical task — replacing the random star placement with authentic calculation.

- [ ] **Step 1: Add `<script src>` tags for data files**

At the bottom of `<body>`, BEFORE the existing `<script>` block, add:

```html
<script src="lunar-data.js"></script>
<script src="tuvi-data.js"></script>
```

These must load before the main script that uses them.

- [ ] **Step 2: Replace generateChart() — Lunar conversion + Mệnh/Thân**

Replace the function signature and the initial date/Nạp Âm section:

```js
function generateChart(name, dateStr, hour, gender) {
  const d = new Date(dateStr);
  const gYear = d.getFullYear();
  const gMonth = d.getMonth() + 1;
  const gDay = d.getDate();

  // --- Lunar conversion ---
  const lunar = gregorianToLunar(gYear, gMonth, gDay);
  if (!lunar) {
    alert('Ngày sinh ngoài phạm vi hỗ trợ (1900-2100). Vui lòng nhập ngày âm lịch.');
    return null;
  }
  const year = lunar.lunarYear;
  const month = lunar.lunarMonth;
  const day = lunar.lunarDay;

  const canIdx = lunar.canIdx;
  const chiIdx = lunar.chiIdx;
  const thienCan = THIEN_CAN[canIdx];
  const diaChi = BRANCHES[chiIdx].vi;

  // Nạp Âm of birth year
  const napAmIdx = ((canIdx % 10) * 6 + Math.floor(chiIdx / 2)) % 30;
  const napAm = NAP_AM_TABLE[napAmIdx * 2] || NAP_AM_TABLE[0];
  // Note: NAP_AM_TABLE has 60 entries (pairs), so birth year Nạp Âm = TABLE[(year-4)%60]
  const yearNapAmIdx = (year - 4) % 60;
  const yearNapAm = NAP_AM_TABLE[yearNapAmIdx];

  // Âm Dương
  const amDuong = canIdx % 2 === 0 ? 'Dương' : 'Âm';

  // Mệnh cung position (unchanged — uses lunar month + hour)
  const menhPos = computeMenhCung(month, hour);
  const thanPos = computeThanCung(month, hour);

  // --- Corrected Cục derivation ---
  const menhBranchIdx = (menhPos + 2) % 12; // Convert palace index to branch
  // Actually menhPos IS the branch index already based on computeMenhCung
  const cucInfo = deriveCuc(canIdx, menhPos, NAP_AM_TABLE);
  const cuc = cucInfo.cuc;
  const cucValue = cucInfo.cucValue;
  const menhHanh = cucInfo.hanh;
```

**IMPORTANT:** The menhPos calculation and its relationship to branch index needs careful verification. In the current code, `computeMenhCung(month, hour)` returns a branch index directly. Verify this matches the traditional formula: Mệnh cung = Dần position + (month - 1) - (hour index).

- [ ] **Step 3: Replace star placement — Main stars from Tử Vi position**

Remove the Fisher-Yates shuffle. Replace with:

```js
  // --- Deterministic star placement ---
  // Step 1: Tử Vi position from (Cục, lunar day)
  const tuViPos = TU_VI_POS[cucValue]?.[day];
  if (tuViPos === undefined) {
    console.error(`No Tử Vi position for Cục=${cucValue}, day=${day}`);
    return null;
  }

  // Step 2: Derive all 14 main star positions
  const mainStarPositions = deriveMainStarPositions(tuViPos);
```

- [ ] **Step 4: Replace star placement — Auxiliary stars**

Remove the Fisher-Yates shuffle for auxiliary stars. Replace with:

```js
  // Step 3: Place auxiliary stars deterministically
  const auxStarPositions = {};

  // By hour
  Object.entries(AUX_BY_HOUR).forEach(([star, table]) => {
    auxStarPositions[star] = table[hour];
  });

  // By month
  Object.entries(AUX_BY_MONTH).forEach(([star, table]) => {
    auxStarPositions[star] = table[month - 1]; // month is 1-based
  });

  // By Thiên Can
  Object.entries(AUX_BY_CAN).forEach(([star, table]) => {
    auxStarPositions[star] = table[canIdx];
  });

  // By Địa Chi
  Object.entries(AUX_BY_CHI).forEach(([star, table]) => {
    auxStarPositions[star] = table[chiIdx];
  });

  // Hỏa Tinh, Linh Tinh
  const yearGroup = getYearGroup(chiIdx);
  auxStarPositions['Hỏa Tinh'] = (HOA_TINH_START[yearGroup] + hour) % 12;
  auxStarPositions['Linh Tinh'] = (LINH_TINH_START[yearGroup] + hour) % 12;
```

- [ ] **Step 5: Replace Tràng Sinh placement**

```js
  // Step 4: Tràng Sinh cycle
  const trangSinhElement = menhHanh; // Cục element
  const trangSinhStart = TRANG_SINH_START[trangSinhElement];
  const trangSinhDir = getTrangSinhDirection(canIdx, gender);
  const trangSinhPositions = {};
  TRANG_SINH_PHASES.forEach((phase, i) => {
    const pos = ((trangSinhStart + trangSinhDir * i) % 12 + 12) % 12;
    trangSinhPositions[pos] = phase;
  });
```

- [ ] **Step 6: Replace Tứ Hóa assignment**

```js
  // Step 5: Tứ Hóa by Thiên Can
  const tuHoaStars = TU_HOA_TABLE[canIdx];
  const hoaTypes = ['Lộc', 'Quyền', 'Khoa', 'Kỵ'];
  const hoaAssignments = []; // { star, type, palaceIdx }
  tuHoaStars.forEach((starName, i) => {
    // Find which palace this star is in
    const starPos = mainStarPositions[starName] ?? auxStarPositions[starName];
    if (starPos !== undefined) {
      hoaAssignments.push({
        star: starName,
        type: HOA_TYPES[i],
        branchIdx: starPos,
      });
    }
  });
```

- [ ] **Step 7: Build palaceData with deterministic values**

Replace the palace element assignment (currently random) with `BRANCH_ELEMENT`:

```js
  // Build palace data
  const palaceData = [];
  for (let i = 0; i < 12; i++) {
    const branchIdx = (menhPos + 12 - i) % 12;
    const branch = BRANCHES[branchIdx];
    const palace = PALACES[i];
    const el = BRANCH_ELEMENT[branchIdx]; // DETERMINISTIC, not random

    // Collect main stars in this palace
    const mainStars = Object.entries(mainStarPositions)
      .filter(([_, pos]) => {
        // Map star branch position to palace index
        return pos === branchIdx;
      })
      .map(([name]) => name);

    // Collect aux stars
    const auxStars = Object.entries(auxStarPositions)
      .filter(([_, pos]) => pos === branchIdx)
      .map(([name]) => name);

    // Tràng Sinh
    const trangSinh = trangSinhPositions[branchIdx] || null;

    // Hoa in this palace
    const hoa = hoaAssignments
      .filter(h => h.branchIdx === branchIdx)
      .map(h => ({ star: h.star, type: h.type }));

    palaceData.push({
      ...palace, palaceIdx: i, branchIdx, branch, element: el,
      mainStars, auxStars, trangSinh, hoa,
      isMenh: i === 0, isThan: branchIdx === thanPos,
    });
  }
```

- [ ] **Step 8: Fix Đại Hạn starting age**

The current code starts at age 2, which is correct for the traditional system (Vietnamese age counting). Keep this but add the Cục-based starting age:

```js
  // Đại Hạn — starting age based on Cục value
  const daiHanDirection = (gender === 'M')
    ? (canIdx % 2 === 0 ? 1 : -1)
    : (canIdx % 2 === 0 ? -1 : 1);

  palaceData.forEach((p, i) => {
    const offset = daiHanDirection > 0 ? i : (12 - i) % 12;
    const from = cucValue + offset * 10; // Start from Cục value, not fixed 2
    const to = from + 9;
    p.daiHan = `${from}–${to}`;
    p.daiHanFrom = from;
    p.daiHanTo = to;
  });
```

- [ ] **Step 9: Replace getStarBrightness() hash with proper lookup**

```js
function getStarBrightness(starName, branchIdx) {
  const table = STAR_BRIGHTNESS_TABLE[starName];
  if (table) return table[branchIdx] || 'Bình';
  // Fallback for stars not in the main 14
  return 'Bình';
}

// Map full names to abbreviations for display
function getBrightnessAbbr(brightness) {
  const map = { 'Miếu': 'M', 'Vượng': 'V', 'Đắc': 'Đ', 'Bình': 'B', 'Hãm': 'H' };
  return map[brightness] || 'B';
}
```

- [ ] **Step 10: Fix age calculation**

```js
  // Proper age calculation
  const today = new Date();
  const birthDate = new Date(dateStr);
  const age = Math.floor((today - birthDate) / (365.25 * 86400000));
```

- [ ] **Step 11: Return complete chart data**

```js
  return {
    palaceData, menhHanh, thienCan, diaChi, menhPos, thanPos,
    tuanPos1, tuanPos2, trietPos1, trietPos2,
    year, month, day, napAm: yearNapAm, cuc, amDuong,
    menhChu: palaceData[0].mainStars[0] || 'Thiên Tướng',
    lunar, age, cucValue,
    mainStarPositions, auxStarPositions, hoaAssignments,
    trangSinhPositions,
  };
```

- [ ] **Step 12: Verify with test cases**

Open natal_chart.html in browser. Enter test case data:

**Test Case 1:** Male, 1990-02-06, Giờ Dần
- Check console: `Thiên Can = Canh`
- Check Tứ Hóa: `[Thái Dương/Lộc, Vũ Khúc/Quyền, Thái Âm/Khoa, Thiên Đồng/Kỵ]`
- Verify Tử Vi position matches reference

**Test Case 3:** Male, 1985-03-18, Giờ Tý
- Check: `Thiên Can = Ất`
- Check Tứ Hóa: `[Thiên Cơ/Lộc, Thiên Lương/Quyền, Tử Vi/Khoa, Thái Âm/Kỵ]`

- [ ] **Step 13: Commit**

```bash
cd Makin_money
git add natal_chart.html
git commit -m "feat(tuvi): replace random star placement with deterministic algorithm"
```

---

### Task 5: Add Manual Lunar Input & Display

**Files:**
- Modify: `Makin_money/natal_chart.html` (HTML form section + JS)

- [ ] **Step 1: Add manual lunar date checkbox and fields to the form**

After the `bdate` input, add:

```html
<div class="form-group full">
  <label style="display:flex;align-items:center;gap:.5rem;cursor:pointer;">
    <input type="checkbox" id="manualLunar" onchange="toggleManualLunar()">
    <span data-en="I know my lunar birthday" data-vi="Tôi biết ngày âm lịch">Tôi biết ngày âm lịch</span>
  </label>
</div>
<div id="lunarFields" style="display:none;grid-column:1/-1;">
  <div class="form-grid" style="margin-top:.5rem;">
    <div class="form-group">
      <label data-en="Lunar Day" data-vi="Ngày Âm Lịch">Ngày Âm Lịch</label>
      <input type="number" id="lunarDay" min="1" max="30" placeholder="1-30">
    </div>
    <div class="form-group">
      <label data-en="Lunar Month" data-vi="Tháng Âm Lịch">Tháng Âm Lịch</label>
      <input type="number" id="lunarMonth" min="1" max="12" placeholder="1-12">
    </div>
    <div class="form-group">
      <label data-en="Lunar Year" data-vi="Năm Âm Lịch">Năm Âm Lịch</label>
      <input type="number" id="lunarYear" min="1900" max="2100" placeholder="1900-2100">
    </div>
    <div class="form-group">
      <label style="display:flex;align-items:center;gap:.5rem;">
        <input type="checkbox" id="isLeapMonth">
        <span data-en="Leap month" data-vi="Tháng nhuận">Tháng nhuận</span>
      </label>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Add toggleManualLunar() and lunar display**

```js
function toggleManualLunar() {
  const show = document.getElementById('manualLunar').checked;
  document.getElementById('lunarFields').style.display = show ? 'block' : 'none';
  document.getElementById('bdate').required = !show;
}
```

- [ ] **Step 3: Add lunar date display below Gregorian input**

After conversion in generateChart, display:
```js
// Show converted lunar date
const lunarDisplay = document.getElementById('lunarDisplay');
if (lunarDisplay) {
  lunarDisplay.textContent = formatLunarDate(lunar, currentLang);
  lunarDisplay.style.display = 'block';
}
```

Add to HTML: `<p id="lunarDisplay" style="display:none;font-size:.85rem;color:var(--gold);text-align:center;margin-top:.3rem;font-style:italic;"></p>`

- [ ] **Step 4: Commit**

```bash
cd Makin_money
git add natal_chart.html
git commit -m "feat(tuvi): add manual lunar input and lunar date display"
```

---

## Phase 3: Tu Vi Interpretation Engine

### Task 6: Full 12-Palace Interpretation

**Files:**
- Modify: `Makin_money/natal_chart.html` (replace `generateInterpretations()`)

- [ ] **Step 1: Replace generateInterpretations() to cover all 12 palaces**

Currently only interprets 4 palaces (indices 0, 4, 8, 2). Replace:

```js
function generateInterpretations(chartData) {
  const { palaceData, hoaAssignments, mainStarPositions } = chartData;
  const list = document.getElementById('interp-list');
  list.innerHTML = '';
  const isVi = currentLang === 'vi';
  const icons = ['✦','❦','◈','⚝','☆','♦','☽','✧','⚜','☀','♠','♣'];

  palaceData.forEach((p, idx) => {
    const text = buildPalaceInterpretation(p, chartData, isVi);
    const acc = document.createElement('div');
    acc.className = 'accordion';
    acc.innerHTML = `
      <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
        <h3>${icons[idx]} ${p.vi} — ${p.en}</h3>
        <span class="acc-icon">▾</span>
      </div>
      <div class="accordion-body"><div class="accordion-content">${text}</div></div>
    `;
    if (idx === 0) acc.classList.add('open');
    list.appendChild(acc);
  });
}
```

- [ ] **Step 2: Implement buildPalaceInterpretation()**

```js
function buildPalaceInterpretation(palace, chartData, isVi) {
  let text = '';
  const el = palace.element;

  // 1. Palace element context
  text += `<span class="interp-tag">${el} · ${EL_NAMES[el]}</span> `;

  // 2. Main stars interpretation
  if (palace.mainStars.length > 0) {
    palace.mainStars.forEach(starName => {
      const meaning = PALACE_STAR_MEANINGS[palace.vi]?.[starName];
      const brightness = getStarBrightness(starName, palace.branchIdx);

      if (meaning) {
        text += `<strong>${starName}</strong> (${brightness}): `;
        text += isVi ? meaning.vi : meaning.en;
        text += ' ';

        // Brightness modifier
        if (brightness === 'Miếu' || brightness === 'Vượng') {
          text += isVi ? '<em>Sao ở trạng thái sáng — phát huy tối đa năng lực.</em> '
                       : '<em>Star at peak brightness — full positive expression.</em> ';
        } else if (brightness === 'Hãm') {
          text += isVi ? '<em>Sao ở trạng thái hãm — năng lượng bị hạn chế, cần cẩn trọng.</em> '
                       : '<em>Star in detriment — energy is restricted, caution needed.</em> ';
        }
      }

      // Ngũ Hành interaction
      const starEl = STAR_DATA[starName]?.el;
      if (starEl) {
        const interaction = analyzeNguHanh(starEl, el);
        if (interaction !== 'same' && interaction !== 'neutral') {
          const effect = NGU_HANH_EFFECTS[interaction];
          text += isVi ? effect.vi + ' ' : effect.en + ' ';
        }
      }
    });
  } else {
    // Empty palace
    const emptyMeaning = EMPTY_PALACE_MEANINGS[palace.vi];
    if (emptyMeaning) {
      text += isVi ? emptyMeaning.vi + ' ' : emptyMeaning.en + ' ';
    }
    // Tràng Sinh phase
    if (palace.trangSinh) {
      text += isVi
        ? `Tràng Sinh: ${palace.trangSinh}. `
        : `Life Phase: ${palace.trangSinh}. `;
    }
  }

  // 3. Tứ Hóa effects
  palace.hoa.forEach(h => {
    const hoaText = getHoaInterpretation(h.type, palace, isVi);
    if (hoaText) text += hoaText + ' ';
  });

  // 4. Tuần/Triệt effects
  const hasTuan = palace.branchIdx === chartData.tuanPos1 || palace.branchIdx === chartData.tuanPos2;
  const hasTriet = palace.branchIdx === chartData.trietPos1 || palace.branchIdx === chartData.trietPos2;
  if (hasTuan) {
    text += isVi
      ? '<br><span class="khong-vong kv-tuan">Tuần</span> Cung này nằm trong Tuần Không — năng lượng sao bị "rỗng". Sao tốt mất phần phúc lợi, nhưng sao xấu cũng bị giảm tác hại. '
      : '<br><span class="khong-vong kv-tuan">Tuần</span> This palace falls in Tuần (Void) — star energy is "emptied." Benefic stars lose some blessing, but malefic stars also lose their harm. ';
  }
  if (hasTriet) {
    text += isVi
      ? '<br><span class="khong-vong kv-triet">Triệt</span> Cung này bị Triệt — năng lượng sao bị "cắt đứt". Ảnh hưởng mạnh hơn Tuần, đặc biệt trước 30 tuổi. Sao tốt mất phần lớn phúc lợi. '
      : '<br><span class="khong-vong kv-triet">Triệt</span> This palace is under Triệt (Severance) — star energy is "cut off." Stronger effect than Tuần, especially before age 30. Benefic stars lose most of their blessing. ';
  }

  return text;
}
```

- [ ] **Step 3: Commit**

```bash
cd Makin_money
git add natal_chart.html
git commit -m "feat(tuvi): full 12-palace interpretation with brightness, Ngu Hanh, Tuan/Triet"
```

---

### Task 7: Đại Hạn Interpretation + Cách Cục + Tổng Luận

**Files:**
- Modify: `Makin_money/natal_chart.html`

- [ ] **Step 1: Add Đại Hạn interpretation to palace display**

In `renderChart()`, highlight the current Đại Hạn palace and add interpretation:

```js
// In renderChart, after building palace HTML:
const currentDaiHan = palaceData.find(p => chartData.age >= p.daiHanFrom && chartData.age <= p.daiHanTo);
if (currentDaiHan) {
  // Add CSS class to highlight current Đại Hạn palace
  // Add interpretation section below chart
}
```

Add CSS for current Đại Hạn highlight:
```css
.palace.dai-han-current { background: rgba(196,154,60,.12) !important; border: 2px solid var(--gold) !important; }
```

- [ ] **Step 2: Add Cách Cục recognition**

```js
function recognizeCachCuc(chartData) {
  const { mainStarPositions, hoaAssignments } = chartData;
  const hoaMap = {};
  hoaAssignments.forEach(h => {
    hoaMap[h.type.name] = h.branchIdx;
  });

  return CACH_CUC_PATTERNS
    .filter(p => p.condition(mainStarPositions, hoaMap))
    .sort((a, b) => a.rank - b.rank);
}
```

- [ ] **Step 3: Add Tổng Luận synthesis section (HTML)**

After the interpretation area, add:

```html
<div id="tongluan-area" style="display:none;width:100%;max-width:850px;margin-bottom:2.5rem;animation:fadeUp .8s ease .3s both;">
  <div class="divider"><span class="divider-line"></span><span class="divider-sym">✦</span><span class="divider-line"></span></div>
  <p class="interp-title" data-en="Chart Synthesis" data-vi="Tổng Luận Lá Số">Tổng Luận Lá Số</p>
  <div id="tongluan-content" style="background:rgba(225,218,200,.5);border:1px solid rgba(107,82,16,.18);border-radius:6px;padding:1.5rem 1.2rem;line-height:1.9;"></div>
</div>
```

- [ ] **Step 4: Implement generateTongLuan()**

```js
function generateTongLuan(chartData) {
  const isVi = currentLang === 'vi';
  const { palaceData, menhHanh, cuc, thienCan, hoaAssignments, age } = chartData;
  const menhPalace = palaceData[0];
  const dominantStar = menhPalace.mainStars[0] || (isVi ? 'không có chính tinh' : 'no main star');

  // 1. Classical opening
  let text = TONG_LUAN_TEMPLATES.opening[isVi ? 'vi' : 'en'](cuc, menhPalace.branch.vi, dominantStar);

  // 2. Cách Cục
  const patterns = recognizeCachCuc(chartData);
  text += '<br><br><strong>' + (isVi ? '── Cách Cục Chủ Đạo ──' : '── Dominant Pattern ──') + '</strong><br>';
  text += TONG_LUAN_TEMPLATES.cachCuc[isVi ? 'vi' : 'en'](patterns);

  // 3. Tứ Hóa analysis
  text += '<br><br><strong>' + (isVi ? '── Tứ Hóa Tác Động ──' : '── Transformation Analysis ──') + '</strong><br>';
  // Build Tứ Hóa narrative from hoaAssignments
  hoaAssignments.forEach(h => {
    const palace = palaceData.find(p => p.branchIdx === h.branchIdx);
    if (palace) {
      text += isVi
        ? `${h.type.label} đặt tại ${h.star} (cung ${palace.vi}): `
        : `${h.type.label} placed on ${h.star} (${palace.en} palace): `;
      // Add specific meaning based on Hóa type
      text += getHoaInterpretation(h.type, palace, isVi) + ' ';
    }
  });

  // 4. Current Đại Hạn
  const currentDH = palaceData.find(p => age >= p.daiHanFrom && age <= p.daiHanTo);
  if (currentDH) {
    text += '<br><br><strong>' + (isVi ? '── Đại Hạn Hiện Tại ──' : '── Current Period ──') + '</strong><br>';
    text += TONG_LUAN_TEMPLATES.daiHan[isVi ? 'vi' : 'en'](`${currentDH.daiHanFrom}-${currentDH.daiHanTo}`, currentDH.vi);
    const dhMeaning = DAI_HAN_MEANINGS[currentDH.vi];
    if (dhMeaning) text += isVi ? dhMeaning.vi : dhMeaning.en;
  }

  // 5. Actionable guidance
  text += '<br><br><strong>' + (isVi ? '── Lời Khuyên ──' : '── Guidance ──') + '</strong><br>';
  text += generateChartBasedAdvice(chartData, isVi);

  // 6. Mệnh Cách label
  const menhCach = determineMenhCach(chartData);
  text += `<br><br><span style="font-weight:700;color:var(--gold);">${menhCach}</span>`;

  document.getElementById('tongluan-content').innerHTML = text;
  document.getElementById('tongluan-area').style.display = 'block';
}
```

- [ ] **Step 5: Replace generateGuidance() with chart-based version**

Replace random DOS/DONTS with guidance derived from chart data:

```js
function generateGuidance(chartData) {
  const { palaceData, menhHanh, hoaAssignments, age } = chartData;
  const isVi = currentLang === 'vi';
  const menhStars = palaceData[0].mainStars;
  const currentDH = palaceData.find(p => age >= p.daiHanFrom && age <= p.daiHanTo);

  // Derive DO's from: Mệnh stars + Hóa Lộc palace + current Đại Hạn
  const dos = derivePositiveGuidance(menhStars, hoaAssignments, currentDH, isVi);

  // Derive DON'T's from: Hóa Kỵ palace + Hãm stars + Tuần/Triệt
  const donts = deriveCautionGuidance(palaceData, hoaAssignments, chartData, isVi);

  // Render (keep existing HTML structure)
  const container = document.getElementById('guidance-content');
  container.innerHTML = `
    <div class="guidance-card do-card">
      <h3>☀ <span>${isVi ? 'Nên Làm' : 'What You Should Do'}</span></h3>
      <ul>${dos.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
    <div class="guidance-card dont-card">
      <h3>⚠ <span>${isVi ? 'Nên Tránh' : 'What You Should Avoid'}</span></h3>
      <ul>${donts.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
  `;
}
```

- [ ] **Step 6: Wire Tổng Luận into form submit handler**

In the form submit handler, after `generateInterpretations(lastChartData)`, add:
```js
generateTongLuan(lastChartData);
document.getElementById('tongluan-area').style.display = 'block';
```

- [ ] **Step 7: Commit**

```bash
cd Makin_money
git add natal_chart.html
git commit -m "feat(tuvi): add Dai Han interpretation, Cach Cuc recognition, Tong Luan synthesis"
```

---

## Phase 4: Tarot Data Infrastructure

### Task 8: Create tarot-data.js — Reversed Meanings & Interpretation Data

**Files:**
- Create: `Makin_money/tarot-data.js`

- [ ] **Step 1: Add reversed meanings for all 78 cards (English)**

```js
// tarot-data.js — Extended Tarot Interpretation Data

/**
 * REVERSED_MEANINGS[cardId] = { en: "...", vi: "..." }
 * 78 entries covering all Major and Minor Arcana
 */
const REVERSED_MEANINGS = {
  // MAJOR ARCANA
  0: { // The Fool
    en: "Recklessness, fear of the unknown, holding back from a necessary leap. The reversed Fool warns against both foolish risk-taking and paralyzing caution — find the middle ground.",
    vi: "Liều lĩnh, sợ hãi điều chưa biết, do dự trước bước nhảy cần thiết. Fool ngược cảnh báo cả sự mạo hiểm mù quáng lẫn sự thận trọng tê liệt — hãy tìm con đường giữa.",
  },
  1: { // The Magician
    en: "Manipulation, untapped potential, deception. Your tools are available but misused or ignored. The reversed Magician asks: are you wielding your power honestly?",
    vi: "Thao túng, tiềm năng chưa khai phá, lừa dối. Công cụ có sẵn nhưng bị lạm dụng hoặc bỏ quên. Magician ngược hỏi: bạn có đang sử dụng sức mạnh một cách trung thực?",
  },
  // ... all 78 cards
  // Each reversed meaning: 1-2 sentences, distinct from upright, captures
  // blocked/excess energy of the card
};
```

**This is 78 entries.** Each must be distinct from the upright meaning and capture the blocked, excess, or shadow expression of the card's energy. Write all 78.

- [ ] **Step 2: Add Major Arcana position-specific interpretations**

```js
/**
 * MAJOR_POSITION_INTERP[cardId][position] = { en, vi }
 * 22 Major Arcana × 3 positions = 66 entries
 */
const MAJOR_POSITION_INTERP = {
  0: { // The Fool
    past: {
      en: "A leap of faith you took in the past set the foundation for where you are now. That moment of innocent courage — whether it felt wise at the time or not — was essential.",
      vi: "Bước nhảy niềm tin trong quá khứ đã đặt nền móng cho hiện tại. Khoảnh khắc dũng cảm ngây thơ đó — dù lúc ấy có vẻ khôn ngoan hay không — là cần thiết.",
    },
    present: {
      en: "Right now, the universe is asking you to take a fresh leap. The Fool in the present position means a new beginning is not just possible — it's necessary.",
      vi: "Ngay lúc này, vũ trụ đang yêu cầu bạn thực hiện bước nhảy mới. Fool ở vị trí hiện tại có nghĩa một khởi đầu mới không chỉ khả thi — mà còn cần thiết.",
    },
    future: {
      en: "A new chapter is approaching. The Fool in the future position promises fresh beginnings ahead — prepare to step into unknown territory with an open heart.",
      vi: "Một chương mới đang đến. Fool ở vị trí tương lai hứa hẹn khởi đầu mới — hãy chuẩn bị bước vào vùng đất chưa biết với trái tim rộng mở.",
    },
  },
  // ... all 22 Major Arcana
};
```

- [ ] **Step 3: Add position frames for Minor Arcana**

Minor Arcana use templated position framing based on suit + number range:

```js
const POSITION_FRAMES = {
  past: {
    prefix_en: "In your past, this card reveals",
    prefix_vi: "Trong quá khứ, lá bài này cho thấy",
    lens: "completed_event",
  },
  present: {
    prefix_en: "Right now, this card shows",
    prefix_vi: "Hiện tại, lá bài này cho thấy",
    lens: "active_energy",
  },
  future: {
    prefix_en: "Ahead of you, this card points to",
    prefix_vi: "Phía trước, lá bài này hướng tới",
    lens: "emerging_potential",
  },
};

// Number range → phase for Minor Arcana
const MINOR_PHASES = {
  'Ace': 'beginning', '2': 'beginning', '3': 'beginning',
  '4': 'development', '5': 'development', '6': 'development',
  '7': 'challenge', '8': 'challenge', '9': 'challenge',
  '10': 'completion',
  'Page': 'messenger', 'Knight': 'action', 'Queen': 'mastery', 'King': 'authority',
};
```

- [ ] **Step 4: Add element analysis templates**

```js
const SUIT_ELEMENT = {
  'Wands': 'fire', 'Cups': 'water', 'Swords': 'air', 'Pentacles': 'earth',
};

const ELEMENT_NAMES = {
  fire: { en: 'Fire', vi: 'Lửa' },
  water: { en: 'Water', vi: 'Nước' },
  air: { en: 'Air', vi: 'Gió' },
  earth: { en: 'Earth', vi: 'Đất' },
  spirit: { en: 'Spirit', vi: 'Tinh Thần' },
};

const ELEMENT_DOMINANT = {
  fire: {
    en: "Fire dominates your spread — passion, action, and creative force drive this reading. Act boldly.",
    vi: "Lửa chi phối trải bài — đam mê, hành động và sức sáng tạo dẫn dắt bài đọc này. Hãy hành động mạnh dạn.",
  },
  water: {
    en: "Water flows through your reading — emotion, intuition, and relationships take center stage.",
    vi: "Nước chảy qua bài đọc — cảm xúc, trực giác và các mối quan hệ là trọng tâm.",
  },
  air: {
    en: "Air dominates — intellect, communication, and mental clarity are the forces at work.",
    vi: "Gió chi phối — trí tuệ, giao tiếp và sự sáng suốt tinh thần đang hoạt động.",
  },
  earth: {
    en: "Earth grounds your reading — material matters, stability, and practical concerns lead.",
    vi: "Đất làm nền cho bài đọc — vật chất, ổn định và thực tiễn dẫn đường.",
  },
  spirit: {
    en: "The presence of Major Arcana signals cosmic-scale forces beyond everyday concerns.",
    vi: "Sự hiện diện của Major Arcana báo hiệu lực lượng vũ trụ vượt xa những lo toan hàng ngày.",
  },
};

const ELEMENT_MISSING = {
  fire: {
    en: "The absence of Fire suggests a lack of motivation or creative energy. Seek inspiration.",
    vi: "Vắng Lửa cho thấy thiếu động lực hoặc năng lượng sáng tạo. Hãy tìm kiếm cảm hứng.",
  },
  water: {
    en: "The absence of Water suggests emotional needs may be overlooked or suppressed.",
    vi: "Vắng Nước cho thấy nhu cầu cảm xúc có thể bị bỏ qua hoặc kìm nén.",
  },
  air: {
    en: "The absence of Air suggests decisions are being made without enough rational analysis.",
    vi: "Vắng Gió cho thấy các quyết định đang được đưa ra thiếu phân tích lý tính.",
  },
  earth: {
    en: "The absence of Earth suggests practical foundations may be neglected. Ground your plans.",
    vi: "Vắng Đất cho thấy nền tảng thực tế có thể bị bỏ qua. Hãy vững bước.",
  },
};
```

- [ ] **Step 5: Add card interaction patterns (~40 rules + fallbacks)**

```js
const CARD_INTERACTIONS = [
  // Major → Major specific pairs
  {
    condition: (a, b) => a.name === "The Tower" && b.name === "The Star",
    en: "The Tower's destruction clears the way for The Star's healing light — what was broken is being made whole.",
    vi: "Sự sụp đổ của Tháp mở đường cho ánh sáng chữa lành của Ngôi Sao — những gì đã vỡ đang được hàn gắn.",
  },
  {
    condition: (a, b) => a.name === "Death" && b.arcana === "major",
    en: "Death's transformation feeds directly into a major cosmic shift — this is not a small change, it's a complete metamorphosis.",
    vi: "Sự chuyển hóa của Tử Thần dẫn thẳng đến một bước ngoặt lớn — đây không phải thay đổi nhỏ, mà là biến hình hoàn toàn.",
  },
  // ... ~38 more specific patterns

  // Suit-based interactions (catch-all)
  {
    condition: (a, b) => a.suit === "Wands" && b.suit === "Cups",
    en: "The fire of action (Wands) meets the water of emotion (Cups) — passion must now be tempered with feeling.",
    vi: "Lửa hành động (Gậy) gặp nước cảm xúc (Cốc) — đam mê giờ phải được trung hòa với cảm xúc.",
  },
  // ... all suit combinations

  // Number progression (dynamic text)
  {
    condition: (a, b) => a.arcana === "minor" && b.arcana === "minor" && parseInt(b.num) > parseInt(a.num),
    text: (a, b) => ({
      en: `The energy escalates from ${a.num} to ${b.num} — this situation is intensifying.`,
      vi: `Năng lượng tăng từ ${a.num} lên ${b.num} — tình huống đang leo thang.`,
    }),
  },
];

// Fallback: element transitions for unmatched pairs
const ELEMENT_TRANSITIONS = {
  'fire→water': { en: "Fiery momentum gives way to emotional depth — action must now yield to feeling.", vi: "Đà lửa nhường chỗ cho chiều sâu cảm xúc." },
  'fire→earth': { en: "Creative fire seeks grounding — inspiration wants to become something tangible.", vi: "Lửa sáng tạo tìm nền tảng — cảm hứng muốn trở thành hiện thực." },
  'fire→air':   { en: "Passion meets intellect — act on what you believe, but think it through.", vi: "Đam mê gặp trí tuệ — hành động theo niềm tin, nhưng suy nghĩ kỹ." },
  'water→fire': { en: "Emotional depth ignites into action — feelings are becoming fuel for change.", vi: "Chiều sâu cảm xúc bùng cháy thành hành động." },
  'water→earth':{ en: "Emotional currents seek solid ground — feelings want to become real commitments.", vi: "Dòng cảm xúc tìm đất vững — cảm xúc muốn trở thành cam kết thực." },
  'water→air':  { en: "Heart and mind negotiate — emotion seeks rational expression.", vi: "Tim và trí đàm phán — cảm xúc tìm cách diễn đạt lý tính." },
  'earth→fire': { en: "Stable foundations spark creative ambition — security breeds courage.", vi: "Nền tảng vững châm ngòi tham vọng sáng tạo." },
  'earth→water':{ en: "Material stability opens space for emotional exploration.", vi: "Ổn định vật chất mở không gian cho khám phá cảm xúc." },
  'earth→air':  { en: "Practical matters demand intellectual clarity — think before you build.", vi: "Thực tế đòi hỏi sáng suốt trí tuệ — nghĩ trước khi xây." },
  'air→fire':   { en: "Intellectual clarity fuels decisive action — thought becomes deed.", vi: "Sáng suốt trí tuệ tiếp sức hành động quyết đoán." },
  'air→water':  { en: "The mind must now listen to the heart — logic alone cannot answer this.", vi: "Trí óc giờ phải lắng nghe trái tim — logic không đủ đáp." },
  'air→earth':  { en: "Ideas seek manifestation — time to turn thoughts into tangible results.", vi: "Ý tưởng tìm cách hiện thực hóa." },
  'spirit→fire': { en: "A cosmic force channels into passionate action.", vi: "Lực vũ trụ hướng vào hành động đam mê." },
  'spirit→water':{ en: "A cosmic force opens emotional depths.", vi: "Lực vũ trụ mở chiều sâu cảm xúc." },
  'spirit→air':  { en: "A cosmic force illuminates mental clarity.", vi: "Lực vũ trụ soi sáng trí tuệ." },
  'spirit→earth':{ en: "A cosmic force manifests in material reality.", vi: "Lực vũ trụ biểu hiện trong thực tại vật chất." },
  'fire→spirit': { en: "Action triggers a karmic response — larger forces are engaged.", vi: "Hành động kích hoạt phản ứng nghiệp — lực lớn hơn đang tham gia." },
  'water→spirit':{ en: "Emotional depth touches the cosmic — feelings carry spiritual weight.", vi: "Chiều sâu cảm xúc chạm đến vũ trụ." },
  'air→spirit':  { en: "Intellectual pursuit leads to spiritual revelation.", vi: "Theo đuổi trí tuệ dẫn đến mặc khải tâm linh." },
  'earth→spirit':{ en: "Material reality opens a portal to deeper meaning.", vi: "Thực tại vật chất mở cổng đến ý nghĩa sâu hơn." },
};
```

- [ ] **Step 6: Add question model data**

```js
const QUESTION_MODELS = {
  general:  { en: 'General',           vi: 'Tổng Quát',           icon: '✦' },
  problem:  { en: 'Problem Analysis',  vi: 'Phân Tích Vấn Đề',   icon: '🔍' },
  solution: { en: 'Solution / Action', vi: 'Giải Pháp / Hành Động', icon: '💡' },
  crossroads:{ en: 'Crossroads',       vi: 'Ngã Rẽ Cuộc Đời',     icon: '⚡' },
};

const QUESTION_MODEL_OPENINGS = {
  general: {
    en: "The cards have spoken. Here is what the spread reveals about your journey:",
    vi: "Các lá bài đã lên tiếng. Đây là điều trải bài tiết lộ về hành trình của bạn:",
  },
  problem: {
    en: "You asked: what is blocking me? The cards reveal the root of the obstacle:",
    vi: "Bạn hỏi: điều gì đang cản trở tôi? Các lá bài tiết lộ gốc rễ của trở ngại:",
  },
  solution: {
    en: "You asked: what should I do? The cards offer a path of action:",
    vi: "Bạn hỏi: tôi nên làm gì? Các lá bài mở ra con đường hành động:",
  },
  crossroads: {
    en: "You stand at a crossroads. The cards illuminate your options:",
    vi: "Bạn đang ở ngã rẽ. Các lá bài soi sáng các lựa chọn:",
  },
};
```

- [ ] **Step 7: Add synthesis/energy/confidence templates**

```js
const ENERGY_TYPES = {
  transformative: { en: 'Transformative', vi: 'Chuyển Hóa', icon: '🔥' },
  healing:        { en: 'Healing',        vi: 'Chữa Lành',  icon: '💚' },
  challenging:    { en: 'Challenging',    vi: 'Thử Thách',  icon: '⚔️' },
  harmonious:     { en: 'Harmonious',     vi: 'Hài Hòa',    icon: '☯' },
  intense:        { en: 'Intense',        vi: 'Mãnh Liệt',  icon: '⚡' },
};

const CONFIDENCE_LEVELS = {
  high:     { en: 'High',     vi: 'Cao' },
  moderate: { en: 'Moderate', vi: 'Trung Bình' },
  low:      { en: 'Low',      vi: 'Thấp' },
};

const ARCANA_RATIO_TEXT = {
  0: { en: "Your reading is grounded in everyday practical matters. The answers lie in daily actions and choices.", vi: "Bài đọc của bạn nằm trong phạm vi thực tiễn hàng ngày. Câu trả lời nằm ở hành động và lựa chọn thường nhật." },
  1: { en: "One Major Arcana card anchors this reading — it carries the most weight here.", vi: "Một lá Major Arcana là trọng tâm bài đọc — nó mang trọng lượng lớn nhất." },
  2: { en: "Two Major Arcana cards signal powerful forces at work. This situation runs deeper than surface events.", vi: "Hai lá Major Arcana báo hiệu lực lượng mạnh mẽ đang vận hành. Tình huống sâu hơn những sự kiện bề mặt." },
  3: { en: "All three cards are Major Arcana — this is a pivotal moment. Forces larger than yourself are converging.", vi: "Cả ba lá đều là Major Arcana — đây là khoảnh khắc then chốt. Lực lượng lớn hơn bản thân bạn đang hội tụ." },
};
```

- [ ] **Step 8: Commit**

```bash
cd Makin_money
git add tarot-data.js
git commit -m "feat(tarot): add interpretation data (reversed meanings, interactions, elements, models)"
```

---

## Phase 5: Tarot Algorithm & UI

### Task 9: Add Reversed Card Mechanic + Question Model UI

**Files:**
- Modify: `Makin_money/tarot-example.html`

- [ ] **Step 1: Add `<script src>` for tarot-data.js**

Before the main `<script>` block:
```html
<script src="tarot-data.js"></script>
```

- [ ] **Step 2: Add question model buttons to HTML**

After the question input, before the spread label:

```html
<div class="q-models" id="questionModels" style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;margin-top:1rem;">
  <button class="q-model-btn active" data-model="general" onclick="selectQuestionModel('general')">✦ General</button>
  <button class="q-model-btn" data-model="problem" onclick="selectQuestionModel('problem')">🔍 Problem Analysis</button>
  <button class="q-model-btn" data-model="solution" onclick="selectQuestionModel('solution')">💡 Solution / Action</button>
  <button class="q-model-btn" data-model="crossroads" onclick="selectQuestionModel('crossroads')">⚡ Crossroads</button>
</div>
```

Add CSS for question model buttons:
```css
.q-model-btn {
  font-family: 'Cinzel', serif; font-size: .65rem;
  letter-spacing: .15em; text-transform: uppercase;
  padding: .5rem 1rem; border: 1px solid var(--gold-dim);
  background: transparent; color: var(--text-dim);
  cursor: none; border-radius: 3px; transition: all .3s;
}
.q-model-btn:hover { border-color: var(--gold); color: var(--gold); }
.q-model-btn.active { border-color: var(--gold); color: var(--gold); background: rgba(201,168,76,.08); }
```

- [ ] **Step 3: Add reversed card mechanic to shuffleAndDeal()**

```js
let selectedModel = 'general';

function selectQuestionModel(model) {
  selectedModel = model;
  document.querySelectorAll('.q-model-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.model === model);
  });
}

// In shuffleAndDeal(), after drawing 3 cards:
drawnCards = deck.slice(0, 3).map(card => ({
  ...card,
  isReversed: Math.random() < 0.5, // 50% chance reversed
}));
```

- [ ] **Step 4: Add reversed visual treatment CSS**

```css
.card-wrap.reversed .card-front {
  border-color: rgba(150, 120, 180, .55); /* muted purple */
  box-shadow: 0 8px 35px rgba(0,0,0,.6), 0 0 22px rgba(150,120,180,.15);
}
.reversed-badge {
  position: absolute; top: 4px; right: 4px;
  font-size: .5rem; color: rgba(150,120,180,.9);
  background: rgba(150,120,180,.15); padding: .15rem .3rem;
  border-radius: 2px; font-weight: 700; letter-spacing: .05em;
}
.r-reversed-tag {
  font-size: .7rem; color: rgba(150,120,180,.9);
  font-weight: 600; margin-left: .3rem;
}
```

- [ ] **Step 5: Update renderCardFront() for reversed indicator**

```js
function renderCardFront(cf, card) {
  const d = currentLang === 'vi' ? DECK_VI[card.id] : card;
  const suitDisplay = card.arcana === 'major' ? card.num : (currentLang === 'vi' ? card.suit : d.suit);
  cf.style.background = `linear-gradient(155deg,${card.col[0]} 0%,${card.col[1]} 60%,${card.col[0]} 100%)`;

  const reversedBadge = card.isReversed
    ? '<div class="reversed-badge">↓ R</div>'
    : '';

  cf.innerHTML = `
    <div class="cf-inner">
      ${reversedBadge}
      <div class="cf-orn">✦ · ✦</div>
      <div class="cf-num">${suitDisplay}</div>
      <div class="cf-sym">${card.sym}</div>
      <div class="cf-name">${card.name}</div>
      <div class="cf-kw">${d.kw.join(' · ')}</div>
      <div class="cf-orn">✦ · ✦</div>
    </div>`;
}
```

- [ ] **Step 6: Commit**

```bash
cd Makin_money
git add tarot-example.html
git commit -m "feat(tarot): add reversed card mechanic and question model UI"
```

---

### Task 10: Replace showReading() and generateConclusion() with Synthesis Engine

**Files:**
- Modify: `Makin_money/tarot-example.html`

- [ ] **Step 1: Rewrite showReading() with position-specific interpretation**

```js
function showReading() {
  const panel = document.getElementById('readingPanel');
  const isVi = currentLang === 'vi';
  const positions = ['past', 'present', 'future'];

  document.getElementById('cardReadings').innerHTML = drawnCards.map((card, i) => {
    const d = isVi ? DECK_VI[card.id] : card;
    const pos = positions[i];

    // Get the right meaning (upright or reversed)
    let meaning;
    if (card.isReversed && REVERSED_MEANINGS[card.id]) {
      meaning = isVi ? REVERSED_MEANINGS[card.id].vi : REVERSED_MEANINGS[card.id].en;
    } else {
      meaning = d.meaning;
    }

    // Position-specific interpretation
    let posInterp = '';
    if (card.arcana === 'major' && MAJOR_POSITION_INTERP[card.id]?.[pos]) {
      posInterp = isVi
        ? MAJOR_POSITION_INTERP[card.id][pos].vi
        : MAJOR_POSITION_INTERP[card.id][pos].en;
    } else {
      // Minor Arcana: use templated framing
      const frame = POSITION_FRAMES[pos];
      posInterp = isVi ? frame.prefix_vi : frame.prefix_en;
      posInterp += ' ' + meaning;
      meaning = ''; // Don't repeat
    }

    const reversedTag = card.isReversed
      ? `<span class="r-reversed-tag">(${isVi ? 'Ngược' : 'Reversed'})</span>`
      : '';

    return `
    <div class="card-reading" style="animation-delay:${i*.18}s">
      <div class="r-pos">${T.positions[i]}</div>
      <div class="r-sym">${card.sym}</div>
      <div class="r-name">${card.name}${reversedTag}</div>
      <div class="r-kw">${d.kw.join(' · ')}</div>
      <div class="r-meaning">${posInterp}${meaning ? '<br><br>' + meaning : ''}</div>
    </div>`;
  }).join('');

  panel.classList.add('visible');
  generateConclusion();
  setTimeout(() => panel.scrollIntoView({ behavior:'smooth', block:'start' }), 250);
}
```

- [ ] **Step 2: Implement element analysis function**

```js
function analyzeElements(cards) {
  const elements = { fire: 0, water: 0, air: 0, earth: 0, spirit: 0 };
  cards.forEach(c => {
    if (c.arcana === 'major') elements.spirit++;
    else if (SUIT_ELEMENT[c.suit]) elements[SUIT_ELEMENT[c.suit]]++;
  });

  const dominant = Object.entries(elements)
    .filter(([k, v]) => v >= 2 && k !== 'spirit');
  const missing = ['fire', 'water', 'air', 'earth']
    .filter(e => elements[e] === 0);
  const majorCount = elements.spirit;

  return { elements, dominant, missing, majorCount };
}
```

- [ ] **Step 3: Implement card interaction finder**

```js
function findInteraction(cardA, cardB) {
  // Check specific patterns first
  for (const pattern of CARD_INTERACTIONS) {
    if (pattern.condition(cardA, cardB)) {
      if (pattern.text) return pattern.text(cardA, cardB); // dynamic
      return { en: pattern.en, vi: pattern.vi }; // static
    }
  }

  // Fallback: element transition
  const elA = cardA.arcana === 'major' ? 'spirit' : SUIT_ELEMENT[cardA.suit];
  const elB = cardB.arcana === 'major' ? 'spirit' : SUIT_ELEMENT[cardB.suit];
  const key = `${elA}→${elB}`;
  return ELEMENT_TRANSITIONS[key] || null;
}
```

- [ ] **Step 4: Implement energy and confidence determination**

```js
function determineEnergy(cards, elementAnalysis) {
  const names = cards.map(c => c.name);
  const reversedCount = cards.filter(c => c.isReversed).length;

  if (names.some(n => ['Death','The Tower','Wheel of Fortune'].includes(n))) return 'transformative';
  if (names.some(n => ['The Star','Temperance'].includes(n)) || elementAnalysis.dominant.some(([e]) => e === 'water')) return 'healing';
  if (reversedCount >= 2 || elementAnalysis.dominant.some(([e]) => e === 'air')) return 'challenging';
  if (elementAnalysis.majorCount >= 2) return 'intense';
  return 'harmonious';
}

function determineConfidence(cards, elementAnalysis) {
  // Coherent story = matching elements, progressive numbers
  const sameElement = cards.filter(c => c.arcana !== 'major').every((c, i, arr) =>
    i === 0 || c.suit === arr[0].suit
  );
  const reversedFuture = cards[2]?.isReversed;

  if (sameElement && !reversedFuture) return 'high';
  if (reversedFuture && cards.slice(0,2).every(c => !c.isReversed)) return 'low';
  return 'moderate';
}
```

- [ ] **Step 5: Replace generateConclusion() with multi-section synthesis**

```js
function generateConclusion() {
  const area = document.getElementById('conclusionArea');
  const box = document.getElementById('conclusionBox');
  const isVi = currentLang === 'vi';

  // 1. Element analysis
  const elemAnalysis = analyzeElements(drawnCards);

  // 2. Card interactions
  const interaction01 = findInteraction(drawnCards[0], drawnCards[1]); // Past→Present
  const interaction12 = findInteraction(drawnCards[1], drawnCards[2]); // Present→Future

  // 3. Energy and confidence
  const energy = determineEnergy(drawnCards, elemAnalysis);
  const confidence = determineConfidence(drawnCards, elemAnalysis);

  // 4. Build synthesis sections

  // Section: Mystical Opening (question-model aware)
  const opening = QUESTION_MODEL_OPENINGS[selectedModel];
  let openingText = isVi ? opening.vi : opening.en;

  // Section: The Thread (narrative arc using interactions)
  let threadText = '';
  if (interaction01) {
    threadText += isVi ? interaction01.vi : interaction01.en;
    threadText += ' ';
  }
  if (interaction12) {
    threadText += isVi ? interaction12.vi : interaction12.en;
  }
  if (!threadText) {
    // Generic narrative fallback
    threadText = isVi
      ? `Từ ${drawnCards[0].name} qua ${drawnCards[1].name} đến ${drawnCards[2].name} — có một dòng chảy năng lượng đang vận hành.`
      : `From ${drawnCards[0].name} through ${drawnCards[1].name} to ${drawnCards[2].name} — an energy current is flowing.`;
  }

  // Section: Elements
  let elemText = '';
  if (elemAnalysis.dominant.length > 0) {
    elemAnalysis.dominant.forEach(([el]) => {
      elemText += isVi ? ELEMENT_DOMINANT[el].vi : ELEMENT_DOMINANT[el].en;
      elemText += ' ';
    });
  }
  if (elemAnalysis.missing.length > 0) {
    elemAnalysis.missing.forEach(el => {
      elemText += isVi ? ELEMENT_MISSING[el].vi : ELEMENT_MISSING[el].en;
      elemText += ' ';
    });
  }
  // Arcana ratio
  const ratioText = ARCANA_RATIO_TEXT[elemAnalysis.majorCount];
  elemText += isVi ? ratioText.vi : ratioText.en;

  // Section: Path Forward (actionable steps)
  const futureCard = drawnCards[2];
  const actionSteps = generateActionSteps(futureCard, selectedModel, isVi);

  // Energy and confidence labels
  const energyInfo = ENERGY_TYPES[energy];
  const confInfo = CONFIDENCE_LEVELS[confidence];

  // Render
  box.innerHTML = `
    <div class="conclusion-title">${isVi ? '☽ Thông Điệp Từ Các Lá Bài ☽' : '☽ The Reading Speaks ☽'}</div>
    <p class="conclusion-text" style="margin-bottom:1rem;">${openingText}</p>

    <div style="text-align:left;max-width:600px;margin:0 auto;">
      <p style="font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal-bright);margin-bottom:.4rem;">
        ${isVi ? '── Sợi Chỉ Xuyên Suốt ──' : '── The Thread ──'}
      </p>
      <p class="conclusion-text" style="text-align:left;">${threadText}</p>

      <p style="font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--teal-bright);margin:1rem 0 .4rem;">
        ${isVi ? '── Nguyên Tố ──' : '── The Elements ──'}
      </p>
      <p class="conclusion-text" style="text-align:left;">${elemText}</p>
    </div>

    <div class="conclusion-advice">
      <h4>${isVi ? 'Con Đường Phía Trước' : 'Your Path Forward'}</h4>
      <ul>${actionSteps.map(a => `<li>${a}</li>`).join('')}</ul>
    </div>

    <div style="display:flex;gap:1.5rem;justify-content:center;margin-top:1.2rem;font-size:.78rem;">
      <span style="color:var(--ember);">${energyInfo.icon} ${isVi ? 'Năng lượng' : 'Energy'}: ${isVi ? energyInfo.vi : energyInfo.en}</span>
      <span style="color:var(--teal-bright);">🎯 ${isVi ? 'Độ tin cậy' : 'Confidence'}: ${isVi ? confInfo.vi : confInfo.en}</span>
    </div>
  `;
  area.style.display = 'block';
}
```

- [ ] **Step 6: Implement generateActionSteps()**

```js
function generateActionSteps(futureCard, model, isVi) {
  // Generate 2 actionable steps based on future card + question model
  const steps = [];

  // Step 1: Based on future card
  if (futureCard.isReversed) {
    steps.push(isVi
      ? `Nhận diện và giải phóng năng lượng bị chặn từ ${futureCard.name} — điều gì đang giữ bạn lại?`
      : `Recognize and release the blocked energy of ${futureCard.name} — what is holding you back?`
    );
  } else {
    steps.push(isVi
      ? `Đón nhận năng lượng của ${futureCard.name} — hãy hành động theo hướng dẫn này trong tuần tới.`
      : `Embrace the energy of ${futureCard.name} — take concrete action aligned with this guidance this week.`
    );
  }

  // Step 2: Based on question model
  const modelSteps = {
    general: {
      en: 'Journal about which card resonated most strongly — that is where your attention should focus.',
      vi: 'Viết nhật ký về lá bài nào cộng hưởng mạnh nhất — đó là nơi bạn cần tập trung.',
    },
    problem: {
      en: 'Identify one concrete action you can take THIS WEEK to address what the Present card revealed.',
      vi: 'Xác định MỘT hành động cụ thể bạn có thể làm TUẦN NÀY để giải quyết điều lá Hiện Tại tiết lộ.',
    },
    solution: {
      en: 'The Future card suggests your next move — commit to it within 48 hours while the energy is fresh.',
      vi: 'Lá Tương Lai gợi ý bước tiếp theo — cam kết thực hiện trong 48 giờ khi năng lượng còn tươi.',
    },
    crossroads: {
      en: 'Compare the Past and Future cards — one represents the familiar path, the other the new. Which calls louder?',
      vi: 'So sánh lá Quá Khứ và Tương Lai — một đại diện con đường quen, một con đường mới. Cái nào gọi to hơn?',
    },
  };
  steps.push(isVi ? modelSteps[model].vi : modelSteps[model].en);

  return steps;
}
```

- [ ] **Step 7: Update question model labels on language toggle**

In `applyLang()`, add:
```js
document.querySelectorAll('.q-model-btn').forEach(btn => {
  const model = btn.dataset.model;
  const data = QUESTION_MODELS[model];
  btn.textContent = `${data.icon} ${currentLang === 'vi' ? data.vi : data.en}`;
});
```

- [ ] **Step 8: Verify in browser**

Open tarot-example.html:
1. Select "Problem Analysis" model → Shuffle → Flip all 3 → Check conclusion uses problem framing
2. Verify reversed cards show purple border + "↓ R" badge + "(Reversed)" in reading
3. Check element analysis section appears in conclusion
4. Check card interactions section connects the narrative
5. Toggle Vietnamese — verify all new text switches

- [ ] **Step 9: Commit**

```bash
cd Makin_money
git add tarot-example.html
git commit -m "feat(tarot): replace synthesis engine with multi-section analysis (elements, interactions, models)"
```

---

## Phase 6: Final Integration & Validation

### Task 11: End-to-End Validation

**Files:**
- Read: All modified files (verify no regressions)

- [ ] **Step 1: Tu Vi Test Case 1 validation**

Open natal_chart.html → Enter: Male, 1990-02-06, Giờ Dần
- [ ] Lunar conversion shows: Canh Ngọ, tháng 1, ngày 11
- [ ] Thiên Can = Canh
- [ ] Tứ Hóa = [Thái Dương/Lộc, Vũ Khúc/Quyền, Thái Âm/Khoa, Thiên Đồng/Kỵ]
- [ ] Star positions are deterministic (refresh = same chart)
- [ ] All 12 palaces have interpretations
- [ ] Tổng Luận section appears with synthesis

- [ ] **Step 2: Tu Vi Test Case 3 validation**

Open natal_chart.html → Enter: Male, 1985-03-18, Giờ Tý
- [ ] Thiên Can = Ất
- [ ] Tứ Hóa = [Thiên Cơ/Lộc, Thiên Lương/Quyền, Tử Vi/Khoa, Thái Âm/Kỵ]

- [ ] **Step 3: Tu Vi determinism test**

Enter same data twice → both charts must be identical

- [ ] **Step 4: Tarot full flow test**

Open tarot-example.html:
- [ ] Question model buttons appear and switch on click
- [ ] Shuffle → 3 cards dealt, some reversed (purple border + badge)
- [ ] Flip all 3 → reading panel shows position-specific interpretation
- [ ] Conclusion has: opening, thread, elements, path forward, energy, confidence
- [ ] Toggle Vietnamese → all text switches correctly
- [ ] New Reading → resets cleanly

- [ ] **Step 5: Bilingual consistency check**

- [ ] Toggle Tu Vi to English → all interpretations, guidance, Tổng Luận switch
- [ ] Toggle Tarot to Vietnamese → all new sections switch
- [ ] No untranslated strings visible

- [ ] **Step 6: Final commit**

```bash
cd Makin_money
git add -A
git commit -m "feat: complete Tarot & Tu Vi system improvements — deterministic algorithms, deep interpretation"
```

---

## Summary

| Phase | Tasks | Key Deliverable |
|-------|-------|----------------|
| 1: Tu Vi Data | 1-3 | lunar-data.js, tuvi-data.js with all lookup tables |
| 2: Tu Vi Algorithm | 4-5 | Deterministic generateChart(), lunar input UI |
| 3: Tu Vi Interpretation | 6-7 | 12-palace interp, Cách Cục, Đại Hạn, Tổng Luận |
| 4: Tarot Data | 8 | tarot-data.js with reversed meanings, interactions |
| 5: Tarot Algorithm | 9-10 | Reversed mechanic, question models, synthesis engine |
| 6: Validation | 11 | End-to-end verification with test cases |

**Total new files:** 3 (lunar-data.js, tuvi-data.js, tarot-data.js)
**Total modified files:** 2 (natal_chart.html, tarot-example.html)
**Estimated new code:** ~4,500-6,000 lines

---

## Addendum: Review Fixes

The following fixes address critical and important issues found during plan review.

### Fix 1: LUNAR_INFO Data Source (Critical)

The `LUNAR_INFO` hex table in Task 1 Step 1 must contain all 201 entries (1900-2100). The implementer should use the **well-established Chinese/Vietnamese lunar calendar dataset** from this specific reference:

**Primary source:** The JavaScript lunar calendar library at `https://github.com/nicktran/viet-lunar` (Vietnamese fork) or the original dataset from `https://github.com/nicktaio/chinese-lunar-calendar`. The hex encoding format is:

```
Bits 0-3:   leap month (0=none, 1-12)
Bits 4-15:  month lengths (bit 4 = month 1, bit 15 = month 12; 1=30 days, 0=29 days)
Bit 16:     leap month length (0=29, 1=30)
```

**Fallback approach:** If these repos are unavailable, the implementer should use the `LunarCalendar` npm package data (extract the internal table) or the dataset from `lichvannien.net`'s JavaScript source (inspect their calendar page, the hex table is in the inline JS).

**Validation:** After populating the table, verify these known conversions:
- 1990-02-06 → Lunar: tháng 1, ngày 11, Canh Ngọ
- 2000-02-05 → Lunar: tháng 1, ngày 1, Canh Thìn (Lunar New Year)
- 2025-01-29 → Lunar: tháng 1, ngày 1, Ất Tỵ (Lunar New Year 2025)
- 1985-03-18 → Verify against laso.vn
- 2000-08-15 → Verify against laso.vn

If any conversion fails, the table has errors for that year and must be corrected.

### Fix 2: TU_VI_POS Programmatic Generation (Critical)

Instead of hardcoding 150 entries, generate the table programmatically using the standard formula. The TU_VI_POS table follows this rule:

```js
/**
 * Generate TU_VI_POS table programmatically.
 * Rule: For a given Cục value N and lunar day D:
 *   position = branch index where Tử Vi sits
 *
 * The standard formula (Bắc Phái):
 *   For Cục value N:
 *     Group = ceil(D / N) — which "group" of N days this falls in
 *     If D is exactly divisible by N: position stays at the group's base
 *     If D has remainder R: position shifts by R
 *
 * Simplified: Tử Vi branch = (ceil(D / N) - 1 + offset_by_remainder) mapped to branches
 *
 * The mapping follows: starting from Dần (index 2), count forward by 1
 * for each group, with sub-steps for each day within a group.
 *
 * CRITICAL: This formula is approximate. The implementer MUST verify
 * the full table against tuvi.vn or laso.vn for at least 10 representative
 * (Cục, day) pairs per Cục value. Known deviations exist for Thủy Nhị Cục
 * where odd days follow a different step pattern.
 */
function generateTuViPosTable() {
  const table = {};
  [2, 3, 4, 5, 6].forEach(cucValue => {
    table[cucValue] = {};
    for (let day = 1; day <= 30; day++) {
      // Standard formula: position = ceiling(day / cucValue)
      // Then map to branch: position 1 → Dần (2), position 2 → Mão (3), etc.
      const group = Math.ceil(day / cucValue);
      const branchIdx = (group + 1) % 12; // +1 because position 1 → Dần (index 2), but 0-indexed
      table[cucValue][day] = branchIdx;
    }
  });
  return table;
}
// IMPORTANT: After generation, manually verify against reference software
// and hardcode corrections for any discrepancies.
```

### Fix 3: Missing Function Definitions (Critical)

The following functions are called in Tasks 6-7 but never defined. Add them to `natal_chart.html`:

```js
/**
 * Get interpretation text for a Tứ Hóa effect on a palace.
 */
function getHoaInterpretation(hoaType, palace, isVi) {
  const hoaTexts = {
    'Lộc': {
      vi: `Hóa Lộc chiếu vào cung ${palace.vi} — tài lộc và cơ hội thuận lợi ở lĩnh vực này. Nguồn lực đến dễ dàng hơn bình thường.`,
      en: `Hóa Lộc illuminates the ${palace.en} palace — fortune and opportunity flow favorably here. Resources come more easily than usual.`,
    },
    'Quyền': {
      vi: `Hóa Quyền tại cung ${palace.vi} — khả năng kiểm soát và ra quyết định mạnh mẽ trong lĩnh vực này.`,
      en: `Hóa Quyền in the ${palace.en} palace — strong capacity for taking charge and making decisions in this area.`,
    },
    'Khoa': {
      vi: `Hóa Khoa tại cung ${palace.vi} — danh tiếng và sự công nhận thuận lợi. Nỗ lực được đánh giá cao.`,
      en: `Hóa Khoa in the ${palace.en} palace — reputation and recognition are favorable. Efforts are appreciated.`,
    },
    'Kỵ': {
      vi: `Hóa Kỵ tại cung ${palace.vi} — lĩnh vực này có trở ngại và ma sát. Nhưng khó khăn cũng là chất xúc tác trưởng thành.`,
      en: `Hóa Kỵ in the ${palace.en} palace — this area brings friction and obstacles. But difficulties also catalyze growth.`,
    },
  };
  const text = hoaTexts[hoaType.name];
  return text ? (isVi ? text.vi : text.en) : '';
}

/**
 * Generate chart-based advice for Tổng Luận.
 */
function generateChartBasedAdvice(chartData, isVi) {
  const { palaceData, hoaAssignments, menhHanh, age } = chartData;
  const menhStars = palaceData[0].mainStars;
  const currentDH = palaceData.find(p => age >= p.daiHanFrom && age <= p.daiHanTo);
  const advice = [];

  // Advice from Mệnh palace stars
  if (menhStars.includes('Tử Vi') || menhStars.includes('Thiên Phủ')) {
    advice.push(isVi
      ? 'Phát huy khả năng lãnh đạo tự nhiên — đừng ngại đảm nhận vai trò dẫn dắt.'
      : 'Leverage your natural leadership — don\'t hesitate to take on guiding roles.');
  } else if (menhStars.includes('Thiên Cơ') || menhStars.includes('Thiên Lương')) {
    advice.push(isVi
      ? 'Đầu tư vào học vấn và tư duy chiến lược — đó là thế mạnh cốt lõi của bạn.'
      : 'Invest in education and strategic thinking — that is your core strength.');
  } else {
    advice.push(isVi
      ? 'Tập trung phát triển kỹ năng cốt lõi phù hợp với đặc trưng lá số.'
      : 'Focus on developing core skills aligned with your chart\'s character.');
  }

  // Advice from Hóa Kỵ (challenge area)
  const hoaKy = hoaAssignments.find(h => h.type.name === 'Kỵ');
  if (hoaKy) {
    const kyPalace = palaceData.find(p => p.branchIdx === hoaKy.branchIdx);
    if (kyPalace) {
      advice.push(isVi
        ? `Chú ý cung ${kyPalace.vi} — Hóa Kỵ đặt thử thách ở đây. Kiên nhẫn và cẩn trọng.`
        : `Pay attention to ${kyPalace.en} — Hóa Kỵ places challenges here. Be patient and cautious.`);
    }
  }

  // Advice from current Đại Hạn
  if (currentDH) {
    advice.push(isVi
      ? `Trong Đại Hạn hiện tại tại cung ${currentDH.vi}, hãy tập trung vào lĩnh vực này.`
      : `During your current Đại Hạn in ${currentDH.en}, focus your energy on this life area.`);
  }

  return advice.map(a => `<li style="margin-bottom:.3rem;">${a}</li>`).join('');
}

/**
 * Derive positive guidance from chart data (replaces random DOS).
 */
function derivePositiveGuidance(menhStars, hoaAssignments, currentDH, isVi) {
  const guidance = [];

  // From Mệnh stars
  const starAdvice = {
    'Tử Vi':     { vi: 'Đảm nhận vai trò lãnh đạo khi có cơ hội', en: 'Take on leadership roles when opportunities arise' },
    'Thiên Cơ':  { vi: 'Lập kế hoạch dài hạn và phân tích tình hình', en: 'Make long-term plans and analyze situations carefully' },
    'Thái Dương':{ vi: 'Mở rộng mạng lưới quan hệ công khai', en: 'Expand your public network and visibility' },
    'Vũ Khúc':   { vi: 'Tập trung quản lý tài chính và đầu tư', en: 'Focus on financial management and investment' },
    'Thiên Đồng':{ vi: 'Nuôi dưỡng các mối quan hệ hài hòa', en: 'Nurture harmonious relationships' },
    'Liêm Trinh':{ vi: 'Theo đuổi mục tiêu với kỷ luật cao', en: 'Pursue goals with high discipline' },
    'Thiên Phủ': { vi: 'Xây dựng nền tảng tài chính vững chắc', en: 'Build solid financial foundations' },
    'Thái Âm':   { vi: 'Tin tưởng trực giác và phát triển nội tâm', en: 'Trust your intuition and develop inner wisdom' },
    'Tham Lang':  { vi: 'Khám phá trải nghiệm mới và phát triển bản thân', en: 'Explore new experiences and personal growth' },
    'Cự Môn':    { vi: 'Phát huy khả năng giao tiếp và thuyết phục', en: 'Leverage your communication and persuasion skills' },
    'Thiên Tướng':{ vi: 'Giúp đỡ người khác — phúc đức được nhân lên', en: 'Help others — your blessings multiply' },
    'Thiên Lương':{ vi: 'Chia sẻ kiến thức và hướng dẫn người khác', en: 'Share knowledge and guide others' },
    'Thất Sát':  { vi: 'Đối mặt thử thách trực diện — bạn mạnh nhất khi chịu áp lực', en: 'Face challenges head-on — you are strongest under pressure' },
    'Phá Quân':  { vi: 'Sẵn sàng thay đổi những gì không còn hiệu quả', en: 'Be ready to change what no longer works' },
  };

  menhStars.forEach(star => {
    if (starAdvice[star]) {
      guidance.push(isVi ? starAdvice[star].vi : starAdvice[star].en);
    }
  });

  // From Hóa Lộc
  const hoaLoc = hoaAssignments.find(h => h.type.name === 'Lộc');
  if (hoaLoc) {
    guidance.push(isVi
      ? `Tận dụng năng lượng Hóa Lộc — tài lộc đang thuận lợi qua ${hoaLoc.star}`
      : `Leverage Hóa Lộc energy — fortune flows favorably through ${hoaLoc.star}`);
  }

  // Ensure at least 3 items
  while (guidance.length < 3) {
    guidance.push(isVi ? 'Dành thời gian suy ngẫm và đặt mục tiêu rõ ràng' : 'Take time to reflect and set clear goals');
  }

  return guidance.slice(0, 4);
}

/**
 * Derive caution guidance from chart data (replaces random DONTs).
 */
function deriveCautionGuidance(palaceData, hoaAssignments, chartData, isVi) {
  const cautions = [];

  // From Hóa Kỵ
  const hoaKy = hoaAssignments.find(h => h.type.name === 'Kỵ');
  if (hoaKy) {
    const kyPalace = palaceData.find(p => p.branchIdx === hoaKy.branchIdx);
    if (kyPalace) {
      cautions.push(isVi
        ? `Cẩn thận với lĩnh vực ${kyPalace.vi} — Hóa Kỵ mang trở ngại`
        : `Be cautious in ${kyPalace.en} matters — Hóa Kỵ brings friction`);
    }
  }

  // From Hãm stars in Mệnh
  const menhPalace = palaceData[0];
  menhPalace.mainStars.forEach(star => {
    const brightness = getStarBrightness(star, menhPalace.branchIdx);
    if (brightness === 'Hãm') {
      cautions.push(isVi
        ? `${star} đang Hãm — kiểm soát xu hướng tiêu cực của sao này`
        : `${star} is in detriment — manage the negative tendencies of this star`);
    }
  });

  // From Tuần/Triệt
  const { tuanPos1, tuanPos2, trietPos1, trietPos2 } = chartData;
  if (menhPalace.branchIdx === tuanPos1 || menhPalace.branchIdx === tuanPos2) {
    cautions.push(isVi ? 'Mệnh trong Tuần — tránh kỳ vọng quá cao' : 'Destiny in Tuần void — avoid excessive expectations');
  }
  if (menhPalace.branchIdx === trietPos1 || menhPalace.branchIdx === trietPos2) {
    cautions.push(isVi ? 'Mệnh bị Triệt — kiên nhẫn, thành công đến chậm nhưng vững' : 'Destiny under Triệt — be patient, success comes slowly but solidly');
  }

  while (cautions.length < 3) {
    cautions.push(isVi ? 'Tránh đưa ra quyết định lớn khi chưa suy nghĩ kỹ' : 'Avoid major decisions without careful thought');
  }

  return cautions.slice(0, 4);
}

/**
 * Determine the chart's overall character label (Mệnh Cách).
 */
function determineMenhCach(chartData) {
  const { palaceData, mainStarPositions } = chartData;
  const isVi = currentLang === 'vi';
  const menhStars = palaceData[0].mainStars;

  // Check for dominant character
  const vanStars = ['Thiên Cơ', 'Thái Âm', 'Thiên Lương', 'Văn Xương', 'Văn Khúc'];
  const voStars = ['Thất Sát', 'Phá Quân', 'Tham Lang', 'Liêm Trinh'];
  const taiStars = ['Vũ Khúc', 'Thiên Phủ', 'Lộc Tồn'];
  const phucStars = ['Thiên Đồng', 'Thiên Tướng'];

  if (menhStars.some(s => voStars.includes(s))) return TONG_LUAN_TEMPLATES.menhCach.patterns['võ'][isVi ? 'vi' : 'en'];
  if (menhStars.some(s => vanStars.includes(s))) return TONG_LUAN_TEMPLATES.menhCach.patterns['văn'][isVi ? 'vi' : 'en'];
  if (menhStars.some(s => taiStars.includes(s))) return TONG_LUAN_TEMPLATES.menhCach.patterns['tài'][isVi ? 'vi' : 'en'];
  if (menhStars.some(s => phucStars.includes(s))) return TONG_LUAN_TEMPLATES.menhCach.patterns['phúc'][isVi ? 'vi' : 'en'];
  if (menhStars.includes('Tử Vi')) return TONG_LUAN_TEMPLATES.menhCach.patterns['quyền'][isVi ? 'vi' : 'en'];
  return TONG_LUAN_TEMPLATES.menhCach.patterns['văn'][isVi ? 'vi' : 'en']; // default
}
```

### Fix 4: deriveCuc() Dependency & Formula (Critical)

The `deriveCuc()` function depends on `NAP_AM_TABLE` and `getNapAmHanh()`, both of which exist in `natal_chart.html`. Since `tuvi-data.js` loads before the inline script, these won't be available.

**Fix:** Move `deriveCuc()` OUT of `tuvi-data.js` and INTO `natal_chart.html`'s inline script, where `NAP_AM_TABLE` and `getNapAmHanh()` are defined. Also move `CUC_VALUES` there.

Additionally, fix the 60-cycle index formula. The correct approach for mapping (Thiên Can, Địa Chi) to a sexagenary cycle index:

```js
function deriveCuc(canIdx, menhBranchIdx) {
  // Only valid (Can, Chi) pairs: both even or both odd index
  // Standard formula: cycle position = (canIdx, chiIdx) where can and chi have same parity
  // Since menhBranchIdx is a Địa Chi index, we need to find which
  // Giáp Tý cycle pair this (Can, Branch) represents.

  // The sexagenary cycle pairs (Can, Chi) where canIdx and chiIdx have same parity
  // Cycle index = ((canIdx % 10) * 6 + Math.floor(chiIdx / 2)) for same-parity pairs
  // But we need to handle the pairing correctly:

  // Adjust: if canIdx and menhBranchIdx have different parity, shift by 1
  let adjustedCan = canIdx;
  if ((canIdx % 2) !== (menhBranchIdx % 2)) {
    // Different parity — use next Can (this is the standard adjustment)
    adjustedCan = (canIdx + 1) % 10;
  }

  // Now compute the 60-cycle index for this (adjustedCan, menhBranchIdx) pair
  // Formula: index = (adjustedCan * 12 + menhBranchIdx) / 2  (since pairs share Nạp Âm in groups of 2)
  // Simplified: Nạp Âm lookup index
  const napAmPairIdx = ((adjustedCan % 10) * 6 + Math.floor(menhBranchIdx / 2)) % 30;
  const napAm = NAP_AM_TABLE[napAmPairIdx * 2]; // Each Nạp Âm covers 2 consecutive entries
  const hanh = getNapAmHanh(napAm);
  const cucValue = { 'Thủy': 2, 'Mộc': 3, 'Kim': 4, 'Thổ': 5, 'Hỏa': 6 }[hanh];

  return { cuc: CUC_MAP[hanh], cucValue, hanh };
}
```

**IMPORTANT:** This formula MUST be verified against reference software for all 3 test cases. If the Cục value doesn't match, the entire chart will be wrong.

### Fix 5: Age-Based Tuần/Triệt Weighting (Important)

Add to `buildPalaceInterpretation()` in Task 6 Step 2:

```js
// Replace static Tuần/Triệt text with age-weighted version:
if (hasTuan || hasTriet) {
  const age = chartData.age || 25; // fallback
  const voidType = hasTuan ? 'tuan' : 'triet';

  // Age-based weighting per spec section 2.7
  const weight = voidType === 'triet'
    ? (age < 30 ? 0.8 : 0.4)
    : (age < 30 ? 0.4 : 0.8);

  const strengthLabel = weight >= 0.7
    ? (isVi ? 'mạnh' : 'strong')
    : (isVi ? 'nhẹ' : 'mild');

  if (hasTuan) {
    text += isVi
      ? `<br><span class="khong-vong kv-tuan">Tuần</span> Cung này nằm trong Tuần Không (tác động ${strengthLabel} ở ${age} tuổi). Sao tốt mất phần phúc lợi, nhưng sao xấu cũng bị giảm tác hại.`
      : `<br><span class="khong-vong kv-tuan">Tuần</span> This palace falls in Tuần void (${strengthLabel} effect at age ${age}). Benefic stars lose some blessing, but malefic stars also lose their harm.`;
  }
  if (hasTriet) {
    text += isVi
      ? `<br><span class="khong-vong kv-triet">Triệt</span> Cung này bị Triệt (tác động ${strengthLabel} ở ${age} tuổi). Năng lượng sao bị cắt đứt${age < 30 ? ' — ảnh hưởng đặc biệt rõ trước 30 tuổi' : ''}.`
      : `<br><span class="khong-vong kv-triet">Triệt</span> This palace is under Triệt severance (${strengthLabel} effect at age ${age}). Star energy is cut off${age < 30 ? ' — especially impactful before age 30' : ''}.`;
  }
}
```

### Fix 6: Add Test Case 2 to Validation (Important)

Add to Task 11, after Step 2:

```
- [ ] **Step 2b: Tu Vi Test Case 2 validation**

Open natal_chart.html → Enter: Female, 2000-08-15, Giờ Ngọ
- [ ] Thiên Can = Canh (same year Thiên Can as Test Case 1)
- [ ] Tứ Hóa matches Test Case 1 (same Can): [Thái Dương/Lộc, Vũ Khúc/Quyền, Thái Âm/Khoa, Thiên Đồng/Kỵ]
- [ ] Mệnh cung position differs from Test Case 1 (different month/hour)
- [ ] Đại Hạn direction is reversed from Test Case 1 (Female + Yang year = counterclockwise)
- [ ] Verify Cục value against reference (laso.vn or tuvi.vn)
```

### Fix 7: Empty Palace Borrowed Star Logic (Important)

In Task 6 Step 2's `buildPalaceInterpretation()`, after the empty palace section, add:

```js
  // For empty Mệnh palace: borrow interpretation from opposite palace (Thiên Di = index 6)
  if (palace.palaceIdx === 0 && palace.mainStars.length === 0) {
    const oppositePalace = chartData.palaceData[6]; // Thiên Di
    if (oppositePalace.mainStars.length > 0) {
      text += isVi
        ? `<br><em>Mệnh vô chính diệu, mượn sao từ cung Thiên Di:</em> `
        : `<br><em>Empty Destiny borrows stars from Travel palace:</em> `;
      oppositePalace.mainStars.forEach(starName => {
        const meaning = PALACE_STAR_MEANINGS['Mệnh']?.[starName];
        if (meaning) {
          text += isVi ? meaning.vi + ' ' : meaning.en + ' ';
          text += isVi ? '<em>(mượn — tác dụng giảm ~40%)</em> ' : '<em>(borrowed — effect reduced ~40%)</em> ';
        }
      });
    }
  }
  // For other empty palaces: interpret through Tràng Sinh phase + palace-Cục element interaction
  if (palace.mainStars.length === 0 && palace.palaceIdx !== 0) {
    const cucElement = chartData.menhHanh;
    const palaceElement = palace.element;
    const interaction = analyzeNguHanh(cucElement, palaceElement);
    const effect = NGU_HANH_EFFECTS[interaction];
    if (effect) {
      text += isVi
        ? `<br>Quan hệ Ngũ Hành (Cục ${cucElement} vs Cung ${palaceElement}): ${effect.vi}`
        : `<br>Five Element relationship (Cục ${cucElement} vs Palace ${palaceElement}): ${effect.en}`;
    }
  }
```

### Fix 8: Data Authoring Step Breakdown (Important)

The following steps are too large for single checkboxes and should be broken into sub-steps during execution:

- **Task 3 Step 2** (168 palace×star entries): Break into 12 sub-steps, one per palace. Each palace = 14 star entries in both languages.
- **Task 8 Step 1** (78 reversed meanings): Break into 4 sub-steps: Major Arcana (22), Wands (14), Cups (14), Swords (14), Pentacles (14).
- **Task 8 Step 2** (22 Major position interpretations): Break into 2 sub-steps: cards 0-10, cards 11-21.
- **Task 8 Step 5** (40 interaction patterns): Break into 3 sub-steps: Major-Major pairs (15), suit-based patterns (12), number/court patterns (13).

The implementer should treat each sub-step as a separate commit to avoid losing work.

### Fix 9: Script Loading Verification (Important)

Add to Task 4 Step 1 and Task 9 Step 1:

```js
// After adding <script src> tags, verify they load under file:// protocol:
// Open browser console immediately after page load and check:
console.log('lunar-data loaded:', typeof LUNAR_INFO !== 'undefined');
console.log('tuvi-data loaded:', typeof TU_VI_POS !== 'undefined');
console.log('tarot-data loaded:', typeof REVERSED_MEANINGS !== 'undefined');

// If any shows false, the file failed to load. Common fixes:
// 1. Ensure .js files are in the SAME directory as the .html file
// 2. In Chrome, try opening via a local server (python -m http.server)
// 3. Ensure no typos in filename
```

### Fix 10: Palace Index vs Branch Index Clarification (Important)

In `natal_chart.html`, `computeMenhCung(lunarMonth, hourIdx)` returns a value that represents BOTH the starting branch index for palace placement AND is used as the Mệnh palace's branch index. Looking at the current code (line 683):

```js
function computeMenhCung(lunarMonth, hourIdx) {
  return (2 + lunarMonth - 1 + hourIdx) % 12;
}
```

This returns a branch index (0-11) where Tý=0, Sửu=1, Dần=2, etc. The value `menhPos` IS the branch index of the Mệnh palace. In `generateChart()`, palace `i=0` (Mệnh) gets branch `menhPos`, palace `i=1` (Huynh Đệ) gets branch `menhPos-1`, etc.

**Clarification for Task 4 Step 2:** Remove the confusing line `const menhBranchIdx = (menhPos + 2) % 12`. `menhPos` is already the correct branch index. Use it directly in `deriveCuc()`:

```js
const cucInfo = deriveCuc(canIdx, menhPos); // menhPos IS the branch index
```

### Fix 11: Cục Verification Step (Important)

Add to Task 4 Step 12:

```
- [ ] Verify Cục value for each test case:
  - Test Case 1 (1990-02-06, Male, Dần): Check Cục against tuvi.vn
  - Test Case 2 (2000-08-15, Female, Ngọ): Check Cục against tuvi.vn
  - Test Case 3 (1985-03-18, Male, Tý): Check Cục against tuvi.vn
  - If ANY Cục value is wrong, the deriveCuc() formula is incorrect and must be fixed
    before proceeding to any other Tu Vi task.
```
