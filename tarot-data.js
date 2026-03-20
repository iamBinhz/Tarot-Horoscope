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
  transformative: { en: 'Transformative', vi: 'Chuyển Hóa',  icon: '🔥' },
  healing:        { en: 'Healing',        vi: 'Chữa Lành',   icon: '💚' },
  challenging:    { en: 'Challenging',    vi: 'Thử Thách',   icon: '⚔️' },
  harmonious:     { en: 'Harmonious',     vi: 'Hài Hòa',     icon: '☯'  },
  intense:        { en: 'Intense',        vi: 'Mãnh Liệt',   icon: '⚡' }
};

const CONFIDENCE_LEVELS = {
  high:     { en: 'High',     vi: 'Cao'       },
  moderate: { en: 'Moderate', vi: 'Trung Bình' },
  low:      { en: 'Low',      vi: 'Thấp'      }
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

// ─── LOAD CHECK ───────────────────────────────────────────────────────────────
console.log('tarot-data.js loaded:', typeof REVERSED_MEANINGS !== 'undefined');
