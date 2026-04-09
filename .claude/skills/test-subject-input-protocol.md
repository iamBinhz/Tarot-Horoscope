---
name: test-subject-input-protocol
description: "Standardized data mapping and input protocol for Test Subjects"
version: 1.0.0
---

# Test Subject Input Protocol

## When to Use
ALWAYS before running any test with a Test Subject. This ensures correct
data entry into both tarot-example.html and natal_chart.html.

## Test Subject Source
`Test_Subject/Test-Subject.md` — 10 subjects across 4 categories.

## Data Mapping Tables

### 1. Clock Time → Giờ (Birth Hour) Conversion
The natal chart form (`#bhour`) uses Earthly Branch hours (value 0-11).

| Clock Time Range | Giờ | Value | Branch |
|---|---|---|---|
| 23:00 – 01:00 | Giờ Tý | 0 | 子 |
| 01:00 – 03:00 | Giờ Sửu | 1 | 丑 |
| 03:00 – 05:00 | Giờ Dần | 2 | 寅 |
| 05:00 – 07:00 | Giờ Mão | 3 | 卯 |
| 07:00 – 09:00 | Giờ Thìn | 4 | 辰 |
| 09:00 – 11:00 | Giờ Tỵ | 5 | 巳 |
| 11:00 – 13:00 | Giờ Ngọ | 6 | 午 |
| 13:00 – 15:00 | Giờ Mùi | 7 | 未 |
| 15:00 – 17:00 | Giờ Thân | 8 | 申 |
| 17:00 – 19:00 | Giờ Dậu | 9 | 酉 |
| 19:00 – 21:00 | Giờ Tuất | 10 | 戌 |
| 21:00 – 23:00 | Giờ Hợi | 11 | 亥 |

### 2. Date Format Conversion
Test Subject dates: DD/MM/YYYY (Vietnamese format).
HTML `<input type="date">`: YYYY-MM-DD (ISO format).

### 3. Gender Mapping
| Test Subject | HTML Radio Value |
|---|---|
| Nam | M |
| Nữ | F |

### 4. Question Model Mapping (Tarot only)
| Test Subject Category | Question Model | data-model |
|---|---|---|
| Crossroads (Subjects 1-2) | ⚡ Crossroads | `crossroads` |
| Problem Analysis (Subjects 3-4) | 🔍 Problem Analysis | `problem` |
| Solution / Action (Subjects 5-7) | 💡 Solution / Action | `solution` |
| General (Subjects 8-10) | ✦ General | `general` |

## Pre-Mapped Test Subject Data

### Subject 1 — Trần Minh Trí
| Field | Raw | Converted |
|---|---|---|
| Name | Trần Minh Trí | Trần Minh Trí |
| Date | 15/08/1998 | **1998-08-15** |
| Hour | 08:30 | **4** (Giờ Thìn) |
| Gender | Nam | **M** |
| Model | Crossroads | **crossroads** |
| Question | "Tôi nên tiếp tục duy trì công việc ổn định hiện tại hay chấp nhận rủi ro để chuyển sang tập đoàn mới?" | → `#qInput` |

### Subject 2 — Vũ Thu Hương
| Field | Raw | Converted |
|---|---|---|
| Name | Vũ Thu Hương | Vũ Thu Hương |
| Date | 19/07/1985 | **1985-07-19** |
| Hour | 14:15 | **7** (Giờ Mùi) |
| Gender | Nữ | **F** |
| Model | Crossroads | **crossroads** |
| Question | "Tôi nên giữ nguyên danh mục đầu tư an toàn hay mạo hiểm chuyển hướng sang quỹ tài sản thay thế?" | → `#qInput` |

### Subject 3 — Nguyễn Lê Hà
| Field | Raw | Converted |
|---|---|---|
| Name | Nguyễn Lê Hà | Nguyễn Lê Hà |
| Date | 22/10/2001 | **2001-10-22** |
| Hour | 21:45 | **11** (Giờ Hợi) |
| Gender | Nữ | **F** |
| Model | Problem Analysis | **problem** |
| Question | "Nguyên nhân cốt lõi nào đang ẩn giấu đằng sau sự đổ vỡ giao tiếp trong mối quan hệ của chúng tôi hiện tại?" | → `#qInput` |

### Subject 4 — Đặng Tuấn Anh
| Field | Raw | Converted |
|---|---|---|
| Name | Đặng Tuấn Anh | Đặng Tuấn Anh |
| Date | 28/02/1992 | **1992-02-28** |
| Hour | 03:20 | **2** (Giờ Dần) |
| Gender | Nam | **M** |
| Model | Problem Analysis | **problem** |
| Question | "Đâu là vấn đề thực sự khiến dự án ứng dụng của tôi không thể giữ chân khách hàng?" | → `#qInput` |

### Subject 5 — Phạm Hoàng Bách
| Field | Raw | Converted |
|---|---|---|
| Name | Phạm Hoàng Bách | Phạm Hoàng Bách |
| Date | 05/04/2008 | **2008-04-05** |
| Hour | 11:00 | **6** (Giờ Ngọ) |
| Gender | Nam | **M** |
| Model | Solution / Action | **solution** |
| Question | "Tôi cần thực hiện những bước hành động cụ thể nào trong tháng này để xác định đúng ngành học phù hợp với bản thân?" | → `#qInput` |

### Subject 6 — Bùi Gia Huy
| Field | Raw | Converted |
|---|---|---|
| Name | Bùi Gia Huy | Bùi Gia Huy |
| Date | 09/11/2004 | **2004-11-09** |
| Hour | 17:35 | **9** (Giờ Dậu) |
| Gender | Nam | **M** |
| Model | Solution / Action | **solution** |
| Question | "Tôi nên chủ động tiếp cận và giải quyết mâu thuẫn với người đồng quản trị như thế nào để cứu vãn cộng đồng?" | → `#qInput` |

### Subject 7 — Trịnh Kim Liên
| Field | Raw | Converted |
|---|---|---|
| Name | Trịnh Kim Liên | Trịnh Kim Liên |
| Date | 25/09/1965 | **1965-09-25** |
| Hour | 05:10 | **3** (Giờ Mão) |
| Gender | Nữ | **F** |
| Model | Solution / Action | **solution** |
| Question | "Tôi cần làm gì để xoa dịu tình hình và tìm ra hướng hòa giải êm đẹp cho gia đình?" | → `#qInput` |

### Subject 8 — Lê Ngọc Mai
| Field | Raw | Converted |
|---|---|---|
| Name | Lê Ngọc Mai | Lê Ngọc Mai |
| Date | 12/12/1995 | **1995-12-12** |
| Hour | 19:50 | **10** (Giờ Tuất) |
| Gender | Nữ | **F** |
| Model | General | **general** |
| Question | "Năng lượng tổng quan của tôi ở thời điểm hiện tại là gì, và tôi cần lưu ý điều gì để tìm lại cảm hứng?" | → `#qInput` |

### Subject 9 — Ngô Quốc Bảo
| Field | Raw | Converted |
|---|---|---|
| Name | Ngô Quốc Bảo | Ngô Quốc Bảo |
| Date | 14/01/1978 | **1978-01-14** |
| Hour | 12:25 | **6** (Giờ Ngọ) |
| Gender | Nam | **M** |
| Model | General | **general** |
| Question | "Thông điệp tổng quan nào từ vũ trụ mà tôi cần lắng nghe lúc này để cải thiện tinh thần và sức khỏe bên trong?" | → `#qInput` |

### Subject 10 — Đỗ Thùy Trang
| Field | Raw | Converted |
|---|---|---|
| Name | Đỗ Thùy Trang | Đỗ Thùy Trang |
| Date | 03/06/1990 | **1990-06-03** |
| Hour | 09:05 | **5** (Giờ Tỵ) |
| Gender | Nữ | **F** |
| Model | General | **general** |
| Question | "Bức tranh toàn cảnh về con đường phát triển cá nhân của tôi trong 6 tháng tới sẽ như thế nào?" | → `#qInput` |

## Input Procedures

### For tarot-example.html
1. Navigate to tarot-example.html
2. Enter subject's **question** into `#qInput`
3. Click the correct **question model** button
4. Click "Shuffle & Draw" → wait for cards
5. Click each card to flip (3 cards)
6. Wait for reading panel + conclusionBox
7. Evaluate conclusionBox content
8. Toggle language (🌐) → re-evaluate
9. Click "New Reading" → repeat (minimum 3 runs)

### For natal_chart.html
1. Navigate to natal_chart.html
2. Enter subject's **name** into `#fname`
3. Enter **converted date** (YYYY-MM-DD) into `#bdate`
4. Select **converted hour** from `#bhour` dropdown
5. Select **gender** radio (M/F)
6. Click "Lập Lá Số" / "Cast Your Chart"
7. Evaluate chart output
8. Toggle language (🌐) → re-evaluate
