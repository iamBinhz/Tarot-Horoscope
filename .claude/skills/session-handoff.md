---
name: session-handoff
description: "Create end-of-session summary for continuity between conversations"
version: 1.0.0
---

# Session Handoff Skill

## When to Use
At the end of a work session, OR when user says "tóm tắt session" / "session summary".

## Template

```markdown
# Session Summary — [DATE]

## I. Công Việc Thực Hiện
[List each task with file, line changes, result]

## II. Trạng Thái CARD_INTERACTIONS_MAP
- **Tổng entries hiện tại:** [N] / 3,003
- **Task vừa hoàn thành:** [Task ID]
- **Task tiếp theo:** [Task ID] — [description]
- **Marker location:** Line [N] in tarot-interactions.js

## III. Bước Tiếp Theo
[Specific task, file, position, card ranges]

## IV. Quy Tắc Nhắc Nhở
1. Card names luôn English
2. Bilingual: `{ vi: "...", en: "..." }`
3. Key format: `"smallerId_largerId"`
4. CSS: no inline styles
5. Vendor prefix for backdrop-filter
```

## Output Location
`docs/SESSION-SUMMARY-[DATE].md`

## Key Data to Capture
- CARD_INTERACTIONS_MAP total count (grep -c)
- Last completed task ID
- Next pending marker line number
- Any bugs found during session
- Any rules clarified or established
