'use strict';

// ─── STOP WORDS ───────────────────────────────────────────────────────────────
// Used by extractEcho() and extractKeywords() to filter filler words.
const STOP_WORDS = {
  vi: [
    'tôi','bạn','mình','anh','chị','em','ông','bà','họ','chúng tôi','chúng ta',
    'có','không','nên','sẽ','đã','đang','vẫn','còn','cũng','lại','rồi','chưa',
    'có thể','liệu','hỏi','rằng','là','và','hoặc','hay','để','vì','mà','thì',
    'như thế nào','ra sao','thế nào','bao giờ','khi nào','ở đâu','tại sao','vì sao',
    'có phải','phải không','không nhỉ','nhỉ','nhé','thôi','à','ạ','ư','ơi',
    'cái','này','kia','đó','đây','ấy','với','của','cho','từ','trong','ngoài','trên','dưới'
  ],
  en: [
    'i','me','my','myself','you','your','yourself','we','our','they','their','them',
    'should','will','can','could','would','do','does','did','am','is','are',
    'was','were','have','has','had','be','been','being',
    'what','when','where','why','how','who','which',
    'that','this','these','those','the','a','an',
    'and','or','but','if','then','so','because','about','with','for','on','in',
    'at','to','from','of','it','its','there','here','just','really','very','get'
  ]
};

// ─── SENTIMENT KEYWORDS ───────────────────────────────────────────────────────
// 6 sentiments × 2 languages. First match wins, neutral is fallback.
const SENTIMENT_KEYWORDS = {
  worried: {
    vi: ['lo lắng','sợ hãi','lo ngại','bất an','hoang mang','e ngại','lo âu',
         'rủi ro','nguy hiểm','mất','thất bại','sợ','không biết phải'],
    en: ['worried','afraid','scared','anxious','nervous','fear','risk',
         'lose','fail','concerned','dread','terrified','unsafe','panic']
  },
  excited: {
    vi: ['hào hứng','phấn khích','phấn khởi','háo hức','sung sướng',
         'hạnh phúc','vui mừng','mong đợi','thú vị','tuyệt vời'],
    en: ['excited','thrilled','happy','eager','looking forward','amazing',
         'great','wonderful','overjoyed','enthusiastic','pumped','stoked']
  },
  confused: {
    vi: ['bối rối','không hiểu','phân vân','lúng túng','mơ hồ',
         'không rõ','mông lung','không chắc','mơ màng','rối'],
    en: ['confused','unsure','unclear','puzzled','lost','uncertain',
         'conflicted','ambivalent','torn','don\'t understand','mixed up']
  },
  stuck: {
    vi: ['bế tắc','mắc kẹt','không thể tiến','tắc nghẽn','dậm chân',
         'không thoát','không lối ra','kẹt','giậm chân tại chỗ'],
    en: ['stuck','trapped','blocked','stagnant','standstill',
         'going nowhere','dead end','paralyzed','can\'t move forward','frozen']
  },
  hopeful: {
    vi: ['hy vọng','mong','ước','tin rằng','lạc quan','cơ hội',
         'khả năng','tin tưởng','kỳ vọng','trông đợi','mong muốn'],
    en: ['hope','hopeful','wish','optimistic','possible','chance',
         'believe','looking up','promising','encouraging','confident']
  },
  neutral: { vi: [], en: [] }
};

// ─── QUESTION TYPE PATTERNS ───────────────────────────────────────────────────
// 5 types. Checked in order; exploration is the default fallback.
const QUESTION_TYPE_PATTERNS = {
  decision: {
    vi: ['nên.*không','nên.*hay','có nên','nên hay không','lựa chọn','quyết định','chọn','a hay b','có đúng không'],
    en: ['should i','should we','a or b','choose','choice','decision','decide','better to','which one','either or']
  },
  timing: {
    vi: ['khi nào','bao giờ','bao lâu','thời điểm nào','mấy tháng','mấy năm','sớm không','lúc nào','thời điểm'],
    en: ['when will','how long','how soon','timing','by when','how many months','will it be soon','time frame']
  },
  advice: {
    vi: ['làm sao','cần gì','nên làm','làm thế nào','như thế nào để','cách nào','tôi phải làm','làm gì','hướng nào','cần phải','cần thực hiện','cần làm'],
    en: ['how to','what should i do','what do i need','how can i','what must i','what steps','how do i','advice on']
  },
  outcome: {
    vi: ['sẽ ra sao','kết quả','sẽ thế nào','sẽ.*thế nào','kết cục','điều gì sẽ','liệu có','thành công không','thất bại không','tương lai'],
    en: ['will it','what will happen','outcome','result','how will it','what will','succeed','fail','end up','future of']
  }
  // exploration: default fallback — no patterns needed
};

// ─── SUBJECT KEYWORDS ─────────────────────────────────────────────────────────
// 4 subjects. self is the default fallback.
const SUBJECT_KEYWORDS = {
  relationship: {
    vi: ['mối quan hệ','người yêu','bạn đời','vợ','chồng','bạn bè','đối tác',
         'anh ấy','cô ấy','chúng tôi','tình cảm','hai chúng tôi'],
    en: ['relationship','partner','boyfriend','girlfriend','husband','wife',
         'friend','they','them','us','we','together','my ex','our relationship']
  },
  other: {
    vi: ['người khác','anh ta','cô ta','sếp','đồng nghiệp','khách hàng',
         'đối thủ','họ','ban lãnh đạo'],
    en: ['someone else','he','she','boss','colleague','client',
         'competitor','my friend','my family','another person','they']
  },
  situation: {
    vi: ['tình huống','hoàn cảnh','công ty','dự án','sự việc','vụ việc',
         'trường hợp','cơ hội','thương vụ','tình trạng'],
    en: ['situation','circumstances','company','project','case',
         'event','deal','opportunity','condition','matter']
  }
  // self: default fallback — no patterns needed
};

// ─── HELPER: detectSentiment ─────────────────────────────────────────────────
function detectSentiment(text, lang) {
  const t = text.toLowerCase();
  const l = (lang === 'vi') ? 'vi' : 'en';
  for (const [sentiment, data] of Object.entries(SENTIMENT_KEYWORDS)) {
    if (sentiment === 'neutral') continue;
    if (data[l].some(kw => t.includes(kw))) return sentiment;
  }
  return 'neutral';
}

// ─── HELPER: detectQuestionType ──────────────────────────────────────────────
function detectQuestionType(text, lang) {
  const t = text.toLowerCase();
  const l = (lang === 'vi') ? 'vi' : 'en';
  for (const [type, data] of Object.entries(QUESTION_TYPE_PATTERNS)) {
    const patterns = data[l];
    for (const pattern of patterns) {
      if (pattern.includes('.*')) {
        try { if (new RegExp(pattern).test(t)) return type; } catch (e) { /* skip bad regex */ }
      } else {
        if (t.includes(pattern)) return type;
      }
    }
  }
  return 'exploration';
}

// ─── HELPER: detectSubject ───────────────────────────────────────────────────
function detectSubject(text, lang) {
  const t = text.toLowerCase();
  const l = (lang === 'vi') ? 'vi' : 'en';
  for (const [subject, data] of Object.entries(SUBJECT_KEYWORDS)) {
    if (data[l].some(kw => t.includes(kw))) return subject;
  }
  return 'self';
}

// ─── HELPER: extractEcho ─────────────────────────────────────────────────────
// Strips question scaffolding; returns the core topic phrase.
// "Tôi nên nghỉ việc để khởi nghiệp không?" → "nghỉ việc để khởi nghiệp"
// "Will my relationship with my partner improve?" → "relationship with partner"
function extractEcho(text, lang) {
  const l = (lang === 'vi') ? 'vi' : 'en';
  let t = text.trim().replace(/[?!.]+$/, '').trim();

  if (l === 'vi') {
    t = t.replace(/^(liệu|có phải|phải không)\s+/i, '');
    t = t.replace(/^(tôi có thể|tôi nên|tôi có|tôi sẽ|tôi muốn|tôi)\s+/i, '');
    t = t.replace(/^(bạn có thể|bạn nên|bạn có|bạn sẽ|bạn)\s+/i, '');
    t = t.replace(/^(có|nên|sẽ|liệu)\s+/i, '');
    t = t.replace(/\s+(không|nhỉ|nhé|thôi|hay không|có không|phải không|được không|chưa)$/i, '');
  } else {
    t = t.replace(/^(will|should|can|could|would|is|are|was|were|do|does|did|am|have|has|had)\s+(i|my|we|you|it|this|that|the)\s+/i, '');
    t = t.replace(/^(i|will i|should i|can i|could i|would i|am i|do i)\s+/i, '');
    t = t.replace(/^(my|the)\s+/i, '');
  }

  // If still long, filter stop words and keep first 6 content words
  if (t.length > 55) {
    const stops = STOP_WORDS[l];
    const words = t.split(/\s+/).filter(w => !stops.includes(w.toLowerCase()));
    t = words.slice(0, 6).join(' ');
  }

  return t.trim() || text.trim().substring(0, 40);
}

// ─── HELPER: extractKeywords ─────────────────────────────────────────────────
// Returns up to 8 significant words after stop-word filtering.
function extractKeywords(text, lang) {
  const l = (lang === 'vi') ? 'vi' : 'en';
  const stops = STOP_WORDS[l];
  const t = text.toLowerCase().replace(/[?!.,;:]/g, '');
  return t.split(/\s+/)
    .filter(w => w.length > 2 && !stops.includes(w))
    .slice(0, 8);
}

// ─── T2.1: QUESTION_TYPE_OPENINGS ────────────────────────────────────────────
// 5 question types × 2 languages. {echo} is replaced at render time.
const QUESTION_TYPE_OPENINGS = {
  decision: {
    vi: 'Bạn đang đứng trước một quyết định quan trọng về {echo}. Hãy để các lá bài soi sáng con đường.',
    en: 'You stand at a crossroads regarding {echo}. Let the cards illuminate the path forward.'
  },
  timing: {
    vi: 'Bạn đang tự hỏi về thời điểm phù hợp cho {echo}. Các lá bài sẽ tiết lộ nhịp điệu đang diễn ra.',
    en: 'You are wondering about the right timing for {echo}. The cards will reveal the rhythm at play.'
  },
  advice: {
    vi: 'Bạn đang tìm kiếm hướng dẫn cho {echo}. Đây là thông điệp mà các lá bài muốn truyền đạt.',
    en: 'You seek guidance on {echo}. Here is the message the cards wish to convey.'
  },
  outcome: {
    vi: 'Bạn muốn biết {echo} sẽ diễn biến như thế nào. Các lá bài phác họa bức tranh đang hình thành.',
    en: 'You want to know how {echo} will unfold. The cards paint the picture taking shape ahead.'
  },
  exploration: {
    vi: 'Các lá bài đã lên tiếng về câu hỏi đang hiện diện trong tâm trí bạn.',
    en: 'The cards have spoken to the question present in your mind.'
  }
};

// ─── T2.1: DOMAIN_FLAVORS ─────────────────────────────────────────────────────
// 7 domains × 2 languages. Short connector phrases prepended to the opening.
// general is empty — no domain flavor added.
const DOMAIN_FLAVORS = {
  career:   { vi: 'Trong lĩnh vực sự nghiệp,', en: 'In the realm of career,' },
  love:     { vi: 'Về mặt tình cảm,', en: 'In matters of the heart,' },
  finance:  { vi: 'Về phương diện tài chính,', en: 'In the realm of finances,' },
  health:   { vi: 'Về sức khỏe và thể chất,', en: 'Regarding your health and well-being,' },
  family:   { vi: 'Trong các mối quan hệ gia đình,', en: 'Within your family dynamics,' },
  personal: { vi: 'Trên hành trình phát triển bản thân,', en: 'On your path of personal growth,' },
  general:  { vi: '', en: '' }
};

// ─── T2.1: MODEL_MODIFIERS ────────────────────────────────────────────────────
// 4 reading models × 2 languages. Appended after the type opening.
// general is empty — no modifier added.
const MODEL_MODIFIERS = {
  general:    { vi: '', en: '' },
  problem:    { vi: 'Hãy cùng phân tích gốc rễ của vấn đề.', en: 'Let us examine the root cause of this matter.' },
  solution:   { vi: 'Hãy tập trung vào những hành động cụ thể bạn có thể thực hiện.', en: 'Let us focus on concrete actions you can take.' },
  crossroads: { vi: 'Hãy cân nhắc kỹ lưỡng cả hai hướng đi trước mắt bạn.', en: 'Let us weigh both paths before you carefully.' }
};

// ─── T2.1: buildQuestionAwareOpening ─────────────────────────────────────────
// Composes: [domain_flavor] + type_opening + [model_modifier]
// Returns empty string if data is unavailable (graceful degradation).
function buildQuestionAwareOpening(qCtx, model, isVi) {
  if (typeof QUESTION_TYPE_OPENINGS === 'undefined') return '';
  const lk = isVi ? 'vi' : 'en';
  const echo = qCtx.echo || (isVi ? 'câu hỏi của bạn' : 'your question');

  const typeEntry = QUESTION_TYPE_OPENINGS[qCtx.type] || QUESTION_TYPE_OPENINGS.exploration;
  const opening = (typeEntry[lk] || '').replace(/\{echo\}/g, echo);

  let flavor = '';
  if (typeof DOMAIN_FLAVORS !== 'undefined' && qCtx.domain !== 'general') {
    flavor = (DOMAIN_FLAVORS[qCtx.domain] || { vi: '', en: '' })[lk] || '';
  }

  let modifier = '';
  if (typeof MODEL_MODIFIERS !== 'undefined' && model && model !== 'general') {
    modifier = (MODEL_MODIFIERS[model] || { vi: '', en: '' })[lk] || '';
  }

  return [flavor, opening, modifier].filter(Boolean).join(' ');
}

// ─── T2.2: SENTIMENT_PREFIXES ─────────────────────────────────────────────────
// 6 sentiments × 2 card valences × 2 languages.
// Prepended before a narrative sentence when sentiment is not neutral.
// neutral has empty strings — no prefix rendered.
const SENTIMENT_PREFIXES = {
  worried: {
    positive: {
      vi: 'Dù bạn đang lo lắng, lá bài mang đến tín hiệu đáng khích lệ:',
      en: 'Despite your worries, this card brings an encouraging sign:'
    },
    challenging: {
      vi: 'Nỗi lo của bạn không phải vô cớ — lá bài xác nhận cần thận trọng:',
      en: 'Your concern is not unfounded — this card confirms the need for caution:'
    }
  },
  excited: {
    positive: {
      vi: 'Sự hào hứng của bạn có cơ sở — lá bài củng cố năng lượng tích cực:',
      en: 'Your excitement is well-founded — this card reinforces the positive energy:'
    },
    challenging: {
      vi: 'Năng lượng hào hứng cần được cân bằng — lá bài nhắc nhở:',
      en: 'Your enthusiasm needs grounding — this card offers a gentle reminder:'
    }
  },
  confused: {
    positive: {
      vi: 'Dù đang mông lung, hãy để lá bài này soi sáng con đường:',
      en: 'Though you feel unclear, let this card illuminate the way:'
    },
    challenging: {
      vi: 'Sự bối rối của bạn có lý — lá bài cho thấy cần thêm thời gian và sự kiên nhẫn:',
      en: 'Your confusion is valid — this card suggests more time and patience are needed:'
    }
  },
  stuck: {
    positive: {
      vi: 'Dù đang bế tắc, lá bài tiết lộ có lối thoát phía trước:',
      en: 'Though you feel stuck, this card reveals a way forward:'
    },
    challenging: {
      vi: 'Cảm giác bế tắc phản ánh thực tế — lá bài chỉ ra điều cần thay đổi:',
      en: 'The feeling of being blocked reflects reality — this card points to what must change:'
    }
  },
  hopeful: {
    positive: {
      vi: 'Niềm hy vọng của bạn được ủng hộ — lá bài xác nhận hướng đi:',
      en: 'Your hope is supported — this card confirms the direction:'
    },
    challenging: {
      vi: 'Hy vọng là động lực quý giá, nhưng lá bài nhắc bạn cần thực tế:',
      en: 'Hope is a precious motivator, but this card urges a grounded perspective:'
    }
  },
  neutral: {
    positive:    { vi: '', en: '' },
    challenging: { vi: '', en: '' }
  }
};

// ─── T2.3: QUESTION_NARRATIVE_FRAMES ─────────────────────────────────────────
// 5 question types × 3 card positions × 2 languages.
// Suffix phrases appended to existing narrative sentences.
// {echo} is replaced at render time.
const QUESTION_NARRATIVE_FRAMES = {
  decision: {
    past: {
      vi: '— đây là nền tảng đã dẫn đến quyết định hiện tại của bạn về {echo}.',
      en: '— this is the foundation that led to your current decision about {echo}.'
    },
    present: {
      vi: '— năng lượng này đang trực tiếp tác động đến lựa chọn của bạn về {echo}.',
      en: '— this energy directly shapes your choice regarding {echo}.'
    },
    future: {
      vi: '— đây là hướng đi nếu bạn hành động dứt khoát về {echo}.',
      en: '— this is the direction if you act decisively on {echo}.'
    }
  },
  timing: {
    past: {
      vi: '— giai đoạn này đã đặt nền móng cho thời điểm bạn đang hỏi về {echo}.',
      en: '— this phase laid the groundwork for the timing you seek regarding {echo}.'
    },
    present: {
      vi: '— năng lượng hiện tại cho thấy thời điểm cho {echo} đang dần hình thành.',
      en: '— current energy suggests the timing for {echo} is taking shape.'
    },
    future: {
      vi: '— thời điểm chín muồi cho {echo} sẽ đến theo chiều hướng này.',
      en: '— the right timing for {echo} will arrive along this trajectory.'
    }
  },
  advice: {
    past: {
      vi: '— bài học từ quá khứ chính là chìa khóa cho hướng đi bạn tìm kiếm về {echo}.',
      en: '— the lesson from the past holds the key to the guidance you seek on {echo}.'
    },
    present: {
      vi: '— đây là thông điệp trực tiếp cho câu hỏi của bạn về {echo}.',
      en: '— this is the direct message for your question about {echo}.'
    },
    future: {
      vi: '— nếu bạn áp dụng điều này, {echo} sẽ được định hướng theo chiều tích cực.',
      en: '— if you apply this, {echo} will be guided in a positive direction.'
    }
  },
  outcome: {
    past: {
      vi: '— đây là nguồn gốc của những diễn biến liên quan đến {echo}.',
      en: '— this is the origin of the unfolding related to {echo}.'
    },
    present: {
      vi: '— đây là lực lượng đang định hình kết quả của {echo}.',
      en: '— this is the force currently shaping the outcome of {echo}.'
    },
    future: {
      vi: '— đây là kết quả có khả năng xảy ra nhất liên quan đến {echo}.',
      en: '— this is the most likely outcome regarding {echo}.'
    }
  },
  exploration: {
    past: {
      vi: '— điều này phản ánh nền tảng của câu hỏi đang trong tâm trí bạn.',
      en: '— this reflects the foundation of the question present in your mind.'
    },
    present: {
      vi: '— đây là năng lượng đang hiện diện khi bạn khám phá {echo}.',
      en: '— this is the energy present as you explore {echo}.'
    },
    future: {
      vi: '— đây là hướng mà năng lượng đang dẫn bạn khi suy ngẫm về {echo}.',
      en: '— this is where the energy leads as you reflect on {echo}.'
    }
  }
};

// ─── T2.4: QUESTION_ACTION_FRAMES ────────────────────────────────────────────
// 5 question types × 4 keys × 2 languages.
// past_prefix / present_prefix / future_prefix: prepended before card action text.
// integrated: replaces the 4th "synthesis" action step entirely.
// {echo}, {past}, {past_kw}, {present}, {present_kw}, {future}, {future_kw} are slots.
const QUESTION_ACTION_FRAMES = {
  decision: {
    past_prefix: {
      vi: 'Nhìn lại {echo}:',
      en: 'Reflecting on {echo}:'
    },
    present_prefix: {
      vi: 'Về quyết định {echo} ngay lúc này:',
      en: 'Regarding your decision on {echo} right now:'
    },
    future_prefix: {
      vi: 'Sau khi quyết định về {echo}:',
      en: 'After deciding on {echo}:'
    },
    integrated: {
      vi: 'Về quyết định {echo}: kết hợp bài học từ {past} ({past_kw}), hành động theo {present} ({present_kw}), và chuẩn bị cho {future} ({future_kw}).',
      en: 'On your decision about {echo}: combine the lesson from {past} ({past_kw}), act on {present} ({present_kw}), and prepare for {future} ({future_kw}).'
    }
  },
  timing: {
    past_prefix: {
      vi: 'Nhìn lại tiến trình của {echo}:',
      en: 'Looking back at the journey of {echo}:'
    },
    present_prefix: {
      vi: 'Về thời điểm phù hợp cho {echo}:',
      en: 'Regarding the right timing for {echo}:'
    },
    future_prefix: {
      vi: 'Khi {echo} sắp đến:',
      en: 'As {echo} approaches:'
    },
    integrated: {
      vi: 'Để nắm bắt đúng thời điểm cho {echo}: {past} ({past_kw}) chỉ ra nhịp điệu trong quá khứ, {present} ({present_kw}) cho thấy khoảnh khắc hiện tại, và {future} ({future_kw}) hé lộ khi nào nên hành động.',
      en: 'To seize the right timing for {echo}: {past} ({past_kw}) reveals the past rhythm, {present} ({present_kw}) shows the current moment, and {future} ({future_kw}) hints at when to act.'
    }
  },
  advice: {
    past_prefix: {
      vi: 'Từ kinh nghiệm quá khứ về {echo}:',
      en: 'Drawing from past experience with {echo}:'
    },
    present_prefix: {
      vi: 'Hành động cụ thể cho {echo}:',
      en: 'Concrete action for {echo}:'
    },
    future_prefix: {
      vi: 'Tiến về phía trước với {echo}:',
      en: 'Moving forward with {echo}:'
    },
    integrated: {
      vi: 'Lời khuyên tổng hợp cho {echo}: {past} ({past_kw}) mang lại bài học, {present} ({present_kw}) chỉ ra hành động ngay bây giờ, và {future} ({future_kw}) vạch ra con đường tiếp theo.',
      en: 'Integrated guidance for {echo}: {past} ({past_kw}) brings a lesson, {present} ({present_kw}) points to immediate action, and {future} ({future_kw}) maps the road ahead.'
    }
  },
  outcome: {
    past_prefix: {
      vi: 'Nguồn gốc dẫn đến kết quả của {echo}:',
      en: 'The root leading to the outcome of {echo}:'
    },
    present_prefix: {
      vi: 'Lực lượng đang định hình {echo}:',
      en: 'The force shaping {echo} right now:'
    },
    future_prefix: {
      vi: 'Kết quả có khả năng xảy ra với {echo}:',
      en: 'The likely outcome for {echo}:'
    },
    integrated: {
      vi: 'Bức tranh toàn cảnh về {echo}: {past} ({past_kw}) là nguồn gốc, {present} ({present_kw}) là lực lượng hiện tại, và {future} ({future_kw}) là kết quả tiềm năng.',
      en: 'The full picture of {echo}: {past} ({past_kw}) is the origin, {present} ({present_kw}) is the current force, and {future} ({future_kw}) is the potential outcome.'
    }
  },
  exploration: {
    past_prefix: {
      vi: 'Nhìn lại câu hỏi về {echo}:',
      en: 'Looking back at the question of {echo}:'
    },
    present_prefix: {
      vi: 'Hiện tại với {echo}:',
      en: 'In the present moment with {echo}:'
    },
    future_prefix: {
      vi: 'Tiến về phía trước cùng {echo}:',
      en: 'Moving forward with {echo}:'
    },
    integrated: {
      vi: 'Khám phá {echo} qua ba lá bài: {past} ({past_kw}) hé lộ nền tảng, {present} ({present_kw}) cho thấy bức tranh hiện tại, và {future} ({future_kw}) gợi ý hướng tiếp theo.',
      en: 'Exploring {echo} through three cards: {past} ({past_kw}) reveals the foundation, {present} ({present_kw}) shows the current picture, and {future} ({future_kw}) suggests the next direction.'
    }
  }
};

// ─── T2.5: QUESTION_CLOSINGS ──────────────────────────────────────────────────
// 5 question types × 2 languages.
// Closing paragraph that circles back to the user's question.
// {echo} is replaced at render time.
const QUESTION_CLOSINGS = {
  decision: {
    vi: 'Các lá bài không chọn thay bạn — chúng soi sáng để bạn tự tin bước đi. Quyết định về {echo} nằm trong tay bạn.',
    en: 'The cards don\'t choose for you — they illuminate so you can step forward with confidence. The decision about {echo} is in your hands.'
  },
  timing: {
    vi: 'Thời điểm không phải điều có thể ép buộc, mà là điều cần nhận ra. Hãy tinh tế lắng nghe nhịp điệu đang diễn ra xung quanh {echo}.',
    en: 'Timing cannot be forced — it must be recognized. Stay attuned to the rhythm unfolding around {echo}.'
  },
  advice: {
    vi: 'Các lá bài đã chỉ đường. Bây giờ chính bạn phải bước đi — mỗi bước nhỏ về {echo} đều có ý nghĩa của nó.',
    en: 'The cards have pointed the way. Now it is you who must walk it — every small step regarding {echo} matters.'
  },
  outcome: {
    vi: 'Không có kết quả nào là bất biến. Những gì bạn chọn làm hôm nay về {echo} có thể định hình lại bức tranh phía trước.',
    en: 'No outcome is written in stone. What you choose to do today about {echo} can reshape the picture ahead.'
  },
  exploration: {
    vi: 'Hành trình khám phá {echo} vừa bắt đầu. Hãy mang theo những thông điệp này như ánh sáng dẫn đường.',
    en: 'The journey of exploring {echo} has just begun. Carry these messages as a guiding light.'
  }
};

// ─── MAIN: parseQuestion ─────────────────────────────────────────────────────
// Returns a QuestionContext object consumed by all generation functions.
// Gracefully degrades: empty question returns a safe all-default object.
// extractDomain() is defined in tarot-example.js (loaded after this file),
// so it is available at call-time even though this file loads first.
function parseQuestion(rawText, lang) {
  const text = (rawText || '').trim();
  if (!text) {
    return {
      raw: '',
      domain: 'general',
      sentiment: 'neutral',
      type: 'exploration',
      subject: 'self',
      echo: '',
      keywords: []
    };
  }
  return {
    raw: text,
    domain: (typeof extractDomain !== 'undefined') ? extractDomain(text) : 'general',
    sentiment: detectSentiment(text, lang),
    type: detectQuestionType(text, lang),
    subject: detectSubject(text, lang),
    echo: extractEcho(text, lang),
    keywords: extractKeywords(text, lang)
  };
}
