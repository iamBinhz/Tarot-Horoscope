---
name: research-delegate-review
description: "The core professional workflow — Research, Delegate, Review, Capture"
version: 1.0.0
---

# Research-Delegate-Review Workflow

## When to Use
For any task that involves implementing something new or unfamiliar.

## Steps

### 1. Research (KHÔNG code trong bước này)
- Đọc documentation liên quan
- Tìm best practices cho task type
- Kiểm tra xem đã có pattern/convention nào trong project chưa
- Xem STATUS-REPORT và SESSION-SUMMARY gần nhất

### 2. Delegate (Thực hiện)
- Áp dụng kiến thức từ bước Research
- Follow project conventions (CLAUDE.md, rules)
- Tạo code hoặc nội dung theo spec

### 3. Review (Kiểm tra)
- Chạy verification (grep counts, test cases)
- Kiểm tra bilingual format
- Kiểm tra CSS quality rules
- Kiểm tra scope (có sửa file ngoài task không?)

### 4. Capture (Nếu học được pattern mới)
- Is this a repeatable workflow? → Create a skill
- Is this a project-wide rule? → Add to rules
- Is this a one-time decision? → Add to MEMORY.md

## Anti-Patterns
- Bỏ qua bước Research → dẫn đến code không đúng convention
- Bỏ qua bước Review → dẫn đến bugs và regressions
- Không Capture → lần sau phải làm lại từ đầu
