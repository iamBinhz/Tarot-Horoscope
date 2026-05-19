/* ── kinh-dich-sidebar.js — Lục Hào UI (sidebar gieo quẻ) ── */
/* Requires kinh-dich-data.js + kinh-dich-engine.js (gieoQue, xacDinhQue, */
/* anLucThan, getNhatThan, getLucThu, getDungThan) and currentLang from app. */

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

  /* Thoán từ */
  const thoanTuRaw = qc.thoanTu || '';
  const thoanTu = isVi ? (thoanTuRaw.vi || thoanTuRaw) : (thoanTuRaw.en || thoanTuRaw.vi || thoanTuRaw);

  /* Động hào từ — dongHao is 1-based positions e.g. [1,3,5] */
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

  /* Ngũ Hành summary */
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

  /* Get casting date + enhanced data (Nhật Thần / Lục Thú / Dụng Thần) */
  const ngayGieo = new Date();
  const nhatThan = typeof getNhatThan === 'function' ? getNhatThan(ngayGieo) : null;
  const lucThuArr = typeof getLucThu === 'function' ? getLucThu(ngayGieo) : null;

  const linhVucEl = document.querySelector('input[name="linhVuc"]:checked');
  const linhVuc = linhVucEl ? linhVucEl.value : 'tai';

  const dungThan = typeof getDungThan === 'function' ? getDungThan(haoDetails, linhVuc) : null;

  const qc = queData.queChinh;
  const qb = (queData.queBien && queData.queBien !== queData.queChinh) ? queData.queBien : null;
  if (!qc) return;

  const qcName = qc.name;
  const qbName = qb ? qb.name : null;

  let phase5Html = '';
  if (nhatThan) {
    phase5Html += `<div class="nhat-than-bar">
      <span class="nhat-than-label">${isVi ? 'Nhật Thần' : 'Day Spirit'}:</span>
      <span class="nhat-than-value">${nhatThan.chiName}</span>
      <span class="nhat-than-clash">${isVi ? 'Xung' : 'Clash'}: ${nhatThan.clashes}</span>
      ${nhatThan.supports ? `<span class="nhat-than-support">${isVi ? 'Hợp' : 'Support'}: ${nhatThan.supports}</span>` : ''}
    </div>`;
  }

  if (dungThan) {
    const lucThanName = dungThan.lucThan || '';
    phase5Html += `<div class="dung-than-bar">
      <span>${isVi ? 'Dụng Thần' : 'Acting Spirit'}:</span>
      <strong>${lucThanName}</strong> (${isVi ? 'hào' : 'line'} ${dungThan.pos})
    </div>`;
  }

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

  /* Hào lines: display top-to-bottom = hào 6 → hào 1 */
  let haoLinesHtml = '<div class="hao-reveal">';
  for (let i = 5; i >= 0; i--) {
    haoLinesHtml += renderHaoLine(queData.haoArray[i], i + 1);
  }
  haoLinesHtml += '</div>';

  /* Lục Thân table with Lục Thú column */
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

  for (let i = 5; i >= 0; i--) {
    const h = haoDetails[i] || {};
    const isDong = queData.dongHao && queData.dongHao.includes(i + 1);
    const lucThanTxt = h.lucThan || '';
    const isDungThan = dungThan && dungThan.pos === (i + 1);
    const rowClass = isDungThan ? 'hao-dung-than' : '';

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

/* Call after DOM is ready (scripts load after </body>) */
initLucHaoSidebar();
