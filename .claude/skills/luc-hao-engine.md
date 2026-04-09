---
name: luc-hao-engine
description: "Implement Lục Hào engine: gieoQue() 3-coin casting, xacDinhQue() hexagram identification, anLucThan() Six Relations assignment"
version: 1.0.0
---

# Lục Hào Engine Skill

## When to Use
When implementing the computation engine for Kinh Dịch / Lục Hào in kinh-dich-data.js.

## 3-Coin Method (Trịch Tiền Pháp)
```
3 ngửa (sum=9)  = Lão Dương  ━━━━━━ ○  → động hào, biến thành Âm
2 ngửa (sum=8)  = Thiếu Âm   ━━ ━━     → tĩnh
1 ngửa (sum=7)  = Thiếu Dương ━━━━━━   → tĩnh
0 ngửa (sum=6)  = Lão Âm     ━━ ━━ ×   → động hào, biến thành Dương
```

## gieoQue() Implementation
```js
function gieoQue() {
  const haoArray = [];
  for (let i = 0; i < 6; i++) {
    // 3 coins: head=3pts, tail=2pts → sum 6,7,8,9
    const sum = [0,1,2].reduce(acc => acc + (Math.random() < 0.5 ? 3 : 2), 0);
    haoArray.push(sum);
  }
  return haoArray; // index 0 = hào Sơ (bottom), index 5 = hào Thượng (top)
}
```

## xacDinhQue() Implementation
```js
function xacDinhQue(haoArray) {
  // Current state: 7,9 = dương(1); 6,8 = âm(0)
  const chinh = haoArray.map(v => (v === 7 || v === 9) ? 1 : 0);
  // Changed state: 9→0, 6→1, static unchanged
  const bien = haoArray.map((v, i) => v === 9 ? 0 : v === 6 ? 1 : chinh[i]);
  const dongHao = haoArray.map(v => v === 6 || v === 9);

  const noiChinh = findQuaiIdx(chinh.slice(0, 3)); // hào 1-3 = nội quái
  const ngoaiChinh = findQuaiIdx(chinh.slice(3, 6)); // hào 4-6 = ngoại quái
  const noiBien = findQuaiIdx(bien.slice(0, 3));
  const ngoaiBien = findQuaiIdx(bien.slice(3, 6));

  return {
    queChinh: QUE_LOOKUP[ngoaiChinh][noiChinh],
    queBien:  QUE_LOOKUP[ngoaiBien][noiBien],
    dongHao,
    noiQuai: noiChinh,
    ngoaiQuai: ngoaiChinh,
    haoArray
  };
}

function findQuaiIdx(hao3) {
  return BAT_QUAI.findIndex(q =>
    q.hao[0] === hao3[0] && q.hao[1] === hao3[1] && q.hao[2] === hao3[2]
  );
}
```

## QUE_LOOKUP Table (8×8 → queIdx)
The 8×8 matrix maps (ngoaiQuaiIdx, noiQuaiIdx) → Văn Vương order index.
Must be manually constructed from the 64-hexagram order.

```js
// QUE_LOOKUP[thuong][ha] = Văn Vương index
const QUE_LOOKUP = [
  // ha: Can  Doi  Ly   Chan Ton  Kham Can  Khon
  [   0,  43,  13,  25,   9,   5,  26,  11],  // thuong=Can(0)
  [  10,  57,  38,  54,  61,  47,  41,  19],  // thuong=Doi(1)
  [  14,  49,  29,  55,  37,  63,  22,  35],  // thuong=Ly(2)
  [  34,  16,  21,  51,  42,  40,  27,  23],  // thuong=Chan(3)
  [  44,  28,  50,  32,  56,  48,  18,  46],  // thuong=Ton(4)
  [   6,  47,  64,  60,  59,  29,  39,   7],  // thuong=Kham(5) — placeholder
  [  33,  31,  56,  62,  53,  39,  52,  15],  // thuong=Can(6)
  [  12,  45,  36,   2,  20,   8,  23,   1],  // thuong=Khon(7)
];
// NOTE: verify each index against the 64-hexagram list before finalizing
```

## anLucThan() Implementation
```js
function anLucThan(queData) {
  if (!queData || typeof QUE_DATA === 'undefined') return [];
  const que = QUE_DATA[queData.queChinh];
  if (!que) return [];
  const cungHanh = que.hanh;
  const haoDetails = [];

  for (let i = 0; i < 6; i++) {
    const isNoi = i < 3;
    const quaiName = isNoi
      ? BAT_QUAI[queData.noiQuai].name
      : BAT_QUAI[queData.ngoaiQuai].name;
    const localIdx = isNoi ? i : i - 3;
    const napGiap = NAP_GIAP[quaiName];
    const chiKey = isNoi ? 'noi' : 'ngoai';
    const diaChi = napGiap[chiKey][localIdx];
    const haoHanh = DIA_CHI_NGU_HANH[diaChi];
    const lucThan = getLucThan(haoHanh, cungHanh);

    haoDetails.push({
      pos: i + 1,
      diaChi,
      nguHanh: haoHanh,
      lucThan,
      dong: queData.dongHao[i],
      value: queData.haoArray[i]
    });
  }
  return haoDetails;
}
```

## Ngũ Hành → Lục Thân Logic
```
cungHanh = Ngũ Hành của quẻ cung (từ nội quái)
haoHanh  = Ngũ Hành của hào (từ Địa Chi qua DIA_CHI_NGU_HANH)

same         → Huynh Đệ   (同我: cùng hành)
cungHanh sinh haoHanh  → Tử Tôn    (我生: ta sinh)
haoHanh sinh cungHanh  → Phụ Mẫu   (生我: sinh ta)
cungHanh khắc haoHanh  → Thê Tài   (我克: ta khắc)
haoHanh khắc cungHanh  → Quan Quỷ  (克我: khắc ta)
```

## Verification
- gieoQue(): should return array of 6 values, each 6-9
- xacDinhQue(): queChinh and queBien should be valid indices 0-63
- anLucThan(): should return 6 entries, each with diaChi/nguHanh/lucThan/dong
- dongHao: at most 6 trues (all moving is Bĩ → all-change edge case)
