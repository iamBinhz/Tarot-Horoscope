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
  // Step 1: Ngũ Thử Độn — find starting Thiên Can at Dần
  // Giáp/Kỷ→Bính, Ất/Canh→Mậu, Bính/Tân→Canh, Đinh/Nhâm→Nhâm, Mậu/Quý→Giáp
  const startCan = ((canIdx % 5) * 2 + 2) % 10;

  // Step 2: Count from Dần to Mệnh cung → Thiên Can of Mệnh cung
  const menhCungCan = (startCan + ((menhBranchIdx - 2 + 12) % 12)) % 10;

  // Step 3: Sexagenary index → Nạp Âm → Ngũ Hành → Cục
  const sexIdx = ((6 * menhCungCan - 5 * menhBranchIdx) % 60 + 60) % 60;
  const napAmForCuc = NAP_AM_TABLE[sexIdx];
  const cucHanh = getNapAmHanh(napAmForCuc);

  // Step 4: Map element to Cục value
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
  const HOA_TYPES = ['loc', 'quyen', 'khoa', 'ky'];

  for (let i = 0; i < 12; i++) {
    const can = palaceData[i].canIdx;
    if (can === undefined) continue;
    const tuHoa = TU_HOA_MAP[can];
    for (const hoa of HOA_TYPES) {
      const starName = tuHoa[hoa];
      const targetPalace = findStarPalace(palaceData, starName);
      if (targetPalace >= 0) {
        edges.push({ from: i, to: targetPalace, hoa, star: starName, fromCan: can });
      }
    }
  }

  // Kỵ→Kỵ chains (depth ≤ 4)
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

    // Lộc→Kỵ chains
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

/* ══════════════════════════════════════════════════════════════════
   PHASE 3 — Cách Cục + Đại Hạn/Tiểu Hạn + Tuần/Triệt
   ══════════════════════════════════════════════════════════════════ */

/* ── T3.2: Tam Hợp helper ── */
function getTamHop(branchIdx) {
  const groups = [[2,6,10],[3,7,11],[0,4,8],[1,5,9]]; // Dần-Ngọ-Tuất, Mão-Mùi-Hợi, Tý-Thìn-Thân, Sửu-Tỵ-Dậu
  return groups.find(g => g.includes(branchIdx)) || [];
}

/* ── T3.2: Lục Hợp helper (mutual attraction pairs) ── */
function getLucHop(branchIdx) {
  const pairs = {0:11, 11:0, 1:10, 10:1, 2:9, 9:2, 3:8, 8:3, 4:7, 7:4, 5:6, 6:5};
  return pairs[branchIdx] !== undefined ? [branchIdx, pairs[branchIdx]] : [branchIdx];
}

/* ── T3.2: evalHoaConvergence — check if required Hóa types converge in Mệnh tam hợp ── */
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

/* ── T3.2: evalStarTriad — 3 specific stars in tam hợp positions ── */
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

/* ── T3.2: evalStarAtPalace — star at specific palace ── */
function evalStarAtPalace(c, palaceData) {
  const star = c.star;
  const palaceIdx = c.palaceIdx !== undefined ? c.palaceIdx : 0; // default Mệnh
  const p = palaceData[palaceIdx];
  if (!p) return null;
  if (p.mainStars.includes(star) || p.auxStars.includes(star)) return [p.branchIdx];
  return null;
}

/* ── T3.2: evalStarBrightness — star achieves Miếu/Vượng ── */
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

/* ── T3.2: evaluatePattern wrapper ── */
function evaluatePattern(pattern, palaceData, phiCungGraph) {
  const c = pattern.condition;
  // Support both function-based (legacy) and object-based (new) conditions
  if (typeof c === 'function') {
    // Legacy function-based condition from existing CACH_CUC_PATTERNS
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
  // Object-based condition
  if (!c || !c.type) return null;
  switch (c.type) {
    case 'hoa_convergence': return evalHoaConvergence(c, palaceData, phiCungGraph);
    case 'star_triad':      return evalStarTriad(c, palaceData);
    case 'star_at_palace':  return evalStarAtPalace(c, palaceData);
    case 'star_brightness': return evalStarBrightness(c, palaceData);
    default: return null;
  }
}

/* ── T3.2: detectCachCuc — find all matching patterns ── */
function detectCachCuc(palaceData, phiCungGraph) {
  if (typeof CACH_CUC_PATTERNS === 'undefined') return [];
  const matches = [];
  for (const pattern of CACH_CUC_PATTERNS) {
    const match = evaluatePattern(pattern, palaceData, phiCungGraph);
    if (match) {
      // Normalize: convert legacy rating strings to numeric scores
      let numericRating = pattern.numericRating;
      if (numericRating === undefined) {
        const ratingMap = { auspicious: 75, mixed: 55, challenging: 40 };
        numericRating = ratingMap[pattern.rating] || 50;
        // Rank 1 = higher, rank 3 = lower
        if (pattern.rank === 1) numericRating += 15;
        if (pattern.rank === 3) numericRating -= 10;
        numericRating = Math.max(0, Math.min(100, numericRating));
      }
      matches.push({ ...pattern, numericRating, matchedCungs: match });
    }
  }
  return matches.sort((a, b) => b.numericRating - a.numericRating);
}

/* ── T3.3: getTuanTrietEffect — age-weighted Tuần/Triệt intensity ── */
function getTuanTrietEffect(type, age) {
  if (typeof TUAN_TRIET_WEIGHT === 'undefined') return 0.5;
  const w = TUAN_TRIET_WEIGHT[type];
  if (!w) return 0.5;
  return age < 30 ? w.tienVan : w.hauVan;
}

/* ── T3.4: analyzeDaiHan — detailed analysis for a given age ── */
function analyzeDaiHan(chartData, targetAge) {
  if (!chartData || !chartData.palaceData) return null;
  const { palaceData, cucHanh, canIdx, tuanPos1, tuanPos2, trietPos1, trietPos2 } = chartData;

  // Find which palace the target age falls into
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

  // Lưu Tứ Hóa: Đại Hạn Thiên Can triggers additional Hóa
  const liuSiHua = [];
  if (typeof TU_HOA_MAP !== 'undefined' && palaceCanIdx !== undefined) {
    const tuHoa = TU_HOA_MAP[palaceCanIdx];
    if (tuHoa) {
      const HOA_LABELS = { loc: 'Hóa Lộc', quyen: 'Hóa Quyền', khoa: 'Hóa Khoa', ky: 'Hóa Kỵ' };
      ['loc','quyen','khoa','ky'].forEach(hoa => {
        const starName = tuHoa[hoa];
        // Find which palace holds this star
        for (const p of palaceData) {
          if (p.mainStars.includes(starName) || p.auxStars.includes(starName)) {
            liuSiHua.push({ hoa: HOA_LABELS[hoa], star: starName, palace: p.vi, palaceEn: p.en });
            break;
          }
        }
      });
    }
  }

  // Tuần/Triệt impact on this palace
  const hasTuan  = (palaceBranch === tuanPos1  || palaceBranch === tuanPos2);
  const hasTriet = (palaceBranch === trietPos1 || palaceBranch === trietPos2);

  // Determine Tuần/Triệt type (dau = leading, duoi = trailing)
  let tuanTrietType = null;
  if (hasTuan) {
    tuanTrietType = (palaceBranch === tuanPos1) ? 'tuan_dau' : 'tuan_duoi';
  } else if (hasTriet) {
    tuanTrietType = (palaceBranch === trietPos1) ? 'triet_dau' : 'triet_duoi';
  }
  const tuanTrietWeight = tuanTrietType ? getTuanTrietEffect(tuanTrietType, targetAge) : 1.0;

  // Element interaction between Cục element and palace element
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

/* ── T3.5: analyzeTieuHan — annual Tiểu Hạn analysis ── */
function analyzeTieuHan(chartData, currentYear) {
  if (!chartData || !chartData.palaceData) return null;
  const { palaceData, menhPos, chiIdx } = chartData;
  const birthYear = chartData.year;
  if (!birthYear) return null;

  const age = currentYear - birthYear;

  // Tiểu Hạn: starts at Dần (branchIdx=2) for male Yang / female Yin,
  // or at Thân (branchIdx=8) for male Yin / female Yang, stepping +1/-1 per year
  // Direction matches Đại Hạn direction
  const direction = chartData.direction || 1;

  // Start branch depends on gender + amDuong
  const canIdx = chartData.canIdx;
  const isYang = canIdx % 2 === 0;
  const isMale = chartData.gender === 'M';
  const isForward = (isYang && isMale) || (!isYang && !isMale);

  // Tiểu Hạn starts at Dần(2) going forward, or Ngọ(6) going backward (from birth year Chi)
  // Simplified: Tiểu Hạn year = menhPos, then add/subtract 1 per year from age 1
  const tieuHanBranch = ((menhPos !== undefined ? menhPos : 0) + (isForward ? age - 1 : -(age - 1)) * direction + 120) % 12;

  // Find palace at this branch
  const tieuHanPalace = palaceData.find(p => p.branchIdx === tieuHanBranch);
  if (!tieuHanPalace) return null;

  // Lưu Niên Tứ Hóa from year Thiên Can
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

/* ── T3.6: renderCachCucPanel — display matched Cách Cục patterns ── */
function renderCachCucPanel(patterns, isVi) {
  if (!patterns || patterns.length === 0) return '';

  const items = patterns.map(p => {
    // Determine badge class from rating and pattern type
    let badgeClass = 'cach-cuc-trung';
    const r = p.rating;
    if (r === 'auspicious' || p.numericRating >= 70) badgeClass = 'cach-cuc-cat';
    else if (r === 'challenging' || p.numericRating < 50) badgeClass = 'cach-cuc-hung';

    const name    = isVi ? p.name : (p.nameEn || p.name);
    const meaning = p.meaning ? (isVi ? p.meaning.vi : p.meaning.en) : '';
    const score   = p.numericRating !== undefined ? p.numericRating : (p.rank ? (4 - p.rank) * 25 : 50);

    return `
      <div class="cach-cuc-item">
        <div class="cach-cuc-info">
          <span class="cach-cuc-name">${name}</span>
          <span class="cach-cuc-desc">${meaning}</span>
        </div>
        <span class="cach-cuc-badge ${badgeClass}">${score}</span>
      </div>`;
  }).join('');

  const title = isVi ? 'Cách Cục Nhận Diện' : 'Chart Patterns Detected';
  return `<div class="cach-cuc-panel">
    <h4 class="cach-cuc-title">${title}</h4>
    ${items}
  </div>`;
}

/* ── T3.7: renderDaiHanTimeline — horizontal scrollable 12-decade bar ── */
function renderDaiHanTimeline(chartData, isVi) {
  if (!chartData || !chartData.palaceData) return '';
  const { palaceData } = chartData;
  const currentYear = new Date().getFullYear();
  const age = chartData.year ? currentYear - chartData.year : -1;

  const periods = palaceData.map((p, i) => {
    const parts = p.daiHan ? p.daiHan.split('–') : [];
    const from  = parts.length === 2 ? parseInt(parts[0]) : 0;
    const to    = parts.length === 2 ? parseInt(parts[1]) : 0;
    const isActive = age >= from && age <= to;
    const stars = [...p.mainStars, ...p.auxStars].slice(0, 3).join(', ') || (isVi ? 'Trống' : 'Empty');
    const palaceName = isVi ? p.vi : (p.en || p.vi);

    return `<div class="dai-han-period${isActive ? ' dai-han-active' : ''}"
              data-period-idx="${i}"
              onclick="toggleDaiHanDetail(this)">
      <div class="dai-han-range">${p.daiHan}</div>
      <div class="dai-han-palace">${palaceName}</div>
      <div class="dai-han-stars">${stars}</div>
    </div>`;
  }).join('');

  // Build detail panels (hidden by default, shown on click)
  const details = palaceData.map((p, i) => {
    const analysis = analyzeDaiHan(chartData, parseInt((p.daiHan || '0').split('–')[0]) + 5);
    const parts = p.daiHan ? p.daiHan.split('–') : [];
    const from  = parts.length === 2 ? parseInt(parts[0]) : 0;
    const to    = parts.length === 2 ? parseInt(parts[1]) : 0;
    const isActive = age >= from && age <= to;
    let detailHtml = '';
    if (analysis) {
      const liuLines = analysis.liuSiHua.map(h =>
        `<span class="dh-hoa">${h.hoa} ${h.star} → ${isVi ? h.palace : h.palaceEn}</span>`
      ).join(' ');
      const voidNote = analysis.hasTuan
        ? (isVi ? `Tuần (trọng số ${(analysis.tuanTrietWeight * 100).toFixed(0)}%)` : `Tuần void (weight ${(analysis.tuanTrietWeight * 100).toFixed(0)}%)`)
        : analysis.hasTriet
        ? (isVi ? `Triệt (trọng số ${(analysis.tuanTrietWeight * 100).toFixed(0)}%)` : `Triệt severance (weight ${(analysis.tuanTrietWeight * 100).toFixed(0)}%)`)
        : '';
      detailHtml = `
        ${liuLines ? `<div class="dh-liu-si-hua">${isVi ? 'Lưu Tứ Hóa: ' : 'Period Hóa: '}${liuLines}</div>` : ''}
        ${voidNote ? `<div class="dh-void-note">${voidNote}</div>` : ''}
        ${analysis.mainStars.length > 0 ? `<div class="dh-stars">${isVi ? 'Chính tinh: ' : 'Main stars: '}${analysis.mainStars.join(', ')}</div>` : ''}
      `;
    }
    return `<div class="dai-han-detail${isActive ? ' expanded' : ''}" data-detail-idx="${i}">
      ${detailHtml}
    </div>`;
  }).join('');

  const title = isVi ? 'Đại Hạn (Chu Kỳ 10 Năm)' : 'Đại Hạn (10-Year Cycles)';
  return `<div class="dai-han-section">
    <h4 class="dai-han-title">${title}</h4>
    <div class="dai-han-timeline">${periods}</div>
    <div class="dai-han-details">${details}</div>
  </div>`;
}

/* ── T3.7: toggle Đại Hạn detail panel ── */
function toggleDaiHanDetail(el) {
  const idx = el.getAttribute('data-period-idx');
  const detailEl = document.querySelector(`.dai-han-detail[data-detail-idx="${idx}"]`);
  if (!detailEl) return;
  const wasExpanded = detailEl.classList.contains('expanded');
  // Collapse all
  document.querySelectorAll('.dai-han-detail').forEach(d => d.classList.remove('expanded'));
  if (!wasExpanded) detailEl.classList.add('expanded');
}

/* ── SVG center coordinates for each branchIdx in the 4×4 grid ── */
// BRANCH_GRID maps branchIdx → [row, col]:
//   branchIdx 0(Tý)=[3,2], 1(Sửu)=[3,1], 2(Dần)=[3,0], 3(Mão)=[2,0]
//   4(Thìn)=[1,0], 5(Tỵ)=[0,0], 6(Ngọ)=[0,1], 7(Mùi)=[0,2]
//   8(Thân)=[0,3], 9(Dậu)=[1,3], 10(Tuất)=[2,3], 11(Hợi)=[3,3]
// SVG viewBox 400×400, each cell = 100×100, center = [col*100+50, row*100+50]
const PALACE_SVG_CENTER = {
   0: [250, 350],  // Tý   [3,2]
   1: [150, 350],  // Sửu  [3,1]
   2: [ 50, 350],  // Dần  [3,0]
   3: [ 50, 250],  // Mão  [2,0]
   4: [ 50, 150],  // Thìn [1,0]
   5: [ 50,  50],  // Tỵ   [0,0]
   6: [150,  50],  // Ngọ  [0,1]
   7: [250,  50],  // Mùi  [0,2]
   8: [350,  50],  // Thân [0,3]
   9: [350, 150],  // Dậu  [1,3]
  10: [350, 250],  // Tuất [2,3]
  11: [350, 350]   // Hợi  [3,3]
};

/* ── Render Phi Cung SVG overlay HTML string ── */
function renderPhiCungOverlay(phiCungGraph, palaceData) {
  if (!phiCungGraph) return '';
  const W = 400, H = 400;
  let paths = '';
  const hoaClass = { ky:'phi-ky', loc:'phi-loc', quyen:'phi-quyen', khoa:'phi-khoa' };

  for (const edge of phiCungGraph.edges) {
    const fromBranch = palaceData[edge.from].branchIdx;
    const toBranch   = palaceData[edge.to].branchIdx;
    const fc = PALACE_SVG_CENTER[fromBranch];
    const tc = PALACE_SVG_CENTER[toBranch];
    if (!fc || !tc) continue;
    const offsets = { ky:-30, loc:30, quyen:-15, khoa:15 };
    const off = offsets[edge.hoa] || 0;
    const sx = fc[0], sy = fc[1];
    const ex = tc[0], ey = tc[1];
    const cx = (fc[0] + tc[0]) / 2 + off;
    const cy = (fc[1] + tc[1]) / 2 + off;
    paths += `<path class="phi-arrow ${hoaClass[edge.hoa]}" `
      + `d="M${sx},${sy} Q${cx},${cy} ${ex},${ey}" `
      + `data-from="${edge.from}" data-to="${edge.to}" data-hoa="${edge.hoa}" `
      + `data-star="${edge.star}" marker-end="url(#arrow-${edge.hoa})"/>`;
  }

  return `<svg class="phi-cung-overlay" viewBox="0 0 ${W} ${H}">
    <defs>
      <marker id="arrow-ky"    viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--danger,#e74c3c)"/></marker>
      <marker id="arrow-loc"   viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--success,#2ecc71)"/></marker>
      <marker id="arrow-quyen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--info,#3498db)"/></marker>
      <marker id="arrow-khoa"  viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--gold,#c8a96e)"/></marker>
    </defs>
    ${paths}
  </svg>`;
}

/* ── Phi Cung interaction: toggle, hover highlight, filter ── */
function initPhiCungInteraction() {
  const overlay = document.querySelector('.phi-cung-overlay');
  const toggle  = document.getElementById('phiCungToggle');
  if (!overlay || !toggle) return;

  toggle.addEventListener('click', () => {
    overlay.classList.toggle('active');
    toggle.classList.toggle('active');
  });

  document.querySelectorAll('.palace').forEach(cell => {
    const palaceIdx = parseInt(cell.dataset.palaceIdx);
    if (isNaN(palaceIdx)) return;
    cell.addEventListener('mouseenter', () => {
      overlay.querySelectorAll('.phi-arrow').forEach(a => {
        a.classList.toggle('highlighted',
          parseInt(a.dataset.from) === palaceIdx || parseInt(a.dataset.to) === palaceIdx);
      });
    });
    cell.addEventListener('mouseleave', () => {
      overlay.querySelectorAll('.phi-arrow').forEach(a => a.classList.remove('highlighted'));
    });
  });

  document.querySelectorAll('.phi-filter').forEach(cb => {
    cb.addEventListener('change', () => {
      overlay.querySelectorAll(`.phi-${cb.dataset.hoa}`).forEach(a => {
        a.style.display = cb.checked ? '' : 'none';
      });
    });
  });
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
  const banMenhHanh = getNapAmHanh(napAmRaw);

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
  const cucHanh = cucInfo.hanh;
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

  /* ── Step 4b: Nạp Thiên Can for each palace (Ngũ Thử Độn) ── */
  const palaceCanArray = napThienCan12Cung(canIdx);
  palaceData.forEach(p => {
    p.canIdx = palaceCanArray[p.branchIdx];
  });

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
    const tsCycle = getTrangSinhCycle(cucHanh, canIdx, gender);
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

  const phiCungGraph = buildPhiCungGraph(palaceData);

  return {
    palaceData, cucHanh, banMenhHanh, thienCan, diaChi, menhPos, thanPos,
    tuanPos1, tuanPos2, trietPos1, trietPos2,
    year: gYear, month: gMonth, day: gDay,
    lunarYear, lunarMonth, lunarDay, canIdx, chiIdx,
    napAm, cuc, cucValue, amDuong, menhChu, direction,
    phiCungGraph
  };
}

/* ── Render Chart ── */
function renderChart(chartData, name, dateStr, hour, gender) {
  const { palaceData, cucHanh, banMenhHanh, thienCan, diaChi, tuanPos1, tuanPos2, trietPos1, trietPos2, napAm, cuc, amDuong, menhChu, year } = chartData;
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
    <div class="cc-element-badge" data-vi="Mệnh ${banMenhHanh} · ${EL_NAMES[banMenhHanh]}" data-en="${EL_NAMES[banMenhHanh]} Destiny">${isVi ? `Mệnh ${banMenhHanh} · ${EL_NAMES[banMenhHanh]}` : `${EL_NAMES[banMenhHanh]} Destiny`}</div>
    <div class="cc-detail-dim" data-vi="${napAm.vi}" data-en="${napAm.en}">${isVi ? napAm.vi : napAm.en}</div>
    <div class="cc-detail-dim cc-detail-mt" data-vi="${cuc.vi}" data-en="${cuc.en}">${isVi ? cuc.vi : cuc.en}</div>
  `};
  cells[2][2] = { type: 'center', content: `
    <div class="cc-label" data-vi="Mệnh Chủ" data-en="Ruling Star">${isVi ? 'Mệnh Chủ' : 'Ruling Star'}</div>
    <div class="cc-detail cc-detail-gold">${menhChu}</div>
    <div class="cc-detail-dim cc-detail-mt" data-vi="Năm xem: ${currentYear}" data-en="Current Year: ${currentYear}">${isVi ? `Năm xem: ${currentYear}` : `Current Year: ${currentYear}`}</div>
    <div class="cc-detail-dim" data-vi="${age} tuổi" data-en="Age: ${age}">${isVi ? `${age} tuổi` : `Age: ${age}`}</div>
  `};

  let centerMergedAdded = false;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const cell = cells[r][c];
      if (!cell) continue;
      const div = document.createElement('div');

      if (cell.type === 'center') {
        if (centerMergedAdded) continue; // skip [1][2], [2][1], [2][2]
        centerMergedAdded = true;
        div.className = 'center-merged';
        div.style.gridColumn = '2 / 4';
        div.style.gridRow = '2 / 4';
        div.innerHTML = `
          <div class="cm-label" data-vi="LÁ SỐ TỬ VI" data-en="NATAL CHART">${isVi ? 'LÁ SỐ TỬ VI' : 'NATAL CHART'}</div>
          <div class="cm-name">${name}</div>
          <div class="cm-year">
            ${isVi ? 'Năm' : 'Year'} ${year} &nbsp;·&nbsp;
            <span data-vi="${thienCan.vi} ${diaChi.vi}" data-en="${thienCan.en} ${diaChi.en}">${isVi ? `${thienCan.vi} ${diaChi.vi}` : `${thienCan.en} ${diaChi.en}`}</span>
            &nbsp;·&nbsp; ${isVi ? 'Tháng' : 'Month'} ${chartData.month} ${isVi ? 'Ngày' : 'Day'} ${chartData.day}
            &nbsp;·&nbsp; <span data-vi="Giờ ${hourVi}" data-en="Hour ${hourEn}">${isVi ? `Giờ ${hourVi}` : `Hour ${hourEn}`}</span>
          </div>
          <div class="cm-divider"></div>
          <div class="cm-info-row">
            <div class="cm-col">
              <div class="cm-col-label" data-vi="Thông Tin" data-en="Profile">${isVi ? 'Thông Tin' : 'Profile'}</div>
              <div class="cm-col-val" data-vi="${amDuong.vi}" data-en="${amDuong.en}">${isVi ? amDuong.vi : amDuong.en}</div>
              <div class="cm-badge" data-vi="Mệnh ${banMenhHanh} · ${EL_NAMES[banMenhHanh]}" data-en="${EL_NAMES[banMenhHanh]} Destiny">${isVi ? `Mệnh ${banMenhHanh} · ${EL_NAMES[banMenhHanh]}` : `${EL_NAMES[banMenhHanh]} Destiny`}</div>
              <div class="cm-dim" data-vi="${napAm.vi}" data-en="${napAm.en}">${isVi ? napAm.vi : napAm.en}</div>
              <div class="cm-dim" data-vi="${cuc.vi}" data-en="${cuc.en}">${isVi ? cuc.vi : cuc.en}</div>
            </div>
            <div class="cm-col-sep"></div>
            <div class="cm-col">
              <div class="cm-col-label" data-vi="Mệnh Chủ" data-en="Ruling Star">${isVi ? 'Mệnh Chủ' : 'Ruling Star'}</div>
              <div class="cm-col-gold">${menhChu}</div>
              <div class="cm-dim" data-vi="Năm xem: ${currentYear}" data-en="Current Year: ${currentYear}">${isVi ? `Năm xem: ${currentYear}` : `Current Year: ${currentYear}`}</div>
              <div class="cm-dim" data-vi="${age} tuổi" data-en="Age: ${age}">${isVi ? `${age} tuổi` : `Age: ${age}`}</div>
            </div>
          </div>
          <div class="cm-divider"></div>
          <div class="cm-tl-row">
            <span class="khong-vong kv-tuan">${isVi ? 'Tuần' : 'Void'}</span>
            <span class="cm-tl-val" data-vi="${BRANCHES[tuanPos1].vi}–${BRANCHES[tuanPos2].vi}" data-en="${BRANCHES[tuanPos1].en}–${BRANCHES[tuanPos2].en}">${isVi ? `${BRANCHES[tuanPos1].vi}–${BRANCHES[tuanPos2].vi}` : `${BRANCHES[tuanPos1].en}–${BRANCHES[tuanPos2].en}`}</span>
            <span class="cm-sep-dot">·</span>
            <span class="khong-vong kv-triet">${isVi ? 'Triệt' : 'Sever'}</span>
            <span class="cm-tl-val" data-vi="${BRANCHES[trietPos1].vi}–${BRANCHES[trietPos2].vi}" data-en="${BRANCHES[trietPos1].en}–${BRANCHES[trietPos2].en}">${isVi ? `${BRANCHES[trietPos1].vi}–${BRANCHES[trietPos2].vi}` : `${BRANCHES[trietPos1].en}–${BRANCHES[trietPos2].en}`}</span>
          </div>
        `;
      } else {
        const p = cell.data;
        div.className = 'palace';
        div.dataset.palaceIdx = palaceData.indexOf(p);

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

  /* ── Inject Phi Cung SVG overlay ── */
  const svgContainer = document.getElementById('phiCungSvgContainer');
  if (svgContainer) {
    svgContainer.innerHTML = renderPhiCungOverlay(chartData.phiCungGraph, palaceData);
  }
  const filtersEl = document.getElementById('phiCungFilters');
  if (filtersEl) filtersEl.classList.remove('hidden');
  initPhiCungInteraction();
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
        const rel = analyzeNguHanh(chartData.cucHanh, p.element);
        if (rel && NGU_HANH_EFFECTS[rel]) {
          const eff = NGU_HANH_EFFECTS[rel];
          text += isVi
            ? `<br><em>Ngũ Hành (Cục ${chartData.cucHanh} — Cung ${p.element}): ${eff.vi}</em>`
            : `<br><em>Five Elements (Cục ${chartData.cucHanh} — Palace ${p.element}): ${eff.en}</em>`;
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

/* ── Phi Cung Interpretation for Tổng Luận ── */
function renderPhiCungInterpretation(phiCungGraph, isVi) {
  if (!phiCungGraph || typeof PHI_CUNG_INTERPRETATIONS === 'undefined') return '';
  if (typeof PALACE_NAMES === 'undefined') return '';

  // Palace data-index → short key for template lookup
  const PALACE_KEY = { 0: 'menh', 3: 'dien', 4: 'quan', 8: 'tai' };
  const HOA_LABEL  = { loc: 'Lộc', quyen: 'Quyền', khoa: 'Khoa', ky: 'Kỵ' };

  const matches = [];
  for (const edge of phiCungGraph.edges) {
    const fromKey = PALACE_KEY[edge.from];
    const toKey   = PALACE_KEY[edge.to];
    if (!fromKey || !toKey || fromKey === toKey) continue;
    const tplKey = `${edge.hoa}_${fromKey}_${toKey}`;
    if (PHI_CUNG_INTERPRETATIONS[tplKey]) {
      matches.push({ tplKey, edge });
    }
  }
  if (matches.length === 0) return '';

  let html = `<p class="tl-section"><strong>${isVi ? 'Phi Cung Hóa Tượng' : 'Phi Cung Transformations'}:</strong></p><ul>`;
  for (const { tplKey, edge } of matches) {
    const tpl      = PHI_CUNG_INTERPRETATIONS[tplKey];
    const text     = isVi ? tpl.vi : tpl.en;
    const fromName = PALACE_NAMES[edge.from] || edge.from;
    const toName   = PALACE_NAMES[edge.to]   || edge.to;
    const hoaLabel = HOA_LABEL[edge.hoa] || edge.hoa;
    html += `<li><strong>${edge.star} ${hoaLabel}</strong> (${fromName} → ${toName}): ${text}</li>`;
  }
  html += '</ul>';
  return html;
}

/* ── Tổng Luận (Overall Synthesis) ── */
function generateTongLuan(chartData) {
  const { palaceData, cucHanh, banMenhHanh, thienCan, diaChi, cuc, menhChu, canIdx, direction } = chartData;
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
  html += `<p><strong>${isVi ? 'Lá số' : 'Chart'}:</strong> ${yearStr} · ${cucStr} · ${isVi ? 'Bản Mệnh' : 'Destiny'} ${banMenhHanh} · ${isVi ? 'Mệnh chủ' : 'Ruling star'}: ${menhChu}</p>`;

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

  // Cách Cục panel (T3.6)
  const cachCucMatches = detectCachCuc(palaceData, chartData.phiCungGraph);
  if (cachCucMatches.length > 0) {
    html += renderCachCucPanel(cachCucMatches, isVi);
  }

  // Đại Hạn timeline (T3.7)
  html += renderDaiHanTimeline(chartData, isVi);

  // Phi Cung Hóa Tượng interpretation
  if (chartData.phiCungGraph) {
    html += renderPhiCungInterpretation(chartData.phiCungGraph, isVi);
  }

  // Final advice
  html += `<p class="tl-advice">${isVi
    ? 'Lá số Tử Vi cho thấy xu hướng, không phải số phận cố định. Hiểu biết bản thân qua lá số giúp bạn phát huy điểm mạnh và chuẩn bị cho thử thách.'
    : 'The Tu Vi chart reveals tendencies, not fixed destiny. Self-knowledge through the chart helps you leverage strengths and prepare for challenges.'}</p>`;

  content.innerHTML = html;
  area.style.display = 'block';
}

/* ── Day element helpers (Phase 2) ── */
function getDayElement(dayCC) {
  const napAm = NAP_AM_TABLE[dayCC.sexIdx];
  return getNapAmHanh(napAm);
}

const DAY_QUALITY_BANNERS = {
  bi_sinh: { dayScore: 9, cssClass: 'bi_sinh' },
  hoa:     { dayScore: 7, cssClass: 'hoa'     },
  khac:    { dayScore: 6, cssClass: 'khac'    },
  sinh:    { dayScore: 5, cssClass: 'sinh'    },
  bi_khac: { dayScore: 4, cssClass: 'bi_khac' }
};

function buildBannerSummary(relation, dayEl, userEl) {
  const dEn = EL_NAMES[dayEl] || dayEl;
  const uEn = EL_NAMES[userEl] || userEl;
  return {
    bi_sinh: { vi: 'Ngày ' + dayEl + ' sinh bản mệnh ' + userEl + ' — cực kỳ thuận lợi',     en: dEn + ' day nurtures your ' + uEn + ' destiny — highly auspicious'         },
    hoa:     { vi: 'Ngày ' + dayEl + ' cùng hành bản mệnh — hài hòa và ổn định',              en: dEn + ' day shares your element — harmonious and stable'                    },
    khac:    { vi: 'Bản mệnh ' + userEl + ' khắc ngày ' + dayEl + ' — bạn chiếm ưu thế',     en: 'Your ' + uEn + ' destiny dominates the ' + dEn + ' day — you hold the edge' },
    sinh:    { vi: 'Bản mệnh ' + userEl + ' sinh ngày ' + dayEl + ' — giữ sức, tránh kiệt',   en: 'Your ' + uEn + ' drains into the ' + dEn + ' day — pace yourself'          },
    bi_khac: { vi: 'Ngày ' + dayEl + ' khắc bản mệnh ' + userEl + ' — cần phòng thủ cẩn thận', en: dEn + ' day clashes with your ' + uEn + ' destiny — proceed with caution'   }
  }[relation] || { vi: '', en: '' };
}

// Returns relation of dayElement TO userElement:
//   bi_sinh = day nurtures user (auspicious), sinh = user nurtures day (draining)
//   bi_khac = day conquers user (challenging), khac = user conquers day (dominating)
//   hoa     = same element (stable)
function computeDayRelation(dayElement, userElement) {
  if (dayElement === userElement) return 'hoa';
  const sinh = { 'Mộc':'Hỏa', 'Hỏa':'Thổ', 'Thổ':'Kim', 'Kim':'Thủy', 'Thủy':'Mộc' };
  const khac = { 'Mộc':'Thổ', 'Thổ':'Thủy', 'Thủy':'Hỏa', 'Hỏa':'Kim', 'Kim':'Mộc' };
  if (sinh[dayElement]  === userElement) return 'bi_sinh';
  if (sinh[userElement] === dayElement)  return 'sinh';
  if (khac[dayElement]  === userElement) return 'bi_khac';
  if (khac[userElement] === dayElement)  return 'khac';
  return 'hoa';
}

/* ── Daily Guidance Generator ── */
function generateGuidance(chartData) {
  const { palaceData, cucHanh, banMenhHanh } = chartData;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayOfWeek = tomorrow.getDay();
  const dayCC = (typeof getDayCanChi !== 'undefined')
    ? getDayCanChi(tomorrow)
    : { canIdx: 0, chiIdx: 0, sexIdx: 0, canChi: { vi: '', en: '' } };
  const dayElement  = getDayElement(dayCC);
  const dayRelation = computeDayRelation(dayElement, banMenhHanh);
  const dayHash = seedHash(banMenhHanh + palaceData[0].mainStars.join('') + tomorrow.toISOString().slice(0,10));
  // --- Determine current Đại Hạn ---
  const currentYear = new Date().getFullYear();
  const age = chartData.year ? currentYear - chartData.year : 25;
  let currentDH = null;
  palaceData.forEach(p => {
    const parts = p.daiHan.split('–');
    if (parts.length === 2 && age >= parseInt(parts[0]) && age <= parseInt(parts[1])) currentDH = p;
  });
  const menhP = palaceData[0];

  // --- DO pool — 25 tagged items (chart×10, element×10, relation×3, general×2) ---
  const DOS = [
    // chart-condition (10)
    { vi: 'Tập trung vào kế hoạch tài chính — năng lượng Tài Bạch đang mạnh', en: 'Focus on financial planning — your wealth palace energy is strong',
      condition: (mp, dh) => dh && ['Tài Bạch','Quan Lộc'].includes(dh.vi),
      tags: ['daihan:Tài Bạch','daihan:Quan Lộc'], reason: { vi: 'Đại Hạn đang đi qua cung tài lộc', en: 'Major cycle is transiting your wealth palace' } },
    { vi: 'Dành thời gian chất lượng cho gia đình và người thân', en: 'Spend quality time with family and loved ones',
      condition: (mp, dh) => dh && ['Phu Thê','Tử Tức','Phụ Mẫu','Huynh Đệ'].includes(dh.vi),
      tags: ['daihan:Phu Thê','daihan:Tử Tức','daihan:Phụ Mẫu'], reason: { vi: 'Đại Hạn nhấn mạnh quan hệ gia đình', en: 'Major cycle highlights family bonds' } },
    { vi: 'Bắt đầu một dự án sáng tạo hoặc sở thích mới', en: 'Start a new creative project or hobby',
      condition: (mp) => mp.mainStars.some(s => ['Tham Lang','Thiên Cơ'].includes(s)),
      tags: ['element:Mộc','element:Thủy','relation:bi_sinh'], reason: { vi: 'Tham Lang / Thiên Cơ hỗ trợ sáng tạo', en: 'Tham Lang / Thiên Cơ supports creative initiatives' } },
    { vi: 'Mở rộng mạng lưới và xây dựng quan hệ nghề nghiệp', en: 'Network and build professional connections',
      condition: (mp, dh) => dh && dh.vi === 'Nô Bộc',
      tags: ['daihan:Nô Bộc','relation:sinh'], reason: { vi: 'Đại Hạn Nô Bộc thuận lợi cho kết nối xã hội', en: 'Nô Bộc major cycle favors social connections' } },
    { vi: 'Thiền định hoặc tập chánh niệm để tịnh tâm', en: 'Meditate or practice mindfulness for inner peace',
      condition: (mp, dh) => dh && dh.vi === 'Phúc Đức',
      tags: ['daihan:Phúc Đức','relation:hoa'], reason: { vi: 'Đại Hạn Phúc Đức thích hợp tu dưỡng tinh thần', en: 'Phúc Đức cycle supports spiritual cultivation' } },
    { vi: 'Mạnh dạn khởi xướng dự án và thể hiện quyền lực hôm nay', en: 'Boldly lead initiatives and assert your authority today',
      condition: (mp) => mp.hoa.some(h => h.type.label === 'Hóa Quyền'),
      tags: ['relation:khac','relation:bi_sinh'], reason: { vi: 'Hóa Quyền trong cung Mệnh tăng cường uy lực', en: 'Hóa Quyền in Mệnh amplifies leadership energy' } },
    { vi: 'Tập thể dục và chú trọng sức khỏe thể chất', en: 'Exercise and prioritize your physical health',
      condition: (mp, dh) => dh && dh.vi === 'Tật Ách',
      tags: ['daihan:Tật Ách'], reason: { vi: 'Đại Hạn Tật Ách cần chú ý sức khỏe chủ động', en: 'Tật Ách major cycle calls for proactive health care' } },
    { vi: 'Học hỏi kiến thức mới — dòng chảy tri thức đang thuận lợi', en: 'Study or learn something new — knowledge flows easily',
      condition: (mp) => mp.hoa.some(h => h.type.label === 'Hóa Khoa'),
      tags: ['relation:bi_sinh','element:Thủy'], reason: { vi: 'Hóa Khoa trong cung Mệnh hỗ trợ học vấn', en: 'Hóa Khoa in Mệnh supports intellectual pursuits' } },
    { vi: 'Giúp đỡ người khác — phúc đức được nhân lên hôm nay', en: 'Help someone in need — your good karma is amplified today',
      condition: (mp) => mp.mainStars.some(s => ['Thiên Lương','Thiên Tướng'].includes(s)),
      tags: ['general','relation:bi_sinh'], reason: { vi: 'Thiên Lương / Thiên Tướng nhấn mạnh đức hạnh', en: 'Thiên Lương / Thiên Tướng emphasizes virtue and generosity' } },
    { vi: 'Tập trung vào tiết kiệm dài hạn và an toàn tài chính', en: 'Focus on long-term savings and financial security',
      condition: (mp) => mp.auxStars.includes('Lộc Tồn') || mp.hoa.some(h => h.type.label === 'Hóa Lộc'),
      tags: ['daihan:Tài Bạch','relation:bi_sinh'], reason: { vi: 'Lộc Tồn / Hóa Lộc hỗ trợ tích lũy tài sản bền vững', en: 'Lộc Tồn / Hóa Lộc supports steady wealth accumulation' } },
    // day-element (10) — 2 per element
    { vi: 'Chú trọng sự tỉ mỉ và hoàn thiện — ngày Kim lợi cho chi tiết', en: 'Focus on precision and detail — Metal day sharpens the mind',
      condition: () => false, tags: ['element:Kim'], reason: { vi: 'Ngày Kim tăng cường tư duy logic và kỷ luật', en: 'Metal day strengthens logical thinking and discipline' } },
    { vi: 'Ký kết thỏa thuận và đưa ra quyết định dứt khoát', en: 'Sign agreements and make firm, decisive commitments',
      condition: () => false, tags: ['element:Kim'], reason: { vi: 'Năng lượng Kim ngày hỗ trợ cam kết và quyết đoán', en: 'Metal day energy supports commitment and decisiveness' } },
    { vi: 'Khởi đầu kế hoạch mới — gieo hạt giống cho tương lai', en: 'Launch new plans and plant seeds for future growth',
      condition: () => false, tags: ['element:Mộc'], reason: { vi: 'Ngày Mộc mang sinh khí cho sự khởi đầu', en: 'Wood day carries life force for new beginnings' } },
    { vi: 'Mở rộng tầm nhìn sáng tạo, làm việc trong không gian thiên nhiên', en: 'Expand creative vision and work in natural surroundings',
      condition: () => false, tags: ['element:Mộc'], reason: { vi: 'Mộc là hành của tăng trưởng và sáng tạo tự nhiên', en: 'Wood governs growth and natural creativity' } },
    { vi: 'Nghiên cứu, đọc sách và thuận theo dòng chảy của ngày', en: 'Study, research, and move with the natural flow today',
      condition: () => false, tags: ['element:Thủy'], reason: { vi: 'Ngày Thủy thúc đẩy trí tuệ và sự linh hoạt', en: 'Water day promotes intellect and adaptability' } },
    { vi: 'Kết nối xã hội, chia sẻ ý tưởng với người xung quanh', en: 'Make social connections and share ideas with others',
      condition: () => false, tags: ['element:Thủy'], reason: { vi: 'Thủy chảy qua mọi ngõ ngách, lợi cho giao tiếp', en: 'Water flows everywhere — ideal for communication' } },
    { vi: 'Thể hiện bản thân mạnh mẽ và tỏa sáng trước đám đông', en: 'Express yourself boldly and shine in public settings',
      condition: () => false, tags: ['element:Hỏa'], reason: { vi: 'Ngày Hỏa khuếch đại sức tỏa sáng và uy phong', en: 'Fire day amplifies charisma and public presence' } },
    { vi: 'Lãnh đạo nhóm, truyền cảm hứng và thúc đẩy dự án', en: 'Lead your team, inspire others and drive projects forward',
      condition: () => false, tags: ['element:Hỏa'], reason: { vi: 'Hỏa hành mang lửa nhiệt huyết cho vai trò lãnh đạo', en: 'Fire element brings passionate energy to leadership' } },
    { vi: 'Đầu tư xây dựng nền tảng lâu dài, củng cố những điều ổn định', en: 'Invest in long-term foundations and consolidate stability',
      condition: () => false, tags: ['element:Thổ'], reason: { vi: 'Ngày Thổ vững chắc, lợi cho xây dựng và bền vững', en: 'Earth day is solid — ideal for building and stability' } },
    { vi: 'Chăm sóc gia đình và cải thiện không gian sống của bạn', en: 'Tend to family matters and improve your living space',
      condition: () => false, tags: ['element:Thổ'], reason: { vi: 'Thổ hành liên kết với gia đình, nhà cửa và sự ổn định', en: 'Earth connects to family, home, and domestic stability' } },
    // relation-specific (3)
    { vi: 'Theo đuổi mục tiêu tham vọng — hôm nay năng lượng thuận sinh cho bạn', en: 'Pursue ambitious goals — today\'s energy flows in your favor',
      condition: () => false, tags: ['relation:bi_sinh'], reason: { vi: 'Ngày hành sinh bản mệnh — đây là ngày rất thuận', en: 'Day element nurtures your destiny element — auspicious day' } },
    { vi: 'Duy trì nhịp công việc đều đặn, tích lũy tiến độ bền vững', en: 'Maintain steady rhythms and accumulate consistent progress',
      condition: () => false, tags: ['relation:hoa'], reason: { vi: 'Ngày cùng hành với bản mệnh — thuận hòa và ổn định', en: 'Same element day — conditions are harmonious and stable' } },
    { vi: 'Củng cố phòng thủ: bảo vệ tài sản và sắp xếp lại kế hoạch', en: 'Fortify your defenses: safeguard assets and reassess plans',
      condition: () => false, tags: ['relation:bi_khac'], reason: { vi: 'Ngày hành khắc bản mệnh — cần phòng thủ cẩn thận', en: 'Day element clashes with your destiny — be cautious and defensive' } },
    // general fallback (2)
    { vi: 'Thực hành lòng biết ơn và dành thời gian tĩnh lặng cho bản thân', en: 'Practice gratitude and carve out quiet time for yourself',
      condition: () => false, tags: ['general'], reason: { vi: 'Mọi ngày đều là cơ hội để nuôi dưỡng tâm trí', en: 'Every day is an opportunity to nurture the mind' } },
    { vi: 'Đặt ra ý định rõ ràng và xem xét lại tiến trình của bạn', en: 'Set clear intentions and review your current progress',
      condition: () => false, tags: ['general'], reason: { vi: 'Ý định rõ ràng là nền tảng của mọi thành công', en: 'Clear intention is the foundation of all achievement' } }
  ];

  // --- DON'T pool — 25 tagged items ---
  const DONTS = [
    // chart-condition (10)
    { vi: 'Tránh chi tiêu bốc đồng hoặc đánh bạc liều lĩnh', en: 'Avoid impulsive spending or risky financial gambles',
      condition: (mp, dh, cd) => { const tb = cd.palaceData[4] || {hoa:[]}; return tb.hoa.some(h => h.type.label === 'Hóa Kỵ'); },
      tags: ['daihan:Tài Bạch'], reason: { vi: 'Hóa Kỵ tại Tài Bạch cảnh báo rủi ro tài chính', en: 'Hóa Kỵ at Tài Bạch warns of financial risk' } },
    { vi: 'Không nên tranh cãi hoặc đối đầu với ai hôm nay', en: 'Avoid arguments and direct confrontations today',
      condition: (mp, dh, cd) => { const nb = cd.palaceData[7] || {hoa:[]}; return mp.mainStars.includes('Cự Môn') || nb.hoa.some(h => h.type.label === 'Hóa Kỵ'); },
      tags: ['daihan:Nô Bộc'], reason: { vi: 'Cự Môn / Nô Bộc Kỵ dễ gây mâu thuẫn ngôn từ', en: 'Cự Môn / Nô Bộc Kỵ increases risk of verbal conflict' } },
    { vi: 'Tránh ký kết hợp đồng quan trọng khi chưa xem xét kỹ', en: 'Avoid signing important contracts without thorough review',
      condition: (mp, dh, cd) => mp.branchIdx === cd.tuanPos1 || mp.branchIdx === cd.tuanPos2 || mp.branchIdx === cd.trietPos1 || mp.branchIdx === cd.trietPos2,
      tags: ['relation:bi_khac'], reason: { vi: 'Cung Mệnh nằm trong vùng Tuần / Triệt', en: 'Mệnh palace falls in Tuần/Triệt — be careful with commitments' } },
    { vi: 'Không nên bỏ bê sức khỏe hoặc bỏ bữa ăn hôm nay', en: 'Do not neglect your health or skip meals today',
      condition: (mp, dh, cd) => { const ta = cd.palaceData[5] || {hoa:[]}; return ta.hoa.some(h => h.type.label === 'Hóa Kỵ'); },
      tags: ['daihan:Tật Ách'], reason: { vi: 'Hóa Kỵ tại Tật Ách đòi hỏi chú ý sức khỏe', en: 'Hóa Kỵ at Tật Ách requires careful health attention' } },
    { vi: 'Tránh nói xấu hay thị phi về người khác', en: 'Avoid gossip and speaking ill of others',
      condition: (mp) => mp.mainStars.includes('Cự Môn'),
      tags: ['daihan:Mệnh'], reason: { vi: 'Cự Môn trong cung Mệnh khuếch đại lời nói — dùng cẩn thận', en: 'Cự Môn in Mệnh amplifies words — use speech carefully' } },
    { vi: 'Không nên khởi công sửa chữa lớn hay chuyển nhà hôm nay', en: 'Avoid starting major renovations or household moves today',
      condition: (mp, dh, cd) => { const dt = cd.palaceData[9] || {hoa:[]}; return dt.hoa.some(h => h.type.label === 'Hóa Kỵ'); },
      tags: ['daihan:Điền Trạch'], reason: { vi: 'Hóa Kỵ tại Điền Trạch cảnh báo về bất động sản', en: 'Hóa Kỵ at Điền Trạch warns of property risk' } },
    { vi: 'Tránh làm việc quá sức — kiệt sức đe dọa sinh lực của bạn', en: 'Avoid overworking — burnout threatens your vitality today',
      condition: (mp) => mp.mainStars.some(s => ['Thất Sát','Phá Quân'].includes(s)),
      tags: ['daihan:Mệnh','relation:bi_khac'], reason: { vi: 'Thất Sát / Phá Quân thúc đẩy mạnh mẽ nhưng dễ kiệt sức', en: 'Thất Sát / Phá Quân drives intensity but risks exhaustion' } },
    { vi: 'Không nên cho vay số tiền lớn hôm nay', en: 'Avoid lending large sums of money today',
      condition: (mp, dh, cd) => { const tb = cd.palaceData[4] || {auxStars:[]}; return (tb.auxStars || []).some(s => ['Địa Không','Địa Kiếp'].includes(s)); },
      tags: ['daihan:Tài Bạch'], reason: { vi: 'Địa Không / Địa Kiếp tại Tài Bạch gây rủi ro tiền bạc', en: 'Địa Không / Địa Kiếp at Tài Bạch creates financial loss risk' } },
    { vi: 'Tránh đưa ra quyết định lớn trong vội vàng', en: 'Avoid making major life decisions in haste',
      condition: (mp, dh, cd) => mp.branchIdx === cd.tuanPos1 || mp.branchIdx === cd.trietPos1,
      tags: ['relation:bi_khac'], reason: { vi: 'Vùng Tuần / Triệt hạn chế năng lượng cung Mệnh', en: 'Tuần/Triệt restricts Mệnh palace energy' } },
    { vi: 'Không nên phớt lờ dấu hiệu cảnh báo trong quan hệ tình cảm', en: 'Do not ignore warning signs in your relationships',
      condition: (mp, dh, cd) => { const pt = cd.palaceData[2] || {hoa:[]}; return pt.hoa.some(h => h.type.label === 'Hóa Kỵ'); },
      tags: ['daihan:Phu Thê'], reason: { vi: 'Hóa Kỵ tại Phu Thê cảnh báo căng thẳng tình cảm', en: 'Hóa Kỵ at Phu Thê warns of relationship tension' } },
    // day-element (10) — 2 per element
    { vi: 'Tránh thiếu quyết đoán — ngày Kim không tha thứ sự do dự', en: 'Avoid indecision — Metal day does not forgive hesitation',
      condition: () => false, tags: ['element:Kim'], reason: { vi: 'Ngày Kim đòi hỏi sự quyết đoán, do dự sẽ bất lợi', en: 'Metal day demands decisiveness — hesitation backfires' } },
    { vi: 'Tránh đối đầu cảm xúc — ngày Kim thiên về lý trí', en: 'Avoid emotional confrontations — Metal day favors reason over feelings',
      condition: () => false, tags: ['element:Kim'], reason: { vi: 'Năng lượng Kim cứng rắn — cảm xúc dễ leo thang', en: 'Metal energy is rigid — emotions can escalate quickly' } },
    { vi: 'Tránh kiềm chế sáng tạo — ngày Mộc cần tự do phát triển', en: 'Avoid suppressing creativity — Wood day needs room to grow',
      condition: () => false, tags: ['element:Mộc'], reason: { vi: 'Chặn Mộc khiến năng lượng ngày tắc nghẽn', en: 'Blocking Wood energy creates stagnation on this day' } },
    { vi: 'Tránh dàn trải quá rộng — ngày Mộc dễ khiến bạn phân tâm', en: 'Avoid spreading yourself too thin — Wood day can scatter focus',
      condition: () => false, tags: ['element:Mộc'], reason: { vi: 'Tính phát triển của Mộc dễ dẫn đến phân tán nếu không kiểm soát', en: 'Wood\'s expansive nature can scatter focus without control' } },
    { vi: 'Tránh cứng nhắc và bảo thủ — ngày Thủy cần sự linh hoạt', en: 'Avoid rigidity — Water day rewards adaptability and flow',
      condition: () => false, tags: ['element:Thủy'], reason: { vi: 'Thủy chảy quanh chướng ngại, không chống lại chúng', en: 'Water flows around obstacles — don\'t resist the current' } },
    { vi: 'Tránh cô lập bản thân — ngày Thủy khuyến khích sự kết nối', en: 'Avoid isolating yourself — Water day encourages connection',
      condition: () => false, tags: ['element:Thủy'], reason: { vi: 'Thủy cần chuyển động và kết nối, không đình trệ', en: 'Water needs movement and connection — stagnation harms' } },
    { vi: 'Tránh nóng giận và phản ứng thái quá — ngày Hỏa dễ bùng phát', en: 'Avoid hot tempers and overreacting — Fire day burns brightly',
      condition: () => false, tags: ['element:Hỏa'], reason: { vi: 'Hỏa vốn nhanh bùng, kiểm soát cảm xúc là yếu tố then chốt', en: 'Fire ignites quickly — emotional control is essential today' } },
    { vi: 'Tránh nhận thêm cam kết mà bạn không thể hoàn thành', en: 'Avoid taking on commitments you cannot realistically complete',
      condition: () => false, tags: ['element:Hỏa'], reason: { vi: 'Nhiệt huyết Hỏa dễ dẫn đến hứa quá nhiều', en: 'Fire\'s enthusiasm can lead to overpromising' } },
    { vi: 'Tránh gây xáo trộn lớn hay thay đổi đột ngột hôm nay', en: 'Avoid causing major disruptions or sudden changes today',
      condition: () => false, tags: ['element:Thổ'], reason: { vi: 'Ngày Thổ cần sự ổn định, đột biến sẽ gây hại', en: 'Earth day requires stability — sudden disruption is harmful' } },
    { vi: 'Tránh trì hoãn trách nhiệm — ngày Thổ đòi hỏi sự thực hiện', en: 'Avoid procrastinating on responsibilities — Earth day holds you accountable',
      condition: () => false, tags: ['element:Thổ'], reason: { vi: 'Thổ vững chắc đòi hỏi hành động chứ không phải lời hứa suông', en: 'Solid Earth demands action, not empty promises' } },
    // relation-specific (3)
    { vi: 'Đừng lãng phí năng lượng thuận lợi vào việc tầm thường', en: 'Do not waste this auspicious energy on trivial matters',
      condition: () => false, tags: ['relation:bi_sinh'], reason: { vi: 'Ngày sinh bản mệnh — hãy dùng vào điều có ý nghĩa', en: 'Day nurtures your element — invest in something meaningful' } },
    { vi: 'Không nên nhận thêm cam kết rủi ro cao trong ngày xung khắc', en: 'Avoid high-risk commitments on a clashing day',
      condition: () => false, tags: ['relation:bi_khac'], reason: { vi: 'Ngày hành khắc bản mệnh — rủi ro tăng cao hôm nay', en: 'Clashing day element raises your vulnerability' } },
    { vi: 'Đừng kiệt sức vì lo cho người khác quá nhiều hôm nay', en: 'Avoid depleting yourself by over-giving to others today',
      condition: () => false, tags: ['relation:sinh'], reason: { vi: 'Bản mệnh đang sinh vào ngày — dành dưỡng sức cho bản thân', en: 'Your element is draining into the day — conserve your energy' } },
    // general fallback (2)
    { vi: 'Tránh phân tích quá mức dẫn đến tê liệt quyết đoán', en: 'Avoid overthinking that leads to paralysis',
      condition: () => false, tags: ['general'], reason: { vi: 'Sự rõ ràng đến từ hành động, không phải suy nghĩ không dứt', en: 'Clarity comes from action, not endless deliberation' } },
    { vi: 'Đừng phớt lờ tín hiệu từ cơ thể — hãy nghỉ ngơi khi cần', en: 'Do not ignore your body\'s signals — rest when needed',
      condition: () => false, tags: ['general'], reason: { vi: 'Sức khỏe là nền tảng của mọi thành công', en: 'Health is the foundation of all achievement' } }
  ];

  // --- Weighted Selection (Phase 4) ---
  const scoreItem = (item) => {
    let score = 0;
    try { if (item.condition(menhP, currentDH, chartData)) score += 3; } catch(e) {}
    if (item.tags.some(t => t === 'element:' + dayElement))   score += 2;
    if (item.tags.some(t => t === 'relation:' + dayRelation)) score += 2;
    if (currentDH && item.tags.some(t => t === 'daihan:' + currentDH.vi)) score += 2;
    if (item.tags.includes('general'))                         score += 0.5;
    return score;
  };

  const jitter = mulberry32(dayHash);

  const scoredDos = DOS.map(item => ({ item, score: scoreItem(item) + jitter() * 0.4 }));
  scoredDos.sort((a, b) => b.score - a.score);
  const finalDos = scoredDos.slice(0, 4).map(s => s.item);

  const scoredDonts = DONTS.map(item => ({ item, score: scoreItem(item) + jitter() * 0.4 }));
  scoredDonts.sort((a, b) => b.score - a.score);
  const finalDonts = scoredDonts.slice(0, 4).map(s => s.item);

  // --- Render ---
  const isVi = currentLang === 'vi';
  const dateStr   = tomorrow.toLocaleDateString(isVi ? 'vi-VN' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const dateStrVi = tomorrow.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const dateStrEn = tomorrow.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const banner  = DAY_QUALITY_BANNERS[dayRelation] || { dayScore: 5, cssClass: 'hoa' };
  const summary = buildBannerSummary(dayRelation, dayElement, banMenhHanh);
  const dayElEn  = EL_NAMES[dayElement] || dayElement;
  const userElEn = EL_NAMES[banMenhHanh] || banMenhHanh;
  const destNoteVi = 'Bản mệnh ' + banMenhHanh + ' · Ngày ' + dayElement;
  const destNoteEn = 'Your ' + userElEn + ' destiny · ' + dayElEn + ' day';
  const destNote   = isVi ? destNoteVi : destNoteEn;

  const container = document.getElementById('guidance-content');
  const renderItems = (items) => items.map(d =>
    '<li>' +
      '<span data-en="' + d.en.replace(/"/g,'&quot;') + '" data-vi="' + d.vi.replace(/"/g,'&quot;') + '">' + (isVi ? d.vi : d.en) + '</span>' +
      '<span class="guidance-reason" data-en="' + d.reason.en.replace(/"/g,'&quot;') + '" data-vi="' + d.reason.vi.replace(/"/g,'&quot;') + '">' + (isVi ? d.reason.vi : d.reason.en) + '</span>' +
    '</li>'
  ).join('');

  container.innerHTML =
    '<div class="guidance-banner guidance-banner-' + banner.cssClass + '" aria-label="' + (isVi ? 'Chất lượng ngày mai' : 'Day astrological quality') + '">' +
      '<div class="banner-day">' +
        '<span class="banner-label" data-en="Tomorrow" data-vi="Ngày Mai">' + (isVi ? 'Ngày Mai' : 'Tomorrow') + '</span>' +
        '<span class="banner-canchi" data-en="' + dayCC.canChi.en + '" data-vi="' + dayCC.canChi.vi + '">' + (isVi ? dayCC.canChi.vi : dayCC.canChi.en) + '</span>' +
        '<span class="banner-element" data-en="' + dayElEn + '" data-vi="' + dayElement + '">' + (isVi ? dayElement : dayElEn) + '</span>' +
      '</div>' +
      '<div class="banner-quality">' +
        '<span class="banner-score">' + banner.dayScore + '/10</span>' +
        '<span class="banner-summary" data-en="' + summary.en.replace(/"/g,'&quot;') + '" data-vi="' + summary.vi.replace(/"/g,'&quot;') + '">' + (isVi ? summary.vi : summary.en) + '</span>' +
      '</div>' +
    '</div>' +
    '<div class="guidance-card do-card">' +
      '<h3>☀ <span data-en="What You Should Do" data-vi="Nên Làm">' + (isVi ? 'Nên Làm' : 'What You Should Do') + '</span></h3>' +
      '<p class="guidance-date" data-en="' + dateStrEn + '" data-vi="' + dateStrVi + '">' + dateStr + '</p>' +
      '<p class="guidance-destiny-note" data-en="' + destNoteEn + '" data-vi="' + destNoteVi + '">' + destNote + '</p>' +
      '<ul>' + renderItems(finalDos) + '</ul>' +
    '</div>' +
    '<div class="guidance-card dont-card">' +
      '<h3>⚠ <span data-en="What You Should Avoid" data-vi="Nên Tránh">' + (isVi ? 'Nên Tránh' : 'What You Should Avoid') + '</span></h3>' +
      '<p class="guidance-date" data-en="' + dateStrEn + '" data-vi="' + dateStrVi + '">' + dateStr + '</p>' +
      '<p class="guidance-destiny-note" data-en="' + destNoteEn + '" data-vi="' + destNoteVi + '">' + destNote + '</p>' +
      '<ul>' + renderItems(finalDonts) + '</ul>' +
    '</div>';
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

/* ══════════════════════════════════════════
   LỤC HÀO SIDEBAR — T4.9 / T4.10 / T4.11 / T4.12
   ══════════════════════════════════════════ */

function renderHaoLine(value, pos) {
  const isDong = value === 6 || value === 9;
  const isYang = value === 7 || value === 9;
  const line   = isYang ? '━━━━━━━' : '━━ ━━';
  const marker = isDong ? (value === 9 ? ' ○' : ' ×') : '';
  return `<div class="hao-line${isDong ? ' hao-dong' : ''}">${line}${marker} <span class="hao-pos">${pos}</span></div>`;
}

function renderLuanGiai(queData, haoDetails) {
  if (typeof QUE_DATA === 'undefined') return '';
  const isVi = currentLang === 'vi';
  const qc = queData.queChinh;
  if (!qc) return '';

  // Thoán từ
  const thoanTuRaw = qc.thoanTu || '';
  const thoanTu = isVi ? (thoanTuRaw.vi || thoanTuRaw) : (thoanTuRaw.en || thoanTuRaw.vi || thoanTuRaw);

  // Động hào từ — dongHao is array of 1-based positions e.g. [1,3,5]
  let haoTuHtml = '';
  if (queData.dongHao && qc.haoTu) {
    queData.dongHao.forEach((haoPos) => {
      const i = haoPos - 1;
      const ht = qc.haoTu[i];
      if (!ht) return;
      const txt = isVi ? (ht.vi || ht) : (ht.en || ht.vi || ht);
      haoTuHtml += `<div class="hao-tu-item"><span class="hao-tu-pos">${isVi ? 'Hào' : 'Line'} ${haoPos}:</span> ${txt}</div>`;
    });
  }

  // Ngũ Hành summary
  const NGU_HANH_NAMES = {
    'Kim': { vi: 'Kim', en: 'Metal' },
    'Mộc': { vi: 'Mộc', en: 'Wood' },
    'Thủy': { vi: 'Thủy', en: 'Water' },
    'Hỏa': { vi: 'Hỏa', en: 'Fire' },
    'Thổ': { vi: 'Thổ', en: 'Earth' }
  };
  const counts = {};
  haoDetails.forEach(h => {
    const el = h.nguHanh || '';
    counts[el] = (counts[el] || 0) + 1;
  });
  let strongest = '', weakest = '', maxC = 0, minC = 99;
  Object.entries(counts).forEach(([el, c]) => {
    if (c > maxC) { maxC = c; strongest = el; }
    if (c < minC) { minC = c; weakest = el; }
  });
  const ngLabel  = isVi ? 'Ngũ Hành' : 'Elements';
  const strLabel = isVi ? 'Vượng' : 'Strongest';
  const wkLabel  = isVi ? 'Suy' : 'Weakest';
  const strName  = NGU_HANH_NAMES[strongest] ? (isVi ? NGU_HANH_NAMES[strongest].vi : NGU_HANH_NAMES[strongest].en) : strongest;
  const wkName   = NGU_HANH_NAMES[weakest]   ? (isVi ? NGU_HANH_NAMES[weakest].vi   : NGU_HANH_NAMES[weakest].en)   : weakest;
  const nguHanhSummary = strongest ? `${ngLabel}: ${strLabel} ${strName}${weakest !== strongest ? ` · ${wkLabel} ${wkName}` : ''}` : '';

  const titleTxt = isVi ? 'Luận Giải' : 'Interpretation';
  const thoanLabel = isVi ? 'Thoán từ:' : 'Judgment:';
  const dongLabel  = isVi ? 'Hào động:' : 'Moving lines:';

  return `<div class="luan-giai">
  <div class="luan-giai-title">${titleTxt}</div>
  ${thoanTu ? `<div class="thoan-tu"><strong>${thoanLabel}</strong> ${thoanTu}</div>` : ''}
  ${haoTuHtml ? `<div class="luan-giai-title">${dongLabel}</div>${haoTuHtml}` : ''}
  ${nguHanhSummary ? `<div class="ngu-hanh-summary">${nguHanhSummary}</div>` : ''}
</div>`;
}

function renderQueResult(queData, haoDetails) {
  if (typeof QUE_DATA === 'undefined') return;
  const resultEl = document.getElementById('lucHaoResult');
  if (!resultEl) return;
  const isVi = currentLang === 'vi';

  // Phase 5: Get casting date and enhanced data
  const ngayGieo = new Date();
  const nhatThan = typeof getNhatThan === 'function' ? getNhatThan(ngayGieo) : null;
  const lucThuArr = typeof getLucThu === 'function' ? getLucThu(ngayGieo) : null;

  // Get selected lĩnh vực
  const linhVucEl = document.querySelector('input[name="linhVuc"]:checked');
  const linhVuc = linhVucEl ? linhVucEl.value : 'tai';

  // Phase 5: Get Dụng Thần
  const dungThan = typeof getDungThan === 'function' ? getDungThan(haoDetails, linhVuc) : null;

  const qc = queData.queChinh;
  const qb = (queData.queBien && queData.queBien !== queData.queChinh) ? queData.queBien : null;
  if (!qc) return;

  const qcName = qc.name;
  const qbName = qb ? qb.name : null;

  // Phase 5: Nhật Thần info bar
  let phase5Html = '';
  if (nhatThan) {
    phase5Html += `<div class="nhat-than-bar">
      <span class="nhat-than-label">${isVi ? 'Nhật Thần' : 'Day Spirit'}:</span>
      <span class="nhat-than-value">${nhatThan.chiName}</span>
      <span class="nhat-than-clash">${isVi ? 'Xung' : 'Clash'}: ${nhatThan.clashes}</span>
      ${nhatThan.supports ? `<span class="nhat-than-support">${isVi ? 'Hợp' : 'Support'}: ${nhatThan.supports}</span>` : ''}
    </div>`;
  }

  // Phase 5: Dụng Thần highlight info
  if (dungThan) {
    const lucThanName = dungThan.lucThan || '';
    phase5Html += `<div class="dung-than-bar">
      <span>${isVi ? 'Dụng Thần' : 'Acting Spirit'}:</span>
      <strong>${lucThanName}</strong> (${isVi ? 'hào' : 'line'} ${dungThan.pos})
    </div>`;
  }

  // Quẻ display block
  let queDisplayHtml = `<div class="que-display">
    <div class="que-block">
      <div class="que-name">${qcName}</div>
      <div class="que-han">${qc.han || ''}</div>
    </div>`;
  if (qb) {
    const arrow = isVi ? '→ Biến' : '→ Transforms';
    queDisplayHtml += `<div class="que-block">
      <div class="que-name">${arrow}</div>
      <div class="que-name">${qbName}</div>
      <div class="que-han">${qb.han || ''}</div>
    </div>`;
  }
  queDisplayHtml += `</div>`;

  // Hào lines: display top-to-bottom = hào 6 → hào 1
  let haoLinesHtml = '<div class="hao-reveal">';
  for (let i = 5; i >= 0; i--) {
    haoLinesHtml += renderHaoLine(queData.haoArray[i], i + 1);
  }
  haoLinesHtml += '</div>';

  // Lục Thân table with Lục Thú column
  const thHao  = isVi ? 'Hào' : 'Line';
  const thDiaChi = isVi ? 'Địa Chi' : 'Branch';
  const thNguHanh = isVi ? 'Ngũ Hành' : 'Element';
  const thLucThan = isVi ? 'Lục Thân' : 'Relation';
  const thLucThu = isVi ? 'Lục Thú' : 'Beast';
  const thDong = isVi ? 'Động' : 'Moving';

  let tableHtml = `<table class="luc-than-table">
  <thead><tr>
    <th>${thHao}</th><th>${thDiaChi}</th><th>${thNguHanh}</th><th>${thLucThan}</th><th>${thLucThu}</th><th>${thDong}</th>
  </tr></thead><tbody>`;

  // Table rows: hào 6 → hào 1 to match visual order
  for (let i = 5; i >= 0; i--) {
    const h = haoDetails[i] || {};
    const isDong = queData.dongHao && queData.dongHao.includes(i + 1);
    const lucThanTxt = h.lucThan || '';
    const isDungThan = dungThan && dungThan.pos === (i + 1);
    const rowClass = isDungThan ? 'hao-dung-than' : '';

    // Lục Thú for this line
    const lucThuObj = lucThuArr ? lucThuArr[i] : null;
    const lucThuTxt = lucThuObj ? (isVi ? lucThuObj.vi : lucThuObj.en) : '';
    const lucThuClass = lucThuObj ? (lucThuObj.nature === 'cát' ? 'luc-thu-cat' : (lucThuObj.nature === 'hung' ? 'luc-thu-hung' : '')) : '';

    tableHtml += `<tr class="${rowClass}">
      <td>${i + 1}</td>
      <td>${h.diaChi || ''}</td>
      <td>${h.nguHanh || ''}</td>
      <td>${lucThanTxt}</td>
      <td class="luc-thu-cell ${lucThuClass}">${lucThuTxt}</td>
      <td>${isDong ? '<span class="dong-mark">●</span>' : ''}</td>
    </tr>`;
  }
  tableHtml += '</tbody></table>';

  const luanGiaiHtml = renderLuanGiai(queData, haoDetails);

  resultEl.innerHTML = phase5Html + queDisplayHtml + haoLinesHtml + tableHtml + luanGiaiHtml;
}

function initLucHaoSidebar() {
  const panel  = document.getElementById('lucHaoPanel');
  const toggle = document.getElementById('lucHaoToggle');
  const castBtn = document.getElementById('gieoQueBtn');
  if (!panel || !toggle) return;

  function updateToggleLabel() {
    const isVi = currentLang === 'vi';
    toggle.textContent = isVi ? '☰ Gieo Quẻ' : '☰ I Ching';
  }
  updateToggleLabel();

  toggle.addEventListener('click', () => {
    const hidden = panel.classList.toggle('luc-hao-panel-hidden');
    toggle.classList.toggle('active', !hidden);
    updateToggleLabel();
  });

  if (castBtn) {
    castBtn.addEventListener('click', () => {
      if (typeof gieoQue === 'undefined') return;
      castBtn.disabled = true;
      const isVi = currentLang === 'vi';
      castBtn.textContent = isVi ? '⏳ Đang gieo...' : '⏳ Casting...';

      // T4.11 — coin flip animation placeholder
      const resultEl = document.getElementById('lucHaoResult');
      if (resultEl) resultEl.innerHTML = '<div class="coin-flip-wrap"><span class="coin-flip">🪙</span></div>';

      setTimeout(() => {
        const raw        = gieoQue();
        const queData    = xacDinhQue(raw);
        const haoDetails = anLucThan(queData);
        renderQueResult(queData, haoDetails);
        castBtn.disabled = false;
        castBtn.textContent = isVi ? '🎲 Gieo Quẻ' : '🎲 Cast Hexagram';
      }, 400);
    });
  }
}

// Call after DOM is ready (scripts load after </body> so DOM is available)
initLucHaoSidebar();

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
