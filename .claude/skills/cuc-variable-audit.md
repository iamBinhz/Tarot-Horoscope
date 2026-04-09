---
name: cuc-variable-audit
description: "Audit and rename menhHanh→cucHanh, add banMenhHanh, update all display labels in natal_chart.js"
version: 1.0.0
---

# Cục Variable Audit Skill

## When to Use
After rewriting deriveCuc() — to rename all variables and fix
the UI distinction between Bản Mệnh (birth year Nạp Âm) and Cục element.

## Problem
`menhHanh` was the Cục element but misleadingly named/labeled as "Mệnh".
Users expect "Mệnh Hỏa" = birth year Nạp Âm element (e.g., Lộ Bàng Thổ → Thổ),
not the Cục element derived from Mệnh cung.

## Two Distinct Concepts

| Variable | Source | Meaning |
|----------|--------|---------|
| `banMenhHanh` | `getNapAmHanh(napAmRaw)` — birth year Nạp Âm | User's "Mệnh Hỏa/Thổ/Kim/..." |
| `cucHanh` | `deriveCuc(canIdx, menhPos).hanh` | Cục Ngũ Hành (Hỏa Lục Cục, etc.) |

## Steps

1. **Find all menhHanh occurrences**:
   ```
   grep -n "menhHanh" natal_chart.js
   ```

2. **Add banMenhHanh** after napAm calculation (~line 474):
   ```js
   const banMenhHanh = getNapAmHanh(napAmRaw);
   ```

3. **Rename at declaration** (~line 491):
   ```js
   const cucHanh = cucInfo.hanh;  // was: const menhHanh = cucInfo.hanh;
   ```

4. **Rename in return object** (~line 670):
   ```js
   return { palaceData, cucHanh, banMenhHanh, ... };
   ```

5. **Rename all destructuring** in renderChart(), generateTongLuan(), generateGuidance()

6. **Update center cell UI** — show banMenhHanh as badge, cucHanh as dim detail:
   ```js
   // Element badge = Bản Mệnh (what users expect when they say "Mệnh Hỏa")
   <div class="cc-element-badge">Mệnh ${banMenhHanh} · ${EL_NAMES[banMenhHanh]}</div>
   // Cục shown separately:
   <div class="cc-detail-dim">${cuc.vi}</div>
   ```

7. **Update guidance text** (lines 1229-1230): use `banMenhHanh` for "based on your destiny"

8. **Update Tổng Luận** (line 1004): use `banMenhHanh` for "Bản Mệnh" label,
   `cucHanh` for Cục-related analysis

## Verification
- After rename: `grep -c "menhHanh" natal_chart.js` → should return 0
- Center cell should show "Mệnh Thổ" (birth year element), "Hỏa Lục Cục" (separate)
