// tuvi-data.js
// Core lookup tables for Tu Vi Dau So (Purple Star Astrology) system.
// All variables are global (no export) for direct browser <script> inclusion.
// Generated for year range 1940-2100.

// =============================================================================
// 1. TU_VI_POS — Tử Vi position lookup
//    Key: Cục value (2/3/4/5/6), sub-key: lunar day (1-30)
//    Value: branch index (0=Tý … 11=Hợi)
//
//    Formula: branchIdx = (ceil(day / cucValue) + 1) % 12
//    This places Tử Vi starting from Dần (index 2) and moving clockwise.
//
//    Branch index map:
//      0=Tý  1=Sửu  2=Dần  3=Mão  4=Thìn  5=Tỵ
//      6=Ngọ 7=Mùi  8=Thân 9=Dậu 10=Tuất 11=Hợi
// =============================================================================

const TU_VI_POS = {
  // Thủy Nhị Cục (N=2): ceil(D/2)+1 mod 12
  // D=1→2, D=2→2, D=3→3, D=4→3, D=5→4, D=6→4, D=7→5, D=8→5,
  // D=9→6, D=10→6, D=11→7, D=12→7, D=13→8, D=14→8, D=15→9,
  // D=16→9, D=17→10, D=18→10, D=19→11, D=20→11, D=21→0, D=22→0,
  // D=23→1, D=24→1, D=25→2, D=26→2, D=27→3, D=28→3, D=29→4, D=30→4
  2: {
     1: 2,  2: 2,  3: 3,  4: 3,  5: 4,  6: 4,  7: 5,  8: 5,
     9: 6, 10: 6, 11: 7, 12: 7, 13: 8, 14: 8, 15: 9, 16: 9,
    17:10, 18:10, 19:11, 20:11, 21: 0, 22: 0, 23: 1, 24: 1,
    25: 2, 26: 2, 27: 3, 28: 3, 29: 4, 30: 4,
  },
  // Mộc Tam Cục (N=3): ceil(D/3)+1 mod 12
  // D=1→2, D=2→2, D=3→2, D=4→3, D=5→3, D=6→3, D=7→4, D=8→4,
  // D=9→4, D=10→5, D=11→5, D=12→5, D=13→6, D=14→6, D=15→6,
  // D=16→7, D=17→7, D=18→7, D=19→8, D=20→8, D=21→8, D=22→9,
  // D=23→9, D=24→9, D=25→10, D=26→10, D=27→10, D=28→11, D=29→11, D=30→11
  3: {
     1: 2,  2: 2,  3: 2,  4: 3,  5: 3,  6: 3,  7: 4,  8: 4,
     9: 4, 10: 5, 11: 5, 12: 5, 13: 6, 14: 6, 15: 6, 16: 7,
    17: 7, 18: 7, 19: 8, 20: 8, 21: 8, 22: 9, 23: 9, 24: 9,
    25:10, 26:10, 27:10, 28:11, 29:11, 30:11,
  },
  // Kim Tứ Cục (N=4): ceil(D/4)+1 mod 12
  // D=1→2, D=2→2, D=3→2, D=4→2, D=5→3, D=6→3, D=7→3, D=8→3,
  // D=9→4, D=10→4, D=11→4, D=12→4, D=13→5, D=14→5, D=15→5, D=16→5,
  // D=17→6, D=18→6, D=19→6, D=20→6, D=21→7, D=22→7, D=23→7, D=24→7,
  // D=25→8, D=26→8, D=27→8, D=28→8, D=29→9, D=30→9
  4: {
     1: 2,  2: 2,  3: 2,  4: 2,  5: 3,  6: 3,  7: 3,  8: 3,
     9: 4, 10: 4, 11: 4, 12: 4, 13: 5, 14: 5, 15: 5, 16: 5,
    17: 6, 18: 6, 19: 6, 20: 6, 21: 7, 22: 7, 23: 7, 24: 7,
    25: 8, 26: 8, 27: 8, 28: 8, 29: 9, 30: 9,
  },
  // Thổ Ngũ Cục (N=5): ceil(D/5)+1 mod 12
  // D=1→2, D=2→2, D=3→2, D=4→2, D=5→2, D=6→3, D=7→3, D=8→3, D=9→3, D=10→3,
  // D=11→4, D=12→4, D=13→4, D=14→4, D=15→4, D=16→5, D=17→5, D=18→5, D=19→5, D=20→5,
  // D=21→6, D=22→6, D=23→6, D=24→6, D=25→6, D=26→7, D=27→7, D=28→7, D=29→7, D=30→7
  5: {
     1: 2,  2: 2,  3: 2,  4: 2,  5: 2,
     6: 3,  7: 3,  8: 3,  9: 3, 10: 3,
    11: 4, 12: 4, 13: 4, 14: 4, 15: 4,
    16: 5, 17: 5, 18: 5, 19: 5, 20: 5,
    21: 6, 22: 6, 23: 6, 24: 6, 25: 6,
    26: 7, 27: 7, 28: 7, 29: 7, 30: 7,
  },
  // Hỏa Lục Cục (N=6): ceil(D/6)+1 mod 12
  // D=1-6→2, D=7-12→3, D=13-18→4, D=19-24→5, D=25-30→6
  6: {
     1: 2,  2: 2,  3: 2,  4: 2,  5: 2,  6: 2,
     7: 3,  8: 3,  9: 3, 10: 3, 11: 3, 12: 3,
    13: 4, 14: 4, 15: 4, 16: 4, 17: 4, 18: 4,
    19: 5, 20: 5, 21: 5, 22: 5, 23: 5, 24: 5,
    25: 6, 26: 6, 27: 6, 28: 6, 29: 6, 30: 6,
  },
};

// =============================================================================
// 2. deriveMainStarPositions(tuViPos)
//    Given Tử Vi's branch index, returns all 14 main star positions.
//    Thiên Phủ is the mirror of Tử Vi across the Tý-Ngọ axis.
//    Stars in the Tử Vi group spread counter-clockwise from Tử Vi.
//    Stars in the Thiên Phủ group spread clockwise from Thiên Phủ.
// =============================================================================

function deriveMainStarPositions(tuViPos) {
  const tpPos = (12 - tuViPos) % 12; // Thiên Phủ mirrors Tử Vi
  return {
    'Tử Vi':      tuViPos,
    'Thiên Phủ':  tpPos,
    // Stars spreading from Tử Vi (counter-clockwise = subtract)
    'Thiên Cơ':   (tuViPos + 11) % 12,  // 1 step CCW
    'Thái Dương': (tuViPos +  9) % 12,  // 3 steps CCW
    'Vũ Khúc':    (tuViPos +  8) % 12,  // 4 steps CCW
    'Thiên Đồng': (tuViPos +  7) % 12,  // 5 steps CCW
    'Liêm Trinh': (tuViPos +  4) % 12,  // 8 steps CCW
    // Stars spreading from Thiên Phủ (clockwise = add)
    'Thái Âm':    (tpPos +  1) % 12,
    'Tham Lang':  (tpPos +  2) % 12,
    'Cự Môn':     (tpPos +  3) % 12,
    'Thiên Tướng':(tpPos +  4) % 12,
    'Thiên Lương':(tpPos +  5) % 12,
    'Thất Sát':   (tpPos +  6) % 12,
    'Phá Quân':   (tpPos + 10) % 12,
  };
}

// =============================================================================
// 3. Auxiliary star placement tables
// =============================================================================

// AUX_BY_HOUR[starName][hourIndex (0-11)] = branchIndex
// Hour index: 0=Tý, 1=Sửu, 2=Dần, ... 11=Hợi
const AUX_BY_HOUR = {
  // Văn Xương: starts Tuất(10), moves counter-clockwise (subtract) with each hour
  'Văn Xương': [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11],
  // Văn Khúc: starts Thìn(4), moves clockwise (add) with each hour
  'Văn Khúc':  [ 4, 5, 6, 7, 8, 9,10,11, 0, 1, 2,  3],
  // Địa Không: starts Hợi(11), moves counter-clockwise
  'Địa Không': [11,10, 9, 8, 7, 6, 5, 4, 3, 2, 1,  0],
  // Địa Kiếp: starts Hợi(11), moves clockwise
  'Địa Kiếp':  [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// AUX_BY_MONTH[starName][monthIndex (0-based, 0=tháng 1)] = branchIndex
const AUX_BY_MONTH = {
  // Tả Phụ: starts Thìn(4), moves clockwise with each month
  'Tả Phụ': [ 4, 5, 6, 7, 8, 9,10,11, 0, 1, 2, 3],
  // Hữu Bật: starts Tuất(10), moves counter-clockwise with each month
  'Hữu Bật': [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,11],
};

// AUX_BY_CAN[starName][canIndex (0=Giáp … 9=Quý)] = branchIndex
const AUX_BY_CAN = {
  'Thiên Khôi': [1, 0,11,11, 1, 0, 7, 6, 3, 3],
  'Thiên Việt': [7, 8, 9, 9, 7, 8, 1, 2, 5, 5],
  'Lộc Tồn':    [2, 3, 5, 6, 5, 6, 8, 9,11, 0],
  'Kình Dương': [3, 4, 6, 7, 6, 7, 9,10, 0, 1],
  'Đà La':      [1, 2, 4, 5, 4, 5, 7, 8,10,11],
};

// AUX_BY_CHI[starName][chiIndex (0=Tý … 11=Hợi)] = branchIndex
const AUX_BY_CHI = {
  // Thiên Mã: Dần/Thân/Tỵ/Hợi — cycles every 4 branches
  'Thiên Mã':  [ 2,11, 8, 5, 2,11, 8, 5, 2,11, 8, 5],
  // Đào Hoa: Dậu/Ngọ/Mão/Tý — cycles every 4 branches
  'Đào Hoa':   [ 9, 6, 3, 0, 9, 6, 3, 0, 9, 6, 3, 0],
  // Hồng Loan: starts Mão(3) at Tý, moves counter-clockwise
  'Hồng Loan': [ 3, 2, 1, 0,11,10, 9, 8, 7, 6, 5, 4],
  // Thiên Hỉ: opposite of Hồng Loan (6 branches away)
  'Thiên Hỉ':  [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,11,10],
  // Cô Thần: groups of 3
  'Cô Thần':   [ 2, 2, 5, 5, 5, 8, 8, 8,11,11,11, 2],
  // Quả Tú: groups of 3
  'Quả Tú':    [10,10, 1, 1, 1, 4, 4, 4, 7, 7, 7,10],
};

// Hỏa Tinh & Linh Tinh — placement depends on year Chi group + birth hour index
// Starting branch for hour index 0 (Tý hour), then add hour index clockwise
const HOA_TINH_START = { fire: 1, water: 2, metal: 1, wood: 9 };
const LINH_TINH_START = { fire: 10, water: 10, metal: 3, wood: 3 };

// Returns the element group string for a given year Chi index (0=Tý … 11=Hợi)
function getYearGroup(chiIdx) {
  if ([2, 6, 10].includes(chiIdx)) return 'fire';   // Dần, Ngọ, Tuất
  if ([8,  0,  4].includes(chiIdx)) return 'water';  // Thân, Tý, Thìn
  if ([5,  9,  1].includes(chiIdx)) return 'metal';  // Tỵ, Dậu, Sửu
  return 'wood';                                      // Hợi, Mão, Mùi
}

// Returns Hỏa Tinh branch index for given year Chi index and hour index
function getHoaTinhPos(yearChiIdx, hourIdx) {
  const group = getYearGroup(yearChiIdx);
  return (HOA_TINH_START[group] + hourIdx) % 12;
}

// Returns Linh Tinh branch index for given year Chi index and hour index
function getLinhTinhPos(yearChiIdx, hourIdx) {
  const group = getYearGroup(yearChiIdx);
  return (LINH_TINH_START[group] + hourIdx) % 12;
}

// =============================================================================
// 4. TU_HOA_TABLE — Tứ Hóa by Thiên Can
//    Index: [Hóa Lộc, Hóa Quyền, Hóa Khoa, Hóa Kỵ]
// =============================================================================

const TU_HOA_TABLE = {
  0: ['Liêm Trinh', 'Phá Quân',   'Vũ Khúc',   'Thái Dương'], // Giáp
  1: ['Thiên Cơ',   'Thiên Lương','Tử Vi',      'Thái Âm'],    // Ất
  2: ['Thiên Đồng', 'Thiên Cơ',   'Văn Xương',  'Liêm Trinh'], // Bính
  3: ['Thái Âm',    'Thiên Đồng', 'Thiên Cơ',   'Cự Môn'],     // Đinh
  4: ['Tham Lang',  'Thái Âm',    'Hữu Bật',    'Thiên Cơ'],   // Mậu
  5: ['Vũ Khúc',    'Tham Lang',  'Thiên Lương','Văn Khúc'],   // Kỷ
  6: ['Thái Dương', 'Vũ Khúc',    'Thái Âm',    'Thiên Đồng'], // Canh
  7: ['Cự Môn',     'Thái Dương', 'Văn Khúc',   'Văn Xương'],  // Tân
  8: ['Thiên Lương','Tử Vi',      'Tả Phụ',     'Vũ Khúc'],    // Nhâm
  9: ['Phá Quân',   'Cự Môn',     'Thái Âm',    'Tham Lang'],  // Quý
};

// =============================================================================
// 5. STAR_BRIGHTNESS_TABLE — 14 main stars × 12 branches
//    Index: branch 0=Tý, 1=Sửu, … 11=Hợi
//    Values: 'Miếu' | 'Vượng' | 'Đắc' | 'Bình' | 'Hãm'
// =============================================================================

const STAR_BRIGHTNESS_TABLE = {
  'Tử Vi':       ['Hãm', 'Vượng','Miếu', 'Đắc', 'Miếu', 'Vượng','Miếu', 'Đắc', 'Hãm', 'Bình', 'Miếu', 'Vượng'],
  'Thiên Cơ':    ['Miếu','Hãm',  'Miếu', 'Vượng','Đắc', 'Bình', 'Vượng','Hãm', 'Đắc', 'Bình', 'Miếu', 'Vượng'],
  'Thái Dương':  ['Hãm', 'Hãm',  'Vượng','Miếu', 'Miếu','Vượng','Miếu', 'Đắc', 'Đắc', 'Bình', 'Hãm',  'Hãm'  ],
  'Vũ Khúc':     ['Miếu','Đắc',  'Bình', 'Hãm',  'Miếu','Hãm',  'Đắc',  'Bình','Vượng','Miếu','Miếu', 'Đắc'  ],
  'Thiên Đồng':  ['Miếu','Hãm',  'Đắc',  'Vượng','Hãm', 'Miếu', 'Đắc',  'Hãm', 'Bình','Vượng','Bình', 'Hãm'  ],
  'Liêm Trinh':  ['Hãm', 'Bình', 'Miếu', 'Hãm',  'Miếu','Đắc',  'Hãm',  'Bình','Vượng','Đắc', 'Miếu', 'Hãm'  ],
  'Thiên Phủ':   ['Miếu','Đắc',  'Vượng','Bình', 'Đắc', 'Miếu', 'Vượng','Bình','Miếu', 'Đắc', 'Vượng','Bình'  ],
  'Thái Âm':     ['Miếu','Vượng','Hãm',  'Hãm',  'Hãm', 'Hãm',  'Hãm',  'Đắc', 'Đắc', 'Vượng','Miếu', 'Miếu' ],
  'Tham Lang':   ['Miếu','Hãm',  'Bình', 'Vượng','Miếu','Bình',  'Hãm',  'Đắc', 'Đắc', 'Hãm',  'Bình', 'Vượng'],
  'Cự Môn':      ['Miếu','Đắc',  'Miếu', 'Vượng','Hãm', 'Bình', 'Vượng','Hãm', 'Đắc', 'Bình', 'Miếu', 'Hãm'  ],
  'Thiên Tướng': ['Miếu','Bình', 'Đắc',  'Bình', 'Vượng','Hãm', 'Miếu', 'Đắc', 'Vượng','Bình','Đắc',  'Hãm'  ],
  'Thiên Lương': ['Miếu','Hãm',  'Đắc',  'Vượng','Hãm', 'Miếu', 'Vượng','Đắc', 'Bình', 'Hãm', 'Miếu', 'Đắc'  ],
  'Thất Sát':    ['Miếu','Bình', 'Miếu', 'Hãm',  'Miếu','Đắc',  'Hãm',  'Bình','Vượng','Đắc', 'Vượng','Hãm'   ],
  'Phá Quân':    ['Hãm', 'Đắc',  'Vượng','Hãm',  'Miếu','Bình', 'Hãm',  'Đắc', 'Miếu', 'Bình','Vượng','Hãm'   ],
};

// =============================================================================
// 6. Trường Sinh (Tràng Sinh) tables
//    TRANG_SINH_START[element] = branch index where Trường Sinh begins
//    Direction: +1 clockwise (thuận), -1 counter-clockwise (nghịch)
// =============================================================================

const TRANG_SINH_START = {
  'Thủy': 8,  // Thân
  'Mộc':  2,  // Dần
  'Kim':  5,  // Tỵ
  'Thổ':  8,  // Thân (same as Thủy for Thổ element)
  'Hỏa':  2,  // Dần (same as Mộc for Hỏa element)
};

const TRANG_SINH_PHASES = [
  'Trường Sinh', 'Mộc Dục', 'Quan Đới', 'Lâm Quan',
  'Đế Vượng',   'Suy',      'Bệnh',     'Tử',
  'Mộ',          'Tuyệt',    'Thai',     'Dưỡng',
];

// Returns +1 (clockwise/thuận) or -1 (counter-clockwise/nghịch)
// Rule: Yang year + Male OR Yin year + Female → clockwise (+1)
//       Yang year + Female OR Yin year + Male → counter-clockwise (-1)
function getTrangSinhDirection(canIdx, gender) {
  const isYangYear = canIdx % 2 === 0; // even can index = yang
  const isMale = gender === 'M';
  return (isMale === isYangYear) ? 1 : -1;
}

// Returns array of 12 {phase, branch} objects starting from TRANG_SINH_START
function getTrangSinhCycle(element, canIdx, gender) {
  const startBranch = TRANG_SINH_START[element];
  const direction = getTrangSinhDirection(canIdx, gender);
  return TRANG_SINH_PHASES.map((phase, i) => ({
    phase,
    branch: ((startBranch + direction * i) % 12 + 12) % 12,
  }));
}

// =============================================================================
// 7. CUC_VALUES and CUC_MAP
// =============================================================================

// CUC_MAP and CUC_MAP_EN are defined in natal_chart.js.

// =============================================================================
// 8. Ngũ Hành cycles and branch elements
// =============================================================================

// Sinh (generates) cycle
const SINH_CYCLE = {
  'Mộc':  'Hỏa',
  'Hỏa':  'Thổ',
  'Thổ':  'Kim',
  'Kim':  'Thủy',
  'Thủy': 'Mộc',
};

// Khắc (overcomes) cycle
const KHAC_CYCLE = {
  'Mộc':  'Thổ',
  'Thổ':  'Thủy',
  'Thủy': 'Hỏa',
  'Hỏa':  'Kim',
  'Kim':  'Mộc',
};

// Ngũ hành of each branch index (0=Tý … 11=Hợi)
// Tý=Thủy, Sửu=Thổ, Dần=Mộc, Mão=Mộc, Thìn=Thổ, Tỵ=Hỏa,
// Ngọ=Hỏa, Mùi=Thổ, Thân=Kim, Dậu=Kim, Tuất=Thổ, Hợi=Thủy
const BRANCH_ELEMENT = [
  'Thủy','Thổ','Mộc','Mộc','Thổ','Hỏa',
  'Hỏa', 'Thổ','Kim','Kim','Thổ','Thủy',
];

// Analyzes the relationship between a star's element and its palace element
// Returns one of: 'sinh_out', 'sinh_in', 'khac_out', 'khac_in', 'same', 'neutral'
function analyzeNguHanh(starElement, palaceElement) {
  if (SINH_CYCLE[starElement]  === palaceElement) return 'sinh_out';
  if (SINH_CYCLE[palaceElement] === starElement)  return 'sinh_in';
  if (KHAC_CYCLE[starElement]  === palaceElement) return 'khac_out';
  if (KHAC_CYCLE[palaceElement] === starElement)  return 'khac_in';
  if (starElement === palaceElement)              return 'same';
  return 'neutral';
}

const NGU_HANH_EFFECTS = {
  sinh_out: {
    vi: 'Sao sinh cung — năng lượng sao lan tỏa thuận lợi, nhưng sao bị tiêu hao một phần.',
    en: 'Star generates palace — energy flows favorably outward, though the star expends some power.',
  },
  sinh_in: {
    vi: 'Cung sinh sao — môi trường hỗ trợ sao phát huy hết tiềm năng. Rất thuận lợi.',
    en: 'Palace generates star — the environment nurtures the star to its full potential. Very favorable.',
  },
  khac_out: {
    vi: 'Sao khắc cung — sao áp đảo môi trường, có thể tạo căng thẳng nhưng sao vẫn mạnh.',
    en: 'Star overcomes palace — the star dominates its environment, creating tension but remaining powerful.',
  },
  khac_in: {
    vi: 'Cung khắc sao — môi trường kìm hãm sao, năng lượng sao bị suy giảm đáng kể.',
    en: 'Palace overcomes star — the environment suppresses the star, significantly reducing its energy.',
  },
  same: {
    vi: 'Đồng hành — sao và cung cùng hành, hỗ trợ lẫn nhau. Ổn định và hài hòa.',
    en: 'Same element — star and palace are in harmony, supporting each other. Stable and balanced.',
  },
};

// =============================================================================
// Additional reference arrays used throughout the system
// =============================================================================

// THIEN_CAN is defined in natal_chart.js (lines 245–246).

// Earthly Branches (Địa Chi), index 0-11
/* Canonical Địa Chi name array — referenced across tuvi-data, kinh-dich-data, kinh-dich-engine */
const DIA_CHI = ['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];

// Palace names in order starting from Mệnh (Life palace), arranged around the chart
// The 12 palaces placed clockwise starting at the Mệnh palace branch
const CUNG_NAMES = [
  'Mệnh',      // Life
  'Phụ Mẫu',   // Parents
  'Phúc Đức',  // Fortune & Virtue
  'Điền Trạch',// Property
  'Quan Lộc',  // Career
  'Nô Bộc',    // Servants/Subordinates
  'Thiên Di',  // Travel/Migration
  'Tật Ách',   // Health/Illness
  'Tài Bạch',  // Wealth
  'Tử Tức',    // Children
  'Phu Thê',   // Spouse
  'Huynh Đệ',  // Siblings
];

// Ngũ Hành of each Thiên Can (index 0-9)
// Giáp/Ất=Mộc, Bính/Đinh=Hỏa, Mậu/Kỷ=Thổ, Canh/Tân=Kim, Nhâm/Quý=Thủy
const CAN_ELEMENT = ['Mộc','Mộc','Hỏa','Hỏa','Thổ','Thổ','Kim','Kim','Thủy','Thủy'];

// Ngũ Hành of each Địa Chi (same as BRANCH_ELEMENT, named alias)
const CHI_ELEMENT = BRANCH_ELEMENT;

// =============================================================================
// Loading verification
// =============================================================================
// =============================================================================
// 9. CÁCH CỤC PATTERNS — Classical Tu Vi pattern recognition
// =============================================================================

/**
 * Helper: Check if two branch positions are in the same Tam Hợp (trine).
 * Two positions are in Tam Hợp if they belong to the same triangle group.
 * Tam Hợp groups: [2,6,10], [5,9,1], [8,0,4], [11,3,7]
 */
function areInTriangle(posA, posB) {
  const diff = ((posA - posB) % 12 + 12) % 12;
  return diff === 0 || diff === 4 || diff === 8;
}

/**
 * Helper: Check if all positions in an array fall within the same Tam Hợp triangle.
 */
function allInSameTriangle(positions) {
  const triangles = [[2, 6, 10], [5, 9, 1], [8, 0, 4], [11, 3, 7]];
  return triangles.some(t => positions.every(p => t.includes(p)));
}

/**
 * Helper: Check if all positions have the same value (đồng cung).
 */
function allSame(positions) {
  return positions.every(p => p === positions[0]);
}

/**
 * Helper: Check if two positions flank a third (giáp — adjacent on both sides).
 */
function flanking(leftPos, rightPos, centerPos) {
  const left = ((centerPos - 1) % 12 + 12) % 12;
  const right = (centerPos + 1) % 12;
  return (leftPos === left && rightPos === right) || (leftPos === right && rightPos === left);
}

/**
 * CACH_CUC_PATTERNS — Array of classical Cách Cục pattern objects.
 * Each pattern: { name, nameEn, rating, rank, condition(starPositions, auxPositions, hoaMap, menhPos), meaning: {vi, en} }
 *
 * Parameters passed to condition():
 *   starPositions — object from deriveMainStarPositions (14 main stars -> branch index)
 *   auxPositions  — object of auxiliary star name -> branch index
 *   hoaMap        — { loc: branchIdx, quyen: branchIdx, khoa: branchIdx, ky: branchIdx }
 *   menhPos       — branch index of the Mệnh palace
 */
const CACH_CUC_PATTERNS = [
  // ── Group 1: Four-star grand patterns ──
  {
    name: 'Tử Phủ Vũ Tướng',
    nameEn: 'Emperor-Treasury-Commander-General',
    rating: 'auspicious',
    rank: 1,
    condition: (sp) => {
      const stars = [sp['Tử Vi'], sp['Thiên Phủ'], sp['Vũ Khúc'], sp['Thiên Tướng']];
      return allInSameTriangle(stars);
    },
    meaning: {
      vi: 'Tử Phủ Vũ Tướng hội tụ trong Tam Hợp — cách cục quyền quý bậc nhất. Người có lá số này được trời phú cho khả năng lãnh đạo, quản lý tài chính và phong thái uy nghiêm. Sự nghiệp thường đạt đỉnh cao trong lĩnh vực quản trị hoặc chính trị.',
      en: 'The four pillars of governance converge in a trine — the most prestigious leadership pattern. Blessed with natural authority, financial acumen, and dignified bearing. Career peaks in management, politics, or executive leadership.',
    },
  },
  {
    name: 'Cơ Nguyệt Đồng Lương',
    nameEn: 'Strategist-Moon-Harmony-Pillar',
    rating: 'auspicious',
    rank: 2,
    condition: (sp) => {
      const stars = [sp['Thiên Cơ'], sp['Thái Âm'], sp['Thiên Đồng'], sp['Thiên Lương']];
      return allInSameTriangle(stars);
    },
    meaning: {
      vi: 'Cơ Nguyệt Đồng Lương — cách cục công chức văn nhân. Bốn sao nhu hòa hội tụ cho thấy người ổn định trong sự nghiệp, thiên về công việc hành chính, giáo dục hoặc nghiên cứu. Cuộc sống bình an, ít biến động lớn nhưng đều đặn tiến lên.',
      en: 'The Civil Servant pattern — four gentle stars converge, indicating career stability in education, administration, or scholarly pursuits. Life proceeds steadily with gradual but reliable advancement.',
    },
  },
  {
    name: 'Sát Phá Liêm Tham',
    nameEn: 'Killer-Breaker-Purity-Desire',
    rating: 'mixed',
    rank: 2,
    condition: (sp) => {
      const stars = [sp['Thất Sát'], sp['Phá Quân'], sp['Liêm Trinh'], sp['Tham Lang']];
      return allInSameTriangle(stars);
    },
    meaning: {
      vi: 'Sát Phá Liêm Tham — cách cục võ tướng, đầy sóng gió nhưng mạnh mẽ. Người mang cách này quyết đoán, dám nghĩ dám làm, sẵn sàng đối mặt khó khăn. Cuộc đời nhiều thử thách nhưng thành tựu đến từ chính những lần vượt qua nghịch cảnh.',
      en: 'The Warrior pattern — bold, turbulent, and powerful. People with this configuration are decisive and courageous. Life brings genuine challenges, but true achievement comes from overcoming adversity.',
    },
  },

  // ── Group 2: Two-star special combinations ──
  {
    name: 'Tử Phủ Đồng Cung',
    nameEn: 'Emperor-Treasury Conjunction',
    rating: 'auspicious',
    rank: 1,
    condition: (sp) => sp['Tử Vi'] === sp['Thiên Phủ'],
    meaning: {
      vi: 'Tử Vi và Thiên Phủ đồng cung — cách cục vua quan hiếm có. Mang quyền lực tự nhiên và phúc đức dày. Người có cách này thường có tầm nhìn xa trông rộng, được người khác kính nể và tín nhiệm. Tài chính thường ổn định nhờ khả năng quản lý tốt.',
      en: 'Tử Vi and Thiên Phủ share a palace — the rare Emperor pattern. Natural authority paired with deep fortune. People with this pattern command respect, possess far-reaching vision, and maintain stable finances through excellent management.',
    },
  },
  {
    name: 'Nhật Nguyệt Đồng Minh',
    nameEn: 'Sun-Moon Brilliance',
    rating: 'auspicious',
    rank: 1,
    condition: (sp) => {
      const sunBright = ['Miếu', 'Vượng'].includes(STAR_BRIGHTNESS_TABLE['Thái Dương'][sp['Thái Dương']]);
      const moonBright = ['Miếu', 'Vượng'].includes(STAR_BRIGHTNESS_TABLE['Thái Âm'][sp['Thái Âm']]);
      return sunBright && moonBright;
    },
    meaning: {
      vi: 'Nhật Nguyệt Đồng Minh — Thái Dương và Thái Âm đều sáng (Miếu hoặc Vượng). Âm dương cân bằng hoàn hảo, cuộc đời thuận lợi cả về sự nghiệp lẫn gia đình. Được quý nhân phù trợ từ cả hai giới.',
      en: 'Sun-Moon Brilliance — both luminaries shine brightly. Perfect yin-yang balance brings success in career and family alike. Supported by benefactors of both genders throughout life.',
    },
  },
  {
    name: 'Nhật Nguyệt Phản Bối',
    nameEn: 'Sun-Moon Reversal',
    rating: 'challenging',
    rank: 2,
    condition: (sp) => {
      const sunDim = STAR_BRIGHTNESS_TABLE['Thái Dương'][sp['Thái Dương']] === 'Hãm';
      const moonDim = STAR_BRIGHTNESS_TABLE['Thái Âm'][sp['Thái Âm']] === 'Hãm';
      return sunDim && moonDim;
    },
    meaning: {
      vi: 'Nhật Nguyệt Phản Bối — cả Thái Dương lẫn Thái Âm đều Hãm địa. Âm dương mất cân bằng, cuộc đời gặp nhiều trắc trở. Cần nỗ lực gấp đôi người thường, nhưng khó khăn cũng rèn luyện ý chí kiên cường.',
      en: 'Sun-Moon Reversal — both luminaries fall into weak positions. Yin-yang imbalance brings obstacles. Twice the effort is needed, but hardship also forges an exceptionally strong will.',
    },
  },
  {
    name: 'Nhật Nguyệt Đồng Lâm',
    nameEn: 'Sun-Moon Co-Presence',
    rating: 'mixed',
    rank: 3,
    condition: (sp) => sp['Thái Dương'] === sp['Thái Âm'],
    meaning: {
      vi: 'Thái Dương và Thái Âm đồng cung — ánh sáng âm dương giao hòa tại một điểm. Cuộc đời giàu cảm xúc, nhạy cảm với nghệ thuật. Tuy nhiên nội tâm đôi khi mâu thuẫn giữa lý trí và tình cảm.',
      en: 'Sun and Moon share a palace — yin and yang light converge. Life is emotionally rich with artistic sensitivity, though inner conflict between logic and emotion may arise.',
    },
  },

  // ── Group 3: Tứ Hóa patterns ──
  {
    name: 'Tam Kỳ Gia Hội',
    nameEn: 'Three Fortunes Convergence',
    rating: 'auspicious',
    rank: 1,
    condition: (sp, aux, hoaMap) => {
      if (!hoaMap) return false;
      const loc = hoaMap.loc;
      const quyen = hoaMap.quyen;
      const khoa = hoaMap.khoa;
      if (loc === undefined || quyen === undefined || khoa === undefined) return false;
      return allInSameTriangle([loc, quyen, khoa]);
    },
    meaning: {
      vi: 'Tam Kỳ Gia Hội — Hóa Lộc, Hóa Quyền, Hóa Khoa hội tụ trong Tam Hợp. Cực kỳ thuận lợi: tài lộc dồi dào, quyền lực vững chắc, danh tiếng vang xa. Đây là dấu hiệu của giai đoạn hanh thông hiếm có.',
      en: 'Three Fortunes Convergence — Lộc (fortune), Quyền (authority), and Khoa (fame) converge in a trine. Extremely auspicious: abundant wealth, solid power, and widespread recognition. A rare period of exceptional fortune.',
    },
  },
  {
    name: 'Song Lộc',
    nameEn: 'Double Fortune',
    rating: 'auspicious',
    rank: 2,
    condition: (sp, aux, hoaMap) => {
      if (!hoaMap || !aux) return false;
      const locTon = aux['Lộc Tồn'];
      const hoaLoc = hoaMap.loc;
      return locTon !== undefined && hoaLoc !== undefined && locTon === hoaLoc;
    },
    meaning: {
      vi: 'Song Lộc — Lộc Tồn và Hóa Lộc đồng cung. Tài lộc nhân đôi, tiền bạc đến từ nhiều nguồn. Rất thuận lợi về tài chính, đặc biệt trong kinh doanh.',
      en: 'Double Fortune — Lộc Tồn and Hóa Lộc share a palace. Wealth doubles with income from multiple sources. Very favorable for finances, especially in business.',
    },
  },
  {
    name: 'Song Lộc Giáp Mệnh',
    nameEn: 'Double Fortune Flanking Destiny',
    rating: 'auspicious',
    rank: 2,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!hoaMap || !aux || menhPos === undefined) return false;
      const locTon = aux['Lộc Tồn'];
      const hoaLoc = hoaMap.loc;
      if (locTon === undefined || hoaLoc === undefined) return false;
      return flanking(locTon, hoaLoc, menhPos);
    },
    meaning: {
      vi: 'Song Lộc Giáp Mệnh — Lộc Tồn và Hóa Lộc kẹp hai bên cung Mệnh. Tài lộc bao bọc, đời sống vật chất sung túc. Tiền bạc tự tìm đến mà không cần quá vất vả.',
      en: 'Double Fortune flanks the Destiny palace — wealth embraces the native from both sides. Material comfort comes naturally without excessive struggle.',
    },
  },
  {
    name: 'Lộc Mã Giao Trì',
    nameEn: 'Fortune-Horse Exchange',
    rating: 'auspicious',
    rank: 2,
    condition: (sp, aux, hoaMap) => {
      if (!aux) return false;
      const locTon = aux['Lộc Tồn'];
      const thienMa = aux['Thiên Mã'];
      return locTon !== undefined && thienMa !== undefined && locTon === thienMa;
    },
    meaning: {
      vi: 'Lộc Mã Giao Trì — Lộc Tồn và Thiên Mã đồng cung. Tài lộc gắn liền với di chuyển, kinh doanh quốc tế hoặc nghề nghiệp đòi hỏi di động. Tiền đến nhanh và dễ dàng khi chủ động tìm kiếm cơ hội.',
      en: 'Fortune-Horse Exchange — Lộc Tồn meets Thiên Mã. Wealth flows through travel, international business, or mobile careers. Money comes quickly when actively seeking opportunities.',
    },
  },

  // ── Group 4: Tử Vi specific positions ──
  {
    name: 'Tử Vi Tọa Mệnh Miếu Vượng',
    nameEn: 'Emperor Star in Bright Destiny',
    rating: 'auspicious',
    rank: 2,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (menhPos === undefined) return false;
      if (sp['Tử Vi'] !== menhPos) return false;
      const brightness = STAR_BRIGHTNESS_TABLE['Tử Vi'][sp['Tử Vi']];
      return brightness === 'Miếu' || brightness === 'Vượng';
    },
    meaning: {
      vi: 'Tử Vi tọa Mệnh ở Miếu hoặc Vượng địa — phong thái đế vương tỏa sáng. Người có cách này được trời phú cho uy quyền, khí chất cao quý và khả năng lãnh đạo xuất chúng.',
      en: 'Tử Vi sits brightly in the Destiny palace — the Emperor star shines at full power. Natural authority, noble bearing, and outstanding leadership ability are bestowed upon the native.',
    },
  },
  {
    name: 'Tử Vi Tọa Mệnh Hãm',
    nameEn: 'Emperor Star Weakened in Destiny',
    rating: 'challenging',
    rank: 3,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (menhPos === undefined) return false;
      if (sp['Tử Vi'] !== menhPos) return false;
      return STAR_BRIGHTNESS_TABLE['Tử Vi'][sp['Tử Vi']] === 'Hãm';
    },
    meaning: {
      vi: 'Tử Vi tọa Mệnh ở Hãm địa — vua không ngai. Có tham vọng lớn nhưng thiếu sự hỗ trợ, cần phải tự lực cánh sinh. Nếu có cát tinh hội họp thì vẫn có thể vươn lên.',
      en: 'Tử Vi falls weak in Destiny — a king without a throne. Grand ambitions but lacking support; must be self-reliant. Auspicious auxiliary stars can still elevate the outcome.',
    },
  },

  // ── Group 5: Mệnh Vô Chính Diệu ──
  {
    name: 'Mệnh Vô Chính Diệu',
    nameEn: 'Empty Destiny Palace',
    rating: 'mixed',
    rank: 3,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (menhPos === undefined) return false;
      const mainStars = ['Tử Vi', 'Thiên Phủ', 'Thiên Cơ', 'Thái Dương', 'Vũ Khúc', 'Thiên Đồng',
        'Liêm Trinh', 'Thái Âm', 'Tham Lang', 'Cự Môn', 'Thiên Tướng', 'Thiên Lương', 'Thất Sát', 'Phá Quân'];
      return !mainStars.some(s => sp[s] === menhPos);
    },
    meaning: {
      vi: 'Mệnh Vô Chính Diệu — cung Mệnh không có chính tinh. Người mượn sao từ đối cung Thiên Di. Tính cách linh hoạt, dễ thích nghi nhưng đôi khi thiếu định hướng rõ ràng. Cần thời gian để tìm thấy bản sắc riêng.',
      en: 'Empty Destiny — no main star occupies the Destiny palace. Stars are borrowed from the opposite Travel palace. Highly adaptable but may struggle with clear direction early in life.',
    },
  },

  // ── Group 6: Giáp (flanking) patterns ──
  {
    name: 'Tài Ấm Giáp Mệnh',
    nameEn: 'Noble Stars Flanking Destiny',
    rating: 'auspicious',
    rank: 2,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!aux || menhPos === undefined) return false;
      const khoi = aux['Thiên Khôi'];
      const viet = aux['Thiên Việt'];
      if (khoi === undefined || viet === undefined) return false;
      return flanking(khoi, viet, menhPos);
    },
    meaning: {
      vi: 'Tài Ấm Giáp Mệnh — Thiên Khôi và Thiên Việt kẹp cung Mệnh. Suốt đời được quý nhân phù trợ, gặp khó khăn luôn có người giúp đỡ. Thuận lợi trong thi cử, học hành và thăng tiến.',
      en: 'Noble Stars flank Destiny — benefactors appear throughout life. When difficulties arise, help always comes. Favorable for exams, education, and career advancement.',
    },
  },
  {
    name: 'Xương Khúc Giáp Mệnh',
    nameEn: 'Literary Stars Flanking Destiny',
    rating: 'auspicious',
    rank: 3,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!aux || menhPos === undefined) return false;
      const xuong = aux['Văn Xương'];
      const khuc = aux['Văn Khúc'];
      if (xuong === undefined || khuc === undefined) return false;
      return flanking(xuong, khuc, menhPos);
    },
    meaning: {
      vi: 'Xương Khúc Giáp Mệnh — Văn Xương và Văn Khúc kẹp cung Mệnh. Thông minh, tài hoa, giỏi văn chương và nghệ thuật. Rất thuận lợi cho học hành, nghiên cứu và sáng tạo.',
      en: 'Literary Stars flank Destiny — intelligence, eloquence, and artistic talent flourish. Highly favorable for academics, research, and creative pursuits.',
    },
  },
  {
    name: 'Tả Hữu Giáp Mệnh',
    nameEn: 'Assistants Flanking Destiny',
    rating: 'auspicious',
    rank: 3,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!aux || menhPos === undefined) return false;
      const taPhu = aux['Tả Phụ'];
      const huuBat = aux['Hữu Bật'];
      if (taPhu === undefined || huuBat === undefined) return false;
      return flanking(taPhu, huuBat, menhPos);
    },
    meaning: {
      vi: 'Tả Hữu Giáp Mệnh — Tả Phụ và Hữu Bật kẹp cung Mệnh. Luôn có người hỗ trợ hai bên, thuận lợi cho quản lý và lãnh đạo. Dễ xây dựng đội nhóm mạnh.',
      en: 'Left-Right Assistants flank Destiny — support from both sides. Favorable for management and leadership. Easily builds strong teams and networks.',
    },
  },
  {
    name: 'Tả Hữu Đồng Cung',
    nameEn: 'Assistants Conjunction',
    rating: 'auspicious',
    rank: 3,
    condition: (sp, aux) => {
      if (!aux) return false;
      const taPhu = aux['Tả Phụ'];
      const huuBat = aux['Hữu Bật'];
      return taPhu !== undefined && huuBat !== undefined && taPhu === huuBat;
    },
    meaning: {
      vi: 'Tả Phụ và Hữu Bật đồng cung — lực lượng phụ tá tập trung, được nhiều người ủng hộ và giúp đỡ. Đặc biệt tốt khi ở cung Mệnh hoặc Quan Lộc.',
      en: 'Tả Phụ and Hữu Bật share a palace — concentrated support from helpers and allies. Especially powerful in the Destiny or Career palace.',
    },
  },

  // ── Group 7: Lục Sát (Six Killers) patterns ──
  {
    name: 'Kình Đà Giáp Mệnh',
    nameEn: 'Double Blades Flanking Destiny',
    rating: 'challenging',
    rank: 2,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!aux || menhPos === undefined) return false;
      const kinh = aux['Kình Dương'];
      const da = aux['Đà La'];
      if (kinh === undefined || da === undefined) return false;
      return flanking(kinh, da, menhPos);
    },
    meaning: {
      vi: 'Kình Đà Giáp Mệnh — Kình Dương và Đà La kẹp cung Mệnh. Cuộc đời gặp nhiều trở ngại, thị phi và tranh chấp. Tuy nhiên nếu biết rèn luyện ý chí, sát khí này có thể chuyển hóa thành sức mạnh phi thường.',
      en: 'Double Blades flank Destiny — obstacles, disputes, and controversy mark the path. However, with discipline, this fierce energy can be transformed into extraordinary strength.',
    },
  },
  {
    name: 'Hỏa Linh Giáp Mệnh',
    nameEn: 'Fire Stars Flanking Destiny',
    rating: 'challenging',
    rank: 3,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!aux || menhPos === undefined) return false;
      const hoa = aux['Hỏa Tinh'];
      const linh = aux['Linh Tinh'];
      if (hoa === undefined || linh === undefined) return false;
      return flanking(hoa, linh, menhPos);
    },
    meaning: {
      vi: 'Hỏa Linh Giáp Mệnh — Hỏa Tinh và Linh Tinh kẹp cung Mệnh. Tính nóng nảy, dễ bốc đồng. Cuộc đời có nhiều biến động bất ngờ. Cần học cách kiểm soát cảm xúc để tránh sai lầm.',
      en: 'Fire Stars flank Destiny — hot-tempered and impulsive nature. Life brings sudden upheavals. Emotional control is the key lesson to avoid costly mistakes.',
    },
  },
  {
    name: 'Không Kiếp Giáp Mệnh',
    nameEn: 'Void Stars Flanking Destiny',
    rating: 'challenging',
    rank: 2,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!aux || menhPos === undefined) return false;
      const khong = aux['Địa Không'];
      const kiep = aux['Địa Kiếp'];
      if (khong === undefined || kiep === undefined) return false;
      return flanking(khong, kiep, menhPos);
    },
    meaning: {
      vi: 'Không Kiếp Giáp Mệnh — Địa Không và Địa Kiếp kẹp cung Mệnh. Dễ gặp tổn thất bất ngờ về tài chính. Tuy nhiên cũng cho thấy tư duy triết học sâu sắc và khả năng buông bỏ chấp trước.',
      en: 'Void Stars flank Destiny — sudden financial losses are possible. However, this also grants deep philosophical thinking and the ability to let go of attachments.',
    },
  },
  {
    name: 'Lục Sát Tinh Tụ',
    nameEn: 'Six Killers Converging',
    rating: 'challenging',
    rank: 1,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!aux || menhPos === undefined) return false;
      const satStars = ['Kình Dương', 'Đà La', 'Hỏa Tinh', 'Linh Tinh', 'Địa Không', 'Địa Kiếp'];
      const atMenh = satStars.filter(s => aux[s] === menhPos);
      return atMenh.length >= 3;
    },
    meaning: {
      vi: 'Lục Sát Tinh Tụ — ba sát tinh trở lên tập trung tại cung Mệnh. Cuộc đời chịu nhiều sóng gió, khó khăn chồng chất. Nhưng đây cũng là cách cục của những người phi thường — vượt qua được thì thành tựu lớn lao.',
      en: 'Six Killers converge — three or more malefic stars cluster at Destiny. Life brings compounding hardships. Yet this is also the pattern of extraordinary people — those who prevail achieve great things.',
    },
  },

  // ── Group 8: Specific star combinations ──
  {
    name: 'Xương Khúc Đồng Cung',
    nameEn: 'Literary Stars Conjunction',
    rating: 'auspicious',
    rank: 3,
    condition: (sp, aux) => {
      if (!aux) return false;
      return aux['Văn Xương'] !== undefined && aux['Văn Khúc'] !== undefined && aux['Văn Xương'] === aux['Văn Khúc'];
    },
    meaning: {
      vi: 'Văn Xương và Văn Khúc đồng cung — tài hoa văn chương xuất chúng. Giỏi viết lách, hùng biện và sáng tạo. Thuận lợi trong các lĩnh vực truyền thông, giáo dục, nghệ thuật.',
      en: 'Literary stars share a palace — exceptional literary and artistic talent. Eloquent in speech and writing. Favorable for communications, education, and creative arts.',
    },
  },
  {
    name: 'Đào Hồng Đồng Cung',
    nameEn: 'Romance Stars Conjunction',
    rating: 'mixed',
    rank: 3,
    condition: (sp, aux) => {
      if (!aux) return false;
      const dao = aux['Đào Hoa'];
      const hong = aux['Hồng Loan'];
      return dao !== undefined && hong !== undefined && dao === hong;
    },
    meaning: {
      vi: 'Đào Hoa và Hồng Loan đồng cung — duyên phận đào hoa rất mạnh, hấp dẫn người khác giới tự nhiên. Thuận lợi cho hôn nhân nếu ở cung Phu Thê, nhưng cần cẩn thận ngoại tình nếu gặp sát tinh.',
      en: 'Romance stars converge — powerful romantic attraction; naturally charming. Favorable for marriage if in the Spouse palace, but beware of infidelity when malefic stars are present.',
    },
  },
  {
    name: 'Thiên Khôi Thiên Việt Đồng Cung',
    nameEn: 'Noble Stars Conjunction',
    rating: 'auspicious',
    rank: 3,
    condition: (sp, aux) => {
      if (!aux) return false;
      const khoi = aux['Thiên Khôi'];
      const viet = aux['Thiên Việt'];
      return khoi !== undefined && viet !== undefined && khoi === viet;
    },
    meaning: {
      vi: 'Thiên Khôi và Thiên Việt đồng cung — quý nhân trùng trùng, đi đâu cũng được giúp đỡ. Thuận lợi cho thi cử, phỏng vấn và thăng tiến trong sự nghiệp.',
      en: 'Noble stars converge — benefactors abound wherever you go. Favorable for examinations, interviews, and career advancement.',
    },
  },
  {
    name: 'Hóa Lộc Hóa Quyền Đồng Cung',
    nameEn: 'Fortune-Authority Conjunction',
    rating: 'auspicious',
    rank: 2,
    condition: (sp, aux, hoaMap) => {
      if (!hoaMap) return false;
      return hoaMap.loc !== undefined && hoaMap.quyen !== undefined && hoaMap.loc === hoaMap.quyen;
    },
    meaning: {
      vi: 'Hóa Lộc và Hóa Quyền đồng cung — vừa có tài lộc vừa có quyền lực. Giai đoạn thăng tiến mạnh mẽ, tiền bạc đến từ vị trí quyền lực.',
      en: 'Fortune and Authority share a palace — wealth and power combine. A period of strong advancement with income tied to positions of influence.',
    },
  },
  {
    name: 'Hóa Kỵ Tại Mệnh',
    nameEn: 'Transformation Trouble in Destiny',
    rating: 'challenging',
    rank: 3,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (!hoaMap || menhPos === undefined) return false;
      return hoaMap.ky === menhPos;
    },
    meaning: {
      vi: 'Hóa Kỵ tọa cung Mệnh — nội tâm hay lo lắng, dễ tự tạo áp lực cho bản thân. Công việc liên quan đến sao bị Hóa Kỵ sẽ gặp trắc trở, cần kiên nhẫn và cẩn trọng.',
      en: 'Hóa Kỵ sits in Destiny — inner anxiety and self-imposed pressure. Matters related to the afflicted star face obstacles; patience and caution are essential.',
    },
  },

  // ── Group 9: Additional classical patterns ──
  {
    name: 'Phủ Tướng Triều Viên',
    nameEn: 'Treasury-General Court Assembly',
    rating: 'auspicious',
    rank: 2,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (menhPos === undefined) return false;
      const phu = sp['Thiên Phủ'];
      const tuong = sp['Thiên Tướng'];
      return areInTriangle(phu, menhPos) && areInTriangle(tuong, menhPos);
    },
    meaning: {
      vi: 'Phủ Tướng Triều Viên — Thiên Phủ và Thiên Tướng hội họp trong tam hợp cung Mệnh. Được phúc đức và sự chính trực bảo vệ, cuộc sống ổn định và thịnh vượng.',
      en: 'Treasury and General assemble in the Destiny trine — protected by fortune and integrity. Life is stable, prosperous, and morally grounded.',
    },
  },
  {
    name: 'Cự Nhật Đồng Cung',
    nameEn: 'Giant Gate-Sun Conjunction',
    rating: 'mixed',
    rank: 3,
    condition: (sp) => sp['Cự Môn'] === sp['Thái Dương'],
    meaning: {
      vi: 'Cự Môn và Thái Dương đồng cung — sao tranh chấp gặp sao quang minh. Nếu ở Miếu Vượng thì Thái Dương chiếu sáng Cự Môn, hóa giải thị phi. Nếu Hãm thì mâu thuẫn gay gắt.',
      en: 'Cự Môn meets Thái Dương — conflict star meets the illuminator. When bright, the Sun dissolves disputes. When weak, conflicts intensify dramatically.',
    },
  },
  {
    name: 'Thất Sát Triều Đẩu',
    nameEn: 'Seven Killings Facing the Dipper',
    rating: 'auspicious',
    rank: 2,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (menhPos === undefined) return false;
      if (sp['Thất Sát'] !== menhPos) return false;
      const brightness = STAR_BRIGHTNESS_TABLE['Thất Sát'][sp['Thất Sát']];
      return brightness === 'Miếu' || brightness === 'Vượng';
    },
    meaning: {
      vi: 'Thất Sát Triều Đẩu — Thất Sát tọa Mệnh ở Miếu hoặc Vượng. Uy quyền lẫm liệt, dám xông pha nơi nguy hiểm. Sự nghiệp quân sự, cảnh sát hoặc kinh doanh mạo hiểm rất phù hợp.',
      en: 'Seven Killings faces the Dipper — Thất Sát shines brightly in Destiny. Commanding authority with fearless courage. Military, law enforcement, or venture business careers are well-suited.',
    },
  },
  {
    name: 'Phá Quân Tọa Mệnh',
    nameEn: 'Breaker Star in Destiny',
    rating: 'mixed',
    rank: 3,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (menhPos === undefined) return false;
      return sp['Phá Quân'] === menhPos;
    },
    meaning: {
      vi: 'Phá Quân tọa Mệnh — cuộc đời nhiều biến động, thích phá vỡ khuôn mẫu cũ để xây dựng cái mới. Người tiên phong, sáng tạo nhưng cũng dễ gây đổ vỡ nếu không kiểm soát.',
      en: 'Phá Quân in Destiny — a life of transformation; breaking old patterns to build anew. A pioneer and innovator, but risks creating havoc without self-discipline.',
    },
  },
  {
    name: 'Liêm Trinh Tọa Mệnh Hãm',
    nameEn: 'Purity Star Weakened in Destiny',
    rating: 'challenging',
    rank: 3,
    condition: (sp, aux, hoaMap, menhPos) => {
      if (menhPos === undefined) return false;
      if (sp['Liêm Trinh'] !== menhPos) return false;
      return STAR_BRIGHTNESS_TABLE['Liêm Trinh'][sp['Liêm Trinh']] === 'Hãm';
    },
    meaning: {
      vi: 'Liêm Trinh Hãm tọa Mệnh — sao tù ngục ở vị trí yếu. Cần đặc biệt cẩn thận với pháp luật, tranh chấp và các mối quan hệ phức tạp. Tránh liều lĩnh và giữ mình trong sạch.',
      en: 'Liêm Trinh falls weak in Destiny — the prison star in a difficult position. Extra caution with legal matters, disputes, and complicated relationships. Avoid recklessness and maintain integrity.',
    },
  },
  {
    name: 'Tham Vũ Đồng Hành',
    nameEn: 'Desire-Commander Alliance',
    rating: 'auspicious',
    rank: 3,
    condition: (sp) => sp['Tham Lang'] === sp['Vũ Khúc'],
    meaning: {
      vi: 'Tham Lang và Vũ Khúc đồng cung — tham vọng kinh doanh mạnh mẽ kết hợp tài năng quản lý tiền bạc. Rất thuận lợi cho kinh doanh và đầu tư, đặc biệt khi cả hai ở Miếu Vượng.',
      en: 'Tham Lang meets Vũ Khúc — business ambition joins financial expertise. Excellent for commerce and investment, especially when both stars are in bright positions.',
    },
  },
];

// =============================================================================
// 10. PALACE_STAR_MEANINGS — Interpretation for each main star in each palace
//     12 palaces × 14 main stars = 168 entries
//     Each entry: { vi: "...", en: "..." }
// =============================================================================

const PALACE_STAR_MEANINGS = {
  'Mệnh': {
    'Tử Vi': {
      vi: 'Tử Vi tọa thủ Mệnh cung — bạn mang khí chất đế vương, có phong thái lãnh đạo tự nhiên. Người khác thường tìm đến bạn để xin ý kiến hoặc nhờ dẫn dắt.',
      en: 'Tử Vi in Destiny — you carry a natural leadership aura. Others instinctively look to you for guidance and direction.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tọa Mệnh — phúc đức dày, tính tình ôn hòa, biết cách giữ gìn và tích lũy. Cuộc sống thiên về ổn định và an nhàn.',
      en: 'Thiên Phủ in Destiny — deep fortune and a mild temperament. Life tends toward stability, conservation, and comfortable living.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tọa Mệnh — đầu óc nhanh nhạy, giỏi phân tích và thích ứng. Bạn là người biết tính toán nhiều bước trước, nhưng đôi khi hay thay đổi.',
      en: 'Thiên Cơ in Destiny — sharp analytical mind with excellent adaptability. You think several steps ahead but may sometimes change course too often.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tọa Mệnh — tính cách quang minh lỗi lạc, thích giúp đỡ người khác. Nam giới có cách này rất thuận lợi, nữ giới thiên về mạnh mẽ độc lập.',
      en: 'Thái Dương in Destiny — bright, generous, and public-spirited. Especially favorable for men; women with this star tend toward strong independence.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tọa Mệnh — tính cách cương quyết, thẳng thắn, giỏi về tài chính. Thích hợp kinh doanh, quản lý tiền bạc nhưng cần mềm mỏng hơn trong giao tiếp.',
      en: 'Vũ Khúc in Destiny — decisive, straightforward, and financially gifted. Well-suited for business and money management, though social finesse may need development.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tọa Mệnh — tính tình hiền lành, thích hưởng thụ và yêu cuộc sống. Tuổi trẻ có thể chậm phát triển nhưng càng lớn tuổi càng thuận lợi.',
      en: 'Thiên Đồng in Destiny — gentle nature, enjoys life and comfort. Development may be slow in youth but improves steadily with age.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tọa Mệnh — tính cách phức tạp, đa tài nhưng đa tình. Nếu ở Miếu Vượng thì là người liêm chính, Hãm thì cần cẩn thận thị phi.',
      en: 'Liêm Trinh in Destiny — complex and multi-talented but emotionally intense. Bright position brings integrity; weak position requires caution with controversies.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tọa Mệnh — nội tâm phong phú, nhạy cảm và yêu cái đẹp. Nữ giới rất thuận lợi, nam giới thiên về nhu mì và nghệ thuật.',
      en: 'Thái Âm in Destiny — rich inner life, sensitive, and beauty-loving. Especially favorable for women; men tend toward gentleness and artistic sensibility.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tọa Mệnh — đa tài đa nghệ, tham vọng lớn và khao khát trải nghiệm. Giỏi giao tiếp, hấp dẫn nhưng cần tránh tham lam quá độ.',
      en: 'Tham Lang in Destiny — versatile, ambitious, and experience-hungry. Charismatic and socially skilled, but must guard against excess and greed.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tọa Mệnh — giỏi ăn nói, thích tranh luận và phân tích. Có thể gặp nhiều thị phi, nhưng tài hùng biện giúp vượt qua nhiều khó khăn.',
      en: 'Cự Môn in Destiny — eloquent, argumentative, and analytical. May encounter disputes, but rhetorical skill helps overcome many obstacles.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tọa Mệnh — tướng mạo đoan trang, tính tình ngay thẳng, thích giúp đỡ người khác. Phù hợp công việc phục vụ cộng đồng.',
      en: 'Thiên Tướng in Destiny — dignified appearance, upright character, and helpful nature. Well-suited for community service and public roles.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tọa Mệnh — như cây cổ thụ che chở, tính nhân từ, thích bảo vệ người yếu thế. Phù hợp ngành y, giáo dục hoặc tư vấn.',
      en: 'Thiên Lương in Destiny — like a great sheltering tree; benevolent and protective of the vulnerable. Suits medicine, education, or counseling.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tọa Mệnh — ý chí sắt đá, dám đương đầu với mọi thử thách. Cuộc đời nhiều biến động nhưng thành công đến từ sự quả cảm và quyết đoán.',
      en: 'Thất Sát in Destiny — iron will, fearless in facing challenges. Life is turbulent but success comes through courage and decisiveness.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tọa Mệnh — tiên phong đổi mới, thích phá vỡ quy tắc cũ. Cuộc đời lên xuống thất thường nhưng luôn tìm cách làm mới bản thân.',
      en: 'Phá Quân in Destiny — pioneer and rule-breaker. Life has dramatic ups and downs but constant self-renewal drives forward progress.',
    },
  },

  'Phụ Mẫu': {
    'Tử Vi': {
      vi: 'Tử Vi tại Phụ Mẫu — cha mẹ có địa vị cao hoặc uy quyền. Được gia đình nâng đỡ, quan hệ cha mẹ tốt đẹp và đáng kính trọng.',
      en: 'Tử Vi in Parents — parents hold high status or authority. Family support is strong, with respectful parent-child relationships.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Phụ Mẫu — gia đình phúc đức, cha mẹ ôn hòa và biết cách dạy dỗ. Được thừa hưởng nền tảng vững chắc từ gia đình.',
      en: 'Thiên Phủ in Parents — a blessed family with gentle, wise parents. You inherit a solid foundation from your family.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Phụ Mẫu — cha mẹ thông minh nhưng hay thay đổi. Quan hệ gia đình linh hoạt, có thể xa cha mẹ sớm.',
      en: 'Thiên Cơ in Parents — intelligent but changeable parents. Family relationships are flexible; may live apart from parents early.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Phụ Mẫu — hình ảnh người cha nổi bật, cha có ảnh hưởng lớn đến cuộc đời. Miếu Vượng thì cha thành đạt, Hãm thì cha vất vả.',
      en: 'Thái Dương in Parents — the father figure is prominent and influential. Bright: father is successful; weak: father faces hardship.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Phụ Mẫu — cha mẹ cương quyết, kỷ luật nghiêm. Gia đình chú trọng tài chính và sự tự lập từ sớm.',
      en: 'Vũ Khúc in Parents — strict, disciplined parents who emphasize finances and early independence.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Phụ Mẫu — cha mẹ hiền lành, gia đình hòa thuận. Tuổi thơ vui vẻ nhưng có thể được bao bọc quá mức.',
      en: 'Thiên Đồng in Parents — kind parents and a harmonious home. Happy childhood, though possibly overprotected.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Phụ Mẫu — quan hệ cha mẹ phức tạp, có thể có mâu thuẫn hoặc xa cách. Cần nỗ lực duy trì hòa khí gia đình.',
      en: 'Liêm Trinh in Parents — complex parent relationships; possible conflicts or distance. Maintaining family harmony requires effort.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Phụ Mẫu — hình ảnh người mẹ nổi bật, mẹ ảnh hưởng lớn đến tính cách. Miếu Vượng thì mẹ hiền đức, Hãm thì mẹ vất vả.',
      en: 'Thái Âm in Parents — the mother figure is prominent and influential. Bright: a virtuous mother; weak: mother faces difficulties.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Phụ Mẫu — cha mẹ năng động, đa tài nhưng có thể bận rộn. Quan hệ gia đình phong phú nhưng đôi khi thiếu gần gũi.',
      en: 'Tham Lang in Parents — dynamic, multi-talented parents who may be busy. Family life is vibrant but sometimes lacks intimacy.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Phụ Mẫu — dễ có bất đồng quan điểm với cha mẹ, hay tranh cãi. Tuy nhiên qua tranh luận cũng rèn luyện được tư duy sắc bén.',
      en: 'Cự Môn in Parents — disagreements with parents are common. Yet debates also sharpen your thinking and communication skills.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Phụ Mẫu — cha mẹ đứng đắn, gia giáo tốt. Được dạy dỗ về đạo đức và cách đối nhân xử thế từ nhỏ.',
      en: 'Thiên Tướng in Parents — upright parents with good family values. Raised with strong moral education and social etiquette.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Phụ Mẫu — cha mẹ nhân từ, là chỗ dựa tinh thần vững chắc. Gia đình trọng đạo đức và có phúc đức từ đời trước.',
      en: 'Thiên Lương in Parents — benevolent parents who are a strong spiritual pillar. Family values morality and carries ancestral blessings.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Phụ Mẫu — cha mẹ nghiêm khắc, kỷ luật cao. Quan hệ có khoảng cách nhưng sự nghiêm khắc ấy cũng rèn luyện bạn mạnh mẽ.',
      en: 'Thất Sát in Parents — strict, disciplined parents. The relationship may feel distant, but their severity forges your resilience.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Phụ Mẫu — gia đình có nhiều biến động, cha mẹ hay thay đổi hoặc có hoàn cảnh đặc biệt. Bạn sớm trưởng thành và tự lập.',
      en: 'Phá Quân in Parents — family experiences upheavals; parents may change or have unusual circumstances. You mature and become independent early.',
    },
  },

  'Phúc Đức': {
    'Tử Vi': {
      vi: 'Tử Vi tại Phúc Đức — phúc đức cao, gia tộc có gốc gác tốt. Đời sống tinh thần phong phú, hưởng phước từ tổ tiên.',
      en: 'Tử Vi in Fortune & Virtue — deep ancestral blessings. Rich spiritual life with good family origins.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Phúc Đức — phúc lộc thọ đầy đủ, gia tộc phúc hậu. Cuộc sống tinh thần an lành, ít lo lắng.',
      en: 'Thiên Phủ in Fortune & Virtue — complete blessings of fortune, prosperity, and longevity. Peaceful spiritual life.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Phúc Đức — tâm trí hoạt bát, thích suy nghĩ và tìm tòi. Phúc đức liên quan đến trí tuệ và sự học hỏi.',
      en: 'Thiên Cơ in Fortune & Virtue — an active, curious mind. Blessings manifest through intellect and learning.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Phúc Đức — phúc đức sáng sủa, gia tộc có uy tín. Hưởng phước nhờ sự quang minh chính đại.',
      en: 'Thái Dương in Fortune & Virtue — bright ancestral merit and family prestige. Blessings come through integrity and openness.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Phúc Đức — phúc đức thiên về vật chất, gia tộc coi trọng tiền tài. Tinh thần thực tế, ít mơ mộng.',
      en: 'Vũ Khúc in Fortune & Virtue — material blessings; family values wealth. A practical, grounded spiritual outlook.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Phúc Đức — rất có phúc, cuộc sống tinh thần thanh thản. Biết hưởng thụ cuộc sống, tâm hồn trẻ trung.',
      en: 'Thiên Đồng in Fortune & Virtue — very fortunate; peaceful spiritual life. Enjoys life with a youthful, contented spirit.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Phúc Đức — nội tâm phức tạp, hay suy nghĩ nhiều. Phúc đức bị ảnh hưởng bởi tham vọng và dục vọng.',
      en: 'Liêm Trinh in Fortune & Virtue — complex inner life with much contemplation. Blessings are affected by ambitions and desires.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Phúc Đức — nội tâm phong phú, yêu thiên nhiên và nghệ thuật. Phúc đức sâu dày nếu sao ở Miếu Vượng.',
      en: 'Thái Âm in Fortune & Virtue — rich inner world, loves nature and art. Deep blessings when the star is bright.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Phúc Đức — ham muốn trải nghiệm nhiều, phúc đức hay tiêu tán. Cần biết tiết chế để giữ phước.',
      en: 'Tham Lang in Fortune & Virtue — desire for many experiences may dissipate blessings. Moderation is needed to preserve fortune.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Phúc Đức — hay lo lắng, suy nghĩ tiêu cực. Phúc đức bị giảm bởi thị phi và nghi ngờ. Cần tu dưỡng tâm tính.',
      en: 'Cự Môn in Fortune & Virtue — prone to worry and negative thinking. Blessings diminished by gossip and suspicion. Inner cultivation is needed.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Phúc Đức — phúc đức tốt, tính chính trực mang lại phước lành. Gia tộc có truyền thống đạo đức.',
      en: 'Thiên Tướng in Fortune & Virtue — good blessings from an upright nature. Family has strong moral traditions.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Phúc Đức — cung phúc đức rất tốt, thọ cao, cuộc sống tinh thần bình an. Phúc đức từ đời trước truyền lại.',
      en: 'Thiên Lương in Fortune & Virtue — excellent position; longevity and spiritual peace. Ancestral blessings carry forward strongly.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Phúc Đức — nội tâm bất an, hay lo lắng về tương lai. Phúc đức đến muộn, cần trải qua thử thách trước.',
      en: 'Thất Sát in Fortune & Virtue — inner restlessness and worry about the future. Blessings arrive late, after trials are overcome.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Phúc Đức — cuộc sống tinh thần nhiều biến động, hay thay đổi tín ngưỡng hoặc triết lý sống. Phúc đức thất thường.',
      en: 'Phá Quân in Fortune & Virtue — spiritual life is turbulent with changing beliefs and philosophies. Blessings come in unpredictable waves.',
    },
  },

  'Điền Trạch': {
    'Tử Vi': {
      vi: 'Tử Vi tại Điền Trạch — nhà cửa khang trang, có bất động sản giá trị. Môi trường sống tốt, thích nơi cao sang.',
      en: 'Tử Vi in Property — impressive residence and valuable real estate. Prefers upscale, distinguished living environments.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Điền Trạch — rất tốt cho bất động sản, nhà cửa ổn định và tích lũy được nhiều tài sản cố định.',
      en: 'Thiên Phủ in Property — excellent for real estate; stable housing and accumulated fixed assets over time.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Điền Trạch — hay thay đổi chỗ ở, di chuyển nhiều. Nhà cửa không ổn định nhưng linh hoạt thích ứng.',
      en: 'Thiên Cơ in Property — frequent moves and changing residences. Housing is unstable but highly adaptable.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Điền Trạch — nhà ở sáng sủa, thoáng mát. Miếu Vượng thì có nhà tốt, Hãm thì khó giữ nhà.',
      en: 'Thái Dương in Property — bright, airy residence. Bright position: good housing; weak position: difficulty keeping property.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Điền Trạch — tài sản cố định vững chắc, giỏi đầu tư bất động sản. Nhà cửa mang tính thực tế.',
      en: 'Vũ Khúc in Property — solid fixed assets with real estate investment talent. Practical, functional housing.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Điền Trạch — nhà cửa thoải mái nhưng không hoành tráng. Thích không gian ấm cúng, gần gũi.',
      en: 'Thiên Đồng in Property — comfortable but modest housing. Prefers cozy, intimate living spaces.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Điền Trạch — nhà ở có biến động, có thể gặp tranh chấp bất động sản. Cần cẩn thận giấy tờ.',
      en: 'Liêm Trinh in Property — housing disruptions and possible real estate disputes. Be careful with documents and contracts.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Điền Trạch — nhà ở yên tĩnh, gần nước hoặc thiên nhiên. Miếu Vượng thì có nhiều bất động sản.',
      en: 'Thái Âm in Property — quiet residence near water or nature. When bright, accumulates significant real estate.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Điền Trạch — nhà cửa hay thay đổi, thích trang trí đẹp và xa hoa. Có thể đầu tư bất động sản mạo hiểm.',
      en: 'Tham Lang in Property — changing residences with a love for lavish decor. May take risky real estate investments.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Điền Trạch — hay gặp tranh chấp về nhà đất, hàng xóm thị phi. Cần kỹ lưỡng khi mua bán bất động sản.',
      en: 'Cự Môn in Property — property disputes and difficult neighbors are possible. Extra care needed in real estate transactions.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Điền Trạch — nhà cửa ngăn nắp, sạch sẽ. Bất động sản ổn định, được bảo vệ tốt.',
      en: 'Thiên Tướng in Property — neat, clean residence with stable, well-protected real estate.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Điền Trạch — nhà cửa ấm áp, là nơi che chở cho gia đình. Bất động sản tích lũy dần theo thời gian.',
      en: 'Thiên Lương in Property — warm home that shelters the family. Property accumulates gradually over time.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Điền Trạch — nhà cửa hay biến động, có thể phải bán mua nhiều lần. Khó giữ bất động sản lâu dài.',
      en: 'Thất Sát in Property — frequent housing changes; may buy and sell property multiple times. Difficult to hold real estate long-term.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Điền Trạch — nhà cửa thay đổi nhiều, thích sửa chữa cải tạo. Bất động sản biến động lớn.',
      en: 'Phá Quân in Property — frequent renovations and major property changes. Real estate portfolio is volatile.',
    },
  },

  'Quan Lộc': {
    'Tử Vi': {
      vi: 'Tử Vi tại Quan Lộc — sự nghiệp lãnh đạo, quản lý cấp cao. Phù hợp làm chủ, điều hành hoặc chính trị.',
      en: 'Tử Vi in Career — leadership and senior management roles. Suited for entrepreneurship, executive management, or politics.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Quan Lộc — sự nghiệp ổn định, công việc liên quan đến tài chính, ngân hàng hoặc quản lý tài sản.',
      en: 'Thiên Phủ in Career — stable career in finance, banking, or asset management.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Quan Lộc — phù hợp công việc đòi hỏi tư duy, lập kế hoạch. Ngành công nghệ, tư vấn hoặc nghiên cứu.',
      en: 'Thiên Cơ in Career — suits intellectually demanding work: technology, consulting, or research.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Quan Lộc — sự nghiệp nổi bật trước công chúng. Phù hợp ngành truyền thông, giáo dục, ngoại giao.',
      en: 'Thái Dương in Career — a public-facing career. Suited for media, education, or diplomacy.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Quan Lộc — sự nghiệp gắn liền với tiền bạc. Tài chính, kinh doanh, đầu tư hoặc kế toán.',
      en: 'Vũ Khúc in Career — career tied to money. Finance, business, investing, or accounting.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Quan Lộc — sự nghiệp phát triển chậm nhưng vững. Phù hợp ngành phục vụ, nghệ thuật hoặc giải trí.',
      en: 'Thiên Đồng in Career — slow but steady career growth. Suited for service industries, arts, or entertainment.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Quan Lộc — sự nghiệp đa dạng, có thể làm nhiều nghề. Phù hợp ngành luật, quân sự hoặc kiểm soát.',
      en: 'Liêm Trinh in Career — diverse career with multiple roles. Suited for law, military, or regulatory fields.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Quan Lộc — sự nghiệp yên tĩnh, hậu trường. Phù hợp ngành bất động sản, thiết kế nội thất hoặc nghệ thuật.',
      en: 'Thái Âm in Career — quiet, behind-the-scenes work. Suited for real estate, interior design, or arts.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Quan Lộc — sự nghiệp đa dạng, tham gia nhiều lĩnh vực. Giỏi giao tiếp, phù hợp kinh doanh, giải trí.',
      en: 'Tham Lang in Career — diverse career across multiple fields. Strong communication skills suit business and entertainment.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Quan Lộc — sự nghiệp liên quan đến lời nói: luật sư, giáo viên, MC, bán hàng. Cần cẩn thận thị phi.',
      en: 'Cự Môn in Career — career tied to speech: lawyer, teacher, host, salesperson. Watch for work-related disputes.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Quan Lộc — phù hợp công việc phục vụ, từ thiện hoặc hành chính. Người trợ thủ đắc lực.',
      en: 'Thiên Tướng in Career — suited for service, charity, or administrative roles. An excellent support figure.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Quan Lộc — phù hợp ngành y, giáo dục, tư vấn tâm lý. Sự nghiệp hướng đến giúp đỡ người khác.',
      en: 'Thiên Lương in Career — suits medicine, education, or counseling. Career oriented toward helping others.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Quan Lộc — sự nghiệp nhiều thăng trầm nhưng đầy ấn tượng. Phù hợp ngành quân sự, kinh doanh mạo hiểm.',
      en: 'Thất Sát in Career — dramatic career highs and lows. Suited for military, high-risk business, or pioneering ventures.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Quan Lộc — sự nghiệp hay thay đổi, thích đổi mới sáng tạo. Phù hợp startup, công nghệ hoặc cải cách.',
      en: 'Phá Quân in Career — career of constant change and innovation. Suited for startups, technology, or reform-oriented work.',
    },
  },

  'Nô Bộc': {
    'Tử Vi': {
      vi: 'Tử Vi tại Nô Bộc — có thuộc hạ hoặc bạn bè có địa vị, được người giỏi hỗ trợ trong công việc.',
      en: 'Tử Vi in Servants — associates and friends of high status who provide capable professional support.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Nô Bộc — bạn bè và cộng sự đáng tin cậy, mối quan hệ ổn định và có lợi.',
      en: 'Thiên Phủ in Servants — reliable friends and colleagues; stable, mutually beneficial relationships.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Nô Bộc — bạn bè thông minh nhưng quan hệ hay thay đổi. Cộng sự giỏi nhưng không bền.',
      en: 'Thiên Cơ in Servants — intelligent friends but changing relationships. Skilled associates who may not stay long.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Nô Bộc — bạn bè quảng giao, có nhiều mối quan hệ xã hội. Nam giới giúp đỡ nhiều.',
      en: 'Thái Dương in Servants — wide social circle with many connections. Male friends are particularly helpful.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Nô Bộc — cộng sự trong kinh doanh, mối quan hệ dựa trên lợi ích thực tế.',
      en: 'Vũ Khúc in Servants — business associates; relationships are built on practical, mutual benefit.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Nô Bộc — bạn bè vui vẻ, mối quan hệ nhẹ nhàng nhưng ít chiều sâu.',
      en: 'Thiên Đồng in Servants — cheerful friends and light relationships, though they may lack depth.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Nô Bộc — mối quan hệ bạn bè phức tạp, có thể gặp phản bội hoặc hiểu lầm.',
      en: 'Liêm Trinh in Servants — complex friendships; betrayal or misunderstanding is possible.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Nô Bộc — bạn bè nữ giới giúp đỡ nhiều. Mối quan hệ tình cảm và nhạy cảm.',
      en: 'Thái Âm in Servants — female friends are especially helpful. Emotionally sensitive relationships.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Nô Bộc — bạn bè đông nhưng phức tạp, giao du rộng. Cần phân biệt ai thật sự tốt.',
      en: 'Tham Lang in Servants — many friends but complex dynamics. Discernment is needed to identify true allies.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Nô Bộc — dễ gặp thị phi với bạn bè, mâu thuẫn trong nhóm. Cần lựa chọn bạn cẩn thận.',
      en: 'Cự Môn in Servants — conflicts and gossip among friends. Choose your circle carefully.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Nô Bộc — bạn bè tốt bụng, sẵn sàng giúp đỡ. Mối quan hệ dựa trên sự tin tưởng.',
      en: 'Thiên Tướng in Servants — kind, helpful friends. Relationships built on mutual trust.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Nô Bộc — có bạn bè lớn tuổi hoặc bậc thầy giúp đỡ, hướng dẫn trong cuộc sống.',
      en: 'Thiên Lương in Servants — elder friends or mentors who guide and support you in life.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Nô Bộc — bạn bè mạnh mẽ nhưng quan hệ có thể căng thẳng. Cạnh tranh trong nhóm.',
      en: 'Thất Sát in Servants — strong but tense friendships. Competition within your social group.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Nô Bộc — bạn bè hay thay đổi, mối quan hệ không bền. Cộng sự có thể gây xáo trộn.',
      en: 'Phá Quân in Servants — changing friends and unstable relationships. Associates may cause disruption.',
    },
  },

  'Thiên Di': {
    'Tử Vi': {
      vi: 'Tử Vi tại Thiên Di — ra ngoài được kính trọng, giao du với người có địa vị. Thuận lợi khi xa nhà.',
      en: 'Tử Vi in Travel — respected when away from home; associating with people of status. Favorable for travel and relocation.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Thiên Di — ra ngoài gặp may mắn, được phúc đức bảo vệ khi xa nhà. Du lịch an toàn.',
      en: 'Thiên Phủ in Travel — good fortune when traveling; protected by blessings away from home.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Thiên Di — thích di chuyển, đi nhiều nơi. Cơ hội đến từ bên ngoài quê hương.',
      en: 'Thiên Cơ in Travel — loves traveling and moving around. Opportunities come from beyond your homeland.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Thiên Di — nổi tiếng ở nơi xa, được người lạ quý mến. Sự nghiệp phát triển xa nhà.',
      en: 'Thái Dương in Travel — famous in distant places; well-liked by strangers. Career flourishes away from home.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Thiên Di — kiếm tiền ở nơi xa, kinh doanh quốc tế thuận lợi.',
      en: 'Vũ Khúc in Travel — earning money abroad; international business is favorable.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Thiên Di — du lịch thoải mái, gặp người vui vẻ khi ra ngoài. Cuộc sống xa nhà dễ chịu.',
      en: 'Thiên Đồng in Travel — pleasant travels; meeting cheerful people abroad. Life away from home is comfortable.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Thiên Di — ra ngoài gặp phức tạp, cần cẩn thận với pháp luật nơi xa.',
      en: 'Liêm Trinh in Travel — complications abroad; be cautious with legal matters in foreign places.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Thiên Di — di chuyển yên tĩnh, thích những nơi thanh bình. Nữ quý nhân giúp đỡ khi xa nhà.',
      en: 'Thái Âm in Travel — quiet travels to peaceful places. Female benefactors help when you are away from home.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Thiên Di — giao du rộng rãi ở ngoài, thích khám phá và trải nghiệm mới. Đời sống xã hội phong phú.',
      en: 'Tham Lang in Travel — wide social circle abroad; loves exploration and new experiences. Vibrant social life.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Thiên Di — ra ngoài gặp thị phi, dễ hiểu lầm với người lạ. Cần thận trọng lời ăn tiếng nói.',
      en: 'Cự Môn in Travel — disputes and misunderstandings with strangers. Be careful with words when away from home.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Thiên Di — ra ngoài được giúp đỡ, gặp quý nhân khi du lịch. Uy tín tốt ở nơi xa.',
      en: 'Thiên Tướng in Travel — helped by others when traveling; meeting benefactors. Good reputation in distant places.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Thiên Di — ra ngoài được che chở, an toàn khi di chuyển. Gặp người lớn tuổi giúp đỡ.',
      en: 'Thiên Lương in Travel — protected when abroad; safe travels. Elder benefactors appear in foreign places.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Thiên Di — ra ngoài gặp nhiều thử thách, cuộc sống xa nhà không yên ổn nhưng rèn luyện bản lĩnh.',
      en: 'Thất Sát in Travel — challenges abroad; restless life away from home, but adversity builds character.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Thiên Di — thích phiêu lưu, hay thay đổi nơi ở. Ra ngoài gặp biến động lớn.',
      en: 'Phá Quân in Travel — adventurous spirit with frequent relocations. Major upheavals when traveling.',
    },
  },

  'Tật Ách': {
    'Tử Vi': {
      vi: 'Tử Vi tại Tật Ách — sức khỏe tổng thể tốt nhưng cần chú ý tim mạch và huyết áp khi lớn tuổi.',
      en: 'Tử Vi in Health — generally good health, but watch cardiovascular and blood pressure issues with age.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Tật Ách — sức khỏe ổn định, ít bệnh nặng. Cần chú ý cân nặng và tiêu hóa.',
      en: 'Thiên Phủ in Health — stable health with few serious illnesses. Watch weight and digestive issues.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Tật Ách — dễ bị căng thẳng thần kinh, mất ngủ. Cần chú ý gan và hệ thần kinh.',
      en: 'Thiên Cơ in Health — prone to nervous tension and insomnia. Watch liver and nervous system health.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Tật Ách — cần chú ý mắt, đau đầu và huyết áp cao. Miếu Vượng thì ít bệnh hơn.',
      en: 'Thái Dương in Health — watch for eye problems, headaches, and high blood pressure. Fewer issues when bright.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Tật Ách — cần chú ý phổi, đường hô hấp và xương khớp. Dễ bị chấn thương.',
      en: 'Vũ Khúc in Health — watch lungs, respiratory system, and bones/joints. Injury-prone.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Tật Ách — sức khỏe nhìn chung tốt nhưng dễ bị các bệnh do lười vận động và ăn uống quá mức.',
      en: 'Thiên Đồng in Health — generally good but prone to lifestyle diseases from inactivity and overindulgence.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Tật Ách — cần chú ý hệ sinh dục, tiết niệu và các bệnh liên quan đến máu. Tránh mạo hiểm.',
      en: 'Liêm Trinh in Health — watch reproductive, urinary, and blood-related conditions. Avoid reckless behavior.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Tật Ách — dễ mắc bệnh liên quan nước: thận, bàng quang. Nữ cần chú ý phụ khoa. Hay lo lắng ảnh hưởng sức khỏe.',
      en: 'Thái Âm in Health — prone to water-related ailments: kidneys, bladder. Women should watch gynecological health. Worry affects physical condition.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Tật Ách — cần chú ý gan, rượu bia và các bệnh do lối sống phóng túng. Cân bằng là chìa khóa.',
      en: 'Tham Lang in Health — watch liver, alcohol intake, and lifestyle-related diseases. Balance is key.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Tật Ách — dạ dày, miệng lưỡi và đường tiêu hóa dễ gặp vấn đề. Stress ảnh hưởng lớn đến sức khỏe.',
      en: 'Cự Môn in Health — stomach, mouth, and digestive issues are common. Stress significantly impacts health.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Tật Ách — sức khỏe tương đối tốt, ít bệnh nặng. Cần chú ý da liễu và dị ứng.',
      en: 'Thiên Tướng in Health — relatively good health with few serious conditions. Watch for skin and allergy issues.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Tật Ách — sao che chở sức khỏe, ốm đau có quý nhân giúp chữa. Tuổi thọ cao.',
      en: 'Thiên Lương in Health — a protective star for health; benefactors assist when ill. Good longevity prospects.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Tật Ách — dễ gặp tai nạn, chấn thương hoặc phẫu thuật. Cần cẩn thận khi lao động nặng.',
      en: 'Thất Sát in Health — prone to accidents, injuries, or surgery. Caution needed in heavy physical activity.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Tật Ách — sức khỏe biến động, có thể gặp bệnh bất ngờ. Cần khám sức khỏe định kỳ.',
      en: 'Phá Quân in Health — fluctuating health with possible sudden illnesses. Regular health checkups are essential.',
    },
  },

  'Tài Bạch': {
    'Tử Vi': {
      vi: 'Tử Vi tại Tài Bạch — tài lộc đến từ vị trí lãnh đạo và uy tín. Tiền bạc gắn liền với quyền lực, chi tiêu hào phóng.',
      en: 'Tử Vi in Wealth — fortune comes through leadership and reputation. Money is tied to power; spending is generous.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Tài Bạch — rất tốt cho tài chính, tiền bạc tích lũy ổn định. Biết cách giữ tiền và quản lý tài sản.',
      en: 'Thiên Phủ in Wealth — excellent for finances; steady accumulation. Skilled at saving and asset management.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Tài Bạch — tiền bạc đến từ trí tuệ và kế hoạch. Thu nhập hay thay đổi nhưng có khả năng xoay xở.',
      en: 'Thiên Cơ in Wealth — income from intelligence and planning. Earnings fluctuate but resourcefulness compensates.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Tài Bạch — tiền bạc đến công khai, không giấu giếm. Miếu Vượng thì tài chính dồi dào, Hãm thì hay mất tiền.',
      en: 'Thái Dương in Wealth — money comes openly. Bright: abundant finances; weak: frequent money losses.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Tài Bạch — sao chính tài, rất giỏi kiếm tiền và quản lý tài chính. Phù hợp đầu tư, kinh doanh.',
      en: 'Vũ Khúc in Wealth — the true wealth star; excellent at earning and managing money. Perfect for investment and business.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Tài Bạch — tiền bạc đến nhẹ nhàng, không quá nhiều nhưng đủ sống thoải mái. Không tham vọng lớn về tài chính.',
      en: 'Thiên Đồng in Wealth — money comes gently; not vast but sufficient for comfort. No major financial ambitions.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Tài Bạch — tài chính phức tạp, tiền đến từ nhiều nguồn nhưng cũng dễ gặp rủi ro. Cần minh bạch.',
      en: 'Liêm Trinh in Wealth — complex finances from multiple sources but also risk-prone. Transparency is essential.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Tài Bạch — tài chính liên quan bất động sản, đất đai. Miếu Vượng thì rất giàu, Hãm thì hay lo lắng tiền bạc.',
      en: 'Thái Âm in Wealth — finances tied to real estate and land. Bright: great wealth; weak: financial anxiety.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Tài Bạch — ham muốn tiền bạc lớn, biết cách kiếm tiền nhưng cũng tiêu xài nhiều. Đầu tư mạo hiểm.',
      en: 'Tham Lang in Wealth — strong money desire; knows how to earn but also spends lavishly. Risky investments.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Tài Bạch — tiền bạc đến từ lời nói: bán hàng, tư vấn, dạy học. Dễ gặp tranh chấp tài chính.',
      en: 'Cự Môn in Wealth — income from speech: sales, consulting, teaching. Financial disputes are possible.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Tài Bạch — tài chính ổn định, tiền bạc đến từ công việc phục vụ. Không giàu lớn nhưng đủ đầy.',
      en: 'Thiên Tướng in Wealth — stable finances from service work. Not vast wealth but always sufficient.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Tài Bạch — tiền bạc đến từ uy tín đạo đức. Không giàu sớm nhưng tài chính tốt về sau.',
      en: 'Thiên Lương in Wealth — income from moral reputation. Not early wealth, but finances improve with time.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Tài Bạch — tài chính biến động lớn, lúc giàu lúc nghèo. Kiếm tiền bằng sự dũng cảm và mạo hiểm.',
      en: 'Thất Sát in Wealth — dramatic financial swings between rich and poor. Money earned through courage and risk.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Tài Bạch — tiền bạc đến rồi đi, khó giữ lâu. Hay thay đổi nguồn thu nhập, cần kỷ luật tài chính.',
      en: 'Phá Quân in Wealth — money comes and goes; hard to retain. Income sources keep changing; financial discipline is crucial.',
    },
  },

  'Tử Tức': {
    'Tử Vi': {
      vi: 'Tử Vi tại Tử Tức — con cái có tố chất lãnh đạo, thông minh và thành đạt. Quan hệ cha mẹ-con cái tốt đẹp.',
      en: 'Tử Vi in Children — children with leadership qualities, intelligence, and success. Good parent-child relationships.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Tử Tức — con cái hiếu thảo, biết giữ gìn gia phong. Cuộc sống gia đình hài hòa.',
      en: 'Thiên Phủ in Children — dutiful children who maintain family traditions. Harmonious family life.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Tử Tức — con cái thông minh, nhanh nhạy nhưng đôi khi khó bảo. Quan hệ linh hoạt.',
      en: 'Thiên Cơ in Children — clever, quick children who can sometimes be headstrong. Flexible relationship dynamics.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Tử Tức — con trai nổi bật hơn, năng động và thành công. Mối quan hệ cởi mở.',
      en: 'Thái Dương in Children — sons are more prominent, active, and successful. Open, warm relationships.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Tử Tức — con cái cương quyết, độc lập sớm. Quan hệ cha mẹ-con cái có phần xa cách.',
      en: 'Vũ Khúc in Children — determined, early-independent children. Parent-child relationship may feel somewhat distant.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Tử Tức — con cái hiền lành, dễ thương. Quan hệ cha mẹ-con cái gần gũi, ấm áp.',
      en: 'Thiên Đồng in Children — gentle, lovable children. Warm, close parent-child relationships.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Tử Tức — quan hệ với con cái phức tạp, có thể có xa cách hoặc hiểu lầm. Cần kiên nhẫn.',
      en: 'Liêm Trinh in Children — complex relationship with children; possible distance or misunderstandings. Patience is needed.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Tử Tức — con gái nổi bật hơn, nhạy cảm và giỏi nghệ thuật. Gia đình ấm áp.',
      en: 'Thái Âm in Children — daughters are more prominent, sensitive, and artistically gifted. Warm family atmosphere.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Tử Tức — con cái đa tài nhưng khó kiểm soát. Quan hệ có lúc gần lúc xa.',
      en: 'Tham Lang in Children — multi-talented but hard-to-control children. Relationship fluctuates between closeness and distance.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Tử Tức — hay tranh cãi với con cái, khác biệt thế hệ rõ rệt. Cần lắng nghe và tôn trọng.',
      en: 'Cự Môn in Children — arguments with children and clear generational gaps. Listening and respect are essential.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Tử Tức — con cái ngoan ngoãn, lễ phép. Quan hệ gia đình tốt đẹp, ít xung đột.',
      en: 'Thiên Tướng in Children — well-behaved, polite children. Good family relationships with few conflicts.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Tử Tức — con cái hiếu thảo, biết chăm sóc cha mẹ. Phúc đức cho đời sau.',
      en: 'Thiên Lương in Children — filial children who care for their parents. Blessings extend to the next generation.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Tử Tức — con cái cá tính mạnh, khó uốn nắn. Quan hệ cha mẹ-con cái hay xung đột nhưng con cái tự lập.',
      en: 'Thất Sát in Children — strong-willed, hard-to-mold children. Parent-child conflicts occur but children become self-reliant.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Tử Tức — con cái nổi loạn, thích phá vỡ quy tắc. Quan hệ nhiều biến động nhưng con cái sáng tạo.',
      en: 'Phá Quân in Children — rebellious children who break rules. Turbulent relationship but children are creative.',
    },
  },

  'Phu Thê': {
    'Tử Vi': {
      vi: 'Tử Vi tại Phu Thê — vợ/chồng có địa vị, uy quyền. Hôn nhân tốt đẹp nếu biết tôn trọng lẫn nhau.',
      en: 'Tử Vi in Spouse — partner holds status and authority. Marriage thrives when mutual respect is maintained.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Phu Thê — vợ/chồng hiền lành, gia đình hạnh phúc. Hôn nhân ổn định và phúc đức.',
      en: 'Thiên Phủ in Spouse — a gentle, virtuous partner. Happy, stable, and blessed marriage.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Phu Thê — vợ/chồng thông minh nhưng hay thay đổi. Hôn nhân linh hoạt, cần thích ứng.',
      en: 'Thiên Cơ in Spouse — an intelligent but changeable partner. Marriage requires flexibility and adaptability.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Phu Thê — vợ/chồng năng động, hào phóng. Miếu Vượng thì hôn nhân sáng sủa, Hãm thì hay cãi vã.',
      en: 'Thái Dương in Spouse — an active, generous partner. Bright: a radiant marriage; weak: frequent arguments.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Phu Thê — vợ/chồng giỏi tài chính nhưng cứng đầu. Hôn nhân thực tế, ít lãng mạn.',
      en: 'Vũ Khúc in Spouse — a financially capable but stubborn partner. Practical marriage with less romance.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Phu Thê — vợ/chồng hiền lành, dễ thương. Hôn nhân hài hòa nhưng có thể thiếu đam mê.',
      en: 'Thiên Đồng in Spouse — a gentle, sweet partner. Harmonious marriage but possibly lacking passion.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Phu Thê — tình cảm phức tạp, đa tình. Hôn nhân có nhiều sóng gió, cần kiểm soát cảm xúc.',
      en: 'Liêm Trinh in Spouse — complex, passionate emotions. Marriage is stormy; emotional control is crucial.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Phu Thê — vợ/chồng dịu dàng, lãng mạn. Miếu Vượng thì hôn nhân đẹp, Hãm thì hay buồn phiền.',
      en: 'Thái Âm in Spouse — a gentle, romantic partner. Bright: beautiful marriage; weak: frequent sadness.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Phu Thê — vợ/chồng hấp dẫn, đa tình. Hôn nhân sôi động nhưng dễ gặp cám dỗ bên ngoài.',
      en: 'Tham Lang in Spouse — an attractive, passionate partner. Exciting marriage but vulnerable to outside temptations.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Phu Thê — hay cãi vã, bất đồng quan điểm trong hôn nhân. Cần học cách lắng nghe và nhượng bộ.',
      en: 'Cự Môn in Spouse — arguments and disagreements in marriage. Learning to listen and compromise is essential.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Phu Thê — vợ/chồng đứng đắn, đáng tin cậy. Hôn nhân ổn định và được xã hội tôn trọng.',
      en: 'Thiên Tướng in Spouse — a respectable, trustworthy partner. Stable marriage respected by society.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Phu Thê — vợ/chồng nhân hậu, là chỗ dựa tinh thần. Hôn nhân bền vững theo thời gian.',
      en: 'Thiên Lương in Spouse — a kind, supportive partner who is a spiritual pillar. Marriage strengthens over time.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Phu Thê — hôn nhân nhiều sóng gió, vợ/chồng cá tính mạnh. Cần biết nhường nhịn để giữ hạnh phúc.',
      en: 'Thất Sát in Spouse — turbulent marriage with a strong-willed partner. Compromise is key to happiness.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Phu Thê — hôn nhân thay đổi nhiều, có thể kết hôn muộn hoặc nhiều lần. Đời sống tình cảm không ổn định.',
      en: 'Phá Quân in Spouse — changeable marriage; may marry late or multiple times. Emotional life is unstable.',
    },
  },

  'Huynh Đệ': {
    'Tử Vi': {
      vi: 'Tử Vi tại Huynh Đệ — anh chị em có người thành đạt, được hỗ trợ. Bạn thường là trưởng trong nhóm.',
      en: 'Tử Vi in Siblings — successful siblings who provide support. You tend to lead among your peers.',
    },
    'Thiên Phủ': {
      vi: 'Thiên Phủ tại Huynh Đệ — anh chị em hòa thuận, giúp đỡ lẫn nhau. Mối quan hệ ổn định.',
      en: 'Thiên Phủ in Siblings — harmonious siblings who help each other. Stable relationships.',
    },
    'Thiên Cơ': {
      vi: 'Thiên Cơ tại Huynh Đệ — anh chị em thông minh nhưng mỗi người một hướng. Quan hệ tốt nhưng không quá gần.',
      en: 'Thiên Cơ in Siblings — intelligent siblings but each goes their own way. Good but not overly close relationships.',
    },
    'Thái Dương': {
      vi: 'Thái Dương tại Huynh Đệ — anh chị em nam nổi bật, có người thành công trong xã hội. Quan hệ cởi mở.',
      en: 'Thái Dương in Siblings — male siblings stand out with social success. Open, warm relationships.',
    },
    'Vũ Khúc': {
      vi: 'Vũ Khúc tại Huynh Đệ — anh chị em cương quyết, độc lập. Ít phụ thuộc nhau nhưng tôn trọng.',
      en: 'Vũ Khúc in Siblings — determined, independent siblings. Little dependence but mutual respect.',
    },
    'Thiên Đồng': {
      vi: 'Thiên Đồng tại Huynh Đệ — anh chị em hiền lành, hòa thuận. Tuổi thơ vui vẻ bên nhau.',
      en: 'Thiên Đồng in Siblings — gentle, harmonious siblings. Happy childhood together.',
    },
    'Liêm Trinh': {
      vi: 'Liêm Trinh tại Huynh Đệ — quan hệ anh chị em phức tạp, có thể có xung đột tài chính hoặc tình cảm.',
      en: 'Liêm Trinh in Siblings — complex sibling relationships; possible financial or emotional conflicts.',
    },
    'Thái Âm': {
      vi: 'Thái Âm tại Huynh Đệ — chị em gái nổi bật hơn, quan hệ tình cảm sâu sắc. Gắn bó với mẹ.',
      en: 'Thái Âm in Siblings — sisters are more prominent; deep emotional bonds. Close connection with mother.',
    },
    'Tham Lang': {
      vi: 'Tham Lang tại Huynh Đệ — anh chị em đa dạng, mỗi người một tính cách. Quan hệ sôi nổi nhưng phức tạp.',
      en: 'Tham Lang in Siblings — diverse siblings with varied personalities. Lively but complex relationships.',
    },
    'Cự Môn': {
      vi: 'Cự Môn tại Huynh Đệ — hay cãi vã với anh chị em, bất đồng quan điểm. Cần nhẫn nại để duy trì hòa khí.',
      en: 'Cự Môn in Siblings — frequent arguments and disagreements. Patience is needed to maintain harmony.',
    },
    'Thiên Tướng': {
      vi: 'Thiên Tướng tại Huynh Đệ — anh chị em tốt bụng, sẵn sàng giúp đỡ. Mối quan hệ đáng tin cậy.',
      en: 'Thiên Tướng in Siblings — kind, helpful siblings. Trustworthy relationships.',
    },
    'Thiên Lương': {
      vi: 'Thiên Lương tại Huynh Đệ — có anh chị lớn tuổi che chở, hướng dẫn. Quan hệ như thầy trò.',
      en: 'Thiên Lương in Siblings — elder siblings who protect and guide you. Relationship resembles mentor-student.',
    },
    'Thất Sát': {
      vi: 'Thất Sát tại Huynh Đệ — anh chị em cá tính mạnh, hay xung đột. Mỗi người tự lập, ít phụ thuộc nhau.',
      en: 'Thất Sát in Siblings — strong-willed siblings with frequent clashes. Each is independent, with little mutual dependence.',
    },
    'Phá Quân': {
      vi: 'Phá Quân tại Huynh Đệ — quan hệ anh chị em bất ổn, có thể xa cách sớm. Mỗi người đi một con đường riêng.',
      en: 'Phá Quân in Siblings — unstable sibling relationships; early separation is possible. Each follows their own distinct path.',
    },
  },
};

// =============================================================================
// 11. DAI_HAN_MEANINGS — Đại Hạn (Major Period) interpretation templates
//     Keyed by palace name; each Đại Hạn decade is interpreted through
//     the palace it transits.
// =============================================================================

const DAI_HAN_MEANINGS = {
  'Mệnh': {
    vi: 'Đại Hạn đi qua cung Mệnh — giai đoạn tập trung vào bản thân, định hình lại con người và hướng đi. Các quyết định cá nhân có trọng lượng đặc biệt lớn trong thời kỳ này. Đây là lúc để tự hỏi "mình thực sự là ai" và "mình muốn gì".',
    en: 'Đại Hạn transits Destiny — a period focused on self-definition and personal direction. Individual choices carry especially heavy weight. This is the time to ask "who am I really" and "what do I truly want."',
  },
  'Phụ Mẫu': {
    vi: 'Đại Hạn đi qua cung Phụ Mẫu — giai đoạn liên quan đến cha mẹ, gia đình và cội nguồn. Có thể cần chăm sóc cha mẹ già hoặc giải quyết các vấn đề gia đình từ quá khứ.',
    en: 'Đại Hạn transits Parents — a period involving parents, family, and roots. May need to care for aging parents or resolve lingering family issues from the past.',
  },
  'Phúc Đức': {
    vi: 'Đại Hạn đi qua cung Phúc Đức — giai đoạn hướng nội, suy ngẫm về ý nghĩa cuộc sống. Phúc đức từ đời trước phát huy hoặc nghiệp quả đến. Tốt cho tu dưỡng tinh thần.',
    en: 'Đại Hạn transits Fortune & Virtue — an introspective period reflecting on life\'s meaning. Ancestral blessings activate or karmic consequences arrive. Good for spiritual cultivation.',
  },
  'Điền Trạch': {
    vi: 'Đại Hạn đi qua cung Điền Trạch — giai đoạn liên quan đến nhà cửa, bất động sản và môi trường sống. Có thể mua bán nhà, chuyển nhà hoặc cải tạo nơi ở.',
    en: 'Đại Hạn transits Property — a period involving housing, real estate, and living environment. Buying, selling, moving, or renovating your home is likely.',
  },
  'Quan Lộc': {
    vi: 'Đại Hạn đi qua cung Quan Lộc — giai đoạn trọng tâm là sự nghiệp. Thăng tiến, đổi nghề hoặc thử thách lớn trong công việc. Nỗ lực nghề nghiệp được đền đáp rõ rệt.',
    en: 'Đại Hạn transits Career — career takes center stage. Promotions, career changes, or major professional challenges arise. Professional efforts yield visible rewards.',
  },
  'Nô Bộc': {
    vi: 'Đại Hạn đi qua cung Nô Bộc — giai đoạn liên quan đến bạn bè, cộng sự và mối quan hệ xã hội. Có thể tìm được đồng minh tốt hoặc gặp phản bội.',
    en: 'Đại Hạn transits Servants — a period focused on friends, associates, and social relationships. Good allies may be found, or betrayal may be experienced.',
  },
  'Thiên Di': {
    vi: 'Đại Hạn đi qua cung Thiên Di — giai đoạn di chuyển, thay đổi môi trường. Có thể đi xa, du học, định cư nước ngoài hoặc mở rộng tầm nhìn.',
    en: 'Đại Hạn transits Travel — a period of movement and environmental change. Travel abroad, study overseas, emigrate, or broaden your horizons.',
  },
  'Tật Ách': {
    vi: 'Đại Hạn đi qua cung Tật Ách — giai đoạn cần chú ý sức khỏe đặc biệt. Có thể phát hiện bệnh tiềm ẩn hoặc cần thay đổi lối sống. Phòng bệnh hơn chữa bệnh.',
    en: 'Đại Hạn transits Health — a period requiring special health attention. Hidden conditions may surface or lifestyle changes become necessary. Prevention is better than cure.',
  },
  'Tài Bạch': {
    vi: 'Đại Hạn đi qua cung Tài Bạch — tài chính là trọng tâm. Giai đoạn thuận lợi để xây dựng nền tảng tài chính, nhưng cũng cần cẩn trọng với các rủi ro đầu tư.',
    en: 'Đại Hạn transits Wealth — finances take center stage. A favorable period for building financial foundations, but investment risks require careful attention.',
  },
  'Tử Tức': {
    vi: 'Đại Hạn đi qua cung Tử Tức — giai đoạn liên quan đến con cái, sáng tạo và hậu duệ. Có thể sinh con, lo cho con cái hoặc phát triển dự án sáng tạo.',
    en: 'Đại Hạn transits Children — a period involving children, creativity, and legacy. Childbirth, child-rearing, or developing creative projects may be central themes.',
  },
  'Phu Thê': {
    vi: 'Đại Hạn đi qua cung Phu Thê — giai đoạn trọng tâm là hôn nhân và tình cảm đôi lứa. Có thể kết hôn, ly hôn, hoặc tái định nghĩa mối quan hệ.',
    en: 'Đại Hạn transits Spouse — marriage and romantic relationships take focus. Marriage, divorce, or redefining the partnership may occur during this phase.',
  },
  'Huynh Đệ': {
    vi: 'Đại Hạn đi qua cung Huynh Đệ — giai đoạn liên quan đến anh chị em, bạn đồng nghiệp và cạnh tranh. Có thể hợp tác hoặc xung đột với người cùng thế hệ.',
    en: 'Đại Hạn transits Siblings — a period involving siblings, peers, and competition. Cooperation or conflict with people of your generation may arise.',
  },
};

// =============================================================================
// 12. TONG_LUAN_TEMPLATES — Synthesis (Tổng Luận) template functions
//     Used by the interpretation engine to compose the final reading.
// =============================================================================

const TONG_LUAN_TEMPLATES = {
  opening: {
    vi: (cuc, menhPalace, dominantStar) =>
      `Lá số ${cuc}, cung Mệnh tại ${menhPalace}` + (dominantStar ? `, ${dominantStar} tọa thủ` : ', vô chính diệu') + ' — ',
    en: (cuc, menhPalace, dominantStar) =>
      `A ${cuc} chart with Destiny palace at ${menhPalace}` + (dominantStar ? `, governed by ${dominantStar}` : ', with no main star') + ' — ',
  },
  cachCucIntro: {
    vi: 'Cách cục chủ đạo trong lá số: ',
    en: 'Dominant patterns in this chart: ',
  },
  cachCuc: {
    vi: (patterns) => patterns.length > 0
      ? `Cách cục chủ đạo: ${patterns[0].name}. ${patterns[0].meaning.vi}`
      : 'Lá số không có cách cục đặc biệt nổi bật, thiên về sự ổn định và phát triển từ từ.',
    en: (patterns) => patterns.length > 0
      ? `Dominant pattern: ${patterns[0].nameEn}. ${patterns[0].meaning.en}`
      : 'No dominant pattern stands out — the chart favors steady, gradual development.',
  },
  tuHoaIntro: {
    vi: 'Phân tích Tứ Hóa: ',
    en: 'Four Transformations analysis: ',
  },
  tuHoa: {
    vi: (hoaData) => `Tứ Hóa: Hóa Lộc tại cung ${hoaData.loc || '?'} — tài lộc đến từ ${hoaData.locSource || 'nhiều nguồn'}. Hóa Kỵ tại cung ${hoaData.ky || '?'} — cần chú ý ${hoaData.kyWarning || 'những trở ngại tiềm ẩn'}.`,
    en: (hoaData) => `Four Transformations: Hóa Lộc in ${hoaData.loc || '?'} — fortune flows from ${hoaData.locSource || 'various sources'}. Hóa Kỵ in ${hoaData.ky || '?'} — watch for ${hoaData.kyWarning || 'hidden obstacles'}.`,
  },
  daiHanIntro: {
    vi: 'Đại Hạn hiện tại: ',
    en: 'Current Đại Hạn period: ',
  },
  daiHan: {
    vi: (period, palace) => `Đại Hạn hiện tại (${period}): cung ${palace}. `,
    en: (period, palace) => `Current Đại Hạn (${period}): ${palace} palace. `,
  },
  adviceIntro: {
    vi: 'Lời khuyên tổng quát: ',
    en: 'General guidance: ',
  },
  advice: {
    vi: 'Hãy phát huy ưu điểm từ cách cục thuận lợi, đồng thời ý thức về các thử thách để chuẩn bị tốt hơn. Tử Vi chỉ ra xu hướng, không phải định mệnh — nỗ lực và đạo đức mới là chìa khóa.',
    en: 'Leverage the strengths from favorable patterns while staying aware of challenges to prepare better. Tu Vi reveals tendencies, not destiny — effort and virtue remain the ultimate keys.',
  },
  noPattern: {
    vi: 'Lá số không có cách cục đặc biệt nổi bật. Điều này không phải là xấu — cuộc đời bạn thiên về sự ổn định, phát triển từ từ và tự do lựa chọn con đường riêng.',
    en: 'No special patterns stand out in this chart. This is not negative — your life favors stability, gradual development, and the freedom to choose your own path.',
  },
  menhCach: {
    patterns: {
      'văn': { vi: 'Mệnh Cách: Văn (Học Thuật)', en: 'Chart Type: Scholar' },
      'võ': { vi: 'Mệnh Cách: Võ (Hành Động)', en: 'Chart Type: Warrior' },
      'tài': { vi: 'Mệnh Cách: Tài (Tài Chính)', en: 'Chart Type: Financier' },
      'phúc': { vi: 'Mệnh Cách: Phúc (Phúc Đức)', en: 'Chart Type: Blessed' },
      'quyền': { vi: 'Mệnh Cách: Quyền (Quyền Lực)', en: 'Chart Type: Authority' },
      'nghệ': { vi: 'Mệnh Cách: Nghệ (Sáng Tạo)', en: 'Chart Type: Creative' },
    },
  },
};

// =============================================================================
// 13. EMPTY_PALACE_MEANINGS — Interpretation for palaces with no main star
//     When a palace has no main star (vô chính diệu), stars are borrowed
//     from the opposite palace (đối cung).
// =============================================================================

const EMPTY_PALACE_MEANINGS = {
  'Mệnh': {
    vi: 'Cung Mệnh vô chính diệu — mượn sao từ cung Thiên Di (đối cung). Người có Mệnh trống thường linh hoạt, dễ thích nghi nhưng cần thời gian để tìm thấy bản sắc riêng. Cuộc đời chịu ảnh hưởng lớn từ môi trường bên ngoài.',
    en: 'Empty Destiny palace — borrows stars from the Travel palace (opposite). Highly adaptable and flexible, but may take time finding personal identity. Life is strongly influenced by external environment.',
  },
  'Phụ Mẫu': {
    vi: 'Cung Phụ Mẫu vô chính diệu — quan hệ với cha mẹ nhạt nhẽo hoặc xa cách. Có thể sớm rời gia đình, ít phụ thuộc vào cha mẹ. Ảnh hưởng gia đình gián tiếp.',
    en: 'Empty Parents palace — distant or faint connection with parents. May leave home early with little parental dependence. Family influence is indirect.',
  },
  'Phúc Đức': {
    vi: 'Cung Phúc Đức vô chính diệu — phúc đức không rõ ràng, cần tự tạo phước bằng nỗ lực bản thân. Đời sống tinh thần phụ thuộc nhiều vào hoàn cảnh.',
    en: 'Empty Fortune & Virtue palace — blessings are unclear; fortune must be self-created through personal effort. Spiritual life depends heavily on circumstances.',
  },
  'Điền Trạch': {
    vi: 'Cung Điền Trạch vô chính diệu — nhà cửa không ổn định, hay di chuyển. Bất động sản phụ thuộc vào hoàn cảnh và nỗ lực cá nhân hơn là phúc phần.',
    en: 'Empty Property palace — unstable housing with frequent moves. Real estate depends on circumstances and personal effort rather than innate fortune.',
  },
  'Quan Lộc': {
    vi: 'Cung Quan Lộc vô chính diệu — sự nghiệp không có hướng rõ ràng từ đầu, dễ thay đổi nghề nhiều lần. Linh hoạt nhưng cần kiên trì tìm con đường phù hợp.',
    en: 'Empty Career palace — no clear career direction initially; may change professions multiple times. Flexible but persistence is needed to find the right path.',
  },
  'Nô Bộc': {
    vi: 'Cung Nô Bộc vô chính diệu — mối quan hệ bạn bè và cộng sự không nổi bật. Ít dựa vào người khác, tự lực là chính.',
    en: 'Empty Servants palace — friendships and associate relationships are not prominent. Self-reliance is the primary approach.',
  },
  'Thiên Di': {
    vi: 'Cung Thiên Di vô chính diệu — cuộc sống bên ngoài không đặc biệt thuận lợi hay bất lợi. Kết quả khi ra ngoài phụ thuộc nhiều vào cung Mệnh.',
    en: 'Empty Travel palace — life outside home is neither particularly favorable nor unfavorable. Outcomes when traveling depend largely on the Destiny palace.',
  },
  'Tật Ách': {
    vi: 'Cung Tật Ách vô chính diệu — sức khỏe không có vấn đề đặc trưng rõ ràng nhưng cũng không có sao bảo vệ. Cần chủ động chăm sóc sức khỏe.',
    en: 'Empty Health palace — no specific health issues but also no protective star. Proactive health care is essential.',
  },
  'Tài Bạch': {
    vi: 'Cung Tài Bạch vô chính diệu — tài chính không có nguồn rõ ràng, thu nhập phụ thuộc vào nỗ lực và hoàn cảnh. Cần chủ động tìm kiếm cơ hội.',
    en: 'Empty Wealth palace — no clear income source; finances depend on effort and circumstances. Must actively seek opportunities.',
  },
  'Tử Tức': {
    vi: 'Cung Tử Tức vô chính diệu — chuyện con cái không nổi bật, có thể ít con hoặc quan hệ với con cái không mật thiết. Con cái tự lập sớm.',
    en: 'Empty Children palace — children matters are not prominent; may have few children or a less intimate parent-child bond. Children become independent early.',
  },
  'Phu Thê': {
    vi: 'Cung Phu Thê vô chính diệu — hôn nhân không có xu hướng rõ ràng, vợ/chồng phụ thuộc hoàn cảnh gặp gỡ. Có thể kết hôn muộn hoặc hôn nhân đơn giản.',
    en: 'Empty Spouse palace — marriage has no clear tendency; partner depends on circumstances of meeting. May marry late or have a simple marriage.',
  },
  'Huynh Đệ': {
    vi: 'Cung Huynh Đệ vô chính diệu — quan hệ anh chị em nhạt, ít gần gũi. Mỗi người tự lo cuộc sống riêng, ít can thiệp lẫn nhau.',
    en: 'Empty Siblings palace — sibling relationships are faint and not close. Each person manages their own life with little mutual involvement.',
  },
};

/* ── Tuần/Triệt age-dependent weight constants ── */
const TUAN_TRIET_WEIGHT = {
  triet_dau:  { tienVan: 1.0, hauVan: 0.4 },
  triet_duoi: { tienVan: 0.8, hauVan: 0.2 },
  tuan_dau:   { tienVan: 0.4, hauVan: 1.0 },
  tuan_duoi:  { tienVan: 0.2, hauVan: 0.8 }
};

/* ── Tứ Hóa Mapping: Thiên Can → 4 stars receiving Hóa ── */
const TU_HOA_MAP = [
  /* Giáp(0) */ { loc:'Liêm Trinh',  quyen:'Phá Quân',   khoa:'Vũ Khúc',    ky:'Thái Dương'  },
  /* Ất(1)   */ { loc:'Thiên Cơ',    quyen:'Thiên Lương', khoa:'Tử Vi',       ky:'Thái Âm'     },
  /* Bính(2) */ { loc:'Thiên Đồng',  quyen:'Thiên Cơ',    khoa:'Văn Xương',   ky:'Liêm Trinh'  },
  /* Đinh(3) */ { loc:'Thái Âm',     quyen:'Thiên Đồng',  khoa:'Thiên Cơ',    ky:'Cự Môn'      },
  /* Mậu(4)  */ { loc:'Tham Lang',   quyen:'Thái Âm',     khoa:'Hữu Bật',     ky:'Thiên Cơ'    },
  /* Kỷ(5)   */ { loc:'Vũ Khúc',     quyen:'Tham Lang',   khoa:'Thiên Lương', ky:'Văn Khúc'    },
  /* Canh(6) */ { loc:'Thái Dương',  quyen:'Vũ Khúc',     khoa:'Thái Âm',     ky:'Thiên Đồng'  },
  /* Tân(7)  */ { loc:'Cự Môn',      quyen:'Thái Dương',  khoa:'Văn Khúc',    ky:'Văn Xương'   },
  /* Nhâm(8) */ { loc:'Thiên Lương', quyen:'Tử Vi',       khoa:'Tả Phụ',      ky:'Vũ Khúc'     },
  /* Quý(9)  */ { loc:'Phá Quân',    quyen:'Cự Môn',      khoa:'Thái Âm',     ky:'Tham Lang'   }
];

/* ── Phi Cung Interpretation Templates ── */
const PHI_CUNG_INTERPRETATIONS = {
  "ky_menh_tai":   { vi: "Phải lao động cật lực mới có tiền, nhưng sự tích lũy rất bền vững", en: "Must work hard for money, but accumulation is very stable" },
  "ky_tai_dien":   { vi: "Tiền bạc kiếm được đổ vào bất động sản, tài sản cố định", en: "Earnings flow into real estate and fixed assets" },
  "ky_menh_quan":  { vi: "Sự nghiệp là nguồn áp lực lớn nhất, nhưng cũng là động lực phấn đấu", en: "Career is the biggest pressure source, but also the motivation to strive" },
  "loc_menh_tai":  { vi: "Dòng tiền đến dễ dàng, có duyên với kinh doanh buôn bán", en: "Cash flow comes easily, natural affinity for business" },
  "loc_menh_quan": { vi: "Sự nghiệp thuận lợi, dễ được cất nhắc thăng tiến", en: "Smooth career path, easily promoted" },
  "loc_tai_dien":  { vi: "Biết cách biến tiền thành tài sản, giàu có bền vững", en: "Knows how to convert money into assets, sustainable wealth" },

  /* ── Mệnh-centric Lộc paths ── */
  "loc_menh_phuMau":  { vi: "Được cha mẹ hỗ trợ tài chính và tinh thần, gia đình là nguồn phúc lộc", en: "Parents provide financial and emotional support, family is a blessing source" },
  "loc_menh_phucDuc": { vi: "Phúc đức dày, may mắn tự nhiên đến, ít phải lo lắng", en: "Deep blessings bring natural good fortune with little worry" },
  "loc_menh_dien":    { vi: "Có phúc nhà cửa, dễ sở hữu bất động sản giá trị", en: "Blessed with property, easy acquisition of valuable real estate" },
  "loc_menh_noBoc":   { vi: "Được bạn bè và cộng sự hỗ trợ đắc lực, quý nhân phò trợ", en: "Strong support from friends and associates, benefactors assist" },
  "loc_menh_thienDi": { vi: "Ra ngoài gặp may, du lịch và công tác thuận lợi", en: "Fortune abroad, travel and business trips are favorable" },
  "loc_menh_tatAch":  { vi: "Sức khỏe được bảo vệ, ít ốm đau bệnh tật", en: "Health is protected, rarely sick" },
  "loc_menh_tuTuc":   { vi: "Con cái mang lại phúc lộc, hậu vận tốt đẹp", en: "Children bring blessings, good fortune in later years" },
  "loc_menh_phuThe":  { vi: "Vợ/chồng là nguồn phúc, hôn nhân hạnh phúc và đem lại tài lộc", en: "Spouse is a blessing source, marriage brings happiness and prosperity" },
  "loc_menh_huynhDe": { vi: "Anh chị em hỗ trợ, quan hệ huynh đệ tốt đẹp và có lợi", en: "Siblings provide support, good and beneficial sibling relationships" },

  /* ── Mệnh-centric Kỵ paths ── */
  "ky_menh_phuMau":   { vi: "Áp lực từ cha mẹ hoặc phải lo cho cha mẹ, gánh nặng gia đình", en: "Pressure from parents or must care for them, family burdens" },
  "ky_menh_phucDuc":  { vi: "Nội tâm hay bất an, lo lắng nhiều về cuộc sống", en: "Inner restlessness, much worry about life" },
  "ky_menh_dien":     { vi: "Nhà cửa là nguồn lo, có thể gặp vấn đề bất động sản", en: "Property is a source of worry, possible real estate issues" },
  "ky_menh_noBoc":    { vi: "Dễ bị phản bội bởi bạn bè, cẩn thận với cộng sự", en: "Prone to betrayal by friends, be careful with associates" },
  "ky_menh_thienDi":  { vi: "Ra ngoài hay gặp trở ngại, đi xa không thuận lợi", en: "Obstacles when going out, travel is unfavorable" },
  "ky_menh_tatAch":   { vi: "Cần chú ý sức khỏe, dễ có bệnh mãn tính", en: "Health requires attention, prone to chronic conditions" },
  "ky_menh_tuTuc":    { vi: "Lo lắng về con cái, con có thể là nguồn phiền muộn", en: "Worry about children, children may be a source of grief" },
  "ky_menh_phuThe":   { vi: "Hôn nhân có áp lực, vợ/chồng là nguồn căng thẳng", en: "Marriage under pressure, spouse is a source of stress" },
  "ky_menh_huynhDe":  { vi: "Mâu thuẫn với anh chị em, cạnh tranh trong gia đình", en: "Conflicts with siblings, competition within family" },

  /* ── Tài Bạch (Wealth) relationships ── */
  "loc_tai_quan":     { vi: "Kiếm tiền từ sự nghiệp, công việc sinh ra thu nhập ổn định", en: "Earn money from career, work generates stable income" },
  "loc_tai_phuThe":   { vi: "Vợ/chồng mang lại tài lộc, hôn nhân có lợi về kinh tế", en: "Spouse brings wealth, marriage is financially beneficial" },
  "ky_tai_quan":      { vi: "Sự nghiệp tiêu tốn tiền bạc, đầu tư công việc nhiều hơn thu về", en: "Career consumes money, work investment exceeds returns" },
  "ky_tai_phuThe":    { vi: "Hôn nhân tiêu hao tài chính, vợ/chồng có thể là gánh nặng kinh tế", en: "Marriage drains finances, spouse may be a financial burden" },

  /* ── Quan Lộc (Career) relationships ── */
  "loc_quan_tai":     { vi: "Sự nghiệp tạo ra tiền bạc dồi dào, kinh doanh phát đạt", en: "Career generates abundant money, business flourishes" },
  "loc_quan_thienDi": { vi: "Sự nghiệp phát triển ở nơi xa, công tác nước ngoài thuận lợi", en: "Career develops abroad, overseas assignments favorable" },
  "ky_quan_tai":      { vi: "Công việc áp lực tài chính, kiếm được nhiều nhưng giữ không được", en: "Work creates financial pressure, earn much but can't keep it" },
  "ky_quan_thienDi":  { vi: "Sự nghiệp khiến phải xa nhà, công tác nhiều nơi gây mệt mỏi", en: "Career requires being away from home, constant travel causes fatigue" },

  /* ── Phu Thê (Spouse) relationships ── */
  "loc_phuThe_tai":   { vi: "Vợ/chồng giỏi kiếm tiền, gia đình có thu nhập kép thuận lợi", en: "Spouse is good at earning money, dual-income family thrives" },
  "loc_phuThe_tuTuc": { vi: "Hôn nhân mang lại con cái tốt đẹp, gia đình hạnh phúc viên mãn", en: "Marriage brings good children, family is happily fulfilled" },
  "ky_phuThe_tai":    { vi: "Vợ/chồng là nguồn tiêu tiền, cần cân bằng tài chính gia đình", en: "Spouse is a spending source, need to balance family finances" },
  "ky_phuThe_tuTuc":  { vi: "Hôn nhân và con cái là nguồn lo lắng đồng thời", en: "Marriage and children are simultaneous sources of worry" },
};

/* Palace name lookup */
const PALACE_NAMES = ['Mệnh','Phụ Mẫu','Phúc Đức','Điền Trạch','Quan Lộc','Nô Bộc','Thiên Di','Tật Ách','Tài Bạch','Tử Tức','Phu Thê','Huynh Đệ'];

// =============================================================================
// Loading verification (updated)
// =============================================================================
console.log('tuvi-data.js loaded:', typeof TU_VI_POS !== 'undefined');
console.log('tuvi-data.js interpretation data:', typeof CACH_CUC_PATTERNS !== 'undefined' && typeof PALACE_STAR_MEANINGS !== 'undefined');
