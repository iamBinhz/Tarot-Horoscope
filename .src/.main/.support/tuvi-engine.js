/* ── tuvi-engine.js — Tử Vi static data + pure algorithm ── */
/* No DOM access. Reads lunar-data.js (gregorianToLunar) and tuvi-data.js */
/* (TU_VI_POS, deriveMainStarPositions, AUX_BY_*, getHoaTinhPos, getLinhTinhPos, */
/* getTrangSinhCycle, TU_HOA_TABLE, TU_HOA_MAP, STAR_BRIGHTNESS_TABLE, */
/* BRANCH_ELEMENT, analyzeNguHanh, CACH_CUC_PATTERNS, TUAN_TRIET_WEIGHT). */

/* ── Seeded RNG ── */
function seedHash(str){let h=0;for(let i=0;i<str.length;i++){h=((h<<5)-h)+str.charCodeAt(i);h|=0;}return h>>>0;}
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}

/* ══════════════════════════════════════════
   TRADITIONAL TỬ VI CHART DATA & LAYOUT
   ══════════════════════════════════════════ */

const BRANCHES=[
  {vi:'Tý',   han:'子', en:'Rat', idx:0},
  {vi:'Sửu',  han:'丑', en:'Ox', idx:1},
  {vi:'Dần',  han:'寅', en:'Tiger', idx:2},
  {vi:'Mão',  han:'卯', en:'Rabbit', idx:3},
  {vi:'Thìn', han:'辰', en:'Dragon', idx:4},
  {vi:'Tỵ',   han:'巳', en:'Snake', idx:5},
  {vi:'Ngọ',  han:'午', en:'Horse', idx:6},
  {vi:'Mùi',  han:'未', en:'Goat', idx:7},
  {vi:'Thân', han:'申', en:'Monkey', idx:8},
  {vi:'Dậu',  han:'酉', en:'Rooster', idx:9},
  {vi:'Tuất', han:'戌', en:'Dog', idx:10},
  {vi:'Hợi',  han:'亥', en:'Pig', idx:11}
];

/* Grid position [row, col] for each branch index 0-11 */
const BRANCH_GRID = [
  [3,2], [3,1], [3,0], [2,0], [1,0], [0,0],
  [0,1], [0,2], [0,3], [1,3], [2,3], [3,3]
];

const PALACES=[
  {vi:'Mệnh',     en:'Destiny'},
  {vi:'Huynh Đệ', en:'Siblings'},
  {vi:'Phu Thê',   en:'Marriage'},
  {vi:'Tử Tức',    en:'Children'},
  {vi:'Tài Bạch',  en:'Wealth'},
  {vi:'Tật Ách',   en:'Health'},
  {vi:'Thiên Di',  en:'Travel'},
  {vi:'Nô Bộc',    en:'Friends'},
  {vi:'Quan Lộc',  en:'Career'},
  {vi:'Điền Trạch',en:'Property'},
  {vi:'Phúc Đức',  en:'Blessings'},
  {vi:'Phụ Mẫu',  en:'Parents'}
];

/* Star data with their intrinsic Ngũ Hành element */
const STAR_DATA = {
  'Tử Vi':    {el:'Thổ', type:'main'},
  'Thiên Cơ': {el:'Mộc', type:'main'},
  'Thái Dương':{el:'Hỏa', type:'main'},
  'Vũ Khúc':  {el:'Kim', type:'main'},
  'Thiên Đồng':{el:'Thủy', type:'main'},
  'Liêm Trinh':{el:'Hỏa', type:'main'},
  'Thiên Phủ': {el:'Thổ', type:'main'},
  'Thái Âm':  {el:'Thủy', type:'main'},
  'Tham Lang': {el:'Thủy', type:'main'},
  'Cự Môn':   {el:'Thủy', type:'main'},
  'Thiên Tướng':{el:'Thủy', type:'main'},
  'Thiên Lương':{el:'Mộc', type:'main'},
  'Thất Sát': {el:'Kim', type:'main'},
  'Phá Quân': {el:'Thủy', type:'main'},
  'Văn Xương': {el:'Kim', type:'aux'},
  'Văn Khúc':  {el:'Thủy', type:'aux'},
  'Tả Phụ':   {el:'Thổ', type:'aux'},
  'Hữu Bật':  {el:'Thủy', type:'aux'},
  'Thiên Khôi':{el:'Hỏa', type:'aux'},
  'Thiên Việt':{el:'Hỏa', type:'aux'},
  'Lộc Tồn':  {el:'Thổ', type:'aux'},
  'Thiên Mã': {el:'Hỏa', type:'aux'},
  'Hồng Loan': {el:'Thủy', type:'aux'},
  'Thiên Hỉ': {el:'Thủy', type:'aux'},
  'Đào Hoa':  {el:'Mộc', type:'aux'},
  'Thiên Đức': {el:'Hỏa', type:'aux'},
  'Phúc Đức':  {el:'Thổ', type:'aux'},
  'Bạch Hổ':  {el:'Kim', type:'aux'},
  'Đà La':    {el:'Kim', type:'aux'},
  'Kình Dương':{el:'Kim', type:'aux'},
  'Hỏa Tinh': {el:'Hỏa', type:'aux'},
  'Linh Tinh': {el:'Hỏa', type:'aux'},
  'Thiên Không':{el:'Hỏa', type:'aux'},
  'Địa Không': {el:'Hỏa', type:'aux'},
  'Địa Kiếp': {el:'Hỏa', type:'aux'},
  'Thiên Thương':{el:'Thủy', type:'aux'},
  'Phá Toái': {el:'Hỏa', type:'aux'},
  'Thiên Y':  {el:'Thủy', type:'aux'},
  'Quốc Ấn':  {el:'Thổ', type:'aux'},
  'Đường Phù':{el:'Mộc', type:'aux'},
  'Long Đức': {el:'Thủy', type:'aux'},
  'Thiên Hình':{el:'Kim', type:'aux'},
  'Thiên Riêu':{el:'Thủy', type:'aux'},
  'Thiên Sứ': {el:'Thủy', type:'aux'},
  'Tấu Thư':  {el:'Kim', type:'aux'},
  'Phi Liêm': {el:'Hỏa', type:'aux'},
  'Long Trì':  {el:'Thủy', type:'aux'},
  'Phượng Các':{el:'Thủy', type:'aux'},
  'Giải Thần': {el:'Mộc', type:'aux'},
  'Ân Quang':  {el:'Hỏa', type:'aux'},
  'Thiên Quý': {el:'Thổ', type:'aux'},
  'Tam Thai':  {el:'Thủy', type:'aux'},
  'Bát Tọa':  {el:'Hỏa', type:'aux'},
  'Tử Phù':   {el:'Thổ', type:'aux'},
  'Thiên La':  {el:'Hỏa', type:'aux'},
  'Địa Võng':  {el:'Hỏa', type:'aux'},
  'Cô Thần':  {el:'Hỏa', type:'aux'},
  'Quả Tú':   {el:'Hỏa', type:'aux'},
  'Thiên Tài': {el:'Thổ', type:'aux'},
  'Thiên Thọ': {el:'Thổ', type:'aux'},
  'Mộc Dục':  {el:'Thủy', type:'aux'},
  'Trường Sinh':{el:'Thủy', type:'aux'},
  'Quan Đới': {el:'Kim', type:'aux'},
  'Lâm Quan': {el:'Kim', type:'aux'},
  'Đế Vượng': {el:'Kim', type:'aux'},
  'Suy':      {el:'Thủy', type:'aux'},
  'Bệnh':     {el:'Thủy', type:'aux'},
  'Tử':       {el:'Thủy', type:'aux'},
  'Mộ':       {el:'Thổ', type:'aux'},
  'Tuyệt':    {el:'Kim', type:'aux'},
  'Thai':     {el:'Thủy', type:'aux'},
  'Dưỡng':    {el:'Thổ', type:'aux'}
};

const MAIN_STARS=['Tử Vi','Thiên Cơ','Thái Dương','Vũ Khúc','Thiên Đồng','Liêm Trinh','Thiên Phủ','Thái Âm','Tham Lang','Cự Môn','Thiên Tướng','Thiên Lương','Thất Sát','Phá Quân'];

/* Extended aux star lists per reference image */
const AUX_STARS_SET1=['Văn Xương','Văn Khúc','Tả Phụ','Hữu Bật','Thiên Khôi','Thiên Việt','Lộc Tồn','Thiên Mã'];
const AUX_STARS_SET2=['Hồng Loan','Thiên Hỉ','Đào Hoa','Thiên Đức','Hỏa Tinh','Linh Tinh','Kình Dương','Đà La'];
const AUX_STARS_SET3=['Thiên Không','Địa Không','Địa Kiếp','Thiên Hình','Thiên Riêu','Phá Toái','Thiên Thương','Phúc Đức'];
const AUX_STARS_SET4=['Long Đức','Quốc Ấn','Đường Phù','Thiên Y','Long Trì','Phượng Các','Giải Thần','Thiên La'];
const AUX_STARS_SET5=['Tấu Thư','Phi Liêm','Ân Quang','Thiên Quý','Tam Thai','Bát Tọa','Tử Phù','Thiên Sứ'];
const ALL_AUX = [...AUX_STARS_SET1,...AUX_STARS_SET2,...AUX_STARS_SET3,...AUX_STARS_SET4,...AUX_STARS_SET5];

/* Tràng Sinh cycle */
const TRANG_SINH=['Trường Sinh','Mộc Dục','Quan Đới','Lâm Quan','Đế Vượng','Suy','Bệnh','Tử','Mộ','Tuyệt','Thai','Dưỡng'];
const TRANG_SINH_EN=['Birth','Bath','Attire','Official','Emperor','Decay','Sickness','Death','Grave','Extinction','Womb','Nourishment'];

const ELEMENTS=['Kim','Mộc','Thủy','Hỏa','Thổ'];
const EL_NAMES={Kim:'Metal',Mộc:'Wood',Thủy:'Water',Hỏa:'Fire',Thổ:'Earth'};
const EL_CLASS={Kim:'el-kim',Mộc:'el-moc',Thủy:'el-thuy',Hỏa:'el-hoa',Thổ:'el-tho'};
const STAR_EL_CLASS={Kim:'s-kim',Mộc:'s-moc',Thủy:'s-thuy',Hỏa:'s-hoa',Thổ:'s-tho'};
const HOUR_NAMES=['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];
const HOA_TYPES=[
  {name:'Lộc',cls:'hoa-loc',label:'Hóa Lộc',labelEn:'Hua Lu (Prosperity)'},
  {name:'Quyền',cls:'hoa-quyen',label:'Hóa Quyền',labelEn:'Hua Quan (Power)'},
  {name:'Khoa',cls:'hoa-khoa',label:'Hóa Khoa',labelEn:'Hua Ke (Fame)'},
  {name:'Kỵ',cls:'hoa-ky',label:'Hóa Kỵ',labelEn:'Hua Ji (Clouded)'}
];

/* Brightness levels */
const BRIGHTNESS = ['M','V','Đ','B','H'];
const BRIGHTNESS_FULL = {M:'Miếu',V:'Vượng',Đ:'Đắc',B:'Bình',H:'Hãm'};
const BRIGHTNESS_EN = {M:'Brilliant',V:'Prosperous',Đ:'Favorable',B:'Peaceful',H:'Trapped'};

/* Heavenly Stems & Nap Am */
const THIEN_CAN=['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý'];
const THIEN_CAN_EN=['Jia (Yang Wood)','Yi (Yin Wood)','Bing (Yang Fire)','Ding (Yin Fire)','Wu (Yang Earth)','Ji (Yin Earth)','Geng (Yang Metal)','Xin (Yin Metal)','Ren (Yang Water)','Gui (Yin Water)'];

/* Nạp Âm table (60 Giáp Tý cycle) */
const NAP_AM_TABLE = [
  'Hải Trung Kim','Hải Trung Kim','Lư Trung Hỏa','Lư Trung Hỏa','Đại Lâm Mộc','Đại Lâm Mộc',
  'Lộ Bàng Thổ','Lộ Bàng Thổ','Kiếm Phong Kim','Kiếm Phong Kim','Sơn Đầu Hỏa','Sơn Đầu Hỏa',
  'Giản Hạ Thủy','Giản Hạ Thủy','Thành Đầu Thổ','Thành Đầu Thổ','Bạch Lạp Kim','Bạch Lạp Kim',
  'Dương Liễu Mộc','Dương Liễu Mộc','Tuyền Trung Thủy','Tuyền Trung Thủy','Ốc Thượng Thổ','Ốc Thượng Thổ',
  'Tích Lịch Hỏa','Tích Lịch Hỏa','Tùng Bách Mộc','Tùng Bách Mộc','Trường Lưu Thủy','Trường Lưu Thủy',
  'Sa Trung Kim','Sa Trung Kim','Sơn Hạ Hỏa','Sơn Hạ Hỏa','Bình Địa Mộc','Bình Địa Mộc',
  'Bích Thượng Thổ','Bích Thượng Thổ','Kim Bạch Kim','Kim Bạch Kim','Phúc Đăng Hỏa','Phúc Đăng Hỏa',
  'Thiên Hà Thủy','Thiên Hà Thủy','Đại Dịch Thổ','Đại Dịch Thổ','Thoa Xuyến Kim','Thoa Xuyến Kim',
  'Tang Đố Mộc','Tang Đố Mộc','Đại Khê Thủy','Đại Khê Thủy','Sa Trung Thổ','Sa Trung Thổ',
  'Thiên Thượng Hỏa','Thiên Thượng Hỏa','Thạch Lựu Mộc','Thạch Lựu Mộc','Đại Hải Thủy','Đại Hải Thủy'
];

/* Nạp Âm Ngũ Hành extraction */
function getNapAmHanh(napAm) {
  if (napAm.includes('Kim')) return 'Kim';
  if (napAm.includes('Mộc')) return 'Mộc';
  if (napAm.includes('Thủy')) return 'Thủy';
  if (napAm.includes('Hỏa')) return 'Hỏa';
  if (napAm.includes('Thổ')) return 'Thổ';
  return 'Thổ';
}

function getNapAmEn(napAm) {
  const el = getNapAmHanh(napAm);
  const elEn = EL_NAMES[el] || el;
  return `${napAm} (${elEn})`;
}

/* Cục mapping from Nạp Âm Ngũ Hành */
const CUC_MAP = {Kim:'Kim Tứ Cục',Mộc:'Mộc Tam Cục',Thủy:'Thủy Nhị Cục',Hỏa:'Hỏa Lục Cục',Thổ:'Thổ Ngũ Cục'};
const CUC_MAP_EN = {Kim:'Metal 4th cục',Mộc:'Wood 3rd cục',Thủy:'Water 2nd cục',Hỏa:'Fire 6th cục',Thổ:'Earth 5th cục'};

const STAR_MEANINGS = {
  'Tử Vi': {
    en: 'a natural sense of authority and self-assurance. People with this star tend to take on leadership roles comfortably — they carry themselves with dignity and others often look to them for direction, sometimes without realizing why',
    vi: 'thiên hướng lãnh đạo tự nhiên và phong thái đĩnh đạc. Người có sao này thường tự tin đảm nhận vai trò dẫn dắt — họ mang một phong cách uy nghiêm khiến người khác tin tưởng và nghe theo'
  },
  'Thiên Cơ': {
    en: 'a sharp, analytical mind that picks up on patterns quickly. This is someone who plans several steps ahead and adapts well when circumstances change — less about brute force, more about working smart',
    vi: 'đầu óc nhanh nhạy, giỏi phân tích và nắm bắt tình hình. Đây là người biết tính toán nhiều bước trước và thích ứng tốt khi hoàn cảnh thay đổi — thiên về mưu trí hơn là sức mạnh'
  },
  'Thái Dương': {
    en: 'an outgoing, warm personality that draws attention naturally. There is usually a strong public presence here — the kind of person who does well in visible roles and genuinely enjoys helping others succeed',
    vi: 'tính cách cởi mở, nhiệt tình và dễ thu hút sự chú ý. Người có sao này thường nổi bật trong các vai trò công khai và thực sự thích giúp đỡ người khác thành công'
  },
  'Vũ Khúc': {
    en: 'a practical, no-nonsense approach to getting things done. This star is strongly tied to financial matters — not through luck, but through discipline, hard work, and a talent for managing resources efficiently',
    vi: 'cách tiếp cận thực tế, không vòng vo trong công việc. Sao này liên quan mật thiết đến tài chính — không phải nhờ may mắn mà nhờ kỷ luật, chăm chỉ và khả năng quản lý nguồn lực hiệu quả'
  },
  'Thiên Đồng': {
    en: 'a laid-back, easygoing temperament with genuine appreciation for beauty and comfort. Life tends to flow more smoothly with this star, though the challenge is sometimes a lack of urgency when urgency is needed',
    vi: 'tính tình điềm đạm, dễ chịu và biết thưởng thức cái đẹp. Cuộc sống có xu hướng suôn sẻ hơn với sao này, dù đôi khi thiếu sự quyết liệt khi cần thiết'
  },
  'Liêm Trinh': {
    en: 'intense drive and high personal standards. This star pushes people to excel, but it also brings a certain restlessness — satisfaction is hard to come by because the bar keeps moving higher',
    vi: 'động lực mạnh mẽ và tiêu chuẩn bản thân cao. Sao này thúc đẩy người ta vươn lên xuất sắc, nhưng cũng mang theo sự bất an — khó hài lòng vì cái đích cứ cao dần'
  },
  'Thiên Phủ': {
    en: 'stability and material comfort. This is one of the more fortunate stars for financial security — it suggests someone who accumulates steadily over time and tends to have a safety net, even during rough patches',
    vi: 'sự ổn định và sung túc về vật chất. Đây là một trong những sao tốt nhất cho tài chính — cho thấy người tích lũy đều đặn theo thời gian và thường có lưới an toàn kể cả trong giai đoạn khó khăn'
  },
  'Thái Âm': {
    en: 'strong intuition and emotional awareness. This star is especially active in people who are perceptive about others\' feelings and motivations — they often "know" things before the evidence catches up',
    vi: 'trực giác mạnh và khả năng thấu hiểu cảm xúc. Sao này đặc biệt nổi bật ở những người nhạy bén với tâm tư người khác — họ thường "biết" trước khi có bằng chứng cụ thể'
  },
  'Tham Lang': {
    en: 'a complex mix of ambition, charm, and desire for experience. This star drives people to pursue what they want with real intensity, and it often shows up in those who go through significant personal transformations',
    vi: 'sự pha trộn phức tạp giữa tham vọng, sức hút và khao khát trải nghiệm. Sao này thúc đẩy người ta theo đuổi mục tiêu với cường độ cao, và thường xuất hiện ở người trải qua nhiều biến đổi lớn trong đời'
  },
  'Cự Môn': {
    en: 'strong verbal ability and a critical, questioning mind. People with this star are good at debate and analysis, but they need to watch for a tendency to be overly skeptical or argumentative when stressed',
    vi: 'khả năng ngôn ngữ tốt và tư duy phản biện sắc sảo. Người có sao này giỏi tranh luận và phân tích, nhưng cần chú ý xu hướng hoài nghi hoặc hay cãi khi căng thẳng'
  },
  'Thiên Tướng': {
    en: 'reliability and a protective instinct. This is the person others turn to in a crisis — steady, principled, and willing to stand up for people who cannot stand up for themselves',
    vi: 'sự đáng tin cậy và bản năng che chở. Đây là người mà mọi người tìm đến khi gặp khó — vững vàng, có nguyên tắc và sẵn sàng bảo vệ người yếu thế'
  },
  'Thiên Lương': {
    en: 'a thoughtful, reflective nature with a genuine interest in learning and understanding. This star often appears in scholars, teachers, and advisors — people who guide others through knowledge rather than force',
    vi: 'tính cách trầm tư, ham học hỏi và thích tìm hiểu sâu. Sao này thường thấy ở học giả, giáo viên, cố vấn — những người hướng dẫn bằng kiến thức chứ không phải quyền lực'
  },
  'Thất Sát': {
    en: 'independence and a willingness to face difficult situations head-on. This is not an easy star — it brings challenges, but it also builds real resilience. People with Thất Sát are often at their best under pressure',
    vi: 'tinh thần độc lập và sẵn sàng đối mặt khó khăn. Đây không phải sao dễ — mang nhiều thử thách nhưng cũng rèn được sự kiên cường thật sự. Người có Thất Sát thường mạnh nhất khi chịu áp lực'
  },
  'Phá Quân': {
    en: 'a restless need for change and a willingness to tear down what is not working. This star is disruptive by nature, but that disruption often clears the way for something genuinely better',
    vi: 'sự bất an cần thay đổi và sẵn sàng phá bỏ cái không còn hiệu quả. Sao này mang tính phá cách, nhưng sự phá cách đó thường dọn đường cho điều tốt đẹp hơn'
  }
};

/* ══════════════════════════════════════════
   POSITIONING & DERIVATION ALGORITHMS
   ══════════════════════════════════════════ */

/* ── Compute Mệnh cung position based on birth month & hour ── */
function computeMenhCung(lunarMonth, hourIdx) {
  return (2 + lunarMonth - 1 - hourIdx + 24) % 12;
}

function computeThanCung(lunarMonth, hourIdx) {
  return (2 + lunarMonth - 1 + hourIdx) % 12;
}

/* ── Derive Cục from (year Thiên Can + Mệnh cung Địa Chi) ── */
function deriveCuc(canIdx, menhBranchIdx) {
  /* Step 1: Ngũ Thử Độn — Thiên Can at Dần */
  const startCan = ((canIdx % 5) * 2 + 2) % 10;
  /* Step 2: Count Dần → Mệnh cung → palace Thiên Can */
  const menhCungCan = (startCan + ((menhBranchIdx - 2 + 12) % 12)) % 10;
  /* Step 3: Sexagenary → Nạp Âm → Ngũ Hành → Cục */
  const sexIdx = ((6 * menhCungCan - 5 * menhBranchIdx) % 60 + 60) % 60;
  const napAmForCuc = NAP_AM_TABLE[sexIdx];
  const cucHanh = getNapAmHanh(napAmForCuc);
  /* Step 4: element → Cục value */
  const cucValueMap = { Thủy: 2, Mộc: 3, Kim: 4, Thổ: 5, Hỏa: 6 };
  const cucValue = cucValueMap[cucHanh];
  const cuc = { vi: CUC_MAP[cucHanh], en: CUC_MAP_EN[cucHanh] };
  return { hanh: cucHanh, cucValue: cucValue, cuc: cuc };
}

/* ── Nạp Thiên Can for all 12 palaces via Ngũ Thử Độn ── */
function napThienCan12Cung(canIdx) {
  const startCan = ((canIdx % 5) * 2 + 2) % 10;
  const result = new Array(12);
  for (let branchIdx = 0; branchIdx < 12; branchIdx++) {
    result[branchIdx] = (startCan + ((branchIdx - 2 + 12) % 12)) % 10;
  }
  return result;
}

/* ── Find palace index containing a specific star ── */
function findStarPalace(palaceData, starName) {
  for (let i = 0; i < 12; i++) {
    const allStars = [...palaceData[i].mainStars, ...palaceData[i].auxStars];
    if (allStars.includes(starName)) return i;
  }
  return -1;
}

/* ── Build Phi Cung Hóa Tượng directed graph ── */
function buildPhiCungGraph(palaceData) {
  if (typeof TU_HOA_MAP === 'undefined') return null;

  const edges = [];
  const HOA_KIND = ['loc', 'quyen', 'khoa', 'ky'];

  for (let i = 0; i < 12; i++) {
    const can = palaceData[i].canIdx;
    if (can === undefined) continue;
    const tuHoa = TU_HOA_MAP[can];
    for (const hoa of HOA_KIND) {
      const starName = tuHoa[hoa];
      const targetPalace = findStarPalace(palaceData, starName);
      if (targetPalace >= 0) {
        edges.push({ from: i, to: targetPalace, hoa, star: starName, fromCan: can });
      }
    }
  }

  /* Kỵ→Kỵ chains (depth ≤ 4) */
  const kyChuyenKy = [];
  const locChuyenKy = [];
  for (let start = 0; start < 12; start++) {
    const kyChain = [start];
    let current = start;
    for (let depth = 0; depth < 4; depth++) {
      const kyEdge = edges.find(e => e.from === current && e.hoa === 'ky');
      if (!kyEdge || kyChain.includes(kyEdge.to)) break;
      kyChain.push(kyEdge.to);
      current = kyEdge.to;
    }
    if (kyChain.length >= 3) kyChuyenKy.push(kyChain);

    const locEdge = edges.find(e => e.from === start && e.hoa === 'loc');
    if (locEdge) {
      const lkChain = [start, locEdge.to];
      const kyFromLoc = edges.find(e => e.from === locEdge.to && e.hoa === 'ky');
      if (kyFromLoc && !lkChain.includes(kyFromLoc.to)) {
        lkChain.push(kyFromLoc.to);
        locChuyenKy.push(lkChain);
      }
    }
  }

  return { edges, kyChuyenKy, locChuyenKy };
}

/* ══════════════════════════════════════════
   CÁCH CỤC PATTERN EVALUATION
   ══════════════════════════════════════════ */

/* ── Tam Hợp (Triple Harmony) helper ── */
function getTamHop(branchIdx) {
  const groups = [[2,6,10],[3,7,11],[0,4,8],[1,5,9]];
  return groups.find(g => g.includes(branchIdx)) || [];
}

/* ── Lục Hợp (Six Harmonies) helper — mutual attraction pairs ── */
/* Tý-Sửu, Dần-Hợi, Mão-Tuất, Thìn-Dậu, Tỵ-Thân, Ngọ-Mùi */
function getLucHop(branchIdx) {
  const pairs = {0:1, 1:0, 2:11, 11:2, 3:10, 10:3, 4:9, 9:4, 5:8, 8:5, 6:7, 7:6};
  return pairs[branchIdx] !== undefined ? [branchIdx, pairs[branchIdx]] : [branchIdx];
}

/* ── evalHoaConvergence — required Hóa types converge in Mệnh tam hợp ── */
function evalHoaConvergence(c, palaceData, phiCungGraph) {
  if (!phiCungGraph) return null;
  const menhBranch = palaceData[0].branchIdx;
  const tamHop = getTamHop(menhBranch);
  const required = c.required || ['loc','quyen','khoa'];
  const hoaMap = {};
  palaceData.forEach(p => {
    p.hoa.forEach(h => {
      const key = h.type.label === 'Hóa Lộc' ? 'loc'
                : h.type.label === 'Hóa Quyền' ? 'quyen'
                : h.type.label === 'Hóa Khoa' ? 'khoa'
                : h.type.label === 'Hóa Kỵ' ? 'ky' : null;
      if (key) hoaMap[key] = p.branchIdx;
    });
  });
  const matched = required.filter(r => hoaMap[r] !== undefined && tamHop.includes(hoaMap[r]));
  if (matched.length === required.length) {
    return matched.map(r => hoaMap[r]);
  }
  return null;
}

/* ── evalStarTriad — 3 specific stars in tam hợp positions ── */
function evalStarTriad(c, palaceData) {
  const stars = c.stars || [];
  if (stars.length < 2) return null;
  const branches = stars.map(s => {
    for (const p of palaceData) {
      if (p.mainStars.includes(s) || p.auxStars.includes(s)) return p.branchIdx;
    }
    return -1;
  }).filter(b => b >= 0);
  if (branches.length < 2) return null;
  const tamHop0 = getTamHop(branches[0]);
  if (branches.every(b => tamHop0.includes(b))) return branches;
  return null;
}

/* ── evalStarAtPalace — star at specific palace ── */
function evalStarAtPalace(c, palaceData) {
  const star = c.star;
  const palaceIdx = c.palaceIdx !== undefined ? c.palaceIdx : 0;
  const p = palaceData[palaceIdx];
  if (!p) return null;
  if (p.mainStars.includes(star) || p.auxStars.includes(star)) return [p.branchIdx];
  return null;
}

/* ── evalStarBrightness — star achieves Miếu/Vượng ── */
function evalStarBrightness(c, palaceData) {
  if (typeof STAR_BRIGHTNESS_TABLE === 'undefined') return null;
  const star = c.star;
  const required = c.brightness || ['Miếu','Vượng'];
  for (const p of palaceData) {
    if (p.mainStars.includes(star)) {
      const b = STAR_BRIGHTNESS_TABLE[star] && STAR_BRIGHTNESS_TABLE[star][p.branchIdx];
      if (b && required.includes(b)) return [p.branchIdx];
    }
  }
  return null;
}

/* ── evaluatePattern wrapper ── */
function evaluatePattern(pattern, palaceData, phiCungGraph) {
  const c = pattern.condition;
  /* Legacy function-based condition support */
  if (typeof c === 'function') {
    const starPositions = {};
    palaceData.forEach(p => p.mainStars.forEach(s => { starPositions[s] = p.branchIdx; }));
    const auxPositions = {};
    palaceData.forEach(p => p.auxStars.forEach(s => { auxPositions[s] = p.branchIdx; }));
    const hoaMap = {};
    palaceData.forEach(p => p.hoa.forEach(h => {
      const key = h.type.label === 'Hóa Lộc' ? 'loc'
                : h.type.label === 'Hóa Quyền' ? 'quyen'
                : h.type.label === 'Hóa Khoa' ? 'khoa'
                : h.type.label === 'Hóa Kỵ' ? 'ky' : null;
      if (key) hoaMap[key] = p.branchIdx;
    }));
    try {
      return c(starPositions, auxPositions, hoaMap, palaceData[0].branchIdx) ? [palaceData[0].branchIdx] : null;
    } catch(e) { return null; }
  }
  if (!c || !c.type) return null;
  switch (c.type) {
    case 'hoa_convergence': return evalHoaConvergence(c, palaceData, phiCungGraph);
    case 'star_triad':      return evalStarTriad(c, palaceData);
    case 'star_at_palace':  return evalStarAtPalace(c, palaceData);
    case 'star_brightness': return evalStarBrightness(c, palaceData);
    default: return null;
  }
}

/* ── detectCachCuc — find all matching patterns ── */
function detectCachCuc(palaceData, phiCungGraph) {
  if (typeof CACH_CUC_PATTERNS === 'undefined') return [];
  const matches = [];
  for (const pattern of CACH_CUC_PATTERNS) {
    const match = evaluatePattern(pattern, palaceData, phiCungGraph);
    if (match) {
      let numericRating = pattern.numericRating;
      if (numericRating === undefined) {
        const ratingMap = { auspicious: 75, mixed: 55, challenging: 40 };
        numericRating = ratingMap[pattern.rating] || 50;
        if (pattern.rank === 1) numericRating += 15;
        if (pattern.rank === 3) numericRating -= 10;
        numericRating = Math.max(0, Math.min(100, numericRating));
      }
      matches.push({ ...pattern, numericRating, matchedCungs: match });
    }
  }
  return matches.sort((a, b) => b.numericRating - a.numericRating);
}

/* ══════════════════════════════════════════
   ĐẠI HẠN / TIỂU HẠN / NGUYỆT HẠN
   ══════════════════════════════════════════ */

/* ── getTuanTrietEffect — age-weighted Tuần/Triệt intensity ── */
function getTuanTrietEffect(type, age) {
  if (typeof TUAN_TRIET_WEIGHT === 'undefined') return 0.5;
  const w = TUAN_TRIET_WEIGHT[type];
  if (!w) return 0.5;
  return age < 30 ? w.tienVan : w.hauVan;
}

/* ── analyzeDaiHan — detailed analysis for a given age ── */
function analyzeDaiHan(chartData, targetAge) {
  if (!chartData || !chartData.palaceData) return null;
  const { palaceData, cucHanh, tuanPos1, tuanPos2, trietPos1, trietPos2 } = chartData;

  let daiHanPalace = null;
  for (const p of palaceData) {
    const parts = p.daiHan ? p.daiHan.split('–') : [];
    if (parts.length === 2) {
      const from = parseInt(parts[0]);
      const to   = parseInt(parts[1]);
      if (targetAge >= from && targetAge <= to) { daiHanPalace = p; break; }
    }
  }
  if (!daiHanPalace) return null;

  const palaceCanIdx = daiHanPalace.canIdx;
  const palaceBranch = daiHanPalace.branchIdx;

  const liuSiHua = [];
  if (typeof TU_HOA_MAP !== 'undefined' && palaceCanIdx !== undefined) {
    const tuHoa = TU_HOA_MAP[palaceCanIdx];
    if (tuHoa) {
      const HOA_LABELS = { loc: 'Hóa Lộc', quyen: 'Hóa Quyền', khoa: 'Hóa Khoa', ky: 'Hóa Kỵ' };
      ['loc','quyen','khoa','ky'].forEach(hoa => {
        const starName = tuHoa[hoa];
        for (const p of palaceData) {
          if (p.mainStars.includes(starName) || p.auxStars.includes(starName)) {
            liuSiHua.push({ hoa: HOA_LABELS[hoa], star: starName, palace: p.vi, palaceEn: p.en });
            break;
          }
        }
      });
    }
  }

  const hasTuan  = (palaceBranch === tuanPos1  || palaceBranch === tuanPos2);
  const hasTriet = (palaceBranch === trietPos1 || palaceBranch === trietPos2);

  let tuanTrietType = null;
  if (hasTuan) {
    tuanTrietType = (palaceBranch === tuanPos1) ? 'tuan_dau' : 'tuan_duoi';
  } else if (hasTriet) {
    tuanTrietType = (palaceBranch === trietPos1) ? 'triet_dau' : 'triet_duoi';
  }
  const tuanTrietWeight = tuanTrietType ? getTuanTrietEffect(tuanTrietType, targetAge) : 1.0;

  let elementRelation = null;
  if (typeof analyzeNguHanh !== 'undefined') {
    elementRelation = analyzeNguHanh(cucHanh, daiHanPalace.element);
  }

  return {
    palace: daiHanPalace,
    age: targetAge,
    daiHanRange: daiHanPalace.daiHan,
    liuSiHua,
    hasTuan,
    hasTriet,
    tuanTrietType,
    tuanTrietWeight,
    elementRelation,
    mainStars: daiHanPalace.mainStars,
    auxStars:  daiHanPalace.auxStars,
    hoa:       daiHanPalace.hoa,
  };
}

/* ── analyzeTieuHan — annual Tiểu Hạn analysis ── */
function analyzeTieuHan(chartData, currentYear) {
  if (!chartData || !chartData.palaceData) return null;
  const { palaceData, menhPos } = chartData;
  const birthYear = chartData.year;
  if (!birthYear) return null;

  const age = currentYear - birthYear;

  const direction = chartData.direction || 1;

  const canIdx = chartData.canIdx;
  const isYang = canIdx % 2 === 0;
  const isMale = chartData.gender === 'M';
  const isForward = (isYang && isMale) || (!isYang && !isMale);

  /* Tiểu Hạn = menhPos + (age-1)·direction, with sign depending on gender×amDuong */
  const tieuHanBranch = ((menhPos !== undefined ? menhPos : 0) + (isForward ? age - 1 : -(age - 1)) * direction + 120) % 12;

  const tieuHanPalace = palaceData.find(p => p.branchIdx === tieuHanBranch);
  if (!tieuHanPalace) return null;

  const yearCanIdx = ((currentYear - 4) % 10 + 10) % 10;
  const liuNianHua = [];
  if (typeof TU_HOA_MAP !== 'undefined') {
    const tuHoa = TU_HOA_MAP[yearCanIdx];
    if (tuHoa) {
      const HOA_LABELS = { loc: 'Hóa Lộc', quyen: 'Hóa Quyền', khoa: 'Hóa Khoa', ky: 'Hóa Kỵ' };
      ['loc','quyen','khoa','ky'].forEach(hoa => {
        const starName = tuHoa[hoa];
        for (const p of palaceData) {
          if (p.mainStars.includes(starName) || p.auxStars.includes(starName)) {
            liuNianHua.push({ hoa: HOA_LABELS[hoa], star: starName, palace: p.vi, palaceEn: p.en });
            break;
          }
        }
      });
    }
  }

  return {
    year: currentYear,
    age,
    palace: tieuHanPalace,
    liuNianHua,
    yearCanIdx,
    tieuHanBranch,
  };
}

/**
 * Analyze Nguyệt Hạn (monthly period) for a specific year and lunar month.
 * Starts at the Tiểu Hạn palace on lunar month 1, then advances by 1 palace per month
 * in the same direction as Đại Hạn.
 */
function analyzeNguyetHan(chartData, currentYear, currentMonth) {
  const tieuHan = analyzeTieuHan(chartData, currentYear);
  if (!tieuHan) return null;
  if (!chartData || !chartData.palaceData) return null;

  const palaceData = chartData.palaceData;
  const direction = chartData.direction || 1;
  const tieuHanBranch = tieuHan.tieuHanBranch;

  const monthOffset = (currentMonth || 1) - 1;
  const nguyetHanBranch = ((tieuHanBranch + direction * monthOffset) % 12 + 12) % 12;

  const nguyetHanPalace = palaceData.find(p => p.branchIdx === nguyetHanBranch);
  if (!nguyetHanPalace) return null;

  return {
    year: currentYear,
    lunarMonth: currentMonth,
    palace: nguyetHanPalace,
    nguyetHanBranch,
    tieuHan,
  };
}

/* ══════════════════════════════════════════
   GENERATE CHART (DETERMINISTIC)
   ══════════════════════════════════════════ */

/**
 * Generate full chart data from form inputs.
 * `lunarOverride` (optional) = { lunarYear, lunarMonth, lunarDay } for manual lunar input.
 */
function generateChart(name, dateStr, hour, gender, lunarOverride) {
  const d = new Date(dateStr);
  const gYear = d.getFullYear();
  const gMonth = d.getMonth() + 1;
  const gDay = d.getDate();

  /* ── Step 1: Lunar date ── */
  let lunarYear, lunarMonth, lunarDay, canIdx, chiIdx;

  if (lunarOverride) {
    lunarYear = lunarOverride.lunarYear || gYear;
    lunarMonth = lunarOverride.lunarMonth || 1;
    lunarDay = lunarOverride.lunarDay || 1;
    canIdx = ((lunarYear - 4) % 10 + 10) % 10;
    chiIdx = ((lunarYear - 4) % 12 + 12) % 12;
  } else if (typeof gregorianToLunar !== 'undefined') {
    const lunar = gregorianToLunar(gYear, gMonth, gDay);
    if (lunar) {
      lunarYear = lunar.lunarYear;
      lunarMonth = lunar.lunarMonth;
      lunarDay = lunar.lunarDay;
      canIdx = lunar.canIdx;
      chiIdx = lunar.chiIdx;
    } else {
      lunarYear = gYear; lunarMonth = gMonth; lunarDay = gDay;
      canIdx = ((gYear - 4) % 10 + 10) % 10;
      chiIdx = ((gYear - 4) % 12 + 12) % 12;
    }
  } else {
    lunarYear = gYear; lunarMonth = gMonth; lunarDay = gDay;
    canIdx = ((gYear - 4) % 10 + 10) % 10;
    chiIdx = ((gYear - 4) % 12 + 12) % 12;
  }

  const thienCan = { vi: THIEN_CAN[canIdx], en: THIEN_CAN_EN[canIdx] };
  const diaChi = { vi: BRANCHES[chiIdx].vi, en: BRANCHES[chiIdx].en };

  /* ── Step 2: Year Nạp Âm (for display) ── */
  const napAmIdx = ((lunarYear - 4) % 60 + 60) % 60;
  const napAmRaw = NAP_AM_TABLE[napAmIdx] || 'Hải Trung Kim';
  const napAm = { vi: napAmRaw, en: getNapAmEn(napAmRaw) };
  const banMenhHanh = getNapAmHanh(napAmRaw);

  const amDuong = { vi: canIdx % 2 === 0 ? 'Dương Nam/Nữ' : 'Âm Nam/Nữ', en: canIdx % 2 === 0 ? 'Yang' : 'Yin' };
  if (gender === 'M') {
    amDuong.vi = canIdx % 2 === 0 ? 'Dương Nam' : 'Âm Nam';
    amDuong.en += ' Male';
  } else {
    amDuong.vi = canIdx % 2 === 0 ? 'Dương Nữ' : 'Âm Nữ';
    amDuong.en += ' Female';
  }

  /* ── Step 3: Mệnh & Thân positions ── */
  const menhPos = computeMenhCung(lunarMonth, hour);
  const thanPos = computeThanCung(lunarMonth, hour);

  /* ── Step 4: Cục derivation ── */
  const cucInfo = deriveCuc(canIdx, menhPos);
  const cucHanh = cucInfo.hanh;
  const cuc = cucInfo.cuc;
  const cucValue = cucInfo.cucValue;

  /* ── Step 5: Build 12-palace grid ── */
  const palaceData = [];
  for (let i = 0; i < 12; i++) {
    const branchIdx = (menhPos + 12 - i) % 12;
    const branch = BRANCHES[branchIdx];
    const palace = PALACES[i];
    const branchEl = (typeof BRANCH_ELEMENT !== 'undefined') ? BRANCH_ELEMENT[branchIdx] : ELEMENTS[branchIdx % 5];
    palaceData.push({
      ...palace,
      palaceIdx: i,
      branchIdx: branchIdx,
      branch: branch,
      element: branchEl,
      mainStars: [],
      auxStars: [],
      trangSinh: null,
      hoa: [],
      isMenh: i === 0,
      isThan: branchIdx === thanPos
    });
  }

  /* ── Step 6: Nạp Thiên Can for each palace ── */
  const palaceCanArray = napThienCan12Cung(canIdx);
  palaceData.forEach(p => { p.canIdx = palaceCanArray[p.branchIdx]; });

  /* ── Step 7: Place Tử Vi from lookup table ── */
  let tuViBranch;
  if (typeof TU_VI_POS !== 'undefined' && TU_VI_POS[cucValue]) {
    tuViBranch = TU_VI_POS[cucValue][lunarDay] != null ? TU_VI_POS[cucValue][lunarDay] : (lunarDay - 1) % 12;
  } else {
    tuViBranch = (lunarDay - 1) % 12;
  }

  /* ── Step 8: Derive 14 main stars ── */
  let mainPositions;
  if (typeof deriveMainStarPositions !== 'undefined') {
    mainPositions = deriveMainStarPositions(tuViBranch);
  } else {
    mainPositions = {};
    MAIN_STARS.forEach((s, i) => {
      mainPositions[s] = (tuViBranch + i) % 12;
    });
  }

  for (const [starName, branchIdx] of Object.entries(mainPositions)) {
    const pIdx = palaceData.findIndex(p => p.branchIdx === branchIdx);
    if (pIdx >= 0) palaceData[pIdx].mainStars.push(starName);
  }

  /* ── Step 9: Place auxiliary stars ── */
  if (typeof AUX_BY_HOUR !== 'undefined') {
    for (const [star, positions] of Object.entries(AUX_BY_HOUR)) {
      const br = positions[hour];
      if (br != null) {
        const pIdx = palaceData.findIndex(p => p.branchIdx === br);
        if (pIdx >= 0) palaceData[pIdx].auxStars.push(star);
      }
    }
  }
  if (typeof AUX_BY_MONTH !== 'undefined') {
    for (const [star, positions] of Object.entries(AUX_BY_MONTH)) {
      const br = positions[lunarMonth - 1];
      if (br != null) {
        const pIdx = palaceData.findIndex(p => p.branchIdx === br);
        if (pIdx >= 0) palaceData[pIdx].auxStars.push(star);
      }
    }
  }
  if (typeof AUX_BY_CAN !== 'undefined') {
    for (const [star, positions] of Object.entries(AUX_BY_CAN)) {
      const br = positions[canIdx];
      if (br != null) {
        const pIdx = palaceData.findIndex(p => p.branchIdx === br);
        if (pIdx >= 0) palaceData[pIdx].auxStars.push(star);
      }
    }
  }
  if (typeof AUX_BY_CHI !== 'undefined') {
    for (const [star, positions] of Object.entries(AUX_BY_CHI)) {
      const br = positions[chiIdx];
      if (br != null) {
        const pIdx = palaceData.findIndex(p => p.branchIdx === br);
        if (pIdx >= 0) palaceData[pIdx].auxStars.push(star);
      }
    }
  }
  if (typeof getHoaTinhPos !== 'undefined') {
    const htBr = getHoaTinhPos(chiIdx, hour);
    const pIdx = palaceData.findIndex(p => p.branchIdx === htBr);
    if (pIdx >= 0) palaceData[pIdx].auxStars.push('Hỏa Tinh');
  }
  if (typeof getLinhTinhPos !== 'undefined') {
    const ltBr = getLinhTinhPos(chiIdx, hour);
    const pIdx = palaceData.findIndex(p => p.branchIdx === ltBr);
    if (pIdx >= 0) palaceData[pIdx].auxStars.push('Linh Tinh');
  }

  /* ── Step 10: Tràng Sinh cycle ── */
  if (typeof getTrangSinhCycle !== 'undefined') {
    const tsCycle = getTrangSinhCycle(cucHanh, canIdx, gender);
    tsCycle.forEach((item) => {
      const pIdx = palaceData.findIndex(p => p.branchIdx === item.branch);
      if (pIdx >= 0) palaceData[pIdx].trangSinh = item.phase;
    });
  } else {
    TRANG_SINH.forEach((ts, i) => {
      palaceData[i % 12].trangSinh = ts;
    });
  }

  /* ── Step 11: Tứ Hóa from year Thiên Can ── */
  if (typeof TU_HOA_TABLE !== 'undefined' && TU_HOA_TABLE[canIdx]) {
    const hoaStars = TU_HOA_TABLE[canIdx];
    hoaStars.forEach((starName, hoaIdx) => {
      let found = false;
      for (const p of palaceData) {
        if (p.mainStars.includes(starName)) {
          p.hoa.push({ star: starName, type: HOA_TYPES[hoaIdx] });
          found = true;
          break;
        }
      }
      if (!found) {
        for (const p of palaceData) {
          if (p.auxStars.includes(starName)) {
            p.hoa.push({ star: starName, type: HOA_TYPES[hoaIdx] });
            found = true;
            break;
          }
        }
      }
    });
  } else {
    console.warn('[TuHoa] FALLBACK: hash-based Tứ Hóa');
    const rng = mulberry32(seedHash(name + dateStr + hour + gender));
    const allMainInPalaces = [];
    palaceData.forEach((p, pi) => { p.mainStars.forEach(s => { allMainInPalaces.push({ star: s, palace: pi }); }); });
    for (let i = 0; i < 4 && allMainInPalaces.length > 0; i++) {
      const idx = Math.floor(rng() * allMainInPalaces.length);
      const t = allMainInPalaces.splice(idx, 1)[0];
      palaceData[t.palace].hoa.push({ star: t.star, type: HOA_TYPES[i] });
    }
  }

  /* ── Step 12: Tuần & Triệt ── */
  const tuanStartChi = ((chiIdx - canIdx) % 12 + 12) % 12;
  const tuanPos1 = (tuanStartChi + 10) % 12;
  const tuanPos2 = (tuanStartChi + 11) % 12;
  const trietPos1 = (8 - 2 * (canIdx % 5) + 12) % 12;
  const trietPos2 = (trietPos1 + 1) % 12;

  /* ── Step 13: Đại Hạn ── */
  const isYangYear = canIdx % 2 === 0;
  const isMale = gender === 'M';
  const direction = (isYangYear === isMale) ? 1 : -1;
  const startAge = cucValue;
  palaceData.forEach((p, i) => {
    const offset = direction > 0 ? i : (12 - i) % 12;
    const from = startAge + offset * 10;
    const to = from + 9;
    p.daiHan = `${from}–${to}`;
  });

  const menhChu = palaceData[0].mainStars[0] || 'Thiên Tướng';

  const phiCungGraph = buildPhiCungGraph(palaceData);

  return {
    palaceData, cucHanh, banMenhHanh, thienCan, diaChi, menhPos, thanPos,
    tuanPos1, tuanPos2, trietPos1, trietPos2,
    year: gYear, month: gMonth, day: gDay,
    lunarYear, lunarMonth, lunarDay, canIdx, chiIdx,
    napAm, cuc, cucValue, amDuong, menhChu, direction, gender,
    phiCungGraph
  };
}

/* ── Node test-harness export (no-op in browser) ── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    seedHash, mulberry32, getNapAmHanh, getNapAmEn,
    computeMenhCung, computeThanCung, deriveCuc, napThienCan12Cung,
    findStarPalace, buildPhiCungGraph, getTamHop, getLucHop,
    evalHoaConvergence, evalStarTriad, evalStarAtPalace, evalStarBrightness,
    evaluatePattern, detectCachCuc, getTuanTrietEffect,
    analyzeDaiHan, analyzeTieuHan, analyzeNguyetHan, generateChart,
    BRANCHES, BRANCH_GRID, PALACES, STAR_DATA, MAIN_STARS,
    AUX_STARS_SET1, AUX_STARS_SET2, AUX_STARS_SET3, AUX_STARS_SET4, AUX_STARS_SET5,
    ALL_AUX, TRANG_SINH, TRANG_SINH_EN, ELEMENTS, EL_NAMES, EL_CLASS, STAR_EL_CLASS,
    HOUR_NAMES, HOA_TYPES, BRIGHTNESS, BRIGHTNESS_FULL, BRIGHTNESS_EN,
    THIEN_CAN, THIEN_CAN_EN, NAP_AM_TABLE, CUC_MAP, CUC_MAP_EN, STAR_MEANINGS
  };
}
