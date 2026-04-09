---
name: cach-cuc-detection
description: "Implement Cách Cục pattern recognition engine: CACH_CUC_PATTERNS data, detectCachCuc(), evaluatePattern(), 4 condition types"
version: 1.0.0
---

# Cách Cục Detection Skill

## When to Use
When implementing the Cách Cục pattern recognition system.
Requires Phase 2 (phiCungGraph) for hoa_convergence patterns.

## 4 Condition Types

### `hoa_convergence`
Check if required Hóa types converge on the Mệnh tam hợp cung group.
```js
function evalHoaConvergence(condition, palaceData, phiCungGraph) {
  if (!phiCungGraph) return null;
  const menhBranch = palaceData[0].branchIdx;
  const tamHop = getTamHop(menhBranch); // [idx1, idx2, idx3]
  const tamHopPalaces = palaceData.filter(p => tamHop.includes(p.branchIdx)).map(p => p.palaceIdx);

  const arrivedHoa = new Set(
    phiCungGraph.edges
      .filter(e => tamHopPalaces.includes(e.to))
      .map(e => e.hoa)
  );
  const allPresent = condition.required.every(h => arrivedHoa.has(h));
  return allPresent ? tamHopPalaces : null;
}
```

### `star_triad`
Check if specific stars are distributed among tam hợp cung.
```js
function evalStarTriad(condition, palaceData) {
  const menhBranch = palaceData[0].branchIdx;
  const tamHop = getTamHop(menhBranch);
  const tamHopPalaces = palaceData.filter(p => tamHop.includes(p.branchIdx));
  const starsInTriad = tamHopPalaces.flatMap(p => p.mainStars);
  const allPresent = condition.stars.every(s => starsInTriad.includes(s));
  return allPresent ? tamHopPalaces.map(p => p.palaceIdx) : null;
}
```

### `star_at_palace`
Check if a specific star is at a specific palace type.
```js
function evalStarAtPalace(condition, palaceData) {
  const palace = palaceData.find(p => p.name === condition.palaceName || p.palaceIdx === condition.palaceIdx);
  if (!palace) return null;
  const found = palace.mainStars.includes(condition.star);
  return found ? [palace.palaceIdx] : null;
}
```

### `star_brightness`
Check if a star achieves Miếu/Vượng at its current palace.
```js
function evalStarBrightness(condition, palaceData) {
  for (const p of palaceData) {
    if (!p.mainStars.includes(condition.star)) continue;
    const brightness = getStarBrightness(condition.star, p.branchIdx);
    if (['M','V'].includes(brightness)) return [p.palaceIdx];
  }
  return null;
}
```

## Pattern Rating Scale
- 90-100: Exceptional (Tam Kỳ Gia Hội, Song Lộc, etc.)
- 70-89: Strong positive (Cơ Nguyệt Đồng Lương, Nhật Nguyệt Giáp Mệnh, etc.)
- 50-69: Moderate
- 30-49: Mixed — has strength but significant challenges
- 0-29: Hung cách (Sát Phá Tham at wrong position, etc.)

## Tam Hợp Helper
```js
function getTamHop(branchIdx) {
  const groups = [
    [2,6,10],  // Dần-Ngọ-Tuất (Hỏa cục)
    [3,7,11],  // Mão-Mùi-Hợi (Mộc cục)
    [0,4,8],   // Tý-Thìn-Thân (Thủy cục)
    [1,5,9]    // Sửu-Tỵ-Dậu (Kim cục)
  ];
  return groups.find(g => g.includes(branchIdx)) || [];
}
```

## Classic Patterns to Implement (~20)
1. Tam Kỳ Gia Hội — Lộc+Quyền+Khoa tại tam hợp Mệnh
2. Sát Phá Tham — Thất Sát+Phá Quân+Tham Lang tại tam hợp (mạnh mẽ, rủi ro)
3. Cơ Nguyệt Đồng Lương — Thiên Cơ+Thái Âm+Thiên Đồng+Thiên Lương hội tụ
4. Nhật Nguyệt Giáp Mệnh — Thái Dương và Thái Âm kẹp cung Mệnh
5. Tử Phủ Đồng Cung — Tử Vi+Thiên Phủ tại Mệnh
6. Vũ Khúc Độc Tọa — Vũ Khúc tại Mệnh không có bạn
7. Song Hao Giao Tranh — Hóa Kỵ + Kình Dương tại Mệnh
8. Nhật Nguyệt Phản Bối — Thái Dương/Âm ở hãm địa
9. Hóa Kỵ Nhập Mệnh — Kỵ của năm sinh nhập vào cung Mệnh
10. Tứ Hóa Xung Phá — 2+ Kỵ nhập tam hợp Mệnh
(+10 more patterns)
