---
name: tarot-interaction-entry
description: "Batch-add bilingual card interaction entries to CARD_INTERACTIONS_MAP"
version: 2.0.0
---

# Tarot Interaction Entry Skill

## When to Use
When adding new CARD_INTERACTIONS_MAP entries to `tarot-interactions.js`.

## Prerequisites
- Know which Tier and Task is being worked on
- Know the Major/Minor card ranges involved
- Know the current pending marker location

## Steps

1. **Locate marker**: Grep for the current pending marker
   ```
   grep -n "Task XXX pending" .src/.main/.support/tarot-interactions.js
   ```

2. **Generate entries**: For each card pair (A × B):
   - Key: `"smallerId_largerId"`
   - Vi: 20-40 words, use Vietnamese card names, capture the specific energy of the pair
   - En: 20-40 words, capture the same meaning in English
   - Card names in entry TEXT can use Vietnamese for context, but UI display names stay English

3. **Insert at marker**: Replace the marker line with entries + new marker
   - Section header: `// ── Tier Nx: Description ──`
   - Entries: one per line
   - New marker: `// ── Task XXY pending ──`

4. **Verify count**:
   ```
   grep -c '"[0-9]*_[0-9]*":' .src/.main/.support/tarot-interactions.js
   ```

5. **Notify**: `[Task Xa] done. [total] pairs total. Next: [Task Xb].`

## Good Example
```js
"0_64": { vi: "Kẻ Khờ bước vào vùng đất Tiền Pentacles — hành trình vật chất bắt đầu từ sự ngây thơ và niềm tin vào vũ trụ sẽ cung cấp.", en: "The Fool steps into Pentacles territory — a material journey begins with naive trust that the universe will provide." },
```

## Bad Example
```js
"0_64": { vi: "Tốt", en: "Good" },  // Too short, no meaning
"64_0": { ... },  // Wrong key order! Smaller ID first
```

## Anti-patterns
- Don't use generic descriptions like "good combination" or "interesting pairing"
- Don't repeat the same structure for every pair in a tier — each should feel unique
- Don't forget trailing comma after `}`
- Don't skip Vietnamese card names in the Vietnamese text
