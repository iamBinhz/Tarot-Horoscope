---
name: ngu-thu-don-implementation
description: "Implement Ngũ Thử Độn (Five Rat Method) for Tử Vi: rewrite deriveCuc(), add napThienCan12Cung(), verify with test cases"
version: 1.0.0
---

# Ngũ Thử Độn Implementation Skill

## When to Use
When rewriting `deriveCuc()` or any function that requires knowing the
Thiên Can of a cung in the 12-palace chart.

## Core Algorithm

### Step 1 — Find starting Thiên Can at Cung Dần
```js
const startCan = ((canIdx % 5) * 2 + 2) % 10;
// Giáp(0)/Kỷ(5) → Bính(2)
// Ất(1)/Canh(6) → Mậu(4)
// Bính(2)/Tân(7) → Canh(6)
// Đinh(3)/Nhâm(8) → Nhâm(8)
// Mậu(4)/Quý(9) → Giáp(0)
```

### Step 2 — Count forward from Dần to target cung
```js
const menhCungCan = (startCan + ((menhBranchIdx - 2 + 12) % 12)) % 10;
// menhBranchIdx: 0=Tý, 1=Sửu, 2=Dần, ..., 11=Hợi
// Distance from Dần(2) to target: (target - 2 + 12) % 12
```

### Step 3 — Sexagenary index → Nạp Âm → Cục
```js
const sexIdx = ((6 * menhCungCan - 5 * menhBranchIdx) % 60 + 60) % 60;
const napAmForCuc = NAP_AM_TABLE[sexIdx]; // 60-entry table
const cucHanh = getNapAmHanh(napAmForCuc);
```

## Implementation Steps

1. **Locate current deriveCuc()** — Grep: `grep -n "function deriveCuc" natal_chart.js`
2. **Replace entire function body** with 3-step algorithm above
3. **Add napThienCan12Cung()** after deriveCuc:
   ```js
   function napThienCan12Cung(canIdx) {
     const startCan = ((canIdx % 5) * 2 + 2) % 10;
     const result = new Array(12);
     for (let b = 0; b < 12; b++) {
       result[b] = (startCan + ((b - 2 + 12) % 12)) % 10;
     }
     return result;
   }
   ```
4. **Wire into generateChart()** — after palace loop, assign `.canIdx` to each palace:
   ```js
   const palaceCanArray = napThienCan12Cung(canIdx);
   palaceData.forEach(p => { p.canIdx = palaceCanArray[p.branchIdx]; });
   ```

## Verification Test Cases

| Year Can | Mệnh Branch | Expected menhCungCan | Expected Nạp Âm | Expected Cục |
|----------|------------|----------------------|-----------------|--------------|
| Ất(1)    | Dần(2)     | Mậu(4)               | Thành Đầu Thổ   | Thổ Ngũ Cục  |
| Giáp(0)  | Dần(2)     | Bính(2)              | Lư Trung Hỏa    | Hỏa Lục Cục  |
| Canh(6)  | Ngọ(6)     | Bính(2)              | Lư Trung Hỏa    | Hỏa Lục Cục  |
| Nhâm(8)  | Tý(0)      | Giáp(0)... wait, startCan=Giáp(0), dist=(0-2+12)%12=10, menhCungCan=(0+10)%10=0 | Hải Trung Kim | Kim Tứ Cục |

## Anti-patterns
- NEVER use `(canIdx + 1) % 10` parity hack — this is the OLD wrong method
- NEVER use `((adjustedCan % 10) * 6 + Math.floor(menhBranchIdx / 2)) % 30` — wrong formula
- Always use `+24` or equivalent to keep modulo positive in JS
