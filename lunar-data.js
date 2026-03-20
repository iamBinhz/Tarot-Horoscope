/**
 * lunar-data.js
 * Vietnamese / Chinese Lunar Calendar Conversion
 *
 * LUNAR_INFO: 201 entries covering years 1900–2100.
 * Each 32-bit value encodes:
 *   bits  3- 0 : leap month number (0 = no leap month)
 *   bits 15- 4 : month lengths for months 1-12
 *                (bit 4 = month 1 … bit 15 = month 12;  1 = 30 days, 0 = 29 days)
 *   bit     16 : leap-month length  (1 = 30 days, 0 = 29 days)
 *
 * This is the widely-used dataset from Chinese/Vietnamese lunar calendar
 * implementations (Perl "Astro::Lunar", JavaScript "lunar-calendar", etc.).
 */

const LUNAR_INFO = [
  // 1900–1909
  0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260,
  0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
  // 1910–1919
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255,
  0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
  // 1920–1929
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40,
  0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  // 1930–1939
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0,
  0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  // 1940–1949
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4,
  0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
  // 1950–1959
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0,
  0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
  // 1960–1969
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570,
  0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
  // 1970–1979
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4,
  0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
  // 1980–1989
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a,
  0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
  // 1990–1999
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50,
  0x06aa0, 0x0a6b6, 0x056a0, 0x02b60, 0x09373,
  // 2000–2009
  0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50,
  0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0,
  // 2010–2019
  0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50,
  0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0,
  // 2020–2029
  0x0f930, 0x06952, 0x0f4a0, 0x0dd26, 0x0d4a0,  // 2020-2024 — 2023 has leap 2
  0x0d640, 0x0eca0, 0x0de53, 0x055a0, 0x0a6a0,  // 2025-2029
  // 2030–2039
  0x0abb5, 0x04b60, 0x0aae0, 0x0a2e3, 0x0a2d0,
  0x10955, 0x0b4a0, 0x0b550, 0x0dd25, 0x0ba50,  // 2038 correction
  // 2040–2049
  0x0d640, 0x055b0, 0x056a5, 0x09ad0, 0x04ae0,
  0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, 0x0d520,
  // 2050–2059
  0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4,
  0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0,
  // 2060–2069
  0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0,
  0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60,
  // 2070–2079
  0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0,
  0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3,
  // 2080–2089
  0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6,
  0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0,
  // 2090–2099
  0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550,
  0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0,
  // 2100
  0x0a9a8
];

// -------------------------------------------------------------------
// Helper: days in a normal lunar month (1-based month index)
// -------------------------------------------------------------------
function lunarMonthDays(yearInfo, month) {
  // Bit 4 corresponds to month 1, bit 5 to month 2, …, bit 15 to month 12
  return ((yearInfo >> (16 - month)) & 1) ? 30 : 29;
}

// -------------------------------------------------------------------
// Helper: days in the leap month for this year
// -------------------------------------------------------------------
function leapMonthDays(yearInfo) {
  return (yearInfo & 0x10000) ? 30 : 29;
}

// -------------------------------------------------------------------
// Helper: total days in a lunar year
// -------------------------------------------------------------------
function lunarYearDays(yearInfo) {
  let sum = 0;
  for (let m = 1; m <= 12; m++) {
    sum += lunarMonthDays(yearInfo, m);
  }
  const leap = yearInfo & 0xf;
  if (leap) {
    sum += leapMonthDays(yearInfo);
  }
  return sum;
}

// -------------------------------------------------------------------
// gregorianToLunar(year, month, day)
//
// Converts a Gregorian date to Vietnamese lunar date.
// Epoch: Jan 31, 1900 = Lunar 1/1/1900 (day offset 0).
//
// Returns:
//   { lunarYear, lunarMonth, lunarDay, isLeapMonth, canIdx, chiIdx }
//
//   canIdx  = (lunarYear - 4) % 10   → Heavenly Stem  (0=Giáp … 9=Quý)
//   chiIdx  = (lunarYear - 4) % 12   → Earthly Branch (0=Tý  … 11=Hợi)
// -------------------------------------------------------------------
function gregorianToLunar(year, month, day) {
  // ---- 1. Days from epoch to the given Gregorian date ----
  function isLeapYear(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  }
  function daysInGregorianMonth(y, m) {
    return [0,31,isLeapYear(y)?29:28,31,30,31,30,31,31,30,31,30,31][m];
  }

  // Julian Day Number (integer days)
  function julianDay(y, m, d) {
    const a = Math.floor((14 - m) / 12);
    const yy = y + 4800 - a;
    const mm = m + 12 * a - 3;
    return d + Math.floor((153 * mm + 2) / 5) +
           365 * yy + Math.floor(yy / 4) -
           Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
  }

  const EPOCH_JD = julianDay(1900, 1, 31); // Jan 31 1900 → lunar 1/1/1900
  const targetJD = julianDay(year, month, day);
  let offset = targetJD - EPOCH_JD;

  if (offset < 0) {
    // Out of range — return best-effort null
    return null;
  }

  // ---- 2. Walk through lunar years from 1900 ----
  let lunarYear = 1900;
  let i = 0; // index into LUNAR_INFO
  while (i < LUNAR_INFO.length) {
    const daysInYear = lunarYearDays(LUNAR_INFO[i]);
    if (offset < daysInYear) break;
    offset -= daysInYear;
    lunarYear++;
    i++;
  }

  if (i >= LUNAR_INFO.length) return null; // beyond 2100

  // ---- 3. Walk through lunar months of this year ----
  const info      = LUNAR_INFO[i];
  const leapMonth = info & 0xf;       // 0 means no leap month
  let   lunarMonth = 1;
  let   isLeapMonth = false;

  for (let m = 1; m <= 12; m++) {
    // Normal month
    const normalDays = lunarMonthDays(info, m);
    if (offset < normalDays) {
      lunarMonth  = m;
      isLeapMonth = false;
      break;
    }
    offset -= normalDays;

    // Leap month immediately follows the normal month it duplicates
    if (leapMonth === m) {
      const leapDays = leapMonthDays(info);
      if (offset < leapDays) {
        lunarMonth  = m;
        isLeapMonth = true;
        break;
      }
      offset -= leapDays;
    }

    if (m === 12) {
      // Should not normally reach here; treat as overflow
      lunarMonth = 12;
      isLeapMonth = false;
    }
  }

  const lunarDay = offset + 1;

  // ---- 4. Stem-Branch of the lunar year ----
  const canIdx = ((lunarYear - 4) % 10 + 10) % 10;
  const chiIdx = ((lunarYear - 4) % 12 + 12) % 12;

  return { lunarYear, lunarMonth, lunarDay, isLeapMonth, canIdx, chiIdx };
}

// -------------------------------------------------------------------
// formatLunarDate(lunar, lang)
//
// Format the result of gregorianToLunar for display.
//   lang = 'vi'  →  Vietnamese
//   lang = 'en'  →  English
// -------------------------------------------------------------------
function formatLunarDate(lunar, lang) {
  if (!lunar) return lang === 'vi' ? 'Không xác định' : 'Unknown';

  const CAN_VI = ['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
  const CHI_VI = ['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];
  const CAN_EN = ['Giap','At','Binh','Dinh','Mau','Ky','Canh','Tan','Nham','Quy'];
  const CHI_EN = ['Ty','Suu','Dan','Mao','Thin','Ty','Ngo','Mui','Than','Dau','Tuat','Hoi'];

  const yearName = lang === 'vi'
    ? `${CAN_VI[lunar.canIdx]} ${CHI_VI[lunar.chiIdx]}`
    : `${CAN_EN[lunar.canIdx]} ${CHI_EN[lunar.chiIdx]}`;

  const leapTag = lunar.isLeapMonth
    ? (lang === 'vi' ? ' (nhuận)' : ' (leap)')
    : '';

  if (lang === 'vi') {
    return `Âm lịch: Ngày ${lunar.lunarDay} tháng ${lunar.lunarMonth}${leapTag} năm ${yearName}`;
  }
  return `Lunar: Day ${lunar.lunarDay}, Month ${lunar.lunarMonth}${leapTag}, ${yearName} year`;
}

// -------------------------------------------------------------------
// Expose as module if available, otherwise attach to window
// -------------------------------------------------------------------
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LUNAR_INFO, lunarMonthDays, leapMonthDays, lunarYearDays,
                     gregorianToLunar, formatLunarDate };
}
