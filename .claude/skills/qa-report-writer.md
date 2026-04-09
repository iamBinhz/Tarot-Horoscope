---
name: qa-report-writer
description: "Standardized QA report template for quality testing agents"
version: 2.0.0
---

# QA Report Writer Skill

## When to Use
After completing a code audit, content validation, or full audit test.

## Report Template

```markdown
# QA Report — [Tarot/Horoscope] — [DATE]

## Summary
| Metric | Value |
|---|---|
| Agent | [tarot-quality-tester / horoscope-quality-tester] |
| Date | [YYYY-MM-DD] |
| Scope | [Code Audit / Content Validation / Full Test] |
| Overall Result | [PASS ✅ / MARGINAL ⚠️ / FAIL ❌] |
| Score | [XX/100] |
| Languages Tested | EN ✅ / VI ✅ |

## I. Test Input Data
| Subject | Name | Date (ISO) | Hour (Giờ) | Gender | Model/Category |
|---|---|---|---|---|---|
| 1 | ... | ... | ... | ... | ... |

## II. Code Quality Audit Results

### Files Scanned
| File | Lines | Issues Found |
|---|---|---|
| [filename] | [N] | [count] |

### Issues Found
| # | Severity | File | Line | Description | Rule Violated |
|---|---|---|---|---|---|
| 1 | CRITICAL/WARNING/INFO | file | line | description | rule |

**NOTE**: Algorithm/formula bugs are noted for user to fix.

## III. Content Validation Results

### Test Subject Results
| Subject | Category | Score | Result | Notes |
|---|---|---|---|---|
| Subject 1 — [Name] | [Category] | [XX/100] | [PASS/MARGINAL/FAIL] | [findings] |

### Multi-Run Summary (Tarot only)
| Subject | Run 1 Cards | Run 2 Cards | Run 3 Cards | Avg Score | Systematic Issues |
|---|---|---|---|---|---|
| Subject 1 | [cards] | [cards] | [cards] | [XX] | [yes/no] |

### Detailed Findings Per Subject
#### Subject N — [Name]
- **Input**: [context summary + question entered into qInput]
- **Model Selected**: [general/problem/solution/crossroads]
- **Domain Detected**: [career/love/finance/etc.]
- **Output Quality**: [assessment]
- **Context Relevance**: [does reading address the subject's actual situation?]
- **Issues**: [list]
- **Score Breakdown**: [per criterion]

## IV. ConclusionBox Review (Tarot only)
| Section | Score | Notes |
|---|---|---|
| Opening | X/5 | ... |
| Narrative & Connections | X/5 | ... |
| Element Analysis | X/5 | ... |
| Path Forward | X/5 | ... |
| Context Relevance | X/5 | ... |
| Energy Badge | X/5 | ... |
| Confidence Badge | X/5 | ... |
| Reading Tone | X/5 | ... |

## V. Lá Số Full Audit (Horoscope only)
### Core Data Verification
| Data Point | Expected | Actual | Match? |
|---|---|---|---|
| Mệnh Cung | ? | ? | ✅/❌ |
| Thân Cung | ? | ? | ✅/❌ |
| Cục | ? | ? | ✅/❌ |
| ... | ... | ... | ... |

### Star Placement Summary
| Star Category | Total Stars | Correct | Wrong | Missing |
|---|---|---|---|---|
| Chính Tinh (14) | 14 | ? | ? | ? |
| Phụ Tinh | ? | ? | ? | ? |

### Online Cross-Reference
| Data Point | Our Chart | Our Formula | Reference | Source | Classification |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | OUR_BUG/DIFFERENT_SCHOOL/EXTERNAL_ERROR/MATCH |

## VI. Bilingual Test Results
| Section | EN Quality | VI Quality | Parity? | Notes |
|---|---|---|---|---|
| [section] | X/5 | X/5 | ✅/❌ | ... |

## VII. Regression Check
| Historical Bug | Status | Notes |
|---|---|---|
| [bug description] | ✅ No Regression / ❌ Regression | [details] |

## VIII. Recommendations
Items noted for user to fix:
1. [CRITICAL] [file:line] [description]
2. [WARNING] [file:line] [description]
3. [INFO] [description]

## IX. Test Environment
- Browser: [version]
- OS: Windows
- Date: [YYYY-MM-DD HH:MM]
- Files tested: [list with byte sizes]
```

## Output Location
`docs/qa-reports/[tarot|horoscope]-qa-[YYYY-MM-DD].md`

## Severity Levels
- **CRITICAL** — Breaks functionality, incorrect calculations, data corruption
- **WARNING** — Suboptimal but functional, convention violations, edge cases
- **INFO** — Suggestions, minor improvements, cosmetic issues, different school

## Report Naming
- Format: `[tarot|horoscope]-qa-[YYYY-MM-DD].md`
- Multiple runs same day: append `-run2`, `-run3`
