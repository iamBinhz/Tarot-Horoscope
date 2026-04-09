---
name: tarot-content-validation
description: "Validate Tarot reading content accuracy using Test Subjects"
version: 2.0.0
---

# Tarot Content Validation Skill

## When to Use
When testing the accuracy and coherence of Tarot reading output.

## Test Subject Source
`Test_Subject/Test-Subject.md` — 10 subjects across 4 categories:
1. Crossroads (Subjects 1-2)
2. Problem Analysis (Subjects 3-4)
3. Solution/Action (Subjects 5-7)
4. General (Subjects 8-10)

## Step 0 — MANDATORY PRE-TEST
Follow `test-subject-input-protocol` skill:
1. Enter the Test Subject's **question** (câu hỏi) into `#qInput`
2. Select the correct **question model** button
3. THEN proceed to shuffle

⚠️ Skipping this makes `extractDomain()` return 'general' → invalid test.

## Validation Steps Per Subject

### 1. Context Mapping
- Read the subject's **bối cảnh** (background) — understand their full situation
- Read the subject's **câu hỏi** (question) — the specific query
- Identify which spread category they fall into
- Note the expected thematic domains (career/love/finance/health/family/personal)

### 2. Reading Simulation (Minimum 3 Runs)
Per run:
- Shuffle & Draw → record drawn cards (name, position, reversed?)
- Click all 3 cards to flip
- Wait for reading panel + conclusionBox to appear
- Capture reading output (both card readings and conclusion)

### 3. Content Assessment Criteria

| Criterion | Weight | Description |
|---|---|---|
| Card Interpretation | 20% | Do interpretations match card meanings? |
| Context Relevance | 20% | Does reading address the subject's bối cảnh? |
| Interaction Coherence | 15% | Are card pair interactions logically connected? |
| Conclusion Quality | 15% | Does conclusionBox provide a synthesized answer? |
| Action Relevance | 15% | Are action steps practical for the query? |
| Bilingual Parity | 10% | Vietnamese and English convey same meaning? |
| Tone Appropriateness | 5% | Does tone match the question's nature? |

### 4. Scoring
- Each criterion: 0 (fail) to 5 (excellent)
- Total score out of 100 (weighted)
- Threshold: ≥ 70 = PASS, 50-69 = MARGINAL, < 50 = FAIL

### 5. Multi-Run Analysis
After 3 runs per subject:
- Average the scores across runs
- Flag issues appearing in ALL runs → systematic
- Flag issues appearing in SOME runs → edge case
- Note which card combinations produced best/worst readings

### 6. Bilingual Testing
For each run:
- Evaluate in default language
- Toggle 🌐 → evaluate in other language
- Report any parity issues

### 7. Edge Cases to Test
- Reversed cards: Do interpretations properly flip?
- All same suit: Does elemental analysis handle this?
- Major Arcana only: Does energy assessment adjust?
- Missing interaction key: Does fallback work gracefully?

## Anti-Patterns
- Don't judge randomness — focus on interpretation quality after cards are drawn
- Don't expect specific cards — test the interpretation pipeline
- Don't skip Vietnamese output — test both languages equally
- Don't skip the bối cảnh — context relevance is 20% of the score
