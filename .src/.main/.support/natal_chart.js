/* ── Starfield ── */
(function(){
  const c=document.getElementById('starfield'),x=c.getContext('2d');let s=[];
  function resize(){c.width=innerWidth;c.height=innerHeight;}
  function build(n){s=[];for(let i=0;i<n;i++)s.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.3+.2,speed:Math.random()*.008+.003,off:Math.random()*Math.PI*2});}
  function draw(t){x.clearRect(0,0,c.width,c.height);for(const p of s){const a=.08+.25*(.5+.5*Math.sin(t*p.speed+p.off));x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fillStyle=`rgba(107,82,16,${a.toFixed(3)})`;x.fill();}requestAnimationFrame(draw);}
  resize();build(220);requestAnimationFrame(draw);
  addEventListener('resize',()=>{resize();build(220);});
})();

/* ── Hamburger ── */
(function(){
  const hb = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  hb.addEventListener('click', function(){
    nav.classList.toggle('open'); hb.classList.toggle('open');
  });
  document.addEventListener('click', function(e){
    if (nav.classList.contains('open') && !nav.contains(e.target) && !hb.contains(e.target)){
      nav.classList.remove('open'); hb.classList.remove('open');
    }
  });
})();

/* ── Custom Cursor ── */
(function(){
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  let mx = -100, my = -100, rx = -100, ry = -100;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();
  document.querySelectorAll('a, button, .accordion-header, .know-card, .palace, .cast-btn, input, select, label').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '18px';
      cursor.style.height = '18px';
      cursorRing.style.width = '48px';
      cursorRing.style.height = '48px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      cursorRing.style.width = '32px';
      cursorRing.style.height = '32px';
    });
  });
})();

/* ── Language Toggle ── */
let currentLang = 'en';
function toggleLang() {
  currentLang = currentLang === 'en' ? 'vi' : 'en';
  document.body.classList.toggle('lang-vi', currentLang === 'vi');
  const btn = document.getElementById('langBtn');
  btn.textContent = currentLang === 'en' ? '🌐 Tiếng Việt' : '🌐 English';

  document.querySelectorAll('[data-en][data-vi]').forEach(el => {
    el.textContent = el.getAttribute('data-' + currentLang);
  });
  document.querySelectorAll('[data-en-html][data-vi-html]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + currentLang + '-html');
  });

  // Re-render dynamic sections if chart has been generated
  if (lastChartData) {
    renderChart(lastChartData, lastName, lastDateStr, lastHour, lastGender);
    generateInterpretations(lastChartData);
    generateGuidance(lastChartData);
    generateTongLuan(lastChartData);
  }
}

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
  [3,2], // Tý   → bottom row, col 2
  [3,1], // Sửu  → bottom row, col 1
  [3,0], // Dần  → bottom row, col 0
  [2,0], // Mão  → left col, row 2
  [1,0], // Thìn → left col, row 1
  [0,0], // Tỵ   → top row, col 0
  [0,1], // Ngọ  → top row, col 1
  [0,2], // Mùi  → top row, col 2
  [0,3], // Thân → top row, col 3
  [1,3], // Dậu  → right col, row 1
  [2,3], // Tuất → right col, row 2
  [3,3]  // Hợi  → bottom row, col 3
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

/* ── Compute Mệnh cung position based on birth month & hour ── */
function computeMenhCung(lunarMonth, hourIdx) {
  // Start Dần(2), forward by month, BACKWARD by hour
  return (2 + lunarMonth - 1 - hourIdx + 24) % 12;
}

function computeThanCung(lunarMonth, hourIdx) {
  // Start Dần(2), forward by month, FORWARD by hour
  return (2 + lunarMonth - 1 + hourIdx) % 12;
}

/* ── Derive Cục from (year Thiên Can + Mệnh cung Địa Chi) ── */
function deriveCuc(canIdx, menhBranchIdx) {
  // Traditional Tu Vi: pair year's Thiên Can with Mệnh cung's Địa Chi
  // to find the Nạp Âm of that pair, then derive Cục from its Ngũ Hành.

  // Step 1: Can and Chi must have same parity for a valid sexagenary pair
  let adjustedCan = canIdx;
  if ((canIdx % 2) !== (menhBranchIdx % 2)) {
    // Different parity — use next Can (standard adjustment)
    adjustedCan = (canIdx + 1) % 10;
  }

  // Step 2: Compute the 60-cycle (Giáp Tý) index for this (Can, Chi) pair
  // The sexagenary cycle index: ((can - chi) * 6 + chi) mapped to 0-59
  // Simplified: each Nạp Âm covers 2 consecutive sexagenary entries
  // napAmPairIdx gives us which Nạp Âm group (0-29)
  const napAmPairIdx = ((adjustedCan % 10) * 6 + Math.floor(menhBranchIdx / 2)) % 30;

  // Step 3: Each Nạp Âm covers 2 entries in NAP_AM_TABLE
  const napAmForCuc = NAP_AM_TABLE[napAmPairIdx * 2];
  const cucHanh = getNapAmHanh(napAmForCuc);

  // Step 4: Map element to Cục value
  const cucValueMap = {Thủy: 2, Mộc: 3, Kim: 4, Thổ: 5, Hỏa: 6};
  const cucValue = cucValueMap[cucHanh];
  const cuc = { vi: CUC_MAP[cucHanh], en: CUC_MAP_EN[cucHanh] };

  return { hanh: cucHanh, cucValue: cucValue, cuc: cuc };
}

/* Get star brightness using lookup table from tuvi-data.js, fallback to hash */
function getStarBrightness(starName, branchIdx) {
  if (typeof STAR_BRIGHTNESS_TABLE !== 'undefined' && STAR_BRIGHTNESS_TABLE[starName]) {
    const val = STAR_BRIGHTNESS_TABLE[starName][branchIdx];
    if (val) return val.charAt(0); // First char: M/V/Đ/B/H
  }
  let h = 0;
  const str = starName + branchIdx;
  for (let i = 0; i < str.length; i++) { h = ((h << 5) - h) + str.charCodeAt(i); h |= 0; }
  return BRIGHTNESS[Math.abs(h) % 5];
}

/* Get star element class */
function getStarElClass(starName) {
  const data = STAR_DATA[starName];
  return data ? STAR_EL_CLASS[data.el] : 's-kim';
}

/* ── Toggle manual lunar input ── */
function toggleManualLunar() {
  const checked = document.getElementById('manualLunar').checked;
  document.getElementById('lunarFields').style.display = checked ? 'block' : 'none';
}

/* ── Live lunar preview when Gregorian date changes ── */
function updateLunarPreview() {
  const dateStr = document.getElementById('bdate').value;
  const display = document.getElementById('lunarDisplay');
  if (!dateStr || document.getElementById('manualLunar').checked) {
    display.style.display = 'none';
    return;
  }
  if (typeof gregorianToLunar === 'undefined') { display.style.display = 'none'; return; }
  const d = new Date(dateStr);
  const lunar = gregorianToLunar(d.getFullYear(), d.getMonth() + 1, d.getDate());
  if (lunar) {
    display.textContent = formatLunarDate(lunar, currentLang);
    display.style.display = 'block';
  } else {
    display.style.display = 'none';
  }
}

/* ── Helper: find palace index by branch ── */
function palaceIdxByBranch(palaceData, branchIdx) {
  return palaceData.findIndex(p => p.branchIdx === branchIdx);
}

/* ── Generate Chart (Deterministic Algorithm) ── */
function generateChart(name, dateStr, hour, gender) {
  const d = new Date(dateStr);
  const gYear = d.getFullYear();
  const gMonth = d.getMonth() + 1;
  const gDay = d.getDate();

  /* ── Step 1: Lunar date ── */
  let lunarYear, lunarMonth, lunarDay, canIdx, chiIdx;
  const manualLunar = document.getElementById('manualLunar') && document.getElementById('manualLunar').checked;

  if (manualLunar) {
    lunarYear = parseInt(document.getElementById('lunarYear').value) || gYear;
    lunarMonth = parseInt(document.getElementById('lunarMonth').value) || 1;
    lunarDay = parseInt(document.getElementById('lunarDay').value) || 1;
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
      // Fallback for out of range
      lunarYear = gYear; lunarMonth = gMonth; lunarDay = gDay;
      canIdx = ((gYear - 4) % 10 + 10) % 10;
      chiIdx = ((gYear - 4) % 12 + 12) % 12;
    }
  } else {
    // No lunar-data.js — basic fallback
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

  const amDuong = { vi: canIdx % 2 === 0 ? 'Dương Nam/Nữ' : 'Âm Nam/Nữ', en: canIdx % 2 === 0 ? 'Yang' : 'Yin' };
  if (gender === 'M') {
    amDuong.vi = canIdx % 2 === 0 ? 'Dương Nam' : 'Âm Nam';
    amDuong.en += ' Male';
  } else {
    amDuong.vi = canIdx % 2 === 0 ? 'Dương Nữ' : 'Âm Nữ';
    amDuong.en += ' Female';
  }

  /* ── Step 3: Mệnh & Thân positions (MUST be before Cục) ── */
  const menhPos = computeMenhCung(lunarMonth, hour);
  const thanPos = computeThanCung(lunarMonth, hour);

  /* ── Step 2b: Cục derivation from (year Can + Mệnh branch) ── */
  const cucInfo = deriveCuc(canIdx, menhPos);
  const menhHanh = cucInfo.hanh;
  const cuc = cucInfo.cuc;
  const cucValue = cucInfo.cucValue;

  /* ── Step 4: Build palace grid ── */
  const palaceData = [];
  for (let i = 0; i < 12; i++) {
    const branchIdx = (menhPos + 12 - i) % 12;
    const branch = BRANCHES[branchIdx];
    const palace = PALACES[i];
    // Palace element from branch
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

  /* ── Step 5: Place Tử Vi from lookup table ── */
  let tuViBranch;
  if (typeof TU_VI_POS !== 'undefined' && TU_VI_POS[cucValue]) {
    tuViBranch = TU_VI_POS[cucValue][lunarDay] != null ? TU_VI_POS[cucValue][lunarDay] : (lunarDay - 1) % 12;
  } else {
    tuViBranch = (lunarDay - 1) % 12;
  }

  /* ── Step 6: Derive all 14 main stars from Tử Vi ── */
  let mainPositions;
  if (typeof deriveMainStarPositions !== 'undefined') {
    mainPositions = deriveMainStarPositions(tuViBranch);
  } else {
    // Fallback: simple distribution from Tử Vi
    mainPositions = {};
    MAIN_STARS.forEach((s, i) => {
      mainPositions[s] = (tuViBranch + i) % 12;
    });
  }

  // Place main stars into palace data
  for (const [starName, branchIdx] of Object.entries(mainPositions)) {
    const pIdx = palaceData.findIndex(p => p.branchIdx === branchIdx);
    if (pIdx >= 0) palaceData[pIdx].mainStars.push(starName);
  }

  /* ── Step 7: Place auxiliary stars deterministically ── */
  if (typeof AUX_BY_HOUR !== 'undefined') {
    // Stars placed by birth hour
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
  // Hỏa Tinh & Linh Tinh
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

  /* ── Step 8: Tràng Sinh cycle ── */
  if (typeof getTrangSinhCycle !== 'undefined') {
    const tsCycle = getTrangSinhCycle(menhHanh, canIdx, gender);
    tsCycle.forEach((item, i) => {
      const pIdx = palaceData.findIndex(p => p.branchIdx === item.branch);
      if (pIdx >= 0) palaceData[pIdx].trangSinh = item.phase;
    });
  } else {
    // Fallback: start from first palace
    TRANG_SINH.forEach((ts, i) => {
      palaceData[i % 12].trangSinh = ts;
    });
  }

  /* ── Step 9: Tứ Hóa (deterministic from Thiên Can) ── */
  if (typeof TU_HOA_TABLE !== 'undefined' && TU_HOA_TABLE[canIdx]) {
    const hoaStars = TU_HOA_TABLE[canIdx];
    hoaStars.forEach((starName, hoaIdx) => {
      // Find which palace this star sits in
      let found = false;
      for (const p of palaceData) {
        if (p.mainStars.includes(starName)) {
          p.hoa.push({ star: starName, type: HOA_TYPES[hoaIdx] });
          found = true;
          break;
        }
      }
      if (!found) {
        // Check if it's in aux stars instead
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
    console.warn(`[TuHoa] ⚠️ FALLBACK: Using random hash-based Tứ Hóa!`);
    // Fallback: hash-based
    const rng = mulberry32(seedHash(name + dateStr + hour + gender));
    const allMainInPalaces = [];
    palaceData.forEach((p, pi) => { p.mainStars.forEach(s => { allMainInPalaces.push({ star: s, palace: pi }); }); });
    for (let i = 0; i < 4 && allMainInPalaces.length > 0; i++) {
      const idx = Math.floor(rng() * allMainInPalaces.length);
      const t = allMainInPalaces.splice(idx, 1)[0];
      palaceData[t.palace].hoa.push({ star: t.star, type: HOA_TYPES[i] });
    }
  }

  /* ── Step 10: Tuần & Triệt ── */
  // Tuần Không: 2 missing branches in the current 60-cycle decade
  const tuanStartChi = ((chiIdx - canIdx) % 12 + 12) % 12;
  const tuanPos1 = (tuanStartChi + 10) % 12;
  const tuanPos2 = (tuanStartChi + 11) % 12;
  // Triệt Lộ: determined by canIdx % 5
  const trietPos1 = (8 - 2 * (canIdx % 5) + 12) % 12;
  const trietPos2 = (trietPos1 + 1) % 12;

  /* ── Step 11: Đại Hạn (corrected starting age from Cục) ── */
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

  /* Mệnh chủ */
  const menhChu = palaceData[0].mainStars[0] || 'Thiên Tướng';

  return {
    palaceData, menhHanh, thienCan, diaChi, menhPos, thanPos,
    tuanPos1, tuanPos2, trietPos1, trietPos2,
    year: gYear, month: gMonth, day: gDay,
    lunarYear, lunarMonth, lunarDay, canIdx, chiIdx,
    napAm, cuc, cucValue, amDuong, menhChu, direction
  };
}

/* ── Render Chart ── */
function renderChart(chartData, name, dateStr, hour, gender) {
  const { palaceData, menhHanh, thienCan, diaChi, tuanPos1, tuanPos2, trietPos1, trietPos2, napAm, cuc, amDuong, menhChu, year } = chartData;
  const grid = document.getElementById('chartGrid');
  grid.innerHTML = '';

  const cells = Array.from({ length: 4 }, () => Array(4).fill(null));

  palaceData.forEach(p => {
    const [r, c] = BRANCH_GRID[p.branchIdx];
    const hasTuan = (p.branchIdx === tuanPos1 || p.branchIdx === tuanPos2);
    const hasTriet = (p.branchIdx === trietPos1 || p.branchIdx === trietPos2);
    cells[r][c] = { type: 'palace', data: p, hasTuan, hasTriet };
  });

  const d = new Date(dateStr);
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  const isVi = currentLang === 'vi';

  const hourVi = BRANCHES[hour].vi;
  const hourEn = BRANCHES[hour].en;

  /* Center cells with detailed info matching reference */
  cells[1][1] = { type: 'center', content: `
    <div class="cc-label" data-vi="LÁ SỐ TỬ VI" data-en="NATAL CHART">${isVi ? 'LÁ SỐ TỬ VI' : 'NATAL CHART'}</div>
    <div class="cc-name">${name}</div>
    <div class="cc-detail">
      <span data-vi="Năm" data-en="Year">${isVi ? 'Năm' : 'Year'}</span> ${year} &nbsp; 
      <span data-vi="${thienCan.vi} ${diaChi.vi}" data-en="${thienCan.en} ${diaChi.en}">${isVi ? `${thienCan.vi} ${diaChi.vi}` : `${thienCan.en} ${diaChi.en}`}</span>
    </div>
    <div class="cc-detail-dim">
      <span data-vi="Tháng" data-en="Month">${isVi ? 'Tháng' : 'Month'}</span> ${chartData.month} &nbsp; 
      <span data-vi="Ngày" data-en="Day">${isVi ? 'Ngày' : 'Day'}</span> ${chartData.day}
    </div>
    <div class="cc-detail-dim">
      <span data-vi="Giờ ${hourVi}" data-en="Hour ${hourEn}">${isVi ? `Giờ ${hourVi}` : `Hour ${hourEn}`}</span>
    </div>
  `};
  cells[1][2] = { type: 'center', content: `
    <div class="cc-label" data-vi="Tuần/Triệt" data-en="Void/Severance">${isVi ? 'Tuần/Triệt' : 'Void/Severance'}</div>
    <div class="cc-detail cc-detail-sm">
      <span class="khong-vong kv-tuan">Tuần</span>
      <span data-vi="${BRANCHES[tuanPos1].vi}–${BRANCHES[tuanPos2].vi}" data-en="${BRANCHES[tuanPos1].en}–${BRANCHES[tuanPos2].en}">
        ${isVi ? `${BRANCHES[tuanPos1].vi}–${BRANCHES[tuanPos2].vi}` : `${BRANCHES[tuanPos1].en}–${BRANCHES[tuanPos2].en}`}
      </span>
    </div>
    <div class="cc-detail cc-detail-sm cc-detail-mt">
      <span class="khong-vong kv-triet">Triệt</span>
      <span data-vi="${BRANCHES[trietPos1].vi}–${BRANCHES[trietPos2].vi}" data-en="${BRANCHES[trietPos1].en}–${BRANCHES[trietPos2].en}">
        ${isVi ? `${BRANCHES[trietPos1].vi}–${BRANCHES[trietPos2].vi}` : `${BRANCHES[trietPos1].en}–${BRANCHES[trietPos2].en}`}
      </span>
    </div>
  `};
  cells[2][1] = { type: 'center', content: `
    <div class="cc-label" data-vi="Thông Tin" data-en="Profile">${isVi ? 'Thông Tin' : 'Profile'}</div>
    <div class="cc-detail" data-vi="${amDuong.vi}" data-en="${amDuong.en}">${isVi ? amDuong.vi : amDuong.en}</div>
    <div class="cc-detail-dim" data-vi="${napAm.vi}" data-en="${napAm.en}">${isVi ? napAm.vi : napAm.en}</div>
    <div class="cc-element-badge" data-vi="${menhHanh} · ${EL_NAMES[menhHanh]}" data-en="${EL_NAMES[menhHanh]} Destiny">${isVi ? `${menhHanh} · ${EL_NAMES[menhHanh]}` : `${EL_NAMES[menhHanh]} Destiny`}</div>
    <div class="cc-detail-dim cc-detail-mt" data-vi="${cuc.vi}" data-en="${cuc.en}">${isVi ? cuc.vi : cuc.en}</div>
  `};
  cells[2][2] = { type: 'center', content: `
    <div class="cc-label" data-vi="Mệnh Chủ" data-en="Ruling Star">${isVi ? 'Mệnh Chủ' : 'Ruling Star'}</div>
    <div class="cc-detail cc-detail-gold">${menhChu}</div>
    <div class="cc-detail-dim cc-detail-mt" data-vi="Năm xem: ${currentYear}" data-en="Current Year: ${currentYear}">${isVi ? `Năm xem: ${currentYear}` : `Current Year: ${currentYear}`}</div>
    <div class="cc-detail-dim" data-vi="${age} tuổi" data-en="Age: ${age}">${isVi ? `${age} tuổi` : `Age: ${age}`}</div>
  `};

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const cell = cells[r][c];
      if (!cell) continue;
      const div = document.createElement('div');

      if (cell.type === 'center') {
        div.className = 'center-cell';
        div.innerHTML = cell.content;
      } else {
        const p = cell.data;
        div.className = 'palace';

        const hoaMap = {};
        p.hoa.forEach(h => { hoaMap[h.star] = h.type; });

        /* Stars HTML with element colors and brightness */
        let starHTML = '';
        p.mainStars.forEach(s => {
          const elCls = getStarElClass(s);
          const bright = getStarBrightness(s, p.branchIdx);
          let badge = '';
          if (hoaMap[s]) badge = `<span class="hoa-badge ${hoaMap[s].cls}">${isVi ? hoaMap[s].label : (hoaMap[s].labelEn || hoaMap[s].label)}</span>`;
          starHTML += `<div class="star-entry"><span class="star-main ${elCls}">${s}</span> <span class="star-brightness">(${bright})</span>${badge}</div>`;
        });
        p.auxStars.forEach(s => {
          const elCls = getStarElClass(s);
          const bright = getStarBrightness(s, p.branchIdx);
          starHTML += `<div class="star-entry"><span class="star-aux ${elCls}">${s}</span> <span class="star-brightness">(${bright})</span></div>`;
        });
        if (p.trangSinh) {
          const elCls = getStarElClass(p.trangSinh);
          const tsName = isVi ? p.trangSinh : (TRANG_SINH_EN[TRANG_SINH.indexOf(p.trangSinh)] || p.trangSinh);
          starHTML += `<div class="star-entry"><span class="star-aux ${elCls}">${tsName}</span></div>`;
        }

        /* Tuần/Triệt badges */
        let kvHTML = '';
        if (cell.hasTuan) kvHTML += `<span class="khong-vong kv-tuan">${isVi ? 'Tuần' : 'Void'}</span> `;
        if (cell.hasTriet) kvHTML += `<span class="khong-vong kv-triet">${isVi ? 'Triệt' : 'Sever'}</span>`;

        /* Mệnh/Thân marker */
        let menhThanLabel = '';
        if (p.isMenh && p.isThan) menhThanLabel = `<span class="menh-than menh-marker">${isVi ? 'Mệnh·Thân' : 'Destiny·Body'}</span>`;
        else if (p.isMenh) menhThanLabel = `<span class="menh-than menh-marker">${isVi ? 'Mệnh' : 'Destiny'}</span>`;
        else if (p.isThan) menhThanLabel = `<span class="menh-than than-marker">${isVi ? 'Thân' : 'Body'}</span>`;

        div.innerHTML = `
          <div class="palace-top">
            <span class="palace-dai-han">${p.daiHan}</span>
            <span class="palace-name">${isVi ? p.vi.toUpperCase() : (p.en ? p.en.toUpperCase() : '')}${menhThanLabel ? '<br>' + menhThanLabel : ''}</span>
          </div>
          ${kvHTML ? '<div class="palace-kv-wrap">' + kvHTML + '</div>' : ''}
          <div class="star-list">${starHTML}</div>
          <div class="palace-bottom">
            <span class="palace-branch">T.${p.branchIdx} ${isVi ? p.branch.vi : p.branch.en}</span>
            <span class="palace-element ${EL_CLASS[p.element]}">${isVi ? p.element : EL_NAMES[p.element]}</span>
          </div>
        `;
      }
      grid.appendChild(div);
    }
  }
}

/* ── Generate Interpretations (all 12 palaces) ── */
function generateInterpretations(chartData) {
  const { palaceData } = chartData;
  const list = document.getElementById('interp-list');
  list.innerHTML = '';
  const isVi = currentLang === 'vi';
  const meanings = STAR_MEANINGS;

  const icons = ['✦','◈','❦','⚝','◇','☆','✧','◆','✦','◈','❦','⚝'];

  palaceData.forEach((p, ti) => {
    const stars = p.mainStars;
    const el = p.element;

    let text = `<span class="interp-tag">${el} · ${EL_NAMES[el] || el}</span> `;

    // Check for PALACE_STAR_MEANINGS from tuvi-data.js
    const hasPSM = typeof PALACE_STAR_MEANINGS !== 'undefined';

    if (stars.length > 0) {
      if (hasPSM && PALACE_STAR_MEANINGS[p.vi]) {
        // Use detailed palace-star meanings
        stars.forEach(s => {
          const psm = PALACE_STAR_MEANINGS[p.vi] && PALACE_STAR_MEANINGS[p.vi][s];
          if (psm) {
            text += `<strong>${s}</strong>: ${isVi ? psm.vi : psm.en} `;
          } else if (meanings[s]) {
            text += `<strong>${s}</strong>: ${isVi ? meanings[s].vi : meanings[s].en}. `;
          }
        });
      } else {
        // Fallback to generic star meanings
        if (isVi) {
          text += `Cung ${p.vi} có <strong>${stars.join('</strong> và <strong>')}</strong> tọa thủ. Điều này cho thấy ${stars.map(s => meanings[s] ? meanings[s].vi : 'một ảnh hưởng chưa rõ ràng').join('. Bên cạnh đó, ')}. `;
        } else {
          text += `Your ${p.en} palace has <strong>${stars.join('</strong> and <strong>')}</strong> sitting in it. What this means in practice: ${stars.map(s => meanings[s] ? meanings[s].en : 'an influence that is not yet clear').join('. Additionally, ')}. `;
        }
      }
    } else {
      // Empty palace handling
      if (typeof EMPTY_PALACE_MEANINGS !== 'undefined' && EMPTY_PALACE_MEANINGS[p.vi]) {
        const epm = EMPTY_PALACE_MEANINGS[p.vi];
        text += isVi ? epm.vi : epm.en;
      } else {
        text += isVi
          ? `Cung ${p.vi} không có chính tinh tọa thủ. Ảnh hưởng của cung này chủ yếu đến từ các sao phụ và các cung tam hợp.`
          : `Your ${p.en} palace has no main stars. Its influence comes primarily from auxiliary stars and trine palaces.`;
      }

      // Borrowed star logic — empty Mệnh borrows from opposite palace (Thiên Di, idx 6)
      if (p.palaceIdx === 0 && hasPSM) {
        const thienDi = palaceData.find(pd => pd.palaceIdx === 6);
        if (thienDi && thienDi.mainStars.length > 0) {
          text += isVi
            ? '<br><br><em>Mệnh vô chính diệu — mượn sao từ cung Thiên Di (đối cung):</em> '
            : '<br><br><em>Empty Destiny — borrowing stars from Travel palace (opposite):</em> ';
          thienDi.mainStars.forEach(starName => {
            const psm = PALACE_STAR_MEANINGS['Mệnh'] && PALACE_STAR_MEANINGS['Mệnh'][starName];
            if (psm) {
              text += `<strong>${starName}</strong>: ${isVi ? psm.vi : psm.en} `;
            } else if (meanings[starName]) {
              text += `<strong>${starName}</strong>: ${isVi ? meanings[starName].vi : meanings[starName].en}. `;
            }
            text += isVi
              ? '<em>(mượn — hiệu lực giảm ~40%)</em> '
              : '<em>(borrowed — effect reduced ~40%)</em> ';
          });
        }
      }
      // Other empty palaces — Ngũ Hành interaction between Cục element and palace element
      if (p.palaceIdx !== 0 && typeof analyzeNguHanh !== 'undefined' && typeof NGU_HANH_EFFECTS !== 'undefined') {
        const rel = analyzeNguHanh(chartData.menhHanh, p.element);
        if (rel && NGU_HANH_EFFECTS[rel]) {
          const eff = NGU_HANH_EFFECTS[rel];
          text += isVi
            ? `<br><em>Ngũ Hành (Cục ${chartData.menhHanh} — Cung ${p.element}): ${eff.vi}</em>`
            : `<br><em>Five Elements (Cục ${chartData.menhHanh} — Palace ${p.element}): ${eff.en}</em>`;
        }
      }
    }

    // Element interaction
    const elInteractions = isVi ? {
      Kim:'Cung thuộc hành Kim — quyết đoán, rõ ràng.',
      Mộc:'Cung thuộc hành Mộc — phát triển, mở rộng.',
      Thủy:'Cung thuộc hành Thủy — linh hoạt, trực giác.',
      Hỏa:'Cung thuộc hành Hỏa — năng động, nổi bật.',
      Thổ:'Cung thuộc hành Thổ — ổn định, kiên nhẫn.'
    } : {
      Kim:'Metal element — decisiveness, clarity.',
      Mộc:'Wood element — growth, expansion.',
      Thủy:'Water element — adaptability, intuition.',
      Hỏa:'Fire element — energy, visibility.',
      Thổ:'Earth element — stability, patience.'
    };
    if (elInteractions[el]) text += elInteractions[el] + ' ';

    // Ngũ Hành sinh khắc analysis
    if (stars.length > 0 && typeof analyzeNguHanh !== 'undefined' && typeof NGU_HANH_EFFECTS !== 'undefined') {
      stars.forEach(s => {
        const starEl = STAR_DATA[s] ? STAR_DATA[s].el : null;
        if (starEl && starEl !== el) {
          const rel = analyzeNguHanh(starEl, el);
          if (rel && NGU_HANH_EFFECTS[rel]) {
            const eff = NGU_HANH_EFFECTS[rel];
            text += (isVi ? eff.vi : eff.en) + ' ';
          }
        }
      });
    }

    // Tứ Hóa
    if (p.hoa.length > 0) {
      p.hoa.forEach(h => {
        const hoaTexts = isVi ? {
          'Hóa Lộc':'Hóa Lộc chiếu vào — thuận lợi cho tài lộc và cơ hội.',
          'Hóa Quyền':'Hóa Quyền có mặt — khả năng nắm quyền kiểm soát mạnh.',
          'Hóa Khoa':'Hóa Khoa — tốt cho danh tiếng và sự công nhận.',
          'Hóa Kỵ':'Hóa Kỵ — có trở ngại nhưng thúc đẩy trưởng thành.'
        } : {
          'Hóa Lộc':'Hóa Lộc present — strong indicator for resources and opportunities.',
          'Hóa Quyền':'Hóa Quyền present — capacity for taking charge.',
          'Hóa Khoa':'Hóa Khoa present — favorable for reputation.',
          'Hóa Kỵ':'Hóa Kỵ present — some friction, but drives growth.'
        };
        text += hoaTexts[h.type.label] + ' ';
      });
    }

    // Tuần & Triệt (Age-weighted)
    const hasTuan = (p.branchIdx === chartData.tuanPos1 || p.branchIdx === chartData.tuanPos2);
    const hasTriet = (p.branchIdx === chartData.trietPos1 || p.branchIdx === chartData.trietPos2);
    
    if (hasTuan || hasTriet) {
      const currentYear = new Date().getFullYear();
      const age = chartData.year ? currentYear - chartData.year : 25; // fallback
      
      const voidType = hasTuan ? 'tuan' : 'triet';
      const weight = voidType === 'triet'
        ? (age < 30 ? 0.8 : 0.4)
        : (age < 30 ? 0.4 : 0.8);
      
      const strengthLabel = weight >= 0.7
        ? (isVi ? 'mạnh' : 'strong')
        : (isVi ? 'nhẹ' : 'mild');

      if (hasTuan) {
        text += isVi
          ? `<br><br><span class="khong-vong kv-tuan">Tuần</span> Cung này nằm trong Tuần Không (tác động ${strengthLabel} ở ${age} tuổi). Sao tốt mất phần phúc lợi, nhưng sao xấu cũng bị giảm tác hại.`
          : `<br><br><span class="khong-vong kv-tuan">Tuần</span> This palace falls in Tuần void (${strengthLabel} effect at age ${age}). Benefic stars lose some blessing, but malefic stars also lose their harm.`;
      }
      if (hasTriet) {
        text += isVi
          ? `<br><br><span class="khong-vong kv-triet">Triệt</span> Cung này bị Triệt (tác động ${strengthLabel} ở ${age} tuổi). Năng lượng sao bị cắt đứt${age < 30 ? ' — ảnh hưởng đặc biệt rõ trước 30 tuổi' : ''}.`
          : `<br><br><span class="khong-vong kv-triet">Triệt</span> This palace is under Triệt severance (${strengthLabel} effect at age ${age}). Star energy is cut off${age < 30 ? ' — especially impactful before age 30' : ''}.`;
      }
    }

    // Đại Hạn interpretation
    if (typeof DAI_HAN_MEANINGS !== 'undefined' && DAI_HAN_MEANINGS[p.vi]) {
      const dhm = DAI_HAN_MEANINGS[p.vi];
      text += `<br><br><em>${isVi ? 'Đại Hạn' : 'Major Period'} (${p.daiHan}):</em> ${isVi ? dhm.vi : dhm.en}`;
    }

    const acc = document.createElement('div');
    acc.className = 'accordion';
    acc.innerHTML = `
      <div class="accordion-header" onclick="this.parentElement.classList.toggle('open')">
        <h3>${icons[ti % 12]} ${p.vi} — ${p.en}${p.isMenh ? ' <span class="menh-acc-label">[Mệnh]</span>' : ''}${p.isThan ? ' <span class="menh-acc-label">[Thân]</span>' : ''}</h3>
        <span class="acc-icon">▾</span>
      </div>
      <div class="accordion-body"><div class="accordion-content">${text}</div></div>
    `;
    if (ti === 0) acc.classList.add('open');
    list.appendChild(acc);
  });
}

/* ── Tổng Luận (Overall Synthesis) ── */
function generateTongLuan(chartData) {
  const { palaceData, menhHanh, thienCan, diaChi, cuc, menhChu, canIdx, direction } = chartData;
  const isVi = currentLang === 'vi';
  const area = document.getElementById('tongluan-area');
  const content = document.getElementById('tongluan-content');
  if (!area || !content) return;

  let html = '';

  // Opening
  const yearNameVi = `${thienCan.vi} ${diaChi.vi}`;
  const yearNameEn = `${thienCan.en} ${diaChi.en}`;
  const yearStr = isVi ? yearNameVi : yearNameEn;
  const cucStr = isVi ? cuc.vi : cuc.en;
  html += `<p><strong>${isVi ? 'Lá số' : 'Chart'}:</strong> ${yearStr} · ${cucStr} · ${isVi ? 'Mệnh' : 'Destiny'} ${menhHanh} · ${isVi ? 'Mệnh chủ' : 'Ruling star'}: ${menhChu}</p>`;

  // Cách Cục recognition
  if (typeof CACH_CUC_PATTERNS !== 'undefined') {
    // Build starPositions map (star name → branch index) from palaceData
    const starPositions = {};
    palaceData.forEach(p => {
      p.mainStars.forEach(s => { starPositions[s] = p.branchIdx; });
    });
    const auxPositions = {};
    palaceData.forEach(p => {
      p.auxStars.forEach(s => { auxPositions[s] = p.branchIdx; });
    });
    const hoaMap = {};
    palaceData.forEach(p => {
      p.hoa.forEach(h => {
        const key = h.type.name.toLowerCase();
        hoaMap[key] = p.branchIdx;
      });
    });

    const found = [];
    CACH_CUC_PATTERNS.forEach(pattern => {
      try {
        if (pattern.condition(starPositions, auxPositions, hoaMap, chartData.menhPos)) {
          found.push(pattern);
        }
      } catch(e) {}
    });
    if (found.length > 0) {
      html += `<p class="tl-section"><strong>${isVi ? 'Cách Cục nhận diện' : 'Recognized Patterns'}:</strong></p><ul>`;
      found.forEach(f => {
        const name = isVi ? f.name : (f.nameEn || f.name);
        const meaning = f.meaning ? (isVi ? f.meaning.vi : f.meaning.en) : '';
        html += `<li><strong>${name}</strong> <span class="cach-rating">(${f.rating})</span>: ${meaning}</li>`;
      });
      html += '</ul>';
    }
  }

  // Tứ Hóa summary
  const allHoa = [];
  palaceData.forEach(p => {
    p.hoa.forEach(h => allHoa.push({ star: h.star, type: h.type.label, palace: p.vi, palaceEn: p.en }));
  });
  if (allHoa.length > 0) {
    html += `<p class="tl-section"><strong>${isVi ? 'Tứ Hóa' : 'Four Transformations'}:</strong></p><ul>`;
    allHoa.forEach(h => {
      html += `<li>${h.star} — ${h.type} ${isVi ? 'tại' : 'in'} ${isVi ? h.palace : h.palaceEn}</li>`;
    });
    html += '</ul>';
  }

  // Current Đại Hạn
  const currentYear = new Date().getFullYear();
  const age = currentYear - chartData.year;
  let currentDaiHan = null;
  palaceData.forEach(p => {
    const parts = p.daiHan.split('–');
    const from = parseInt(parts[0]), to = parseInt(parts[1]);
    if (age >= from && age <= to) currentDaiHan = p;
  });
  if (currentDaiHan) {
    html += `<p class="tl-section"><strong>${isVi ? 'Đại Hạn hiện tại' : 'Current Major Period'} (${currentDaiHan.daiHan}):</strong> ${isVi ? 'Cung' : 'Palace'} ${isVi ? currentDaiHan.vi : currentDaiHan.en}`;
    if (typeof DAI_HAN_MEANINGS !== 'undefined' && DAI_HAN_MEANINGS[currentDaiHan.vi]) {
      const dhm = DAI_HAN_MEANINGS[currentDaiHan.vi];
      html += ` — ${isVi ? dhm.vi : dhm.en}`;
    }
    html += '</p>';
  }

  // Final advice
  html += `<p class="tl-advice">${isVi
    ? 'Lá số Tử Vi cho thấy xu hướng, không phải số phận cố định. Hiểu biết bản thân qua lá số giúp bạn phát huy điểm mạnh và chuẩn bị cho thử thách.'
    : 'The Tu Vi chart reveals tendencies, not fixed destiny. Self-knowledge through the chart helps you leverage strengths and prepare for challenges.'}</p>`;

  content.innerHTML = html;
  area.style.display = 'block';
}

/* ── Daily Guidance Generator ── */
function generateGuidance(chartData) {
  const { palaceData, menhHanh } = chartData;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayOfWeek = tomorrow.getDay();
  const dayHash = seedHash(menhHanh + palaceData[0].mainStars.join('') + tomorrow.toISOString().slice(0,10));
  const grng = mulberry32(dayHash);

  const DOS = [
    {en: 'Focus on financial planning — your Tài Bạch energy is strong', vi: 'Tập trung vào kế hoạch tài chính — năng lượng Tài Bạch đang mạnh'},
    {en: 'Spend quality time with family and loved ones', vi: 'Dành thời gian chất lượng cho gia đình và người thân'},
    {en: 'Start a new creative project or hobby', vi: 'Bắt đầu một dự án sáng tạo hoặc sở thích mới'},
    {en: 'Network and build professional connections', vi: 'Mở rộng mạng lưới và xây dựng quan hệ nghề nghiệp'},
    {en: 'Meditate or practice mindfulness for inner peace', vi: 'Thiền định hoặc tập chánh niệm để an tâm'},
    {en: 'Take a calculated risk on an investment or idea', vi: 'Mạnh dạn đầu tư hoặc theo đuổi ý tưởng mới'},
    {en: 'Exercise and prioritize your physical health', vi: 'Tập thể dục và chú trọng sức khỏe thể chất'},
    {en: 'Study or learn something new — knowledge flows easily', vi: 'Học hỏi kiến thức mới — dòng chảy tri thức thuận lợi'},
    {en: 'Help someone in need — your karma is amplified', vi: 'Giúp đỡ người khác — phúc đức được nhân lên'},
    {en: 'Organize your workspace for better productivity', vi: 'Sắp xếp không gian làm việc gọn gàng hơn'},
    {en: 'Express your feelings honestly to someone close', vi: 'Bày tỏ cảm xúc chân thành với người thân'},
    {en: 'Set clear goals and create an action plan', vi: 'Đặt mục tiêu rõ ràng và lên kế hoạch hành động'},
    {en: 'Seek advice from a mentor or elder figure', vi: 'Tìm lời khuyên từ người cố vấn hoặc bậc tiền bối'},
    {en: 'Dress well and present your best self publicly', vi: 'Ăn mặc đẹp và thể hiện bản thân tốt nhất'},
    {en: 'Focus on long-term savings and financial security', vi: 'Tập trung vào tiết kiệm dài hạn và an toàn tài chính'}
  ];
  
  const DONTS = [
    {en: 'Avoid impulsive spending or risky gambles', vi: 'Tránh chi tiêu bốc đồng hoặc đánh bạc liều lĩnh'},
    {en: 'Do not engage in arguments or confrontations', vi: 'Không nên tranh cãi hoặc đối đầu với ai'},
    {en: 'Avoid signing important contracts without review', vi: 'Tránh ký kết hợp đồng quan trọng khi chưa xem xét kỹ'},
    {en: 'Do not neglect your health or skip meals', vi: 'Không nên bỏ bê sức khỏe hoặc bỏ bữa ăn'},
    {en: 'Avoid gossiping or speaking ill of others', vi: 'Tránh nói xấu hay thị phi về người khác'},
    {en: 'Do not start major renovations or moves', vi: 'Không nên khởi công sửa chữa hay chuyển nhà lớn'},
    {en: 'Avoid overworking — burnout threatens your vitality', vi: 'Tránh làm việc quá sức — kiệt sức đe dọa sinh lực'},
    {en: 'Do not lend large sums of money today', vi: 'Không nên cho vay số tiền lớn hôm nay'},
    {en: 'Avoid making major life decisions in haste', vi: 'Tránh đưa ra quyết định lớn trong vội vàng'},
    {en: 'Do not ignore warning signs in relationships', vi: 'Không nên phớt lờ dấu hiệu cảnh báo trong quan hệ'},
    {en: 'Avoid excessive alcohol or unhealthy indulgences', vi: 'Tránh uống rượu quá đà hoặc thói quen thiếu lành mạnh'},
    {en: 'Do not travel long distances without preparation', vi: 'Không nên đi xa khi chưa chuẩn bị kỹ'},
    {en: 'Avoid being stubborn — flexibility serves you better', vi: 'Tránh cố chấp — linh hoạt sẽ có lợi hơn'},
    {en: 'Do not dismiss your intuition about a situation', vi: 'Không nên bỏ qua trực giác về một tình huống'},
    {en: 'Avoid multitasking — focus on one thing at a time', vi: 'Tránh làm nhiều việc cùng lúc — hãy tập trung một thứ'}
  ];

  // --- Chart-Based Guidance Derivation ---
  const dosIndices = new Set();
  const dontsIndices = new Set();

  // Determine current Đại Hạn
  const currentYear = new Date().getFullYear();
  const age = chartData.year ? currentYear - chartData.year : 25;
  let currentDH = null;
  palaceData.forEach(p => {
    const parts = p.daiHan.split('–');
    if (parts.length === 2 && age >= parseInt(parts[0]) && age <= parseInt(parts[1])) currentDH = p;
  });

  const menhP = palaceData[0];
  
  // Logic for Dos
  if (currentDH && ['Tài Bạch', 'Quan Lộc'].includes(currentDH.vi)) dosIndices.add(0);
  if (currentDH && ['Phu Thê', 'Tử Tức', 'Phụ Mẫu', 'Huynh Đệ'].includes(currentDH.vi)) dosIndices.add(1);
  if (menhP.mainStars.some(s => ['Tham Lang', 'Thiên Cơ'].includes(s))) dosIndices.add(2);
  if (currentDH && ['Nô Bộc'].includes(currentDH.vi)) dosIndices.add(3);
  if (currentDH && ['Phúc Đức'].includes(currentDH.vi)) dosIndices.add(4);
  if (menhP.hoa.some(h => h.type.label === 'Hóa Quyền')) dosIndices.add(5);
  if (currentDH && ['Tật Ách'].includes(currentDH.vi)) dosIndices.add(6);
  if (menhP.hoa.some(h => h.type.label === 'Hóa Khoa')) dosIndices.add(7);
  if (menhP.mainStars.some(s => ['Thiên Lương', 'Thiên Tướng'].includes(s))) dosIndices.add(8);
  if (menhP.mainStars.some(s => ['Vũ Khúc', 'Thiên Phủ'].includes(s))) dosIndices.add(9);
  if (menhP.mainStars.some(s => ['Cự Môn', 'Thái Âm'].includes(s))) dosIndices.add(10);
  if (menhP.mainStars.some(s => ['Thất Sát', 'Phá Quân'].includes(s))) dosIndices.add(11);
  if (menhP.mainStars.some(s => ['Thiên Cơ', 'Thái Dương'].includes(s))) dosIndices.add(12);
  if (menhP.mainStars.some(s => ['Thái Dương', 'Tham Lang'].includes(s))) dosIndices.add(13);
  if (menhP.auxStars.includes('Lộc Tồn') || menhP.hoa.some(h => h.type.label === 'Hóa Lộc')) dosIndices.add(14);

  // Logic for Don'ts
  const taiBach = palaceData[4] || {hoa:[], auxStars:[]};
  const noBoc = palaceData[7] || {hoa:[]};
  const tatAch = palaceData[5] || {hoa:[]};
  const dienTrach = palaceData[9] || {hoa:[]};
  const phuThe = palaceData[2] || {hoa:[]};
  const thienDi = palaceData[6] || {hoa:[], branchIdx:-1};
  
  if (taiBach.hoa.some(h => h.type.label === 'Hóa Kỵ')) dontsIndices.add(0);
  if (menhP.mainStars.includes('Cự Môn') || noBoc.hoa.some(h=>h.type.label==='Hóa Kỵ')) dontsIndices.add(1);
  if (menhP.branchIdx === chartData.tuanPos1 || menhP.branchIdx === chartData.tuanPos2 || menhP.branchIdx === chartData.trietPos1 || menhP.branchIdx === chartData.trietPos2) dontsIndices.add(2);
  if (tatAch.hoa.some(h => h.type.label === 'Hóa Kỵ')) dontsIndices.add(3);
  if (menhP.mainStars.includes('Cự Môn')) dontsIndices.add(4);
  if (dienTrach.hoa.some(h => h.type.label === 'Hóa Kỵ')) dontsIndices.add(5);
  if (menhP.mainStars.some(s => ['Thất Sát', 'Phá Quân'].includes(s))) dontsIndices.add(6);
  if (taiBach.auxStars.some(s => ['Địa Không', 'Địa Kiếp'].includes(s))) dontsIndices.add(7);
  if (menhP.branchIdx === chartData.tuanPos1 || menhP.branchIdx === chartData.trietPos1) dontsIndices.add(8);
  if (phuThe.hoa.some(h => h.type.label === 'Hóa Kỵ')) dontsIndices.add(9);
  if (menhP.mainStars.includes('Tham Lang') || menhP.auxStars.includes('Thiên Riêu')) dontsIndices.add(10);
  if (thienDi.hoa.some(h => h.type.label === 'Hóa Kỵ') || thienDi.branchIdx === chartData.tuanPos1 || thienDi.branchIdx === chartData.trietPos1) dontsIndices.add(11);
  if (menhP.mainStars.some(s => ['Tử Vi', 'Vũ Khúc'].includes(s))) dontsIndices.add(12);
  if (menhP.mainStars.some(s => ['Thái Âm', 'Thiên Cơ'].includes(s))) dontsIndices.add(13);
  if (menhP.mainStars.includes('Thiên Đồng')) dontsIndices.add(14);

  // Deterministic fallback (using day string or similar to rotate unused items daily)
  const dosArr = Array.from(dosIndices);
  const dontsArr = Array.from(dontsIndices);

  if (dosArr.length < 4 || dontsArr.length < 4) {
    const dayHash = seedHash(chartData.menhChu + tomorrow.toISOString().slice(0,10));
    const grng = mulberry32(dayHash);
    
    while (dosArr.length < 4 && dosArr.length < DOS.length) {
      const idx = Math.floor(grng() * DOS.length);
      if (!dosArr.includes(idx)) dosArr.push(idx);
    }
    while (dontsArr.length < 4 && dontsArr.length < DONTS.length) {
      const idx = Math.floor(grng() * DONTS.length);
      if (!dontsArr.includes(idx)) dontsArr.push(idx);
    }
  }

  // Shuffle the final selection pseudo-randomly so the specific chart-based ones aren't always first
  const displayHash = seedHash(chartData.cuc.vi + tomorrow.toISOString().slice(0,10));
  const prng = mulberry32(displayHash);
  dosArr.sort(() => prng() - 0.5);
  dontsArr.sort(() => prng() - 0.5);

  const finalDos = dosArr.slice(0, 4);
  const finalDonts = dontsArr.slice(0, 4);

  const dosEn = finalDos.map(i => DOS[i].en);
  const dosVi = finalDos.map(i => DOS[i].vi);
  const dontsEn = finalDonts.map(i => DONTS[i].en);
  const dontsVi = finalDonts.map(i => DONTS[i].vi);
  const isVi = currentLang === 'vi';

  const dateStr = tomorrow.toLocaleDateString(isVi ? 'vi-VN' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const container = document.getElementById('guidance-content');
  container.innerHTML = `
    <div class="guidance-card do-card">
      <h3>☀ <span data-en="What You Should Do" data-vi="Nên Làm">${isVi ? 'Nên Làm' : 'What You Should Do'}</span></h3>
      <p class="guidance-date" data-en="${dateStr}" data-vi="${tomorrow.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}">${dateStr}</p>
      <ul>${(isVi ? dosVi : dosEn).map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
    <div class="guidance-card dont-card">
      <h3>⚠ <span data-en="What You Should Avoid" data-vi="Nên Tránh">${isVi ? 'Nên Tránh' : 'What You Should Avoid'}</span></h3>
      <p class="guidance-date" data-en="Based on your ${menhHanh} (${EL_NAMES[menhHanh]}) destiny" data-vi="Dựa trên mệnh ${menhHanh} (${EL_NAMES[menhHanh]}) của bạn">
        ${isVi ? `Dựa trên mệnh ${menhHanh} (${EL_NAMES[menhHanh]}) của bạn` : `Based on your ${menhHanh} (${EL_NAMES[menhHanh]}) destiny`}
      </p>
      <ul>${(isVi ? dontsVi : dontsEn).map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
  `;
}

/* ── Form Submit ── */
let lastChartData = null, lastName='', lastDateStr='', lastHour=0, lastGender='M';

// Lunar preview on date change
document.getElementById('bdate').addEventListener('change', updateLunarPreview);

document.getElementById('birthForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('fname').value.trim();
  const dateStr = document.getElementById('bdate').value;
  const hour = parseInt(document.getElementById('bhour').value);
  const genderEl = document.querySelector('input[name="gender"]:checked');
  if (!name || !dateStr || isNaN(hour) || !genderEl) return;
  const gender = genderEl.value;

  lastName = name; lastDateStr = dateStr; lastHour = hour; lastGender = gender;
  lastChartData = generateChart(name, dateStr, hour, gender);

  const isVi = currentLang === 'vi';
  document.getElementById('chart-title').innerHTML = `<span data-vi="Lá Số Tử Vi — " data-en="Natal Chart — ">${isVi ? 'Lá Số Tử Vi — ' : 'Natal Chart — '}</span>${name}`;
  
  const dd = new Date(dateStr);
  const hourNameVi = HOUR_NAMES[hour];
  const hourNameEn = BRANCHES[hour].en;
  const genderVi = gender === 'M' ? 'Nam' : 'Nữ';
  const genderEn = gender === 'M' ? 'Male' : 'Female';

  let lunarStr = '';
  // Append lunar date info dynamically with spans
  if (lastChartData.lunarYear && typeof formatLunarDate !== 'undefined') {
    const lunarObj = {
      lunarYear: lastChartData.lunarYear, lunarMonth: lastChartData.lunarMonth,
      lunarDay: lastChartData.lunarDay, canIdx: lastChartData.canIdx,
      chiIdx: lastChartData.chiIdx, isLeapMonth: false
    };
    const lv = formatLunarDate(lunarObj, 'vi');
    const le = formatLunarDate(lunarObj, 'en');
    lunarStr = ` · <span data-vi="${lv}" data-en="${le}">${isVi ? lv : le}</span>`;
  }

  const subVi = `${dd.toLocaleDateString('vi-VN')} · Giờ ${hourNameVi} · ${genderVi} · ${lastChartData.thienCan.vi} ${lastChartData.diaChi.vi} · ${lastChartData.napAm.vi}`;
  const subEn = `${dd.toLocaleDateString('en-US')} · Hour ${hourNameEn} · ${genderEn} · ${lastChartData.thienCan.en} ${lastChartData.diaChi.en} · ${lastChartData.napAm.en}`;
  
  document.getElementById('chart-sub').innerHTML = 
    `<span data-vi="${subVi}" data-en="${subEn}">${isVi ? subVi : subEn}</span>` + lunarStr;

  renderChart(lastChartData, name, dateStr, hour, gender);
  generateGuidance(lastChartData);
  generateInterpretations(lastChartData);
  generateTongLuan(lastChartData);

  document.getElementById('chart-area').style.display = 'block';
  document.getElementById('guidance-area').style.display = 'block';
  document.getElementById('interp-area').style.display = 'block';
  document.getElementById('tongluan-area').style.display = 'block';

  document.getElementById('chart-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

(function() {
  const missing = [];
  if (typeof gregorianToLunar === 'undefined') missing.push('lunar-data.js');
  if (typeof TU_VI_POS === 'undefined') missing.push('tuvi-data.js');
  if (missing.length === 0) return;
  console.warn('Script load failure:', missing.join(', '));
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#7a4f00;color:#ffe8a0;padding:10px 44px 10px 16px;font-family:sans-serif;font-size:13px;line-height:1.4;border-bottom:2px solid #c47f00;';
  banner.innerHTML = '⚠ Failed to load: <strong>' + missing.join(', ') + '</strong> — Some features may not work. Try opening via a local server instead of directly from the filesystem.';
  const btn = document.createElement('button');
  btn.textContent = '✕';
  btn.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:#ffe8a0;cursor:pointer;font-size:16px;padding:4px;';
  btn.onclick = () => banner.remove();
  banner.appendChild(btn);
  document.body.appendChild(banner);
})();
