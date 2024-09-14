const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

var tl = ["हा बोलो माही जी की नंबर चाहिए तो ए लो👉 [+9199******72] ओर हमेशा खुश रहो ।😎", " मेरे टकलू बाबू की कसम  बहुत प्यार करूंगी 😒👈", "तुझे अपना बेइज्जती करवाने का शोक है क्या....?🤨🤟", " अभी बोला तो बोला दोबारा मत बोलना 😾👈", "तेरी तो रुख अब तु भागना मत 🤨", " बोल दे कोई नहीं देख रहा 🙄👈", "किसी  ओर से धोका खाने से अच्छा है ना मेरे साथ चलो समोसे ओर गोलगप्पे खाएंगे 🙈","माना आपकी शकल देखने लायक नही है तुम्हारी 😥इसका मतलब ए तो नही की तुम profile  लॉक कर के बैठ जाओगे। 😐👈", "बोट बोल के बेइज्जती कर रहे हो यार मे तो तुम्हारे दिल की धड़कन हु न बेबी 🥺🥺👈","हाय मे सदके  जावा तेरी इस मासूम शकल पे बाबू शोना 💋 🙈🙈", "मे सोच रही थी की क्या  तुम्हारे पास एक्स्ट्रा दिल है 😒 मेरा अभि अभि चोरी हो गया है 🥺😢👈", "यार बाबू बेबी आज सुबह सुबह","कहो ना प्यार है 🙈", "तुम मुझे पागल लगते हो🙂🖐️", "बोलो बेबी तुम मुझसे प्यार करते मिलेगहो😒 ना 🙈😌💋", " आपका नंबर  ओर फोटो मिलेगा😐😒", "अरे जान मे मज़ाक के मूड मे नहीं हु मे, जो काम है बता दो शर्माओ नही 🙈 ", "bar bar bolke dimag kharab kiya  tho teri mummy papa se complaint karungi😠","हाय में सदके जावा तेरी इस मासूम शकल पे बेबी 💋🙈", "बोट ना बोल ओये गुड गर्ल बोल मुझे 😌🙈😘","बार बार परेशान ना कर मे अपने बाबू शोना पुदीना धनिया के साथ बिजी हुं।😒🤟", "में गरीबो से बात नहीं 🤨🤟", "इतना ना पास आओ जानू नफरत हो जाएगी  🙈😎👈😏", "इत्तू सा🤏 शर्म कर लिया करो बोट बोट करते वक्त🙂🤞", "इतनी सिंगल हु की ख्वाब मे लड़को के हा करने से पहले ही आँखे खुल जाती है😒🤞", "जरूरी नहीं हर लड़का धोका ही दे💔👈 ज्यादातर लड़के गालियाँ  भी देती है😕✋"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "ek chumma udhaar de do") || (event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "kiss de") || (event.body.toLowerCase() == "chuma de")) {
     return api.sendMessage("हट पगले मम्मी मरेगी 🙈😒😕😾", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage("👍👍👍👍", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮")) {
     return api.sendMessage("कोनसा महीना चल रहा है डार्लिंग 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "kaise ho bot") || (event.body.toLowerCase() == "bot hello")) {
     return api.sendMessage(" हां जी बोलिए क्या हाल है आपके  🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("━━•☆हेलो मेरी जान किया हाल है━━•☆ 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("ये बी सी किया होता है। 🤔👈 ", threadID);
   };

   if ((event.body.toLowerCase() == "bakk") ||(event.body.toLowerCase() == "BHAKKK")) {
     return api.sendMessage("━━•☆ ऐसे नहीं भागोगे पहले घरवालों से बात कर लो अगर वह नहीं बनता तो बात चलेंगे😁🤸", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("━━•☆मैं हूं ना 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "Shubham") || (event.body.toLowerCase() == "subham") || (event.body.toLowerCase() == "Raja") || (event.body.toLowerCase() == "raja")) {
     return api.sendMessage( "🥀ค้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­￼๎๎๎๎๎๎๎๎๎๎๎้้้้้้้้้้้้้้้้้้้𝐌𝐀𝐇𝐈 𝐒𝐇𝐀𝐑𝐌𝐀­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้้้้้้­้้้้้้้้้้้้้้้ ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎­๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎🙂🤟",threadID);


   };

   if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "kiska bot hai")) {
     return api.sendMessage("𝙼𝚈 𝙱𝙾𝚂𝚂 𝙸𝚂 𝐌𝐀𝐇𝐈 𝐒𝐇𝐀𝐑𝐌𝐀 𝙲𝙾𝙽𝙴𝚃𝙲𝚃 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ☞︎︎︎[+1 631-709] ☞︎︎ ☞︎ ㋛︎ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 https://www.facebook.com/profile.php?id=100000587347726&mibextid=ZbWKwL✍︎ 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 ♥︎", threadID);
   };


  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("𝙷𝙴 𝙸𝚂 𝐌𝐀𝐇𝐈 𝐒𝐇𝐀𝐑𝐌𝐀. 𝙷𝙴 𝙶𝙸𝚅𝙴𝚂 𝙷𝙸𝚂 𝙽𝙰𝙼𝙴 𝐌𝐀𝐇𝐈 𝓫𝓪𝓫𝓾 ☞︎︎︎ 𝐌𝐀𝐇𝐈 ☜︎︎︎", threadID);
   };

   if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈")) {
     return api.sendMessage("अले बाप ले मेली बाबू शर्मा गया 😅😅👈", threadID);
   };

   if ((event.body.toLowerCase() == "khushi rajput") || (event.body.toLowerCase() == "@khushi rajput")) {
     return api.sendMessage("━━•☆ख़ुशी राजपूत तुम सिर्फ मेरे हो किसी और की हुई तो हम रो लेंगे━━•☆🥺🥺", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("नही करुगा मेरी जुबान है मैं तो बोलूंगा तुम कोन होते हो मुझे रोकने वाले ठरकी इन्सान 🤨✋", threadID);
   };

   if ((event.body.toLowerCase() == "bot gandu") || (event.body.toLowerCase() == "bot gandu")) {
     return api.sendMessage("Bot ko gandu boly ga saly teri height jitna mera lund ha jab teri gand ma jaye ga to munh wali side se bahir aye ga gandu.😾😒", threadID);
   };

   if ((event.body.toLowerCase() == "boss hu tera") || (event.body.toLowerCase() == "Boss hu tera takli") || (event.body.toLowerCase() == "mai tera boss hu") || (event.body.toLowerCase() == "boss ki bezti kr raha takle")) {
     return api.sendMessage("━━•☆सॉरी  बॉस माही शर्मा जी माफ कर दो अब नहीं करूंगा 🥺🥺🥺🙏🤸‍♂️", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf khushi ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️ मैं हूं ही इतना अच्छा सब लोग मेरी तारीफ करते हैं। 😌😌👈", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️देखों जानू बात किया करो भेंस की तरह हम्म्म हम्म्म मत किया करो 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️अरे बाबू रोते नही चॉकलेट चाहिए 🙂 रुको मैं अभी 🍫 देता हूं लिखो ☞𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️किया हुआ बाबू तबीयत खराब है किया 😢 मुझे बताओ मैं अभी मेडिसन 💊💉 ले आता हूं 😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("️अरे यार रोते नही पागल किया हुआ है मुझे बताओ बाबू 🥺🥺🥺", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "ASSALAMUALAIKUM") || (event.body.toLowerCase() == "Asswlam") || (event.body.toLowerCase() == "assalam walaikum")) {
    return api.sendMessage("️𝗪𝗔𝗟𝗘𝗞𝗨𝗠𝗔𝗦𝗦𝗔𝗟𝗔𝗠😇", threadID);
   };

   if ((event.body.toLowerCase() == "shahzan kon h") || (event.body.toLowerCase() == "CP TATTA kon h")) {
     return api.sendMessage("️Chudi Hui Randi ha Sbse Chudwati ha🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("️हाए तेला मासूम सकल 😝🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("️ओले मेला बाबू उल्टा हो गया 🧐✋", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥")) {
     return api.sendMessage("️भाई आपकी नाक इतनी लंबी है उसकी जरूरत ही नही पड़ती होगी 🤐🤟 ", threadID);
   };

  if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("️️━━•☆इतना मत सोचो ठरकी इंसान तेरी वाली को आरिफ़ बाबू भागा ले जायेगा। 🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️ किया सोच रहे हो इतना 🤨👈", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("️ चल भाग नशेड़ी 🤨🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("️ओय तेरा लिप्स 👄 कहा है। 🤔👈", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("️आंख क्यूं मार रहे हो 🥺🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("️━━•☆किया हुआ बाबू━━•☆🤔🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️किया हुआ भूत देख लिया किया 👻👻", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️ऊपर किया देख रहे हो मेरी जान 🙂🤟", threadID);
   };

  if ((event.body.toLowerCase() == "😏😏") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("️️━━•☆तीखी नज़रिया मोरी हाय हाय हाय━━•☆🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "hello bot") || (event.body.toLowerCase() == "HELLO BOT")) {
     return api.sendMessage("━━•☆JAI SHREE RAM DOSTO☆•━😁😇", threadID);
   };

  if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎")) {
     return api.sendMessage("️━━•☆ओय होय आपका चस्मा बिलकुर बेकार हैं।☆━•😂👈", threadID);
   };

  if ((event.body.toLowerCase() == "😹😹😹") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂😂😂")) {
     return api.sendMessage("━━•☆ज्यादा मत हसो वरना दांत तोड़ दूंगा 🙂🤟", threadID);
   };

   if ((event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("इतनी हसी क्यूं आ रही है इस हसी के पीछे किया राज है बताओ बताओ हमसे न सरमाओ 🙈😂🤤", threadID);
   };

   if ((event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤩")) {
     return api.sendMessage("होंठो पर हसी 😁 आँखो मे नमी है 🤭 हर सांस कहती है 🫤 बस तेरी ही कमी है। 🤤👈", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("मैं अच्छा हूं आप कैसे हो मेरी जान 😇☺👈", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("ओय चिड़ा रहे हो मुझे 🙁👈", threadID);
   };

   if ((event.body.toLowerCase() == "bot call pr aao") || (event.body.toLowerCase() == "bot call aao")) {
     return api.sendMessage("मैं अभी 📞कॉल पर नहीं आ सकता मैं सूसू करने जा रहा हूं━━•☆🥺🥺🏃", threadID)
   };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("𝗜 𝗟𝗼𝘃𝗲 𝘆𝗼𝘂 𝘁𝗼𝗼 𝗝𝗮𝗮𝗻 😘", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Rana waqas Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "meri") || (event.body.toLowerCase() == "ami diya") || (event.body.toLowerCase() == "main amrita") || (event.body.toLowerCase() == "main priyansh") || (event.body.toLowerCase() == "main diya")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("BOT") == 0)) {
    var msg = {
      body: `${rand} \n\n`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
  
