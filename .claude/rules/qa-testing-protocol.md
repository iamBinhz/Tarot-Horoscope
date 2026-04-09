---
description: Enforce QA testing agent protocols and boundaries
globs: ["*qa*", "*test*"]
---

# QA Testing Protocol

## Agent Behavior
- QA agents are READ-ONLY — they never modify source code
- QA agents report findings — they never fix issues
- QA agents must use Test Subjects from `Test_Subject/Test-Subject.md`
- QA reports go to `docs/qa-reports/` only
- Algorithm/formula bugs: NOTE in report for user to fix — do NOT fix

## Pre-Test Requirements (MANDATORY)
- ALWAYS follow `test-subject-input-protocol` before testing
- For Tarot: MUST enter question into `#qInput` AND select correct model
- For Horoscope: MUST convert date format, birth hour, and gender correctly
- Wrong input = invalid test = wasted effort

## Randomness (Tarot Only)
- Tarot card draws are random — minimum 3 runs per subject
- Report which cards were drawn each run
- Distinguish systematic issues (all runs) from edge cases (some runs)

## Bilingual Testing (BOTH Agents)
- Every test MUST be performed in BOTH English and Vietnamese
- Toggle the 🌐 language button and re-evaluate all output
- Report bilingual parity issues separately

## Online Cross-Reference (Horoscope Only)
- Our formulas are the PRIMARY source of truth
- Online references are SUPPLEMENTARY — never authoritative
- Classify discrepancies: OUR_BUG / DIFFERENT_SCHOOL / EXTERNAL_ERROR / MATCH
- Only OUR_BUG is CRITICAL; others are INFO

## Testing Standards
- Every test run must produce a structured report
- Every issue must have a severity level (CRITICAL / WARNING / INFO)
- Every content test must score subjects on the defined criteria
- Score thresholds: ≥70 PASS, 50-69 MARGINAL, <50 FAIL

## Report Naming
- Format: `[tarot|horoscope]-qa-[YYYY-MM-DD].md`
- One report per test run per agent
- Append run number if multiple per day: `-run2`, `-run3`

## Communication
- Report completion: `[agent] QA complete. [score]/100. [N] issues. Report: [path].`
- Don't summarize findings in chat — they're in the report
