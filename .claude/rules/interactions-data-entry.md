---
description: Standards for CARD_INTERACTIONS_MAP entries
globs: ["*interactions*"]
---

# CARD_INTERACTIONS_MAP Data Entry

## Key Format
`"smallerId_largerId"` — smaller numeric ID always first.

## Value Format
```js
"0_64": { vi: "Vietnamese text (20-40 words)", en: "English text (20-40 words)" },
```
Trailing comma after `}`.

## Vietnamese Card Names Reference
- Numbers: Át, Hai, Ba, Bốn, Năm, Sáu, Bảy, Tám, Chín, Mười
- Court: Trang Bị (Page), Kỵ Sĩ (Knight), Nữ Hoàng (Queen), Vua (King)
- Suits: Gậy (Wands), Cốc (Cups), Kiếm (Swords), Tiền (Pentacles)

## Section Headers
```js
// ── Tier Nx: SuitA × SuitB, elemA×elemB (range × range, N pairs) ──
```

## Markers
- Replace current pending marker with entries
- Add next pending marker after entries: `// ── Task XXX pending ──`

## Verification
After every insertion: `grep -c '"[0-9]*_[0-9]*":' <file>`
