---
name: tuvi-algorithm-verification
description: "Verify Tử Vi calculations against known test cases"
version: 1.0.0
---

# Tử Vi Algorithm Verification Skill

## When to Use
After modifying any calculation logic in `natal_chart.js` or `tuvi-data.js`.

## Test Cases (All Verified)

| Case | Input | Expected Cục | Expected Tứ Hóa |
|---|---|---|---|
| TC1 | Male, 1990-02-06, Dần | Thủy Nhị Cục | Thái Dương/Lộc, Vũ Khúc/Quyền, Thái Âm/Khoa, Thiên Đồng/Kỵ |
| TC2 | Female, 2000-08-15, Ngọ | Thổ Ngũ Cục | Same Tứ Hóa (both Canh) |
| TC3 | Male, 1985-03-18, Tý | Mộc Tam Cục | Thiên Cơ/Lộc, Thiên Lương/Quyền, Tử Vi/Khoa, Thái Âm/Kỵ |

## Critical Formulas to Verify
1. **Mệnh cung:** `(2 + month - 1 - hour + 24) % 12` — backward by hour
2. **Thân cung:** `(2 + month - 1 + hour) % 12` — forward by hour
3. **Tuần:** `((chiIdx - canIdx) % 12 + 12) % 12` → positions +10, +11
4. **Triệt:** `(8 - 2*(canIdx % 5) + 12) % 12` → positions +0, +1
5. **Cục derivation:** `deriveCuc(canIdx, menhBranchIdx)` — from Nạp Âm

## Verification Steps
1. Open `natal_chart.html` in browser
2. Enter TC1 data → check Cục and Tứ Hóa match
3. Enter TC2 data → check different Mệnh/Thân but same Tứ Hóa
4. Enter TC3 data → check Mộc Tam Cục and Ất-year Tứ Hóa

## Known Historical Bugs (to watch for regressions)
- Mệnh/Thân formulas swapped
- Tuần ignored chiIdx
- Triệt formula wrong
- AUX_BY_MONTH off-by-one
- CACH_CUC_PATTERNS argument mismatch
- tuvi-data.js duplicate const declarations
- Missing Cục derivation function
