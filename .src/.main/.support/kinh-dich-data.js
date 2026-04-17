/* ── kinh-dich-data.js — Kinh Dịch / Lục Hào data + engine ── */
/* Pure data + computation. NO DOM manipulation. */

// ── BAT_QUAI (8 trigrams) ──
// Index: 0=Càn, 1=Đoài, 2=Ly, 3=Chấn, 4=Tốn, 5=Khảm, 6=Cấn, 7=Khôn
// hao: [bottom, middle, top] — 1=dương, 0=âm
const BAT_QUAI = [
  { idx: 0, name: 'Càn',  han: '乾', hao: [1,1,1], nguHanh: 'Kim',  napGiap: { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] } },
  { idx: 1, name: 'Đoài', han: '兌', hao: [0,1,1], nguHanh: 'Kim',  napGiap: { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] } },
  { idx: 2, name: 'Ly',   han: '離', hao: [1,0,1], nguHanh: 'Hỏa',  napGiap: { noi: ['Mão','Sửu','Hợi'], ngoai: ['Dậu','Mùi','Tỵ']   } },
  { idx: 3, name: 'Chấn', han: '震', hao: [0,0,1], nguHanh: 'Mộc',  napGiap: { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] } },
  { idx: 4, name: 'Tốn',  han: '巽', hao: [1,1,0], nguHanh: 'Mộc',  napGiap: { noi: ['Mão','Sửu','Hợi'], ngoai: ['Dậu','Mùi','Tỵ']   } },
  { idx: 5, name: 'Khảm', han: '坎', hao: [0,1,0], nguHanh: 'Thủy', napGiap: { noi: ['Dần','Thìn','Ngọ'], ngoai: ['Thân','Tuất','Tý'] } },
  { idx: 6, name: 'Cấn',  han: '艮', hao: [1,0,0], nguHanh: 'Thổ',  napGiap: { noi: ['Thìn','Dần','Tý'], ngoai: ['Tuất','Thân','Ngọ'] } },
  { idx: 7, name: 'Khôn', han: '坤', hao: [0,0,0], nguHanh: 'Thổ',  napGiap: { noi: ['Mùi','Tỵ','Mão'], ngoai: ['Sửu','Hợi','Dậu']   } }
];

// ── NAP_GIAP — Địa Chi per trigram position ──
// Chuẩn Nạp Giáp: Càn nội Giáp Tý, Khôn nội Ất Mùi system
const NAP_GIAP = {
  // noiQuai (hào 1-3): [hào1, hào2, hào3]
  // ngoaiQuai (hào 4-6): [hào4, hào5, hào6]
  Can:  { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] },
  Doai: { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] },
  Ly:   { noi: ['Mão','Sửu','Hợi'], ngoai: ['Dậu','Mùi','Tỵ']   },
  Chan: { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] },
  Ton:  { noi: ['Mão','Sửu','Hợi'], ngoai: ['Dậu','Mùi','Tỵ']   },
  Kham: { noi: ['Dần','Thìn','Ngọ'], ngoai: ['Thân','Tuất','Tý'] },
  Can6: { noi: ['Thìn','Dần','Tý'], ngoai: ['Tuất','Thân','Ngọ'] },
  Khon: { noi: ['Mùi','Tỵ','Mão'], ngoai: ['Sửu','Hợi','Dậu']   }
};

// Indexed access by BAT_QUAI index
const NAP_GIAP_IDX = [
  { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] }, // 0 Càn
  { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] }, // 1 Đoài
  { noi: ['Mão','Sửu','Hợi'], ngoai: ['Dậu','Mùi','Tỵ']   }, // 2 Ly
  { noi: ['Tý','Dần','Thìn'], ngoai: ['Ngọ','Thân','Tuất'] }, // 3 Chấn
  { noi: ['Mão','Sửu','Hợi'], ngoai: ['Dậu','Mùi','Tỵ']   }, // 4 Tốn
  { noi: ['Dần','Thìn','Ngọ'], ngoai: ['Thân','Tuất','Tý'] }, // 5 Khảm
  { noi: ['Thìn','Dần','Tý'], ngoai: ['Tuất','Thân','Ngọ'] }, // 6 Cấn
  { noi: ['Mùi','Tỵ','Mão'], ngoai: ['Sửu','Hợi','Dậu']   }  // 7 Khôn
];

// ── DIA_CHI_NGU_HANH — Ngũ Hành of each Địa Chi ──
const DIA_CHI_NGU_HANH = {
  'Tý':  'Thủy', 'Sửu': 'Thổ',  'Dần': 'Mộc',
  'Mão': 'Mộc',  'Thìn': 'Thổ', 'Tỵ':  'Hỏa',
  'Ngọ': 'Hỏa',  'Mùi': 'Thổ',  'Thân': 'Kim',
  'Dậu': 'Kim',  'Tuất': 'Thổ', 'Hợi': 'Thủy'
};

// ── NGU_HANH_RELATION — relation of subject vs object ──
// sinh = subject produces object, khac = subject controls object
// bi sinh = object produces subject, bi khac = object controls subject, same = same element
const NGU_HANH_RELATION = {
  'Mộc': { 'Mộc': 'same', 'Hỏa': 'sinh', 'Thổ': 'khac', 'Kim': 'bi_khac', 'Thủy': 'bi_sinh' },
  'Hỏa': { 'Mộc': 'bi_sinh', 'Hỏa': 'same', 'Thổ': 'sinh', 'Kim': 'khac', 'Thủy': 'bi_khac' },
  'Thổ': { 'Mộc': 'bi_khac', 'Hỏa': 'bi_sinh', 'Thổ': 'same', 'Kim': 'sinh', 'Thủy': 'khac' },
  'Kim': { 'Mộc': 'khac', 'Hỏa': 'bi_khac', 'Thổ': 'bi_sinh', 'Kim': 'same', 'Thủy': 'sinh' },
  'Thủy': { 'Mộc': 'sinh', 'Hỏa': 'khac', 'Thổ': 'bi_khac', 'Kim': 'bi_sinh', 'Thủy': 'same' }
};

// ── LUC_THAN_MAP — relation → Lục Thân name ──
// Based on quẻ's Ngũ Hành (subject) vs hào's Địa Chi Ngũ Hành (object)
const LUC_THAN_MAP = {
  'same':    { vi: 'Huynh Đệ', en: 'Siblings'     },
  'sinh':    { vi: 'Tử Tôn',  en: 'Children'      },
  'khac':    { vi: 'Thê Tài', en: 'Wealth'         },
  'bi_sinh': { vi: 'Phụ Mẫu', en: 'Parents'        },
  'bi_khac': { vi: 'Quan Quỷ', en: 'Officer/Ghost' }
};

// ── getLucThan(queNguHanh, diaChi) ──
function getLucThan(queNguHanh, diaChi) {
  if (typeof DIA_CHI_NGU_HANH === 'undefined') return null;
  if (typeof NGU_HANH_RELATION === 'undefined') return null;
  const haoNH = DIA_CHI_NGU_HANH[diaChi];
  if (!haoNH) return null;
  const rel = NGU_HANH_RELATION[queNguHanh][haoNH];
  return LUC_THAN_MAP[rel] || null;
}

// ── QUE_DATA — 64 hexagrams (Văn Vương order, 0-indexed) ──
// thuong = upper trigram index (BAT_QUAI), ha = lower trigram index
// hanh = Ngũ Hành of the hexagram's cung
// thoanTu: Vietnamese classical summary (15-30 words)
// haoTu: [hào1..hào6] Vietnamese classical meaning (10-25 words each)
const QUE_DATA = {
  // ── Hexagrams 1–16 ──
  0: {
    name: 'Thuần Càn', han: '乾為天', thuong: 0, ha: 0, hanh: 'Kim',
    thoanTu: 'Trời hành kiện, quân tử tự cường không ngừng. Nguyên hanh lợi trinh, bốn đức viên mãn.',
    haoTu: [
      'Tiềm long chớ dùng. Thời chưa đến, ẩn mình chờ cơ hội.',
      'Long hiện ở đồng, lợi kiến đại nhân. Ra mắt người tài.',
      'Quân tử cả ngày cần cù, chiều tối cẩn thận. Tuy gian nan nhưng vô hại.',
      'Hoặc nhảy lên vực, không lỗi. Tiến thoái tùy thời, không cứng nhắc.',
      'Long bay trên trời, lợi kiến đại nhân. Đại tài hiển lộ rạng rỡ.',
      'Cang long hối hận. Cực thịnh tất suy, biết dừng đúng lúc.'
    ]
  },
  1: {
    name: 'Thuần Khôn', han: '坤為地', thuong: 7, ha: 7, hanh: 'Thổ',
    thoanTu: 'Đất đức thuần hậu, vạn vật nhờ đó sinh thành. Nhu thuận, lợi trinh, hậu đức tải vật.',
    haoTu: [
      'Sương giẫm dưới chân, băng giá sắp đến. Cẩn thận dấu hiệu ban đầu.',
      'Thẳng vuông lớn, không tập mà không lợi. Đức hạnh tự nhiên rộng lớn.',
      'Hàm chương có thể trinh, hoặc tùng vương sự. Không thành nhưng có kết thúc.',
      'Bọc buộc kín thì không lỗi không khen. Thận trọng, không để sơ hở.',
      'Váy vàng, nguyên cát. Khiêm nhường trung chính, phúc lớn.',
      'Long tranh ở đồng, huyết huyền hoàng. Âm dương xung đột cùng cực.'
    ]
  },
  2: {
    name: 'Thủy Lôi Truân', han: '水雷屯', thuong: 5, ha: 3, hanh: 'Thủy',
    thoanTu: 'Truân là khó nhọc ban đầu, trời đất giao hợp, vạn vật mới sinh. Lợi kiến hầu.',
    haoTu: [
      'Bàn hoàn, lợi cư trinh. Lợi kiến hầu. Khó khăn ban đầu, nên ở yên.',
      'Truân như bất tiến, thừa mã ban như. Không khấu hôn của ta, nữ trinh không tự hứa.',
      'Tức lộc vô ngu, duy nhập vu lâm trung. Vào rừng lạc hướng, biết dừng không lỗi.',
      'Thừa mã ban như, cầu hôn. Vãng cát, vô bất lợi. Tiến về phía tốt.',
      'Truân kỳ cao, tiểu trinh cát, đại trinh hung. Ban ơn nhỏ tốt, mưu lớn gặp hung.',
      'Thừa mã ban như, khấp huyết liên như. Tiến thoái lưỡng nan, khóc lóc bi thương.'
    ]
  },
  3: {
    name: 'Sơn Thủy Mông', han: '山水蒙', thuong: 6, ha: 5, hanh: 'Thổ',
    thoanTu: 'Mông là u muội non nớt cần khai sáng. Phát mông cầu học, hành trung đạo.',
    haoTu: [
      'Phát mông, lợi dùng hình phạt. Dùng pháp để mở mang, tháo bỏ xiềng xích.',
      'Bao mông cát, nạp phụ cát. Dung nạp mọi người, gia đình yên ổn.',
      'Chớ lấy người con gái này, thấy kim phu không có thân. Hôn nhân không lợi.',
      'Khốn mông, lận. Tự đắm chìm trong ngu muội, đáng tiếc xấu hổ.',
      'Đồng mông, cát. Trẻ thơ hồn nhiên học hỏi, được phúc lành.',
      'Kích mông, bất lợi vi khấu, lợi ngự khấu. Đánh giặc ngu muội, phòng thủ tốt hơn tấn công.'
    ]
  },
  4: {
    name: 'Thủy Thiên Nhu', han: '水天需', thuong: 5, ha: 0, hanh: 'Thủy',
    thoanTu: 'Nhu là chờ đợi, mây trên trời chưa mưa. Có thành tín, quang hanh, trinh cát, lợi thiệp đại xuyên.',
    haoTu: [
      'Nhu vu giao, lợi dụng hằng, vô cữu. Chờ ở vùng ngoài, giữ thường đạo không lỗi.',
      'Nhu vu sa, tiểu hữu ngôn, chung cát. Chờ trên bãi cát, có lời nhỏ, cuối tốt.',
      'Nhu vu nê, trí khấu chí. Chờ trong bùn, tự mời kẻ địch đến.',
      'Nhu vu huyết, xuất tự huyệt. Trong cảnh nguy ngập thoát ra được an toàn.',
      'Nhu vu tửu thực, trinh cát. Ăn uống an nhiên chờ đợi, giữ chính đạo tốt lành.',
      'Nhập vu huyệt, hữu bất tốc chi khách tam nhân lai. Khách đến cứu giúp, kính trọng thì cát.'
    ]
  },
  5: {
    name: 'Thiên Thủy Tụng', han: '天水訟', thuong: 0, ha: 5, hanh: 'Kim',
    thoanTu: 'Tụng là tranh tụng, kiện cáo. Hữu phu trất, ung lợi trinh. Trung đạo tốt, không nên cố chấp đến cùng.',
    haoTu: [
      'Bất vĩnh sở sự, tiểu hữu ngôn, chung cát. Không theo đuổi mãi, dừng lại thì tốt.',
      'Bất khắc tụng, quy nhi bộ, kỳ ấp nhân tam bách hộ. Không thắng kiện, về nhà ẩn tránh.',
      'Thực cựu đức, trinh lệ chung cát. Ăn theo đức cũ, nguy nhưng cuối tốt.',
      'Bất khắc tụng, phục tức mệnh, khuất nhi trinh, cát. Không thắng, phục tùng mệnh trời tốt.',
      'Tụng nguyên cát. Kiện tụng có kết quả tốt đẹp, công lý hiển.',
      'Hoặc tích chi bát đới, chung triêu tam xước chi. Dù được đai vàng cũng ba lần bị tước.'
    ]
  },
  6: {
    name: 'Địa Thủy Sư', han: '地水師', thuong: 7, ha: 5, hanh: 'Thổ',
    thoanTu: 'Sư là quân đội, dùng binh chính đạo. Trinh, trượng nhân cát, vô cữu.',
    haoTu: [
      'Sư xuất dĩ luật, phủ tường hung. Ra quân phải có kỷ luật, không thì hung.',
      'Tại sư trung, cát, vô cữu, vương tam tích mệnh. Ở trong quân đội giữ trung, được vua khen.',
      'Sư hoặc dư thi, hung. Có kẻ chở xác về, điềm xấu.',
      'Sư tả thứ, vô cữu. Quân lui có trật tự, không lỗi.',
      'Điền hữu cầm, lợi chấp ngôn, vô cữu. Bắt thú trong ruộng, có lý do mới dùng binh.',
      'Đại quân hữu mệnh, khai quốc thừa gia. Lập nước phong đất, không dùng tiểu nhân cầm quyền.'
    ]
  },
  7: {
    name: 'Thủy Địa Tỷ', han: '水地比', thuong: 5, ha: 7, hanh: 'Thủy',
    thoanTu: 'Tỷ là thân cận gần gũi, tụ hội. Cát, nguyên phệ nguyên vĩnh trinh, vô cữu.',
    haoTu: [
      'Hữu phu tỷ chi, vô cữu. Hữu phu doanh phữu, chung lai hữu tha cát. Thành tâm thân cận, có phúc.',
      'Tỷ chi tự nội, trinh cát. Từ bên trong thân cận, giữ chính thì tốt.',
      'Tỷ chi phỉ nhân. Kết giao với người không phải, hung hiểm.',
      'Ngoại tỷ chi, trinh cát. Thân cận người ngoài giữ chính đạo, tốt lành.',
      'Hiển tỷ, vương dụng tam khu, thất tiền cầm. Vua đi săn bỏ trống một hướng, kẻ trốn được tha.',
      'Tỷ chi vô thủ, hung. Thân cận mà không có chủ hướng, hung.'
    ]
  },
  8: {
    name: 'Phong Thiên Tiểu Súc', han: '風天小畜', thuong: 4, ha: 0, hanh: 'Mộc',
    thoanTu: 'Tiểu súc là tích lũy nhỏ, dừng lại chờ đợi. Hanh, mật vân bất vũ, tự ngã tây giao.',
    haoTu: [
      'Phục tự đạo, hà kỳ cữu. Cát. Quay lại chính đạo, có lỗi gì. Tốt lành.',
      'Khiên phục, cát. Dắt nhau cùng quay lại, tốt đẹp.',
      'Dư thoát phúc, phu thê phản mục. Xe gãy trục, vợ chồng mâu thuẫn.',
      'Hữu phu, huyết khứ thích xuất, vô cữu. Thành tín thì thoát khỏi nguy hiểm, không lỗi.',
      'Hữu phu loan như, phú dĩ kỳ lân. Thành tín liên kết cùng nhau, giàu có với láng giềng.',
      'Ký vũ ký xử, thượng đức tải. Phụ trinh lệ. Nguyệt cơ vọng, quân tử chinh hung. Đã mưa đã đủ, cao đức chứa.'
    ]
  },
  9: {
    name: 'Thiên Trạch Lý', han: '天澤履', thuong: 0, ha: 1, hanh: 'Kim',
    thoanTu: 'Lý là đi đứng theo lễ nghĩa, giẫm lên đuôi cọp mà không bị cắn. Hanh.',
    haoTu: [
      'Tố lý vãng, vô cữu. Chất phác đi theo con đường mình, không lỗi.',
      'Lý đạo thản thản, u nhân trinh cát. Đường đi bằng phẳng, người ẩn dật giữ chính, tốt.',
      'Miễu năng thị, tiễ năng lý. Lý hổ vĩ, khiết nhân hung. Kẻ cụt chân đi, kẻ mù nhìn — hung.',
      'Lý hổ vĩ, khúc khúc chung cát. Giẫm đuôi cọp thận trọng, cuối cùng tốt lành.',
      'Quái lý, trinh lệ. Quyết đoán đi tới, giữ chính mà lo lắng.',
      'Thị lý khảo tường, kỳ toàn cát. Nhìn lại đường đã đi mà xem xét, đủ tốt thì đại cát.'
    ]
  },
  10: {
    name: 'Địa Thiên Thái', han: '地天泰', thuong: 7, ha: 0, hanh: 'Thổ',
    thoanTu: 'Thái là thông suốt, tiểu vãng đại lai. Cát hanh. Trời đất giao hòa, vạn vật thịnh vượng.',
    haoTu: [
      'Bạt mao nhự, dĩ kỳ vựi, chinh cát. Nhổ cỏ tranh cùng rễ, cùng loại tiến lên, tốt.',
      'Bao hoang, dụng phùng hà, bất hà bằng, đắc thượng vu trung hành. Bao dung rộng lớn, giữ trung đạo.',
      'Vô bình bất pha, vô vãng bất phục. Trinh lệ, vô cữu. Không bằng phẳng mãi, cần giữ chính.',
      'Phiêu phiêu, bất phú dĩ kỳ lân, bất giới dĩ phu. Hàng hàng hàng hiếm, cùng chí thân cận.',
      'Đế ất quy muội, dĩ chỉ nguyên cát. Vua gả em gái, phúc lành nguyên vẹn.',
      'Thành phục vu hoàng, vật dụng sư, tự ấp cáo mệnh. Thành đổ vào hào, đừng dùng binh.'
    ]
  },
  11: {
    name: 'Thiên Địa Bĩ', han: '天地否', thuong: 0, ha: 7, hanh: 'Kim',
    thoanTu: 'Bĩ là bế tắc, thiên địa không giao. Tiểu nhân đạo trưởng, quân tử đạo tiêu.',
    haoTu: [
      'Bạt mao nhự, dĩ kỳ vựi, trinh cát hanh. Cùng loại giữ chính, đi lên tốt.',
      'Bao thừa, tiểu nhân cát. Đại nhân bĩ hanh. Kẻ tiểu nhân tốt, đại nhân bế tắc thông.',
      'Bao tu. Dung chứa sự xấu hổ mà không lộ ra ngoài.',
      'Hữu mệnh, vô cữu, trù ly chỉ. Có mệnh trời, không lỗi, đồng loại hưởng phúc.',
      'Hưu bĩ, đại nhân cát. Dừng bế tắc, người lớn được tốt lành.',
      'Khuynh bĩ, tiên bĩ hậu hỉ. Lật ngược bế tắc, trước buồn sau vui.'
    ]
  },
  12: {
    name: 'Thiên Hỏa Đồng Nhân', han: '天火同人', thuong: 0, ha: 2, hanh: 'Kim',
    thoanTu: 'Đồng nhân là hòa đồng với người. Đồng nhân vu dã, hanh, lợi thiệp đại xuyên, lợi quân tử trinh.',
    haoTu: [
      'Đồng nhân vu môn, vô cữu. Hòa đồng ngay từ cửa ra, không lỗi.',
      'Đồng nhân vu tông, lận. Chỉ hòa đồng trong tông tộc, hẹp hòi đáng tiếc.',
      'Phục nhung vu mãng, thăng kỳ cao lăng, tam tuế bất hưng. Phục kích trong bụi rậm, lâu năm không thành.',
      'Thừa kỳ dung, phất khắc công. Cát. Trèo lên tường không vượt được, quay lại tốt.',
      'Đồng nhân tiên hiệu khiêu nhi hậu tiếu, đại sư khắc tương ngộ. Trước khóc sau cười, gặp nhau vui.',
      'Đồng nhân vu giao, vô hối. Hòa đồng nơi đồng ngoại, không hối hận.'
    ]
  },
  13: {
    name: 'Hỏa Thiên Đại Hữu', han: '火天大有', thuong: 2, ha: 0, hanh: 'Hỏa',
    thoanTu: 'Đại hữu là sở hữu lớn, giàu có phong phú. Nguyên hanh. Trời giúp mọi người.',
    haoTu: [
      'Vô giao hại, phỉ cữu. Gian nan vô cữu. Không dây dưa với điều hại, không lỗi.',
      'Đại xa dĩ tải, hữu du vãng, vô cữu. Xe lớn chở được nhiều, đi xa không lỗi.',
      'Công dụng hanh vu thiên tử, tiểu nhân phất khắc. Dâng lên thiên tử, kẻ tiểu nhân không làm được.',
      'Phỉ kỳ bành, vô cữu. Không kiêu ngạo vì sung túc, không lỗi.',
      'Quyết dĩ giao như, uy như, cát. Thành tín giao tiếp mà có uy nghiêm, tốt lành.',
      'Tự thiên hựu chi, cát vô bất lợi. Trời phù hộ, tốt lành mọi mặt.'
    ]
  },
  14: {
    name: 'Địa Sơn Khiêm', han: '地山謙', thuong: 7, ha: 6, hanh: 'Thổ',
    thoanTu: 'Khiêm là khiêm tốn nhún nhường. Hanh, quân tử hữu chung. Khiêm nhường thì thành công.',
    haoTu: [
      'Khiêm khiêm quân tử, dụng thiệp đại xuyên, cát. Quân tử khiêm nhường, vượt qua thử thách lớn.',
      'Minh khiêm, trinh cát. Khiêm nhường lộ ra rõ ràng, giữ chính tốt lành.',
      'Lao khiêm quân tử, hữu chung cát. Khiêm nhường trong công lao, có kết quả tốt.',
      'Vô bất lợi, huy khiêm. Không gì bất lợi, phát huy khiêm tốn.',
      'Bất phú dĩ kỳ lân, lợi dụng xâm phạt. Không giàu hơn láng giềng, nên chinh phạt.',
      'Minh khiêm, lợi dụng hành sư, chinh ấp quốc. Khiêm tốn sáng suốt, dùng binh chinh phạt được.'
    ]
  },
  15: {
    name: 'Lôi Địa Dự', han: '雷地豫', thuong: 3, ha: 7, hanh: 'Mộc',
    thoanTu: 'Dự là vui mừng, thuận theo thời thế. Lợi kiến hầu hành sư. Thuận thời thế lập nên công.',
    haoTu: [
      'Minh dự, hung. Kêu vang vui mừng quá, hung hiểm.',
      'Giới vu thạch, bất chung nhật, trinh cát. Bền vững như đá, không suốt ngày đắm say, tốt.',
      'Vũ dự hối, trì hữu hối. Ngửa lên trời mà vui, chậm thì hối hận.',
      'Do dự, đại hữu đắc. Bằng hữu trâm trâm. Nguồn vui lớn, bạn bè đến nhiều.',
      'Trinh tật, hằng bất tử. Giữ chính trong bệnh tật, sẽ không chết.',
      'Minh dự thành, hữu du. Vô cữu. Đắm say lầm lạc, biết tỉnh ngộ thì không lỗi.'
    ]
  }
};

// ── Hexagrams 17–32 ──
Object.assign(QUE_DATA, {
  16: {
    name: 'Trạch Lôi Tùy', han: '澤雷隨', thuong: 1, ha: 3, hanh: 'Kim',
    thoanTu: 'Tùy là đi theo, thuận theo. Nguyên hanh lợi trinh, vô cữu. Thuận theo chính đạo thì thành.',
    haoTu: [
      'Quan hữu du, trinh cát. Xuất môn giao hữu công. Ra ngoài giao tiếp có công.',
      'Hệ tiểu tử, thất trượng phu. Theo trẻ nhỏ mà mất người trưởng thành.',
      'Hệ trượng phu, thất tiểu tử. Tùy hữu cầu đắc. Theo người lớn được điều mình cần.',
      'Tùy hữu hoạch, trinh hung. Hữu phu tại đạo dĩ minh, hà cữu. Đi theo có thu hoạch nhưng cần chính đạo.',
      'Phu vu gia, cát. Thành tín ở điều tốt, tốt lành.',
      'Câu hệ chi, nãi tùng duy chi, vương dụng hanh vu tây sơn. Trói buộc thân cận, dùng hanh thông ở núi tây.'
    ]
  },
  17: {
    name: 'Sơn Phong Cổ', han: '山風蠱', thuong: 6, ha: 4, hanh: 'Thổ',
    thoanTu: 'Cổ là việc sai hỏng cần sửa chữa. Nguyên hanh, lợi thiệp đại xuyên. Trước và sau giáp ba ngày.',
    haoTu: [
      'Cán phụ chi cổ, hữu tử, khảo vô cữu. Sửa việc sai của cha, có con nối tiếp, không lỗi.',
      'Cán mẫu chi cổ, bất khả trinh. Sửa việc sai của mẹ, không nên cứng nhắc.',
      'Cán phụ chi cổ, tiểu hữu hối, vô đại cữu. Sửa việc cha, chút hối tiếc nhưng không lỗi lớn.',
      'Dụ phụ chi cổ, vãng kiến lận. Tha thứ việc sai của cha, tiến lên gặp hối tiếc.',
      'Cán phụ chi cổ, dụng dự. Sửa việc cha với sự vui vẻ, được khen.',
      'Bất sự vương hầu, cao thượng kỳ sự. Không phục vụ vương hầu, chí hướng cao xa.'
    ]
  },
  18: {
    name: 'Địa Trạch Lâm', han: '地澤臨', thuong: 7, ha: 1, hanh: 'Thổ',
    thoanTu: 'Lâm là đến gần, trị lý. Nguyên hanh lợi trinh. Đến tháng tám có hung.',
    haoTu: [
      'Hàm lâm, trinh cát. Cảm hóa mà đến gần, giữ chính tốt lành.',
      'Hàm lâm, cát vô bất lợi. Cảm hóa đến gần, tốt mọi mặt.',
      'Cam lâm, vô du lợi. Đã ưu lo vô cữu. Đến gần ngọt ngào, không lợi, lo lắng không lỗi.',
      'Chí lâm, vô cữu. Đến gần đúng lúc, không lỗi.',
      'Tri lâm, đại quân chi nghi, cát. Đến gần bằng tri thức, đại nhân xứng đáng, tốt.',
      'Đôn lâm, cát vô cữu. Đến gần hậu hĩnh chân thành, tốt không lỗi.'
    ]
  },
  19: {
    name: 'Phong Địa Quan', han: '風地觀', thuong: 4, ha: 7, hanh: 'Mộc',
    thoanTu: 'Quan là nhìn ngắm, quan sát. Quán tẩy nhi bất tiến tự. Hữu phu nhược dung. Thành kính quan sát.',
    haoTu: [
      'Đồng quan, tiểu nhân vô cữu, quân tử lận. Quan sát trẻ con, tiểu nhân không sao, quân tử đáng tiếc.',
      'Khuy quan, lợi nữ trinh. Nhìn qua khe hẹp, chỉ lợi cho phụ nữ giữ chính.',
      'Quan ngã sinh, tiến thoái. Quan sát cuộc sống mình để quyết tiến thoái.',
      'Quan quốc chi quang, lợi dụng tân vu vương. Quan sát ánh sáng quốc gia, lợi làm khách của vua.',
      'Quan ngã sinh, quân tử vô cữu. Quan sát cuộc sống mình, quân tử không lỗi.',
      'Quan kỳ sinh, quân tử vô cữu. Quan sát sự sống của mọi người, quân tử không lỗi.'
    ]
  },
  20: {
    name: 'Hỏa Lôi Phệ Hạp', han: '火雷噬嗑', thuong: 2, ha: 3, hanh: 'Hỏa',
    thoanTu: 'Phệ hạp là cắn xé, quyết đoán. Hanh, lợi dụng ngục. Dùng hình pháp mới thông.',
    haoTu: [
      'Lý hiệu diệt chỉ, vô cữu. Chân bị mang cùm, không lỗi — ngăn sai lầm sớm.',
      'Phệ phu diệt tỵ, vô cữu. Cắn qua da thịt đến mũi, không lỗi.',
      'Phệ tích nhục ngộ độc, tiểu lận, vô cữu. Cắn phải thịt ươn gặp độc, tiểu tiếc không lỗi.',
      'Phệ càn tư, đắc kim thỉ, lợi trinh lệ, cát. Cắn xương khô được mũi tên đồng, gian khó tốt.',
      'Phệ càn nhục, đắc hoàng kim, trinh lệ, vô cữu. Cắn thịt khô được vàng, giữ chính không lỗi.',
      'Hà hiệu diệt nhĩ, hung. Mang cùm đến tai, hung — tội nặng hình nặng.'
    ]
  },
  21: {
    name: 'Sơn Hỏa Bí', han: '山火賁', thuong: 6, ha: 2, hanh: 'Thổ',
    thoanTu: 'Bí là văn vẻ trang sức, tô điểm. Hanh, tiểu lợi hữu du vãng. Vẻ đẹp bên ngoài hỗ trợ thực chất.',
    haoTu: [
      'Bí kỳ chỉ, xả xa nhi đồ. Trang sức bàn chân, bỏ xe đi bộ.',
      'Bí kỳ tu. Trang sức bộ râu theo mặt mà động.',
      'Bí như nhu như, vĩnh trinh cát. Trang sức ướt đẫm, giữ chính lâu dài, tốt.',
      'Bí như bà như, bạch mã hàn như, phỉ khấu hôn cấu. Trang sức trắng trẻo, ngựa trắng phi nhanh.',
      'Bí vu khâu viên, thúc bạch tất tiểu, lận, chung cát. Trang sức vườn núi nhỏ bé, hối tiếc nhưng cuối tốt.',
      'Bạch bí, vô cữu. Giản dị trắng tinh, không lỗi — chất phác hơn vẻ ngoài.'
    ]
  },
  22: {
    name: 'Sơn Địa Bác', han: '山地剝', thuong: 6, ha: 7, hanh: 'Thổ',
    thoanTu: 'Bác là bong tróc, tiêu tan. Bất lợi hữu du vãng. Tiểu nhân lớn mạnh, quân tử lui.',
    haoTu: [
      'Bác sàng dĩ túc, miệt trinh hung. Giường bị gọt từ chân, tiêu diệt chính đạo, hung.',
      'Bác sàng dĩ biện, miệt trinh hung. Giường bị gọt đến khung, hung.',
      'Bác chi, vô cữu. Bị bóc lột mà không lỗi — ở giữa phải theo thời.',
      'Bác sàng dĩ phu, hung. Giường bị gọt đến da thịt, rất hung.',
      'Quán ngư, dĩ cung nhân sủng, vô bất lợi. Cung thị như cá, được ân sủng, không gì bất lợi.',
      'Thạc quả bất thực, quân tử đắc dư, tiểu nhân bác lư. Quả to còn lại, quân tử được xe, tiểu nhân mất nhà.'
    ]
  },
  23: {
    name: 'Địa Lôi Phục', han: '地雷復', thuong: 7, ha: 3, hanh: 'Thổ',
    thoanTu: 'Phục là quay trở lại, phục hồi. Hanh, xuất nhập vô tật, bằng lai vô cữu. Dương khí phục hồi.',
    haoTu: [
      'Bất viễn phục, vô đê hối, nguyên cát. Quay lại không xa, không hối tiếc, đại cát.',
      'Hưu phục, cát. Quay lại đẹp đẽ, tốt lành.',
      'Tần phục, lệ vô cữu. Quay lại nhiều lần, nguy hiểm nhưng không lỗi.',
      'Trung hành độc phục. Đi giữa mà quay lại một mình, theo chính đạo.',
      'Đôn phục, vô hối. Hậu hĩnh quay lại, không hối hận.',
      'Mê phục, hung, hữu tai sảnh. Mê lầm không chịu quay lại, hung, có tai họa.'
    ]
  },
  24: {
    name: 'Thiên Lôi Vô Vọng', han: '天雷無妄', thuong: 0, ha: 3, hanh: 'Kim',
    thoanTu: 'Vô vọng là không vọng động, thuận theo tự nhiên. Nguyên hanh lợi trinh, kỳ phỉ chính hữu sảnh.',
    haoTu: [
      'Vô vọng vãng, cát. Không vọng động mà đi tới, tốt lành.',
      'Bất canh hoạch, bất tư úc, tắc lợi hữu du vãng. Không gặt mà cày, không khai khẩn mà gieo.',
      'Vô vọng chi tai, hoặc hệ chi ngưu. Tai họa không ngờ đến.',
      'Khả trinh, vô cữu. Giữ được chính, không lỗi.',
      'Vô vọng chi tật, vật dược, hữu hỉ. Bệnh không do vọng động, không cần thuốc tự khỏi.',
      'Vô vọng hành, hữu sảnh, vô du lợi. Hành động vọng động, có tai họa, không lợi gì.'
    ]
  },
  25: {
    name: 'Sơn Thiên Đại Súc', han: '山天大畜', thuong: 6, ha: 0, hanh: 'Thổ',
    thoanTu: 'Đại súc là tích lũy lớn, ngăn giữ. Lợi trinh, bất gia thực cát, lợi thiệp đại xuyên.',
    haoTu: [
      'Hữu lệ lợi dĩ. Có nguy nên dừng lại, không tiến.',
      'Dư thoát phúc. Xe gãy trục, không thể tiến được.',
      'Lương mã trục, lợi gian trinh. Nhật nhàn dư vệ, lợi hữu du vãng. Ngựa tốt đuổi theo, lợi gian khổ.',
      'Đồng ngưu chi cốc, nguyên cát. Dùng thanh gỗ ngăn bò, đại cát.',
      'Phần thỉ chi nha, cát. Bịt ngà heo lại, tốt lành.',
      'Hà thiên chi cù, hanh. Đường trời rộng mở, thông hanh.'
    ]
  },
  26: {
    name: 'Sơn Lôi Di', han: '山雷頤', thuong: 6, ha: 3, hanh: 'Thổ',
    thoanTu: 'Di là nuôi dưỡng, dưỡng chính. Trinh cát, quan di, tự cầu khẩu thực. Nuôi dưỡng chính đạo.',
    haoTu: [
      'Xả nhĩ linh quy, quan ngã trúc di, hung. Bỏ rùa thần, nhìn ta nhai, hung.',
      'Điên di, phất kinh vu khâu di. Chinh hung. Lật ngược nuôi dưỡng, cầu ăn trên đồi, hung.',
      'Phất di, trinh hung. Thập niên vật dụng, vô du lợi. Trái đạo dưỡng, mười năm không dùng.',
      'Điên di, cát. Hổ thị đam đam, kỳ dục trục trục. Vô cữu. Lật ngược nuôi, hung như hổ nhìn.',
      'Phất kinh vu thường. Cư trinh cát. Bất khả thiệp đại xuyên. Ở yên giữ chính tốt.',
      'Do di, lệ cát, lợi thiệp đại xuyên. Nguồn gốc nuôi dưỡng, nguy mà tốt, lợi vượt đại xuyên.'
    ]
  },
  27: {
    name: 'Trạch Phong Đại Quá', han: '澤風大過', thuong: 1, ha: 4, hanh: 'Kim',
    thoanTu: 'Đại quá là vượt quá độ lớn. Đống nạo, lợi hữu du vãng, hanh. Đòn nóc uốn cong cần chống đỡ.',
    haoTu: [
      'Tạ dụng bạch mao, vô cữu. Dùng cỏ trắng lót dưới, cẩn thận không lỗi.',
      'Khô dương sinh đế, lão phu đắc kỳ nữ thê, vô bất lợi. Liễu khô đâm chồi, ông già lấy vợ trẻ.',
      'Đống nạo, hung. Đòn nóc uốn cong, hung nguy.',
      'Đống long, cát. Hữu tha lận. Đòn nóc vững chắc, tốt nhưng có điều tiếc.',
      'Khô dương sinh hoa, lão phụ đắc kỳ sĩ phu. Vô cữu vô dự. Liễu khô ra hoa, bà già lấy chồng trẻ.',
      'Quá thiệp diệt đỉnh, hung, vô cữu. Lội nước ngập đỉnh đầu, hung nhưng không lỗi ý.'
    ]
  },
  28: {
    name: 'Thuần Khảm', han: '坎為水', thuong: 5, ha: 5, hanh: 'Thủy',
    thoanTu: 'Thuần Khảm là nước chồng nước, hiểm nguy. Hữu phu duy tâm hanh, hành hữu thượng.',
    haoTu: [
      'Tập khảm, nhập vu khảm hạm, hung. Hiểm nguy chồng chất, sa vào hố sâu, hung.',
      'Khảm hữu hiểm, cầu tiểu đắc. Trong nguy có chút thu hoạch nhỏ.',
      'Lai chi khảm khảm, hiểm thả chẩm, nhập vu khảm hạm. Đến đi đều hiểm nguy, sa vào bẫy.',
      'Tôn tửu quẫn nhị dụng phẫu, nạp ước tự dũng. Hữu chung vô cữu. Rượu đơn giản mộc mạc, thành tín không lỗi.',
      'Khảm bất doanh, đã bình, vô cữu. Nước không tràn, bình lặng dần, không lỗi.',
      'Hệ dụng huy mặc, trí vu tùng tức, tam tuế bất đắc, hung. Trói buộc trong gai góc, lâu năm không thoát.'
    ]
  },
  29: {
    name: 'Thuần Ly', han: '離為火', thuong: 2, ha: 2, hanh: 'Hỏa',
    thoanTu: 'Thuần Ly là lửa chồng lửa, sáng rực. Lợi trinh hanh, súc tẫn ngưu cát. Nương tựa chính đạo.',
    haoTu: [
      'Lý thác nhiên, kính chi, vô cữu. Bước đi lộn xộn, kính cẩn không lỗi.',
      'Hoàng ly, nguyên cát. Lửa vàng trung chính, đại cát.',
      'Nhật trắc chi ly, bất cổ phữu nhi ca, tắc đại điệt chi ta, hung. Chiều tà lửa tắt, buồn thương hung.',
      'Đột như kỳ lai như, phần như tử như khí như. Đột nhiên đến rồi đi, cháy như chết như bỏ.',
      'Xuất thế thế nhược, thê ta nhược, cát. Ra nước mắt ướt đẫm, thương khóc, tốt.',
      'Vương dụng xuất chinh, hữu gia, chiết thủ, hoạch phỉ kỳ xú. Vua dùng binh có ích, chém đầu bắt thù.'
    ]
  },
  30: {
    name: 'Trạch Sơn Hàm', han: '澤山咸', thuong: 1, ha: 6, hanh: 'Kim',
    thoanTu: 'Hàm là cảm ứng, nam nữ giao cảm. Hanh lợi trinh, thủ nữ cát. Cảm ứng chân thành.',
    haoTu: [
      'Hàm kỳ mẫu. Cảm ứng ở ngón chân cái, chí mới manh nha.',
      'Hàm kỳ phỉ, hung. Cư cát. Cảm ứng ở bắp chân, hung, ở yên thì tốt.',
      'Hàm kỳ cổ, chấp kỳ tùy, vãng lận. Cảm ứng đùi, bám vào đi theo, tiến thì hối tiếc.',
      'Trinh cát hối vong. Thông cảm liên tục, giữ chính tốt, hối hận tiêu tan.',
      'Hàm kỳ mai, vô hối. Cảm ứng ở lưng, không hối hận — tâm không xao động.',
      'Hàm kỳ phụ giáp thiệt. Cảm ứng bằng gò má miệng lưỡi, nói suông không chân thực.'
    ]
  },
  31: {
    name: 'Lôi Phong Hằng', han: '雷風恆', thuong: 3, ha: 4, hanh: 'Mộc',
    thoanTu: 'Hằng là lâu dài, kiên trì. Hanh vô cữu lợi trinh, lợi hữu du vãng. Kiên định lâu dài.',
    haoTu: [
      'Tuấn hằng, trinh hung, vô du lợi. Cầu hằng quá vội, giữ chính cũng hung.',
      'Hối vong. Hối hận tiêu tan, ở đúng vị trí.',
      'Bất hằng kỳ đức, hoặc thừa chi tu, trinh lận. Không giữ đức lâu dài, có xấu hổ.',
      'Điền vô cầm. Ra đồng không săn được thú — không đúng chỗ.',
      'Hằng kỳ đức, trinh phụ nhân cát, phu tử hung. Bền vững đức hạnh, vợ tốt chồng hung.',
      'Chấn hằng, hung. Kiên trì trong chấn động, hung — không biết thay đổi.'
    ]
  }
});

// ── Hexagrams 33–48 ──
Object.assign(QUE_DATA, {
  32: {
    name: 'Thiên Sơn Độn', han: '天山遯', thuong: 0, ha: 6, hanh: 'Kim',
    thoanTu: 'Độn là ẩn lui, thoái ẩn. Hanh, tiểu lợi trinh. Thời thế bất lợi, quân tử biết lui.',
    haoTu: [
      'Độn vĩ, lệ, vật dụng hữu du vãng. Đuôi ẩn lui nguy hiểm, không nên đi đâu.',
      'Chấp chi dụng hoàng ngưu chi cách, mạc chi thắng thuyết. Giữ vững bằng da bò vàng, không ai tháo được.',
      'Hệ độn, hữu tật lệ. Súc thần thiếp cát. Ẩn lui bị ràng buộc, nguy hiểm, giữ tôi tớ tốt.',
      'Hiếu độn, quân tử cát, tiểu nhân phủ. Tự nguyện ẩn lui, quân tử tốt, tiểu nhân không.',
      'Gia độn, trinh cát. Ẩn lui đẹp đẽ, giữ chính tốt lành.',
      'Phì độn, vô bất lợi. Ẩn lui béo tốt đầy đủ, không gì bất lợi.'
    ]
  },
  33: {
    name: 'Lôi Thiên Đại Tráng', han: '雷天大壯', thuong: 3, ha: 0, hanh: 'Mộc',
    thoanTu: 'Đại tráng là mạnh lớn, dương khí cường thịnh. Lợi trinh. Mạnh phải đi kèm chính đạo.',
    haoTu: [
      'Tráng vu chỉ, chinh hung, hữu phu. Mạnh ở bàn chân, tiến hung có thành tín.',
      'Trinh cát. Giữ chính thì tốt, ở vị trí trung chính.',
      'Tiểu nhân dụng tráng, quân tử dụng võng. Trinh lệ. Dê húc hàng rào mắc sừng, hung.',
      'Trinh cát hối vong. Phiên quyết bất lý, tráng vu đại dư chi phúc. Hàng rào thủng xe đi được.',
      'Táng dương vu dị, vô hối. Mất dê ở cánh đồng, không hối hận — chủ động.',
      'Dê húc hàng rào không tiến không lùi được, vô du lợi. Gian nan cuối cát.'
    ]
  },
  34: {
    name: 'Hỏa Địa Tấn', han: '火地晉', thuong: 2, ha: 7, hanh: 'Hỏa',
    thoanTu: 'Tấn là tiến lên, mặt trời mọc chiếu sáng. Khang hầu dụng tích mã phồn thứ, trú nhật tam tiếp.',
    haoTu: [
      'Tấn như thôi như, trinh cát. Võng phu, dụ, vô cữu. Tiến lên bị cản, giữ chính tốt, không lỗi.',
      'Tấn như sầu như, trinh cát. Thụ tư giới phúc vu kỳ vương mẫu. Tiến với lo âu, nhận phúc từ vương mẫu.',
      'Chúng doãn, hối vong. Được mọi người tin tưởng, hối hận tiêu tan.',
      'Tấn như thạc thử, trinh lệ. Tiến như con chuột to, giữ chính trong nguy.',
      'Hối vong, thất đắc vật tuất, vãng cát vô bất lợi. Không lo được mất, đi tới tốt.',
      'Tấn kỳ giác, duy dụng phạt ấp. Lệ cát vô cữu, trinh lận. Tiến đến cùng tận, dùng để chinh phạt.'
    ]
  },
  35: {
    name: 'Địa Hỏa Minh Di', han: '地火明夷', thuong: 7, ha: 2, hanh: 'Thổ',
    thoanTu: 'Minh di là ánh sáng bị che khuất. Lợi gian trinh. Ẩn nhẫn trong thời loạn.',
    haoTu: [
      'Minh di vu phi, thùy kỳ dực. Quân tử vu hành, tam nhật bất thực. Chim bay bị tổn thương, nhịn đói.',
      'Minh di, di vu tả cổ. Dụng chửng mã tráng, cát. Tổn thương ở đùi trái, ngựa mạnh cứu.',
      'Minh di vu nam thú, đắc kỳ đại thủ. Bất khả trinh tật. Săn ở phía nam bắt thủ lĩnh.',
      'Nhập vu tả phúc, hoạch minh di chi tâm, xuất vu môn đình. Vào bụng trái bắt tim của minh di.',
      'Cơ tử chi minh di, lợi trinh. Như Cơ Tử ẩn mình, giữ chính mà sống.',
      'Bất minh hối, sơ đăng vu thiên, hậu nhập vu địa. Không sáng suốt mà tối tăm, trước lên trời sau xuống đất.'
    ]
  },
  36: {
    name: 'Phong Hỏa Gia Nhân', han: '風火家人', thuong: 4, ha: 2, hanh: 'Mộc',
    thoanTu: 'Gia nhân là người trong nhà, gia đình. Lợi nữ trinh. Chính đạo trong nhà thì ngoài nước cũng chính.',
    haoTu: [
      'Nhàn hữu gia, hối vong. Ngăn ngừa sớm trong nhà, hối hận tiêu tan.',
      'Vô du toại, tại trung quỹ, trinh cát. Không cầu ngoài, ở trong lo việc cơm nước, tốt.',
      'Gia nhân hác hác, hối lệ cát. Phụ nữ tử tiếu tiếu, chung lận. Nghiêm khắc trong nhà tốt.',
      'Phú gia, đại cát. Gia đình sung túc, đại cát.',
      'Vương giả hữu gia, vật tuất, cát. Vua có gia đình tốt, không lo lắng, tốt.',
      'Hữu phu uy như, chung cát. Thành tín uy nghiêm, cuối cùng tốt lành.'
    ]
  },
  37: {
    name: 'Hỏa Trạch Khuê', han: '火澤睽', thuong: 2, ha: 1, hanh: 'Hỏa',
    thoanTu: 'Khuê là trái nghịch, mâu thuẫn. Tiểu sự cát. Trong sự phân kỳ tìm điểm chung.',
    haoTu: [
      'Hối vong, táng mã vật trục, tự phục. Kiến ác nhân, vô cữu. Mất ngựa tự trở về, gặp kẻ xấu không lỗi.',
      'Ngộ chủ vu hạng, vô cữu. Gặp chủ ở ngõ hẻm, không chính thức nhưng không lỗi.',
      'Kiến dư duệ, kỳ ngưu hệ, kỳ nhân thiên thả tị. Xe lún bùn, bò bị buộc, người bị xăm.',
      'Khuê cô, ngộ nguyên phu, giao phu, lệ vô cữu. Cô đơn gặp người tốt, giao tiếp không lỗi.',
      'Hối vong, quyết tông phệ phu. Vãng hà cữu. Hối hận tiêu, cắn da tổ tiên, đi không lỗi.',
      'Khuê cô, kiến thỉ phụ đồ tải quỷ. Tiên trương chi cô, hậu duyệt chi cát. Trước ngờ sau mừng, kết hôn.'
    ]
  },
  38: {
    name: 'Thủy Sơn Kiển', han: '水山蹇', thuong: 5, ha: 6, hanh: 'Thủy',
    thoanTu: 'Kiển là đi khó khăn, trở ngại. Lợi tây nam, bất lợi đông bắc. Lợi kiến đại nhân, trinh cát.',
    haoTu: [
      'Vãng kiển, lai dự. Đi thì khó, quay lại thì được khen.',
      'Vương thần kiển kiển, phỉ cung chi cố. Bề tôi khó khăn chồng chất, vì chủ mà vậy.',
      'Vãng kiển, lai phản. Đi thì khó, nên quay lại.',
      'Vãng kiển, lai liên. Đi khó, đến được thì kết nối bạn bè.',
      'Đại kiển, bằng lai. Khó khăn lớn, bạn bè đến giúp.',
      'Vãng kiển, lai thạc, cát. Lợi kiến đại nhân. Đi khó, về được nguyên vẹn lớn, tốt.'
    ]
  },
  39: {
    name: 'Lôi Thủy Giải', han: '雷水解', thuong: 3, ha: 5, hanh: 'Mộc',
    thoanTu: 'Giải là giải thoát, tháo gỡ. Lợi tây nam. Vô du vãng, kỳ lai phục cát. Giải trừ trở ngại.',
    haoTu: [
      'Vô cữu. Không lỗi, thoát khỏi khó khăn bình an.',
      'Điền hoạch tam hồ, đắc hoàng thỉ, trinh cát. Săn được ba con cáo, được mũi tên vàng, tốt.',
      'Phụ thả thừa, trí khấu chí, trinh lận. Cõng người mà còn đi xe, tự chuốc trộm đến.',
      'Giải nhi mẫu, bằng chí tư phu. Tháo gỡ ngón tay cái, bạn bè đến thành tâm.',
      'Quân tử duy hữu giải, cát. Hữu phu vu tiểu nhân. Quân tử tự giải phóng, tốt.',
      'Công dụng xạ tuấn vu cao dung chi thượng, hoạch chi, vô bất lợi. Bắn chim trên tường cao, không gì bất lợi.'
    ]
  },
  40: {
    name: 'Sơn Trạch Tổn', han: '山澤損', thuong: 6, ha: 1, hanh: 'Thổ',
    thoanTu: 'Tổn là tổn giảm, bớt đi. Hữu phu, nguyên cát, vô cữu, khả trinh. Tổn dưới ích trên.',
    haoTu: [
      'Dĩ sự tốc vãng, vô cữu. Chước tổn chi. Lo xong việc thì đi, không lỗi, giảm bớt.',
      'Lợi trinh, chinh hung. Phất tổn, ích chi. Giữ chính lợi, tiến hung, không giảm thì có ích.',
      'Tam nhân hành tắc tổn nhất nhân, nhất nhân hành tắc đắc kỳ hữu. Ba người giảm một, một người được bạn.',
      'Tổn kỳ tật, sử thức hữu hỉ. Vô cữu. Bớt đi bệnh tật, mau có vui mừng, không lỗi.',
      'Hoặc ích chi thập bằng chi quy, phất khắc vi. Nguyên cát. Được rùa mười bằng, không từ chối, đại cát.',
      'Phất tổn ích chi, vô cữu. Trinh cát. Lợi hữu du vãng. Không giảm mà tăng, không lỗi, lợi đi.'
    ]
  },
  41: {
    name: 'Phong Lôi Ích', han: '風雷益', thuong: 4, ha: 3, hanh: 'Mộc',
    thoanTu: 'Ích là tăng thêm, ích lợi. Lợi hữu du vãng, lợi thiệp đại xuyên. Tổn trên ích dưới.',
    haoTu: [
      'Lợi dụng vi đại tác, nguyên cát, vô cữu. Lợi làm việc lớn, đại cát không lỗi.',
      'Hoặc ích chi thập bằng chi quy, phất khắc vi. Vĩnh trinh cát. Được rùa mười bằng, vĩnh viễn tốt.',
      'Ích chi dụng hung sự, vô cữu. Hữu phu trung hành, cáo công dụng khuê. Làm việc xấu mà có ích, không lỗi.',
      'Trung hành cáo công tùng. Lợi dụng vi y thiên quốc. Ở giữa báo công được nghe theo, lợi dời đô.',
      'Hữu phu huệ tâm, vật vấn nguyên cát. Hữu phu huệ ngã đức. Thành tín lòng nhân, đại cát.',
      'Mạc ích chi, hoặc kích chi. Lập tâm vật hằng, hung. Không ai giúp còn bị đánh, tâm không bền hung.'
    ]
  },
  42: {
    name: 'Trạch Thiên Quải', han: '澤天夬', thuong: 1, ha: 0, hanh: 'Kim',
    thoanTu: 'Quải là quyết đoán, phá bỏ. Dương quyết trừ âm. Dương vu vương đình, phu hào hữu lệ.',
    haoTu: [
      'Tráng vu tiền chỉ, vãng bất thắng vi cữu. Mạnh ở ngón chân trước, đi không thắng thành lỗi.',
      'Lệ, mạc dạ hữu nhung, vật tuất. Nguy hiểm, đêm khuya có binh, không lo.',
      'Tráng vu chuẩn, hữu hung. Quân tử quải quải, độc hành ngộ vũ. Mạnh ở gò má, quân tử kiên quyết.',
      'Đồn vô phu, kỳ hành thứ thả. Khiên dương hối vong, văn ngôn bất tín. Đùi mông không thịt, đi khó khăn.',
      'Hiển lục, quải quải trung hành, vô cữu. Phát hiện kẻ xấu, quyết đoán trung chính không lỗi.',
      'Vô hào, chung hữu hung. Không tiếng gào thét, cuối cùng hung.'
    ]
  },
  43: {
    name: 'Thiên Phong Cấu', han: '天風姤', thuong: 0, ha: 4, hanh: 'Kim',
    thoanTu: 'Cấu là gặp gỡ ngẫu nhiên, nữ mạnh gặp nam. Nữ tráng, vật dụng thủ nữ. Âm khởi gặp dương.',
    haoTu: [
      'Hệ vu kim nị, trinh cát. Hữu du vãng, kiến hung. Phong ngao tư phu. Trói bằng nị vàng, không đi.',
      'Bao hữu ngư, vô cữu, bất lợi tân. Trong bọc có cá, không lỗi nhưng không lợi cho khách.',
      'Đồn vô phu, kỳ hành thứ thả, lệ, vô đại cữu. Đùi không thịt đi khó, nguy không lỗi lớn.',
      'Bao vô ngư, khởi hung. Bọc không có cá, sinh ra hung họa.',
      'Dĩ kỳ bao qua, hàm chương, hữu vẫn tự thiên. Dùng cây bầu vàng, chứa vẻ đẹp, tốt đẹp từ trời.',
      'Cấu kỳ giác, lận, vô cữu. Gặp ở sừng, hối tiếc nhưng không lỗi.'
    ]
  },
  44: {
    name: 'Trạch Địa Tụy', han: '澤地萃', thuong: 1, ha: 7, hanh: 'Kim',
    thoanTu: 'Tụy là tụ hội, quy tụ. Hanh, vương giả hữu miếu. Lợi kiến đại nhân, hanh lợi trinh.',
    haoTu: [
      'Hữu phu bất chung, nãi loạn nãi tụy. Nhược hào, nhất ác vi tiếu, vật tuất, vãng vô cữu. Thành tín không vững thì loạn.',
      'Dẫn cát, vô cữu. Phu nãi lợi dụng thược. Được dẫn dắt tốt, dùng lễ vật nhỏ cũng được.',
      'Tụy như ta như, vô du lợi. Vãng vô cữu, tiểu lận. Tụ họp mà than thở, đi không lỗi, hơi tiếc.',
      'Đại cát, vô cữu. Tụ hội lớn tốt đẹp, không lỗi.',
      'Tụy hữu vị, vô cữu. Phỉ phu. Nguyên vĩnh trinh, hối vong. Tụ họp có vị thế, không lỗi.',
      'Tư chư thế thế, vô cữu. Than khóc thở dài, không lỗi.'
    ]
  },
  45: {
    name: 'Địa Phong Thăng', han: '地風升', thuong: 7, ha: 4, hanh: 'Thổ',
    thoanTu: 'Thăng là thăng lên, tiến lên. Nguyên hanh, dụng kiến đại nhân, vật tuất, nam chinh cát.',
    haoTu: [
      'Doãn thăng, đại cát. Được phép thăng lên, đại cát.',
      'Phu nãi lợi dụng thược, vô cữu. Thành tín dùng lễ vật nhỏ cũng không lỗi.',
      'Thăng hư ấp. Thăng lên vào đất trống, không trở ngại.',
      'Vương dụng hanh vu kỳ sơn, cát, vô cữu. Vua dùng hanh thông ở núi Kỳ, tốt.',
      'Trinh cát, thăng giai. Giữ chính tốt, thăng lên từng bậc.',
      'Minh thăng, lợi vu bất tức chi trinh. Thăng lên trong tối, lợi không ngừng giữ chính.'
    ]
  },
  46: {
    name: 'Trạch Thủy Khốn', han: '澤水困', thuong: 1, ha: 5, hanh: 'Kim',
    thoanTu: 'Khốn là khốn khó, bế tắc. Hanh, trinh, đại nhân cát, vô cữu. Hữu ngôn bất tín.',
    haoTu: [
      'Đồn khốn vu chu mộc, nhập vu u cốc, tam tuế bất địch. Khốn trong bụi gai, vào hang tối ba năm.',
      'Khốn vu tửu thực, chu phất phương lai. Lợi dụng hưởng tự. Chinh hung vô cữu. Khốn trong rượu thịt, tế lễ lợi.',
      'Khốn vu thạch, cứ vu tật lê. Nhập vu kỳ cung, bất kiến kỳ thê. Hung. Khốn ở đá gai góc, về nhà không thấy vợ.',
      'Lai từ từ, khốn vu kim xa. Lận, hữu chung. Đến chậm chạp, xe vàng bị tắc, hối tiếc nhưng có kết.',
      'Tị thoát, khốn vu xích phất. Nãi từ từ hữu thuyết. Lợi dụng tế tự. Bị cắt mũi bị chặt chân, dần dần được thoát.',
      'Khốn vu cát lũy, vu thiếp diểu. Viết động hối, hữu hối, chinh cát. Khốn ở gai leo, biết ăn năn tiến tốt.'
    ]
  },
  47: {
    name: 'Thủy Phong Tỉnh', han: '水風井', thuong: 5, ha: 4, hanh: 'Thủy',
    thoanTu: 'Tỉnh là giếng nước, nguồn nuôi dưỡng không cạn. Cải ấp bất cải tỉnh. Dân cần giếng.',
    haoTu: [
      'Tỉnh nê bất thực, cựu tỉnh vô cầm. Giếng bùn không dùng được, không ai tới.',
      'Tỉnh cốc xạ phụ, ông tế lậu. Giếng trong có cá nhỏ, bình cũ bị rò rỉ.',
      'Tỉnh kiệt bất thực, vi ngã tâm trắc. Khả dụng cấp. Vương minh, tịnh thụ kỳ phúc. Giếng đã khai thông nhưng chưa dùng.',
      'Tỉnh thục, vô cữu. Giếng được lát gạch, không lỗi.',
      'Tỉnh liệt hàn tuyền thực. Giếng trong suốt nước lạnh dùng được.',
      'Tỉnh thu vật mạc, hữu phu nguyên cát. Giếng kín không đổ ra, thành tín đại cát.'
    ]
  }
});

// ── Hexagrams 49–64 ──
Object.assign(QUE_DATA, {
  48: {
    name: 'Trạch Hỏa Cách', han: '澤火革', thuong: 1, ha: 2, hanh: 'Kim',
    thoanTu: 'Cách là biến đổi, cách mạng. Kỷ nhật nãi phu, nguyên hanh lợi trinh, hối vong.',
    haoTu: [
      'Củng dụng hoàng ngưu chi cách. Dùng da bò vàng ràng buộc, chưa thay đổi vội.',
      'Kỷ nhật nãi cách chi, chinh cát, vô cữu. Đúng ngày mới cách, tiến tốt không lỗi.',
      'Chinh hung, trinh lệ. Cách ngôn tam tựu, hữu phu. Tiến hung, nói cải cách ba lần thành tín.',
      'Hối vong, hữu phu cải mệnh, cát. Hối hận tiêu, thành tín cải cách mệnh trời, tốt.',
      'Đại nhân hổ biến, vị chiếm hữu phu. Đại nhân thay đổi như hổ, chưa bói đã thành tín.',
      'Quân tử báo biến, tiểu nhân cách diện. Chinh hung, cư trinh cát. Quân tử đổi nhỏ, tiểu nhân đổi mặt.'
    ]
  },
  49: {
    name: 'Hỏa Phong Đỉnh', han: '火風鼎', thuong: 2, ha: 4, hanh: 'Hỏa',
    thoanTu: 'Đỉnh là vạc lớn, nấu nướng nuôi dưỡng hiền tài. Nguyên cát hanh. Đỉnh là tượng của văn minh.',
    haoTu: [
      'Đỉnh điên chỉ, lợi xuất bĩ. Đắc thiếp dĩ kỳ tử, vô cữu. Lật đỉnh đổ ra, tẩy rửa sạch, không lỗi.',
      'Đỉnh hữu thực, ngã cừu hữu tật, bất ngã năng tức. Cát. Đỉnh đầy thức ăn, kẻ thù không hại được.',
      'Đỉnh nhĩ cách, kỳ hành tắc, trĩ cao bất thực. Vạc bị gãy tai, mất miếng thịt phéo, đáng tiếc.',
      'Đỉnh chiết túc, phúc công tốc, kỳ hình ốc, hung. Chân vạc gãy, đổ thức ăn vua, hung.',
      'Đỉnh hoàng nhĩ kim huyện, lợi trinh. Vạc tai vàng cán vàng, lợi giữ chính.',
      'Đỉnh ngọc huyện, đại cát, vô bất lợi. Cán ngọc, đại cát mọi điều đều lợi.'
    ]
  },
  50: {
    name: 'Thuần Chấn', han: '震為雷', thuong: 3, ha: 3, hanh: 'Mộc',
    thoanTu: 'Thuần Chấn là sấm sét chồng chất, kinh sợ. Hanh. Chấn lai hích hích, tiếu ngôn á á.',
    haoTu: [
      'Chấn lai hích hích, hậu tiếu ngôn á á, cát. Sấm đến kinh hãi, sau cười nói vui, tốt.',
      'Chấn lai lệ, ức táng bối, thê vu cửu lăng, vật trục, thất nhật đắc. Sấm nguy mất tiền, sau bảy ngày tìm lại.',
      'Chấn tô tô, chấn hành vô sảnh. Sấm dồn dập lo âu, đi không tai họa.',
      'Chấn toại nê. Sấm sa vào bùn, không thể tiến lên.',
      'Chấn vãng lai lệ, ức vô táng hữu sự. Sấm qua lại nguy, không mất có việc.',
      'Chấn sách sách, thị quắc quắc, chinh hung. Sấm run rẩy nhìn sợ hãi, tiến hung.'
    ]
  },
  51: {
    name: 'Thuần Cấn', han: '艮為山', thuong: 6, ha: 6, hanh: 'Thổ',
    thoanTu: 'Thuần Cấn là núi chồng núi, dừng lại. Cấn kỳ bối, bất hoạch kỳ thân, hành kỳ đình, bất kiến kỳ nhân.',
    haoTu: [
      'Cấn kỳ chỉ, vô cữu, lợi vĩnh trinh. Dừng lại ở ngón chân, không lỗi, lợi giữ chính lâu dài.',
      'Cấn kỳ phỉ, bất chửng kỳ tùy, kỳ tâm bất khoái. Dừng ở bắp chân, không cứu theo, lòng không vui.',
      'Cấn kỳ hạn, liệt kỳ dẫn, lệ huân tâm. Dừng ở lưng dưới, xé rách liên sườn, nguy hun tim.',
      'Cấn kỳ thân, vô cữu. Dừng lại ở thân, không lỗi.',
      'Cấn kỳ phụ, ngôn hữu tự, hối vong. Dừng ở gò má, nói có trật tự, hối hận tiêu.',
      'Đôn cấn, cát. Dừng lại hậu hĩnh chân thành, tốt lành.'
    ]
  },
  52: {
    name: 'Phong Sơn Tiệm', han: '風山漸', thuong: 4, ha: 6, hanh: 'Mộc',
    thoanTu: 'Tiệm là tiến dần dần, tuần tự. Nữ quy cát, lợi trinh. Tiến từng bước vững chắc.',
    haoTu: [
      'Hồng tiệm vu can, tiểu tử lệ, hữu ngôn vô cữu. Nhạn đến bờ nước, con nhỏ nguy, có lời không lỗi.',
      'Hồng tiệm vu bàn, ẩm thực khản khản, cát. Nhạn đến bàn thạch, ăn uống no đủ, tốt.',
      'Hồng tiệm vu lục, phu chinh bất phục, phụ dựng bất dục. Hung. Lợi ngự khấu. Nhạn đến gò đất, hung.',
      'Hồng tiệm vu mộc, hoặc đắc kỳ giác, vô cữu. Nhạn đến cây, tìm được chỗ bằng, không lỗi.',
      'Hồng tiệm vu lăng, phụ tam tuế bất dựng, chung mạc chi thắng, cát. Nhạn đến gò cao, cuối tốt.',
      'Hồng tiệm vu lục, kỳ vũ khả dụng vi nghi, cát. Nhạn đến mây, lông dùng làm lễ nghi, tốt.'
    ]
  },
  53: {
    name: 'Lôi Trạch Quy Muội', han: '雷澤歸妹', thuong: 3, ha: 1, hanh: 'Mộc',
    thoanTu: 'Quy muội là gả em gái. Chinh hung, vô du lợi. Hôn nhân không chính thức cần thận trọng.',
    haoTu: [
      'Quy muội dĩ đệ, khiễu năng lý. Chinh cát. Lấy chồng làm thiếp, dù khiễu vẫn bước đi được.',
      'Miễu năng thị, lợi u nhân chi trinh. Mắt mờ nhìn được, lợi người ẩn giữ chính.',
      'Quy muội dĩ tu, phản quy dĩ đệ. Lấy chồng làm lẽ, quay về làm thiếp.',
      'Quy muội thuyên kỳ kỳ, trì quy hữu thì. Chậm gả có thời điểm tốt đến.',
      'Đế ất quy muội, kỳ quân chi tụ bất như kỳ đệ chi tụ lương. Nguyệt cơ vọng, cát. Vua gả em, thiếp đẹp hơn chính thê.',
      'Nữ thừa khuẩng vô thực, sĩ quải dương vô huyết, vô du lợi. Giỏ không có thức ăn, dê không máu, không lợi.'
    ]
  },
  54: {
    name: 'Lôi Hỏa Phong', han: '雷火豐', thuong: 3, ha: 2, hanh: 'Mộc',
    thoanTu: 'Phong là phong phú, rực rỡ. Hanh, vương giả chi, vật ưu, nghi nhật trung. Đỉnh cao thịnh vượng.',
    haoTu: [
      'Ngộ kỳ phối chủ, tuy tuần vô cữu. Vãng hữu thượng. Gặp chủ tương xứng, mười ngày không lỗi.',
      'Phong kỳ bộ, nhật trung kiến đẩu. Vãng đắc nghi tật, hữu phu phát nhược, cát. Che khuất ánh sáng, giữa ngày thấy sao.',
      'Phong kỳ phái, nhật trung kiến mội. Chiết kỳ hữu cổ, vô cữu. Che mù mịt, thấy bọt nhỏ, gãy tay phải.',
      'Phong kỳ bộ, nhật trung kiến đẩu. Ngộ kỳ di chủ, cát. Màn che dày, thấy sao Đẩu, gặp chủ ẩn.',
      'Lai chương, hữu khánh dự. Cát. Người tài đến, có điều đáng mừng, tốt.',
      'Phong kỳ ốc, phú kỳ gia. Khuy kỳ hộ, khách kỳ vô nhân. Nhà to che khuất, nhìn vào vắng người.'
    ]
  },
  55: {
    name: 'Hỏa Sơn Lữ', han: '火山旅', thuong: 2, ha: 6, hanh: 'Hỏa',
    thoanTu: 'Lữ là lữ hành, người đi đường. Tiểu hanh, lữ trinh cát. Người lữ hành giữ chính.',
    haoTu: [
      'Lữ tí tí, tư kỳ sở thủ, hung. Lữ hành vụn vặt, chú ý chỗ ở, hung.',
      'Lữ tức thứ, hoài kỳ tư, đắc đồng bộc trinh. Lữ đến nơi ở, có tiền, được đầy tớ trung thành.',
      'Lữ phần kỳ thứ, táng kỳ đồng bộc, trinh lệ. Đốt nơi ở, mất đầy tớ, nguy.',
      'Lữ vu xử, đắc kỳ tư phu, ngã tâm bất khoái. Lữ đến chỗ ở tạm, có tiền nhưng lòng không vui.',
      'Xạ phĩ nhất thỉ, vong dĩ dự mệnh. Bắn chim trĩ một phát, mất tên được khen.',
      'Điểu phần kỳ sào, lữ nhân tiên tiếu hậu hào. Sàng ngưu vu dị, hung. Chim đốt tổ, lữ khách trước cười sau khóc.'
    ]
  },
  56: {
    name: 'Thuần Tốn', han: '巽為風', thuong: 4, ha: 4, hanh: 'Mộc',
    thoanTu: 'Thuần Tốn là gió chồng gió, thuận theo. Tiểu hanh, lợi hữu du vãng, lợi kiến đại nhân.',
    haoTu: [
      'Tiến thoái, lợi vũ nhân chi trinh. Tiến lùi do dự, lợi dụng sức quân đội giữ chính.',
      'Tốn tại sàng hạ, dụng sử phúc thương. Lợi trinh cát. Thuận ở dưới giường, dùng thầy bói, tốt.',
      'Tần tốn, lận. Thuận quá nhiều lần, hối tiếc.',
      'Hối vong, điền hoạch tam phẩm. Hối hận tiêu, ra đồng săn được ba loại.',
      'Trinh cát, hối vong, vô bất lợi. Vô sơ hữu chung. Giữ chính tốt, không gì bất lợi.',
      'Tốn tại sàng hạ, táng kỳ tư phu. Trinh hung. Thuận dưới giường, mất tiền bạc, giữ chính hung.'
    ]
  },
  57: {
    name: 'Thuần Đoài', han: '兌為澤', thuong: 1, ha: 1, hanh: 'Kim',
    thoanTu: 'Thuần Đoài là vui mừng, hòa duyệt. Hanh lợi trinh. Vui mừng chân thực thuận đạo.',
    haoTu: [
      'Hòa đoài, cát. Vui mừng hài hòa, tốt lành.',
      'Phu đoài, cát, hối vong. Thành tín vui mừng, tốt, hối hận tiêu.',
      'Lai đoài, hung. Vui mừng kéo đến từ bên ngoài, hung.',
      'Thương đoài, vị ninh, giới tật hữu hỉ. Mặc cả vui mừng, chưa yên, phòng bệnh có mừng.',
      'Phu vu bác, hữu lệ. Thành tín với kẻ bóc lột, có nguy.',
      'Dẫn đoài. Bị dẫn dụ vào vui mừng, không chính đáng.'
    ]
  },
  58: {
    name: 'Phong Thủy Hoán', han: '風水渙', thuong: 4, ha: 5, hanh: 'Mộc',
    thoanTu: 'Hoán là phân tán, hóa giải. Hanh. Vương giả hữu miếu, lợi thiệp đại xuyên, lợi trinh.',
    haoTu: [
      'Dụng chửng mã tráng, cát. Cứu giúp bằng ngựa mạnh, tốt lành.',
      'Hoán bôn kỳ ki, hối vong. Chạy về chỗ tựa, hối hận tiêu tan.',
      'Hoán kỳ cung, vô hối. Phân tán bản thân, không hối hận.',
      'Hoán kỳ quần, nguyên cát. Hoán hữu khâu, phỉ di sở tư. Phân tán bè đảng, đại cát.',
      'Hoán hãn kỳ đại hiệu, hoán vương cư, vô cữu. Phân tán mồ hôi thành tiếng kêu lớn, không lỗi.',
      'Hoán kỳ huyết, khứ đích xuất, vô cữu. Phân tán máu, đi khỏi nơi nguy, không lỗi.'
    ]
  },
  59: {
    name: 'Thủy Trạch Tiết', han: '水澤節', thuong: 5, ha: 1, hanh: 'Thủy',
    thoanTu: 'Tiết là tiết chế, điều độ. Hanh, khổ tiết bất khả trinh. Tiết chế đúng mức.',
    haoTu: [
      'Bất xuất hộ đình, vô cữu. Không ra khỏi sân nhà, không lỗi.',
      'Bất xuất môn đình, hung. Không ra khỏi cổng, hung.',
      'Phất tiết nhược, tắc ta nhược, vô cữu. Không tiết chế thì than thở, không lỗi.',
      'An tiết, hanh. Tiết chế an nhiên, hanh thông.',
      'Cam tiết, cát. Vãng hữu thượng. Tiết chế ngọt ngào, tốt, đi được khen.',
      'Khổ tiết, trinh hung, hối vong. Tiết chế khổ sở, giữ chính hung, hối hận tiêu.'
    ]
  },
  60: {
    name: 'Phong Trạch Trung Phu', han: '風澤中孚', thuong: 4, ha: 1, hanh: 'Mộc',
    thoanTu: 'Trung phu là thành tín từ trong ra ngoài. Đồn ngư cát, lợi thiệp đại xuyên, lợi trinh.',
    haoTu: [
      'Ngu cát, hữu tha bất yến. Yên tĩnh tốt, có ý khác không an.',
      'Minh hạc tại âm, kỳ tử hòa chi. Ngã hữu hảo tước, ngô dữ nhĩ mẻ chi. Hạc kêu con theo, tôi có rượu ngon cùng uống.',
      'Đắc địch, hoặc cổ hoặc bãi, hoặc khấp hoặc ca. Gặp địch thủ, khi đánh khi ngừng, khi khóc khi ca.',
      'Nguyệt cơ vọng, mã thất vong, vô cữu. Trăng gần rằm, ngựa một mất, không lỗi.',
      'Hữu phu loan như, vô cữu. Thành tín liên kết, không lỗi.',
      'Hàn âm đăng vu thiên, trinh hung. Tiếng gáy lên trời, giữ chính hung — quá cao.'
    ]
  },
  61: {
    name: 'Lôi Sơn Tiểu Quá', han: '雷山小過', thuong: 3, ha: 6, hanh: 'Mộc',
    thoanTu: 'Tiểu quá là vượt quá đôi chút. Hanh lợi trinh. Khả tiểu sự, bất khả đại sự. Chim bay xuống.',
    haoTu: [
      'Điểu dĩ phi, hung. Chim đã bay đi, hung.',
      'Quá kỳ tổ, ngộ kỳ tỷ, bất cập kỳ quân, ngộ kỳ thần, vô cữu. Qua ông nội gặp bà nội.',
      'Phất quá phòng chi, tùng hoặc tiễn chi, hung. Không phòng bị, bị đâm, hung.',
      'Vô cữu, phất quá ngộ chi. Vãng lệ tất giới. Vật dụng vĩnh trinh. Không lỗi, vừa qua gặp được.',
      'Mật vân bất vũ, tự ngã tây giao. Công huyền thủ kỳ tại huyệt. Mây dày không mưa, bắt chim trên cao.',
      'Phất ngộ quá chi, phi điểu ly chi, hung. Thị vị tai sảnh. Không gặp mà qua, chim bay đi, hung.'
    ]
  },
  62: {
    name: 'Thủy Hỏa Ký Tế', han: '水火既濟', thuong: 5, ha: 2, hanh: 'Thủy',
    thoanTu: 'Ký tế là đã xong, đã hoàn thành. Hanh tiểu lợi trinh. Sơ cát chung loạn. Hoàn thành nhưng cần giữ.',
    haoTu: [
      'Kéo bánh xe, thấm ướt đuôi, vô cữu. Kéo về từ từ, không lỗi.',
      'Phụ táng kỳ phất, vật trục, thất nhật đắc. Bà đánh mất màn che, bảy ngày lại có.',
      'Cao Tông phạt quỷ phương, tam niên khắc chi. Tiểu nhân vật dụng. Ba năm chinh phạt xong, không dùng tiểu nhân.',
      'Nhu hữu y nhự, chung nhật giới. Có quần áo rách, suốt ngày cảnh giác.',
      'Đông lân sát ngưu, bất như tây lân chi thược tế. Thực thụ kỳ phúc. Lễ to không bằng lễ thật lòng.',
      'Nhu kỳ thủ, lệ. Đầu bị ướt, nguy hiểm — không biết dừng lại.'
    ]
  },
  63: {
    name: 'Hỏa Thủy Vị Tế', han: '火水未濟', thuong: 2, ha: 5, hanh: 'Hỏa',
    thoanTu: 'Vị tế là chưa xong, chưa hoàn thành. Hanh, tiểu hồ uế tế, nhu kỳ vĩ, vô du lợi.',
    haoTu: [
      'Nhu kỳ vĩ, lận. Đuôi bị ướt, hối tiếc — chưa xong mà vội.',
      'Kéo bánh xe, trinh cát. Từ từ tiến, giữ chính tốt.',
      'Vị tế chinh hung, lợi thiệp đại xuyên. Chưa xong mà chinh, lợi vượt đại xuyên.',
      'Trinh cát, hối vong. Chấn dụng phạt quỷ phương, tam niên hữu thưởng vu đại quốc. Chinh phạt ba năm được thưởng.',
      'Trinh cát, vô hối. Quân tử chi quang, hữu phu, cát. Quân tử sáng rỡ, thành tín, tốt.',
      'Hữu phu vu ẩm tửu, vô cữu. Nhu kỳ thủ, hữu phu thất thị. Thành tín uống rượu, không lỗi.'
    ]
  }
});

// ── QUE_LOOKUP — 8×8 table: ngoaiQuai(row) × noiQuai(col) → Văn Vương index (0-63) ──
// Rows: ngoaiQuai index 0-7 (Càn, Đoài, Ly, Chấn, Tốn, Khảm, Cấn, Khôn)
// Cols: noiQuai index 0-7
const QUE_LOOKUP = [
  //  Cà  Đo  Ly  Ch  Tố  Kh  Cấ  Kh (nội)
  [    0,  9, 12, 24,  8,  4, 32,  1 ], // ngoại: Càn
  [ 42, 57, 37, 53, 27, 46, 30, 44 ], // ngoại: Đoài
  [ 13, 35, 29, 55, 36, 63, 56, 22 ], // ngoại: Ly
  [ 33, 16, 40, 50, 31, 39, 61, 23 ], // ngoại: Chấn
  [ 43, 28, 37, 41, 56, 59, 52, 19 ], // ngoại: Tốn — placeholder, refined below
  [ 5,  47, 64, 17, 18, 28, 48, 7  ], // ngoại: Khảm — placeholder
  [ 25, 41, 26, 27, 53, 4,  51, 3  ], // ngoại: Cấn — placeholder
  [ 11, 45, 35, 15, 20, 6,  14, 1  ]  // ngoại: Khôn — placeholder
];

// Corrected QUE_LOOKUP using standard Văn Vương sequence
// ngoai(0-7) × noi(0-7) → hexagram index 0-63
const QUE_LOOKUP_FULL = (function() {
  // Build from QUE_DATA: for each hexagram, record [thuong][ha] = idx
  const tbl = Array.from({length: 8}, () => new Array(8).fill(-1));
  if (typeof QUE_DATA !== 'undefined') {
    for (let i = 0; i < 64; i++) {
      const q = QUE_DATA[i];
      if (q) tbl[q.thuong][q.ha] = i;
    }
  }
  return tbl;
})();

// ── findQuai(hao3) — match 3-bit array to BAT_QUAI index ──
// hao3: [bit0, bit1, bit2] where bit = 1 (yang) or 0 (yin), bottom to top
function findQuai(hao3) {
  if (typeof BAT_QUAI === 'undefined') return -1;
  for (let i = 0; i < BAT_QUAI.length; i++) {
    const q = BAT_QUAI[i];
    if (q.hao[0] === hao3[0] && q.hao[1] === hao3[1] && q.hao[2] === hao3[2]) return i;
  }
  return -1;
}

// ── findQueIdx(ngoai, noi) — lookup from QUE_LOOKUP_FULL ──
function findQueIdx(ngoai, noi) {
  if (typeof QUE_LOOKUP_FULL === 'undefined') return -1;
  return QUE_LOOKUP_FULL[ngoai][noi];
}

// ── gieoQue() — 3-coin method, returns array of 6 values (6-9) ──
// 3 coins: heads=3, tails=2 each toss
// Sum per line: 6=LãoÂm(dong→dương), 7=ThiếuDương(tinh), 8=ThiếuÂm(tinh), 9=LãoDương(dong→âm)
function gieoQue() {
  const result = [];
  for (let i = 0; i < 6; i++) {
    // Each coin: 0=tails(2), 1=heads(3)
    const coins = [
      Math.random() < 0.5 ? 2 : 3,
      Math.random() < 0.5 ? 2 : 3,
      Math.random() < 0.5 ? 2 : 3
    ];
    result.push(coins[0] + coins[1] + coins[2]); // 6, 7, 8, or 9
  }
  return result; // hào 1 = result[0] (bottom)
}

// ── xacDinhQue(haoArray) — returns full quẻ info ──
// haoArray: [h1,h2,h3,h4,h5,h6] values 6-9
// Returns: { queChinh, queBien, dongHao, noiQuai, ngoaiQuai, noiQuaiBien, ngoaiQuaiBien, haoArray }
function xacDinhQue(haoArray) {
  if (typeof BAT_QUAI === 'undefined' || typeof QUE_DATA === 'undefined') return null;

  // Convert value to yang(1)/yin(0) bit
  function toBit(v) { return (v === 9 || v === 7) ? 1 : 0; }
  // Biến hào: 9→0, 6→1
  function toBienBit(v) {
    if (v === 9) return 0;
    if (v === 6) return 1;
    return toBit(v);
  }

  const bits = haoArray.map(toBit);           // quẻ chính bits
  const bienBits = haoArray.map(toBienBit);   // quẻ biến bits

  // nội quái = hào 1-3 (indices 0-2), ngoại quái = hào 4-6 (indices 3-5)
  const noiQuai = findQuai([bits[0], bits[1], bits[2]]);
  const ngoaiQuai = findQuai([bits[3], bits[4], bits[5]]);
  const noiQuaiBien = findQuai([bienBits[0], bienBits[1], bienBits[2]]);
  const ngoaiQuaiBien = findQuai([bienBits[3], bienBits[4], bienBits[5]]);

  const queChinhIdx = findQueIdx(ngoaiQuai, noiQuai);
  const queBienIdx = findQueIdx(ngoaiQuaiBien, noiQuaiBien);

  const dongHao = haoArray.map((v, i) => (v === 6 || v === 9) ? i + 1 : null).filter(Boolean);

  return {
    haoArray,
    noiQuai,
    ngoaiQuai,
    noiQuaiBien,
    ngoaiQuaiBien,
    queChinhIdx,
    queBienIdx,
    queChinh: queChinhIdx >= 0 ? QUE_DATA[queChinhIdx] : null,
    queBien: (queBienIdx >= 0 && dongHao.length > 0) ? QUE_DATA[queBienIdx] : null,
    dongHao
  };
}

// ── anLucThan(queData) — assign Địa Chi + Lục Thân to each hào ──
// queData: result from xacDinhQue()
// Returns array of 6 objects: { pos(1-6), diaChi, nguHanh, lucThan, dong, value }
function anLucThan(queData) {
  if (!queData || typeof NAP_GIAP_IDX === 'undefined') return null;
  if (typeof BAT_QUAI === 'undefined' || typeof QUE_DATA === 'undefined') return null;

  const { haoArray, noiQuai, ngoaiQuai, queChinh } = queData;
  if (noiQuai < 0 || ngoaiQuai < 0 || !queChinh) return null;

  // Ngũ Hành of the hexagram = upper trigram's Ngũ Hành (cung)
  const queNguHanh = BAT_QUAI[ngoaiQuai].nguHanh;

  const noiNap = NAP_GIAP_IDX[noiQuai];
  const ngoaiNap = NAP_GIAP_IDX[ngoaiQuai];

  // hào 1-3: nội quái noi[0..2], hào 4-6: ngoại quái ngoai[0..2]
  const diaChiMap = [
    noiNap.noi[0],   // hào 1
    noiNap.noi[1],   // hào 2
    noiNap.noi[2],   // hào 3
    ngoaiNap.ngoai[0], // hào 4
    ngoaiNap.ngoai[1], // hào 5
    ngoaiNap.ngoai[2]  // hào 6
  ];

  return haoArray.map(function(value, idx) {
    const pos = idx + 1;
    const diaChi = diaChiMap[idx];
    const nguHanh = (typeof DIA_CHI_NGU_HANH !== 'undefined') ? DIA_CHI_NGU_HANH[diaChi] : null;
    const lucThan = nguHanh ? getLucThan(queNguHanh, diaChi) : null;
    const dong = (value === 6 || value === 9);
    return { pos, diaChi, nguHanh, lucThan, dong, value };
  });
}

// ── Phase 5: Dụng Thần, Nhật Thần, Lục Thú ──

/* ── Dụng Thần mapping: question domain → target Lục Thân ── */
const DUNG_THAN_MAP = {
  'tai':   'Thê Tài',    // Finance: Wife/Wealth represents money
  'quan':  'Quan Quỷ',   // Career: Officer/Ghost represents authority
  'hon_m': 'Thê Tài',    // Marriage (male): Wife/Wealth represents spouse
  'hon_f': 'Quan Quỷ',   // Marriage (female): Officer/Ghost represents spouse
  'suc_cure': 'Tử Tôn',  // Health (recovery): Children represent healing
  'suc_cause': 'Quan Quỷ', // Health (diagnosis): Officer represents disease
};

/* English names for Lục Thân */
const LUC_THAN_NAMES_EN = {
  'Huynh Đệ': 'Siblings',
  'Tử Tôn': 'Children',
  'Thê Tài': 'Wealth',
  'Phụ Mẫu': 'Parents',
  'Quan Quỷ': 'Officer',
};

/**
 * Determine Dụng Thần (acting spirit) based on question domain
 * @param {Array} haoDetails - Array from anLucThan()
 * @param {string} linhVuc - 'tai' | 'quan' | 'hon' | 'suc'
 * @param {string} gender - 'm' | 'f' (only used for 'hon')
 * @returns {Object|null} The hào object that is the Dụng Thần, or null if not found
 */
function getDungThan(haoDetails, linhVuc, gender) {
  if (!haoDetails || !Array.isArray(haoDetails)) return null;
  gender = gender || 'm';

  var targetLucThan;
  if (linhVuc === 'hon') {
    targetLucThan = DUNG_THAN_MAP[gender === 'f' ? 'hon_f' : 'hon_m'];
  } else if (linhVuc === 'suc') {
    targetLucThan = DUNG_THAN_MAP['suc_cure'];
  } else {
    targetLucThan = DUNG_THAN_MAP[linhVuc] || 'Thê Tài';
  }

  var dungThan = haoDetails.find(function(h) { return h.lucThan === targetLucThan; });

  if (!dungThan && linhVuc === 'suc') {
    return haoDetails.find(function(h) { return h.lucThan === DUNG_THAN_MAP['suc_cause']; }) || null;
  }

  return dungThan || null;
}

/* ── Địa Chi cycle for days ── */
const DIA_CHI_CYCLE = ['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];

/**
 * Calculate Địa Chi of a given date using epoch method
 * Epoch: 2000-01-01 was Thìn day (index 4)
 * @param {Date} date - The date to calculate
 * @returns {number} Địa Chi index (0-11)
 */
function getDayDiaChi(date) {
  var epoch = new Date(2000, 0, 1);
  var diffDays = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
  var epochDayChi = 4; // Thìn
  return ((epochDayChi + diffDays) % 12 + 12) % 12;
}

/**
 * Determine Nhật Thần (day spirit) for hexagram casting
 * @param {Date} ngayGieo - Casting date
 * @returns {Object} { chiIdx, chiName, clashes, supports }
 */
function getNhatThan(ngayGieo) {
  if (!(ngayGieo instanceof Date)) ngayGieo = new Date();

  var chiIdx = getDayDiaChi(ngayGieo);
  var chiName = DIA_CHI_CYCLE[chiIdx];

  // Clashing branch (xung): index + 6 mod 12
  var clashIdx = (chiIdx + 6) % 12;

  // Supporting branch (hợp): Lục Hợp pairs
  var lucHopPairs = [[0,1],[2,11],[3,10],[4,9],[5,8],[6,7]];
  var supportIdx = -1;
  for (var i = 0; i < lucHopPairs.length; i++) {
    var pair = lucHopPairs[i];
    if (pair[0] === chiIdx) { supportIdx = pair[1]; break; }
    if (pair[1] === chiIdx) { supportIdx = pair[0]; break; }
  }

  return {
    chiIdx: chiIdx,
    chiName: chiName,
    clashes: DIA_CHI_CYCLE[clashIdx],
    clashIdx: clashIdx,
    supports: supportIdx >= 0 ? DIA_CHI_CYCLE[supportIdx] : null,
    supportIdx: supportIdx
  };
}

/* ── Lục Thú (Six Beasts) cycle ── */
const LUC_THU = [
  { vi: 'Thanh Long', en: 'Azure Dragon', element: 'Mộc', nature: 'cát' },
  { vi: 'Chu Tước',   en: 'Vermilion Bird', element: 'Hỏa', nature: 'trung' },
  { vi: 'Câu Trần',   en: 'Hook Snake', element: 'Thổ', nature: 'trung' },
  { vi: 'Đằng Xà',    en: 'Soaring Snake', element: 'Thổ', nature: 'hung' },
  { vi: 'Bạch Hổ',    en: 'White Tiger', element: 'Kim', nature: 'hung' },
  { vi: 'Huyền Vũ',   en: 'Black Tortoise', element: 'Thủy', nature: 'hung' },
];

/* Starting Lục Thú index by Thiên Can */
const LUC_THU_START = [0, 0, 1, 1, 2, 3, 4, 4, 5, 5]; // Giáp=0, Ất=0, Bính=1, ...

/**
 * Calculate Thiên Can of a given date
 * Epoch: 2000-01-01 was Canh (index 6)
 * @param {Date} date
 * @returns {number} Thiên Can index (0-9)
 */
function getDayThienCan(date) {
  var epoch = new Date(2000, 0, 1);
  var diffDays = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
  var epochDayCan = 6; // Canh
  return ((epochDayCan + diffDays) % 10 + 10) % 10;
}

/**
 * Assign Lục Thú to each hào based on casting day's Thiên Can
 * @param {Date} ngayGieo - Casting date
 * @returns {Array} Array of 6 Lục Thú objects for hào 1-6
 */
function getLucThu(ngayGieo) {
  if (!(ngayGieo instanceof Date)) ngayGieo = new Date();

  var canIdx = getDayThienCan(ngayGieo);
  var startIdx = LUC_THU_START[canIdx];

  var result = [];
  for (var i = 0; i < 6; i++) {
    var thuIdx = (startIdx + i) % 6;
    result.push({
      haoPos: i + 1,
      vi: LUC_THU[thuIdx].vi,
      en: LUC_THU[thuIdx].en,
      element: LUC_THU[thuIdx].element,
      nature: LUC_THU[thuIdx].nature
    });
  }
  return result;
}
