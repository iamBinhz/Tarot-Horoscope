// tarot-data.js — Enhanced Tarot Interpretation Data
// Loaded via <script src="tarot-data.js"> — all variables are global

// ─── 1. REVERSED MEANINGS (all 78 cards) ─────────────────────────────────────
const REVERSED_MEANINGS = {
  // MAJOR ARCANA
  0: { // The Fool
    en: "Recklessness, fear of the unknown, holding back from a necessary leap. The reversed Fool warns against both foolish risk-taking and paralyzing caution.",
    vi: "Liều lĩnh, sợ hãi điều chưa biết, do dự trước bước nhảy cần thiết. Fool ngược cảnh báo cả sự mạo hiểm mù quáng lẫn sự thận trọng tê liệt."
  },
  1: { // The Magician
    en: "Manipulation, untapped potential, deception. Your tools are available but misused or ignored — inner power is leaking away through distraction or dishonesty.",
    vi: "Thao túng, tiềm năng chưa khai phá, lừa dối. Công cụ có sẵn nhưng bị lạm dụng hoặc bỏ quên — sức mạnh nội tâm đang thất thoát qua xao nhãng hoặc thiếu trung thực."
  },
  2: { // The High Priestess
    en: "Secrets withheld, intuition suppressed, surface-level thinking. You are ignoring the deeper currents of your inner life at your peril.",
    vi: "Bí mật bị che giấu, trực giác bị kìm nén, tư duy hời hợt. Bạn đang bỏ qua những dòng chảy sâu hơn của nội tâm — điều này tiềm ẩn nguy cơ."
  },
  3: { // The Empress
    en: "Smothering, dependence, creative block, neglect of self. Nurturing has curdled into overprotection, or abundance has become stagnation.",
    vi: "Bao bọc thái quá, phụ thuộc, tắc nghẽn sáng tạo, bỏ bê bản thân. Sự nuôi dưỡng đã biến thành kiểm soát, hoặc sự phồn thịnh đã trở thành trì trệ."
  },
  4: { // The Emperor
    en: "Tyranny, rigidity, abuse of power, or conversely, a failure to establish any authority at all. Structure has become a cage rather than a scaffold.",
    vi: "Độc đoán, cứng nhắc, lạm dụng quyền lực, hoặc ngược lại là hoàn toàn thiếu kỷ luật. Cấu trúc đã trở thành cái lồng thay vì điểm tựa."
  },
  5: { // The Hierophant
    en: "Blind conformity, dogma, or rebellion against tradition without discernment. Either you are following rules without understanding them, or rejecting all guidance out of pride.",
    vi: "Tuân thủ mù quáng, giáo điều, hoặc nổi loạn chống lại truyền thống thiếu suy xét. Bạn đang theo quy tắc mà không hiểu chúng, hoặc từ chối mọi hướng dẫn vì kiêu ngạo."
  },
  6: { // The Lovers
    en: "Misalignment of values, poor choices driven by lust or fear, or avoidance of commitment. A relationship or decision is built on shaky foundations.",
    vi: "Giá trị không đồng nhất, lựa chọn sai lầm do ham muốn hoặc sợ hãi, né tránh cam kết. Một mối quan hệ hoặc quyết định đang được xây trên nền móng không vững."
  },
  7: { // The Chariot
    en: "Loss of control, aggression without direction, scattered willpower. The forces you are trying to harness are pulling you apart rather than forward.",
    vi: "Mất kiểm soát, hung hăng thiếu định hướng, ý chí phân tán. Những lực lượng bạn đang cố gắng kiểm soát đang kéo bạn ra tứ phía thay vì tiến lên."
  },
  8: { // Strength
    en: "Self-doubt, cowardice, or conversely, brute force replacing inner grace. Courage has retreated or has become aggression masquerading as strength.",
    vi: "Tự nghi ngờ bản thân, hèn nhát, hoặc ngược lại là vũ lực thay thế vẻ đẹp nội tâm. Lòng dũng cảm đã rút lui hoặc đã trở thành hung hăng giả danh sức mạnh."
  },
  9: { // The Hermit
    en: "Isolation becoming withdrawal, wisdom withheld, or refusal to emerge from solitude. The inner light is being hoarded rather than shared.",
    vi: "Cô đơn trở thành thu mình, sự khôn ngoan bị giữ lại, hoặc từ chối bước ra khỏi nơi ẩn dật. Ánh sáng nội tâm đang bị tích trữ thay vì chia sẻ."
  },
  10: { // Wheel of Fortune
    en: "Resistance to change, clinging to what is ending, or feeling at the mercy of external forces. The wheel turns whether you cooperate or not — resistance only creates suffering.",
    vi: "Kháng cự sự thay đổi, bám víu vào điều đang kết thúc, hoặc cảm thấy bất lực trước các lực lượng bên ngoài. Bánh xe quay dù bạn hợp tác hay không — kháng cự chỉ tạo ra đau khổ."
  },
  11: { // Justice
    en: "Dishonesty, injustice, or avoidance of accountability. You may be refusing to see your own role in a situation, or a fair outcome is being delayed or corrupted.",
    vi: "Thiếu trung thực, bất công, hoặc né tránh trách nhiệm. Bạn có thể đang từ chối nhìn nhận vai trò của mình trong một tình huống, hoặc kết quả công bằng đang bị trì hoãn hay bóp méo."
  },
  12: { // The Hanged Man
    en: "Stalling, martyrdom without purpose, or refusal to change perspective. You are stuck but resisting the very pause that would transform your view.",
    vi: "Trì hoãn, tử đạo vô mục đích, hoặc từ chối thay đổi góc nhìn. Bạn đang mắc kẹt nhưng lại kháng cự chính sự tạm dừng sẽ biến đổi tầm nhìn của bạn."
  },
  13: { // Death
    en: "Stagnation, fear of endings, or clinging to what must be released. Resisting necessary transformation keeps you trapped in a cycle that has already run its course.",
    vi: "Trì trệ, sợ hãi sự kết thúc, hoặc bám víu vào điều phải được buông bỏ. Kháng cự sự biến đổi cần thiết giữ bạn mắc kẹt trong một vòng tròn đã hết thời."
  },
  14: { // Temperance
    en: "Imbalance, excess, or a loss of patience that disrupts your flow. Extremes are pulling you out of alignment — moderation is the urgent medicine.",
    vi: "Mất cân bằng, thái quá, hoặc thiếu kiên nhẫn làm gián đoạn dòng chảy của bạn. Những thái cực đang kéo bạn ra khỏi trạng thái cân bằng — điều độ là phương thuốc cấp thiết."
  },
  15: { // The Devil
    en: "Enslavement to addiction, materialism, or toxic patterns you are not yet willing to face. The chains are real but self-forged — liberation requires honest confrontation.",
    vi: "Nô lệ cho nghiện ngập, chủ nghĩa vật chất, hoặc những khuôn mẫu độc hại mà bạn chưa sẵn sàng đối mặt. Xiềng xích có thật nhưng do chính bạn tạo ra — giải phóng đòi hỏi sự đối mặt trung thực."
  },
  16: { // The Tower
    en: "Avoiding necessary collapse, disaster prolonged by denial, or internal chaos that is spilling outward. What needs to fall is being propped up at great cost.",
    vi: "Né tránh sự sụp đổ cần thiết, thảm họa kéo dài do phủ nhận, hoặc hỗn loạn nội tâm đang lan ra bên ngoài. Điều cần đổ vỡ đang được chống đỡ với cái giá rất cao."
  },
  17: { // The Star
    en: "Loss of hope, disconnection from faith, despair that extinguishes inner light. You are struggling to believe in renewal when you need that belief most.",
    vi: "Mất hy vọng, mất kết nối với đức tin, tuyệt vọng dập tắt ánh sáng nội tâm. Bạn đang vật lộn để tin vào sự đổi mới đúng lúc bạn cần niềm tin đó nhất."
  },
  18: { // The Moon
    en: "Confusion intensified, self-deception, irrational fears ruling decisions. The shadow world has taken hold and you are unable to distinguish intuition from paranoia.",
    vi: "Hỗn loạn gia tăng, tự lừa dối, nỗi sợ vô lý chi phối quyết định. Thế giới bóng tối đã chiếm lĩnh và bạn không thể phân biệt trực giác với hoang tưởng."
  },
  19: { // The Sun
    en: "Blocked joy, excessive ego, or dimming of your authentic light through self-criticism or external pressure. Happiness is available but something is obscuring it.",
    vi: "Niềm vui bị chặn, cái tôi thái quá, hoặc ánh sáng chân thực của bạn bị lu mờ bởi tự phê bình hoặc áp lực bên ngoài. Hạnh phúc có sẵn nhưng có gì đó đang che khuất nó."
  },
  20: { // Judgement
    en: "Self-judgment, refusal to answer your calling, or inability to forgive yourself and move forward. The trumpet has sounded but you remain unmoved.",
    vi: "Tự phán xét bản thân, từ chối đáp lại tiếng gọi, hoặc không thể tha thứ cho bản thân và tiến lên. Tiếng kèn đã vang lên nhưng bạn vẫn không nhúc nhích."
  },
  21: { // The World
    en: "Incompletion, delayed closure, or refusing to acknowledge a cycle's end. You are standing at the threshold of completion but something prevents you from crossing through.",
    vi: "Chưa hoàn thành, trì hoãn kết thúc, hoặc từ chối thừa nhận sự kết thúc của một chu kỳ. Bạn đang đứng trước ngưỡng cửa hoàn thành nhưng có gì đó ngăn bạn bước qua."
  },

  // WANDS
  22: { // Ace of Wands
    en: "Creative energy blocked or misdirected, a spark that fails to ignite. Motivation is present but fear or poor timing prevents it from becoming action.",
    vi: "Năng lượng sáng tạo bị chặn hoặc lệch hướng, tia lửa không bắt cháy được. Động lực có sẵn nhưng sự sợ hãi hoặc thời điểm không đúng ngăn nó trở thành hành động."
  },
  23: { // Two of Wands
    en: "Fear of moving forward, plans that remain only dreams, indecision at the threshold. The horizon beckons but you are unwilling to leave the safety of what you know.",
    vi: "Sợ tiến lên, kế hoạch chỉ là mơ mộng, do dự ở ngưỡng cửa. Chân trời đang vẫy gọi nhưng bạn không muốn rời bỏ sự an toàn của những gì quen thuộc."
  },
  24: { // Three of Wands
    en: "Delays, setbacks, and frustrated plans. Ventures that seemed to be growing have stalled — reassess your approach rather than simply waiting for ships that may not come.",
    vi: "Trì hoãn, thất bại, và kế hoạch bị thất vọng. Những nỗ lực tưởng đang phát triển lại bị đình trệ — hãy đánh giá lại cách tiếp cận thay vì chỉ chờ đợi những con thuyền có thể không đến."
  },
  25: { // Four of Wands
    en: "Instability in home or community, celebrations disrupted, a sense of belonging undermined. The foundation you thought was secure requires renewed attention.",
    vi: "Bất ổn trong gia đình hoặc cộng đồng, lễ kỷ niệm bị gián đoạn, cảm giác thuộc về bị lung lay. Nền móng mà bạn tưởng đã vững chắc cần được quan tâm đổi mới."
  },
  26: { // Five of Wands
    en: "Suppressed conflict, passive aggression, or competition that has turned destructive. The friction that could forge you is instead eroding your confidence.",
    vi: "Xung đột bị kìm nén, hung hăng thụ động, hoặc cạnh tranh đã trở nên phá hoại. Ma sát có thể rèn giũa bạn đang thay vào đó bào mòn sự tự tin của bạn."
  },
  27: { // Six of Wands
    en: "Arrogance, fall from grace, or success that breeds complacency. The recognition you sought may prove hollow, or pride is distorting your perspective.",
    vi: "Kiêu ngạo, thất bại sau thành công, hoặc sự thành công sinh ra tự mãn. Sự công nhận bạn tìm kiếm có thể tỏ ra rỗng tuếch, hoặc kiêu hãnh đang bóp méo tầm nhìn của bạn."
  },
  28: { // Seven of Wands
    en: "Giving up ground, overwhelm, or defensiveness that has become paranoia. You may be fighting battles that do not serve you, or abandoning a position worth holding.",
    vi: "Từ bỏ trận địa, bị áp đảo, hoặc phòng thủ đã trở thành hoang tưởng. Bạn có thể đang chiến đấu những trận không phục vụ bạn, hoặc bỏ bê một vị trí đáng bảo vệ."
  },
  29: { // Eight of Wands
    en: "Scattered energy, miscommunication, or hasty actions taken without sufficient thought. Everything is moving fast but toward no clear destination.",
    vi: "Năng lượng phân tán, hiểu lầm, hoặc hành động vội vàng không đủ cân nhắc. Mọi thứ đang chuyển động nhanh nhưng không hướng đến đích rõ ràng."
  },
  30: { // Nine of Wands
    en: "Paranoia, excessive defensiveness, or exhaustion that has become total paralysis. Past wounds are preventing you from taking the final steps forward.",
    vi: "Hoang tưởng, phòng thủ quá mức, hoặc kiệt sức đã trở thành tê liệt hoàn toàn. Những vết thương trong quá khứ đang ngăn bạn thực hiện những bước cuối cùng tiến lên."
  },
  31: { // Ten of Wands
    en: "Collapse under impossible burdens, inability to delegate, or martyrdom born of misguided duty. You are drowning in responsibilities that others should share.",
    vi: "Sụp đổ dưới gánh nặng không thể chịu đựng, không thể ủy thác, hoặc tử đạo sinh ra từ nghĩa vụ lầm lạc. Bạn đang chết chìm trong những trách nhiệm mà người khác nên chia sẻ."
  },
  32: { // Page of Wands
    en: "Immaturity, lack of follow-through, or creative energy without discipline. Exciting ideas are started but abandoned before they can take root.",
    vi: "Thiếu trưởng thành, không theo đuổi đến cùng, hoặc năng lượng sáng tạo thiếu kỷ luật. Những ý tưởng thú vị được bắt đầu nhưng bị bỏ dở trước khi chúng có thể bén rễ."
  },
  33: { // Knight of Wands
    en: "Recklessness, arrogance, or action without any strategic thought. Fiery energy is burning bridges and charging into situations that require far more care.",
    vi: "Liều lĩnh, kiêu ngạo, hoặc hành động không có tư duy chiến lược. Năng lượng bốc lửa đang đốt cầu và lao vào những tình huống đòi hỏi sự cẩn thận hơn nhiều."
  },
  34: { // Queen of Wands
    en: "Jealousy, self-absorption, or a forceful personality that has turned domineering. Confidence has curdled into controlling behavior.",
    vi: "Ghen tuông, tự mãn, hoặc tính cách mạnh mẽ đã trở thành kiểm soát. Sự tự tin đã biến thành hành vi chi phối."
  },
  35: { // King of Wands
    en: "Impulsiveness, overbearing leadership, or vision without empathy. The drive to lead has become a need to control — others are silenced rather than inspired.",
    vi: "Bốc đồng, lãnh đạo áp đặt, hoặc tầm nhìn thiếu đồng cảm. Khao khát lãnh đạo đã trở thành nhu cầu kiểm soát — người khác bị im lặng thay vì được truyền cảm hứng."
  },

  // CUPS
  36: { // Ace of Cups
    en: "Emotional blockage, an inability to give or receive love, or a new emotional opportunity being refused. The heart's cup is present but turned away.",
    vi: "Tắc nghẽn cảm xúc, không thể cho hoặc nhận tình yêu, hoặc cơ hội cảm xúc mới bị từ chối. Chiếc cốc của trái tim có mặt nhưng bị quay đi."
  },
  37: { // Two of Cups
    en: "Disconnection, imbalance in a relationship, or a partnership where one person gives and the other withholds. The harmony of mutual recognition has broken down.",
    vi: "Mất kết nối, mất cân bằng trong mối quan hệ, hoặc một quan hệ đối tác nơi một người cho và người kia giữ lại. Sự hài hòa của nhận thức lẫn nhau đã sụp đổ."
  },
  38: { // Three of Cups
    en: "Overindulgence, gossip within a group, or a social circle that has become exclusionary or toxic. The joy of community has been replaced by cliques and excess.",
    vi: "Phóng túng thái quá, tin đồn trong nhóm, hoặc vòng tròn xã hội đã trở nên loại trừ hoặc độc hại. Niềm vui của cộng đồng đã bị thay thế bởi bè phái và thái quá."
  },
  39: { // Four of Cups
    en: "Prolonged apathy, refusal to engage with opportunities, or a withdrawal from life that has become depression. You are so turned inward that the world's gifts cannot reach you.",
    vi: "Thờ ơ kéo dài, từ chối tham gia với các cơ hội, hoặc sự thu mình khỏi cuộc sống đã trở thành trầm cảm. Bạn hướng nội đến mức những món quà của thế giới không thể đến với bạn."
  },
  40: { // Five of Cups
    en: "Inability to move past grief, wallowing in loss, or refusing to see what remains. The mourning has become an identity rather than a passage.",
    vi: "Không thể vượt qua nỗi đau, đắm chìm trong mất mát, hoặc từ chối nhìn thấy những gì còn lại. Sự than khóc đã trở thành bản sắc thay vì là một giai đoạn."
  },
  41: { // Six of Cups
    en: "Living in the past, nostalgia that prevents present engagement, or childhood wounds left unexamined. The sweetness of memory has curdled into escapism.",
    vi: "Sống trong quá khứ, hoài niệm ngăn cản sự tham gia hiện tại, hoặc vết thương thời thơ ấu chưa được xem xét. Sự ngọt ngào của ký ức đã biến thành chủ nghĩa thoát ly."
  },
  42: { // Seven of Cups
    en: "Paralysis through fantasy, chasing illusions, or an inability to commit to any single reality. The overabundance of choices has become a trap that prevents all action.",
    vi: "Tê liệt vì mơ mộng, theo đuổi ảo tưởng, hoặc không thể cam kết với bất kỳ thực tại nào. Sự dư thừa của lựa chọn đã trở thành cái bẫy ngăn mọi hành động."
  },
  43: { // Eight of Cups
    en: "Drifting, inability to commit or follow through, or abandoning situations that actually deserve more effort. What looks like moving on may be running away.",
    vi: "Trôi dạt, không thể cam kết hoặc theo đuổi đến cùng, hoặc bỏ rơi những tình huống thực sự xứng đáng được nỗ lực hơn. Điều trông như tiến lên có thể là bỏ trốn."
  },
  44: { // Nine of Cups
    en: "Smug complacency, indulgence taken too far, or material satisfaction masking deeper emptiness. The wish has been granted but it is not what you truly needed.",
    vi: "Tự mãn ngạo mạn, phóng túng đi quá xa, hoặc sự thỏa mãn vật chất che giấu sự trống rỗng sâu hơn. Điều ước đã được thực hiện nhưng không phải thứ bạn thực sự cần."
  },
  45: { // Ten of Cups
    en: "Fractured family harmony, unrealistic ideals of happiness, or emotional fulfillment that appears complete but harbors hidden cracks. The picture-perfect vision is a facade.",
    vi: "Hòa hợp gia đình bị vỡ, lý tưởng hạnh phúc phi thực tế, hoặc sự viên mãn cảm xúc trông có vẻ hoàn chỉnh nhưng ẩn chứa những vết nứt. Hình ảnh hoàn hảo là một mặt tiền."
  },
  46: { // Page of Cups
    en: "Emotional immaturity, day-dreaming without action, or intuitive messages being dismissed. The heart speaks but the rational mind refuses to listen.",
    vi: "Thiếu trưởng thành cảm xúc, mơ mộng không hành động, hoặc những thông điệp trực giác bị gạt đi. Trái tim lên tiếng nhưng tâm trí lý tính từ chối lắng nghe."
  },
  47: { // Knight of Cups
    en: "Moodiness, manipulation through charm, or romantic idealism that blinds you to reality. The grand romantic gesture conceals a lack of genuine commitment.",
    vi: "Bất ổn tâm trạng, thao túng qua sức hút, hoặc lý tưởng lãng mạn che khuất thực tế. Cử chỉ lãng mạn lớn lao che giấu sự thiếu cam kết chân thực."
  },
  48: { // Queen of Cups
    en: "Emotional manipulation, codependency, or losing yourself in the needs of others. Empathy has become enmeshment — your compassion is draining your own wellbeing.",
    vi: "Thao túng cảm xúc, phụ thuộc lẫn nhau, hoặc đánh mất bản thân trong nhu cầu của người khác. Sự đồng cảm đã trở thành vướng mắc — lòng trắc ẩn của bạn đang làm cạn kiệt sức khỏe của chính bạn."
  },
  49: { // King of Cups
    en: "Emotional manipulation disguised as wisdom, repressed feelings that erupt as cold detachment, or using authority to suppress vulnerability in others.",
    vi: "Thao túng cảm xúc ẩn dưới dạng sự khôn ngoan, cảm xúc bị kìm nén bùng phát thành sự lạnh lùng xa cách, hoặc dùng quyền lực để triệt tiêu sự dễ bị tổn thương ở người khác."
  },

  // SWORDS
  50: { // Ace of Swords
    en: "Confusion, mental fog, or a truth too brutal and wielded without compassion. Clarity is available but something prevents you from cutting through to it.",
    vi: "Hỗn loạn, sương mù tinh thần, hoặc sự thật quá tàn nhẫn được dùng mà không có lòng trắc ẩn. Sự rõ ràng có sẵn nhưng có gì đó ngăn bạn tiếp cận nó."
  },
  51: { // Two of Swords
    en: "Prolonged avoidance, a decision deliberately deferred until it causes harm, or deliberate blindness to a truth that demands acknowledgment.",
    vi: "Né tránh kéo dài, quyết định cố tình hoãn lại cho đến khi gây hại, hoặc cố ý mù quáng trước sự thật đòi hỏi được thừa nhận."
  },
  52: { // Three of Swords
    en: "Holding onto pain long after it has served its purpose, reopening wounds instead of letting them heal, or using past hurt as justification for current behavior.",
    vi: "Giữ nỗi đau lâu sau khi nó đã phục vụ mục đích, mở lại vết thương thay vì để chúng lành, hoặc dùng tổn thương trong quá khứ để biện minh cho hành vi hiện tại."
  },
  53: { // Four of Swords
    en: "Restlessness that prevents recovery, forced activity when rest is the true medicine, or isolation that has become disengagement from life.",
    vi: "Bồn chồn ngăn cản sự phục hồi, hoạt động cưỡng bức khi nghỉ ngơi mới là thuốc thực sự, hoặc cô lập đã trở thành sự thoát ly khỏi cuộc sống."
  },
  54: { // Five of Swords
    en: "Conflict that has escalated beyond all proportion, a pattern of winning battles while losing the relationship, or being on the receiving end of someone's aggression.",
    vi: "Xung đột leo thang vượt quá mọi tỷ lệ, mô hình chiến thắng trận đấu nhưng mất mối quan hệ, hoặc trở thành mục tiêu của sự hung hăng của ai đó."
  },
  55: { // Six of Swords
    en: "Resistance to necessary transition, carrying too much baggage into a new chapter, or a journey toward healing that has stalled midway.",
    vi: "Kháng cự sự chuyển tiếp cần thiết, mang quá nhiều hành lý vào chương mới, hoặc hành trình hướng đến chữa lành đã bị đình trệ giữa đường."
  },
  56: { // Seven of Swords
    en: "Being caught in deception — your own or another's — or the consequences of past dishonesty now surfacing. Evasion has created the very trap it sought to avoid.",
    vi: "Bị mắc kẹt trong sự lừa dối — của bạn hoặc của người khác — hoặc hậu quả của sự thiếu trung thực trong quá khứ đang nổi lên. Sự né tránh đã tạo ra chính cái bẫy mà nó tìm cách tránh."
  },
  57: { // Eight of Swords
    en: "Beginning to recognize the prison you have built with your own thoughts, or conversely, even deeper entrapment through denial. The blindfold slips, or is tied tighter.",
    vi: "Bắt đầu nhận ra nhà tù bạn đã xây bằng chính suy nghĩ của mình, hoặc ngược lại, bị giam cầm sâu hơn qua sự phủ nhận. Dải bịt mắt trượt xuống, hoặc bị buộc chặt hơn."
  },
  58: { // Nine of Swords
    en: "Mental torment that has become an addiction, catastrophizing beyond any realistic basis, or a refusal to seek help that would relieve genuine suffering.",
    vi: "Sự dày vò tinh thần đã trở thành nghiện, phóng đại thảm họa vượt quá bất kỳ cơ sở thực tế nào, hoặc từ chối tìm kiếm sự giúp đỡ có thể giảm bớt đau khổ thực sự."
  },
  59: { // Ten of Swords
    en: "Refusing to accept that something is truly over, or playing the victim beyond what serves your healing. The dramatic ending has passed but the performance continues.",
    vi: "Từ chối chấp nhận rằng điều gì đó đã thực sự kết thúc, hoặc đóng vai nạn nhân vượt quá điều phục vụ sự chữa lành của bạn. Cái kết thảm đã qua nhưng màn trình diễn vẫn tiếp tục."
  },
  60: { // Page of Swords
    en: "Gossip, sharp words used carelessly, or surveillance and curiosity that crosses into mistrust. Intellectual energy is becoming sharp-tongued rather than sharp-minded.",
    vi: "Tin đồn, lời nói sắc bén dùng bất cẩn, hoặc giám sát và tò mò vượt qua ranh giới sang mất tin tưởng. Năng lượng trí tuệ đang trở nên sắc miệng thay vì sắc trí."
  },
  61: { // Knight of Swords
    en: "Reckless aggression, cutting words that wound without healing, or intellectual arrogance that dismisses all perspectives but your own.",
    vi: "Hung hăng liều lĩnh, những lời nói sắc bén gây thương tổn không chữa lành, hoặc kiêu ngạo trí tuệ bác bỏ mọi góc nhìn ngoại trừ của bạn."
  },
  62: { // Queen of Swords
    en: "Cold cruelty disguised as honesty, bitterness that has calcified into cynicism, or the use of intelligence to wound rather than illuminate.",
    vi: "Sự tàn nhẫn lạnh lùng ngụy trang thành sự thành thật, cay đắng đã đóng cứng thành chủ nghĩa hoài nghi, hoặc dùng trí thông minh để gây tổn thương thay vì soi sáng."
  },
  63: { // King of Swords
    en: "Tyrannical judgment, the misuse of authority to control through fear, or cold logical analysis that has lost all connection to human compassion.",
    vi: "Phán xét độc đoán, lạm dụng quyền lực để kiểm soát qua sợ hãi, hoặc phân tích logic lạnh lùng đã mất hoàn toàn kết nối với lòng nhân ái."
  },

  // PENTACLES
  64: { // Ace of Pentacles
    en: "A material opportunity missed or squandered, poor financial timing, or a seed of prosperity that was planted but never tended.",
    vi: "Cơ hội vật chất bị bỏ lỡ hoặc phung phí, thời điểm tài chính kém, hoặc hạt giống thịnh vượng được gieo nhưng chưa bao giờ được chăm sóc."
  },
  65: { // Two of Pentacles
    en: "Dropped balls, financial overwhelm, or a juggling act that has collapsed under the weight of too many competing priorities.",
    vi: "Những quả bóng bị rơi, kiệt sức tài chính, hoặc màn tung hứng đã sụp đổ dưới sức nặng của quá nhiều ưu tiên cạnh tranh."
  },
  66: { // Three of Pentacles
    en: "Poor collaboration, credit uncredited, or skilled work going unrecognized. The team dynamic is fractured — egos prevent the combined effort from achieving its potential.",
    vi: "Hợp tác kém, công lao không được ghi nhận, hoặc công việc khéo léo không được nhìn nhận. Động lực nhóm bị phá vỡ — cái tôi ngăn nỗ lực kết hợp đạt tiềm năng."
  },
  67: { // Four of Pentacles
    en: "Miserliness, fear-based hoarding, or clinging to material security at the cost of generosity and growth. What you grip so tightly is actually diminishing.",
    vi: "Keo kiệt, tích trữ do sợ hãi, hoặc bám víu vào an toàn vật chất với cái giá của lòng hào phóng và sự phát triển. Thứ bạn nắm chặt đến vậy thực ra đang co lại."
  },
  68: { // Five of Pentacles
    en: "Refusing help that is available, wallowing in lack while resources exist nearby, or allowing material hardship to become a defining identity.",
    vi: "Từ chối sự giúp đỡ có sẵn, đắm chìm trong thiếu thốn trong khi nguồn lực tồn tại gần đó, hoặc để khó khăn vật chất trở thành bản sắc xác định."
  },
  69: { // Six of Pentacles
    en: "Inequality in giving and receiving, charity with strings attached, or generosity weaponized to create dependency. The flow of resources has become manipulative.",
    vi: "Bất bình đẳng trong cho và nhận, từ thiện có điều kiện, hoặc lòng hào phóng được vũ khí hóa để tạo ra sự phụ thuộc. Dòng chảy của nguồn lực đã trở nên thao túng."
  },
  70: { // Seven of Pentacles
    en: "Impatience that abandons work before it can bear fruit, or conversely, pouring effort into ventures that have genuinely run their course.",
    vi: "Sự thiếu kiên nhẫn từ bỏ công việc trước khi nó có thể ra quả, hoặc ngược lại, đổ nỗ lực vào những công việc đã thực sự hết thời."
  },
  71: { // Eight of Pentacles
    en: "Drudgery without purpose, perfectionism that stalls rather than improves, or skills applied to the wrong work entirely.",
    vi: "Lao lực không mục đích, chủ nghĩa hoàn hảo làm đình trệ thay vì cải thiện, hoặc kỹ năng được áp dụng hoàn toàn vào công việc sai."
  },
  72: { // Nine of Pentacles
    en: "False independence, material success that masks deep loneliness, or self-sufficiency as a defense against intimacy.",
    vi: "Sự độc lập giả tạo, thành công vật chất che giấu sự cô đơn sâu sắc, hoặc tự cung tự cấp như một biện pháp phòng vệ chống lại sự thân mật."
  },
  73: { // Ten of Pentacles
    en: "Family dysfunction hidden beneath a veneer of wealth, legacy disputes, or material success purchased at the cost of genuine connection.",
    vi: "Rối loạn gia đình ẩn dưới lớp vẻ ngoài giàu có, tranh chấp di sản, hoặc thành công vật chất được mua với cái giá của sự kết nối chân thực."
  },
  74: { // Page of Pentacles
    en: "Procrastination, all study and no application, or ambition without the disciplined follow-through that would make it real.",
    vi: "Trì hoãn, chỉ học mà không áp dụng, hoặc tham vọng thiếu sự kiên trì kỷ luật để biến nó thành thực tế."
  },
  75: { // Knight of Pentacles
    en: "Stubborn stagnation, work that has become routine to the point of meaninglessness, or reliability so rigid it cannot adapt to changing circumstances.",
    vi: "Trì trệ cứng đầu, công việc đã trở thành thói quen đến mức vô nghĩa, hoặc sự đáng tin cậy quá cứng nhắc không thể thích nghi với hoàn cảnh thay đổi."
  },
  76: { // Queen of Pentacles
    en: "Smothering under the guise of nurturing, domestic imbalance, or material focus that crowds out emotional and spiritual needs.",
    vi: "Bao bọc thái quá dưới danh nghĩa nuôi dưỡng, mất cân bằng trong gia đình, hoặc tập trung vật chất lấn át nhu cầu cảm xúc và tâm linh."
  },
  77: { // King of Pentacles
    en: "Obsession with wealth and status, corruption through material power, or confusing financial security with genuine worth as a human being.",
    vi: "Ám ảnh với sự giàu có và địa vị, bị tha hóa qua quyền lực vật chất, hoặc nhầm lẫn an toàn tài chính với giá trị thực sự như một con người."
  }
};

// ─── 2. MAJOR POSITION INTERPRETATIONS (22 cards × 3 positions) ───────────────
const MAJOR_POSITION_INTERP = {
  0: { // The Fool
    past: {
      en: "A leap of faith you took — perhaps impulsive, perhaps inspired — set the entire foundation for where you now stand. That beginning, however naive, was necessary.",
      vi: "Một bước nhảy niềm tin bạn đã thực hiện — có thể bốc đồng, có thể được truyền cảm hứng — đã đặt nền móng cho nơi bạn đang đứng. Khởi đầu đó, dù ngây thơ đến đâu, là cần thiết."
    },
    present: {
      en: "Right now, the universe asks you to take a fresh leap into the unknown. Overthinking will not serve you — the path reveals itself only to those who are already walking it.",
      vi: "Ngay lúc này, vũ trụ yêu cầu bạn thực hiện bước nhảy mới vào vùng chưa biết. Suy nghĩ quá nhiều sẽ không giúp ích gì — con đường chỉ hiện ra cho những ai đã đang bước đi."
    },
    future: {
      en: "A new chapter is approaching that will ask everything of your beginner's mind. Prepare to release what you think you know and step into genuinely unknown territory.",
      vi: "Một chương mới đang đến, đòi hỏi tất cả tâm trí của người mới bắt đầu. Hãy chuẩn bị buông bỏ những gì bạn nghĩ bạn biết và bước vào vùng đất thực sự chưa quen."
    }
  },
  1: { // The Magician
    past: {
      en: "You once wielded your skills and resources with focused intention, and that purposeful action created the circumstances you now inhabit.",
      vi: "Bạn đã từng sử dụng kỹ năng và nguồn lực với ý định tập trung, và hành động có mục đích đó đã tạo ra hoàn cảnh bạn đang ở."
    },
    present: {
      en: "Every tool you need is already in your possession. The Magician calls you to act now with full focus — your capacity to shape reality through will and skill is at its peak.",
      vi: "Mọi công cụ bạn cần đều đã trong tầm tay. Magician kêu gọi bạn hành động ngay với sự tập trung hoàn toàn — khả năng định hình thực tế qua ý chí và kỹ năng đang ở đỉnh cao."
    },
    future: {
      en: "A moment of true power approaches — a time when your skills, will, and resources will align perfectly. Prepare to act decisively when that window opens.",
      vi: "Một khoảnh khắc quyền năng thực sự đang đến — thời điểm kỹ năng, ý chí và nguồn lực của bạn sẽ căn chỉnh hoàn hảo. Hãy chuẩn bị hành động quyết đoán khi cánh cửa đó mở ra."
    }
  },
  2: { // The High Priestess
    past: {
      en: "A time of deep inner knowing shaped your path — perhaps you listened to your intuition, or perhaps you ignored it. Either way, that silent knowing left its mark.",
      vi: "Một giai đoạn hiểu biết nội tâm sâu sắc đã định hình con đường của bạn — có thể bạn đã lắng nghe trực giác, hoặc có thể bạn đã bỏ qua nó. Dù sao, sự hiểu biết thầm lặng đó đã để lại dấu ấn."
    },
    present: {
      en: "Something important is hidden beneath the surface of what you can see. Quiet your mind, trust your instincts, and the High Priestess will reveal what the rational eye cannot perceive.",
      vi: "Có điều gì đó quan trọng ẩn sâu dưới bề mặt những gì bạn có thể nhìn thấy. Hãy yên tĩnh tâm trí, tin vào bản năng và High Priestess sẽ tiết lộ những gì mắt lý tính không thể nhận ra."
    },
    future: {
      en: "A period of deep inner work and hidden knowledge awaits you. What is currently concealed will be revealed — but only to the patient and the perceptive.",
      vi: "Một giai đoạn làm việc nội tâm sâu sắc và kiến thức ẩn đang chờ bạn. Những gì hiện đang được che giấu sẽ được tiết lộ — nhưng chỉ cho người kiên nhẫn và thấu cảm."
    }
  },
  3: { // The Empress
    past: {
      en: "A season of abundance, creative flowering, or nurturing love shaped the ground beneath you. The seeds planted then are still bearing fruit in your present life.",
      vi: "Một mùa phong phú, nở hoa sáng tạo, hoặc tình yêu nuôi dưỡng đã định hình nền đất dưới chân bạn. Những hạt giống được gieo lúc đó vẫn đang ra quả trong cuộc sống hiện tại của bạn."
    },
    present: {
      en: "You are in a season of natural abundance and creative fertility. The Empress asks you to slow down, receive, create, and allow life to bloom through you without forcing it.",
      vi: "Bạn đang trong mùa phong phú tự nhiên và màu mỡ sáng tạo. Empress yêu cầu bạn chậm lại, nhận lấy, sáng tạo và để cuộc sống nở hoa qua bạn mà không ép buộc."
    },
    future: {
      en: "A rich creative season is coming — fertile ground for new projects, relationships, or personal growth. Plant your seeds with care now, for the harvest ahead will be generous.",
      vi: "Một mùa sáng tạo phong phú đang đến — mảnh đất màu mỡ cho dự án, mối quan hệ mới, hoặc phát triển cá nhân. Hãy gieo hạt cẩn thận ngay bây giờ, vì mùa gặt phía trước sẽ hào phóng."
    }
  },
  4: { // The Emperor
    past: {
      en: "Structure, discipline, or the influence of an authority figure shaped the foundation of your current circumstances — for better or worse.",
      vi: "Cấu trúc, kỷ luật, hoặc ảnh hưởng của một nhân vật có thẩm quyền đã định hình nền tảng của hoàn cảnh hiện tại của bạn — tốt hay xấu."
    },
    present: {
      en: "You are called to lead with clarity and establish structures that support your goals. The Emperor demands discipline — and rewards it with tangible, lasting results.",
      vi: "Bạn được kêu gọi lãnh đạo với sự rõ ràng và thiết lập các cấu trúc hỗ trợ mục tiêu của bạn. Emperor đòi hỏi kỷ luật — và thưởng cho nó với kết quả cụ thể, lâu dài."
    },
    future: {
      en: "A period of building and consolidation lies ahead. The structures you establish now will define your security for years to come — build them wisely and with clear intention.",
      vi: "Một giai đoạn xây dựng và củng cố đang ở phía trước. Các cấu trúc bạn thiết lập bây giờ sẽ định nghĩa sự an toàn của bạn trong nhiều năm tới — hãy xây dựng chúng thận trọng và với ý định rõ ràng."
    }
  },
  5: { // The Hierophant
    past: {
      en: "Tradition, spiritual guidance, or institutional structures shaped your worldview in formative ways. The teachings you received then — accepted or rejected — still operate within you.",
      vi: "Truyền thống, hướng dẫn tâm linh, hoặc các cấu trúc thể chế đã định hình quan điểm của bạn theo những cách cơ bản. Những lời dạy bạn nhận được lúc đó — chấp nhận hay bác bỏ — vẫn đang hoạt động trong bạn."
    },
    present: {
      en: "A teacher, tradition, or established path holds wisdom you need right now. The Hierophant asks whether you are seeking guidance from proven sources — or stubbornly refusing it.",
      vi: "Một thầy giáo, truyền thống, hoặc con đường đã được thiết lập đang chứa đựng sự khôn ngoan bạn cần ngay bây giờ. Hierophant hỏi liệu bạn có đang tìm kiếm hướng dẫn từ các nguồn đã được chứng minh — hay cứng đầu từ chối."
    },
    future: {
      en: "A mentor, tradition, or rite of passage approaches that will transmit important wisdom. Be open to learning from those who have walked the path before you.",
      vi: "Một người cố vấn, truyền thống, hoặc nghi lễ trưởng thành đang đến sẽ truyền đạt sự khôn ngoan quan trọng. Hãy cởi mở để học từ những người đã đi trên con đường trước bạn."
    }
  },
  6: { // The Lovers
    past: {
      en: "A significant choice about love, values, or alignment shaped your current path. That decision — made from the heart or made from fear — echoes in your present situation.",
      vi: "Một lựa chọn quan trọng về tình yêu, giá trị, hoặc sự căn chỉnh đã định hình con đường hiện tại của bạn. Quyết định đó — được đưa ra từ trái tim hoặc từ nỗi sợ hãi — vang vọng trong tình huống hiện tại của bạn."
    },
    present: {
      en: "A profound choice stands before you — one that requires true alignment of heart and values, not just logic. The Lovers ask: what does your deepest self truly choose?",
      vi: "Một lựa chọn sâu sắc đang đứng trước bạn — đòi hỏi sự căn chỉnh thực sự của trái tim và giá trị, không chỉ là logic. Lovers hỏi: bản thân sâu thẳm nhất của bạn thực sự chọn gì?"
    },
    future: {
      en: "A meaningful union or decisive crossroads approaches — whether in love, partnership, or personal values. The choice that comes will ask you to commit wholeheartedly.",
      vi: "Một sự kết hợp có ý nghĩa hoặc ngã rẽ quyết định đang đến — dù trong tình yêu, quan hệ đối tác, hoặc giá trị cá nhân. Lựa chọn sắp tới sẽ yêu cầu bạn cam kết hết lòng."
    }
  },
  7: { // The Chariot
    past: {
      en: "A period of determined forward motion — a victory hard won through sheer force of will — set the momentum that carries you to this moment.",
      vi: "Một giai đoạn tiến về phía trước kiên quyết — một chiến thắng giành được khó khăn qua ý chí thuần túy — đã tạo ra đà mang bạn đến khoảnh khắc này."
    },
    present: {
      en: "Victory is within reach but demands that you seize the reins right now. Opposing forces must be harnessed, not surrendered to — your will is the only deciding factor.",
      vi: "Chiến thắng trong tầm tay nhưng đòi hỏi bạn nắm chặt cương ngay bây giờ. Các lực lượng đối lập phải được kiềm chế, không phải đầu hàng — ý chí của bạn là yếu tố quyết định duy nhất."
    },
    future: {
      en: "A triumph through determination and focused drive is approaching. The Chariot promises success — but only to those who commit fully and steer with absolute conviction.",
      vi: "Một chiến thắng qua sự quyết tâm và động lực tập trung đang đến gần. Chariot hứa hẹn thành công — nhưng chỉ cho những ai cam kết hoàn toàn và lái với niềm tin tuyệt đối."
    }
  },
  8: { // Strength
    past: {
      en: "You faced something that required quiet courage and inner resilience. That period of gentle perseverance built a depth of character that now serves as your foundation.",
      vi: "Bạn đã đối mặt với điều gì đó đòi hỏi lòng dũng cảm thầm lặng và sức bền nội tâm. Giai đoạn kiên trì nhẹ nhàng đó đã xây dựng chiều sâu tính cách hiện là nền móng của bạn."
    },
    present: {
      en: "Inner strength — not force — is what this moment requires. Approach your challenge with compassion and patience; the gentle hand achieves what the iron fist cannot.",
      vi: "Sức mạnh nội tâm — không phải vũ lực — là điều khoảnh khắc này đòi hỏi. Hãy tiếp cận thử thách của bạn với lòng trắc ẩn và sự kiên nhẫn; bàn tay nhẹ nhàng đạt được điều mà nắm đấm sắt không thể."
    },
    future: {
      en: "A test of your inner resilience approaches — one that will be met not through aggression but through the quiet, unshakeable courage of your truest self.",
      vi: "Một bài kiểm tra sức bền nội tâm đang đến — sẽ được đáp lại không phải qua hung hăng mà qua lòng dũng cảm thầm lặng, không lay chuyển của bản thân chân thực nhất của bạn."
    }
  },
  9: { // The Hermit
    past: {
      en: "A period of solitude, introspection, or spiritual seeking defined the person you have become. The wisdom you gathered in that quiet season now lights your path.",
      vi: "Một giai đoạn cô đơn, nội tâm, hoặc tìm kiếm tâm linh đã định nghĩa con người bạn đã trở thành. Sự khôn ngoan bạn tích lũy trong mùa yên tĩnh đó giờ soi sáng con đường của bạn."
    },
    present: {
      en: "Withdraw from the noise and seek your inner light. The Hermit calls for solitude and self-examination now — the answer you seek lives in stillness, not in the world outside.",
      vi: "Rút khỏi tiếng ồn và tìm kiếm ánh sáng nội tâm của bạn. Hermit kêu gọi sự cô đơn và tự xem xét ngay bây giờ — câu trả lời bạn tìm kiếm nằm trong sự tĩnh lặng, không phải trong thế giới bên ngoài."
    },
    future: {
      en: "A season of meaningful solitude approaches — a time for deep inner work that will renew your sense of direction. Embrace the retreat; it will illuminate what comes next.",
      vi: "Một mùa cô đơn có ý nghĩa đang đến — thời điểm làm việc nội tâm sâu sắc sẽ đổi mới cảm giác định hướng của bạn. Hãy đón nhận sự rút lui; nó sẽ soi sáng những gì đến tiếp theo."
    }
  },
  10: { // Wheel of Fortune
    past: {
      en: "A pivotal turning point — a stroke of fate or a sudden shift in circumstances — set the current cycle in motion. You are living in the wake of that great turning.",
      vi: "Một bước ngoặt then chốt — một cú vận may hay sự thay đổi đột ngột trong hoàn cảnh — đã khởi động chu kỳ hiện tại. Bạn đang sống trong dư âm của bước ngoặt vĩ đại đó."
    },
    present: {
      en: "The wheel is turning right now, whether you feel it or not. Align yourself with the current of change rather than fighting it — ride the momentum rather than resist it.",
      vi: "Bánh xe đang quay ngay bây giờ, dù bạn có cảm nhận hay không. Hãy căn chỉnh mình với dòng chảy của sự thay đổi thay vì chống lại nó — cưỡi đà thay vì kháng cự."
    },
    future: {
      en: "A major turning point is imminent. Fortune is shifting, and the new cycle approaching will redefine your circumstances in significant ways. Prepare to move with it.",
      vi: "Một bước ngoặt lớn đang sắp xảy ra. Vận may đang thay đổi, và chu kỳ mới đang đến sẽ tái định nghĩa hoàn cảnh của bạn theo những cách đáng kể. Hãy chuẩn bị di chuyển cùng nó."
    }
  },
  11: { // Justice
    past: {
      en: "A moment of reckoning, a legal matter, or the consequences of past choices shaped your present reality. Truth played out — as it always must — in your history.",
      vi: "Một khoảnh khắc thanh toán, một vấn đề pháp lý, hoặc hậu quả của những lựa chọn trong quá khứ đã định hình thực tế hiện tại của bạn. Sự thật đã diễn ra — như nó luôn phải — trong lịch sử của bạn."
    },
    present: {
      en: "Truth, fairness, and accountability are the forces at work right now. Act with complete integrity — Justice sees all, records all, and balances all in time.",
      vi: "Sự thật, công bằng và trách nhiệm là các lực lượng đang hoạt động ngay bây giờ. Hành động với sự chính trực hoàn toàn — Justice nhìn thấy tất cả, ghi lại tất cả và cân bằng tất cả theo thời gian."
    },
    future: {
      en: "A time of honest reckoning approaches — a just outcome, a legal resolution, or a karmic balance. The scales will settle; ensure your actions now can withstand their scrutiny.",
      vi: "Một thời điểm thanh toán trung thực đang đến — một kết quả công bằng, giải quyết pháp lý, hoặc cân bằng nghiệp. Cán cân sẽ ổn định; đảm bảo hành động của bạn bây giờ có thể chịu đựng sự xem xét của chúng."
    }
  },
  12: { // The Hanged Man
    past: {
      en: "A period of enforced waiting, voluntary sacrifice, or a radical shift in perspective gave you wisdom that those who never paused could never possess.",
      vi: "Một giai đoạn chờ đợi bắt buộc, hy sinh tự nguyện, hoặc sự thay đổi triệt để trong góc nhìn đã cho bạn sự khôn ngoan mà những người chưa bao giờ dừng lại không thể có."
    },
    present: {
      en: "Surrender control and hang in the uncomfortable pause. The Hanged Man teaches that the perspective you desperately need can only be found by stopping all forward motion and waiting.",
      vi: "Từ bỏ kiểm soát và treo mình trong khoảng dừng khó chịu. Hanged Man dạy rằng góc nhìn bạn cần thiết tha chỉ có thể tìm thấy bằng cách dừng mọi chuyển động tiến và chờ đợi."
    },
    future: {
      en: "A necessary pause is approaching — a time to release, wait, and allow a new perspective to emerge on its own terms. Do not rush this season of suspension.",
      vi: "Một khoảng dừng cần thiết đang đến — thời điểm để buông bỏ, chờ đợi và để một góc nhìn mới nổi lên theo điều kiện của chính nó. Đừng vội vàng mùa này của sự dừng lại."
    }
  },
  13: { // Death
    past: {
      en: "A profound ending — the loss of something or someone, a shedding of an old identity — cleared the ground that everything in your present life is now growing on.",
      vi: "Một kết thúc sâu sắc — mất mát điều gì đó hoặc ai đó, sự lột bỏ một bản sắc cũ — đã dọn sạch mảnh đất mà mọi thứ trong cuộc sống hiện tại của bạn đang phát triển."
    },
    present: {
      en: "Something is ending — and it must. Death asks you to release what has completed its purpose and trust that what lies on the other side of this transformation will surpass what you are letting go.",
      vi: "Điều gì đó đang kết thúc — và nó phải như vậy. Death yêu cầu bạn buông bỏ những gì đã hoàn thành mục đích của nó và tin tưởng rằng những gì nằm ở phía kia của sự chuyển hóa này sẽ vượt qua những gì bạn đang buông bỏ."
    },
    future: {
      en: "A powerful transformation lies ahead — an ending that makes space for a beginning you cannot yet imagine. Face it without flinching; the rebirth on the other side is real.",
      vi: "Một sự chuyển hóa mạnh mẽ đang ở phía trước — một kết thúc tạo ra không gian cho một khởi đầu mà bạn chưa thể tưởng tượng. Hãy đối mặt nó không run rẩy; sự tái sinh ở phía kia là có thật."
    }
  },
  14: { // Temperance
    past: {
      en: "A period of patient blending, healing, or the discovery of balance after extremes shaped the steady equilibrium you carry with you today.",
      vi: "Một giai đoạn pha trộn kiên nhẫn, chữa lành, hoặc khám phá sự cân bằng sau những thái cực đã định hình trạng thái cân bằng ổn định bạn mang theo ngày hôm nay."
    },
    present: {
      en: "Temperance calls you to the middle path right now — to flow between extremes, blend what seems incompatible, and find the deep peace of genuine equilibrium.",
      vi: "Temperance kêu gọi bạn đến con đường trung dung ngay bây giờ — để chảy giữa các thái cực, pha trộn những gì có vẻ không tương thích và tìm thấy sự bình yên sâu sắc của cân bằng chân thực."
    },
    future: {
      en: "A healing and integrating season approaches — a time when patience and moderation will bring together elements that have been at odds into a new, working harmony.",
      vi: "Một mùa chữa lành và tích hợp đang đến — thời điểm sự kiên nhẫn và điều độ sẽ kết hợp những yếu tố đã mâu thuẫn thành một sự hài hòa mới, hoạt động được."
    }
  },
  15: { // The Devil
    past: {
      en: "A period of bondage — to a person, a pattern, an addiction, or an illusion — left marks that still influence your choices and patterns today.",
      vi: "Một giai đoạn bị trói buộc — với một người, một khuôn mẫu, một nghiện ngập, hoặc một ảo tưởng — để lại dấu ấn vẫn còn ảnh hưởng đến lựa chọn và khuôn mẫu của bạn ngày nay."
    },
    present: {
      en: "The Devil reveals what binds you right now — a pattern, attachment, or shadow that you may not want to fully see. Awareness is the first and most important act of liberation.",
      vi: "Devil tiết lộ những gì đang trói buộc bạn ngay bây giờ — một khuôn mẫu, sự gắn bó, hoặc bóng tối mà bạn có thể không muốn nhìn thấy hoàn toàn. Nhận thức là hành động giải phóng đầu tiên và quan trọng nhất."
    },
    future: {
      en: "A confrontation with shadow is approaching — a moment when hidden bonds, desires, or fears surface and demand honest acknowledgment before freedom becomes possible.",
      vi: "Một cuộc đối mặt với bóng tối đang đến — khoảnh khắc những ràng buộc, ham muốn, hoặc nỗi sợ ẩn nổi lên và đòi hỏi sự thừa nhận trung thực trước khi tự do trở nên khả thi."
    }
  },
  16: { // The Tower
    past: {
      en: "A sudden upheaval — the collapse of something you thought was solid — stripped away false foundations and forced a radical clearing that still defines your landscape.",
      vi: "Một biến động đột ngột — sự sụp đổ của điều bạn nghĩ là vững chắc — đã loại bỏ những nền móng giả và buộc một sự dọn sạch triệt để vẫn còn định nghĩa cảnh quan của bạn."
    },
    present: {
      en: "Something that was built on false foundations is falling now, or is about to fall. Do not shore up what is crumbling — the collapse is the clearing, and the clearing is necessary.",
      vi: "Điều gì đó được xây trên nền móng giả đang sụp đổ bây giờ, hoặc sắp sụp đổ. Đừng chống đỡ những gì đang vỡ vụn — sự sụp đổ là sự dọn sạch, và sự dọn sạch là cần thiết."
    },
    future: {
      en: "A Tower moment approaches — a disruption that will shatter illusions and force a necessary awakening. What falls was never truly solid. What emerges will be real.",
      vi: "Một khoảnh khắc Tower đang đến — một sự gián đoạn sẽ phá vỡ ảo tưởng và buộc một sự thức tỉnh cần thiết. Những gì sụp đổ chưa bao giờ thực sự vững chắc. Những gì nổi lên sẽ là thật."
    }
  },
  17: { // The Star
    past: {
      en: "A season of quiet healing and renewed hope — perhaps after a storm — restored your faith and replenished the inner well that now sustains you.",
      vi: "Một mùa chữa lành thầm lặng và hy vọng đổi mới — có thể sau một cơn bão — đã khôi phục đức tin của bạn và bổ sung nguồn nội tâm giờ đang nuôi dưỡng bạn."
    },
    present: {
      en: "You are in a healing season — and perhaps do not fully feel it yet. The Star asks you to receive its quiet gift of hope and trust the gentle renewal that is already underway.",
      vi: "Bạn đang trong mùa chữa lành — và có thể chưa cảm nhận hoàn toàn. Star yêu cầu bạn nhận món quà hy vọng thầm lặng của nó và tin tưởng vào sự đổi mới nhẹ nhàng đã đang diễn ra."
    },
    future: {
      en: "After the difficulty, a period of genuine healing and restored hope approaches. The Star promises renewal is real — hold your faith just a little longer.",
      vi: "Sau những khó khăn, một giai đoạn chữa lành thực sự và hy vọng được khôi phục đang đến. Star hứa hẹn sự đổi mới là có thật — hãy giữ đức tin thêm một chút nữa."
    }
  },
  18: { // The Moon
    past: {
      en: "A shadowy, uncertain period — dreams, fears, or illusions — left residues in your psyche that still color how you perceive certain situations today.",
      vi: "Một giai đoạn bóng tối, không chắc chắn — những giấc mơ, nỗi sợ, hoặc ảo tưởng — để lại dư âm trong tâm lý của bạn vẫn còn tô màu cách bạn nhìn nhận một số tình huống ngày nay."
    },
    present: {
      en: "Not all is as it seems right now. The Moon rules this moment — trust your deepest instincts, name the fears distorting your vision, and move through the uncertainty with care.",
      vi: "Không phải mọi thứ đều như vẻ ngoài ngay bây giờ. Moon cai trị khoảnh khắc này — hãy tin vào bản năng sâu nhất của bạn, gọi tên những nỗi sợ đang bóp méo tầm nhìn và di chuyển qua sự không chắc chắn với sự cẩn thận."
    },
    future: {
      en: "A murky, intuitive period is approaching — one where clarity will be elusive and dreams will speak louder than logic. Navigate by feeling, not by map.",
      vi: "Một giai đoạn mờ đục, trực giác đang đến — nơi sự rõ ràng sẽ khó nắm bắt và những giấc mơ sẽ nói to hơn logic. Hãy điều hướng bằng cảm giác, không phải bằng bản đồ."
    }
  },
  19: { // The Sun
    past: {
      en: "A bright, joyful, and successful chapter illuminated your earlier life and gave you a taste of authentic happiness that you have been seeking to return to ever since.",
      vi: "Một chương sáng sủa, vui tươi và thành công đã soi sáng cuộc sống trước đây của bạn và cho bạn nếm trải hạnh phúc chân thực mà bạn đã tìm cách quay lại kể từ đó."
    },
    present: {
      en: "This is a time of joy, vitality, and authentic success. The Sun shines fully on you right now — step out from the shadows, celebrate your life, and let your light be seen.",
      vi: "Đây là thời điểm của niềm vui, sức sống, và thành công chân thực. The Sun chiếu sáng hoàn toàn lên bạn ngay bây giờ — bước ra khỏi bóng tối, tôn vinh cuộc sống của bạn, và để ánh sáng của bạn được nhìn thấy."
    },
    future: {
      en: "A genuinely joyful and successful period is coming. The Sun promises clarity, vitality, and happiness that is real and earned — not merely wished for. Allow yourself to look forward to it.",
      vi: "Một giai đoạn thực sự vui vẻ và thành công đang đến. The Sun hứa hẹn sự rõ ràng, sức sống và hạnh phúc là thật và xứng đáng — không chỉ được mong muốn. Hãy để bản thân mong đợi điều đó."
    }
  },
  20: { // Judgement
    past: {
      en: "A moment of deep awakening or honest reckoning — a call you answered or ignored — set into motion the spiritual trajectory that defines where you stand today.",
      vi: "Một khoảnh khắc thức tỉnh sâu sắc hoặc thanh toán trung thực — một tiếng gọi bạn đáp lại hoặc bỏ qua — đã khởi động quỹ đạo tâm linh định nghĩa nơi bạn đứng ngày hôm nay."
    },
    present: {
      en: "A profound awakening is occurring right now. Judgement calls you to evaluate your life with radical honesty, forgive the past completely, and answer your true calling without further delay.",
      vi: "Một sự thức tỉnh sâu sắc đang xảy ra ngay bây giờ. Judgement kêu gọi bạn đánh giá cuộc sống với sự thành thật triệt để, tha thứ hoàn toàn cho quá khứ và đáp lại tiếng gọi thực sự của bạn không chậm trễ thêm."
    },
    future: {
      en: "A moment of reckoning and renewal approaches — a trumpet call to your highest self. When it comes, answer it. The life waiting on the other side of that response is worth it.",
      vi: "Một khoảnh khắc thanh toán và đổi mới đang đến — tiếng kèn gọi bản thân cao nhất của bạn. Khi nó đến, hãy đáp lại. Cuộc sống đang chờ ở phía kia của phản ứng đó là xứng đáng."
    }
  },
  21: { // The World
    past: {
      en: "A great cycle reached its completion — something was achieved, integrated, and wholly fulfilled — and that completion is the bedrock everything in your present is built upon.",
      vi: "Một chu kỳ lớn đã đến hoàn thành — điều gì đó đã được đạt được, tích hợp, và hoàn thành trọn vẹn — và sự hoàn thành đó là nền tảng mà mọi thứ trong hiện tại của bạn được xây dựng."
    },
    present: {
      en: "You are at the threshold of completion. The World says: you have done the work — now receive the wholeness of what you have earned and fully integrate this achievement before moving on.",
      vi: "Bạn đang ở ngưỡng cửa hoàn thành. The World nói: bạn đã làm công việc — giờ hãy nhận lấy sự trọn vẹn của những gì bạn đã kiếm được và tích hợp hoàn toàn thành tựu này trước khi tiến lên."
    },
    future: {
      en: "A major cycle is completing on the horizon — a time of profound integration and genuine achievement. Carry the lessons you have gathered; they will be the seeds of the next great beginning.",
      vi: "Một chu kỳ lớn đang hoàn thành ở chân trời — thời điểm tích hợp sâu sắc và thành tựu thực sự. Hãy mang theo những bài học bạn đã thu thập; chúng sẽ là hạt giống của khởi đầu vĩ đại tiếp theo."
    }
  }
};

// ─── 2b. MINOR POSITION INTERPRETATIONS (56 cards × 3 positions) ─────────────
const MINOR_POSITION_INTERP = {
  // ── WANDS ──
  22: { // Ace of Wands
    past:{en:"A creative spark or bold initiative in your past set the trajectory you are now on. That moment of inspiration — a new project, a sudden passion, a daring first step — planted the seed of everything that followed.",vi:"Một tia sáng sáng tạo hoặc sáng kiến táo bạo trong quá khứ đã tạo quỹ đạo cho con đường hiện tại. Khoảnh khắc cảm hứng đó — dự án mới, đam mê bất ngờ, bước đầu dũng cảm — đã gieo hạt cho mọi thứ theo sau."},
    present:{en:"A genuine creative opportunity is in your hands right now. This is the moment to act on that idea, launch that project, or follow that spark before it fades. Don't wait for perfect conditions.",vi:"Một cơ hội sáng tạo thực sự đang trong tay bạn ngay lúc này. Đây là lúc hành động theo ý tưởng đó, khởi động dự án, hoặc theo đuổi tia sáng trước khi nó tắt. Đừng chờ điều kiện hoàn hảo."},
    future:{en:"A powerful creative opening is approaching — a new venture, passion project, or inspired direction that will ignite your path. Prepare yourself to recognise and seize it when it arrives.",vi:"Một cơ hội sáng tạo mạnh mẽ đang đến — dự án mới, đam mê, hoặc hướng đi truyền cảm hứng sẽ thắp sáng con đường. Hãy chuẩn bị nhận ra và nắm lấy khi nó đến."}
  },
  23: { // Two of Wands
    past:{en:"A period of planning and envisioning your future shaped the direction you took. You stood at a crossroads, chose a path, and that strategic decision — or hesitation — still influences your present.",vi:"Giai đoạn lên kế hoạch và tưởng tượng tương lai đã định hình hướng đi. Bạn đứng ở ngã tư, chọn con đường, và quyết định chiến lược đó — hoặc sự do dự — vẫn ảnh hưởng hiện tại."},
    present:{en:"You are at the strategic planning stage — the spark exists, but now you must map the route. This is the moment for bold vision paired with practical milestones, not passive daydreaming.",vi:"Bạn đang ở giai đoạn lên kế hoạch chiến lược — tia sáng đã có, nhưng bây giờ cần vạch lộ trình. Đây là lúc cho tầm nhìn táo bạo kết hợp cột mốc thực tế, không phải mơ mộng thụ động."},
    future:{en:"A moment of significant strategic decision is approaching. You will soon need to choose between the comfortable familiar and the expansive unknown. Prepare by clarifying what you truly want.",vi:"Khoảnh khắc quyết định chiến lược quan trọng đang đến. Bạn sẽ sớm phải chọn giữa quen thuộc thoải mái và chưa biết rộng lớn. Hãy chuẩn bị bằng cách làm rõ điều bạn thực sự muốn."}
  },
  24: { // Three of Wands
    past:{en:"Earlier efforts expanded your horizons beyond their original scope. The growth you experienced — perhaps unexpected — opened doors you did not initially see.",vi:"Nỗ lực trước đó đã mở rộng tầm nhìn vượt xa phạm vi ban đầu. Sự tăng trưởng bạn trải qua — có thể bất ngờ — đã mở cánh cửa ban đầu bạn không thấy."},
    present:{en:"Your ventures are gaining real momentum and the next phase is expansion. Look beyond your current scope — the opportunity ahead is larger than your initial estimate.",vi:"Các dự án đang có đà thực sự và giai đoạn tiếp theo là mở rộng. Hãy nhìn xa hơn phạm vi hiện tại — cơ hội phía trước lớn hơn ước tính ban đầu."},
    future:{en:"Expansion and growth are coming — your early investments will begin showing returns beyond what you expected. Be ready to scale up when the results start arriving.",vi:"Mở rộng và tăng trưởng đang đến — các khoản đầu tư ban đầu sẽ cho lợi nhuận vượt mong đợi. Hãy sẵn sàng mở rộng quy mô khi kết quả bắt đầu đến."}
  },
  25: { // Four of Wands
    past:{en:"A milestone you celebrated — a homecoming, a completed project, a moment of genuine belonging — created the emotional foundation you now stand on.",vi:"Cột mốc bạn đã ăn mừng — sự trở về, dự án hoàn thành, khoảnh khắc thuộc về thực sự — đã tạo nền tảng cảm xúc bạn đang đứng."},
    present:{en:"You have reached a genuine milestone and it deserves celebration. Stop and honour what you have built before rushing to the next challenge. Gather the people who matter.",vi:"Bạn đã đạt cột mốc thực sự và nó xứng đáng được ăn mừng. Hãy dừng lại và tôn vinh những gì đã xây trước khi lao vào thử thách tiếp theo."},
    future:{en:"A celebration, homecoming, or moment of deep satisfaction is approaching. The hard work you are doing now will culminate in genuine joy and recognition soon.",vi:"Buổi ăn mừng, sự trở về, hoặc khoảnh khắc mãn nguyện sâu sắc đang đến. Công sức bạn đang bỏ ra sẽ đạt đỉnh trong niềm vui và sự công nhận thực sự sớm thôi."}
  },
  26: { // Five of Wands
    past:{en:"A period of conflict, competition, or creative friction shaped who you are now. The struggle — whether in work, relationships, or personal growth — forged skills you still use today.",vi:"Giai đoạn xung đột, cạnh tranh, hoặc ma sát sáng tạo đã định hình con người bạn bây giờ. Cuộc đấu tranh — trong công việc, quan hệ, hay phát triển cá nhân — đã rèn kỹ năng bạn vẫn dùng."},
    present:{en:"You are navigating competing demands, creative disagreements, or a situation where multiple voices want to lead. Decide if this friction is sharpening you or draining you.",vi:"Bạn đang điều hướng giữa các đòi hỏi cạnh tranh, bất đồng sáng tạo. Hãy quyết định liệu ma sát này đang mài sắc hay tiêu hao bạn."},
    future:{en:"A period of creative tension or healthy competition is approaching. It will test you but also sharpen your skills. Prepare to engage constructively rather than react defensively.",vi:"Giai đoạn căng thẳng sáng tạo hoặc cạnh tranh lành mạnh đang đến. Nó sẽ thử thách nhưng cũng mài sắc kỹ năng. Hãy chuẩn bị tham gia xây dựng thay vì phản ứng phòng thủ."}
  },
  27: { // Six of Wands
    past:{en:"A moment of public recognition or personal triumph in your past gave you the confidence that still carries you. That victory proved something important about your capabilities.",vi:"Khoảnh khắc được công nhận hoặc thành tích cá nhân trong quá khứ đã cho bạn sự tự tin vẫn đang nâng đỡ. Chiến thắng đó đã chứng minh điều quan trọng về khả năng của bạn."},
    present:{en:"Your efforts are receiving the recognition they deserve right now. Accept this moment fully — you earned it. Let this victory fuel confidence for harder challenges ahead.",vi:"Nỗ lực của bạn đang nhận được sự công nhận xứng đáng. Hãy đón nhận khoảnh khắc này đầy đủ — bạn đã giành được. Để chiến thắng này tiếp thêm tự tin cho thử thách khó hơn phía trước."},
    future:{en:"Recognition and triumph are approaching — your sustained effort will be seen and acknowledged publicly. The acclaim will open doors to even greater opportunities.",vi:"Sự công nhận và thành công đang đến — nỗ lực bền bỉ sẽ được nhìn thấy và ghi nhận công khai. Sự tôn vinh sẽ mở cánh cửa cho cơ hội lớn hơn."}
  },
  28: { // Seven of Wands
    past:{en:"A time when you had to defend your position, beliefs, or boundaries under pressure shaped your current resolve. The stand you took — or failed to take — still echoes.",vi:"Giai đoạn bạn phải bảo vệ vị trí, niềm tin, hoặc ranh giới dưới áp lực đã định hình quyết tâm hiện tại. Lập trường bạn giữ — hoặc không giữ — vẫn vang vọng."},
    present:{en:"Your position is being challenged right now. Stand firm in what you believe — you have the high ground. This is not the moment to accommodate or second-guess yourself.",vi:"Vị trí của bạn đang bị thách thức ngay lúc này. Hãy đứng vững trong niềm tin — bạn có lợi thế. Đây không phải lúc chiều theo hay nghi ngờ bản thân."},
    future:{en:"A challenge to your position or beliefs is coming. Prepare your defences now — know why you believe what you believe and be ready to articulate it clearly under pressure.",vi:"Thách thức đối với vị trí hoặc niềm tin đang đến. Hãy chuẩn bị phòng thủ — biết rõ tại sao bạn tin điều bạn tin và sẵn sàng diễn đạt rõ ràng dưới áp lực."}
  },
  29: { // Eight of Wands
    past:{en:"A period of rapid acceleration — messages, travel, swift developments — propelled your situation forward at speed. Events that seemed scattered actually created crucial momentum.",vi:"Giai đoạn tăng tốc nhanh — tin nhắn, di chuyển, phát triển nhanh — đã đẩy tình huống tiến nhanh. Các sự kiện tưởng rời rạc thực ra đã tạo đà quan trọng."},
    present:{en:"Everything is moving fast right now — messages arriving, plans converging, opportunities opening. Act decisively. The window is narrow but real. Momentum rewards the swift.",vi:"Mọi thứ đang di chuyển nhanh — tin nhắn đến, kế hoạch hội tụ, cơ hội mở ra. Hãy hành động quyết đoán. Cửa sổ hẹp nhưng thật. Đà thưởng cho người nhanh nhẹn."},
    future:{en:"A burst of rapid activity is approaching — swift news, accelerating plans, and fast-moving developments. Prepare to respond quickly when the pace picks up dramatically.",vi:"Một đợt hoạt động dồn dập đang đến — tin nhanh, kế hoạch tăng tốc. Hãy chuẩn bị phản ứng nhanh khi nhịp độ tăng đột ngột."}
  },
  30: { // Nine of Wands
    past:{en:"You endured a long, draining period that tested every ounce of your persistence. That resilience — though exhausting — built character and strength you may not fully appreciate yet.",vi:"Bạn đã chịu đựng giai đoạn dài, tiêu hao thử thách mọi phần kiên trì. Sự kiên cường đó — dù kiệt sức — đã xây dựng bản lĩnh và sức mạnh bạn có thể chưa hoàn toàn nhận ra."},
    present:{en:"You are exhausted but almost at the breakthrough. This is not the time to quit. Protect your energy, rest briefly, then make one final push — what you built is more solid than you think.",vi:"Bạn kiệt sức nhưng gần đến bước đột phá. Đây không phải lúc bỏ cuộc. Bảo vệ năng lượng, nghỉ chút, rồi thực hiện cú đẩy cuối — những gì đã xây vững hơn bạn nghĩ."},
    future:{en:"A period of endurance testing is ahead — you will be pushed to your limits. Build your reserves now. The persistence required will be significant, but the reward is genuine.",vi:"Giai đoạn thử thách chịu đựng đang phía trước — bạn sẽ bị đẩy đến giới hạn. Hãy tích lũy năng lượng ngay. Sự kiên trì cần thiết sẽ đáng kể, nhưng phần thưởng là thực."}
  },
  31: { // Ten of Wands
    past:{en:"You carried too many burdens in your past — responsibilities that were not all yours to bear. That overextension taught you important lessons about boundaries and delegation.",vi:"Bạn đã gánh quá nhiều gánh nặng — trách nhiệm không phải tất cả thuộc về bạn. Sự quá tải đó đã dạy bài học quan trọng về ranh giới và ủy thác."},
    present:{en:"You are overloaded right now. Something must be put down — identify the commitments draining you most and delegate, renegotiate, or release them. Burnout is imminent if you don't.",vi:"Bạn đang quá tải ngay lúc này. Cần đặt xuống gì đó — xác định cam kết tiêu hao nhất và ủy thác, đàm phán, hoặc buông. Kiệt sức sẽ đến nếu bạn không làm."},
    future:{en:"A period of heavy responsibility is approaching. Set boundaries now before the weight becomes unmanageable. Learn to say no to prevent the burnout this card warns about.",vi:"Giai đoạn trách nhiệm nặng nề đang đến. Hãy đặt ranh giới ngay trước khi sức nặng không thể quản lý. Học cách nói không để ngăn kiệt sức mà lá này cảnh báo."}
  },
  32: { // Page of Wands
    past:{en:"An enthusiastic pursuit or exciting discovery in your past — perhaps dismissed as impractical — planted seeds that are still growing in unexpected ways.",vi:"Sự theo đuổi nhiệt tình hoặc khám phá thú vị trong quá khứ — có thể bị coi là không thực tế — đã gieo hạt vẫn đang mọc theo cách bất ngờ."},
    present:{en:"Something has caught your attention and lit a spark. Follow that curiosity without needing to know where it leads. The most important discoveries begin as playful exploration.",vi:"Điều gì đó đã thu hút sự chú ý và thắp lên tia sáng. Hãy theo đuổi sự tò mò mà không cần biết nó dẫn đến đâu. Những khám phá quan trọng nhất bắt đầu như khám phá vui tươi."},
    future:{en:"An exciting message, invitation, or spark of new enthusiasm is approaching. Stay open to unexpected interests — the next big thing may arrive disguised as play.",vi:"Tin nhắn thú vị, lời mời, hoặc tia nhiệt tình mới đang đến. Hãy cởi mở với sở thích bất ngờ — điều lớn tiếp theo có thể đến dưới lớp ngụy trang của sự vui chơi."}
  },
  33: { // Knight of Wands
    past:{en:"A phase of passionate, perhaps reckless, forward motion in your past created the energy that still propels your current situation — for better or worse.",vi:"Giai đoạn hành động đam mê, có thể liều lĩnh, trong quá khứ đã tạo năng lượng vẫn đang đẩy tình huống hiện tại — tốt hay xấu."},
    present:{en:"You are in a phase of intense energy and forward drive. Channel this momentum into one specific target. But pause briefly to ensure you are running toward something, not away from something.",vi:"Bạn đang trong giai đoạn năng lượng dồi dào và động lực tiến lên. Khai thác đà này vào một mục tiêu cụ thể. Nhưng dừng lại chút để đảm bảo đang chạy về phía điều gì đó, không phải chạy trốn."},
    future:{en:"A period of passionate action and adventure is ahead. Prepare by choosing your target wisely — the energy coming will be intense and needs a clear direction to be constructive.",vi:"Giai đoạn hành động đam mê và phiêu lưu đang phía trước. Chuẩn bị bằng cách chọn mục tiêu khôn ngoan — năng lượng đến sẽ mãnh liệt và cần hướng rõ ràng để mang tính xây dựng."}
  },
  34: { // Queen of Wands
    past:{en:"Someone — perhaps you — led with warmth, confidence, and creative authority in a way that shaped the emotional tone of what followed. That charismatic leadership left a lasting imprint.",vi:"Ai đó — có thể là bạn — đã lãnh đạo với sự ấm áp, tự tin và quyền uy sáng tạo theo cách định hình giai điệu cảm xúc cho những gì theo sau. Sự lãnh đạo cuốn hút đó để lại dấu ấn."},
    present:{en:"You are being called to lead with warmth and creative vision right now. Own your presence without apologising for it. The situation needs your particular blend of boldness and heart.",vi:"Bạn đang được gọi để lãnh đạo với sự ấm áp và tầm nhìn sáng tạo ngay bây giờ. Hãy sở hữu sự hiện diện mà không xin lỗi. Tình huống cần sự kết hợp đặc biệt giữa táo bạo và trái tim của bạn."},
    future:{en:"A role requiring charismatic, creative leadership is approaching. You will be asked to set the tone for others — prepare by clarifying your vision and strengthening your confidence.",vi:"Vai trò đòi hỏi lãnh đạo cuốn hút, sáng tạo đang đến. Bạn sẽ được yêu cầu thiết lập giai điệu cho người khác — chuẩn bị bằng cách làm rõ tầm nhìn và củng cố sự tự tin."}
  },
  35: { // King of Wands
    past:{en:"A visionary leader or your own bold leadership shaped a significant chapter of your life. That decisive authority — whether yours or someone else's — set the tone for everything that followed.",vi:"Nhà lãnh đạo có tầm nhìn hoặc sự lãnh đạo táo bạo của chính bạn đã định hình một chương quan trọng. Quyền uy quyết đoán đó — của bạn hoặc ai đó — đã đặt giai điệu cho mọi thứ theo sau."},
    present:{en:"You have the vision, experience, and authority to lead something significant right now. Make the decision, communicate it clearly, and trust that your track record has earned you this role.",vi:"Bạn có tầm nhìn, kinh nghiệm và uy quyền để dẫn dắt điều quan trọng ngay bây giờ. Hãy đưa ra quyết định, truyền đạt rõ ràng, và tin rằng thành tích đã cho bạn quyền lãnh đạo."},
    future:{en:"You are being prepared for a significant leadership role. The vision and authority you are developing now will soon be called upon — be ready to step up with confidence and strategic boldness.",vi:"Bạn đang được chuẩn bị cho vai trò lãnh đạo quan trọng. Tầm nhìn và uy quyền bạn đang phát triển sẽ sớm được gọi — hãy sẵn sàng đứng lên với tự tin và sự táo bạo chiến lược."}
  },
  // ── CUPS ──
  36: { // Ace of Cups
    past:{en:"An emotional awakening in your past — new love, a deepened compassion, a creative channel opening — set the emotional tone for everything that followed.",vi:"Một sự thức tỉnh cảm xúc trong quá khứ — tình yêu mới, lòng trắc ẩn sâu hơn, kênh sáng tạo mở ra — đã đặt giai điệu cảm xúc cho mọi thứ theo sau."},
    present:{en:"A new emotional beginning is genuinely available to you right now — love, creative inspiration, or spiritual opening. The key is receptivity, not pursuit. Open your heart.",vi:"Một khởi đầu cảm xúc mới thực sự có sẵn cho bạn ngay bây giờ — tình yêu, cảm hứng sáng tạo, hoặc sự mở ra tâm linh. Chìa khóa là sự tiếp nhận, không phải theo đuổi."},
    future:{en:"A profound emotional opening is coming — new love, creative inspiration, or a deepening of existing connections. Prepare your heart to receive what is approaching.",vi:"Sự mở ra cảm xúc sâu sắc đang đến — tình yêu mới, cảm hứng sáng tạo, hoặc mối quan hệ sâu hơn. Hãy chuẩn bị trái tim để đón nhận điều đang đến."}
  },
  37: { // Two of Cups
    past:{en:"A meaningful connection — romantic, professional, or deep friendship — shaped your emotional landscape. That partnership taught you something essential about mutual recognition.",vi:"Một kết nối có ý nghĩa — lãng mạn, chuyên nghiệp, hoặc tình bạn sâu sắc — đã định hình cảnh quan cảm xúc của bạn."},
    present:{en:"A genuine partnership is forming right now based on real mutual recognition. Invest in this connection with honesty and presence — it is rare to find someone who truly sees you.",vi:"Mối quan hệ đối tác chân thật đang hình thành dựa trên sự nhận biết lẫn nhau. Hãy đầu tư với sự trung thực và hiện diện — hiếm khi tìm được ai thực sự thấy bạn."},
    future:{en:"A meaningful partnership is on the horizon — someone who reflects your values and truly sees you. Be open to recognising this connection when it arrives.",vi:"Mối quan hệ đối tác có ý nghĩa đang ở phía chân trời — người phản ánh giá trị và thực sự thấy bạn. Hãy cởi mở để nhận ra kết nối này khi nó đến."}
  },
  38: { // Three of Cups
    past:{en:"A time of genuine community, celebration, and shared joy created bonds that still nourish you. Those friendships and celebrations shaped your sense of belonging.",vi:"Thời gian cộng đồng chân thật, ăn mừng và niềm vui chia sẻ đã tạo sợi dây vẫn nuôi dưỡng bạn. Tình bạn và lễ kỷ niệm đó đã định hình cảm giác thuộc về."},
    present:{en:"Your life needs genuine human connection right now. Call the friends you have been meaning to see, attend the gathering, say yes to the invitation. Community energy will restore something in you.",vi:"Cuộc sống cần kết nối con người chân thật ngay bây giờ. Hãy gọi bạn bè, tham dự buổi gặp mặt, nói có với lời mời. Năng lượng cộng đồng sẽ phục hồi điều gì đó trong bạn."},
    future:{en:"A celebration, reunion, or deepening of friendships is approaching. Make space in your life for genuine community — the connections coming will be nourishing and real.",vi:"Buổi ăn mừng, đoàn tụ, hoặc tình bạn sâu sắc hơn đang đến. Hãy tạo không gian cho cộng đồng chân thật — kết nối sắp đến sẽ nuôi dưỡng và thực sự."}
  },
  39: { // Four of Cups
    past:{en:"A period of emotional apathy or dissatisfaction led you to miss an opportunity that was right in front of you. That experience taught you about the cost of taking things for granted.",vi:"Giai đoạn thờ ơ cảm xúc hoặc không hài lòng khiến bạn bỏ lỡ cơ hội ngay trước mặt. Kinh nghiệm đó dạy về cái giá của sự coi thường."},
    present:{en:"You are feeling bored, dissatisfied, or emotionally flat — and an opportunity or offer is sitting right in front of you that you cannot see. Look up from your contemplation. Something real is being offered now.",vi:"Bạn đang cảm thấy chán nản, không hài lòng — và một cơ hội đang ngay trước mặt mà bạn không thấy. Hãy nhìn lên từ suy ngẫm. Điều thực sự đang được trao ngay bây giờ."},
    future:{en:"A period of emotional restlessness is approaching that may tempt you to withdraw or dismiss opportunities. Stay alert — what feels boring may actually contain the answer you seek.",vi:"Giai đoạn bất an cảm xúc đang đến có thể khiến bạn rút lui hoặc bác bỏ cơ hội. Hãy tỉnh táo — điều cảm giác nhàm chán có thể chứa câu trả lời bạn tìm."}
  },
  40: { // Five of Cups
    past:{en:"A loss or disappointment in your past — a relationship ending, a dream unfulfilled, a betrayal — left emotional scars that still influence how you approach connection and risk.",vi:"Mất mát hoặc thất vọng trong quá khứ — quan hệ kết thúc, giấc mơ không thành, sự phản bội — để lại vết sẹo cảm xúc vẫn ảnh hưởng cách bạn tiếp cận kết nối và rủi ro."},
    present:{en:"You are grieving something — and you should. But do not stay so focused on what has fallen that you miss the cups still standing behind you. Honour the loss, then turn around.",vi:"Bạn đang thương tiếc điều gì đó — và bạn nên. Nhưng đừng tập trung vào những gì đã đổ mà bỏ lỡ những chiếc cốc vẫn đứng phía sau. Hãy tôn trọng mất mát, rồi quay lại."},
    future:{en:"A loss or emotional disappointment may be approaching, but it will not be total. Focus on strengthening what you value most now so that what remains after the storm is solid.",vi:"Mất mát hoặc thất vọng cảm xúc có thể đang đến, nhưng sẽ không toàn diện. Hãy tập trung củng cố điều bạn trân trọng nhất để những gì còn lại sau cơn bão là vững chắc."}
  },
  41: { // Six of Cups
    past:{en:"Nostalgia, childhood memories, or a connection from your past shaped the emotional patterns you carry today. Something from that innocent time still has gifts to offer if revisited honestly.",vi:"Nỗi nhớ, ký ức thơ ấu, hoặc kết nối từ quá khứ đã định hình khuôn mẫu cảm xúc bạn mang theo hôm nay."},
    present:{en:"Something from your past is returning — an old friend, a memory, a pattern you recognise. Ask whether revisiting the past is genuinely healing or just avoiding the present that needs your attention.",vi:"Điều gì đó từ quá khứ đang trở lại — bạn cũ, ký ức, khuôn mẫu quen thuộc. Hãy tự hỏi liệu nhìn lại quá khứ thực sự chữa lành hay chỉ tránh hiện tại cần sự chú ý."},
    future:{en:"Someone or something from your past will re-enter your life. Approach it with open eyes — some doors are worth reopening, but nostalgia should lead to growth, not retreat.",vi:"Ai đó hoặc điều gì đó từ quá khứ sẽ trở lại cuộc sống. Tiếp cận với đôi mắt mở — một số cánh cửa đáng mở lại, nhưng hoài cảm nên dẫn đến tăng trưởng, không phải rút lui."}
  },
  42: { // Seven of Cups
    past:{en:"A period of indecision, fantasy, or too many options led to scattered energy and possibly missed real opportunities while chasing illusions.",vi:"Giai đoạn thiếu quyết đoán, mộng tưởng, hoặc quá nhiều lựa chọn dẫn đến năng lượng phân tán và có thể bỏ lỡ cơ hội thực khi đuổi theo ảo ảnh."},
    present:{en:"You are overwhelmed by possibilities and not all of them are real. Some are wishful thinking, others are fears in disguise. Choose the one grounded option and commit before the window closes.",vi:"Bạn đang bị choáng ngợp bởi khả năng và không phải tất cả đều thật. Một số là mong muốn viển vông, một số khác là nỗi sợ trá hình. Hãy chọn phương án thực tế và cam kết trước khi cửa sổ đóng."},
    future:{en:"A period of many tempting options is approaching — but discernment will be essential. Not everything glittering will be gold. Prepare to distinguish real opportunities from beautiful distractions.",vi:"Giai đoạn nhiều lựa chọn hấp dẫn đang đến — nhưng sự phân biệt sẽ cần thiết. Không phải mọi thứ lấp lánh đều là vàng. Chuẩn bị phân biệt cơ hội thực với phân tâm đẹp đẽ."}
  },
  43: { // Eight of Cups
    past:{en:"You walked away from something that was no longer fulfilling — a relationship, a job, a life direction. That quiet courage to leave what was not broken but not right shaped the path you are now on.",vi:"Bạn đã bước đi khỏi điều không còn thỏa mãn — mối quan hệ, công việc, hướng đi cuộc đời. Lòng dũng cảm yên lặng khi rời bỏ điều không hỏng nhưng không đúng đã định hình con đường hiện tại."},
    present:{en:"Something in your life no longer satisfies you and you know it. This is not crisis but mature self-awareness. Begin moving toward what calls you, even if the path ahead is unclear.",vi:"Điều gì đó trong cuộc sống không còn thỏa mãn và bạn biết. Đây không phải khủng hoảng mà là sự tự nhận thức trưởng thành. Bắt đầu di chuyển về phía điều gọi bạn, dù con đường chưa rõ."},
    future:{en:"A moment of intentional walking away is approaching — leaving behind something comfortable to seek something more meaningful. Trust that your heart will guide you when the time comes.",vi:"Khoảnh khắc chủ động bước đi đang đến — rời bỏ điều thoải mái để tìm kiếm điều có ý nghĩa hơn. Tin rằng trái tim sẽ dẫn đường khi thời điểm đến."}
  },
  44: { // Nine of Cups
    past:{en:"A time of emotional satisfaction and wish fulfilment shaped your expectations. That experience of genuine contentment — having what you truly desired — set a standard you still measure against.",vi:"Thời gian thỏa mãn cảm xúc và ước nguyện thành hiện thực đã định hình kỳ vọng. Trải nghiệm mãn nguyện chân thật đó đã đặt tiêu chuẩn bạn vẫn đo lường."},
    present:{en:"What you truly wished for is here or very close. Allow yourself to feel genuinely satisfied. This is not complacency — it is the natural reward of aligning your life with what matters.",vi:"Điều bạn thực sự ước muốn đã ở đây hoặc rất gần. Hãy cho phép mình cảm thấy thỏa mãn thực sự. Đây không phải tự mãn — là phần thưởng tự nhiên."},
    future:{en:"Deep emotional satisfaction is approaching — a wish being granted, a goal being reached, a desire being fulfilled. The contentment coming is real and earned. Prepare to enjoy it fully.",vi:"Sự thỏa mãn cảm xúc sâu sắc đang đến — ước nguyện được ban, mục tiêu đạt được. Sự mãn nguyện đến là thực và xứng đáng. Chuẩn bị tận hưởng đầy đủ."}
  },
  45: { // Ten of Cups
    past:{en:"A period of profound emotional fulfilment — family harmony, deep love, genuine belonging — created the emotional blueprint that guides your deepest desires.",vi:"Giai đoạn thỏa mãn cảm xúc sâu sắc — hòa hợp gia đình, tình yêu sâu, thuộc về thật — đã tạo bản vẽ cảm xúc hướng dẫn mong muốn sâu xa nhất."},
    present:{en:"Lasting emotional fulfilment is genuinely available to you right now. This is not fleeting pleasure but deep contentment from real love and genuine connection. Recognise and protect it.",vi:"Sự thỏa mãn cảm xúc bền lâu thực sự có sẵn cho bạn ngay bây giờ. Đây không phải khoái cảm thoáng qua mà là mãn nguyện sâu sắc từ tình yêu thật. Hãy nhận ra và bảo vệ."},
    future:{en:"A period of deep, lasting emotional harmony is approaching — in family, relationships, or your sense of home. What you are building now is leading you toward genuine, sustainable happiness.",vi:"Giai đoạn hòa hợp cảm xúc sâu sắc, bền lâu đang đến — trong gia đình, quan hệ, hoặc cảm giác nhà. Những gì bạn đang xây đang dẫn đến hạnh phúc chân thật, bền vững."}
  },
  46: { // Page of Cups
    past:{en:"A gentle message or creative impulse in your past opened an emotional door you did not expect. That moment of intuitive sensitivity planted something that is still growing.",vi:"Một thông điệp nhẹ nhàng hoặc xung lực sáng tạo trong quá khứ đã mở cánh cửa cảm xúc bạn không mong đợi. Khoảnh khắc nhạy cảm trực giác đó đã gieo điều vẫn đang lớn."},
    present:{en:"A subtle emotional message is arriving — a feeling, creative impulse, coincidence, or intuitive nudge worth paying attention to. Be soft and receptive. Follow the creative impulse.",vi:"Một thông điệp cảm xúc tinh tế đang đến — cảm giác, xung lực sáng tạo, sự trùng hợp đáng chú ý. Hãy mềm mại và tiếp nhận. Theo đuổi xung lực sáng tạo."},
    future:{en:"An unexpected emotional message or creative inspiration is approaching. Stay open to things that seem irrational — the fish in the cup is real. Something beautiful wants to find you.",vi:"Thông điệp cảm xúc bất ngờ hoặc cảm hứng sáng tạo đang đến. Hãy cởi mở với điều có vẻ phi lý — con cá trong cốc là thật. Điều gì đó đẹp đẽ muốn tìm đến bạn."}
  },
  47: { // Knight of Cups
    past:{en:"A romantic pursuit, a creative quest, or an idealistic gesture in your past brought emotional intensity that left its mark — whether the outcome was dream or disillusion.",vi:"Cuộc theo đuổi lãng mạn, hành trình sáng tạo, hoặc cử chỉ lý tưởng trong quá khứ đã mang cường độ cảm xúc để lại dấu ấn."},
    present:{en:"You or someone near you is approaching a situation with romantic idealism and emotional sincerity. Let the heart lead, but keep your eyes open. The best adventures still require watching where you step.",vi:"Bạn hoặc ai đó đang tiếp cận tình huống với lý tưởng lãng mạn và sự chân thành cảm xúc. Hãy để trái tim dẫn, nhưng giữ mắt mở."},
    future:{en:"A romantic or creative pursuit driven by genuine emotion is approaching. Someone may arrive with a heartfelt offer. Be ready to balance idealism with practical wisdom.",vi:"Cuộc theo đuổi lãng mạn hoặc sáng tạo được thúc đẩy bởi cảm xúc thực đang đến. Ai đó có thể xuất hiện với lời đề nghị chân thành. Sẵn sàng cân bằng lý tưởng với trí tuệ thực tiễn."}
  },
  48: { // Queen of Cups
    past:{en:"Deep emotional wisdom — perhaps from someone who held space for you, or from your own journey through feeling — shaped how you navigate relationships and intuition today.",vi:"Trí tuệ cảm xúc sâu sắc — có thể từ ai đó giữ không gian cho bạn, hoặc từ hành trình cảm xúc của bạn — đã định hình cách bạn điều hướng quan hệ và trực giác hôm nay."},
    present:{en:"The situation calls for deep emotional intelligence — holding space without drowning, listening without fixing. Check your own cup first before pouring for others. You cannot serve from empty.",vi:"Tình huống đòi hỏi trí tuệ cảm xúc sâu sắc — giữ không gian mà không chìm, lắng nghe mà không sửa. Kiểm tra cốc của mình trước khi rót cho người khác."},
    future:{en:"A situation requiring deep compassion and emotional mastery is approaching. Prepare by strengthening your own emotional reserves — the wisdom needed will come from integration, not suppression.",vi:"Tình huống đòi hỏi lòng trắc ẩn sâu sắc và sự làm chủ cảm xúc đang đến. Chuẩn bị bằng cách củng cố dự trữ cảm xúc — trí tuệ cần thiết đến từ tích hợp, không phải kìm nén."}
  },
  49: { // King of Cups
    past:{en:"Someone — perhaps you — brought calm mastery to an emotionally turbulent situation. That balanced emotional leadership shaped the resolution and left a deep impression.",vi:"Ai đó — có thể là bạn — đã mang sự bình tĩnh làm chủ vào tình huống hỗn loạn cảm xúc. Sự lãnh đạo cảm xúc cân bằng đó đã định hình giải pháp và để lại ấn tượng sâu."},
    present:{en:"You are called to be the calm in the storm — feeling everything deeply while responding with measured compassion. Lead with your heart, but let wisdom steer. De-escalate through genuine understanding.",vi:"Bạn được gọi là sự bình tĩnh giữa bão — cảm nhận mọi thứ sâu sắc trong khi phản ứng với lòng trắc ẩn chừng mực. Lãnh đạo bằng trái tim, nhưng để trí tuệ giữ lái."},
    future:{en:"A situation requiring emotionally mature leadership is approaching — you will need to be both compassionate and composed. Begin practising emotional regulation now; it will be called upon soon.",vi:"Tình huống đòi hỏi lãnh đạo chín chắn cảm xúc đang đến — bạn cần vừa trắc ẩn vừa điềm tĩnh. Hãy bắt đầu luyện điều chỉnh cảm xúc ngay; nó sẽ cần sớm."}
  },
  // ── SWORDS ──
  50: { // Ace of Swords
    past:{en:"A moment of piercing mental clarity in your past — a breakthrough idea, a truth revealed, a decisive insight — cut through confusion and set your direction.",vi:"Khoảnh khắc rõ ràng tinh thần xuyên thấu trong quá khứ — ý tưởng đột phá, sự thật được tiết lộ — đã cắt qua nhầm lẫn và đặt hướng đi."},
    present:{en:"Mental clarity has arrived — you see the truth of the situation, the right answer, the real nature of the problem. Act on this insight now while it is fresh. This level of focus does not last.",vi:"Sự rõ ràng tinh thần đã đến — bạn thấy sự thật của tình huống. Hãy hành động trên nhận thức này ngay khi còn tươi. Mức tập trung này không kéo dài."},
    future:{en:"A moment of profound mental clarity is approaching — a truth, insight, or idea that will cut cleanly through your current confusion. Be ready to act decisively when it arrives.",vi:"Khoảnh khắc rõ ràng tinh thần sâu sắc đang đến — sự thật, nhận thức sẽ cắt sạch qua nhầm lẫn hiện tại. Hãy sẵn sàng hành động quyết đoán khi nó đến."}
  },
  51: { // Two of Swords
    past:{en:"A period of deliberate avoidance or stalemate in your past — a decision you refused to make, a truth you chose not to see — still has consequences unfolding now.",vi:"Giai đoạn tránh né cố ý hoặc bế tắc trong quá khứ — quyết định bạn từ chối đưa ra — vẫn có hậu quả đang diễn ra."},
    present:{en:"You are avoiding a decision because both options require sacrifice. The blindfold is self-imposed. Remove it, face the choices honestly, and decide. Continued avoidance is itself a choice, and usually the worst one.",vi:"Bạn đang tránh quyết định vì cả hai lựa chọn đều đòi hỏi hy sinh. Bịt mắt là tự đặt. Hãy bỏ ra, đối mặt trung thực, và quyết định. Tiếp tục né tránh tự nó là lựa chọn, và thường tệ nhất."},
    future:{en:"A difficult decision is approaching that you will want to avoid. Prepare by getting clear on your values — they will guide you when both options seem equally costly.",vi:"Quyết định khó khăn đang đến mà bạn sẽ muốn tránh. Chuẩn bị bằng cách làm rõ giá trị — chúng sẽ hướng dẫn khi cả hai lựa chọn đều có giá ngang nhau."}
  },
  52: { // Three of Swords
    past:{en:"A betrayal, heartbreak, or painful truth in your past left wounds that still influence how you protect yourself and how much you allow yourself to trust.",vi:"Sự phản bội, đau lòng, hoặc sự thật đau đớn trong quá khứ đã để lại vết thương vẫn ảnh hưởng cách bạn bảo vệ mình và cho phép mình tin tưởng."},
    present:{en:"Something has hurt you deeply — and it must be acknowledged, not suppressed. The wound is real. Let yourself feel the full weight. Healing cannot begin until the pain is truly honoured.",vi:"Điều gì đó đã làm bạn tổn thương sâu sắc — và phải được thừa nhận, không kìm nén. Vết thương là thật. Chữa lành không thể bắt đầu cho đến khi nỗi đau được tôn trọng đầy đủ."},
    future:{en:"An emotionally painful revelation or loss may be approaching. Strengthen your support network now. The pain will be real but temporary, and what emerges after will be clearer and more honest.",vi:"Sự tiết lộ đau đớn hoặc mất mát cảm xúc có thể đang đến. Hãy củng cố mạng lưới hỗ trợ. Nỗi đau sẽ thật nhưng tạm thời, và điều xuất hiện sau sẽ rõ ràng và trung thực hơn."}
  },
  53: { // Four of Swords
    past:{en:"A period of necessary rest and recuperation in your past — perhaps forced by illness, burnout, or circumstance — gave you the restoration needed for what came next.",vi:"Giai đoạn nghỉ ngơi và phục hồi cần thiết trong quá khứ — có thể do bệnh tật, kiệt sức — đã cho bạn sự phục hồi cần cho những gì tiếp theo."},
    present:{en:"Your mind and body are depleted and pushing harder will make everything worse. Cancel something today. Sleep more. Step away from the screen. Strategic retreat is not weakness — it is wisdom.",vi:"Tâm trí và cơ thể cạn kiệt và ép thêm sẽ làm mọi thứ tệ hơn. Hãy hủy việc gì đó hôm nay. Ngủ nhiều hơn. Rời khỏi màn hình. Rút lui chiến lược không phải yếu đuối — là trí tuệ."},
    future:{en:"A period of necessary rest and recuperation is approaching. Do not resist it — the pause will restore clarity and energy that you will desperately need for what follows.",vi:"Giai đoạn nghỉ ngơi và phục hồi cần thiết đang đến. Đừng kháng cự — sự tạm dừng sẽ phục hồi sự rõ ràng và năng lượng bạn cần cho những gì theo sau."}
  },
  54: { // Five of Swords
    past:{en:"A conflict that was won at too high a cost — or a battle lost that taught you about choosing your fights more wisely. The scars from that encounter shaped your approach to disagreement.",vi:"Xung đột thắng với cái giá quá cao — hoặc trận thua dạy bạn chọn cuộc chiến khôn ngoan hơn. Vết sẹo từ cuộc đối đầu đó đã định hình cách tiếp cận xung đột."},
    present:{en:"You are in a conflict where winning may cost more than losing. Ask yourself honestly: is this battle about principle or ego? Sometimes the wisest move is to collect your remaining swords and walk away.",vi:"Bạn đang trong xung đột mà thắng có thể tốn kém hơn thua. Hãy tự hỏi trung thực: cuộc chiến này vì nguyên tắc hay ego? Đôi khi bước đi khôn ngoan nhất là thu gom kiếm còn lại và rời đi."},
    future:{en:"A conflict is approaching where the temptation to 'win at all costs' will be strong. Prepare by deciding in advance what you are — and are not — willing to sacrifice for victory.",vi:"Xung đột đang đến nơi sự cám dỗ 'thắng bằng mọi giá' sẽ mạnh. Chuẩn bị bằng cách quyết định trước điều bạn sẵn sàng — và không sẵn sàng — hy sinh để chiến thắng."}
  },
  55: { // Six of Swords
    past:{en:"A transition away from difficulty in your past — leaving a painful situation, relationship, or mindset — brought you to calmer waters, even though the journey was not easy.",vi:"Sự chuyển tiếp khỏi khó khăn trong quá khứ — rời bỏ tình huống, mối quan hệ đau đớn — đã đưa bạn đến vùng nước yên tĩnh hơn, dù hành trình không dễ."},
    present:{en:"You are leaving a painful situation behind — the journey to a better place has begun, even if it does not feel like relief yet. Keep moving forward. The waters ahead are calmer than what is behind.",vi:"Bạn đang rời bỏ tình huống đau đớn — hành trình đến nơi tốt hơn đã bắt đầu, dù chưa cảm thấy nhẹ nhõm. Tiếp tục tiến về phía trước. Vùng nước phía trước êm hơn phía sau."},
    future:{en:"A transition from difficulty to peace is approaching. The move may not be dramatic, but it will be necessary. Trust that what lies ahead is genuinely calmer than where you are now.",vi:"Sự chuyển tiếp từ khó khăn sang yên bình đang đến. Sự di chuyển có thể không kịch tính, nhưng cần thiết. Tin rằng phía trước thực sự yên bình hơn nơi bạn đang ở."}
  },
  56: { // Seven of Swords
    past:{en:"Deception — yours or someone else's — shaped a past situation in ways that are still revealing themselves. A half-truth, a hidden agenda, or an act of avoidance left unresolved consequences.",vi:"Sự lừa dối — của bạn hoặc ai đó — đã định hình tình huống quá khứ theo cách vẫn đang bộc lộ. Nửa sự thật, chương trình nghị sự ẩn đã để lại hậu quả chưa giải quyết."},
    present:{en:"Someone is not being fully honest — and it may be you. Check your own integrity first, then look at who around you is saying one thing and doing another. Transparency is the antidote.",vi:"Ai đó không hoàn toàn trung thực — và có thể là bạn. Kiểm tra tính trung thực của chính mình trước, rồi nhìn ai xung quanh nói một đằng làm một nẻo. Minh bạch là thuốc giải."},
    future:{en:"A situation involving deception or hidden agendas is approaching. Sharpen your discernment and protect sensitive information. Not everyone approaching you will have honest intentions.",vi:"Tình huống liên quan đến lừa dối hoặc chương trình nghị sự ẩn đang đến. Hãy mài sắc sự phân biệt và bảo vệ thông tin nhạy cảm. Không phải ai tiếp cận đều có ý định trung thực."}
  },
  57: { // Eight of Swords
    past:{en:"A period of feeling trapped — by beliefs, circumstances, or self-imposed limitations — kept you from seeing options that were actually available. That mental prison shaped patterns you may still carry.",vi:"Giai đoạn cảm thấy bị mắc kẹt — bởi niềm tin, hoàn cảnh, hoặc giới hạn tự áp đặt — đã ngăn bạn thấy lựa chọn thực tế có sẵn. Nhà tù tinh thần đó đã tạo khuôn mẫu bạn có thể vẫn mang theo."},
    present:{en:"You feel trapped, but the cage is mostly of your own making. Name the specific belief holding you prisoner. Question it honestly. You will find that most chains are made of thoughts, not facts.",vi:"Bạn cảm thấy bị mắc kẹt, nhưng cái lồng phần lớn do bạn tự xây. Gọi tên niềm tin cụ thể giam giữ bạn. Hỏi trung thực. Phần lớn xiềng xích được làm từ suy nghĩ, không phải sự thật."},
    future:{en:"A period of feeling mentally confined is approaching, but it will be an illusion. Prepare by strengthening your belief in your own agency — the restrictions you perceive will not be as real as they seem.",vi:"Giai đoạn cảm thấy bị giam tinh thần đang đến, nhưng sẽ là ảo ảnh. Chuẩn bị bằng cách củng cố niềm tin vào khả năng hành động — các giới hạn bạn nhận thấy sẽ không thật như có vẻ."}
  },
  58: { // Nine of Swords
    past:{en:"A period of intense anxiety, guilt, or sleepless worry left mental scars that still surface when you feel vulnerable. Those night terrors were real in feeling, even when exaggerated in substance.",vi:"Giai đoạn lo âu dữ dội, cảm giác tội lỗi, hoặc lo lắng mất ngủ đã để lại vết sẹo tinh thần vẫn trồi lên khi bạn cảm thấy đễ bị tổn thương."},
    present:{en:"Your mind is tormented by worst-case scenarios. Most of what frightens you right now is projection, not reality. Write the worries down. Tell someone. Seek professional support if it has gone on too long.",vi:"Tâm trí đang bị giày vò bởi kịch bản tệ nhất. Hầu hết điều đang sợ là phóng chiếu, không phải thực tế. Hãy viết lo lắng ra giấy. Kể cho ai đó. Tìm hỗ trợ chuyên nghiệp nếu đã kéo dài."},
    future:{en:"A period of mental anguish may be approaching — but forewarned is forearmed. Build your support systems now. The fears that will surface are almost always worse than the reality that follows.",vi:"Giai đoạn đau khổ tinh thần có thể đang đến — nhưng được cảnh báo là được trang bị. Xây dựng hệ thống hỗ trợ ngay. Nỗi sợ trồi lên hầu như luôn tệ hơn thực tế theo sau."}
  },
  59: { // Ten of Swords
    past:{en:"A devastating ending in your past — a betrayal you did not see coming, a situation that hit rock bottom — was actually the death of something that was already killing you. The dawn came after.",vi:"Kết thúc tàn khốc trong quá khứ — sự phản bội bất ngờ, tình huống chạm đáy — thực ra là cái chết của điều đã đang giết bạn. Bình minh đã đến sau đó."},
    present:{en:"This has reached its absolute bottom. The worst has happened or is happening. But the backdrop of this card is dawn — from here, the only direction is up. Let this ending be final and start looking toward the sunrise.",vi:"Đây đã đến đáy tuyệt đối. Điều tệ nhất đã xảy ra. Nhưng phông nền của lá này là bình minh — từ đây, hướng duy nhất là lên. Hãy để kết thúc này dứt khoát và nhìn về phía bình minh."},
    future:{en:"A painful ending is approaching — but it is the end of something that needs to end. The dawn is hidden in this card. What replaces what falls will be genuinely better. Prepare for rebirth.",vi:"Kết thúc đau đớn đang đến — nhưng là kết thúc của điều cần kết thúc. Bình minh ẩn trong lá này. Những gì thay thế sẽ thực sự tốt hơn. Chuẩn bị cho sự tái sinh."}
  },
  60: { // Page of Swords
    past:{en:"A discovery, message, or sharp observation in your past changed how you understood a situation. That moment of intellectual curiosity opened doors — or revealed uncomfortable truths.",vi:"Khám phá, tin nhắn, hoặc quan sát sắc bén trong quá khứ đã thay đổi cách bạn hiểu tình huống. Khoảnh khắc tò mò trí tuệ đó đã mở cánh cửa — hoặc tiết lộ sự thật khó chịu."},
    present:{en:"New information is arriving that will change how you see the situation. Be sharp, ask the right questions, and do not accept surface explanations. Curiosity is your greatest asset right now.",vi:"Thông tin mới đang đến sẽ thay đổi cách bạn thấy tình huống. Hãy sắc bén, hỏi câu đúng, và đừng chấp nhận giải thích bề mặt. Sự tò mò là tài sản lớn nhất ngay lúc này."},
    future:{en:"Important new information is approaching — a truth, message, or observation that will change your understanding. Stay intellectually alert and ready to update your perspective when it arrives.",vi:"Thông tin mới quan trọng đang đến — sự thật, tin nhắn sẽ thay đổi hiểu biết. Hãy tỉnh táo trí tuệ và sẵn sàng cập nhật góc nhìn khi nó đến."}
  },
  61: { // Knight of Swords
    past:{en:"A period of intense mental focus and rapid, perhaps reckless, action in your past created consequences that are still playing out. That decisiveness — or impulsiveness — left its mark.",vi:"Giai đoạn tập trung tinh thần mãnh liệt và hành động nhanh, có thể liều lĩnh, trong quá khứ đã tạo hậu quả vẫn đang diễn ra."},
    present:{en:"You or someone around you is charging toward a goal with intense mental focus and speed. The power is impressive but check your blind spots before impact — moving too fast can cause collateral damage.",vi:"Bạn hoặc ai đó đang lao về phía mục tiêu với tập trung tinh thần mãnh liệt. Sức mạnh ấn tượng nhưng hãy kiểm tra điểm mù trước tác động — di chuyển quá nhanh có thể gây thiệt hại phụ."},
    future:{en:"A period of intense, swift mental action is approaching. You will need to think and act fast. Prepare your position clearly now so that when speed is required, your direction is already set.",vi:"Giai đoạn hành động tinh thần nhanh, mãnh liệt đang đến. Bạn sẽ cần suy nghĩ và hành động nhanh. Chuẩn bị vị trí rõ ràng để khi cần tốc độ, hướng đi đã sẵn sàng."}
  },
  62: { // Queen of Swords
    past:{en:"Someone — perhaps you — cut through emotional noise with clarity and honest, unvarnished truth. That directness — compassionate but unapologetic — shaped a critical turning point.",vi:"Ai đó — có thể là bạn — đã cắt qua tiếng ồn cảm xúc với sự rõ ràng và sự thật không tô vẽ. Sự thẳng thắn đó — trắc ẩn nhưng không xin lỗi — đã tạo bước ngoặt quan trọng."},
    present:{en:"The situation needs someone who can cut through emotional noise and speak the unvarnished truth — kind but unapologetic. That person is you. Lead with clarity, honesty, and fair boundaries.",vi:"Tình huống cần ai đó có thể cắt qua tiếng ồn cảm xúc và nói sự thật không tô vẽ — tử tế nhưng không xin lỗi. Người đó là bạn. Hãy lãnh đạo với sự rõ ràng, trung thực và ranh giới công bằng."},
    future:{en:"A situation requiring clear-headed truth-telling and firm boundaries is approaching. Prepare by clarifying your own position — you will be asked to judge fairly and speak honestly under pressure.",vi:"Tình huống đòi hỏi nói sự thật sáng suốt và ranh giới vững chắc đang đến. Chuẩn bị bằng cách làm rõ vị trí — bạn sẽ được yêu cầu phán xét công bằng và nói trung thực dưới áp lực."}
  },
  63: { // King of Swords
    past:{en:"A decision made with intellectual rigour, ethical clarity, and strategic thinking shaped the course of events. That principled authority — yours or someone else's — established the framework you now operate within.",vi:"Quyết định được đưa ra với sự chặt chẽ trí tuệ, rõ ràng đạo đức đã định hình tiến trình sự kiện. Quyền uy có nguyên tắc đó đã thiết lập khuôn khổ bạn đang hoạt động."},
    present:{en:"You are called to make a decision requiring clear thinking, ethical reasoning, and principled authority. This is not the moment for sentiment — it is the moment for honest analysis and fair action.",vi:"Bạn được gọi để đưa ra quyết định đòi hỏi tư duy rõ ràng, lý luận đạo đức và uy quyền có nguyên tắc. Đây không phải lúc cho tình cảm — là lúc cho phân tích trung thực và hành động công bằng."},
    future:{en:"A moment requiring intellectual authority and principled decision-making is approaching. Prepare by honing your reasoning — you will need to be the voice of clarity and justice in a complex situation.",vi:"Khoảnh khắc đòi hỏi quyền uy trí tuệ và ra quyết định có nguyên tắc đang đến. Chuẩn bị bằng cách mài sắc lý luận — bạn cần là tiếng nói rõ ràng và công bằng trong tình huống phức tạp."}
  },
  // ── PENTACLES ──
  64: { // Ace of Pentacles
    past:{en:"A material opportunity in your past — a job offer, financial opening, or practical new beginning — set the foundation for the stability or prosperity you now have.",vi:"Cơ hội vật chất trong quá khứ — lời mời làm việc, cơ hội tài chính — đã đặt nền tảng cho sự ổn định hoặc thịnh vượng hiện tại."},
    present:{en:"A tangible opportunity is appearing in the material world right now. Take it seriously from the start — create the budget, sign up, open the account. This seed has real long-term growth potential.",vi:"Cơ hội hữu hình đang xuất hiện trong thế giới vật chất ngay bây giờ. Hãy nghiêm túc từ đầu — tạo ngân sách, đăng ký, mở tài khoản. Hạt giống này có tiềm năng tăng trưởng dài hạn thực."},
    future:{en:"A significant material opportunity is approaching — financial, career, or a chance to build something lasting. Prepare by getting your foundations in order so you can seize it properly when it arrives.",vi:"Cơ hội vật chất quan trọng đang đến — tài chính, nghề nghiệp, hoặc cơ hội xây dựng điều bền lâu. Chuẩn bị bằng cách sắp xếp nền tảng để nắm bắt đúng cách khi nó đến."}
  },
  65: { // Two of Pentacles
    past:{en:"A period of juggling multiple demands — work and life, competing commitments, financial balancing acts — taught you valuable lessons about prioritisation and flexibility.",vi:"Giai đoạn tung hứng nhiều đòi hỏi — công việc và cuộc sống, cam kết cạnh tranh — đã dạy bài học quý về ưu tiên và linh hoạt."},
    present:{en:"You are juggling multiple demands right now. The balance is sustainable but only if you stay flexible and actively prioritise. Decide what matters most this week and give it your best energy.",vi:"Bạn đang tung hứng nhiều đòi hỏi. Sự cân bằng bền vững nhưng chỉ nếu giữ linh hoạt và ưu tiên chủ động. Quyết định điều quan trọng nhất tuần này và dành năng lượng tốt nhất."},
    future:{en:"A period of juggling competing demands is approaching. Build systems for prioritisation now. Not everything will be equally urgent — learning to let some things be 'good enough' will be essential.",vi:"Giai đoạn tung hứng nhiều đòi hỏi cạnh tranh đang đến. Xây dựng hệ thống ưu tiên ngay. Không phải mọi thứ đều cấp bách như nhau — học để một số thứ 'vừa đủ' sẽ cần thiết."}
  },
  66: { // Three of Pentacles
    past:{en:"A collaboration that brought together different skills and perspectives created something none of you could have built alone. That teamwork shaped the quality of what you produced.",vi:"Sự cộng tác kết hợp kỹ năng và góc nhìn khác nhau đã tạo ra điều không ai tự mình làm được. Teamwork đó đã định hình chất lượng sản phẩm."},
    present:{en:"The project you are working on requires real collaboration — not superficial task-splitting, but genuine teamwork where different skills combine. Drop the ego, ask for feedback, and let expertise shine.",vi:"Dự án bạn đang làm đòi hỏi cộng tác thực — không phải chia việc hời hợt, mà là teamwork thực sự. Hãy bỏ ego, hỏi phản hồi, và để chuyên môn tỏa sáng."},
    future:{en:"A collaborative opportunity is approaching that will produce results far beyond what you could achieve alone. Prepare by identifying who brings complementary skills and being ready to work as a true team.",vi:"Cơ hội cộng tác đang đến sẽ cho kết quả vượt xa những gì bạn tự đạt. Chuẩn bị bằng cách xác định ai mang kỹ năng bổ sung và sẵn sàng làm việc như đội thực sự."}
  },
  67: { // Four of Pentacles
    past:{en:"A period of holding on too tightly — to money, control, a position, or a relationship — limited your growth even as it felt like security. That protective stance had costs you may now see clearly.",vi:"Giai đoạn giữ chặt quá mức — tiền, quyền kiểm soát, vị trí — đã hạn chế tăng trưởng dù cảm giác an toàn. Thế phòng thủ đó có cái giá bạn có thể bây giờ thấy rõ."},
    present:{en:"You are holding on too tightly to something. Ask honestly: am I protecting what I built, or suffocating it? Sometimes what you grip hardest is what needs room to breathe. Loosen before it breaks.",vi:"Bạn đang giữ chặt quá mức. Hãy tự hỏi trung thực: tôi đang bảo vệ hay bóp nghẹt? Đôi khi thứ nắm chặt nhất cần không gian thở. Nới lỏng trước khi nó vỡ."},
    future:{en:"A temptation to hoard or over-control is approaching. Recognise the difference between healthy security and fear-driven clinging. Prepare by practising small acts of generosity and letting go.",vi:"Sự cám dỗ tích trữ hoặc kiểm soát quá mức đang đến. Nhận ra sự khác biệt giữa an ninh lành mạnh và bám víu vì sợ hãi. Chuẩn bị bằng cách thực hành hào phóng nhỏ và buông bỏ."}
  },
  68: { // Five of Pentacles
    past:{en:"A period of material hardship, health concerns, or social exclusion left marks that still influence your relationship with security and your willingness to ask for help.",vi:"Giai đoạn khó khăn vật chất, lo ngại sức khỏe, hoặc bị loại trừ xã hội đã để lại dấu ấn vẫn ảnh hưởng mối quan hệ với an ninh và sự sẵn lòng xin giúp đỡ."},
    present:{en:"You are going through genuine difficulty — and the isolation probably feels worse than the problem itself. Help is available but you are not seeing it. Ask for support. Accept offers already made. You do not have to suffer alone.",vi:"Bạn đang trải qua khó khăn thực sự — và sự cô lập có lẽ cảm giác tệ hơn vấn đề. Sự giúp đỡ có sẵn nhưng bạn không thấy. Hãy xin hỗ trợ. Nhận lời đề nghị đã đưa ra. Bạn không phải chịu đựng một mình."},
    future:{en:"A period of material or social difficulty may be approaching. Build your support network now. When the challenge arrives, your greatest asset will be the willingness to accept help rather than suffer in silence.",vi:"Giai đoạn khó khăn vật chất hoặc xã hội có thể đang đến. Xây dựng mạng lưới hỗ trợ ngay. Khi thử thách đến, tài sản lớn nhất là sự sẵn lòng chấp nhận giúp đỡ thay vì chịu đựng trong im lặng."}
  },
  69: { // Six of Pentacles
    past:{en:"A past experience of giving or receiving generously shaped your understanding of the balance of resources. That exchange — whether fair or unbalanced — still informs how you relate to abundance.",vi:"Kinh nghiệm quá khứ về cho hoặc nhận hào phóng đã định hình hiểu biết về cân bằng nguồn lực. Sự trao đổi đó — công bằng hay mất cân bằng — vẫn ảnh hưởng cách bạn quan hệ với sự sung túc."},
    present:{en:"Resources are flowing — you are either in a position to give generously or to receive with dignity. Check the power balance. If giving, ensure your generosity has no hidden strings. If receiving, accept without shame.",vi:"Nguồn lực đang chảy — bạn đang ở vị trí cho hào phóng hoặc nhận với phẩm giá. Kiểm tra cân bằng quyền lực. Nếu cho, đảm bảo không có ràng buộc ẩn. Nếu nhận, chấp nhận không xấu hổ."},
    future:{en:"An opportunity to give or receive generosity is approaching. The exchange will test the fairness of your relationships. Prepare by examining what healthy reciprocity looks like to you.",vi:"Cơ hội cho hoặc nhận sự hào phóng đang đến. Sự trao đổi sẽ thử tính công bằng của các mối quan hệ. Chuẩn bị bằng cách xem xét sự tương hỗ lành mạnh trông như thế nào với bạn."}
  },
  70: { // Seven of Pentacles
    past:{en:"A period of patient investment — in work, relationships, or personal growth — required you to wait for results that were not immediately visible. That patience (or impatience) shaped what grew.",vi:"Giai đoạn đầu tư kiên nhẫn — trong công việc, mối quan hệ, phát triển cá nhân — đòi hỏi bạn chờ kết quả không thấy ngay. Sự kiên nhẫn (hoặc thiếu kiên nhẫn) đó đã định hình những gì mọc lên."},
    present:{en:"You have been putting in consistent effort and are now pausing to ask: is it working? Look honestly at what you have planted. If growth is real, be patient. If not, redirect your energy before the season passes.",vi:"Bạn đã bỏ công sức nhất quán và đang dừng lại tự hỏi: nó có hiệu quả không? Nhìn trung thực vào những gì đã trồng. Nếu tăng trưởng thật, kiên nhẫn. Nếu không, chuyển hướng năng lượng trước khi mùa qua."},
    future:{en:"A point of assessment is approaching where you will evaluate whether your investments are bearing fruit. Prepare by being honest about what is working and what is not — the harvest rewards clarity.",vi:"Thời điểm đánh giá đang đến nơi bạn sẽ xem liệu các khoản đầu tư có sinh quả. Chuẩn bị bằng sự trung thực về điều đang hiệu quả và không — mùa gặt thưởng cho sự rõ ràng."}
  },
  71: { // Eight of Pentacles
    past:{en:"A period of dedicated skill-building and disciplined practice in your past — perhaps unglamorous but deeply committed — created the competence you now rely on.",vi:"Giai đoạn xây dựng kỹ năng tận tâm và thực hành kỷ luật trong quá khứ — có thể không hào nhoáng nhưng cam kết sâu — đã tạo năng lực bạn bây giờ dựa vào."},
    present:{en:"The path forward is clear and what is needed is not more planning or inspiration but dedicated, focused practice. Show up every day, refine the details, and trust that mastery comes through accumulated effort.",vi:"Con đường phía trước rõ ràng và điều cần không phải thêm kế hoạch hay cảm hứng mà là thực hành tận tâm, tập trung. Xuất hiện mỗi ngày, tinh chỉnh chi tiết, tin rằng thành thạo đến qua nỗ lực tích lũy."},
    future:{en:"A period requiring dedicated skill development is ahead. The work will not be glamorous, but it will be the quiet discipline that separates those who talk about goals from those who achieve them.",vi:"Giai đoạn đòi hỏi phát triển kỹ năng tận tâm đang phía trước. Công việc sẽ không hào nhoáng, nhưng là kỷ luật thầm lặng phân biệt người nói về mục tiêu với người đạt được."}
  },
  72: { // Nine of Pentacles
    past:{en:"A period of self-made abundance and refined independence in your past — earned through discipline and wise choices — set the standard of quality you still aspire to.",vi:"Giai đoạn sung túc tự tạo và sự độc lập tinh tế trong quá khứ — giành được qua kỷ luật và quyết định khôn ngoan — đã đặt tiêu chuẩn chất lượng bạn vẫn hướng tới."},
    present:{en:"You have built something real — financial stability, a beautiful environment, skills that give you independence. Enjoy it without guilt. You earned this through discipline, not luck.",vi:"Bạn đã xây dựng điều thật — ổn định tài chính, môi trường đẹp, kỹ năng cho sự độc lập. Hãy tận hưởng mà không mặc cảm. Bạn đạt được qua kỷ luật, không phải may mắn."},
    future:{en:"A period of earned abundance and refined self-sufficiency is approaching. The rewards coming are the natural result of your sustained discipline. Prepare to enjoy them fully and without apology.",vi:"Giai đoạn sung túc tự tạo và tự lập tinh tế đang đến. Phần thưởng đến là kết quả tự nhiên của kỷ luật bền vững. Chuẩn bị tận hưởng đầy đủ và không cần xin lỗi."}
  },
  73: { // Ten of Pentacles
    past:{en:"A legacy — family wealth, inherited values, established traditions, or generational patterns — shaped the material and emotional foundations of your life in ways still operating today.",vi:"Di sản — tài sản gia đình, giá trị được truyền, truyền thống — đã định hình nền tảng vật chất và cảm xúc cho cuộc sống theo cách vẫn hoạt động hôm nay."},
    present:{en:"You are building or inheriting something that extends beyond yourself — a family legacy, a lasting enterprise, generational wealth. Think about what you want to leave behind. Your choices now echo through generations.",vi:"Bạn đang xây dựng hoặc thừa kế điều vượt ra ngoài bản thân — di sản gia đình, doanh nghiệp bền lâu. Nghĩ về những gì bạn muốn để lại. Lựa chọn bây giờ vang vọng qua các thế hệ."},
    future:{en:"A period of legacy-building or generational abundance is approaching. The decisions you make about where to invest resources will have effects well beyond your lifetime. Build on stone, not sand.",vi:"Giai đoạn xây dựng di sản hoặc sung túc thế hệ đang đến. Quyết định về nơi đầu tư nguồn lực sẽ có hiệu ứng vượt xa đời bạn. Hãy xây trên đá, không phải cát."}
  },
  74: { // Page of Pentacles
    past:{en:"An opportunity to learn something practical in your past — a course, an apprenticeship, a subject that fascinated you — planted seeds of competence that are still bearing fruit.",vi:"Cơ hội học điều thực tế trong quá khứ — khóa học, thực tập, chủ đề hấp dẫn — đã gieo hạt năng lực vẫn đang ra quả."},
    present:{en:"A practical learning opportunity has arrived. Approach it with dedication and patience. This is the beginning of something that could become genuinely valuable — but only if you commit to the slow, unglamorous process of truly learning.",vi:"Cơ hội học tập thực tế đã đến. Tiếp cận với sự chuyên cần và kiên nhẫn. Đây là khởi đầu của điều có thể thực sự giá trị — nhưng chỉ nếu bạn cam kết với quá trình chậm, không hào nhoáng để thực sự học."},
    future:{en:"A learning opportunity with real practical value is approaching — a course, mentorship, or new field of study. Prepare by clearing space in your schedule to commit properly when it arrives.",vi:"Cơ hội học tập có giá trị thực tiễn đang đến — khóa học, mentorship, hoặc lĩnh vực mới. Chuẩn bị bằng cách dọn chỗ trong lịch trình để cam kết đúng cách khi nó đến."}
  },
  75: { // Knight of Pentacles
    past:{en:"A period of steady, methodical work in your past — perhaps frustratingly slow but deeply reliable — built the solid foundations you now depend on.",vi:"Giai đoạn làm việc đều đặn, có phương pháp trong quá khứ — có thể chậm đáng thất vọng nhưng đáng tin cậy — đã xây nền tảng vững chắc bạn bây giờ phụ thuộc."},
    present:{en:"What is needed right now is not brilliance or speed but reliability and methodical persistence. Show up every day, do the work properly, and trust that consistency accumulates. The tortoise wins this race.",vi:"Điều cần ngay lúc này không phải sự xuất sắc hay tốc độ mà là sự đáng tin cậy và kiên trì có phương pháp. Xuất hiện mỗi ngày, làm việc đúng cách, và tin rằng sự nhất quán tích lũy."},
    future:{en:"A period requiring steady, patient effort is approaching. Do not compare yourself to faster movers — the methodical approach will outlast their sprints. Prepare for a marathon, not a sprint.",vi:"Giai đoạn đòi hỏi nỗ lực đều đặn, kiên nhẫn đang đến. Đừng so sánh với người nhanh hơn — cách tiếp cận có phương pháp sẽ bền lâu hơn. Chuẩn bị cho marathon, không phải chạy nước rút."}
  },
  76: { // Queen of Pentacles
    past:{en:"Someone — perhaps you — managed practical life with warmth and competence, creating stability and comfort that others depended on. That nurturing practicality built something lasting.",vi:"Ai đó — có thể là bạn — đã quản lý cuộc sống thực tế với sự ấm áp và năng lực, tạo sự ổn định và thoải mái người khác phụ thuộc. Sự thực tiễn nuôi dưỡng đó đã xây điều bền lâu."},
    present:{en:"You are called to create real, tangible comfort — not just for yourself but for those who depend on you. Focus on the practical basics first: food, rest, clean space, financial order. Emotional calm follows material stability.",vi:"Bạn được gọi để tạo sự thoải mái thực sự, hữu hình — không chỉ cho mình mà cho người phụ thuộc. Tập trung vào cơ bản thực tế trước — thức ăn, nghỉ ngơi, không gian sạch, trật tự tài chính."},
    future:{en:"A period requiring practical nurturing and resource management is approaching. Prepare by establishing routines and financial order — the stability you build now will be the foundation others rely on.",vi:"Giai đoạn đòi hỏi nuôi dưỡng thực tế và quản lý nguồn lực đang đến. Chuẩn bị bằng cách thiết lập thói quen và trật tự tài chính — sự ổn định bạn xây sẽ là nền tảng người khác dựa vào."}
  },
  77: { // King of Pentacles
    past:{en:"Material success built through years of disciplined work and wise investment shaped the prosperity and security that characterise your current foundations.",vi:"Thành công vật chất xây qua nhiều năm làm việc kỷ luật và đầu tư khôn ngoan đã định hình sự thịnh vượng và an ninh đặc trưng cho nền tảng hiện tại."},
    present:{en:"You are building or stewarding real material success — think long-term, be cautious with risk, and choose the approach that builds lasting security over quick gains. Your empire should be built on rock, not sand.",vi:"Bạn đang xây dựng hoặc quản lý thành công vật chất thực — nghĩ dài hạn, thận trọng với rủi ro, và chọn phương án xây an ninh bền lâu thay vì lợi nhanh. Đế chế nên được xây trên đá, không phải cát."},
    future:{en:"A period of material leadership and long-term wealth building is approaching. The decisions you face will require practical wisdom and strategic patience. Prepare by educating yourself on sustainable wealth creation.",vi:"Giai đoạn lãnh đạo vật chất và xây dựng tài sản dài hạn đang đến. Quyết định bạn đối mặt sẽ đòi hỏi trí tuệ thực tiễn và kiên nhẫn chiến lược. Chuẩn bị bằng cách tìm hiểu về tạo tài sản bền vững."}
  }
};

// ─── 3. POSITION FRAMES (Minor Arcana templated framing) ─────────────────────
const POSITION_FRAMES = {
  past: {
    prefix_en: "In your past, this card reveals",
    prefix_vi: "Trong quá khứ, lá bài này cho thấy",
    lens: "completed_event"
  },
  present: {
    prefix_en: "Right now, this card shows",
    prefix_vi: "Hiện tại, lá bài này cho thấy",
    lens: "active_energy"
  },
  future: {
    prefix_en: "Ahead of you, this card points to",
    prefix_vi: "Phía trước, lá bài này hướng tới",
    lens: "emerging_potential"
  }
};

const MINOR_PHASES = {
  'Ace': 'beginning', '2': 'beginning', '3': 'beginning',
  '4': 'development', '5': 'development', '6': 'development',
  '7': 'challenge', '8': 'challenge', '9': 'challenge',
  '10': 'completion',
  'Page': 'messenger', 'Knight': 'action', 'Queen': 'mastery', 'King': 'authority'
};

// ─── 4. ELEMENT ANALYSIS TEMPLATES ───────────────────────────────────────────
const SUIT_ELEMENT = {
  'Wands': 'fire',
  'Cups': 'water',
  'Swords': 'air',
  'Pentacles': 'earth'
};

const ELEMENT_NAMES = {
  fire:   { en: 'Fire',   vi: 'Lửa' },
  water:  { en: 'Water',  vi: 'Nước' },
  air:    { en: 'Air',    vi: 'Gió' },
  earth:  { en: 'Earth',  vi: 'Đất' },
  spirit: { en: 'Spirit', vi: 'Tinh Thần' }
};

const ELEMENT_DOMINANT = {
  fire: {
    en: "Fire dominates your spread — passion, action, and creative force drive this reading. Act boldly.",
    vi: "Lửa chi phối trải bài — đam mê, hành động và sức sáng tạo dẫn dắt."
  },
  water: {
    en: "Water flows through your reading — emotion, intuition, and relationships take center stage.",
    vi: "Nước chảy qua bài đọc — cảm xúc, trực giác và các mối quan hệ là trọng tâm."
  },
  air: {
    en: "Air dominates — intellect, communication, and mental clarity are the forces at work.",
    vi: "Gió chi phối — trí tuệ, giao tiếp và sự sáng suốt tinh thần đang hoạt động."
  },
  earth: {
    en: "Earth grounds your reading — material matters, stability, and practical concerns lead.",
    vi: "Đất làm nền cho bài đọc — vật chất, ổn định và thực tiễn dẫn đường."
  },
  spirit: {
    en: "The presence of Major Arcana signals cosmic-scale forces beyond everyday concerns.",
    vi: "Sự hiện diện của Major Arcana báo hiệu lực lượng vũ trụ vượt xa lo toan hàng ngày."
  }
};

const ELEMENT_MISSING = {
  fire: {
    en: "Absence of Fire suggests a lack of motivation or creative energy. Seek inspiration.",
    vi: "Vắng Lửa cho thấy thiếu động lực hoặc năng lượng sáng tạo."
  },
  water: {
    en: "Absence of Water suggests emotional needs may be overlooked or suppressed.",
    vi: "Vắng Nước cho thấy nhu cầu cảm xúc có thể bị bỏ qua hoặc kìm nén."
  },
  air: {
    en: "Absence of Air suggests decisions made without enough rational analysis.",
    vi: "Vắng Gió cho thấy các quyết định thiếu phân tích lý tính."
  },
  earth: {
    en: "Absence of Earth suggests practical foundations may be neglected. Ground your plans.",
    vi: "Vắng Đất cho thấy nền tảng thực tế có thể bị bỏ qua."
  }
};

// ─── 5. CARD INTERACTIONS ─────────────────────────────────────────────────────
const CARD_INTERACTIONS = [
  // Major → Major specific pairs
  {
    condition: (a, b) => (a.name === "The Tower" && b.name === "The Star") || (a.name === "The Star" && b.name === "The Tower"),
    en: "The Tower's destruction clears the way for The Star's healing light. What falls apart here is making room for genuine renewal.",
    vi: "Sự sụp đổ của Tháp mở đường cho ánh sáng chữa lành của Ngôi Sao. Những gì tan vỡ ở đây đang tạo không gian cho sự đổi mới chân thực."
  },
  {
    condition: (a, b) => a.name === "Death" && b.arcana === "major",
    en: "Death paired with another Major Arcana signals a profound, fated transformation — not merely personal change but a shift in life's fundamental architecture.",
    vi: "Death kết hợp với một lá Major Arcana khác báo hiệu sự chuyển hóa sâu sắc, có số phận — không chỉ là thay đổi cá nhân mà là sự dịch chuyển trong kiến trúc cơ bản của cuộc sống."
  },
  {
    condition: (a, b) => (a.name === "The Lovers" && b.name === "The Devil") || (a.name === "The Devil" && b.name === "The Lovers"),
    en: "The Lovers and The Devil together reveal a choice between love aligned with values and love rooted in compulsion. Examine what truly binds you to this connection.",
    vi: "Lovers và Devil cùng nhau tiết lộ sự lựa chọn giữa tình yêu phù hợp với giá trị và tình yêu bắt nguồn từ ám ảnh. Hãy xem xét điều gì thực sự ràng buộc bạn với kết nối này."
  },
  {
    condition: (a, b) => (a.name === "The Fool" && b.name === "The World") || (a.name === "The World" && b.name === "The Fool"),
    en: "The Fool and The World together form the complete arc of the Tarot journey — from innocent beginning to integrated completion. A full cycle is present in this reading.",
    vi: "The Fool và The World cùng nhau tạo thành cung hoàn chỉnh của hành trình Tarot — từ khởi đầu ngây thơ đến hoàn thành tích hợp. Một chu kỳ đầy đủ đang hiện diện trong bài đọc này."
  },
  {
    condition: (a, b) => (a.name === "The Moon" && b.name === "The Sun") || (a.name === "The Sun" && b.name === "The Moon"),
    en: "The Moon and The Sun in the same spread illuminate the tension between shadow and light, illusion and clarity. Both truths must be honored before peace is found.",
    vi: "Mặt Trăng và Mặt Trời trong cùng một trải bài soi sáng sự căng thẳng giữa bóng tối và ánh sáng, ảo tưởng và sự rõ ràng. Cả hai sự thật phải được tôn trọng trước khi tìm thấy bình yên."
  },
  {
    condition: (a, b) => (a.name === "The Hermit" && b.name === "The Chariot") || (a.name === "The Chariot" && b.name === "The Hermit"),
    en: "The Hermit's introspective wisdom meets The Chariot's decisive momentum — inner knowing must now drive outward action. What you discovered in solitude, act on it.",
    vi: "Sự khôn ngoan nội tâm của Hermit gặp đà quyết đoán của Chariot — sự hiểu biết nội tâm giờ phải thúc đẩy hành động bên ngoài. Những gì bạn khám phá trong cô đơn, hãy hành động theo đó."
  },
  {
    condition: (a, b) => (a.name === "Justice" && b.name === "Judgement") || (a.name === "Judgement" && b.name === "Justice"),
    en: "Justice and Judgement together create a powerful axis of accountability — earthly fairness and cosmic reckoning both apply here. Truth operates on every level.",
    vi: "Justice và Judgement cùng nhau tạo ra một trục trách nhiệm mạnh mẽ — sự công bằng trần thế và sự thanh toán vũ trụ đều áp dụng ở đây. Sự thật vận hành ở mọi cấp độ."
  },
  {
    condition: (a, b) => (a.name === "The High Priestess" && b.name === "The Magician") || (a.name === "The Magician" && b.name === "The High Priestess"),
    en: "The Magician's active power meets The High Priestess's receptive wisdom — doing and knowing must be integrated. Act from deep inner knowing, not just skillful impulse.",
    vi: "Sức mạnh chủ động của Magician gặp sự khôn ngoan tiếp nhận của High Priestess — làm và biết phải được tích hợp. Hành động từ sự hiểu biết nội tâm sâu sắc, không chỉ là xung động khéo léo."
  },
  {
    condition: (a, b) => (a.name === "The Emperor" && b.name === "The Empress") || (a.name === "The Empress" && b.name === "The Emperor"),
    en: "The Emperor's structure and The Empress's abundance create a powerful balance of form and fertility. Build with discipline, but allow life's richness to fill those structures.",
    vi: "Cấu trúc của Emperor và sự phong phú của Empress tạo ra sự cân bằng mạnh mẽ giữa hình thức và màu mỡ. Xây dựng với kỷ luật, nhưng cho phép sự phong phú của cuộc sống lấp đầy những cấu trúc đó."
  },
  {
    condition: (a, b) => (a.name === "Temperance" && b.name === "The Tower") || (a.name === "The Tower" && b.name === "Temperance"),
    en: "Temperance's call for balance alongside The Tower's upheaval suggests that even in chaos, a steady and moderate response will be what saves you.",
    vi: "Lời kêu gọi cân bằng của Temperance bên cạnh sự biến động của Tower gợi ý rằng ngay cả trong hỗn loạn, phản ứng ổn định và điều độ sẽ là thứ cứu bạn."
  },
  {
    condition: (a, b) => (a.name === "The Devil" && b.name === "The Star") || (a.name === "The Star" && b.name === "The Devil"),
    en: "The Devil's shadow placed beside The Star's hope speaks of liberation — the very chains that bind you are being illuminated by a light that, if you follow it, leads to freedom.",
    vi: "Bóng tối của Devil đặt bên cạnh hy vọng của Star nói về sự giải phóng — chính những xiềng xích ràng buộc bạn đang được soi sáng bởi ánh sáng mà nếu bạn theo đó sẽ dẫn đến tự do."
  },
  {
    condition: (a, b) => (a.name === "Wheel of Fortune" && b.name === "The Hanged Man") || (a.name === "The Hanged Man" && b.name === "Wheel of Fortune"),
    en: "The Wheel turns while the Hanged Man suspends — fate is moving even while you are asked to wait. Trust the cosmic timing; your patience is not wasted.",
    vi: "Bánh Xe quay trong khi Hanged Man treo mình — số phận đang chuyển động ngay cả khi bạn được yêu cầu chờ đợi. Hãy tin vào thời điểm vũ trụ; sự kiên nhẫn của bạn không lãng phí."
  },
  {
    condition: (a, b) => a.name === "The Tower" && b.name === "Death",
    en: "The Tower and Death together are the most powerful transformation pair in the deck — radical dismantling followed by total release. Something fundamental is ending, and that is exactly right.",
    vi: "Tower và Death cùng nhau là cặp chuyển hóa mạnh mẽ nhất trong bộ bài — phá hủy triệt để tiếp theo là buông bỏ hoàn toàn. Điều gì đó cơ bản đang kết thúc, và điều đó chính xác là đúng."
  },
  {
    condition: (a, b) => (a.name === "Strength" && b.name === "The Chariot") || (a.name === "The Chariot" && b.name === "Strength"),
    en: "Strength's inner grace and The Chariot's outer victory combine to show that this goal requires both will and compassion — force alone will not be sufficient.",
    vi: "Vẻ đẹp nội tâm của Strength và chiến thắng bên ngoài của Chariot kết hợp để cho thấy mục tiêu này đòi hỏi cả ý chí và lòng trắc ẩn — vũ lực đơn thuần sẽ không đủ."
  },
  {
    condition: (a, b) => (a.name === "The Sun" && b.name === "The World") || (a.name === "The World" && b.name === "The Sun"),
    en: "The Sun's radiant joy paired with The World's complete fulfillment signals peak achievement — a moment of genuine happiness at the culmination of a great cycle.",
    vi: "Niềm vui rạng rỡ của The Sun kết hợp với sự viên mãn hoàn toàn của The World báo hiệu đỉnh thành tựu — khoảnh khắc hạnh phúc thực sự ở đỉnh điểm của một chu kỳ vĩ đại."
  },

  // Suit-based patterns (all 6 suit combinations)
  {
    condition: (a, b) => a.suit === "Wands" && b.suit === "Cups",
    en: "Fire of action meets water of emotion — passion must be tempered with feeling. Act from the heart, not just the will.",
    vi: "Lửa hành động gặp nước cảm xúc — đam mê phải được điều tiết bằng cảm xúc. Hành động từ trái tim, không chỉ từ ý chí."
  },
  {
    condition: (a, b) => a.suit === "Cups" && b.suit === "Wands",
    en: "Emotional depth ignites into passionate action — feeling has found its fuel. What you care about is now ready to be acted upon.",
    vi: "Chiều sâu cảm xúc bùng cháy thành hành động đam mê — cảm xúc đã tìm thấy nhiên liệu của nó. Điều bạn quan tâm giờ đã sẵn sàng để hành động."
  },
  {
    condition: (a, b) => a.suit === "Wands" && b.suit === "Swords",
    en: "Passion meets intellect — the fire of inspiration is being refined by the blade of analysis. Aim carefully before you charge.",
    vi: "Đam mê gặp trí tuệ — lửa cảm hứng đang được tinh luyện bởi lưỡi phân tích. Nhắm cẩn thận trước khi lao vào."
  },
  {
    condition: (a, b) => a.suit === "Swords" && b.suit === "Wands",
    en: "Mental clarity fuels decisive action — thought has become deed. Your analysis has reached its limit; it is time to move.",
    vi: "Sự rõ ràng tinh thần thúc đẩy hành động quyết đoán — suy nghĩ đã trở thành hành động. Phân tích của bạn đã đến giới hạn; đã đến lúc di chuyển."
  },
  {
    condition: (a, b) => a.suit === "Wands" && b.suit === "Pentacles",
    en: "Creative fire seeks grounding — inspiration wants to become tangible. The idea needs earthly form before it can truly live.",
    vi: "Lửa sáng tạo tìm nền tảng — cảm hứng muốn trở thành hiện thực. Ý tưởng cần hình thức trần thế trước khi có thể thực sự sống."
  },
  {
    condition: (a, b) => a.suit === "Pentacles" && b.suit === "Wands",
    en: "Stable foundations spark creative ambition — security has bred the courage to dream bigger and act bolder.",
    vi: "Nền tảng vững chắc châm ngòi tham vọng sáng tạo — sự an toàn đã nuôi dưỡng lòng dũng cảm để mơ lớn hơn và hành động táo bạo hơn."
  },
  {
    condition: (a, b) => a.suit === "Cups" && b.suit === "Swords",
    en: "Heart and mind negotiate — emotion seeks rational expression. What you feel must now be spoken or decided.",
    vi: "Tim và trí đàm phán — cảm xúc tìm cách diễn đạt lý tính. Những gì bạn cảm thấy giờ phải được nói ra hoặc quyết định."
  },
  {
    condition: (a, b) => a.suit === "Swords" && b.suit === "Cups",
    en: "Logic must now yield to the heart — the mind alone cannot resolve what requires emotional wisdom.",
    vi: "Logic giờ phải nhường cho trái tim — trí óc đơn thuần không thể giải quyết những gì đòi hỏi sự khôn ngoan cảm xúc."
  },
  {
    condition: (a, b) => a.suit === "Cups" && b.suit === "Pentacles",
    en: "Emotional currents seek solid ground — feelings want to become real commitments, tangible expressions of love or care.",
    vi: "Dòng cảm xúc tìm đất vững — cảm xúc muốn trở thành cam kết thực, biểu hiện hữu hình của tình yêu hoặc sự quan tâm."
  },
  {
    condition: (a, b) => a.suit === "Pentacles" && b.suit === "Cups",
    en: "Material stability opens space for emotional exploration — when basic needs are met, the heart has room to feel.",
    vi: "Ổn định vật chất mở không gian cho khám phá cảm xúc — khi nhu cầu cơ bản được đáp ứng, trái tim có không gian để cảm nhận."
  },
  {
    condition: (a, b) => a.suit === "Swords" && b.suit === "Pentacles",
    en: "Ideas seek manifestation — intellectual clarity must now be grounded in practical, step-by-step action. Think, then build.",
    vi: "Ý tưởng tìm cách hiện thực hóa — sự rõ ràng trí tuệ giờ phải được đặt nền trong hành động thực tế, từng bước. Nghĩ, rồi xây dựng."
  },
  {
    condition: (a, b) => a.suit === "Pentacles" && b.suit === "Swords",
    en: "Practical matters demand intellectual clarity — what you have built requires honest analysis before you can build further.",
    vi: "Thực tế đòi hỏi sự rõ ràng trí tuệ — những gì bạn đã xây dựng đòi hỏi phân tích trung thực trước khi bạn có thể xây dựng tiếp."
  },

  // Number progression pattern
  {
    condition: (a, b) => a.arcana === "minor" && b.arcana === "minor" && !isNaN(parseInt(b.num)) && !isNaN(parseInt(a.num)) && parseInt(b.num) > parseInt(a.num),
    getText: (a, b) => ({
      en: `Energy escalates from ${a.num} to ${b.num} — the situation is intensifying and moving toward a more complex phase.`,
      vi: `Năng lượng tăng từ ${a.num} lên ${b.num} — tình huống đang leo thang và tiến đến giai đoạn phức tạp hơn.`
    })
  },
  {
    condition: (a, b) => a.arcana === "minor" && b.arcana === "minor" && !isNaN(parseInt(b.num)) && !isNaN(parseInt(a.num)) && parseInt(b.num) < parseInt(a.num),
    getText: (a, b) => ({
      en: `Energy descends from ${a.num} to ${b.num} — something is resolving, simplifying, or returning to an earlier stage.`,
      vi: `Năng lượng giảm từ ${a.num} xuống ${b.num} — điều gì đó đang giải quyết, đơn giản hóa, hoặc quay lại giai đoạn trước.`
    })
  },

  // Court card patterns
  {
    condition: (a, b) => a.num === "King" && b.num === "Queen" && a.suit === b.suit,
    en: "King and Queen of the same suit together represent full mastery and integration of that element's power in both its active and receptive forms.",
    vi: "King và Queen cùng chất cùng nhau đại diện cho sự thành thạo đầy đủ và tích hợp quyền năng của nguyên tố đó trong cả hai dạng chủ động và tiếp nhận."
  },
  {
    condition: (a, b) => a.num === "Knight" && b.num === "Page",
    en: "Knight follows Page — youthful inspiration is being channeled into real, directed action. The messenger has heard the call and is now moving.",
    vi: "Knight theo sau Page — cảm hứng trẻ trung đang được hướng vào hành động thực sự, có định hướng. Người truyền tin đã nghe lời kêu gọi và giờ đang di chuyển."
  },
  {
    condition: (a, b) => (a.num === "King" || a.num === "Queen") && (b.num === "King" || b.num === "Queen") && a.suit !== b.suit,
    en: "Two court rulers from different suits signal a tension between two powerful and mature forces — two domains of mastery must negotiate or integrate.",
    vi: "Hai người cai trị từ các chất khác nhau báo hiệu sự căng thẳng giữa hai lực lượng mạnh mẽ và trưởng thành — hai lĩnh vực thành thạo phải đàm phán hoặc tích hợp."
  },

  // ─── EXPANDED INTERACTIONS (Task 16) ────────────────────────────────────────

  // Court-Court: same rank, different suits
  {
    condition: (a, b) => a.num === "King" && b.num === "King" && a.suit !== b.suit,
    getText: (a, b) => ({
      en: `Two Kings — ${a.suit} and ${b.suit} — compete for authority. Power struggles are real here; decide which domain truly needs your leadership right now.`,
      vi: `Hai Vua — ${a.suit} và ${b.suit} — tranh giành quyền lực. Xung đột quyền lực là thực; hãy quyết định lĩnh vực nào thực sự cần sự lãnh đạo của bạn lúc này.`
    })
  },
  {
    condition: (a, b) => a.num === "Queen" && b.num === "Queen" && a.suit !== b.suit,
    getText: (a, b) => ({
      en: `Two Queens — ${a.suit} and ${b.suit} — each embody a different form of mastery. These inner wisdoms don't compete; find the harmony between receptive and active knowing.`,
      vi: `Hai Nữ Hoàng — ${a.suit} và ${b.suit} — mỗi vị thể hiện một dạng tinh thông khác. Những trí tuệ nội tâm này không cạnh tranh; hãy tìm sự hài hòa giữa tiếp nhận và chủ động.`
    })
  },
  {
    condition: (a, b) => a.num === "Knight" && b.num === "Knight" && a.suit !== b.suit,
    getText: (a, b) => ({
      en: `Two Knights charge in different directions — ${a.suit} and ${b.suit}. Your energy is split between two pursuits. Choose one to ride hard, or risk arriving nowhere.`,
      vi: `Hai Hiệp Sĩ lao về hai hướng — ${a.suit} và ${b.suit}. Năng lượng đang chia cho hai mục tiêu. Chọn một để dồn sức, hoặc có nguy cơ không đến đâu cả.`
    })
  },
  {
    condition: (a, b) => a.num === "Page" && b.num === "Page" && a.suit !== b.suit,
    getText: (a, b) => ({
      en: `Two Pages — messages arrive from both ${a.suit} and ${b.suit}. Multiple new beginnings knock at your door; stay curious but don't scatter your attention.`,
      vi: `Hai Thị Đồng — thông điệp đến từ cả ${a.suit} và ${b.suit}. Nhiều khởi đầu mới gõ cửa; giữ tò mò nhưng đừng phân tán sự chú ý.`
    })
  },
  {
    condition: (a, b) => a.num === "King" && b.num === "Page" && a.suit === b.suit,
    en: "King and Page of the same suit — the master mentors the student. Wisdom is being passed down; accept guidance with humility and act on it with courage.",
    vi: "Vua và Thị Đồng cùng chất — bậc thầy dẫn dắt học trò. Trí tuệ đang được truyền lại; hãy tiếp nhận với khiêm tốn và hành động với dũng cảm."
  },
  {
    condition: (a, b) => a.num === "Queen" && b.num === "Knight" && a.suit === b.suit,
    en: "Queen and Knight of the same suit — mastery guides action. Your deep understanding of this domain is ready to be expressed through decisive movement.",
    vi: "Nữ Hoàng và Hiệp Sĩ cùng chất — sự tinh thông dẫn dắt hành động. Hiểu biết sâu sắc của bạn sẵn sàng được thể hiện qua hành động quyết đoán."
  },
  {
    condition: (a, b) => a.num === "Knight" && b.num === "King" && a.suit !== b.suit,
    getText: (a, b) => ({
      en: `The Knight of ${a.suit} challenges the King of ${b.suit} — youthful action confronts established authority. Tradition and innovation must find their balance.`,
      vi: `Hiệp Sĩ ${a.suit} thách thức Vua ${b.suit} — hành động trẻ trung đối đầu quyền lực đã thiết lập. Truyền thống và đổi mới phải tìm điểm cân bằng.`
    })
  },
  {
    condition: (a, b) => a.num === "Page" && b.num === "Queen",
    getText: (a, b) => ({
      en: `The Page of ${a.suit} seeks the Queen of ${b.suit}'s wisdom — the student approaches the teacher. Be open to lessons that come through receptivity, not force.`,
      vi: `Thị Đồng ${a.suit} tìm kiếm trí tuệ của Nữ Hoàng ${b.suit} — học trò tiếp cận thầy. Hãy mở lòng đón nhận bài học đến qua sự tiếp nhận, không phải ép buộc.`
    })
  },

  // Ace-Ten interactions
  {
    condition: (a, b) => (a.num === "Ace" && b.num === "10" && a.suit === b.suit) || (a.num === "10" && b.num === "Ace" && a.suit === b.suit),
    getText: (a, b) => {
      const s = a.num === "Ace" ? a.suit : b.suit;
      return {
        en: `Ace and Ten of ${s} — the seed and the harvest of the same element. A full cycle is present: what began as pure potential has reached (or will reach) its complete expression.`,
        vi: `Át và 10 of ${s} — hạt giống và mùa gặt của cùng nguyên tố. Một chu kỳ đầy đủ hiện diện: tiềm năng thuần khiết đã đạt (hoặc sẽ đạt) sự biểu hiện trọn vẹn.`
      };
    }
  },
  {
    condition: (a, b) => (a.num === "Ace" && b.num === "10" && a.suit !== b.suit) || (a.num === "10" && b.num === "Ace" && a.suit !== b.suit),
    en: "An Ace meets a Ten from a different suit — a fresh beginning in one domain arrives just as another domain reaches completion. Endings and beginnings overlap.",
    vi: "Một Át gặp một 10 từ chất khác — khởi đầu mới ở một lĩnh vực đến đúng lúc lĩnh vực khác hoàn thành. Kết thúc và khởi đầu chồng chéo."
  },
  {
    condition: (a, b) => a.num === "Ace" && b.num === "Ace",
    en: "Two Aces — double seeds planted. Two entirely new chapters open simultaneously. The energy is raw, potent, and full of promise, but demands focus to nurture both.",
    vi: "Hai Át — hai hạt giống được gieo. Hai chương hoàn toàn mới mở ra cùng lúc. Năng lượng thô, mạnh mẽ và đầy hứa hẹn, nhưng đòi hỏi tập trung để nuôi dưỡng cả hai."
  },
  {
    condition: (a, b) => a.num === "10" && b.num === "10",
    en: "Two Tens — double completion. Multiple life areas reach their natural conclusion simultaneously. Take a breath; honor what you've built before starting anew.",
    vi: "Hai 10 — hoàn thành kép. Nhiều lĩnh vực cuộc sống đạt kết luận tự nhiên cùng lúc. Hít thở; trân trọng những gì đã xây dựng trước khi bắt đầu mới."
  },

  // Same-number-across-suits
  {
    condition: (a, b) => a.arcana === "minor" && b.arcana === "minor" && a.num === b.num && a.suit !== b.suit && !["Ace","Page","Knight","Queen","King","10"].includes(a.num),
    getText: (a, b) => ({
      en: `Two ${a.num}s from different suits (${a.suit} and ${b.suit}) — the same lesson echoes across two domains. What one element teaches, the other reinforces from a different angle.`,
      vi: `Hai lá ${a.num} từ hai chất khác nhau (${a.suit} và ${b.suit}) — cùng bài học vang vọng qua hai lĩnh vực. Điều một nguyên tố dạy, nguyên tố kia củng cố từ góc nhìn khác.`
    })
  },

  // Major-Minor specific patterns
  {
    condition: (a, b) => (a.name === "The Tower" && b.num === "Ace") || (a.num === "Ace" && b.name === "The Tower"),
    en: "The Tower alongside an Ace — destruction births a new beginning. The collapse is not the end; it is the violent clearing that makes space for something genuinely new.",
    vi: "Tháp bên cạnh một Át — sự phá hủy sinh ra khởi đầu mới. Sụp đổ không phải kết thúc; đó là sự dọn dẹp mãnh liệt tạo không gian cho điều thực sự mới mẻ."
  },
  {
    condition: (a, b) => (a.name === "Death" && b.num === "10") || (a.num === "10" && b.name === "Death"),
    en: "Death meets a Ten — an ending that coincides with natural completion. This transition is not premature; it arrives at exactly the right moment. Let go completely.",
    vi: "Death gặp một 10 — kết thúc trùng với sự hoàn thành tự nhiên. Chuyển đổi này không sớm; nó đến đúng thời điểm. Hãy buông bỏ hoàn toàn."
  },
  {
    condition: (a, b) => (a.name === "The Fool" && b.num === "Page") || (a.num === "Page" && b.name === "The Fool"),
    en: "The Fool meets a Page — double messenger energy. Innocence and curiosity amplify each other. Approach this situation with beginner's mind; the answer comes from not-knowing.",
    vi: "The Fool gặp Thị Đồng — năng lượng sứ giả kép. Sự ngây thơ và tò mò khuếch đại lẫn nhau. Tiếp cận tình huống này với tâm người mới; câu trả lời đến từ sự không-biết."
  },
  {
    condition: (a, b) => (a.name === "The Magician" && b.num === "Ace") || (a.num === "Ace" && b.name === "The Magician"),
    en: "The Magician with an Ace — manifestation power at its peak. You have both the skill and the raw material. This is the moment to act; the universe has handed you everything you need.",
    vi: "Magician với một Át — sức mạnh hiện thực hóa ở đỉnh cao. Bạn có cả kỹ năng và nguyên liệu thô. Đây là lúc hành động; vũ trụ đã trao cho bạn mọi thứ cần thiết."
  },
  {
    condition: (a, b) => a.name === "The High Priestess" && b.suit === "Cups",
    en: "The High Priestess deepened by Cups — intuition is not just a whisper, it is a tidal wave. Trust the emotional knowing that arrives without logic; it carries a truth your mind hasn't reached yet.",
    vi: "High Priestess được Cups khuếch đại — trực giác không chỉ là tiếng thì thầm, mà là con sóng thủy triều. Tin vào sự hiểu biết cảm xúc đến không qua logic; nó mang sự thật mà tâm trí chưa đạt tới."
  },
  {
    condition: (a, b) => a.name === "The Emperor" && b.suit === "Pentacles",
    en: "The Emperor meets Pentacles — structure meets material reality. Your authority and discipline are directly applicable to financial or practical matters. Build systems that last.",
    vi: "Emperor gặp Pentacles — cấu trúc gặp thực tế vật chất. Quyền lực và kỷ luật của bạn trực tiếp áp dụng được cho tài chính hoặc vấn đề thực tế. Xây dựng hệ thống bền vững."
  },
  {
    condition: (a, b) => a.name === "The Empress" && b.suit === "Cups",
    en: "The Empress meets Cups — nurturing flows into emotional abundance. Love, care, and creativity are overflowing. The challenge is not scarcity but learning to receive as generously as you give.",
    vi: "Empress gặp Cups — sự nuôi dưỡng chảy vào phong phú cảm xúc. Tình yêu, sự quan tâm và sáng tạo đang tràn đầy. Thách thức không phải thiếu thốn mà là học cách nhận hào phóng như cách bạn cho đi."
  },
  {
    condition: (a, b) => a.name === "The Hermit" && b.suit === "Swords",
    en: "The Hermit with Swords — solitary analysis reaches its deepest cut. Alone with your thoughts, clarity becomes razor-sharp. Use this insight wisely; truth revealed in solitude can heal or wound.",
    vi: "Hermit với Swords — phân tích cô đơn đạt đến vết cắt sâu nhất. Một mình với suy nghĩ, sự rõ ràng trở nên sắc bén. Dùng tuệ giác này khôn ngoan; sự thật phát lộ trong cô đơn có thể chữa lành hoặc gây thương."
  },
  {
    condition: (a, b) => a.name === "Strength" && b.suit === "Wands",
    en: "Strength paired with Wands — inner courage meets outer fire. Your gentle persistence is the perfect container for passionate action. Don't force; lead with quiet confidence and watch flames serve you.",
    vi: "Strength kết hợp Wands — dũng khí nội tâm gặp lửa bên ngoài. Sự kiên trì nhẹ nhàng là vỏ hoàn hảo cho hành động đam mê. Đừng ép; dẫn dắt bằng tự tin thầm lặng và ngọn lửa sẽ phục vụ bạn."
  },
  {
    condition: (a, b) => a.name === "The Star" && b.suit === "Cups",
    en: "The Star meets Cups — hope meets emotional healing. After loss or struggle, this combination is balm for the soul. Allow yourself to feel hopeful again; the water you need is already flowing.",
    vi: "Star gặp Cups — hy vọng gặp chữa lành cảm xúc. Sau mất mát hoặc đấu tranh, sự kết hợp này là dầu xoa cho tâm hồn. Cho phép bản thân hy vọng lần nữa; nguồn nước bạn cần đang chảy rồi."
  },
  {
    condition: (a, b) => a.name === "The Moon" && b.suit === "Swords",
    en: "The Moon with Swords — illusion meets mental analysis. Your mind is trying to dissect something that doesn't follow logic. Beware of overthinking shadows; some truths only emerge when you stop analyzing.",
    vi: "Moon với Swords — ảo tưởng gặp phân tích tinh thần. Tâm trí đang cố mổ xẻ điều không theo logic. Cẩn thận suy nghĩ quá nhiều về bóng tối; một số sự thật chỉ hiện ra khi bạn ngừng phân tích."
  },
  {
    condition: (a, b) => a.name === "The Sun" && b.suit === "Wands",
    en: "The Sun meets Wands — joy meets passion at peak creative energy. This is one of the most positive combinations: clarity, warmth, and drive all aligned. Create boldly.",
    vi: "Sun gặp Wands — niềm vui gặp đam mê ở đỉnh năng lượng sáng tạo. Đây là một trong những kết hợp tích cực nhất: rõ ràng, ấm áp và động lực đều hòa hợp. Sáng tạo mạnh mẽ."
  },
  {
    condition: (a, b) => a.name === "Judgement" && ["King","Queen","Knight","Page"].includes(b.num),
    getText: (a, b) => ({
      en: `Judgement meets the ${b.num} of ${b.suit} — a cosmic reckoning confronts a specific role or person in your life. This figure must answer a higher call; transformation of identity is underway.`,
      vi: `Judgement gặp ${b.num} of ${b.suit} — sự phán xét vũ trụ đối mặt với vai trò hoặc người cụ thể trong cuộc sống. Nhân vật này phải đáp lời kêu gọi cao hơn; chuyển hóa danh tính đang diễn ra.`
    })
  },
  {
    condition: (a, b) => (a.name === "The World" && b.num === "10") || (a.num === "10" && b.name === "The World"),
    en: "The World meets a Ten — double completion, the cycle is fully and unambiguously closed. Celebrate this ending; it is rare to have such clear closure. What comes next is entirely new.",
    vi: "World gặp một 10 — hoàn thành kép, chu kỳ đóng lại hoàn toàn và rõ ràng. Hãy ăn mừng kết thúc này; hiếm khi có sự khép lại rõ ràng như vậy. Điều tiếp theo hoàn toàn mới."
  },
  {
    condition: (a, b) => (a.name === "The Lovers" && b.num === "2") || (a.num === "2" && b.name === "The Lovers"),
    en: "The Lovers meets a Two — choice meets duality on every level. The decision before you is not just practical but deeply personal. Both options have merit; choose from your values, not your fears.",
    vi: "Lovers gặp một 2 — lựa chọn gặp nhị nguyên ở mọi cấp độ. Quyết định trước mặt không chỉ thực tế mà còn sâu sắc cá nhân. Cả hai lựa chọn đều có giá trị; chọn từ giá trị, không phải nỗi sợ."
  },
  {
    condition: (a, b) => (a.name === "The Chariot" && b.num === "Knight") || (a.num === "Knight" && b.name === "The Chariot"),
    getText: (a, b) => {
      const knight = a.num === "Knight" ? a : b;
      return {
        en: `The Chariot meets the Knight of ${knight.suit} — drive meets pursuit at full speed. Victory is within reach but demands focused, disciplined momentum. Don't veer off course now.`,
        vi: `Chariot gặp Hiệp Sĩ ${knight.suit} — động lực gặp sự theo đuổi ở tốc độ tối đa. Chiến thắng trong tầm tay nhưng đòi hỏi đà tập trung, kỷ luật. Đừng chệch hướng lúc này.`
      };
    }
  },
  {
    condition: (a, b) => (a.name === "The Devil" && b.num === "5") || (a.num === "5" && b.name === "The Devil"),
    en: "The Devil meets a Five — bondage meets crisis. The chains you feel are tightest during this period of conflict. Name the addiction, habit, or fear that feeds on the chaos, and starve it.",
    vi: "Devil gặp một 5 — xiềng xích gặp khủng hoảng. Dây trói cảm thấy chặt nhất trong giai đoạn xung đột này. Gọi tên nghiện, thói quen hoặc nỗi sợ đang nuôi dưỡng từ hỗn loạn, và bỏ đói nó."
  },
  {
    condition: (a, b) => (a.name === "The Hanged Man" && b.num === "4") || (a.num === "4" && b.name === "The Hanged Man"),
    en: "The Hanged Man meets a Four — suspension meets stability. You are asked to wait within a structure that already feels rigid. The pause is not punishment; it is the stillness before a necessary shift in perspective.",
    vi: "Hanged Man gặp một 4 — treo mình gặp ổn định. Bạn được yêu cầu chờ đợi trong cấu trúc đã cứng nhắc. Sự tạm dừng không phải hình phạt; đó là sự tĩnh lặng trước khi chuyển đổi góc nhìn cần thiết."
  },
  {
    condition: (a, b) => (a.name === "Wheel of Fortune" && b.arcana === "minor" && !["Page","Knight","Queen","King"].includes(b.num)),
    getText: (a, b) => ({
      en: `The Wheel of Fortune intersects with the ${b.num} of ${b.suit} — fate reaches into your everyday reality. What seems like a mundane situation is actually being moved by larger forces. Pay attention to the "coincidences."`,
      vi: `Bánh Xe Số Phận giao cắt với ${b.num} of ${b.suit} — số phận chạm vào thực tại hàng ngày. Tình huống tưởng bình thường thực ra đang được di chuyển bởi lực lượng lớn hơn. Hãy chú ý đến những "trùng hợp."`
    })
  },
  {
    condition: (a, b) => a.name === "Temperance" && b.arcana === "minor" && a.suit !== b.suit,
    getText: (a, b) => ({
      en: `Temperance brings balance to the ${b.num} of ${b.suit} — moderation is the medicine for whatever this card presents. Neither too much nor too little; find the middle path through this situation.`,
      vi: `Temperance mang cân bằng đến ${b.num} of ${b.suit} — điều độ là liều thuốc cho bất cứ điều gì lá bài này đưa ra. Không quá nhiều cũng không quá ít; tìm con đường giữa qua tình huống này.`
    })
  }
];

// Fallback element transitions
const ELEMENT_TRANSITIONS = {
  'fire→water': {
    en: "Fiery momentum gives way to emotional depth.",
    vi: "Đà lửa nhường chỗ cho chiều sâu cảm xúc."
  },
  'fire→earth': {
    en: "Creative fire seeks grounding — inspiration wants to become tangible.",
    vi: "Lửa sáng tạo tìm nền tảng — cảm hứng muốn trở thành hiện thực."
  },
  'fire→air': {
    en: "Passion meets intellect — act on belief, but think it through.",
    vi: "Đam mê gặp trí tuệ — hành động theo niềm tin, nhưng suy nghĩ kỹ."
  },
  'water→fire': {
    en: "Emotional depth ignites into action — feelings become fuel for change.",
    vi: "Chiều sâu cảm xúc bùng cháy thành hành động."
  },
  'water→earth': {
    en: "Emotional currents seek solid ground — feelings want real commitments.",
    vi: "Dòng cảm xúc tìm đất vững — cảm xúc muốn trở thành cam kết thực."
  },
  'water→air': {
    en: "Heart and mind negotiate — emotion seeks rational expression.",
    vi: "Tim và trí đàm phán — cảm xúc tìm cách diễn đạt lý tính."
  },
  'earth→fire': {
    en: "Stable foundations spark creative ambition — security breeds courage.",
    vi: "Nền tảng vững châm ngòi tham vọng sáng tạo."
  },
  'earth→water': {
    en: "Material stability opens space for emotional exploration.",
    vi: "Ổn định vật chất mở không gian cho khám phá cảm xúc."
  },
  'earth→air': {
    en: "Practical matters demand intellectual clarity — think before you build.",
    vi: "Thực tế đòi hỏi sáng suốt trí tuệ — nghĩ trước khi xây."
  },
  'air→fire': {
    en: "Intellectual clarity fuels decisive action — thought becomes deed.",
    vi: "Sáng suốt trí tuệ tiếp sức hành động quyết đoán."
  },
  'air→water': {
    en: "The mind must now listen to the heart — logic alone cannot answer this.",
    vi: "Trí óc giờ phải lắng nghe trái tim — logic không đủ đáp."
  },
  'air→earth': {
    en: "Ideas seek manifestation — time to turn thoughts into tangible results.",
    vi: "Ý tưởng tìm cách hiện thực hóa."
  },
  'spirit→fire': {
    en: "A cosmic force channels into passionate action.",
    vi: "Lực vũ trụ hướng vào hành động đam mê."
  },
  'spirit→water': {
    en: "A cosmic force opens emotional depths.",
    vi: "Lực vũ trụ mở chiều sâu cảm xúc."
  },
  'spirit→air': {
    en: "A cosmic force illuminates mental clarity.",
    vi: "Lực vũ trụ soi sáng trí tuệ."
  },
  'spirit→earth': {
    en: "A cosmic force manifests in material reality.",
    vi: "Lực vũ trụ biểu hiện trong thực tại vật chất."
  },
  'fire→spirit': {
    en: "Action triggers a karmic response — larger forces are engaged.",
    vi: "Hành động kích hoạt phản ứng nghiệp — lực lớn hơn đang tham gia."
  },
  'water→spirit': {
    en: "Emotional depth touches the cosmic — feelings carry spiritual weight.",
    vi: "Chiều sâu cảm xúc chạm đến vũ trụ."
  },
  'air→spirit': {
    en: "Intellectual pursuit leads to spiritual revelation.",
    vi: "Theo đuổi trí tuệ dẫn đến mặc khải tâm linh."
  },
  'earth→spirit': {
    en: "Material reality opens a portal to deeper meaning.",
    vi: "Thực tại vật chất mở cổng đến ý nghĩa sâu hơn."
  }
};

// ─── 5b. ELEMENT CONFLICT & FLOW ANALYSIS (Task 16) ─────────────────────────

const ELEMENT_CONFLICT_PAIRS = {
  fire: 'water',
  water: 'fire',
  air: 'earth',
  earth: 'air'
};

const ELEMENT_FLOW_ANALYSIS = {
  // Element conflicts (adjacent positions)
  conflicts: {
    'fire,water': {
      en: "Fire and Water clash — passion cools abruptly. The drive from one position is being doused by the emotion of the next. Acknowledge the tension rather than forcing harmony.",
      vi: "Lửa và Nước xung đột — đam mê nguội lạnh đột ngột. Động lực từ một vị trí đang bị dập tắt bởi cảm xúc của vị trí kế. Thừa nhận căng thẳng thay vì ép hài hòa."
    },
    'water,fire': {
      en: "Water meets Fire — emotions ignite into action, but the transition is volatile. What was felt deeply is now expressed forcefully. Channel this energy carefully.",
      vi: "Nước gặp Lửa — cảm xúc bùng cháy thành hành động, nhưng sự chuyển đổi bất ổn. Điều được cảm nhận sâu sắc giờ được thể hiện mãnh liệt. Hãy điều hướng năng lượng này cẩn thận."
    },
    'air,earth': {
      en: "Air and Earth resist each other — ideas struggle to take physical form. Your thinking is advanced but your circumstances demand patience and incremental effort.",
      vi: "Gió và Đất kháng cự — ý tưởng chật vật để thành hình. Tư duy đã tiến xa nhưng hoàn cảnh đòi hỏi kiên nhẫn và nỗ lực từng bước."
    },
    'earth,air': {
      en: "Earth meets Air — practical foundations seek intellectual clarity. What you've built now needs rethinking, not more building. Step back and see the bigger picture.",
      vi: "Đất gặp Gió — nền tảng thực tế tìm sáng suốt trí tuệ. Những gì đã xây giờ cần suy nghĩ lại, không phải xây thêm. Lùi lại và nhìn bức tranh lớn hơn."
    }
  },
  // Full 3-element arc narratives
  arcs: {
    'fire,water,earth': {
      en: "Passion cooled by emotion, then solidified into lasting form. The journey moves from impulse through feeling to something real and tangible.",
      vi: "Đam mê được làm dịu bởi cảm xúc, rồi đông đặc thành hình thức bền vững. Hành trình đi từ xung động qua cảm nhận đến điều thực và hữu hình."
    },
    'fire,earth,water': {
      en: "Action finds its ground, then opens to emotional depth. What started as drive became structure, and now structure softens into understanding.",
      vi: "Hành động tìm được nền, rồi mở ra chiều sâu cảm xúc. Khởi đầu là động lực, trở thành cấu trúc, và giờ cấu trúc mềm lại thành sự thấu hiểu."
    },
    'fire,air,water': {
      en: "Passion clarified by thought, then deepened by feeling. The fire of the beginning is refined into wisdom and compassion.",
      vi: "Đam mê được tư duy làm sáng, rồi cảm xúc làm sâu. Lửa khởi đầu được tinh luyện thành trí tuệ và lòng trắc ẩn."
    },
    'water,fire,earth': {
      en: "Emotion ignited into action, then grounded into reality. Feelings became the fuel for change, and that change is now taking solid shape.",
      vi: "Cảm xúc bùng cháy thành hành động, rồi tiếp đất vào thực tại. Cảm nhận trở thành nhiên liệu cho thay đổi, và thay đổi đó đang thành hình vững chắc."
    },
    'water,earth,fire': {
      en: "Emotional foundation stabilized, then reignited with passion. Deep feeling found practical form, and now that form seeks to blaze outward.",
      vi: "Nền tảng cảm xúc ổn định, rồi bùng cháy lại với đam mê. Cảm nhận sâu tìm thấy hình thức thực tế, và giờ hình thức đó muốn bùng phát ra ngoài."
    },
    'water,air,earth': {
      en: "Emotion analyzed by thought, then materialized into action. The heart spoke, the mind listened, and now hands get to work.",
      vi: "Cảm xúc được tư duy phân tích, rồi hiện thực hóa thành hành động. Trái tim nói, tâm trí lắng nghe, và giờ đôi tay bắt đầu làm việc."
    },
    'water,fire,air': {
      en: "Emotion ignited into passion, then clarified by thought. Feelings drove action, and now reflection brings understanding of what that action meant.",
      vi: "Cảm xúc bùng cháy thành đam mê, rồi tư duy làm sáng. Cảm nhận thúc đẩy hành động, và giờ suy tư mang lại hiểu biết về ý nghĩa hành động đó."
    },
    'earth,fire,water': {
      en: "Stability disrupted by passion, then soothed by emotion. What was solid caught fire, and now healing waters flow to restore balance.",
      vi: "Ổn định bị đam mê xáo trộn, rồi được cảm xúc xoa dịu. Điều vững chắc bắt lửa, và giờ nước chữa lành chảy để khôi phục cân bằng."
    },
    'earth,water,fire': {
      en: "Practical reality opens to emotional depth, then transforms into passionate action. Grounding became feeling, and feeling became fire.",
      vi: "Thực tế mở ra chiều sâu cảm xúc, rồi chuyển hóa thành hành động đam mê. Nền tảng trở thành cảm nhận, và cảm nhận trở thành lửa."
    },
    'earth,air,fire': {
      en: "Material reality examined by intellect, then ignited by passion. What was solid became a plan, and that plan now burns with purpose.",
      vi: "Thực tại vật chất được trí tuệ xem xét, rồi đam mê châm lửa. Điều vững chắc trở thành kế hoạch, và kế hoạch đó giờ cháy với mục đích."
    },
    'air,fire,water': {
      en: "Thought becomes action, then action meets feeling. Ideas sparked movement, and now that movement must be guided by emotional intelligence.",
      vi: "Tư duy trở thành hành động, rồi hành động gặp cảm nhận. Ý tưởng châm ngòi chuyển động, và giờ chuyển động phải được dẫn dắt bởi trí tuệ cảm xúc."
    },
    'air,water,fire': {
      en: "Thought deepened by emotion, then transformed into passionate action. Analysis met feeling, and together they ignite purposeful change.",
      vi: "Tư duy được cảm xúc làm sâu, rồi chuyển hóa thành hành động đam mê. Phân tích gặp cảm nhận, và cùng nhau châm ngòi thay đổi có mục đích."
    },
    'air,fire,earth': {
      en: "Ideas fueled by passion, then grounded into reality. The plan caught fire and is now being built into something you can touch.",
      vi: "Ý tưởng được đam mê tiếp sức, rồi tiếp đất vào thực tại. Kế hoạch bắt lửa và giờ đang được xây thành điều bạn có thể chạm vào."
    },
    'air,earth,water': {
      en: "Thought finds practical form, then opens to emotional depth. Logic built something solid, and now that structure fills with meaning and feeling.",
      vi: "Tư duy tìm hình thức thực tế, rồi mở ra chiều sâu cảm xúc. Logic xây nên điều vững chắc, và giờ cấu trúc đó tràn đầy ý nghĩa và cảm xúc."
    },
    // Same-element arcs (reinforcement)
    'fire,fire,fire': {
      en: "Pure fire throughout — passion, drive, and will dominate every position. The energy is immense but risks burnout. Channel this inferno with intent, or it consumes itself.",
      vi: "Lửa thuần xuyên suốt — đam mê, động lực và ý chí thống trị mọi vị trí. Năng lượng cực lớn nhưng có nguy cơ kiệt sức. Hãy hướng ngọn lửa này với chủ đích, nếu không nó tự thiêu."
    },
    'water,water,water': {
      en: "Pure water throughout — emotion, intuition, and feeling saturate this reading. You are swimming deep. Let yourself feel everything, but remember to come up for air.",
      vi: "Nước thuần xuyên suốt — cảm xúc, trực giác và cảm nhận bão hòa bài đọc. Bạn đang bơi sâu. Hãy cho phép bản thân cảm nhận tất cả, nhưng nhớ ngoi lên thở."
    },
    'earth,earth,earth': {
      en: "Pure earth throughout — material, practical, and grounded energy in every position. The foundation is rock-solid, but don't let stability become stagnation. Build, but also dream.",
      vi: "Đất thuần xuyên suốt — năng lượng vật chất, thực tế và vững chãi ở mọi vị trí. Nền tảng vững như đá, nhưng đừng để ổn định trở thành trì trệ. Xây dựng, nhưng cũng mơ mộng."
    },
    'air,air,air': {
      en: "Pure air throughout — intellect, communication, and analysis dominate. Your mind is sharp but may be detached from heart and body. Ground your brilliant ideas in real action and real feeling.",
      vi: "Gió thuần xuyên suốt — trí tuệ, giao tiếp và phân tích thống trị. Tâm trí sắc bén nhưng có thể tách rời khỏi trái tim và cơ thể. Hãy tiếp đất những ý tưởng xuất sắc bằng hành động thực và cảm xúc thực."
    }
  }
};

// ─── 6. QUESTION MODEL DATA ───────────────────────────────────────────────────
const QUESTION_MODELS = {
  general:    { en: 'General',          vi: 'Tổng Quát',           icon: '✦' },
  problem:    { en: 'Problem Analysis', vi: 'Phân Tích Vấn Đề',   icon: '🔍' },
  solution:   { en: 'Solution / Action',vi: 'Giải Pháp / Hành Động', icon: '💡' },
  crossroads: { en: 'Crossroads',       vi: 'Ngã Rẽ Cuộc Đời',    icon: '⚡' }
};

const QUESTION_MODEL_OPENINGS = {
  general: {
    en: "The cards have spoken. Here is what the spread reveals about your journey:",
    vi: "Các lá bài đã lên tiếng. Đây là điều trải bài tiết lộ về hành trình của bạn:"
  },
  problem: {
    en: "You asked: what is blocking me? The cards reveal the root of the obstacle:",
    vi: "Bạn hỏi: điều gì đang cản trở tôi? Các lá bài tiết lộ gốc rễ của trở ngại:"
  },
  solution: {
    en: "You asked: what should I do? The cards offer a path of action:",
    vi: "Bạn hỏi: tôi nên làm gì? Các lá bài mở ra con đường hành động:"
  },
  crossroads: {
    en: "You stand at a crossroads. The cards illuminate your options:",
    vi: "Bạn đang ở ngã rẽ. Các lá bài soi sáng các lựa chọn:"
  }
};

// ─── 7. ENERGY / CONFIDENCE / ARCANA TEMPLATES ───────────────────────────────
const ENERGY_TYPES = {
  transformative: {
    en: 'Transformative', vi: 'Chuyển Hóa', icon: '🔥',
    desc: {
      en: 'Major life shifts are underway — this reading carries the energy of endings that birth new beginnings.',
      vi: 'Những thay đổi lớn đang diễn ra — bài đọc mang năng lượng của kết thúc để khởi đầu mới.'
    }
  },
  healing: {
    en: 'Healing', vi: 'Chữa Lành', icon: '💚',
    desc: {
      en: 'Gentle restoration is at work — this reading invites you to nurture what has been wounded and trust the recovery process.',
      vi: 'Sự phục hồi nhẹ nhàng đang vận hành — bài đọc mời bạn chăm sóc những gì đã tổn thương và tin vào quá trình hồi phục.'
    }
  },
  challenging: {
    en: 'Challenging', vi: 'Thử Thách', icon: '⚔️',
    desc: {
      en: 'Obstacles demand your attention — this reading signals friction that, once navigated, builds resilience and clarity.',
      vi: 'Trở ngại đòi hỏi sự chú ý — bài đọc báo hiệu ma sát mà khi vượt qua sẽ xây dựng sức bền và sự rõ ràng.'
    }
  },
  harmonious: {
    en: 'Harmonious', vi: 'Hài Hòa', icon: '☯',
    desc: {
      en: 'The cards are aligned — this reading reflects balance and natural flow. Move with the current, not against it.',
      vi: 'Các lá bài đồng điệu — bài đọc phản ánh sự cân bằng và dòng chảy tự nhiên. Hãy thuận theo dòng.'
    }
  },
  intense: {
    en: 'Intense', vi: 'Mãnh Liệt', icon: '⚡',
    desc: {
      en: 'Powerful archetypal forces converge — this reading carries weight beyond everyday matters. Pay close attention.',
      vi: 'Các lực lượng nguyên mẫu mạnh mẽ hội tụ — bài đọc mang trọng lượng vượt xa chuyện thường nhật. Hãy chú ý.'
    }
  }
};

const CONFIDENCE_LEVELS = {
  high: {
    en: 'High', vi: 'Cao',
    reasons: {
      en: 'Cards aligned with clear elemental direction and an upright future position.',
      vi: 'Các lá bài đồng nhất với hướng nguyên tố rõ ràng và vị trí tương lai thuận.'
    }
  },
  moderate: {
    en: 'Moderate', vi: 'Trung Bình',
    reasons: {
      en: 'Mixed signals — some cards support the direction while others introduce uncertainty.',
      vi: 'Tín hiệu hỗn hợp — một số lá ủng hộ hướng đi, số khác mang đến sự bất định.'
    }
  },
  low: {
    en: 'Low', vi: 'Thấp',
    reasons: {
      en: 'Heavy reversal energy or scattered elements — the path is unclear and requires careful navigation.',
      vi: 'Năng lượng ngược mạnh hoặc nguyên tố phân tán — con đường chưa rõ ràng, cần điều hướng cẩn thận.'
    }
  }
};

const ARCANA_RATIO_TEXT = {
  0: {
    en: "Your reading is grounded in everyday practical matters.",
    vi: "Bài đọc nằm trong phạm vi thực tiễn hàng ngày."
  },
  1: {
    en: "One Major Arcana anchors this reading — it carries the most weight.",
    vi: "Một lá Major Arcana là trọng tâm bài đọc."
  },
  2: {
    en: "Two Major Arcana signal powerful forces at work. This runs deeper than surface events.",
    vi: "Hai lá Major Arcana báo hiệu lực lượng mạnh mẽ đang vận hành."
  },
  3: {
    en: "All three are Major Arcana — this is a pivotal moment. Forces larger than yourself converge.",
    vi: "Cả ba lá đều là Major Arcana — đây là khoảnh khắc then chốt."
  }
};

// ─── 7b. READING TONES (Task 19) ──────────────────────────────────────────────

const READING_TONES = {
  optimistic: {
    en: 'Optimistic', vi: 'Lạc Quan', icon: '☀️',
    desc: {
      en: 'The cards lean toward positive outcomes — upright energy and supportive elements suggest a favorable direction.',
      vi: 'Các lá bài nghiêng về kết quả tích cực — năng lượng thuận và nguyên tố hỗ trợ gợi ý hướng đi thuận lợi.'
    }
  },
  cautionary: {
    en: 'Cautionary', vi: 'Cảnh Báo', icon: '⚠️',
    desc: {
      en: 'Multiple reversals or challenging cards suggest caution — look before you leap and verify assumptions.',
      vi: 'Nhiều lá ngược hoặc lá thử thách gợi ý cần thận trọng — nhìn trước khi nhảy và kiểm tra giả định.'
    }
  },
  transformative: {
    en: 'Transformative', vi: 'Chuyển Đổi', icon: '🦋',
    desc: {
      en: 'Change is the central theme — old structures dissolve to make way for something new. Embrace the transition.',
      vi: 'Thay đổi là chủ đề trung tâm — cấu trúc cũ tan rã để nhường chỗ cho điều mới. Hãy đón nhận sự chuyển tiếp.'
    }
  },
  contemplative: {
    en: 'Contemplative', vi: 'Chiêm Nghiệm', icon: '🌙',
    desc: {
      en: 'This reading calls for reflection rather than action — sit with the message before making moves.',
      vi: 'Bài đọc kêu gọi suy ngẫm thay vì hành động — hãy ngồi lại với thông điệp trước khi hành động.'
    }
  }
};

// ─── 7c. CONFIDENCE REASONS (Task 19) ─────────────────────────────────────────

const CONFIDENCE_REASONS = {
  aligned_upright: {
    en: 'All cards upright with consistent elemental energy.',
    vi: 'Tất cả lá thuận với năng lượng nguyên tố nhất quán.'
  },
  dominant_clear: {
    en: 'Strong elemental dominance gives the reading clear direction.',
    vi: 'Nguyên tố trội mạnh cho bài đọc hướng đi rõ ràng.'
  },
  future_upright: {
    en: 'Future position is upright, supporting the indicated path.',
    vi: 'Vị trí tương lai thuận, ủng hộ con đường được chỉ ra.'
  },
  mixed_reversals: {
    en: 'Some reversed cards introduce complexity to the message.',
    vi: 'Một số lá ngược mang đến sự phức tạp cho thông điệp.'
  },
  future_reversed: {
    en: 'Future position is reversed, adding uncertainty to the outcome.',
    vi: 'Vị trí tương lai ngược, thêm bất định cho kết quả.'
  },
  scattered_elements: {
    en: 'Three different elements pull in different directions.',
    vi: 'Ba nguyên tố khác nhau kéo về các hướng khác nhau.'
  },
  all_reversed: {
    en: 'All cards reversed — significant blockages or internalized energy.',
    vi: 'Tất cả lá ngược — tắc nghẽn đáng kể hoặc năng lượng hướng nội.'
  },
  no_dominant: {
    en: 'No clear elemental theme — the reading spans multiple domains.',
    vi: 'Không có chủ đề nguyên tố rõ ràng — bài đọc trải rộng nhiều lĩnh vực.'
  }
};

// ─── 8. NARRATIVE TEMPLATES (Task 16) ────────────────────────────────────────

const NARRATIVE_TEMPLATES = {
  past: {
    major: {
      en: "Your story begins with a powerful archetypal force: {name} laid the foundation with {kw}.",
      vi: "Câu chuyện bắt đầu với lực lượng nguyên mẫu mạnh mẽ: {name} đã đặt nền tảng với {kw}."
    },
    major_reversed: {
      en: "Your story begins in shadow — {name} reversed shaped your foundation: {rev}.",
      vi: "Câu chuyện bắt đầu trong bóng tối — {name} ngược định hình nền tảng: {rev}."
    },
    court: {
      en: "A figure entered your story: the {name}, embodying {kw}.",
      vi: "Một nhân vật bước vào câu chuyện: {name}, hiện thân của {kw}."
    },
    court_reversed: {
      en: "A figure appeared, but distorted — the {name} reversed brought {rev}.",
      vi: "Một nhân vật xuất hiện, nhưng méo mó — {name} ngược mang theo {rev}."
    },
    minor: {
      en: "It started quietly: the {name} brought the energy of {kw} into your past.",
      vi: "Mọi thứ bắt đầu lặng lẽ: {name} mang năng lượng {kw} vào quá khứ."
    },
    minor_reversed: {
      en: "It started with a stumble — the {name} reversed meant {rev} colored your beginning.",
      vi: "Bắt đầu với một vấp ngã — {name} ngược nghĩa là {rev} nhuộm màu khởi đầu."
    }
  },
  transition_1: {
    same_element: {
      en: "That same {element} energy carries forward into your present.",
      vi: "Cùng năng lượng {element} đó tiếp tục vào hiện tại."
    },
    conflict: {
      en: "But now the energy shifts sharply — from {el1} to {el2}. {conflict_text}",
      vi: "Nhưng giờ năng lượng chuyển đổi mạnh — từ {el1} sang {el2}. {conflict_text}"
    },
    shift: {
      en: "The energy transforms — from {el1} to {el2} — bringing a new quality into the present moment.",
      vi: "Năng lượng chuyển hóa — từ {el1} sang {el2} — mang phẩm chất mới vào khoảnh khắc hiện tại."
    }
  },
  present: {
    major: {
      en: "Right now, {name} dominates your reality — {kw} defines this chapter.",
      vi: "Ngay lúc này, {name} thống trị thực tại — {kw} định nghĩa chương này."
    },
    major_reversed: {
      en: "Right now, {name} reversed creates tension in your present: {rev}.",
      vi: "Ngay lúc này, {name} ngược tạo căng thẳng trong hiện tại: {rev}."
    },
    court: {
      en: "In the present, the {name} plays a central role — {kw} is the active force.",
      vi: "Trong hiện tại, {name} đóng vai trò trung tâm — {kw} là lực đang hoạt động."
    },
    court_reversed: {
      en: "In the present, the {name} reversed disrupts — {rev}.",
      vi: "Trong hiện tại, {name} ngược gây xáo trộn — {rev}."
    },
    minor: {
      en: "Your present is shaped by the {name} — the energy of {kw} runs through your daily reality.",
      vi: "Hiện tại được định hình bởi {name} — năng lượng {kw} chạy xuyên qua thực tại hàng ngày."
    },
    minor_reversed: {
      en: "Your present is complicated by the {name} reversed — {rev}.",
      vi: "Hiện tại phức tạp hơn bởi {name} ngược — {rev}."
    }
  },
  transition_2: {
    same_element: {
      en: "This {element} energy persists, carrying its momentum into the future.",
      vi: "Năng lượng {element} này tiếp tục, mang đà vào tương lai."
    },
    conflict: {
      en: "Looking ahead, the energy shifts again — from {el1} to {el2}. {conflict_text}",
      vi: "Nhìn về phía trước, năng lượng lại chuyển — từ {el1} sang {el2}. {conflict_text}"
    },
    shift: {
      en: "As you look forward, the energy evolves — from {el1} to {el2} — pointing toward new possibilities.",
      vi: "Khi nhìn về phía trước, năng lượng tiến hóa — từ {el1} sang {el2} — chỉ về những khả năng mới."
    }
  },
  future: {
    major: {
      en: "The path ahead leads to {name} — {kw} awaits as your destination.",
      vi: "Con đường phía trước dẫn đến {name} — {kw} chờ đợi như đích đến."
    },
    major_reversed: {
      en: "The road ahead holds a challenge: {name} reversed warns — {rev}.",
      vi: "Con đường phía trước chứa thử thách: {name} ngược cảnh báo — {rev}."
    },
    court: {
      en: "Ahead, the {name} awaits — {kw} will become your guiding qualities.",
      vi: "Phía trước, {name} chờ đợi — {kw} sẽ trở thành phẩm chất dẫn dắt."
    },
    court_reversed: {
      en: "Ahead, the {name} reversed signals a figure or role that needs careful navigation: {rev}.",
      vi: "Phía trước, {name} ngược báo hiệu nhân vật hoặc vai trò cần cẩn thận: {rev}."
    },
    minor: {
      en: "The future holds the {name} — {kw} will color what comes next.",
      vi: "Tương lai chứa {name} — {kw} sẽ nhuộm màu những gì sắp đến."
    },
    minor_reversed: {
      en: "The future carries a warning from the {name} reversed: {rev}.",
      vi: "Tương lai mang lời cảnh báo từ {name} ngược: {rev}."
    }
  }
};

// ─── 9. CARD ACTION TEMPLATES (Task 17) ─────────────────────────────────────
// 78 cards × 3 positional roles: past_lesson, present_action, future_prep
// Each step is specific to the card's energy and the role it plays in the spread
const CARD_ACTION_TEMPLATES = {
  // ── MAJOR ARCANA ──────────────────────────────────────────────────────────
  0: { // The Fool
    past_lesson: {
      en: "Identify the leap you once took without a safety net — what did that courage teach you about trusting the unknown?",
      vi: "Nhận diện bước nhảy bạn từng thực hiện mà không có lưới an toàn — lòng can đảm đó dạy bạn điều gì về việc tin tưởng vào điều chưa biết?"
    },
    present_action: {
      en: "Name one thing you have been overthinking and take the first step today, even without a complete plan.",
      vi: "Gọi tên một điều bạn đang suy nghĩ quá nhiều và thực hiện bước đầu tiên hôm nay, dù chưa có kế hoạch hoàn chỉnh."
    },
    future_prep: {
      en: "Clear your schedule of one unnecessary commitment to make room for the unexpected opportunity approaching.",
      vi: "Dọn lịch trình bỏ bớt một cam kết không cần thiết để tạo chỗ cho cơ hội bất ngờ đang đến."
    }
  },
  1: { // The Magician
    past_lesson: {
      en: "Recall a time when you turned limited resources into something real — that resourcefulness is still your superpower.",
      vi: "Nhớ lại lúc bạn biến nguồn lực hạn chế thành điều thực — sự tháo vát đó vẫn là siêu năng lực của bạn."
    },
    present_action: {
      en: "List the tools, skills, and connections you already have — then use one of them toward your goal before the day ends.",
      vi: "Liệt kê công cụ, kỹ năng, và mối quan hệ bạn đã có — rồi sử dụng một trong số đó cho mục tiêu trước khi hết ngày."
    },
    future_prep: {
      en: "Sharpen one specific skill that will be critical for your next project — mastery is your path forward.",
      vi: "Mài giũa một kỹ năng cụ thể sẽ quan trọng cho dự án tiếp theo — sự thành thạo là con đường phía trước."
    }
  },
  2: { // The High Priestess
    past_lesson: {
      en: "Think of a time your gut feeling was right but you ignored it — let that memory sharpen your trust in intuition.",
      vi: "Nhớ lại lần linh cảm của bạn đúng nhưng bạn bỏ qua — để ký ức đó mài sắc niềm tin vào trực giác."
    },
    present_action: {
      en: "Spend 15 minutes in silence today — journal what surfaces without filtering or judging it.",
      vi: "Dành 15 phút im lặng hôm nay — ghi lại những gì nổi lên mà không lọc hay phán xét."
    },
    future_prep: {
      en: "Start a dream journal or intuition log — the subtle signals coming will be important to capture.",
      vi: "Bắt đầu nhật ký giấc mơ hoặc sổ trực giác — những tín hiệu tinh tế sắp đến sẽ quan trọng cần ghi lại."
    }
  },
  3: { // The Empress
    past_lesson: {
      en: "Acknowledge a period when nurturing others cost you your own wellbeing — that sacrifice taught you about boundaries.",
      vi: "Thừa nhận giai đoạn chăm sóc người khác khiến bạn mất đi sức khỏe bản thân — sự hy sinh đó dạy bạn về ranh giới."
    },
    present_action: {
      en: "Do one nurturing thing for yourself today: a proper meal, a walk in nature, or rest without guilt.",
      vi: "Làm một điều chăm sóc bản thân hôm nay: bữa ăn tử tế, đi bộ trong thiên nhiên, hoặc nghỉ ngơi không cảm giác tội lỗi."
    },
    future_prep: {
      en: "Plant the seed of a creative project and commit to tending it weekly — growth needs patient, consistent care.",
      vi: "Gieo hạt giống cho dự án sáng tạo và cam kết chăm sóc hàng tuần — sự phát triển cần chăm sóc kiên nhẫn, đều đặn."
    }
  },
  4: { // The Emperor
    past_lesson: {
      en: "Reflect on a time when structure saved a chaotic situation — discipline was the foundation, not the enemy.",
      vi: "Suy ngẫm về lần cấu trúc đã cứu một tình huống hỗn loạn — kỷ luật là nền tảng, không phải kẻ thù."
    },
    present_action: {
      en: "Set three clear deadlines for your current priorities and write them where you will see them daily.",
      vi: "Đặt ba hạn chót rõ ràng cho các ưu tiên hiện tại và viết ra nơi bạn sẽ nhìn thấy hàng ngày."
    },
    future_prep: {
      en: "Build the system or routine you will need when responsibilities increase — prepare the scaffold before the weight arrives.",
      vi: "Xây dựng hệ thống hoặc thói quen bạn sẽ cần khi trách nhiệm tăng lên — chuẩn bị giàn giáo trước khi trọng lượng đến."
    }
  },
  5: { // The Hierophant
    past_lesson: {
      en: "Identify a mentor or tradition that shaped your values — honour that lineage even as you forge your own path.",
      vi: "Nhận diện người thầy hoặc truyền thống đã định hình giá trị của bạn — tôn trọng dòng truyền thừa đó ngay cả khi bạn tạo con đường riêng."
    },
    present_action: {
      en: "Seek guidance from someone who has walked this path before — a teacher, a book, or a proven methodology.",
      vi: "Tìm kiếm hướng dẫn từ người đã đi con đường này trước — một người thầy, cuốn sách, hoặc phương pháp đã được chứng minh."
    },
    future_prep: {
      en: "Enroll in the course or commit to the practice you have been postponing — structured learning accelerates growth.",
      vi: "Đăng ký khóa học hoặc cam kết thực hành bạn đã trì hoãn — học tập có cấu trúc giúp tăng trưởng nhanh hơn."
    }
  },
  6: { // The Lovers
    past_lesson: {
      en: "Recall a choice where you followed your deepest values instead of convenience — that alignment created lasting fulfillment.",
      vi: "Nhớ lại lựa chọn bạn theo giá trị sâu nhất thay vì sự tiện lợi — sự đồng nhất đó tạo ra sự viên mãn lâu dài."
    },
    present_action: {
      en: "Write down your core values and check if your current path aligns — adjust one thing that does not.",
      vi: "Viết ra giá trị cốt lõi và kiểm tra xem con đường hiện tại có phù hợp không — điều chỉnh một điều không phù hợp."
    },
    future_prep: {
      en: "Clarify your non-negotiables before the next big decision arrives — knowing your values prevents paralysis at crossroads.",
      vi: "Làm rõ những điều không thương lượng trước khi quyết định lớn tiếp theo đến — biết giá trị giúp tránh tê liệt ở ngã rẽ."
    }
  },
  7: { // The Chariot
    past_lesson: {
      en: "Remember when sheer willpower carried you through despite opposition — that determination is a proven strength.",
      vi: "Nhớ lại khi ý chí thuần túy đã đưa bạn qua bất chấp sự phản đối — sự quyết tâm đó là sức mạnh đã được chứng minh."
    },
    present_action: {
      en: "Pick your single most important goal and eliminate one distraction that competes with it today.",
      vi: "Chọn mục tiêu quan trọng nhất và loại bỏ một sự xao nhãng đang cạnh tranh với nó hôm nay."
    },
    future_prep: {
      en: "Prepare for resistance ahead by strengthening your resolve — write down why this goal matters and keep it visible.",
      vi: "Chuẩn bị cho sự kháng cự phía trước bằng cách củng cố quyết tâm — viết lý do mục tiêu này quan trọng và giữ nó trước mắt."
    }
  },
  8: { // Strength
    past_lesson: {
      en: "Recall a situation you resolved through patience and compassion rather than force — that gentle power was more effective.",
      vi: "Nhớ lại tình huống bạn giải quyết bằng kiên nhẫn và lòng trắc ẩn thay vì sức mạnh — sức mạnh dịu dàng đó hiệu quả hơn."
    },
    present_action: {
      en: "In today's most challenging interaction, respond with calm presence instead of reactivity — pause before you speak.",
      vi: "Trong tương tác thách thức nhất hôm nay, đáp lại bằng sự bình tĩnh thay vì phản ứng — tạm dừng trước khi nói."
    },
    future_prep: {
      en: "Build a daily practice that cultivates inner calm — meditation, breathwork, or journaling — you will need this reservoir soon.",
      vi: "Xây dựng thực hành hàng ngày nuôi dưỡng sự bình tĩnh — thiền, hít thở, hoặc viết nhật ký — bạn sẽ sớm cần nguồn dự trữ này."
    }
  },
  9: { // The Hermit
    past_lesson: {
      en: "Recall a period of solitude that led to a breakthrough insight — that withdrawal was not avoidance, it was preparation.",
      vi: "Nhớ lại giai đoạn cô đơn dẫn đến sự thấu hiểu đột phá — sự rút lui đó không phải trốn tránh, mà là chuẩn bị."
    },
    present_action: {
      en: "Block out two hours this week for genuine solitude — no phone, no input — and sit with the question that matters most.",
      vi: "Dành hai giờ tuần này cho sự cô đơn thực sự — không điện thoại, không đầu vào — và ngồi với câu hỏi quan trọng nhất."
    },
    future_prep: {
      en: "Prepare to share what you have learned in solitude — the insight gained is meant to light others' paths too.",
      vi: "Chuẩn bị chia sẻ điều bạn học được trong cô đơn — sự thấu hiểu có được cũng dành để soi sáng con đường người khác."
    }
  },
  10: { // Wheel of Fortune
    past_lesson: {
      en: "Recognize a cycle that repeated in your life — understanding its pattern gives you power to ride it skillfully next time.",
      vi: "Nhận ra một chu kỳ lặp lại trong đời bạn — hiểu khuôn mẫu cho bạn sức mạnh để điều khiển nó khéo léo lần tới."
    },
    present_action: {
      en: "Accept what you cannot control today and focus energy on what you can — adaptability is your greatest asset right now.",
      vi: "Chấp nhận điều bạn không kiểm soát được hôm nay và tập trung năng lượng vào điều bạn có thể — khả năng thích ứng là tài sản lớn nhất lúc này."
    },
    future_prep: {
      en: "Build a financial or emotional buffer for the next turning point — the wheel always turns, and preparation softens the landing.",
      vi: "Xây dựng khoản dự phòng tài chính hoặc cảm xúc cho bước ngoặt tiếp theo — bánh xe luôn quay, và sự chuẩn bị giúp hạ cánh êm hơn."
    }
  },
  11: { // Justice
    past_lesson: {
      en: "Reflect on a consequence you received — fair or not — and extract the principle it taught you about cause and effect.",
      vi: "Suy ngẫm về hệ quả bạn nhận được — công bằng hay không — và rút ra nguyên tắc nó dạy bạn về nhân quả."
    },
    present_action: {
      en: "Have the honest conversation you have been avoiding — speak truthfully and listen without defending.",
      vi: "Nói chuyện thành thật mà bạn đang né tránh — nói thật và lắng nghe mà không biện hộ."
    },
    future_prep: {
      en: "Document important agreements in writing — clarity now prevents disputes later.",
      vi: "Ghi lại các thỏa thuận quan trọng bằng văn bản — sự rõ ràng bây giờ ngăn tranh chấp sau này."
    }
  },
  12: { // The Hanged Man
    past_lesson: {
      en: "Remember when surrendering control led to an insight you never would have found by pushing — that pause was productive.",
      vi: "Nhớ khi buông bỏ kiểm soát dẫn đến sự thấu hiểu bạn không bao giờ tìm được bằng cách ép — sự tạm dừng đó hiệu quả."
    },
    present_action: {
      en: "Stop trying to solve the problem with your current approach — flip your perspective and ask 'What am I refusing to see?'",
      vi: "Ngừng cố giải quyết vấn đề bằng cách tiếp cận hiện tại — lật góc nhìn và hỏi 'Điều gì tôi đang từ chối nhìn thấy?'"
    },
    future_prep: {
      en: "Practice the art of strategic waiting — not every opportunity needs an immediate response; some ripen with patience.",
      vi: "Thực hành nghệ thuật chờ đợi chiến lược — không phải mọi cơ hội đều cần phản hồi ngay; một số chín muồi với sự kiên nhẫn."
    }
  },
  13: { // Death
    past_lesson: {
      en: "Name the ending you resisted but that ultimately freed you — that transformation proved you survive what you fear most.",
      vi: "Gọi tên sự kết thúc bạn từng kháng cự nhưng cuối cùng giải phóng bạn — sự chuyển hóa đó chứng minh bạn sống sót qua điều sợ nhất."
    },
    present_action: {
      en: "Identify one thing in your life that has run its course and take the first step to release it today.",
      vi: "Nhận diện một điều trong đời đã hết thời hạn và thực hiện bước đầu tiên để buông bỏ hôm nay."
    },
    future_prep: {
      en: "Create space for the new by clearing out the old — clean a room, end a subscription, close a chapter deliberately.",
      vi: "Tạo không gian cho cái mới bằng cách dọn dẹp cái cũ — dọn phòng, hủy đăng ký, kết thúc một chương có chủ đích."
    }
  },
  14: { // Temperance
    past_lesson: {
      en: "Recall when finding balance between two extremes created your best outcome — moderation was not weakness, it was wisdom.",
      vi: "Nhớ lại khi tìm được cân bằng giữa hai thái cực tạo ra kết quả tốt nhất — điều độ không phải yếu đuối, mà là trí tuệ."
    },
    present_action: {
      en: "Identify where you are swinging between extremes and commit to one sustainable middle path today.",
      vi: "Nhận diện nơi bạn đang dao động giữa các thái cực và cam kết một con đường giữa bền vững hôm nay."
    },
    future_prep: {
      en: "Design a daily routine that integrates both work and rest, ambition and peace — sustainable rhythm prevents burnout.",
      vi: "Thiết kế thói quen hàng ngày tích hợp cả làm việc và nghỉ ngơi, tham vọng và bình yên — nhịp bền vững ngăn kiệt sức."
    }
  },
  15: { // The Devil
    past_lesson: {
      en: "Identify the pattern or attachment that kept you trapped in the past — naming the chain is the first step to freedom.",
      vi: "Nhận diện khuôn mẫu hoặc sự gắn bó từng giữ bạn bị mắc kẹt — gọi tên xiềng xích là bước đầu tiên đến tự do."
    },
    present_action: {
      en: "Name the specific habit, relationship, or coping mechanism that is not serving you — and take one concrete step to change it today.",
      vi: "Gọi tên thói quen, mối quan hệ, hoặc cơ chế đối phó cụ thể không phục vụ bạn — và thực hiện một bước cụ thể để thay đổi hôm nay."
    },
    future_prep: {
      en: "Build an accountability system — tell someone about the change you are making so you cannot quietly slide back.",
      vi: "Xây dựng hệ thống chịu trách nhiệm — nói với ai đó về sự thay đổi bạn đang làm để không thể lặng lẽ quay lại."
    }
  },
  16: { // The Tower
    past_lesson: {
      en: "Identify a collapse that revealed a truth you needed to see — destruction cleared the way for something more authentic.",
      vi: "Nhận diện sự sụp đổ đã tiết lộ sự thật bạn cần thấy — sự phá hủy dọn đường cho điều chân thực hơn."
    },
    present_action: {
      en: "Do not try to rebuild what just fell — instead, stand still and honestly assess what was false in the old structure.",
      vi: "Đừng cố xây lại điều vừa sụp — thay vào đó, đứng yên và đánh giá thành thật điều gì là giả trong cấu trúc cũ."
    },
    future_prep: {
      en: "When you rebuild, build on truth this time — foundations based on honesty survive the next storm.",
      vi: "Khi bạn xây lại, lần này hãy xây trên sự thật — nền móng dựa trên sự trung thực sẽ sống sót qua cơn bão tiếp theo."
    }
  },
  17: { // The Star
    past_lesson: {
      en: "Remember the hope that returned after your darkest period — you have already proven that healing is real and you are capable of it.",
      vi: "Nhớ lại hy vọng đã trở lại sau giai đoạn tối tăm nhất — bạn đã chứng minh rằng sự chữa lành là thật và bạn có khả năng."
    },
    present_action: {
      en: "Take one small step toward something you want but have been afraid to hope for — the universe meets sincere effort.",
      vi: "Thực hiện một bước nhỏ hướng tới điều bạn muốn nhưng sợ hy vọng — vũ trụ đáp lại nỗ lực chân thành."
    },
    future_prep: {
      en: "Allow yourself to dream bigger — write down the vision you would pursue if you knew healing was guaranteed.",
      vi: "Cho phép bản thân mơ lớn hơn — viết ra tầm nhìn bạn sẽ theo đuổi nếu biết sự chữa lành được đảm bảo."
    }
  },
  18: { // The Moon
    past_lesson: {
      en: "Recall a time when fear distorted your perception — the truth that eventually emerged was less frightening than the illusion.",
      vi: "Nhớ lại lần sợ hãi bóp méo nhận thức — sự thật cuối cùng lộ ra ít đáng sợ hơn ảo tưởng."
    },
    present_action: {
      en: "Do not make any irreversible decisions this week — instead, write down what you think is true and what you are not sure about.",
      vi: "Không đưa ra quyết định không thể đảo ngược tuần này — thay vào đó, viết ra điều bạn nghĩ là thật và điều bạn không chắc chắn."
    },
    future_prep: {
      en: "Develop your ability to sit with uncertainty — clarity is coming, but forcing it now will lead to distortion.",
      vi: "Phát triển khả năng sống với sự không chắc chắn — sự rõ ràng đang đến, nhưng ép bây giờ sẽ dẫn đến méo mó."
    }
  },
  19: { // The Sun
    past_lesson: {
      en: "Recall a moment of genuine joy and clarity — that feeling is your natural state when you stop blocking it.",
      vi: "Nhớ lại khoảnh khắc vui sướng và rõ ràng thực sự — cảm giác đó là trạng thái tự nhiên khi bạn ngừng chặn nó."
    },
    present_action: {
      en: "Share your success or happiness openly today without minimizing it — joy expressed multiplies.",
      vi: "Chia sẻ thành công hoặc hạnh phúc công khai hôm nay mà không hạ thấp — niềm vui được bày tỏ sẽ nhân lên."
    },
    future_prep: {
      en: "Channel this positive energy into long-term plans — optimism backed by action creates the future you want.",
      vi: "Chuyển hướng năng lượng tích cực vào kế hoạch dài hạn — lạc quan được hỗ trợ bằng hành động tạo ra tương lai bạn muốn."
    }
  },
  20: { // Judgement
    past_lesson: {
      en: "Forgive yourself for one specific past mistake — carrying that guilt is heavier than the lesson it taught.",
      vi: "Tha thứ cho bản thân về một sai lầm cụ thể trong quá khứ — mang theo tội lỗi nặng hơn bài học nó dạy."
    },
    present_action: {
      en: "Conduct an honest life review of one area: what worked, what did not, and what you are being called to do next.",
      vi: "Thực hiện đánh giá thành thật một lĩnh vực trong đời: điều gì hiệu quả, điều gì không, và bạn đang được gọi làm gì tiếp."
    },
    future_prep: {
      en: "Answer the calling that has been growing louder — write down what it is and commit to one step toward it.",
      vi: "Đáp lại tiếng gọi ngày càng lớn hơn — viết ra nó là gì và cam kết một bước hướng tới."
    }
  },
  21: { // The World
    past_lesson: {
      en: "Acknowledge the full journey that brought you to this point — every struggle was an essential part of the whole.",
      vi: "Thừa nhận toàn bộ hành trình đã đưa bạn đến điểm này — mọi khó khăn đều là phần thiết yếu của tổng thể."
    },
    present_action: {
      en: "Celebrate your completion properly before moving on — name three things you accomplished and share them with someone.",
      vi: "Ăn mừng sự hoàn thành đúng cách trước khi tiếp tục — gọi tên ba điều bạn đã đạt được và chia sẻ với ai đó."
    },
    future_prep: {
      en: "Prepare for the next great cycle by clarifying what you want to carry forward and what to leave behind.",
      vi: "Chuẩn bị cho chu kỳ lớn tiếp theo bằng cách làm rõ điều muốn mang theo và điều cần bỏ lại."
    }
  },

  // ── WANDS (Fire · Action · Ambition) ──────────────────────────────────────
  22: { // Ace of Wands
    past_lesson: {
      en: "Recall the spark that started something important — honour that initial fire even if the path changed along the way.",
      vi: "Nhớ lại tia lửa khởi đầu điều quan trọng — tôn trọng ngọn lửa ban đầu dù con đường đã thay đổi."
    },
    present_action: {
      en: "Act on the creative idea that excites you most — write it down, tell someone, and take the first concrete step today.",
      vi: "Hành động theo ý tưởng sáng tạo khiến bạn hào hứng nhất — viết ra, nói với ai đó, và thực hiện bước cụ thể đầu tiên hôm nay."
    },
    future_prep: {
      en: "Keep a running list of sparks and ideas — the next big opportunity will arrive suddenly and you need to be ready to catch it.",
      vi: "Giữ danh sách ý tưởng và tia lửa — cơ hội lớn tiếp theo sẽ đến bất ngờ và bạn cần sẵn sàng nắm bắt."
    }
  },
  23: { // Two of Wands
    past_lesson: {
      en: "Reflect on plans that stayed as dreams because you waited too long — the vision was real, the hesitation was the problem.",
      vi: "Suy ngẫm về kế hoạch chỉ là mơ vì bạn chờ quá lâu — tầm nhìn là thật, sự do dự mới là vấn đề."
    },
    present_action: {
      en: "Turn your vision into a specific plan: set three milestones with dates and decide what you will sacrifice to get there.",
      vi: "Biến tầm nhìn thành kế hoạch cụ thể: đặt ba mốc với ngày tháng và quyết định điều bạn sẽ hy sinh để đạt được."
    },
    future_prep: {
      en: "Research the logistics of your next big move — the gap between vision and action is usually just information.",
      vi: "Nghiên cứu logistics cho bước đi lớn tiếp theo — khoảng cách giữa tầm nhìn và hành động thường chỉ là thông tin."
    }
  },
  24: { // Three of Wands
    past_lesson: {
      en: "Remember when early results encouraged you to expand — that faith in momentum was rewarded.",
      vi: "Nhớ khi kết quả ban đầu khuyến khích bạn mở rộng — niềm tin vào đà phát triển đã được đền đáp."
    },
    present_action: {
      en: "Think bigger than your current scope — the opportunity ahead is larger than your initial estimate.",
      vi: "Nghĩ lớn hơn phạm vi hiện tại — cơ hội phía trước lớn hơn ước tính ban đầu của bạn."
    },
    future_prep: {
      en: "Prepare for the growth that is coming by building capacity now — systems, team, or skills to handle increased demand.",
      vi: "Chuẩn bị cho sự tăng trưởng đang đến bằng cách xây dựng năng lực ngay — hệ thống, đội ngũ, hoặc kỹ năng cho nhu cầu tăng."
    }
  },
  25: { // Four of Wands
    past_lesson: {
      en: "Recall a milestone you celebrated with people who mattered — that shared joy strengthened bonds that still support you.",
      vi: "Nhớ lại cột mốc bạn ăn mừng với những người quan trọng — niềm vui chung đã củng cố mối quan hệ vẫn hỗ trợ bạn."
    },
    present_action: {
      en: "Stop and celebrate what you have achieved so far — gather the people who helped and mark this moment properly.",
      vi: "Dừng lại và ăn mừng điều bạn đã đạt được — tụ họp những người đã giúp đỡ và đánh dấu khoảnh khắc này."
    },
    future_prep: {
      en: "Plan a reward or celebration for your next milestone — having something to look forward to fuels persistence.",
      vi: "Lên kế hoạch phần thưởng cho cột mốc tiếp theo — có điều mong chờ tiếp thêm sức bền."
    }
  },
  26: { // Five of Wands
    past_lesson: {
      en: "Recall a conflict that ultimately sharpened your skills or clarified your position — friction was the teacher.",
      vi: "Nhớ lại xung đột cuối cùng đã mài sắc kỹ năng hoặc làm rõ lập trường — ma sát là người thầy."
    },
    present_action: {
      en: "Decide if the current competition is making you better or draining you — if draining, step out; if sharpening, lean in.",
      vi: "Quyết định xem cạnh tranh hiện tại đang giúp bạn tốt hơn hay hao mòn — nếu hao mòn, rút lui; nếu mài sắc, tiến vào."
    },
    future_prep: {
      en: "Develop your ability to disagree productively — the next challenge will require you to hold your ground without escalating.",
      vi: "Phát triển khả năng bất đồng hiệu quả — thử thách tiếp theo sẽ cần bạn giữ vững lập trường mà không leo thang."
    }
  },
  27: { // Six of Wands
    past_lesson: {
      en: "Remember the recognition you earned through real effort — you deserved it, and that confidence carried you forward.",
      vi: "Nhớ sự công nhận bạn kiếm được qua nỗ lực thực — bạn xứng đáng, và sự tự tin đó đã đưa bạn tiến lên."
    },
    present_action: {
      en: "Accept the praise or success in front of you fully — do not deflect or minimize what you have accomplished.",
      vi: "Đón nhận lời khen hoặc thành công trước mặt bạn trọn vẹn — đừng chối bỏ hay hạ thấp điều bạn đã đạt được."
    },
    future_prep: {
      en: "Use this recognition as fuel for the harder challenges ahead — build on this momentum rather than resting on it.",
      vi: "Dùng sự công nhận này làm nhiên liệu cho thử thách khó hơn phía trước — xây dựng trên đà này thay vì nghỉ ngơi trên đó."
    }
  },
  28: { // Seven of Wands
    past_lesson: {
      en: "Recall a time you defended your position against pressure and it proved right — your conviction was justified.",
      vi: "Nhớ lại lần bạn bảo vệ lập trường trước áp lực và đúng — niềm tin của bạn đã được chứng minh."
    },
    present_action: {
      en: "Stand firm on the boundary or position being challenged — this is not the time to accommodate those who do not have your interests at heart.",
      vi: "Đứng vững trên ranh giới hoặc lập trường đang bị thách thức — đây không phải lúc nhượng bộ người không nghĩ cho bạn."
    },
    future_prep: {
      en: "Strengthen your defenses — document your reasoning, build allies, and prepare for the next wave of pushback.",
      vi: "Củng cố phòng thủ — ghi lại lý luận, xây dựng đồng minh, và chuẩn bị cho đợt phản đối tiếp theo."
    }
  },
  29: { // Eight of Wands
    past_lesson: {
      en: "Remember when swift action created results that careful planning never would have — speed was your ally.",
      vi: "Nhớ khi hành động nhanh tạo kết quả mà kế hoạch cẩn thận không bao giờ có — tốc độ là đồng minh."
    },
    present_action: {
      en: "Respond to the opportunity or message in front of you now — the window is real but narrow, and momentum rewards the decisive.",
      vi: "Phản hồi cơ hội hoặc tin nhắn trước mặt ngay — cửa sổ cơ hội thật nhưng hẹp, đà thuận lợi ưu ái người quyết đoán."
    },
    future_prep: {
      en: "Clear your inbox, your desk, and your commitments — rapid movement is coming and clutter will slow you down.",
      vi: "Dọn dẹp hộp thư, bàn làm việc, và cam kết — sự di chuyển nhanh đang đến và sự lộn xộn sẽ làm bạn chậm lại."
    }
  },
  30: { // Nine of Wands
    past_lesson: {
      en: "Recall the time you almost gave up but one final push led to the breakthrough — your persistence was the deciding factor.",
      vi: "Nhớ lại lần bạn gần bỏ cuộc nhưng một cú đẩy cuối cùng dẫn đến đột phá — sự kiên trì là yếu tố quyết định."
    },
    present_action: {
      en: "Rest briefly but do not quit — protect your energy, tend your wounds, then make that final effort.",
      vi: "Nghỉ ngơi ngắn nhưng đừng bỏ cuộc — bảo vệ năng lượng, chăm sóc vết thương, rồi nỗ lực lần cuối."
    },
    future_prep: {
      en: "Build recovery time into your schedule — the finish line is close but you will cross it stronger if you pace yourself.",
      vi: "Đưa thời gian phục hồi vào lịch — đích đến gần nhưng bạn sẽ vượt qua mạnh mẽ hơn nếu điều phối nhịp."
    }
  },
  31: { // Ten of Wands
    past_lesson: {
      en: "Reflect on when you carried too much and something important suffered — overextension was not heroism, it was a warning.",
      vi: "Suy ngẫm khi bạn gánh quá nhiều và điều quan trọng bị ảnh hưởng — quá tải không phải anh hùng, mà là cảnh báo."
    },
    present_action: {
      en: "Identify the three commitments that drain you most and delegate, renegotiate, or drop one of them today.",
      vi: "Nhận diện ba cam kết hao mòn nhất và ủy thác, thương lượng lại, hoặc bỏ một trong số đó hôm nay."
    },
    future_prep: {
      en: "Create a 'stop doing' list alongside your to-do list — future capacity requires letting go, not just adding on.",
      vi: "Tạo danh sách 'ngừng làm' bên cạnh danh sách việc cần làm — năng lực tương lai cần buông bỏ, không chỉ thêm vào."
    }
  },
  32: { // Page of Wands
    past_lesson: {
      en: "Recall a curiosity you followed that led somewhere unexpected and valuable — playful exploration often yields the best discoveries.",
      vi: "Nhớ lại sự tò mò bạn theo đuổi dẫn đến nơi bất ngờ và giá trị — khám phá vui vẻ thường mang lại phát hiện tốt nhất."
    },
    present_action: {
      en: "Say yes to the thing that excites you, even if it seems impractical — not everything needs to become a career plan.",
      vi: "Nói có với điều khiến bạn hào hứng, dù có vẻ không thực tế — không phải mọi thứ đều cần thành kế hoạch nghề nghiệp."
    },
    future_prep: {
      en: "Keep your beginner's mind open — the next exciting message or invitation deserves an enthusiastic response.",
      vi: "Giữ tâm thái người mới mở — tin nhắn hoặc lời mời hào hứng tiếp theo xứng đáng một phản hồi nhiệt tình."
    }
  },
  33: { // Knight of Wands
    past_lesson: {
      en: "Remember when passionate, bold action got you results that careful planning never would — your fire was the catalyst.",
      vi: "Nhớ khi hành động đam mê, táo bạo mang lại kết quả kế hoạch cẩn thận không bao giờ có — lửa của bạn là chất xúc tác."
    },
    present_action: {
      en: "Channel your intense energy into one specific target — commit fully but pause for 30 seconds to confirm you are running toward something, not away.",
      vi: "Chuyển hướng năng lượng mãnh liệt vào một mục tiêu cụ thể — cam kết hoàn toàn nhưng dừng 30 giây xác nhận bạn đang chạy đến điều gì đó, không phải chạy trốn."
    },
    future_prep: {
      en: "Prepare a landing plan for after the charge — bold action needs a follow-through strategy to become lasting change.",
      vi: "Chuẩn bị kế hoạch hạ cánh sau cú xông pha — hành động táo bạo cần chiến lược duy trì để trở thành thay đổi lâu dài."
    }
  },
  34: { // Queen of Wands
    past_lesson: {
      en: "Recall when your warm confidence inspired others to follow your lead — that natural charisma is a proven strength.",
      vi: "Nhớ khi sự tự tin ấm áp truyền cảm hứng cho người khác đi theo — sức hút tự nhiên đó là sức mạnh đã chứng minh."
    },
    present_action: {
      en: "Own your presence today without apologizing — set the tone for the project, team, or situation that needs your bold heart.",
      vi: "Sở hữu sự hiện diện của bạn hôm nay mà không xin lỗi — đặt tông cho dự án, đội, hoặc tình huống cần trái tim dũng cảm."
    },
    future_prep: {
      en: "Identify who needs your mentorship or encouragement — your next role is to ignite confidence in others.",
      vi: "Nhận diện ai cần sự cố vấn hoặc khuyến khích từ bạn — vai trò tiếp theo là thắp sáng sự tự tin cho người khác."
    }
  },
  35: { // King of Wands
    past_lesson: {
      en: "Reflect on a time when your strategic vision and decisive leadership created something lasting — that mastery is your foundation.",
      vi: "Suy ngẫm về lần tầm nhìn chiến lược và lãnh đạo quyết đoán đã tạo ra điều lâu bền — sự thành thạo đó là nền tảng."
    },
    present_action: {
      en: "Make the decision you have been deliberating on, communicate it clearly, and trust your track record — others are waiting for you to lead.",
      vi: "Đưa ra quyết định bạn đang cân nhắc, truyền đạt rõ ràng, và tin vào thành tích — người khác đang chờ bạn dẫn dắt."
    },
    future_prep: {
      en: "Develop the next generation of leaders around you — your legacy is not just what you build, but who you empower.",
      vi: "Phát triển thế hệ lãnh đạo tiếp theo xung quanh bạn — di sản không chỉ là điều bạn xây, mà là người bạn trao quyền."
    }
  },

  // ── CUPS (Water · Emotion · Relationships) ────────────────────────────────
  36: { // Ace of Cups
    past_lesson: {
      en: "Remember when you opened your heart despite past hurt and received something beautiful — vulnerability was the doorway.",
      vi: "Nhớ khi bạn mở lòng dù đã bị tổn thương và nhận được điều đẹp đẽ — sự dễ tổn thương là cánh cửa."
    },
    present_action: {
      en: "Accept the emotional gift being offered — new love, deeper compassion, or creative inspiration — without guarding against it.",
      vi: "Đón nhận món quà cảm xúc đang được trao — tình yêu mới, lòng trắc ẩn sâu hơn, hoặc cảm hứng sáng tạo — mà không phòng thủ."
    },
    future_prep: {
      en: "Create emotional space for what is coming — release old resentments or grief to make room for fresh connection.",
      vi: "Tạo không gian cảm xúc cho điều đang đến — giải phóng oán hận hoặc đau buồn cũ để dành chỗ cho kết nối mới."
    }
  },
  37: { // Two of Cups
    past_lesson: {
      en: "Reflect on a partnership built on genuine mutual respect — that foundation of seeing and being seen was what made it last.",
      vi: "Suy ngẫm về mối quan hệ xây trên sự tôn trọng lẫn nhau thực sự — nền tảng nhìn thấy và được nhìn thấy là điều giúp nó bền."
    },
    present_action: {
      en: "Invest in the connection forming now with honesty and presence — show up fully for the person who mirrors your values.",
      vi: "Đầu tư vào kết nối đang hình thành bằng sự trung thực và hiện diện — xuất hiện trọn vẹn cho người phản chiếu giá trị bạn."
    },
    future_prep: {
      en: "Nurture this relationship before life gets busy — regular, meaningful time together prevents drifting apart.",
      vi: "Nuôi dưỡng mối quan hệ trước khi cuộc sống bận rộn — thời gian đều đặn, có ý nghĩa cùng nhau ngăn xa cách."
    }
  },
  38: { // Three of Cups
    past_lesson: {
      en: "Recall a gathering or celebration that reminded you of the power of community — joy shared was joy multiplied.",
      vi: "Nhớ lại buổi tụ họp nhắc bạn về sức mạnh cộng đồng — niềm vui được chia sẻ là niềm vui nhân lên."
    },
    present_action: {
      en: "Reach out to a friend you have not spoken to recently — celebrate something together this week, however small.",
      vi: "Liên lạc với bạn bè lâu không nói chuyện — ăn mừng điều gì đó cùng nhau tuần này, dù nhỏ."
    },
    future_prep: {
      en: "Strengthen your social circle before you need it — the support network you build now will catch you later.",
      vi: "Củng cố vòng tròn xã hội trước khi cần — mạng lưới hỗ trợ bạn xây giờ sẽ đỡ bạn sau."
    }
  },
  39: { // Four of Cups
    past_lesson: {
      en: "Recognize a time when boredom or apathy caused you to miss an opportunity that was right in front of you.",
      vi: "Nhận ra lần sự nhàm chán hoặc thờ ơ khiến bạn bỏ lỡ cơ hội ngay trước mặt."
    },
    present_action: {
      en: "Look at what is being offered to you right now with fresh eyes — the answer to your dissatisfaction may already be present.",
      vi: "Nhìn điều đang được trao cho bạn ngay bây giờ bằng đôi mắt mới — câu trả lời cho sự bất mãn có thể đã hiện diện."
    },
    future_prep: {
      en: "Practice gratitude for what you have before seeking what you lack — contentment is a skill, not just a circumstance.",
      vi: "Thực hành biết ơn điều bạn có trước khi tìm điều thiếu — sự mãn nguyện là kỹ năng, không chỉ là hoàn cảnh."
    }
  },
  40: { // Five of Cups
    past_lesson: {
      en: "Acknowledge the grief that taught you what truly matters — loss clarified your priorities in a way success never could.",
      vi: "Thừa nhận nỗi đau đã dạy bạn điều thực sự quan trọng — mất mát làm rõ ưu tiên theo cách thành công không bao giờ có."
    },
    present_action: {
      en: "Grieve what needs grieving, then turn around — the two cups still standing behind you hold real hope.",
      vi: "Đau buồn điều cần đau buồn, rồi quay lại — hai cốc vẫn đứng phía sau chứa hy vọng thật."
    },
    future_prep: {
      en: "Build emotional resilience by naming what you are grateful for alongside what you have lost — both truths can coexist.",
      vi: "Xây dựng sức bền cảm xúc bằng cách gọi tên điều biết ơn bên cạnh điều đã mất — cả hai sự thật có thể cùng tồn tại."
    }
  },
  41: { // Six of Cups
    past_lesson: {
      en: "Revisit a happy memory and notice what made it special — innocence, generosity, or simplicity — and ask how to bring that quality back.",
      vi: "Thăm lại ký ức hạnh phúc và nhận ra điều gì khiến nó đặc biệt — sự ngây thơ, rộng lượng, hoặc giản dị — và hỏi cách mang phẩm chất đó trở lại."
    },
    present_action: {
      en: "Reconnect with someone from your past or do something that brings back childlike joy — nostalgia can be a compass.",
      vi: "Kết nối lại với ai đó từ quá khứ hoặc làm điều mang lại niềm vui trẻ thơ — hoài niệm có thể là la bàn."
    },
    future_prep: {
      en: "Let the warmth of the past inspire rather than trap you — carry the lessons forward without trying to recreate what was.",
      vi: "Để sự ấm áp của quá khứ truyền cảm hứng thay vì mắc kẹt — mang bài học tiến lên mà không cố tái tạo điều đã qua."
    }
  },
  42: { // Seven of Cups
    past_lesson: {
      en: "Remember when too many options led to paralysis or poor choices — clarity came only when you eliminated possibilities.",
      vi: "Nhớ khi quá nhiều lựa chọn dẫn đến tê liệt hoặc chọn sai — sự rõ ràng chỉ đến khi bạn loại bỏ khả năng."
    },
    present_action: {
      en: "Pick the one option that is real and achievable and commit to it — stop daydreaming about all seven cups.",
      vi: "Chọn một lựa chọn thực và khả thi và cam kết — ngừng mơ mộng về cả bảy cốc."
    },
    future_prep: {
      en: "Develop a decision-making framework: what are your three non-negotiable criteria? Apply them before the next fork appears.",
      vi: "Phát triển khung ra quyết định: ba tiêu chí không thương lượng là gì? Áp dụng trước khi ngã rẽ tiếp theo xuất hiện."
    }
  },
  43: { // Eight of Cups
    past_lesson: {
      en: "Honour the time you walked away from something that looked good on the outside but was empty inside — that departure was brave.",
      vi: "Tôn trọng lần bạn rời bỏ điều bên ngoài đẹp nhưng bên trong trống rỗng — sự ra đi đó dũng cảm."
    },
    present_action: {
      en: "Name what no longer fulfills you and begin the process of walking away — emotional honesty is the first step.",
      vi: "Gọi tên điều không còn thỏa mãn và bắt đầu quá trình rời đi — sự trung thực cảm xúc là bước đầu tiên."
    },
    future_prep: {
      en: "Prepare emotionally for a necessary departure — the path ahead is uncertain but more authentic than staying.",
      vi: "Chuẩn bị cảm xúc cho sự ra đi cần thiết — con đường phía trước không chắc chắn nhưng chân thực hơn ở lại."
    }
  },
  44: { // Nine of Cups
    past_lesson: {
      en: "Recall a wish that came true and the satisfaction it brought — you do have the ability to manifest what you truly want.",
      vi: "Nhớ lại điều ước đã thành hiện thực và sự thỏa mãn — bạn có khả năng hiện thực hóa điều thực sự muốn."
    },
    present_action: {
      en: "Enjoy this moment of fulfillment without guilt or rushing to the next goal — savouring is an underrated skill.",
      vi: "Tận hưởng khoảnh khắc viên mãn mà không tội lỗi hay vội vã đến mục tiêu tiếp — biết thưởng thức là kỹ năng bị đánh giá thấp."
    },
    future_prep: {
      en: "Clarify your next wish before the universe asks — write down what fulfillment looks like in the next chapter.",
      vi: "Làm rõ điều ước tiếp trước khi vũ trụ hỏi — viết ra sự viên mãn trông như thế nào trong chương tiếp theo."
    }
  },
  45: { // Ten of Cups
    past_lesson: {
      en: "Remember a moment of deep emotional fulfillment with loved ones — that feeling is what truly matters at the end.",
      vi: "Nhớ khoảnh khắc viên mãn cảm xúc sâu sắc với người thân yêu — cảm giác đó mới thực sự quan trọng cuối cùng."
    },
    present_action: {
      en: "Express genuine appreciation to the people who make your life rich — tell them specifically what they mean to you.",
      vi: "Bày tỏ sự trân trọng chân thành với người làm cuộc sống bạn phong phú — nói cụ thể họ có ý nghĩa gì với bạn."
    },
    future_prep: {
      en: "Invest in relationships and emotional foundations — the harmony you build now becomes your lasting legacy.",
      vi: "Đầu tư vào mối quan hệ và nền tảng cảm xúc — sự hài hòa bạn xây bây giờ trở thành di sản lâu dài."
    }
  },
  46: { // Page of Cups
    past_lesson: {
      en: "Recall an unexpected emotional message or creative impulse that changed your direction — the heart speaks in surprises.",
      vi: "Nhớ lại tin nhắn cảm xúc bất ngờ hoặc xung lực sáng tạo đã thay đổi hướng đi — trái tim nói bằng bất ngờ."
    },
    present_action: {
      en: "Follow the creative or emotional impulse you feel right now without overanalyzing — express before you judge.",
      vi: "Theo đuổi xung lực sáng tạo hoặc cảm xúc bạn cảm nhận ngay bây giờ mà không phân tích quá — bày tỏ trước khi phán xét."
    },
    future_prep: {
      en: "Keep a creative outlet ready — writing, drawing, music — the next emotional insight will need a place to land.",
      vi: "Giữ sẵn kênh sáng tạo — viết, vẽ, âm nhạc — sự thấu hiểu cảm xúc tiếp theo sẽ cần nơi để hạ cánh."
    }
  },
  47: { // Knight of Cups
    past_lesson: {
      en: "Remember when following your heart led to a meaningful experience, even if it did not last — the romantic pursuit was worthwhile.",
      vi: "Nhớ khi theo trái tim dẫn đến trải nghiệm có ý nghĩa, dù không kéo dài — cuộc theo đuổi lãng mạn đáng giá."
    },
    present_action: {
      en: "Express what you feel honestly to the person who matters — idealism without action remains fantasy.",
      vi: "Bày tỏ cảm xúc thành thật với người quan trọng — lý tưởng không hành động vẫn là ảo tưởng."
    },
    future_prep: {
      en: "Balance your romantic vision with grounded plans — the heart leads, but the hands must build.",
      vi: "Cân bằng tầm nhìn lãng mạn với kế hoạch thực tế — trái tim dẫn lối, nhưng đôi tay phải xây dựng."
    }
  },
  48: { // Queen of Cups
    past_lesson: {
      en: "Reflect on a time your emotional intelligence navigated a situation that logic alone could not solve — empathy was the key.",
      vi: "Suy ngẫm lần trí tuệ cảm xúc dẫn dắt tình huống logic không thể giải quyết — sự đồng cảm là chìa khóa."
    },
    present_action: {
      en: "Listen deeply to someone today without offering solutions — sometimes presence is more healing than advice.",
      vi: "Lắng nghe sâu ai đó hôm nay mà không đưa giải pháp — đôi khi sự hiện diện chữa lành hơn lời khuyên."
    },
    future_prep: {
      en: "Protect your emotional boundaries — your gift of empathy is powerful but unsustainable without self-care.",
      vi: "Bảo vệ ranh giới cảm xúc — món quà đồng cảm mạnh mẽ nhưng không bền vững nếu không chăm sóc bản thân."
    }
  },
  49: { // King of Cups
    past_lesson: {
      en: "Recall when emotional mastery allowed you to stay calm in a storm — that composure influenced everyone around you.",
      vi: "Nhớ khi sự làm chủ cảm xúc cho phép bạn bình tĩnh trong bão — sự điềm tĩnh đó ảnh hưởng mọi người xung quanh."
    },
    present_action: {
      en: "Lead with emotional wisdom today — hold space for others' feelings while maintaining your own stability.",
      vi: "Dẫn dắt bằng trí tuệ cảm xúc hôm nay — giữ không gian cho cảm xúc người khác trong khi duy trì sự ổn định."
    },
    future_prep: {
      en: "Deepen your emotional intelligence practice — the next leadership challenge will require compassion as much as competence.",
      vi: "Đào sâu thực hành trí tuệ cảm xúc — thử thách lãnh đạo tiếp theo cần lòng trắc ẩn nhiều như năng lực."
    }
  },

  // ── SWORDS (Air · Thought · Truth) ────────────────────────────────────────
  50: { // Ace of Swords
    past_lesson: {
      en: "Remember when a flash of clarity cut through confusion and showed you the truth — that decisive insight changed everything.",
      vi: "Nhớ khi tia sáng rõ ràng cắt qua sự mơ hồ và cho thấy sự thật — sự thấu hiểu quyết định đó đã thay đổi mọi thứ."
    },
    present_action: {
      en: "State the truth you have been avoiding — write it down in one clear sentence and face it directly.",
      vi: "Nói ra sự thật bạn đang né tránh — viết trong một câu rõ ràng và đối mặt trực tiếp."
    },
    future_prep: {
      en: "Sharpen your critical thinking — the breakthrough idea coming will need precise expression to be effective.",
      vi: "Mài sắc tư duy phản biện — ý tưởng đột phá đang đến sẽ cần diễn đạt chính xác để hiệu quả."
    }
  },
  51: { // Two of Swords
    past_lesson: {
      en: "Recall when avoiding a decision caused more suffering than choosing wrong would have — indecision has its own cost.",
      vi: "Nhớ khi né tránh quyết định gây đau khổ hơn chọn sai — sự thiếu quyết đoán cũng có cái giá."
    },
    present_action: {
      en: "Remove the blindfold — gather the information you are avoiding, then make the decision before the end of this week.",
      vi: "Bỏ bịt mắt — thu thập thông tin bạn đang né, rồi đưa ra quyết định trước cuối tuần."
    },
    future_prep: {
      en: "Develop a default decision-making deadline — when you catch yourself stuck, give yourself 72 hours maximum.",
      vi: "Phát triển hạn chót ra quyết định mặc định — khi bị mắc kẹt, cho bản thân tối đa 72 giờ."
    }
  },
  52: { // Three of Swords
    past_lesson: {
      en: "Acknowledge the heartbreak that taught you about your own depth of feeling — the pain proved how much you can care.",
      vi: "Thừa nhận nỗi đau lòng dạy bạn về chiều sâu cảm xúc — nỗi đau chứng minh bạn có thể quan tâm nhiều đến mức nào."
    },
    present_action: {
      en: "Allow yourself to feel the pain fully rather than numbing it — healing starts with honest grief, not distraction.",
      vi: "Cho phép bản thân cảm nhận nỗi đau trọn vẹn thay vì tê liệt — chữa lành bắt đầu bằng đau buồn thành thật, không phải xao nhãng."
    },
    future_prep: {
      en: "Prepare for emotional honesty in an upcoming conversation — the truth may sting but the wound heals cleaner.",
      vi: "Chuẩn bị cho sự trung thực cảm xúc trong cuộc trò chuyện sắp tới — sự thật có thể đau nhưng vết thương lành sạch hơn."
    }
  },
  53: { // Four of Swords
    past_lesson: {
      en: "Remember when forced rest turned out to be exactly what you needed — recovery was not laziness, it was strategy.",
      vi: "Nhớ khi nghỉ ngơi bắt buộc hóa ra chính xác là điều bạn cần — phục hồi không phải lười, mà là chiến lược."
    },
    present_action: {
      en: "Take a genuine rest day — cancel non-essential plans and let your mind and body recover before the next battle.",
      vi: "Nghỉ ngơi thực sự — hủy kế hoạch không thiết yếu và để tâm trí và cơ thể phục hồi trước trận chiến tiếp theo."
    },
    future_prep: {
      en: "Schedule regular recovery periods into your calendar — peak performance requires planned downtime.",
      vi: "Lên lịch phục hồi đều đặn — hiệu suất đỉnh cao cần thời gian nghỉ có kế hoạch."
    }
  },
  54: { // Five of Swords
    past_lesson: {
      en: "Recall a conflict where winning came at too high a price — that hollow victory taught you about choosing battles wisely.",
      vi: "Nhớ lại xung đột thắng với giá quá cao — chiến thắng rỗng đó dạy bạn chọn trận chiến khôn ngoan."
    },
    present_action: {
      en: "Ask yourself if winning this particular fight is worth what it will cost — if not, walk away with dignity intact.",
      vi: "Tự hỏi thắng trận chiến cụ thể này có đáng cái giá phải trả không — nếu không, rời đi với phẩm giá nguyên vẹn."
    },
    future_prep: {
      en: "Learn the difference between battles worth fighting and ego-driven conflicts — saving your energy for what matters.",
      vi: "Học phân biệt giữa trận chiến đáng đấu và xung đột do cái tôi — tiết kiệm năng lượng cho điều quan trọng."
    }
  },
  55: { // Six of Swords
    past_lesson: {
      en: "Honour the transition you made from a difficult situation to calmer waters — leaving was harder than arriving but necessary.",
      vi: "Tôn trọng sự chuyển đổi từ tình huống khó khăn sang vùng nước yên tĩnh hơn — rời đi khó hơn đến nhưng cần thiết."
    },
    present_action: {
      en: "Begin the practical steps of moving on — book the ticket, file the paperwork, start the search — movement heals.",
      vi: "Bắt đầu các bước thực tế để tiến lên — đặt vé, nộp giấy tờ, bắt đầu tìm kiếm — sự di chuyển chữa lành."
    },
    future_prep: {
      en: "Prepare mentally for the transition period — it will feel uncomfortable before it feels better, and that is normal.",
      vi: "Chuẩn bị tinh thần cho giai đoạn chuyển tiếp — sẽ khó chịu trước khi tốt hơn, và đó là bình thường."
    }
  },
  56: { // Seven of Swords
    past_lesson: {
      en: "Reflect on a time when a shortcut or half-truth created problems worse than the original difficulty.",
      vi: "Suy ngẫm lần đi tắt hoặc nửa sự thật tạo ra vấn đề tệ hơn khó khăn ban đầu."
    },
    present_action: {
      en: "Check if you are being fully honest in your current situation — with yourself and others — and correct course if not.",
      vi: "Kiểm tra bạn có hoàn toàn trung thực trong tình huống hiện tại không — với bản thân và người khác — và điều chỉnh nếu không."
    },
    future_prep: {
      en: "Build your reputation on transparency — the trust you establish now will be your strongest asset in challenges ahead.",
      vi: "Xây dựng danh tiếng trên sự minh bạch — niềm tin bạn thiết lập bây giờ sẽ là tài sản mạnh nhất trong thử thách phía trước."
    }
  },
  57: { // Eight of Swords
    past_lesson: {
      en: "Remember when you felt trapped but the prison was largely mental — the moment you changed your thinking, options appeared.",
      vi: "Nhớ khi cảm thấy bị mắc kẹt nhưng nhà tù phần lớn là tinh thần — khoảnh khắc thay đổi suy nghĩ, lựa chọn xuất hiện."
    },
    present_action: {
      en: "Challenge the belief that you have no options — list five possible actions, even unlikely ones, to break the illusion of helplessness.",
      vi: "Thách thức niềm tin rằng bạn không có lựa chọn — liệt kê năm hành động có thể, kể cả khó xảy ra, để phá ảo giác bất lực."
    },
    future_prep: {
      en: "Build mental resilience by questioning limiting beliefs regularly — freedom starts with recognizing the cage is not locked.",
      vi: "Xây dựng sức bền tinh thần bằng cách thường xuyên đặt câu hỏi cho niềm tin giới hạn — tự do bắt đầu khi nhận ra lồng không khóa."
    }
  },
  58: { // Nine of Swords
    past_lesson: {
      en: "Recall a night of anxiety where the fears proved far worse than reality — your mind was the enemy, not the situation.",
      vi: "Nhớ đêm lo lắng khi nỗi sợ tệ hơn thực tế nhiều — tâm trí là kẻ thù, không phải tình huống."
    },
    present_action: {
      en: "Write down every worry keeping you awake — seeing them on paper shrinks their power and reveals which are real.",
      vi: "Viết ra mọi lo lắng khiến bạn mất ngủ — nhìn chúng trên giấy thu nhỏ sức mạnh và lộ ra cái nào thật."
    },
    future_prep: {
      en: "Establish a pre-sleep routine that calms your mind — journaling, breathing, or talking to someone before the anxiety spiral starts.",
      vi: "Thiết lập thói quen trước ngủ làm dịu tâm trí — viết nhật ký, hít thở, hoặc nói chuyện trước khi vòng xoáy lo lắng bắt đầu."
    }
  },
  59: { // Ten of Swords
    past_lesson: {
      en: "Acknowledge the ending that felt like total defeat — the dawn that followed proved that rock bottom was the foundation for rebuilding.",
      vi: "Thừa nhận kết thúc cảm giác như thất bại hoàn toàn — bình minh theo sau chứng minh đáy là nền tảng để xây lại."
    },
    present_action: {
      en: "Accept that this chapter is over and stop trying to resuscitate it — the pain lessens the moment you stop resisting the ending.",
      vi: "Chấp nhận chương này đã kết thúc và ngừng cố hồi sinh — nỗi đau giảm ngay khi ngừng kháng cự sự kết thúc."
    },
    future_prep: {
      en: "Rest and recover before planning the next move — the worst is behind you, and the new beginning needs you at strength.",
      vi: "Nghỉ ngơi và phục hồi trước khi lên kế hoạch bước tiếp — điều tệ nhất đã qua, và khởi đầu mới cần bạn khỏe mạnh."
    }
  },
  60: { // Page of Swords
    past_lesson: {
      en: "Remember when your curiosity uncovered a truth others had missed — that sharp observation was a gift.",
      vi: "Nhớ khi sự tò mò phát hiện sự thật người khác bỏ lỡ — khả năng quan sát sắc bén đó là món quà."
    },
    present_action: {
      en: "Investigate the situation thoroughly before speaking — gather facts, ask probing questions, and verify before you act.",
      vi: "Điều tra tình huống kỹ lưỡng trước khi nói — thu thập sự kiện, đặt câu hỏi sâu, và xác minh trước khi hành động."
    },
    future_prep: {
      en: "Develop your research and communication skills — the next challenge will reward those who did their homework.",
      vi: "Phát triển kỹ năng nghiên cứu và giao tiếp — thử thách tiếp theo sẽ thưởng cho người đã làm bài tập."
    }
  },
  61: { // Knight of Swords
    past_lesson: {
      en: "Recall when swift, decisive action cut through bureaucracy and delay — that directness solved what diplomacy could not.",
      vi: "Nhớ khi hành động nhanh, quyết đoán cắt qua quan liêu và trì hoãn — sự trực tiếp giải quyết điều ngoại giao không thể."
    },
    present_action: {
      en: "Charge at the problem directly — but aim precisely before you strike, because speed without accuracy causes collateral damage.",
      vi: "Xông vào vấn đề trực tiếp — nhưng nhắm chính xác trước khi ra tay, vì tốc độ không có độ chính xác gây thiệt hại phụ."
    },
    future_prep: {
      en: "Prepare your argument or plan with airtight logic — the coming battle will be won by the sharpest mind, not the loudest voice.",
      vi: "Chuẩn bị lập luận hoặc kế hoạch với logic chặt chẽ — trận chiến sắp tới sẽ thắng bởi tâm trí sắc bén nhất, không phải giọng to nhất."
    }
  },
  62: { // Queen of Swords
    past_lesson: {
      en: "Reflect on a time when clear, honest communication — even when it hurt — earned you lasting respect.",
      vi: "Suy ngẫm lần giao tiếp rõ ràng, trung thực — dù đau — mang lại sự tôn trọng lâu dài."
    },
    present_action: {
      en: "Communicate your boundary or truth clearly today — kindly but firmly, without softening the message into meaninglessness.",
      vi: "Truyền đạt ranh giới hoặc sự thật rõ ràng hôm nay — tử tế nhưng kiên quyết, không làm nhẹ thông điệp đến vô nghĩa."
    },
    future_prep: {
      en: "Cultivate the ability to separate emotion from analysis — clear-headed discernment will be your greatest tool ahead.",
      vi: "Nuôi dưỡng khả năng tách cảm xúc khỏi phân tích — sự phân biện tỉnh táo sẽ là công cụ lớn nhất phía trước."
    }
  },
  63: { // King of Swords
    past_lesson: {
      en: "Recall when your fair, principled leadership resolved a dispute that emotion alone could not — intellectual authority matters.",
      vi: "Nhớ khi lãnh đạo công bằng, có nguyên tắc giải quyết tranh chấp mà cảm xúc không thể — uy quyền trí tuệ quan trọng."
    },
    present_action: {
      en: "Make the decision based on principles and evidence, not feelings — communicate your reasoning transparently to all involved.",
      vi: "Đưa quyết định dựa trên nguyên tắc và bằng chứng, không phải cảm xúc — truyền đạt lý luận minh bạch cho tất cả liên quan."
    },
    future_prep: {
      en: "Establish clear ethical guidelines for the decisions ahead — integrity tested under pressure is the only kind that counts.",
      vi: "Thiết lập hướng dẫn đạo đức rõ ràng cho quyết định phía trước — sự chính trực bị thử thách dưới áp lực mới là loại có giá trị."
    }
  },

  // ── PENTACLES (Earth · Material · Practical) ──────────────────────────────
  64: { // Ace of Pentacles
    past_lesson: {
      en: "Remember the opportunity you seized that grew into something materially stable — that first investment of effort was the seed.",
      vi: "Nhớ cơ hội bạn nắm bắt đã phát triển thành điều ổn định vật chất — khoản đầu tư nỗ lực đầu tiên là hạt giống."
    },
    present_action: {
      en: "Take the practical first step on the financial or career opportunity in front of you — send the application, make the call, start the savings plan.",
      vi: "Thực hiện bước thực tế đầu tiên với cơ hội tài chính hoặc sự nghiệp trước mặt — gửi đơn, gọi điện, bắt đầu kế hoạch tiết kiệm."
    },
    future_prep: {
      en: "Prepare the soil for prosperity — organize finances, update your resume, and clear practical obstacles before the opportunity peaks.",
      vi: "Chuẩn bị đất cho sự thịnh vượng — sắp xếp tài chính, cập nhật CV, và dọn dẹp trở ngại thực tế trước khi cơ hội đạt đỉnh."
    }
  },
  65: { // Two of Pentacles
    past_lesson: {
      en: "Recall when juggling multiple responsibilities taught you about prioritization — balance was a skill you built through practice.",
      vi: "Nhớ khi tung hứng nhiều trách nhiệm dạy bạn về ưu tiên — sự cân bằng là kỹ năng xây qua thực hành."
    },
    present_action: {
      en: "Audit your current commitments and adjust the balance — something needs more attention and something needs less.",
      vi: "Kiểm tra cam kết hiện tại và điều chỉnh cân bằng — điều gì đó cần nhiều chú ý hơn và điều gì đó cần ít hơn."
    },
    future_prep: {
      en: "Build a flexible system for managing competing demands — the juggling will intensify, so master the rhythm now.",
      vi: "Xây hệ thống linh hoạt quản lý nhu cầu cạnh tranh — việc tung hứng sẽ tăng, nên làm chủ nhịp ngay."
    }
  },
  66: { // Three of Pentacles
    past_lesson: {
      en: "Reflect on a collaboration where combining different skills created something none of you could have built alone.",
      vi: "Suy ngẫm về sự hợp tác khi kết hợp kỹ năng khác nhau tạo ra điều không ai có thể xây một mình."
    },
    present_action: {
      en: "Seek feedback from someone with a different expertise than yours — your work improves when reviewed by complementary eyes.",
      vi: "Tìm phản hồi từ người có chuyên môn khác — công việc cải thiện khi được đánh giá bởi góc nhìn bổ sung."
    },
    future_prep: {
      en: "Identify the collaborators you will need for your next project and begin building those relationships now.",
      vi: "Nhận diện cộng sự bạn sẽ cần cho dự án tiếp theo và bắt đầu xây dựng mối quan hệ đó ngay."
    }
  },
  67: { // Four of Pentacles
    past_lesson: {
      en: "Recall when holding too tightly to money, control, or security actually prevented growth — sometimes you must spend to earn.",
      vi: "Nhớ khi nắm quá chặt tiền, quyền kiểm soát, hoặc an toàn thực sự ngăn cản tăng trưởng — đôi khi phải chi để kiếm."
    },
    present_action: {
      en: "Identify what you are gripping too tightly — money, a position, a routine — and loosen your hold by one deliberate degree.",
      vi: "Nhận diện điều bạn đang nắm quá chặt — tiền, vị trí, thói quen — và nới lỏng một mức có chủ đích."
    },
    future_prep: {
      en: "Build genuine financial security through smart systems, not through anxiety-driven hoarding — plan beats panic.",
      vi: "Xây an ninh tài chính thực sự qua hệ thống thông minh, không qua tích trữ do lo lắng — kế hoạch thắng hoảng loạn."
    }
  },
  68: { // Five of Pentacles
    past_lesson: {
      en: "Remember a period of hardship that revealed who truly cared — the help you needed was closer than you thought.",
      vi: "Nhớ giai đoạn khó khăn tiết lộ ai thực sự quan tâm — sự giúp đỡ bạn cần gần hơn bạn nghĩ."
    },
    present_action: {
      en: "Ask for help — the door is open but you must walk through it; pride is not worth the suffering of doing this alone.",
      vi: "Xin giúp đỡ — cánh cửa mở nhưng bạn phải bước qua; sự kiêu hãnh không đáng nỗi đau của việc làm một mình."
    },
    future_prep: {
      en: "Build an emergency fund and a support network before the next lean period — preparation transforms crisis into inconvenience.",
      vi: "Xây quỹ khẩn cấp và mạng lưới hỗ trợ trước giai đoạn khó khăn tiếp — sự chuẩn bị biến khủng hoảng thành bất tiện."
    }
  },
  69: { // Six of Pentacles
    past_lesson: {
      en: "Reflect on a time when giving or receiving generosity changed the balance of a relationship for the better.",
      vi: "Suy ngẫm lần cho hoặc nhận sự hào phóng thay đổi cán cân mối quan hệ theo hướng tốt hơn."
    },
    present_action: {
      en: "Give where you can and receive where you must — check that the flow of generosity in your life moves in both directions.",
      vi: "Cho nơi có thể và nhận nơi cần — kiểm tra dòng chảy hào phóng trong đời di chuyển cả hai chiều."
    },
    future_prep: {
      en: "Plan a regular practice of giving — time, money, or knowledge — generosity compounds into unexpected returns.",
      vi: "Lên kế hoạch thực hành cho đi đều đặn — thời gian, tiền, hoặc kiến thức — sự hào phóng tích lũy thành lợi ích bất ngờ."
    }
  },
  70: { // Seven of Pentacles
    past_lesson: {
      en: "Remember the long investment that eventually paid off — the waiting was part of the work, not a pause in it.",
      vi: "Nhớ khoản đầu tư dài cuối cùng sinh lời — sự chờ đợi là phần của công việc, không phải gián đoạn."
    },
    present_action: {
      en: "Assess what is growing and what is not — redirect effort from what is stagnant to what is showing real progress.",
      vi: "Đánh giá điều đang phát triển và điều không — chuyển hướng nỗ lực từ điều trì trệ sang điều cho thấy tiến bộ thực."
    },
    future_prep: {
      en: "Set a review date for your current investments — financial, career, or personal — and decide then whether to continue or pivot.",
      vi: "Đặt ngày đánh giá cho các khoản đầu tư hiện tại — tài chính, sự nghiệp, hoặc cá nhân — và quyết định tiếp tục hay chuyển hướng."
    }
  },
  71: { // Eight of Pentacles
    past_lesson: {
      en: "Recall when dedicated practice transformed you from beginner to skilled — mastery was built one repetition at a time.",
      vi: "Nhớ khi thực hành cống hiến biến bạn từ người mới thành thành thạo — sự thành thạo xây từng lần lặp lại."
    },
    present_action: {
      en: "Dedicate focused time today to improving one specific skill — deliberate practice beats passive experience every time.",
      vi: "Dành thời gian tập trung hôm nay để cải thiện một kỹ năng cụ thể — thực hành có chủ đích thắng kinh nghiệm thụ động."
    },
    future_prep: {
      en: "Identify the craft or skill that will be most valuable in your next chapter and begin apprenticing in it now.",
      vi: "Nhận diện nghề hoặc kỹ năng sẽ giá trị nhất trong chương tiếp theo và bắt đầu học việc ngay."
    }
  },
  72: { // Nine of Pentacles
    past_lesson: {
      en: "Appreciate how your discipline and patience built the comfortable life you now enjoy — that prosperity was earned, not given.",
      vi: "Trân trọng cách kỷ luật và kiên nhẫn xây cuộc sống thoải mái bạn đang tận hưởng — sự thịnh vượng là kiếm được, không phải được cho."
    },
    present_action: {
      en: "Enjoy the fruits of your labour without guilt — treat yourself to something that reflects the quality of life you have built.",
      vi: "Tận hưởng thành quả lao động mà không tội lỗi — tự thưởng điều phản ánh chất lượng cuộc sống bạn đã xây."
    },
    future_prep: {
      en: "Protect your independence and financial health — the luxury of self-sufficiency requires ongoing maintenance.",
      vi: "Bảo vệ sự độc lập và sức khỏe tài chính — sự xa xỉ của tự chủ cần bảo trì liên tục."
    }
  },
  73: { // Ten of Pentacles
    past_lesson: {
      en: "Reflect on the generational wealth, values, or traditions passed down to you — your foundation was built by many hands.",
      vi: "Suy ngẫm về tài sản, giá trị, hoặc truyền thống thế hệ truyền lại cho bạn — nền tảng được xây bởi nhiều bàn tay."
    },
    present_action: {
      en: "Invest in something that will outlast you — a family tradition, a long-term savings plan, or wisdom shared with the next generation.",
      vi: "Đầu tư vào điều sẽ tồn tại lâu hơn bạn — truyền thống gia đình, kế hoạch tiết kiệm dài hạn, hoặc trí tuệ chia sẻ cho thế hệ tiếp."
    },
    future_prep: {
      en: "Plan your legacy deliberately — what you build now will shape the foundations for those who come after you.",
      vi: "Lên kế hoạch di sản có chủ đích — điều bạn xây bây giờ sẽ định hình nền tảng cho người đến sau."
    }
  },
  74: { // Page of Pentacles
    past_lesson: {
      en: "Remember the practical opportunity you studied carefully before committing — that diligence turned a small chance into real growth.",
      vi: "Nhớ cơ hội thực tế bạn nghiên cứu kỹ trước khi cam kết — sự siêng năng biến cơ hội nhỏ thành tăng trưởng thực."
    },
    present_action: {
      en: "Start learning the practical skill or subject you have been curious about — enroll, read the first chapter, or take the first lesson.",
      vi: "Bắt đầu học kỹ năng hoặc chủ đề thực tế bạn tò mò — đăng ký, đọc chương đầu, hoặc học bài đầu tiên."
    },
    future_prep: {
      en: "Set up the habits that support long-term learning — consistency matters more than intensity when building practical skills.",
      vi: "Thiết lập thói quen hỗ trợ học tập dài hạn — sự đều đặn quan trọng hơn cường độ khi xây kỹ năng thực tế."
    }
  },
  75: { // Knight of Pentacles
    past_lesson: {
      en: "Recall when steady, reliable effort achieved what shortcuts and enthusiasm could not — consistency was your advantage.",
      vi: "Nhớ khi nỗ lực đều đặn, đáng tin cậy đạt được điều đi tắt và hào hứng không thể — sự nhất quán là lợi thế."
    },
    present_action: {
      en: "Show up and do the work today even if it feels routine — the unglamorous daily effort is building something real.",
      vi: "Xuất hiện và làm việc hôm nay dù cảm thấy thường lệ — nỗ lực hàng ngày không hào nhoáng đang xây điều thực."
    },
    future_prep: {
      en: "Create a detailed, realistic timeline for your next goal — methodical planning is your path to reliable results.",
      vi: "Tạo lịch trình chi tiết, thực tế cho mục tiêu tiếp theo — lên kế hoạch phương pháp là con đường đến kết quả đáng tin cậy."
    }
  },
  76: { // Queen of Pentacles
    past_lesson: {
      en: "Reflect on how your practical nurturing — managing the home, finances, or team — created stability everyone depended on.",
      vi: "Suy ngẫm cách sự chăm sóc thực tế — quản lý nhà, tài chính, hoặc đội — tạo sự ổn định mọi người dựa vào."
    },
    present_action: {
      en: "Take care of one practical matter you have been putting off — the bill, the appointment, the repair — it frees mental energy.",
      vi: "Giải quyết một việc thực tế bạn đang trì hoãn — hóa đơn, cuộc hẹn, sửa chữa — nó giải phóng năng lượng tinh thần."
    },
    future_prep: {
      en: "Strengthen the practical foundations of your life — home, health, finances — so you can be generous from abundance, not scarcity.",
      vi: "Củng cố nền tảng thực tế cuộc sống — nhà, sức khỏe, tài chính — để có thể hào phóng từ sự dư dả, không phải thiếu thốn."
    }
  },
  77: { // King of Pentacles
    past_lesson: {
      en: "Recall when your business sense and practical leadership turned vision into tangible, lasting wealth — that mastery is your bedrock.",
      vi: "Nhớ khi khả năng kinh doanh và lãnh đạo thực tế biến tầm nhìn thành tài sản hữu hình, lâu bền — sự thành thạo đó là nền tảng."
    },
    present_action: {
      en: "Review your financial health and make one strategic decision today — invest, save, or cut what is not producing returns.",
      vi: "Đánh giá sức khỏe tài chính và đưa một quyết định chiến lược hôm nay — đầu tư, tiết kiệm, hoặc cắt điều không sinh lời."
    },
    future_prep: {
      en: "Build wealth that serves others, not just yourself — the most enduring prosperity includes generosity and stewardship.",
      vi: "Xây tài sản phục vụ người khác, không chỉ bản thân — sự thịnh vượng bền nhất bao gồm hào phóng và quản lý."
    }
  }
};

// ─── 9. REFLECTION QUESTIONS ─────────────────────────────────────────────────
// 78 cards × 2–3 questions × bilingual — displayed below each card's reading
const REFLECTION_QUESTIONS = {
  // ── Major Arcana (0–21) ──
  0: { // The Fool
    en: [
      "What new beginning are you being called toward but hesitating to take?",
      "Where in your life could you benefit from a beginner's mindset?",
      "What fear of the unknown is holding you back right now?"
    ],
    vi: [
      "Khởi đầu mới nào đang gọi bạn nhưng bạn còn do dự?",
      "Ở đâu trong cuộc sống bạn có thể hưởng lợi từ tâm thế người mới?",
      "Nỗi sợ điều chưa biết nào đang kìm hãm bạn lúc này?"
    ]
  },
  1: { // The Magician
    en: [
      "What resources do you already have that you're not fully utilizing?",
      "How can you better align your intentions with your actions?",
      "What skill or talent are you underestimating in yourself?"
    ],
    vi: [
      "Bạn đang có những nguồn lực nào mà chưa tận dụng hết?",
      "Làm sao để ý định và hành động của bạn đồng nhất hơn?",
      "Kỹ năng hay tài năng nào bạn đang đánh giá thấp ở bản thân?"
    ]
  },
  2: { // The High Priestess
    en: [
      "What is your intuition telling you that your logic keeps dismissing?",
      "What hidden knowledge or truth are you avoiding confronting?",
      "When did you last take time for quiet inner reflection?"
    ],
    vi: [
      "Trực giác đang nói gì mà lý trí bạn cứ gạt đi?",
      "Sự thật ẩn giấu nào bạn đang tránh đối diện?",
      "Lần cuối bạn dành thời gian yên tĩnh suy ngẫm nội tâm là khi nào?"
    ]
  },
  3: { // The Empress
    en: [
      "How are you nurturing your creative projects and relationships?",
      "Where do you need to show more compassion — to others or yourself?",
      "What in your life is ready to bloom if given proper care?"
    ],
    vi: [
      "Bạn đang chăm sóc các dự án sáng tạo và mối quan hệ như thế nào?",
      "Ở đâu bạn cần thể hiện lòng trắc ẩn hơn — với người khác hay chính mình?",
      "Điều gì trong cuộc sống bạn sẵn sàng nở rộ nếu được chăm sóc đúng cách?"
    ]
  },
  4: { // The Emperor
    en: [
      "Where do you need to establish firmer boundaries or structure?",
      "Are you leading with authority or controlling out of fear?",
      "What area of your life needs more discipline and organization?"
    ],
    vi: [
      "Ở đâu bạn cần thiết lập ranh giới hoặc cấu trúc vững hơn?",
      "Bạn đang lãnh đạo bằng uy quyền hay kiểm soát vì sợ hãi?",
      "Lĩnh vực nào trong cuộc sống cần kỷ luật và tổ chức hơn?"
    ]
  },
  5: { // The Hierophant
    en: [
      "What traditions or beliefs are you following without questioning?",
      "Who is a mentor or guide you could learn from right now?",
      "Where do you need to find a balance between convention and personal truth?"
    ],
    vi: [
      "Bạn đang theo truyền thống hay niềm tin nào mà không đặt câu hỏi?",
      "Ai là người thầy hay hướng dẫn bạn có thể học hỏi lúc này?",
      "Ở đâu bạn cần cân bằng giữa quy ước và sự thật cá nhân?"
    ]
  },
  6: { // The Lovers
    en: [
      "What important choice are you facing that requires you to follow your heart?",
      "How aligned are your values with the relationships you maintain?",
      "What part of yourself are you struggling to integrate or accept?"
    ],
    vi: [
      "Lựa chọn quan trọng nào đang đòi bạn phải nghe theo trái tim?",
      "Giá trị của bạn có đồng nhất với các mối quan hệ bạn duy trì không?",
      "Phần nào của bản thân bạn đang khó chấp nhận hoặc hòa hợp?"
    ]
  },
  7: { // The Chariot
    en: [
      "What goal requires more willpower and determination from you right now?",
      "Are the different parts of your life pulling in the same direction?",
      "What obstacles can you overcome if you commit fully?"
    ],
    vi: [
      "Mục tiêu nào đang đòi hỏi ý chí và quyết tâm mạnh hơn từ bạn?",
      "Các phần khác nhau trong cuộc sống bạn có đi cùng hướng không?",
      "Trở ngại nào bạn có thể vượt qua nếu cam kết hoàn toàn?"
    ]
  },
  8: { // Strength
    en: [
      "Where do you need gentle persistence rather than brute force?",
      "What inner fear or shadow are you being asked to face with courage?",
      "How can you show strength through compassion in a current situation?"
    ],
    vi: [
      "Ở đâu bạn cần sự kiên nhẫn nhẹ nhàng thay vì sức mạnh thô bạo?",
      "Nỗi sợ hay bóng tối nội tâm nào đang đòi bạn đối diện bằng dũng cảm?",
      "Làm sao thể hiện sức mạnh qua lòng trắc ẩn trong tình huống hiện tại?"
    ]
  },
  9: { // The Hermit
    en: [
      "What truth can only be found through solitude and reflection?",
      "Are you withdrawing for wisdom or hiding from life?",
      "What inner light are you meant to share once your search is complete?"
    ],
    vi: [
      "Sự thật nào chỉ có thể tìm thấy qua cô độc và suy ngẫm?",
      "Bạn đang rút lui để tìm trí tuệ hay trốn tránh cuộc sống?",
      "Ánh sáng nội tâm nào bạn nên chia sẻ khi hành trình tìm kiếm hoàn tất?"
    ]
  },
  10: { // Wheel of Fortune
    en: [
      "What cycle in your life is completing or beginning anew?",
      "How do you respond when circumstances change beyond your control?",
      "What pattern keeps repeating that you need to finally break?"
    ],
    vi: [
      "Chu kỳ nào trong cuộc sống đang kết thúc hoặc bắt đầu lại?",
      "Bạn phản ứng thế nào khi hoàn cảnh thay đổi ngoài tầm kiểm soát?",
      "Khuôn mẫu nào cứ lặp lại mà bạn cần phá vỡ?"
    ]
  },
  11: { // Justice
    en: [
      "Where in your life do you need to make a fair and honest assessment?",
      "What consequences are you currently facing from past decisions?",
      "Is there a situation where you need to stand up for what is right?"
    ],
    vi: [
      "Ở đâu trong cuộc sống bạn cần đánh giá công bằng và trung thực?",
      "Bạn đang đối mặt hậu quả nào từ các quyết định trong quá khứ?",
      "Có tình huống nào bạn cần đứng lên vì lẽ phải không?"
    ]
  },
  12: { // The Hanged Man
    en: [
      "What are you being asked to surrender or let go of?",
      "How might seeing your situation from a completely different angle change everything?",
      "Where is patience and pause more powerful than action right now?"
    ],
    vi: [
      "Bạn đang được yêu cầu buông bỏ hay từ bỏ điều gì?",
      "Nhìn tình huống từ góc hoàn toàn khác có thể thay đổi mọi thứ thế nào?",
      "Ở đâu kiên nhẫn và dừng lại mạnh hơn hành động lúc này?"
    ]
  },
  13: { // Death
    en: [
      "What chapter of your life is ending that you need to release with grace?",
      "What transformation is asking you to let the old self die?",
      "What new life can emerge only after you stop clinging to the past?"
    ],
    vi: [
      "Chương nào trong cuộc sống đang kết thúc mà bạn cần buông bỏ thanh thản?",
      "Sự chuyển hóa nào đang đòi bạn để cái tôi cũ ra đi?",
      "Cuộc sống mới nào chỉ có thể xuất hiện khi bạn ngừng bám víu quá khứ?"
    ]
  },
  14: { // Temperance
    en: [
      "Where do you need to find balance between two extremes?",
      "What areas of your life need more patience and moderation?",
      "How can you blend opposing forces in your life into harmony?"
    ],
    vi: [
      "Ở đâu bạn cần tìm sự cân bằng giữa hai thái cực?",
      "Lĩnh vực nào cần thêm kiên nhẫn và điều độ?",
      "Làm sao hòa hợp các lực đối lập trong cuộc sống?"
    ]
  },
  15: { // The Devil
    en: [
      "What unhealthy attachment or habit has power over you?",
      "Are you staying in a situation by choice or because you feel trapped?",
      "What shadow side of yourself are you refusing to acknowledge?"
    ],
    vi: [
      "Sự gắn bó hay thói quen không lành mạnh nào đang chi phối bạn?",
      "Bạn ở lại tình huống này do lựa chọn hay vì cảm thấy bị mắc kẹt?",
      "Mặt tối nào của bản thân bạn đang từ chối thừa nhận?"
    ]
  },
  16: { // The Tower
    en: [
      "What structure in your life needs to crumble so something authentic can be built?",
      "How do you typically react when your worldview is shattered?",
      "What truth have you been avoiding that is now demanding your attention?"
    ],
    vi: [
      "Cấu trúc nào trong cuộc sống cần sụp đổ để điều chân thật được xây dựng?",
      "Bạn thường phản ứng thế nào khi thế giới quan bị phá vỡ?",
      "Sự thật nào bạn tránh né mà giờ đang đòi hỏi sự chú ý?"
    ]
  },
  17: { // The Star
    en: [
      "What gives you hope even in your darkest moments?",
      "How can you be more vulnerable and authentic in sharing your gifts?",
      "What dream have you abandoned that deserves a second chance?"
    ],
    vi: [
      "Điều gì mang lại hy vọng cho bạn ngay cả trong khoảnh khắc tăm tối nhất?",
      "Làm sao bạn có thể dễ tổn thương và chân thật hơn khi chia sẻ tài năng?",
      "Giấc mơ nào bạn đã từ bỏ mà xứng đáng có cơ hội thứ hai?"
    ]
  },
  18: { // The Moon
    en: [
      "What fears or illusions are distorting your perception of reality?",
      "What message is your subconscious trying to deliver through dreams or anxiety?",
      "Where do you need to trust the journey even when the path is unclear?"
    ],
    vi: [
      "Nỗi sợ hay ảo tưởng nào đang bóp méo nhận thức thực tại của bạn?",
      "Tiềm thức đang cố gửi thông điệp gì qua giấc mơ hay lo lắng?",
      "Ở đâu bạn cần tin tưởng hành trình dù con đường chưa rõ ràng?"
    ]
  },
  19: { // The Sun
    en: [
      "What brings you pure, uncomplicated joy that you've been neglecting?",
      "How can you bring more authenticity and warmth to your daily life?",
      "What success are you not allowing yourself to fully celebrate?"
    ],
    vi: [
      "Điều gì mang lại niềm vui thuần khiết mà bạn đang lơ là?",
      "Làm sao mang thêm sự chân thật và ấm áp vào cuộc sống hàng ngày?",
      "Thành công nào bạn không cho phép mình ăn mừng trọn vẹn?"
    ]
  },
  20: { // Judgement
    en: [
      "What calling or purpose are you being awakened to?",
      "What past version of yourself do you need to forgive to move forward?",
      "Are you living in alignment with your highest values?"
    ],
    vi: [
      "Sứ mệnh hay mục đích nào đang đánh thức bạn?",
      "Phiên bản quá khứ nào của bạn cần được tha thứ để tiến lên?",
      "Bạn có đang sống đúng với giá trị cao nhất của mình không?"
    ]
  },
  21: { // The World
    en: [
      "What cycle of achievement are you completing right now?",
      "How can you honor this accomplishment before rushing to the next goal?",
      "What integration of lessons learned is happening in your life?"
    ],
    vi: [
      "Chu kỳ thành tựu nào bạn đang hoàn thành lúc này?",
      "Làm sao tôn vinh thành tựu này trước khi vội vã đến mục tiêu kế tiếp?",
      "Sự tổng hợp bài học nào đang diễn ra trong cuộc sống bạn?"
    ]
  },

  // ── Wands (22–35) ──
  22: { // Ace of Wands
    en: [
      "What new passion or creative spark is igniting within you?",
      "How will you channel this burst of inspiration into concrete action?"
    ],
    vi: [
      "Đam mê hay tia sáng sáng tạo mới nào đang bùng cháy trong bạn?",
      "Bạn sẽ chuyển nguồn cảm hứng này thành hành động cụ thể thế nào?"
    ]
  },
  23: { // Two of Wands
    en: [
      "What bold vision for your future are you planning but not yet pursuing?",
      "Are you spending too long planning and not enough time acting?"
    ],
    vi: [
      "Tầm nhìn táo bạo nào cho tương lai bạn đang lên kế hoạch nhưng chưa theo đuổi?",
      "Bạn có đang dành quá nhiều thời gian lên kế hoạch mà thiếu hành động?"
    ]
  },
  24: { // Three of Wands
    en: [
      "What ventures have you set in motion that now require patience?",
      "How far beyond your comfort zone are you willing to expand?"
    ],
    vi: [
      "Dự án nào bạn đã khởi động mà giờ cần kiên nhẫn chờ đợi?",
      "Bạn sẵn sàng mở rộng bao xa ngoài vùng an toàn?"
    ]
  },
  25: { // Four of Wands
    en: [
      "What milestone or achievement in your life deserves celebration?",
      "Where have you built a stable foundation that you can be proud of?"
    ],
    vi: [
      "Cột mốc hay thành tựu nào trong cuộc sống xứng đáng được ăn mừng?",
      "Ở đâu bạn đã xây nền tảng vững chắc mà có thể tự hào?"
    ]
  },
  26: { // Five of Wands
    en: [
      "What conflict or competition in your life is actually helping you grow?",
      "Are you fighting for something meaningful or just fighting out of habit?",
      "How can you turn disagreement into productive collaboration?"
    ],
    vi: [
      "Xung đột hay cạnh tranh nào thực ra đang giúp bạn trưởng thành?",
      "Bạn đang đấu tranh vì điều có ý nghĩa hay chỉ vì thói quen?",
      "Làm sao biến bất đồng thành hợp tác hiệu quả?"
    ]
  },
  27: { // Six of Wands
    en: [
      "What victory or recognition have you earned that you should own with confidence?",
      "Are you leading others forward or just seeking their approval?"
    ],
    vi: [
      "Chiến thắng hay sự công nhận nào bạn xứng đáng mà cần tự tin đón nhận?",
      "Bạn đang dẫn dắt người khác tiến lên hay chỉ tìm kiếm sự chấp thuận?"
    ]
  },
  28: { // Seven of Wands
    en: [
      "What position or belief are you defending right now?",
      "Is this battle worth fighting, or is it draining your energy?",
      "Where do you need to stand your ground despite opposition?"
    ],
    vi: [
      "Vị trí hay niềm tin nào bạn đang bảo vệ lúc này?",
      "Trận chiến này có đáng không, hay đang tiêu hao năng lượng bạn?",
      "Ở đâu bạn cần giữ vững lập trường dù bị phản đối?"
    ]
  },
  29: { // Eight of Wands
    en: [
      "What rapid changes or messages are heading your way?",
      "Are you ready to act quickly when the opportunity arrives?"
    ],
    vi: [
      "Thay đổi nhanh hay tin nhắn nào đang đến với bạn?",
      "Bạn có sẵn sàng hành động nhanh khi cơ hội đến không?"
    ]
  },
  30: { // Nine of Wands
    en: [
      "What has left you feeling battle-worn but still standing?",
      "Where do you need to find reserves of strength for one final push?",
      "Are your defenses protecting you or isolating you?"
    ],
    vi: [
      "Điều gì khiến bạn kiệt sức nhưng vẫn đứng vững?",
      "Ở đâu bạn cần tìm nguồn sức mạnh dự trữ cho nỗ lực cuối cùng?",
      "Hàng phòng thủ của bạn đang bảo vệ hay cô lập bạn?"
    ]
  },
  31: { // Ten of Wands
    en: [
      "What burdens are you carrying that are not truly yours to bear?",
      "Which responsibilities can you delegate or release right now?"
    ],
    vi: [
      "Gánh nặng nào bạn đang mang mà thực sự không phải của bạn?",
      "Trách nhiệm nào bạn có thể ủy thác hoặc buông bỏ ngay bây giờ?"
    ]
  },
  32: { // Page of Wands
    en: [
      "What exciting idea or adventure is calling to your curious spirit?",
      "How can you approach a current challenge with fresh enthusiasm?"
    ],
    vi: [
      "Ý tưởng hay cuộc phiêu lưu thú vị nào đang gọi tinh thần tò mò của bạn?",
      "Làm sao tiếp cận thử thách hiện tại với sự nhiệt tình mới mẻ?"
    ]
  },
  33: { // Knight of Wands
    en: [
      "Where is your passion leading you — toward growth or recklessness?",
      "What action do you need to take boldly without overthinking?"
    ],
    vi: [
      "Đam mê đang dẫn bạn đến đâu — tăng trưởng hay liều lĩnh?",
      "Hành động nào bạn cần thực hiện táo bạo mà không suy nghĩ quá nhiều?"
    ]
  },
  34: { // Queen of Wands
    en: [
      "How are you expressing your confidence and creative leadership?",
      "Where can you inspire others by being unapologetically yourself?"
    ],
    vi: [
      "Bạn đang thể hiện sự tự tin và khả năng lãnh đạo sáng tạo thế nào?",
      "Ở đâu bạn có thể truyền cảm hứng bằng cách là chính mình?"
    ]
  },
  35: { // King of Wands
    en: [
      "What visionary project needs your bold leadership right now?",
      "Are you inspiring others through example or just through words?"
    ],
    vi: [
      "Dự án tầm nhìn nào cần sự lãnh đạo táo bạo của bạn ngay bây giờ?",
      "Bạn đang truyền cảm hứng bằng tấm gương hay chỉ bằng lời nói?"
    ]
  },

  // ── Cups (36–49) ──
  36: { // Ace of Cups
    en: [
      "What new emotional beginning or love is flowing into your life?",
      "How open is your heart to receiving right now?"
    ],
    vi: [
      "Khởi đầu cảm xúc hay tình yêu mới nào đang đổ vào cuộc sống bạn?",
      "Trái tim bạn đang mở rộng đến mức nào để đón nhận?"
    ]
  },
  37: { // Two of Cups
    en: [
      "What partnership or connection deserves deeper investment from you?",
      "Are you giving and receiving equally in your closest relationships?"
    ],
    vi: [
      "Mối quan hệ hay kết nối nào xứng đáng được bạn đầu tư sâu hơn?",
      "Bạn có đang cho và nhận ngang bằng trong các mối quan hệ thân thiết?"
    ]
  },
  38: { // Three of Cups
    en: [
      "When did you last celebrate with people who truly lift your spirit?",
      "What community or friendship have you been neglecting?"
    ],
    vi: [
      "Lần cuối bạn ăn mừng với những người thực sự nâng đỡ tinh thần là khi nào?",
      "Cộng đồng hay tình bạn nào bạn đang lơ là?"
    ]
  },
  39: { // Four of Cups
    en: [
      "What opportunity are you overlooking because you're focused on what you lack?",
      "Is your emotional withdrawal serving you or just numbing you?",
      "What blessings are right in front of you that you have stopped noticing?"
    ],
    vi: [
      "Cơ hội nào bạn đang bỏ qua vì chỉ tập trung vào thiếu thốn?",
      "Sự thu mình cảm xúc đang phục vụ hay chỉ làm tê liệt bạn?",
      "Phước lành nào ngay trước mắt mà bạn không còn nhận ra?"
    ]
  },
  40: { // Five of Cups
    en: [
      "What loss are you grieving that is preventing you from seeing what remains?",
      "How can you honor your sadness while also turning toward hope?"
    ],
    vi: [
      "Mất mát nào bạn đang tiếc thương mà ngăn bạn thấy điều còn lại?",
      "Làm sao tôn trọng nỗi buồn đồng thời hướng về hy vọng?"
    ]
  },
  41: { // Six of Cups
    en: [
      "What joyful memory or childhood experience holds wisdom for your present?",
      "Who from your past deserves reconnection or forgiveness?"
    ],
    vi: [
      "Kỷ niệm vui hay trải nghiệm tuổi thơ nào chứa trí tuệ cho hiện tại?",
      "Ai từ quá khứ xứng đáng được kết nối lại hoặc tha thứ?"
    ]
  },
  42: { // Seven of Cups
    en: [
      "Which of your many options is truly aligned with your deepest values?",
      "Are your dreams inspiring you or becoming a form of escapism?",
      "What fantasy do you need to release to focus on what is real?"
    ],
    vi: [
      "Trong nhiều lựa chọn, đâu mới thực sự phù hợp với giá trị sâu nhất?",
      "Giấc mơ đang truyền cảm hứng hay trở thành cách trốn tránh?",
      "Ảo tưởng nào bạn cần buông để tập trung vào thực tại?"
    ]
  },
  43: { // Eight of Cups
    en: [
      "What are you being called to walk away from, even though it is familiar?",
      "What deeper fulfillment are you seeking that your current situation cannot provide?"
    ],
    vi: [
      "Bạn đang được gọi rời bỏ điều gì, dù nó quen thuộc?",
      "Sự thỏa mãn sâu hơn nào bạn đang tìm mà tình huống hiện tại không thể cho?"
    ]
  },
  44: { // Nine of Cups
    en: [
      "What wish of yours has been granted that you have not fully appreciated?",
      "Are you content with what you have, or always reaching for more?"
    ],
    vi: [
      "Điều ước nào đã thành hiện thực mà bạn chưa trân trọng đủ?",
      "Bạn có hài lòng với những gì mình có, hay luôn muốn thêm?"
    ]
  },
  45: { // Ten of Cups
    en: [
      "What does emotional fulfillment and harmony truly look like for you?",
      "How can you contribute more to the happiness of those closest to you?"
    ],
    vi: [
      "Sự viên mãn và hài hòa cảm xúc thực sự trông như thế nào với bạn?",
      "Làm sao góp phần nhiều hơn vào hạnh phúc của người thân yêu?"
    ]
  },
  46: { // Page of Cups
    en: [
      "What creative or emotional message is trying to reach you?",
      "How can you approach your feelings with more curiosity and less judgment?"
    ],
    vi: [
      "Thông điệp sáng tạo hay cảm xúc nào đang cố đến với bạn?",
      "Làm sao tiếp cận cảm xúc với nhiều tò mò hơn và ít phán xét hơn?"
    ]
  },
  47: { // Knight of Cups
    en: [
      "What romantic or creative pursuit are you chasing with idealism?",
      "Are you following your heart wisely or being swept away by fantasy?"
    ],
    vi: [
      "Bạn đang theo đuổi mục tiêu lãng mạn hay sáng tạo nào với lý tưởng?",
      "Bạn đang theo trái tim khôn ngoan hay bị cuốn vào ảo tưởng?"
    ]
  },
  48: { // Queen of Cups
    en: [
      "How well are you holding space for your own emotions and those of others?",
      "Where do you need to set emotional boundaries to protect your energy?"
    ],
    vi: [
      "Bạn đang giữ không gian cho cảm xúc của mình và người khác tốt đến đâu?",
      "Ở đâu bạn cần đặt ranh giới cảm xúc để bảo vệ năng lượng?"
    ]
  },
  49: { // King of Cups
    en: [
      "How can you lead with emotional intelligence in a current situation?",
      "Are you mastering your emotions or suppressing them?"
    ],
    vi: [
      "Làm sao dẫn dắt bằng trí tuệ cảm xúc trong tình huống hiện tại?",
      "Bạn đang làm chủ cảm xúc hay đè nén chúng?"
    ]
  },

  // ── Swords (50–63) ──
  50: { // Ace of Swords
    en: [
      "What new clarity or breakthrough idea is cutting through your confusion?",
      "How will you use this mental sharpness — for truth or for argument?"
    ],
    vi: [
      "Sự rõ ràng hay ý tưởng đột phá nào đang xuyên qua sự mơ hồ?",
      "Bạn sẽ dùng sự sắc bén trí tuệ này — cho sự thật hay tranh cãi?"
    ]
  },
  51: { // Two of Swords
    en: [
      "What decision are you avoiding by keeping your eyes closed?",
      "What information do you need to break this mental stalemate?"
    ],
    vi: [
      "Quyết định nào bạn đang trốn tránh bằng cách nhắm mắt?",
      "Thông tin nào bạn cần để phá vỡ thế bế tắc tinh thần này?"
    ]
  },
  52: { // Three of Swords
    en: [
      "What heartbreak or painful truth do you need to fully feel before healing?",
      "How can this pain become a teacher rather than a prison?"
    ],
    vi: [
      "Nỗi đau hay sự thật đau lòng nào bạn cần cảm nhận trọn vẹn trước khi chữa lành?",
      "Làm sao nỗi đau này trở thành bài học thay vì nhà tù?"
    ]
  },
  53: { // Four of Swords
    en: [
      "What mental rest do you urgently need to take?",
      "Are you recovering or just avoiding the battle that awaits?",
      "How can you create a sanctuary for your mind amidst the chaos?"
    ],
    vi: [
      "Bạn cần nghỉ ngơi tinh thần gì một cách cấp bách?",
      "Bạn đang hồi phục hay chỉ trốn tránh trận chiến đang chờ?",
      "Làm sao tạo nơi trú ẩn cho tâm trí giữa hỗn loạn?"
    ]
  },
  54: { // Five of Swords
    en: [
      "What conflict have you won at too great a cost?",
      "Is your ego driving a fight that your wisdom knows is pointless?",
      "Where do you need to choose peace over being right?"
    ],
    vi: [
      "Xung đột nào bạn đã thắng nhưng cái giá quá đắt?",
      "Cái tôi có đang thúc đẩy cuộc chiến mà trí tuệ biết là vô nghĩa?",
      "Ở đâu bạn cần chọn bình yên thay vì đúng đắn?"
    ]
  },
  55: { // Six of Swords
    en: [
      "What difficult situation are you transitioning away from?",
      "What calmer waters are you heading toward, and what must you leave behind?"
    ],
    vi: [
      "Bạn đang chuyển tiếp khỏi tình huống khó khăn nào?",
      "Vùng nước yên bình nào bạn đang hướng tới, và phải bỏ lại gì?"
    ]
  },
  56: { // Seven of Swords
    en: [
      "Where are you not being fully honest — with yourself or others?",
      "What strategy are you using that might backfire?",
      "Is there something you are trying to get away with?"
    ],
    vi: [
      "Ở đâu bạn chưa hoàn toàn trung thực — với bản thân hay người khác?",
      "Chiến lược nào bạn đang dùng mà có thể phản tác dụng?",
      "Có điều gì bạn đang cố lén lút thực hiện?"
    ]
  },
  57: { // Eight of Swords
    en: [
      "What mental prison have you built for yourself that you can actually escape?",
      "Which of your perceived limitations are real and which are self-imposed?"
    ],
    vi: [
      "Nhà tù tinh thần nào bạn tự xây mà thực ra có thể thoát ra?",
      "Giới hạn nào bạn cho là có thật và đâu là tự áp đặt?"
    ]
  },
  58: { // Nine of Swords
    en: [
      "What worries keep you awake at night that may be worse in your mind than in reality?",
      "Who can you talk to about the anxiety that you have been carrying alone?"
    ],
    vi: [
      "Nỗi lo nào khiến bạn mất ngủ mà có thể tệ hơn trong tâm trí so với thực tế?",
      "Bạn có thể tâm sự với ai về nỗi lo lắng đang gánh một mình?"
    ]
  },
  59: { // Ten of Swords
    en: [
      "What ending, though painful, is clearing the way for a fresh start?",
      "Have you hit rock bottom — and if so, what is the first step up?"
    ],
    vi: [
      "Kết thúc nào, dù đau đớn, đang dọn đường cho khởi đầu mới?",
      "Bạn đã chạm đáy chưa — và nếu rồi, bước đầu tiên đi lên là gì?"
    ]
  },
  60: { // Page of Swords
    en: [
      "What new idea or perspective are you eager to explore and communicate?",
      "Are you seeking truth or just looking for ammunition in an argument?"
    ],
    vi: [
      "Ý tưởng hay góc nhìn mới nào bạn háo hức khám phá và chia sẻ?",
      "Bạn đang tìm kiếm sự thật hay chỉ tìm vũ khí cho cuộc tranh luận?"
    ]
  },
  61: { // Knight of Swords
    en: [
      "Are you charging toward your goal with clarity or just with aggression?",
      "What consequences might your rush to act create?"
    ],
    vi: [
      "Bạn đang lao về mục tiêu với sự rõ ràng hay chỉ với sự hung hăng?",
      "Hành động vội vã có thể tạo ra hậu quả gì?"
    ]
  },
  62: { // Queen of Swords
    en: [
      "Where do you need to cut through emotions and see a situation with clear logic?",
      "How can you communicate your truth with both honesty and compassion?"
    ],
    vi: [
      "Ở đâu bạn cần vượt qua cảm xúc và nhìn tình huống bằng logic rõ ràng?",
      "Làm sao truyền đạt sự thật với cả trung thực và lòng trắc ẩn?"
    ]
  },
  63: { // King of Swords
    en: [
      "What situation requires your most objective and fair judgment?",
      "Are you using your intellectual authority to help or to dominate?"
    ],
    vi: [
      "Tình huống nào đòi hỏi sự phán xét khách quan và công bằng nhất?",
      "Bạn đang dùng quyền lực trí tuệ để giúp đỡ hay thống trị?"
    ]
  },

  // ── Pentacles (64–77) ──
  64: { // Ace of Pentacles
    en: [
      "What new financial or material opportunity is presenting itself?",
      "How will you plant this seed of prosperity so it grows into something lasting?"
    ],
    vi: [
      "Cơ hội tài chính hay vật chất mới nào đang xuất hiện?",
      "Bạn sẽ gieo hạt giống thịnh vượng này thế nào để nó lớn bền vững?"
    ]
  },
  65: { // Two of Pentacles
    en: [
      "What competing priorities in your life need better balance?",
      "Are you juggling too many things and dropping what matters most?"
    ],
    vi: [
      "Ưu tiên cạnh tranh nào trong cuộc sống cần cân bằng tốt hơn?",
      "Bạn có đang tung hứng quá nhiều thứ và đánh rơi điều quan trọng nhất?"
    ]
  },
  66: { // Three of Pentacles
    en: [
      "What collaborative project would benefit from seeking expert input?",
      "Are you putting in the craftsmanship and effort your work deserves?"
    ],
    vi: [
      "Dự án hợp tác nào sẽ có lợi từ việc tìm kiếm ý kiến chuyên gia?",
      "Bạn có đang đầu tư sự tinh xảo và nỗ lực xứng đáng cho công việc?"
    ]
  },
  67: { // Four of Pentacles
    en: [
      "What are you holding onto so tightly that it is preventing growth?",
      "Is your need for security becoming a cage?",
      "What would you gain if you loosened your grip — on money, control, or routine?"
    ],
    vi: [
      "Bạn đang nắm chặt điều gì đến mức ngăn cản sự phát triển?",
      "Nhu cầu an toàn có đang trở thành cái lồng?",
      "Bạn sẽ được gì nếu nới lỏng — tiền, kiểm soát, hay thói quen?"
    ]
  },
  68: { // Five of Pentacles
    en: [
      "What support or help is available to you that you have been too proud to accept?",
      "Where in your life are you feeling left out in the cold?"
    ],
    vi: [
      "Sự hỗ trợ nào sẵn có mà bạn quá tự ái để chấp nhận?",
      "Ở đâu trong cuộc sống bạn cảm thấy bị bỏ rơi ngoài giá lạnh?"
    ]
  },
  69: { // Six of Pentacles
    en: [
      "Are you giving generously or giving to maintain power over others?",
      "Where do you need to ask for help without feeling ashamed?"
    ],
    vi: [
      "Bạn đang cho đi hào phóng hay cho để duy trì quyền lực?",
      "Ở đâu bạn cần xin giúp đỡ mà không cảm thấy xấu hổ?"
    ]
  },
  70: { // Seven of Pentacles
    en: [
      "What long-term investment of your time or energy is ready to be evaluated?",
      "Are you patient enough to let your efforts bear fruit, or are you tempted to give up?"
    ],
    vi: [
      "Đầu tư dài hạn nào về thời gian hay năng lượng đã đến lúc đánh giá?",
      "Bạn có đủ kiên nhẫn để nỗ lực đơm quả, hay muốn bỏ cuộc?"
    ]
  },
  71: { // Eight of Pentacles
    en: [
      "What skill are you developing that requires dedicated, daily practice?",
      "Are you putting in the work even when no one is watching?"
    ],
    vi: [
      "Kỹ năng nào bạn đang phát triển mà cần luyện tập chuyên cần hàng ngày?",
      "Bạn có đang nỗ lực ngay cả khi không ai nhìn thấy?"
    ]
  },
  72: { // Nine of Pentacles
    en: [
      "What abundance in your life have you earned through your own hard work?",
      "How can you enjoy your success more fully without guilt?"
    ],
    vi: [
      "Sự sung túc nào bạn đã đạt được nhờ nỗ lực bản thân?",
      "Làm sao tận hưởng thành công trọn vẹn hơn mà không cảm thấy tội lỗi?"
    ]
  },
  73: { // Ten of Pentacles
    en: [
      "What legacy are you building for those who come after you?",
      "How well are you honoring the traditions and resources passed down to you?"
    ],
    vi: [
      "Di sản nào bạn đang xây dựng cho thế hệ sau?",
      "Bạn đang tôn vinh truyền thống và tài nguyên được truyền lại tốt đến đâu?"
    ]
  },
  74: { // Page of Pentacles
    en: [
      "What new study, skill, or financial plan are you beginning with fresh eyes?",
      "How can you stay curious and committed to learning in this area?"
    ],
    vi: [
      "Việc học, kỹ năng, hay kế hoạch tài chính mới nào bạn đang bắt đầu?",
      "Làm sao giữ sự tò mò và cam kết học hỏi trong lĩnh vực này?"
    ]
  },
  75: { // Knight of Pentacles
    en: [
      "Where does your situation call for steady, reliable effort rather than speed?",
      "Are you being thorough or just being slow?"
    ],
    vi: [
      "Ở đâu tình huống đòi nỗ lực ổn định, đáng tin thay vì tốc độ?",
      "Bạn đang cẩn thận hay chỉ đang chậm chạp?"
    ]
  },
  76: { // Queen of Pentacles
    en: [
      "How well are you balancing material comfort with nurturing those you love?",
      "What practical act of care can you offer yourself or someone else today?"
    ],
    vi: [
      "Bạn cân bằng sự thoải mái vật chất với việc chăm sóc người thân yêu tốt đến đâu?",
      "Hành động chăm sóc thực tế nào bạn có thể dành cho mình hoặc ai đó hôm nay?"
    ]
  },
  77: { // King of Pentacles
    en: [
      "What area of your life needs your practical wisdom and business sense?",
      "Are you building wealth that serves your values, or just accumulating?"
    ],
    vi: [
      "Lĩnh vực nào cần trí tuệ thực tế và khả năng kinh doanh của bạn?",
      "Bạn đang xây tài sản phục vụ giá trị, hay chỉ tích lũy?"
    ]
  }
};

// ─── LOAD CHECK ───────────────────────────────────────────────────────────────
console.log('tarot-data.js loaded:', typeof REVERSED_MEANINGS !== 'undefined');
