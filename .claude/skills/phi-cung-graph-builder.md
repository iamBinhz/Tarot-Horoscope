---
name: phi-cung-graph-builder
description: "Build Phi Cung Hóa Tượng directed graph: TU_HOA_MAP data, edge construction, chain path-finding (Kỵ chuyển Kỵ, Lộc chuyển Kỵ)"
version: 1.0.0
---

# Phi Cung Graph Builder Skill

## When to Use
When implementing the Tứ Hóa Phi Tinh graph system for Tử Vi Đẩu Số.
Requires Phase 1 complete (each palaceData[i].canIdx must exist).

## Prerequisites
- `TU_HOA_MAP` exists in tuvi-data.js (10 entries, Giáp→Quý)
- `palaceData[i].canIdx` populated by `napThienCan12Cung()`
- All 14 main stars + Tả Phụ, Hữu Bật, Văn Xương, Văn Khúc placed in palaceData

## TU_HOA_MAP Reference
```js
// Giáp(0): Lộc=Liêm Trinh, Quyền=Phá Quân, Khoa=Vũ Khúc, Kỵ=Thái Dương
// Ất(1):   Lộc=Thiên Cơ, Quyền=Thiên Lương, Khoa=Tử Vi, Kỵ=Thái Âm
// Bính(2): Lộc=Thiên Đồng, Quyền=Thiên Cơ, Khoa=Văn Xương, Kỵ=Liêm Trinh
// Đinh(3): Lộc=Thái Âm, Quyền=Thiên Đồng, Khoa=Thiên Cơ, Kỵ=Cự Môn
// Mậu(4):  Lộc=Tham Lang, Quyền=Thái Âm, Khoa=Hữu Bật, Kỵ=Thiên Cơ
// Kỷ(5):   Lộc=Vũ Khúc, Quyền=Tham Lang, Khoa=Thiên Lương, Kỵ=Văn Khúc
// Canh(6): Lộc=Thái Dương, Quyền=Vũ Khúc, Khoa=Thái Âm, Kỵ=Thiên Đồng
// Tân(7):  Lộc=Cự Môn, Quyền=Thái Dương, Khoa=Văn Khúc, Kỵ=Văn Xương
// Nhâm(8): Lộc=Thiên Lương, Quyền=Tử Vi, Khoa=Tả Phụ, Kỵ=Vũ Khúc
// Quý(9):  Lộc=Phá Quân, Quyền=Cự Môn, Khoa=Thái Âm, Kỵ=Tham Lang
```

## Implementation Steps

### 1. Add findStarPalace() helper
```js
function findStarPalace(palaceData, starName) {
  for (let i = 0; i < 12; i++) {
    const all = [...palaceData[i].mainStars, ...palaceData[i].auxStars];
    if (all.includes(starName)) return i;
  }
  return -1;
}
```

### 2. Build edges (12 palaces × 4 Hóa = 48 edges max)
```js
for (let i = 0; i < 12; i++) {
  const can = palaceData[i].canIdx;
  const tuHoa = TU_HOA_MAP[can];
  for (const hoa of ['loc','quyen','khoa','ky']) {
    const target = findStarPalace(palaceData, tuHoa[hoa]);
    if (target >= 0) edges.push({ from: i, to: target, hoa, star: tuHoa[hoa] });
  }
}
```

### 3. Trace Kỵ chuyển Kỵ chains (start from each palace, max depth 4)
```js
for (let start = 0; start < 12; start++) {
  const chain = [start];
  let cur = start;
  for (let d = 0; d < 4; d++) {
    const e = edges.find(e => e.from === cur && e.hoa === 'ky');
    if (!e || chain.includes(e.to)) break;
    chain.push(e.to);
    cur = e.to;
  }
  if (chain.length >= 3) kyChuyenKy.push(chain);
}
```

### 4. Trace Lộc chuyển Kỵ chains
```js
for (let start = 0; start < 12; start++) {
  const locEdge = edges.find(e => e.from === start && e.hoa === 'loc');
  if (!locEdge) continue;
  const kyEdge = edges.find(e => e.from === locEdge.to && e.hoa === 'ky');
  if (kyEdge && kyEdge.to !== start) {
    locChuyenKy.push([start, locEdge.to, kyEdge.to]);
  }
}
```

### 5. Return graph object
```js
return { edges, kyChuyenKy, locChuyenKy };
```

## Verification
- `phiCungGraph.edges.length` should be ≤ 48 (some stars may not be in chart)
- Each edge should have from/to/hoa/star fields
- `kyChuyenKy` chains should have length ≥ 3
- Guard: wrap in `if (typeof TU_HOA_MAP !== 'undefined')` before use
