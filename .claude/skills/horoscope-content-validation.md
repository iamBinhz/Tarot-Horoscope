---
name: horoscope-content-validation
description: "Validate Tử Vi / Kinh Dịch content accuracy using Test Subjects"
version: 2.0.0
---

# Horoscope Content Validation Skill

## When to Use
When testing the accuracy and coherence of Tử Vi / Kinh Dịch output.

## Test Subject Source
`Test_Subject/Test-Subject.md` — 10 subjects with birth data.

## Step 0 — MANDATORY PRE-TEST
Follow `test-subject-input-protocol` skill:
1. Convert date DD/MM/YYYY → YYYY-MM-DD
2. Convert clock time → Giờ value (0-11)
3. Map gender: Nam→M, Nữ→F
4. Enter all data into natal_chart.html form

## Validation Steps Per Subject

### 1. Input Preparation
- Extract: gender, birth date, birth time from Test Subject
- Convert using `test-subject-input-protocol` tables
- Verify lunar date conversion (check `lunarDisplay` after date entry)
- Determine: Thiên Can, Địa Chi of birth year

### 2. Calculation Verification
For each subject, verify these outputs against manual calculation:

| Calculation | Formula | Source |
|---|---|---|
| Mệnh Cung | `(2 + month - 1 - hour + 24) % 12` | natal_chart.js |
| Thân Cung | `(2 + month - 1 + hour) % 12` | natal_chart.js |
| Cục | `deriveCuc(canIdx, menhBranchIdx)` | natal_chart.js |
| Tứ Hóa | Lookup by Thiên Can of birth year | tuvi-data.js |
| Tuần | `((chiIdx - canIdx) % 12 + 12) % 12` → +10, +11 | natal_chart.js |
| Triệt | `(8 - 2*(canIdx % 5) + 12) % 12` → +0, +1 | natal_chart.js |

NOTE: If calculations are wrong, note in report for user to fix.

### 3. Star Placement Verification
- Verify Chính Tinh (Main Stars) are in correct cung
- Verify Phụ Tinh (Auxiliary Stars) placement
- Check that Tuần/Triệt correctly dim affected palaces
- Cross-reference with known Tử Vi placement rules

### 4. Interpretation Assessment

| Criterion | Weight | Description |
|---|---|---|
| Calculation Accuracy | 30% | Do mathematical outputs match expected values? |
| Star Placement | 25% | Are stars in the correct palaces? |
| Interpretation Coherence | 20% | Do interpretations make sense? |
| Tổng Luận Quality | 15% | Does it provide a holistic summary? |
| Guidance Relevance | 10% | Does guidance offer practical advice? |

### 5. Scoring
- Each criterion: 0 (fail) to 5 (excellent)
- Total score out of 100 (weighted)
- Threshold: ≥ 70 = PASS, 50-69 = MARGINAL, < 50 = FAIL

### 6. Bilingual Testing
- Evaluate chart + interpretations in default language
- Toggle 🌐 → re-evaluate all text
- Report any parity issues

### 7. Cross-Validation with Known Test Cases
Use verified test cases from `tuvi-algorithm-verification` skill:
- TC1: Male, 1990-02-06, Dần → Thủy Nhị Cục
- TC2: Female, 2000-08-15, Ngọ → Thổ Ngũ Cục
- TC3: Male, 1985-03-18, Tý → Mộc Tam Cục

## Anti-Patterns
- Don't skip lunar conversion — common error source
- Don't trust code output without manual cross-check
- Don't ignore Tuần/Triệt — they affect interpretation
- Don't skip regression checks against historical bugs
