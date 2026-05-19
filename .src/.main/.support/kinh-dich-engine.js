/* ── kinh-dich-engine.js — Kinh Dịch / Lục Hào engine ── */
/* Pure functions. Reads data from kinh-dich-data.js (BAT_QUAI, NAP_GIAP_IDX, */
/* QUE_DATA, QUE_LOOKUP_FULL, DIA_CHI_NGU_HANH, NGU_HANH_RELATION, LUC_THAN_MAP, */
/* DUNG_THAN_MAP, LUC_THU, LUC_THU_START, DUNG_THAN_INTERPRETATIONS, QUE_NATURE) */
/* and DIA_CHI from tuvi-data.js. NO DOM manipulation. */

// ── Lục Thân: relation of hào's Địa Chi Ngũ Hành vs hexagram's Ngũ Hành ──
function getLucThan(queNguHanh, diaChi) {
  if (typeof DIA_CHI_NGU_HANH === 'undefined') return null;
  if (typeof NGU_HANH_RELATION === 'undefined') return null;
  const haoNH = DIA_CHI_NGU_HANH[diaChi];
  if (!haoNH) return null;
  const rel = NGU_HANH_RELATION[queNguHanh][haoNH];
  return LUC_THAN_MAP[rel] || null;
}

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
    const coins = [
      Math.random() < 0.5 ? 2 : 3,
      Math.random() < 0.5 ? 2 : 3,
      Math.random() < 0.5 ? 2 : 3
    ];
    result.push(coins[0] + coins[1] + coins[2]);
  }
  return result;
}

// ── xacDinhQue(haoArray) — returns full quẻ info ──
// haoArray: [h1,h2,h3,h4,h5,h6] values 6-9
function xacDinhQue(haoArray) {
  if (typeof BAT_QUAI === 'undefined' || typeof QUE_DATA === 'undefined') return null;

  function toBit(v) { return (v === 9 || v === 7) ? 1 : 0; }
  function toBienBit(v) {
    if (v === 9) return 0;
    if (v === 6) return 1;
    return toBit(v);
  }

  const bits = haoArray.map(toBit);
  const bienBits = haoArray.map(toBienBit);

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
function anLucThan(queData) {
  if (!queData || typeof NAP_GIAP_IDX === 'undefined') return null;
  if (typeof BAT_QUAI === 'undefined' || typeof QUE_DATA === 'undefined') return null;

  const { haoArray, noiQuai, ngoaiQuai, queChinh } = queData;
  if (noiQuai < 0 || ngoaiQuai < 0 || !queChinh) return null;

  const queNguHanh = BAT_QUAI[ngoaiQuai].nguHanh;

  const noiNap = NAP_GIAP_IDX[noiQuai];
  const ngoaiNap = NAP_GIAP_IDX[ngoaiQuai];

  const diaChiMap = [
    noiNap.noi[0],     // hào 1
    noiNap.noi[1],     // hào 2
    noiNap.noi[2],     // hào 3
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

/**
 * Calculate Địa Chi of a given date using epoch method.
 * Epoch: 2000-01-01 was Thìn day (index 4).
 */
function getDayDiaChi(date) {
  var epoch = new Date(2000, 0, 1);
  var diffDays = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
  var epochDayChi = 4; // Thìn
  return ((epochDayChi + diffDays) % 12 + 12) % 12;
}

/**
 * Determine Nhật Thần (day spirit) for hexagram casting.
 * Returns { chiIdx, chiName, clashes, supports, ... }
 */
function getNhatThan(ngayGieo) {
  if (!(ngayGieo instanceof Date)) ngayGieo = new Date();

  var chiIdx = getDayDiaChi(ngayGieo);
  var chiName = DIA_CHI[chiIdx];

  var clashIdx = (chiIdx + 6) % 12;

  /* Lục Hợp pairs: Tý-Sửu, Dần-Hợi, Mão-Tuất, Thìn-Dậu, Tỵ-Thân, Ngọ-Mùi */
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
    clashes: DIA_CHI[clashIdx],
    clashIdx: clashIdx,
    supports: supportIdx >= 0 ? DIA_CHI[supportIdx] : null,
    supportIdx: supportIdx
  };
}

/**
 * Calculate Thiên Can of a given date.
 * Epoch: 2000-01-01 was Canh (index 6).
 */
function getDayThienCan(date) {
  var epoch = new Date(2000, 0, 1);
  var diffDays = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
  var epochDayCan = 6; // Canh
  return ((epochDayCan + diffDays) % 10 + 10) % 10;
}

/**
 * Assign Lục Thú to each hào based on casting day's Thiên Can.
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

/**
 * Generate domain-specific interpretation based on Dụng Thần state.
 */
function interpretDungThan(dungThan, linhVuc, nhatThan) {
  if (!dungThan) return null;

  var isVuong = true;
  if (nhatThan) {
    if (dungThan.diaChi === nhatThan.clashes) isVuong = false;
    if (dungThan.diaChi === nhatThan.supports) isVuong = true;
  }

  var isDong = dungThan.dong === true;
  var stateKey = (isDong ? 'dong' : 'tinh') + '_' + (isVuong ? 'vuong' : 'suy');

  var interp = DUNG_THAN_INTERPRETATIONS[linhVuc];
  if (!interp) return null;

  return {
    state: stateKey,
    isDong: isDong,
    isVuong: isVuong,
    interpretation: interp[stateKey] || null
  };
}

/**
 * Get hexagram nature category.
 * @returns {string} 'thuan' | 'suy' | 'bien'
 */
function getQueNature(queIdx) {
  if (QUE_NATURE.thuan.indexOf(queIdx) !== -1) return 'thuan';
  if (QUE_NATURE.suy.indexOf(queIdx) !== -1) return 'suy';
  return 'bien';
}

// Node test-harness export (no-op in browser)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getLucThan, findQuai, findQueIdx, gieoQue, xacDinhQue, anLucThan,
    getDungThan, getDayDiaChi, getNhatThan, getDayThienCan, getLucThu,
    interpretDungThan, getQueNature
  };
}
