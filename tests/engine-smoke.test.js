/* ── Minimal Node test harness for pure Tử Vi + Kinh Dịch functions ── */
/* Run: node tests/engine-smoke.test.js */
/* Zero-dependency: uses plain assert from Node core. */

const assert = require('assert');
const path = require('path');

const SUPPORT_DIR = path.join(__dirname, '..', '.src', '.main', '.support');

/* Engines export via `module.exports` when run under Node. */
const tuvi  = require(path.join(SUPPORT_DIR, 'tuvi-engine.js'));
/* kinh-dich-engine needs DIA_CHI + Lục Thú constants — inject minimal mocks */
global.DIA_CHI = ['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi'];
global.LUC_THU = [
  { vi: 'Thanh Long', en: 'Azure Dragon', element: 'Mộc', nature: 'cát' },
  { vi: 'Chu Tước',   en: 'Vermilion Bird', element: 'Hỏa', nature: 'trung' },
  { vi: 'Câu Trần',   en: 'Hook Snake', element: 'Thổ', nature: 'trung' },
  { vi: 'Đằng Xà',    en: 'Soaring Snake', element: 'Thổ', nature: 'hung' },
  { vi: 'Bạch Hổ',    en: 'White Tiger', element: 'Kim', nature: 'hung' },
  { vi: 'Huyền Vũ',   en: 'Black Tortoise', element: 'Thủy', nature: 'hung' },
];
global.LUC_THU_START = [0, 0, 1, 1, 2, 3, 4, 4, 5, 5];
global.QUE_NATURE = { thuan: [0], suy: [5], bien: [10] };
const kd = require(path.join(SUPPORT_DIR, 'kinh-dich-engine.js'));

let passed = 0, failed = 0;
function test(name, fn) {
  try { fn(); console.log('  PASS  ' + name); passed++; }
  catch (e) { console.error('  FAIL  ' + name + ' :: ' + e.message); failed++; }
}

console.log('\n── Tử Vi engine ──');

test('seedHash is deterministic', () => {
  assert.strictEqual(tuvi.seedHash('abc'), tuvi.seedHash('abc'));
  assert.notStrictEqual(tuvi.seedHash('abc'), tuvi.seedHash('abd'));
});

test('computeMenhCung(lunarMonth=1, hour=0) === 2 (Dần)', () => {
  assert.strictEqual(tuvi.computeMenhCung(1, 0), 2);
});

test('computeThanCung(lunarMonth=1, hour=0) === 2 (Dần)', () => {
  assert.strictEqual(tuvi.computeThanCung(1, 0), 2);
});

test('computeMenhCung respects month/hour rotation', () => {
  /* Month +1 advances 1; hour +1 retreats 1 */
  const base = tuvi.computeMenhCung(3, 5);
  assert.strictEqual(tuvi.computeMenhCung(4, 5), (base + 1) % 12);
  assert.strictEqual(tuvi.computeMenhCung(3, 6), (base + 11) % 12);
});

test('napThienCan12Cung returns 12 indices in valid range', () => {
  const arr = tuvi.napThienCan12Cung(0);
  assert.strictEqual(arr.length, 12);
  arr.forEach(v => assert.ok(v >= 0 && v <= 9, 'can index out of range: ' + v));
});

test('deriveCuc(Giáp/0, Dần/2) returns Hỏa Lục Cục', () => {
  /* Giáp year + Dần Mệnh → Bính Dần → Lư Trung Hỏa → Hỏa */
  const r = tuvi.deriveCuc(0, 2);
  assert.strictEqual(r.hanh, 'Hỏa');
  assert.strictEqual(r.cucValue, 6);
});

test('getNapAmHanh detects each element', () => {
  assert.strictEqual(tuvi.getNapAmHanh('Hải Trung Kim'), 'Kim');
  assert.strictEqual(tuvi.getNapAmHanh('Đại Lâm Mộc'),  'Mộc');
  assert.strictEqual(tuvi.getNapAmHanh('Giản Hạ Thủy'),  'Thủy');
  assert.strictEqual(tuvi.getNapAmHanh('Lư Trung Hỏa'),  'Hỏa');
  assert.strictEqual(tuvi.getNapAmHanh('Lộ Bàng Thổ'),  'Thổ');
});

test('getTamHop returns 3-member harmony group', () => {
  /* Dần(2), Ngọ(6), Tuất(10) form one tam hợp */
  const grp = tuvi.getTamHop(2);
  assert.deepStrictEqual([...grp].sort((a,b) => a-b), [2, 6, 10]);
});

test('getLucHop returns symmetric pair', () => {
  /* Tý(0) ↔ Sửu(1) */
  assert.deepStrictEqual(tuvi.getLucHop(0), [0, 1]);
  assert.deepStrictEqual(tuvi.getLucHop(1), [1, 0]);
});

console.log('\n── Kinh Dịch engine ──');

test('gieoQue returns 6 hào values 6-9', () => {
  const r = kd.gieoQue();
  assert.strictEqual(r.length, 6);
  r.forEach(v => assert.ok(v >= 6 && v <= 9, 'hao value out of range: ' + v));
});

test('getDayDiaChi(2000-01-01) === 4 (Thìn)', () => {
  assert.strictEqual(kd.getDayDiaChi(new Date(2000, 0, 1)), 4);
});

test('getDayThienCan(2000-01-01) === 6 (Canh)', () => {
  assert.strictEqual(kd.getDayThienCan(new Date(2000, 0, 1)), 6);
});

test('getNhatThan returns chiName + clash + support', () => {
  const r = kd.getNhatThan(new Date(2000, 0, 1));
  assert.strictEqual(r.chiName, 'Thìn');
  assert.strictEqual(r.clashes, 'Tuất');  // Thìn + 6 = Tuất
  assert.strictEqual(r.supports, 'Dậu');  // Lục Hợp pair
});

test('getLucThu returns 6 beasts starting from Bạch Hổ (Canh day)', () => {
  const r = kd.getLucThu(new Date(2000, 0, 1));
  assert.strictEqual(r.length, 6);
  assert.strictEqual(r[0].vi, 'Bạch Hổ');  // Canh → start index 4
});

test('getQueNature classifies into thuan/suy/bien', () => {
  /* Provide minimal QUE_NATURE mock if engine doesn't have it bundled */
  global.QUE_NATURE = global.QUE_NATURE || {
    thuan: [0],
    suy:   [5],
    bien:  [10]
  };
  assert.strictEqual(kd.getQueNature(0),  'thuan');
  assert.strictEqual(kd.getQueNature(5),  'suy');
  assert.strictEqual(kd.getQueNature(10), 'bien');
  assert.strictEqual(kd.getQueNature(99), 'bien');  // default
});

console.log('\n──────────────');
console.log(`Total: ${passed + failed}  ·  Pass: ${passed}  ·  Fail: ${failed}`);
process.exit(failed === 0 ? 0 : 1);
