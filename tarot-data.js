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
