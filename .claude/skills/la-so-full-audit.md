---
name: la-so-full-audit
description: "Exhaustive Lá Số audit — every star, every cung, every calculation, online cross-reference"
version: 2.0.0
---

# Lá Số Full Audit Skill

## When to Use
When performing a comprehensive quality check on a generated Tử Vi natal chart.
This is the most thorough check — it verifies EVERYTHING.

## Test Subject Source
`Test_Subject/Test-Subject.md` — 10 subjects with birth data.

## Audit Procedure

### Phase 0: Input Preparation (MANDATORY)
Follow `test-subject-input-protocol` skill:
1. Convert date DD/MM/YYYY → YYYY-MM-DD
2. Convert clock time → Giờ value
3. Map gender: Nam→M, Nữ→F
4. Enter all converted data into natal_chart.html

### Phase 1: Generate the Chart
1. Open `natal_chart.html` in browser
2. Enter converted data (name, date, hour, gender)
3. Click "Lập Lá Số" / "Cast Your Chart"
4. Capture the full chart output

### Phase 2: Extract ALL Data Points

#### 2A — Core Identity
| Data Point | Value to Record |
|---|---|
| Gregorian date | DD/MM/YYYY |
| Lunar date (converted) | Day/Month/Year Âm Lịch |
| Thiên Can | Giáp/Ất/Bính/Đinh/Mậu/Kỷ/Canh/Tân/Nhâm/Quý |
| Địa Chi | Tý/Sửu/Dần/Mão/Thìn/Tỵ/Ngọ/Mùi/Thân/Dậu/Tuất/Hợi |
| Nạp Âm | e.g., Hải Trung Kim, Lư Trung Hỏa |
| Ngũ Hành (from Nạp Âm) | Kim/Mộc/Thủy/Hỏa/Thổ |
| Âm/Dương | Dương Nam / Dương Nữ / Âm Nam / Âm Nữ |

#### 2B — Cung Layout (ALL 12)
| Palace # | Name | Branch | Stars | Đại Hạn |
|---|---|---|---|---|
| 0 | Mệnh | ? | ? | ?–? |
| 1 | Huynh Đệ | ? | ? | ?–? |
| 2 | Phu Thê | ? | ? | ?–? |
| 3 | Tử Tức | ? | ? | ?–? |
| 4 | Tài Bạch | ? | ? | ?–? |
| 5 | Tật Ách | ? | ? | ?–? |
| 6 | Thiên Di | ? | ? | ?–? |
| 7 | Nô Bộc | ? | ? | ?–? |
| 8 | Quan Lộc | ? | ? | ?–? |
| 9 | Điền Trạch | ? | ? | ?–? |
| 10 | Phúc Đức | ? | ? | ?–? |
| 11 | Phụ Mẫu | ? | ? | ?–? |

#### 2C — Mệnh & Thân
| Item | Formula | Expected | Actual | Match? |
|---|---|---|---|---|
| Mệnh Cung | `(2 + lunarMonth - 1 - hourIdx + 24) % 12` | ? | ? | ? |
| Thân Cung | `(2 + lunarMonth - 1 + hourIdx) % 12` | ? | ? | ? |

#### 2D — Cục
| Step | Value |
|---|---|
| Year Can Index | ? |
| Mệnh Branch Index | ? |
| Adjusted Can (parity) | ? |
| Nạp Âm pair index | ? |
| Nạp Âm for Cục | ? |
| Cục Hành | ? |
| Cục Value | ? |
| Final Cục | ? |

#### 2E — ALL 14 Chính Tinh + Brightness
| Star | Branch | Palace | Brightness | Expected |
|---|---|---|---|---|
| Tử Vi | ? | ? | ? | from STAR_BRIGHTNESS_TABLE |
| Thiên Cơ | ? | ? | ? | |
| Thái Dương | ? | ? | ? | |
| Vũ Khúc | ? | ? | ? | |
| Thiên Đồng | ? | ? | ? | |
| Liêm Trinh | ? | ? | ? | |
| Thiên Phủ | ? | ? | ? | |
| Thái Âm | ? | ? | ? | |
| Tham Lang | ? | ? | ? | |
| Cự Môn | ? | ? | ? | |
| Thiên Tướng | ? | ? | ? | |
| Thiên Lương | ? | ? | ? | |
| Thất Sát | ? | ? | ? | |
| Phá Quân | ? | ? | ? | |

#### 2F — ALL Phụ Tinh + Brightness
Record every aux star placement and brightness.
Stars include: Văn Xương, Văn Khúc, Tả Phụ, Hữu Bật, Thiên Khôi,
Thiên Việt, Lộc Tồn, Thiên Mã, Hồng Loan, Thiên Hỉ, Đào Hoa,
Hỏa Tinh, Linh Tinh, Kình Dương, Đà La, Thiên Không, Địa Không,
Địa Kiếp, and all others in ALL_AUX.

#### 2G — Tứ Hóa
| Transformation | Star | Palace | Correct? |
|---|---|---|---|
| Hóa Lộc | ? | ? | ? |
| Hóa Quyền | ? | ? | ? |
| Hóa Khoa | ? | ? | ? |
| Hóa Kỵ | ? | ? | ? |

#### 2H — Tuần & Triệt
| Item | Formula | Positions | Correct? |
|---|---|---|---|
| Tuần | `((chiIdx - canIdx) % 12 + 12) % 12` → +10, +11 | ?–? | ? |
| Triệt | `(8 - 2*(canIdx % 5) + 12) % 12` → +0, +1 | ?–? | ? |

#### 2I — Tràng Sinh Cycle
Record all 12 phases and their branch positions.

#### 2J — Đại Hạn
Verify: starting age = Cục value, direction from Âm/Dương + gender,
each palace spans 10 years.

#### 2K — Center Cell Info
Verify: chart title, name, year, Can+Chi, month, day, giờ,
Nạp Âm, Âm/Dương, Mệnh Hành, Cục, Mệnh Chủ, age.

#### 2L — Interpretations & Tổng Luận
Evaluate: `generateInterpretations()`, `generateTongLuan()`,
`generateGuidance()` output quality and consistency.

### Phase 2.5: Bilingual Verification
- Toggle 🌐 language button
- Verify all dynamic text switches correctly
- Check interpretations quality in both languages
- Report any parity issues

### Phase 3: Self-Verification (PRIMARY — Formula-Based)
Before looking at external sources, verify against OWN formulas:
1. Manually compute Mệnh Cung
2. Manually compute Thân Cung
3. Manually trace `deriveCuc()` step by step
4. Look up `TU_HOA_TABLE[canIdx]` and verify
5. Compute Tuần/Triệt positions
6. Verify main star positions against `TU_VI_POS` + `deriveMainStarPositions()`
7. Flag: CODE OUTPUT ≠ FORMULA EXPECTATION → real bug → note for user

### Phase 4: Online Cross-Reference (SUPPLEMENTARY — Critical Evaluation)
⚠️ **FIRM STANCE**: Our formulas are source of truth.
You are NOT a passive comparator. You understand WHY things differ.

1. Search 1-2 established Tử Vi websites
2. Input SAME birth data
3. For EACH discrepancy, root cause analysis:

| Data Point | Our Chart | Our Formula | Reference | Source | Classification | Assessment |
|---|---|---|---|---|---|---|
| Mệnh Cung | ? | formula ✓ | ? | site | ? | ? |

**Classification Rules:**
- `OUR_BUG` → Code doesn't match own formula → **CRITICAL** → note for user to fix
- `DIFFERENT_SCHOOL` → Legitimate methodological difference → **INFO**
- `EXTERNAL_ERROR` → Reference site appears wrong → **INFO**
- `MATCH` → Both agree → ✅

## Severity Classification
- **CRITICAL**: Mệnh/Thân wrong, Cục wrong, Tứ Hóa wrong, main star misplaced
- **WARNING**: Brightness mismatch, aux star missing, Tràng Sinh off
- **INFO**: Minor rendering, edge case, label formatting, different school

## Anti-Patterns
- Don't skip any star — exhaustive checking is the goal
- **Don't blindly trust online references** — our formulas are truth
- **Don't report "different from website X" as error** — analyze root cause
- Don't skip Phụ Tinh — they affect interpretations
- Don't ignore brightness — Hãm vs Miếu changes meaning entirely
- **Don't assume external sources are correct** — many have bugs
