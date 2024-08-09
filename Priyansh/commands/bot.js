const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐒𝐚𝐮𝐫𝐚𝐛𝐡 𝐓𝐡𝐚𝐤𝐮𝐫",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Priyansh Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 saurabh Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal saurabh babu bhut masoom he ummah 🥺" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiya bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘")) {
     return api.sendMessage("love you baby 😘", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "saurabh") || (event.body.toLowerCase() == "nobita") || (event.body.toLowerCase() == "saurabh") || (event.body.toLowerCase() == "saurabh thakur")) {
     return api.sendMessage( "Busy HonGe Wo Work Me Main t0o Hun Naw mujhe batao baby 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝐒𝐚𝐮𝐫𝐚𝐛𝐡 𝐓𝐡𝐚𝐤𝐮𝐫☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𒄬•-※ 𝐍𝐨𝐛𝐢𝐭𝐚※ 𝐌𝐰𝐚𝐥𝐥𓆪 ᭄🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ www.facebook.com/Nobitaxwd42👋For Any Kind Of Help Contact On Instagram  Username 👉 @mr.saurabh__thakur", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Saurabh  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Rakkha Karo. Har Waqt Haste Raho Love you All.", threadID);
   };

  if ((event.body.toLowerCase() == "bot kon laya") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("the Saurabh. thakur He Gives his name Saurabh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

if ((event.body.toLowerCase() == "aalu") || (event.body.toLowerCase() == "Aniya") || (event.body.toLowerCase() == "aalu beta") || (event.body.toLowerCase() == "alu") || (event.body.toLowerCase() == "Aalu")) {
     return api.sendMessage("Aalu aalu mat kar bsdk •-※ 𓆩⃝𝐍𝐨𝐛𝐢𝐭𝐚※ .𝐌𝐚͜͡𝐰𝐋𓆪 ᭄ Se kahkar Teri watt lagva dunga 🥺❤️", threadID);
   };


   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("sorry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

if ((event.body.toLowerCase() == "tmkc") || (event.body.toLowerCase() == "Tmkc") || (event.body.toLowerCase() == "Teri ma ki chut") || (event.body.toLowerCase() == "Hatt") || (event.body.toLowerCase() == "bhkk")) {
     return api.sendMessage("•-※ 𓆩⃝𝐍𝐨𝐛𝐢𝐭𝐚※ .𝐌𝐚͜͡𝐰𝐋𓆪 ᭄ Se kahkar Teri watt lagva dunga 🥺❤️", threadID);
   };

if ((event.body.toLowerCase() == "Bhkk bkl") || (event.body.toLowerCase() == "Uski mkb") || (event.body.toLowerCase() == "uski mkb") || (event.body.toLowerCase() == "Teri mkb") || (event.body.toLowerCase() == "Mine Randi")) {
     return api.sendMessage("Kyu Teri mkb nahi he kya jhatu 😾", threadID);
   };

if ((event.body.toLowerCase() == "bot jhatu") || (event.body.toLowerCase() == "bot bsdk") || (event.body.toLowerCase() == "fuck me") || (event.body.toLowerCase() == "gand de do koii") || (event.body.toLowerCase() == "lagend log")) {
     return api.sendMessage("Bot Se panga not changa tmkc 100 bar dost 😞👍", threadID);
   };

if ((event.body.toLowerCase() == "bhag") || (event.body.toLowerCase() == "bhago") || (event.body.toLowerCase() == "randi ka bacha bhag") || (event.body.toLowerCase() == "bhg") || (event.body.toLowerCase() == "lode bhag")) {
     return api.sendMessage("bhaga bhaga ke choduga yad rakhna 😾", threadID);
   };


if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu") || (event.body.toLowerCase() == "Teri gf ka boxda bot") || (event.body.toLowerCase() == "teri ma ka boxda") || (event.body.toLowerCase() == "Mine randi")) {
     return api.sendMessage("Bete yha se marna chalu karunga aur india border tak gand me chappal marte le jaunga samjha😹", threadID);
   };

if ((event.body.toLowerCase() == "chut doge") || (event.body.toLowerCase() == "chut chahiye") || (event.body.toLowerCase() == "koii chut de do") || (event.body.toLowerCase() == "baby chut dogi") || (event.body.toLowerCase() == "baby fuck you")) {
     return api.sendMessage("Yahi patak ke chod dunga samjha na jhatu i fuck you 😹", threadID);
   };

if ((event.body.toLowerCase() == "Ib") || (event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "inbox aao") || (event.body.toLowerCase() == "Inbox") || (event.body.toLowerCase() == "ib me")) {
     return api.sendMessage("Inbox me le jakar kya karega bsdk yhi bat kar na  😹", threadID);
   };

if ((event.body.toLowerCase() == "request uthao") || (event.body.toLowerCase() == "request accept karo") || (event.body.toLowerCase() == "request accept kro") || (event.body.toLowerCase() == "request utha") || (event.body.toLowerCase() == "ib chal")) {
     return api.sendMessage("Shakal dekhi he apni jao pahle mekup karke aao 😹", threadID);
   };

if ((event.body.toLowerCase() == "gandi") || (event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "Ganda") || (event.body.toLowerCase() == "Gandi") || (event.body.toLowerCase() == "gandi bachi")) {
     return api.sendMessage("Gandi gandi kar raha bsdk nali me kha kar aaya he kya 😹", threadID);
   };

if ((event.body.toLowerCase() == "hnji") || (event.body.toLowerCase() == "hnn") || (event.body.toLowerCase() == "hn") || (event.body.toLowerCase() == "Hnji") || (event.body.toLowerCase() == "Hnn")) {
     return api.sendMessage("hnn mat bolo baby ratko kamre me ghus ke chuma le jaunga 😘❤️", threadID);
   };

if ((event.body.toLowerCase() == "ignore") || (event.body.toLowerCase() == "chor jane de") || (event.body.toLowerCase() == "ignor") || (event.body.toLowerCase() == "jaan ignore kar") || (event.body.toLowerCase() == "chor bhai")) {
     return api.sendMessage("Mat Kar ignore bhai jao uski gand marke aao jisne aapko kahi ka na chora 😹", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😂❤️", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

if ((event.body.toLowerCase() == "Chutiya he tu") || (event.body.toLowerCase() == "Chutiya he kya tu") || (event.body.toLowerCase() == "Chutiya ho tum") || (event.body.toLowerCase() == "chutiya kahi ka") || (event.body.toLowerCase() == "hatt")) {
     return api.sendMessage("Chutiya bolta he re jhatu  •-※ 𓆩⃝𝐍𝐨𝐛𝐢𝐭𝐚※ .𝐌𝐚͜͡𝐰𝐋𓆪 ᭄ Se kahkar Teri watt lagva dunga 🥺❤️", threadID);
   };

if ((event.body.toLowerCase() == "nahi") || (event.body.toLowerCase() == "Nahi") || (event.body.toLowerCase() == "Na") || (event.body.toLowerCase() == "na") || (event.body.toLowerCase() == "ni")) {
     return api.sendMessage("Na na karte ho har bat me utha le jaunga kisi din jabardasti  😾", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };
  
if ((event.body.toLowerCase() == "bot bacha") || (event.body.toLowerCase() == "ammu jawn") || (event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "bebfa bot") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("jaan love you bhut sara🥺❤️", threadID);
   };


if ((event.body.toLowerCase() == "fight karte ho") || (event.body.toLowerCase() == "fyter ho") || (event.body.toLowerCase() == "juthe") || (event.body.toLowerCase() == "fyt ho gyi he") || (event.body.toLowerCase() == "fight me aja")) {
     return api.sendMessage("jab dekho tab fyt fyt ga*d me ghus jayegi fyt agar saurabh ji ko bata diya mene ye sab", threadID);
   };

if ((event.body.toLowerCase() == "saurabh sir") || (event.body.toLowerCase() == "saurabh bhai") || (event.body.toLowerCase() == "saurabh sun") || (event.body.toLowerCase() == "saurabh kha ho") || (event.body.toLowerCase() == "nobita sun")) {
     return api.sendMessage("Boss Ko Kyu bula rahe ho mujhe batao main hun na 🙂", threadID);
   };

if ((event.body.toLowerCase() == "Gandu") || (event.body.toLowerCase() == "chumtiya") || (event.body.toLowerCase() == "chutiya") || (event.body.toLowerCase() == "gand de do") || (event.body.toLowerCase() == "fuck you")) {
     return api.sendMessage("esa gand me danda marunga na 7 ganam tak gol gol ghumega", threadID);
   };

if ((event.body.toLowerCase() == "Jai Shree Ram") || (event.body.toLowerCase() == "Ram Ram") || (event.body.toLowerCase() == "ram ram bhai") || (event.body.toLowerCase() == "gand de do") || (event.body.toLowerCase() == "ram ram bot")) {
     return api.sendMessage("Jai Shree Ram ❤️", threadID);
   };


if ((event.body.toLowerCase() == "Jai Shree Krishna") || (event.body.toLowerCase() == "Radhe Radhe") || (event.body.toLowerCase() == "jai shree krishna") || (event.body.toLowerCase() == "radhe radhe") || (event.body.toLowerCase() == "radhe radhe ❤️")) {
     return api.sendMessage("Jai Shree Krishna 🤗❤️", threadID);
   };


  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
   };

if ((event.body.toLowerCase() == "ammu bacha") || (event.body.toLowerCase() == "ammu jawn") || (event.body.toLowerCase() == "ammu") || (event.body.toLowerCase() == "Ammu") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("ammu jaan love you bhut sara🥺❤️", threadID);
   };

if ((event.body.toLowerCase() == "love you baby") || (event.body.toLowerCase() == "love you jawn") || (event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "kab tak sath ho") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("jawn me hamesa aapke sath hun 😘", threadID);
   };

   if ((event.body.toLowerCase() == "sad hu") || (event.body.toLowerCase() == "mood off")) {
     return api.sendMessage("Why are you  sad  everyone love you don't worry <3", threadID);
   };

   if ((event.body.toLowerCase() == "ye bot kon add kiya") || (event.body.toLowerCase() == "bot kisne add kiya ")) {
     return api.sendMessage("Saurabh thakur laye mujhe Rahu ya jau yha se😾", threadID);
   };

if ((event.body.toLowerCase() == "pagal") || (event.body.toLowerCase() == "pagal bot") || (event.body.toLowerCase() == "paglu") || (event.body.toLowerCase() == "pgl") || (event.body.toLowerCase() == "hehe")) {
     return api.sendMessage("pagal hoge tum me to masoom bacha hun saurabh ka 🥺❤️", threadID);
   };

if ((event.body.toLowerCase() == "@† 𒄬•-※ 𓆩⃝𝐍𝐨𝐛𝐢𝐭𝐚※ .𝐌𝐚͜͡𝐰𝐋𓆪 ᭄ ༑͡༑輪†⃝⃞⸙『٭𝐱͜͡⃝ᴆ』浴 㬲 𓆤❲𝐍𝐢𝐢𝐛𝐢𝐘𝐨 ༄•𝐊𝐚 𓆩𝐂𝐫'𝐮𝐬𝐇𓆪 𝐇𝐞𝐫𝐞⸙㬲 𓆤̿❹❸ :* ;) :) ︎ :) ;*") || (event.body.toLowerCase() == "@† 𒄬•-※ 𓆩⃝𝐍𝐨𝐛𝐢𝐭𝐚※ .𝐌𝐚͜͡𝐰𝐋𓆪 ᭄ ༑͡༑輪†⃝⃞⸙『٭𝐱͜͡⃝ᴆ』浴 㬲 𓆤❲𝐍𝐢𝐢𝐛𝐢𝐘𝐨 ༄•𝐊𝐚 𓆩𝐂𝐫'𝐮𝐬𝐇𓆪 𝐇𝐞𝐫𝐞⸙㬲 𓆤̿❹❸ :* ;) :) ︎ :) ;* sun") || (event.body.toLowerCase() == "saurabh bro") || (event.body.toLowerCase() == "@† 𒄬•-※ 𓆩⃝𝐍𝐨𝐛𝐢𝐭𝐚※ .𝐌𝐚͜͡𝐰𝐋𓆪 ᭄ ༑͡༑輪†⃝⃞⸙『٭𝐱͜͡⃝ᴆ』浴 㬲 𓆤❲𝐍𝐢𝐢𝐛𝐢𝐘𝐨 ༄•𝐊𝐚 𓆩𝐂𝐫'𝐮𝐬𝐇𓆪 𝐇𝐞𝐫𝐞⸙㬲 𓆤̿❹❸ :* ;) :) ︎ :) ;* 😾") || (event.body.toLowerCase() == "saurabh yar")) {
     return api.sendMessage("Boss Ko Kyu bula rahe ho mujhe batao main hun na 🙂", threadID);
   };

if ((event.body.toLowerCase() == "jhatu") || (event.body.toLowerCase() == "jhat") || (event.body.toLowerCase() == "jhatu bot") || (event.body.toLowerCase() == "gand de") || (event.body.toLowerCase() == "teri bandi ki chut bot")) {
     return api.sendMessage("tere ko 50 group me add karke hanger marunga", threadID);
   };

if ((event.body.toLowerCase() == "bsdk") || (event.body.toLowerCase() == "Bsdk") || (event.body.toLowerCase() == "bsdk "BSDK") || (event.body.toLowerCase() == ") || (event.body.toLowerCase() == "dk boss")) {
     return api.sendMessage("Tu Bsdk Teri gand 4 din tak marunga lagatar yad rakhna aage se na bolna😾", threadID);
   };

if ((event.body.toLowerCase() == "randi") || (event.body.toLowerCase() == "rand") || (event.body.toLowerCase() == "randi ka bacha") || (event.body.toLowerCase() == "fucker boy here") || (event.body.toLowerCase() == "lode")) {
     return api.sendMessage("bsdk bot se bachchodi karega teri gand me garam sariya dal dunga 😾", threadID);
   };


if ((event.body.toLowerCase() == "suar") || (event.body.toLowerCase() == "sale") || (event.body.toLowerCase() == "sale bot") || (event.body.toLowerCase() == "sale sahab") || (event.body.toLowerCase() == "mere bete")) {
     return api.sendMessage("Bete yha se marna chalu karunga aur usa border tak gand me chappal marte le jaunga samjha😹", threadID);
   };

if ((event.body.toLowerCase() == "sun") || (event.body.toLowerCase() == "bache") || (event.body.toLowerCase() == "bachu") || (event.body.toLowerCase() == "buchu") || (event.body.toLowerCase() == "baxha")) {
     return api.sendMessage("Ye Tumahara Bacha Kese Hua 😹", threadID);
   };

if ((event.body.toLowerCase() == "chiin tapak dum dum") || (event.body.toLowerCase() == "dhum") || (event.body.toLowerCase() == "chin chapak") || (event.body.toLowerCase() == "dum dum") || (event.body.toLowerCase() == "chaina")) {
     return api.sendMessage("Ham Sabka Maksad Ek hi he Chin Chapak Dum Dum 😹", threadID);
   };

if ((event.body.toLowerCase() == "new hu") || (event.body.toLowerCase() == "new member") || (event.body.toLowerCase() == "naya hun") || (event.body.toLowerCase() == "aaj hi aaya") || (event.body.toLowerCase() == "new here")) {
     return api.sendMessage("New Bacho ko chocklate free lekin chuma dena hoga 😹", threadID);
   };

if ((event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "Okk") || (event.body.toLowerCase() == "okk") || (event.body.toLowerCase() == "okh") || (event.body.toLowerCase() == "oky")) {
     return api.sendMessage("Hn okk kar kar ke pura angrez ban ja bsdk 😹", threadID);
   };

if ((event.body.toLowerCase() == "kamina 😹") || (event.body.toLowerCase() == "Oyy kamine") || (event.body.toLowerCase() == "oy kamine") || (event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "kamine")) {
     return api.sendMessage("Kamina To mujhe banane vala he mr saurabh thakur me to bas bacha hun unka 😹", threadID);
   };

if ((event.body.toLowerCase() == "jaan") || (event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "meri jaan") || (event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu 😘")) {
     return api.sendMessage("Aapki janu ko mr saurabh se bacha ke rakhna kahi le na jaye 😹", threadID);
   };

   if ((event.body.toLowerCase() == "bot go to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🌚")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("Love You too", threadID);
   };

   if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "do you love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "fuck") || (event.body.toLowerCase() == "Fuck you")) {
     return api.sendMessage("🏔️🏝️saurabh Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "saurabh here") || (event.body.toLowerCase() == "nobita here") || (event.body.toLowerCase() == "ammu here") || (event.body.toLowerCase() == "ammu hu") || (event.body.toLowerCase() == "suno na")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }