---
name: hexagram-data-entry
description: "Batch-add 64 hexagram entries to QUE_DATA in kinh-dich-data.js — correct structure, Văn Vương order, Vietnamese Thoán từ and Hào từ"
version: 1.0.0
---

# Hexagram Data Entry Skill

## When to Use
When populating QUE_DATA with 64 hexagram entries in kinh-dich-data.js.

## Entry Structure
```js
QUE_DATA[idx] = {
  name: "Tên quẻ tiếng Việt",  // e.g., "Thuần Càn"
  han: "漢字",                   // Chinese character(s)
  thuong: 0,  // Ngoại quái index (0=Càn,1=Đoài,2=Ly,3=Chấn,4=Tốn,5=Khảm,6=Cấn,7=Khôn)
  ha: 0,      // Nội quái index
  hanh: "Kim", // Ngũ Hành of this hexagram (from nội quái)
  thoanTu: "Thoán từ tóm tắt ngắn gọn (2-4 câu)",
  haoTu: [
    "Sơ ...: Hào từ ngắn gọn",  // hào 1 (bottom)
    "Nhị ...: ...",               // hào 2
    "Tam ...: ...",               // hào 3
    "Tứ ...: ...",                // hào 4
    "Ngũ ...: ...",               // hào 5
    "Thượng ...: ..."             // hào 6 (top)
  ]
};
```

## Hào Prefix Pattern
- Dương hào (━━━): Sơ Cửu / Cửu Nhị / Cửu Tam / Cửu Tứ / Cửu Ngũ / Thượng Cửu
- Âm hào (━━ ━━): Sơ Lục / Lục Nhị / Lục Tam / Lục Tứ / Lục Ngũ / Thượng Lục

## Văn Vương Order (64 quẻ theo thứ tự)
```
1. Thuần Càn (☰☰) — 2. Thuần Khôn (☷☷) — 3. Thủy Lôi Truân (☵☳) — 4. Sơn Thủy Mông (☶☵)
5. Thủy Thiên Nhu (☵☰) — 6. Thiên Thủy Tụng (☰☵) — 7. Địa Thủy Sư (☷☵) — 8. Thủy Địa Tỷ (☵☷)
9. Phong Thiên Tiểu Súc (☴☰) — 10. Thiên Trạch Lý (☰☱) — 11. Địa Thiên Thái (☷☰) — 12. Thiên Địa Bĩ (☰☷)
13. Thiên Hỏa Đồng Nhân (☰☲) — 14. Hỏa Thiên Đại Hữu (☲☰) — 15. Địa Sơn Khiêm (☷☶) — 16. Lôi Địa Dự (☳☷)
17. Trạch Lôi Tùy (☱☳) — 18. Sơn Phong Cổ (☶☴) — 19. Địa Trạch Lâm (☷☱) — 20. Phong Địa Quan (☴☷)
21. Hỏa Lôi Phệ Hạp (☲☳) — 22. Sơn Hỏa Bí (☶☲) — 23. Sơn Địa Bác (☶☷) — 24. Địa Lôi Phục (☷☳)
25. Thiên Lôi Vô Vọng (☰☳) — 26. Sơn Thiên Đại Súc (☶☰) — 27. Sơn Lôi Di (☶☳) — 28. Trạch Phong Đại Quá (☱☴)
29. Thuần Khảm (☵☵) — 30. Thuần Ly (☲☲) — 31. Trạch Sơn Hàm (☱☶) — 32. Lôi Phong Hằng (☳☴)
33. Thiên Sơn Độn (☰☶) — 34. Lôi Thiên Đại Tráng (☳☰) — 35. Hỏa Địa Tấn (☲☷) — 36. Địa Hỏa Minh Di (☷☲)
37. Phong Hỏa Gia Nhân (☴☲) — 38. Hỏa Trạch Khuê (☲☱) — 39. Thủy Sơn Kiển (☵☶) — 40. Lôi Thủy Giải (☳☵)
41. Sơn Trạch Tổn (☶☱) — 42. Phong Lôi Ích (☴☳) — 43. Trạch Thiên Quải (☱☰) — 44. Thiên Phong Cấu (☰☴)
45. Trạch Địa Tụy (☱☷) — 46. Địa Phong Thăng (☷☴) — 47. Trạch Thủy Khốn (☱☵) — 48. Thủy Phong Tỉnh (☵☴)
49. Trạch Hỏa Cách (☱☲) — 50. Hỏa Phong Đỉnh (☲☴) — 51. Thuần Chấn (☳☳) — 52. Thuần Cấn (☶☶)
53. Phong Sơn Tiệm (☴☶) — 54. Lôi Trạch Quy Muội (☳☱) — 55. Lôi Hỏa Phong (☳☲) — 56. Hỏa Sơn Lữ (☲☶)
57. Thuần Tốn (☴☴) — 58. Thuần Đoài (☱☱) — 59. Phong Thủy Hoán (☴☵) — 60. Thủy Trạch Tiết (☵☱)
61. Phong Trạch Trung Phu (☴☱) — 62. Lôi Sơn Tiểu Quá (☳☶) — 63. Thủy Hỏa Ký Tế (☵☲) — 64. Hỏa Thủy Vị Tế (☲☵)
```

## Quái Index (thuong/ha fields)
```
0=Càn(☰) 1=Đoài(☱) 2=Ly(☲) 3=Chấn(☳) 4=Tốn(☴) 5=Khảm(☵) 6=Cấn(☶) 7=Khôn(☷)
```

## Entry Steps
1. **Locate insertion point** — end of `const QUE_DATA = {` block
2. **Add 16 entries per task** — use batch format
3. **Verify count after each batch**:
   ```bash
   grep -c '"thoanTu":' .src/.main/.support/kinh-dich-data.js
   ```
4. **Notify**: `[Phase 4, Task X] done. Hexagrams N-M added. Total: K/64.`

## Quality Standards
- Thoán từ: 2-4 câu, capture essence of the hexagram's energy
- Hào từ: 1 câu per hào, include the classical image/metaphor
- DO NOT use generic filler text like "Tốt" or "Không tốt"
- Vietnamese only for now — English to be added in a future phase
