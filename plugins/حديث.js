import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

var handler = async (m, { conn, usedPrefix }) => {
  const gameQuestions = [
    "لَمَّا خَلَقَ اللَّهُ الخَلْقَ، كَتَبَ في كِتَابِهِ، فَهو عِنْدَهُ فَوْقَ العَرْشِ: إنَّ رَحْمَتي تَغْلِبُ غَضَبِي.\n\n- الراوي: أبو هريرة\n- حكم الحديث: [صحيح]",
    "لَمَّا قَضَى اللَّهُ الخَلْقَ، كَتَبَ في كِتَابِهِ علَى نَفْسِهِ، فَهو مَوْضُوعٌ عِنْدَهُ إنَّ رَحْمَتي تَغْلِبُ غَضَبِي.\n\n- الراوي: أبو هريرة\n- حكم الحديث: [صحيح]",
    "قالَ اللَّهُ عَزَّ وَجَلَّ: سَبَقَتْ رَحْمَتي غَضَبِي.\n\n- الراوي: أبو هريرة\n- حكم الحديث: [صحيح]",
    "صَلَّيْتُ مع أبِي مُوسَى الأشْعَرِيِّ صَلَاةً فَلَمَّا كانَ عِنْدَ القَعْدَةِ قالَ رَجُلٌ مِنَ القَوْمِ: أُقِرَّتِ الصَّلَاةُ بالبِرِّ والزَّكَاةِ؟ قالَ فَلَمَّا قَضَى أبو مُوسَى الصَّلَاةَ وسَلَّمَ انْصَرَفَ فَقالَ: أيُّكُمُ القَائِلُ كَلِمَةَ كَذَا وكَذَا؟ قالَ: فأرَمَّ القَوْمُ...\n\n- الراوي: أبو موسى الأشعري\n- حكم الحديث: [صحيح]",
    "أنَّ رَسُولَ اللهِ صَلَّى اللَّهُ عليه وَسَلَّمَ، سُئِلَ عن أَوْلَادِ المُشْرِكِينَ فَقالَ: اللَّهُ أَعْلَمُ بما كَانُوا عَامِلِينَ.\n\n- الراوي: أبو هريرة\n- حكم الحديث: [صحيح]",
    "سُئِلَ رَسُولُ اللهِ صَلَّى اللَّهُ عليه وَسَلَّمَ، عن أَطْفَالِ المُشْرِكِينَ، مَن يَمُوتُ منهمْ صَغِيرًا؟ فَقالَ: اللَّهُ أَعْلَمُ بما كَانُوا عَامِلِينَ.\n\n- الراوي: أبو هريرة\n- حكم الحديث: [صحيح]",
    "سُئِلَ رَسُولُ اللهِ صَلَّى اللَّهُ عليه وَسَلَّمَ، عن أَطْفَالِ المُشْرِكِينَ؟ قالَ: اللَّهُ أَعْلَمُ بما كَانُوا عَامِلِينَ إذْ خَلَقَهُمْ.\n\n- الراوي: عبدالله بن عباس\n- حكم الحديث: [صحيح]",
    "أنَّ رَسولَ اللهِ صَلَّى اللَّهُ عليه وسلَّمَ كانَ لا يَطْرُقُ أَهْلَهُ لَيْلًا...\n\n- الراوي: انس بن مالك\n- حكم الحديث: [صحيح]",
    // أضف باقي الأحاديث هنا بنفس الصيغة
  ];

  const randomQuestion = gameQuestions[Math.floor(Math.random() * gameQuestions.length)];

  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${randomQuestion}*\n*⊱─═⪨༻𓆩⚡𓆪༺⪩═─⊰*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "‹ ᴛᴀʀʙᴏᴏ ʙᴏᴛ ،| 🌝♥️"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*⊱⪨༻𓆩〘حديث〙𓆪༺⪩⊰*",
            subtitle: "",
            hasMediaAttachment: false, // لا يوجد وسائط الآن
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"الي بعدو🎀✨️\",\"id\":\".حديث\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"الدعم\",\"id\":\".المطور\"}"
              }
            ]
          })
        })
      }
    }
  }, {});

  await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}

handler.tags = ['frasss'];
handler.command = ['حديث'];

export default handler;
