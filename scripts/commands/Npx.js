module.exports.config = {
  name: `${global.config.PREFIX}`, 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran Ahmed_X_Mahabub Rahman",
  description: "example",
  prefix: false,
  category: "Fun", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n- জীবনে এমন বন্ধু থাকা দরকার.!\n\n - যেনো বিপদে আপদে পাশে পাওয়া যায়..!❤️🥀\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n..! ❣️🥀𝗜 𝘄𝗶𝘀𝗵—🦋—🥀—😇\n\n  ~ কেউ যদি আমাকে হারানোর ভয় পেতো..!😌\n\n 𝗜 𝗽𝗿𝗼𝗺𝗶𝘀𝗲 — 🤞🍒\n\n  ~ তাকে সবটা দিয়ে আগলে রাখতাম..!!!😇❤️🤦‍♂️\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n- শখের বয়সে টাকার অভাব থাকে 🙂💔\n\n- তখন পাশে নারী ওহ্ থাকে না 😅\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\nপ্রিয় মানুষটার কথা ভাবতে ভাবতে হঠাৎ হেসে ফেলার অনুভূতি টা সুন্দর!'🖤🌸\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n︿🦋🌺___ I ωish ..\n\n___ღღ||- একদিন কেউ এসে বলবে🙂🥀🍁\n\n࿐প্রিয়__!!🙂 ༆❀--তোমাকে!!মেনে!!নিতে!!নয়,, মানিয়ে!! নিতে!!চাই'',,,,༆🙃🦋\n\n ༆--তোমার!!মতো অন্য!! কাউকে!! না!!🙂 শুধু!! তোমাকে!!চাই--❀༆😇🤍 --🖤🤍--  \n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",   
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n___🐰✨🍒___\n\n -:<🌸)- 𝐈 𝐄𝒙𝒑𝒆𝒄𝒕 𝐀 𝐋𝒊𝒕𝒕𝒍𝒆 𝐓𝒐𝒐 𝐌𝒖𝒄𝒉''🙃\n\n``আমি একটু বেশিই আশা করে ফেলি-😊💔\n\n.🌻🐰\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",     
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n⎯͢⎯⃝♡-𝘿𝙤𝙚𝙨 𝙨𝙢𝙞𝙡𝙞𝙣𝙜 𝙢𝙖𝙠𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙃𝙖𝙥𝙥𝘆____ღ۵\n♡-Does smiling make people Happy____\n𝙎𝙤𝙢𝙚 𝙡𝙖𝙪𝙜𝙝 𝙖𝙣𝙙 𝙥𝙚𝙤𝙥𝙡𝙚 𝙙𝙞𝙚 🥀😅🪽\n\n♡-Does smiling make people Happy____\n♡-Does smiling make people⎯͢⎯⃝হাসলেই কি মানুষ সুখী হয়.🥹\nকিছু কিছু হাসিতেও মানুষের মৃত্যু হয়..! 💔🥀😅♡ \n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",    
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🏵️🥀 চাইলেই কি ধরে রাখা যায় !!🥀🌻\n         ☘️🥀 যদি সে থাকতে না চায় 🥀\n\n 🌻🥀 কবি বলেছেন 🥀🌺\n\n                    🏵️🥀 বেঁধে রেখে লাভ নাই🥀🌺\n🌼🥀 উড়তে দিয়ে দেখো 🥀🌻\n\n🥀 ~♡☆  দিন শেষে যদি ফিরে আসে ♡🥀\n         🏵️🥀 তাহলে আগলে রাখো 🥀🌺\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n︵🦋💖✨🌸🤞\n\n___ღ༎- তুমি গল্প হয়েও গল্প না ❤️🖤\n\n            তুমি সত্যি হয়েও কল্পনা 🖤🥀\n\n<-🦋🔐✨🐰->3\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n-!<'𝙩𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚'-''🌈🤍🦋🍒\n\n \__মন থেকে ভালোবাসা পূর্ণতা পাক, 💖\n\nনাটকীয় ভালোবাসা থেকে মানুষ মুক্তি পাক!🙂🌸✨🔐\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n︵🥺💖\n•\n\n- কারো গ্যালারিতে থাকা 𝐈𝐭'𝐬 𝐍𝐨𝐫𝐦𝐚𝐥༉🖤🦋\n\n- কিন্তু কারো মোনাজাতে থাকা ভাগ্যের ব্যাপার︵😻✨ \n•\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n─༅༎•🌺ব্যস্ত এই শহর জুড়ে🌸༅༎•─\n\n অবিশ্বাসের ঢেউ\n\n ─༅༎•🥀🌺 সবাই বলে সাথে আছি..  ༅༎•🥀🌺\n\n'    পাশে থাকে না কেউ'\n\n ─༅༎•🌺🌸༅༎•─\n\n •🖤🍒💚\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋তার প্রতি নেই কোন অভিযোগ🙂\n\nসে যাকে ভালোবাসে তারেই হোক🙂💔\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n•\n\n-আলোর খোঁজ করতে গিয়ে- অন্ধকারে হারিয়ে গেছি আমি 😅💔\n\n•\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n –🤍💚🥀࿐\n\n ____''জী'বনে এমন একজনকে বড্ড 🌺 প্রয়োজন...!🤗🦋\n\n____''যে বলবে সবকিছুর পরও আমি তোমাকেই চাই.🌸🥀🙂.\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n_⎯⃝ 😊🖤🦋😅\n\n⎯͢⎯⃝𝙤𝙣𝙡𝙮- 𝙩𝙝𝙤𝙨𝙚-𝙬𝙝𝙤- 𝙪𝙣𝙙𝙚𝙧𝙨𝙩𝙖𝙣𝙙-𝙩𝙝𝙚-𝙥𝙖𝙞𝙣-𝙤𝙛-𝙣𝙤𝙩- 𝙜𝙚𝙩𝙩𝙞𝙣𝙜-! 𝙬𝙝𝙤 -𝙖𝙧𝙚-𝙝𝙚𝙡𝙥𝙚𝙨𝙨- 𝙖𝙛𝙩𝙚𝙧- 𝙡𝙤𝙫𝙞𝙣𝙜-𝙩𝙝𝙚-𝙨𝙠𝙮__🥀💔\n\n ⎯͢⎯⃝না পাওয়ার! কষ্ট! শুধু!তারাই! বোঝে''! যারা! আকাশ!পরিমাণ! ভালোবেসে! অসহায়!হয়ে! ফিরেছে..!🥀💔😅\n\n °।                    । ।\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\nতুমি আবার জন্ম নিও,\n\n আমি আবার তোমার প্রেমে পড়বো! 🙂🌼🥀 \n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",    
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🦋তুমি সাফল্য খুঁজে নাও ..!\n\nভালোবাসা তোমাকে খুঁজে নিবে ''এটাই বাস্তবতা🌸\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",     
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n__ ♡︎ '''-ˢᵘⁿᵒᵒᵒᵒ🥺🩷✨\n\n-  𝗭𝗶𝗻𝗗𝗲𝗚𝗶  𝗠𝗲𝗬 𝗲𝗞 𝗧𝘂𝗠 𝗛𝗶 𝗛𝗢𝗼𝗼💗\n\n- 𝗷𝗶𝗦'𝘀𝗘𝗲 𝗕𝗮𝗧 𝗸𝗔𝗿𝗞𝗲 𝗗𝗶𝗟 𝗸𝗢𝗼 𝗦𝘂𝗞𝘂𝗻 𝗠𝗶𝗟𝘁𝗲𝗵𝗮𝗬☺️🔐🩷....\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",     
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n—😇,,,𝗸𝗮𝗯𝗵𝗶 𝘀𝘂𝗻 𝘁𝗼𝗵 𝘇𝗮𝗿𝗮,𝗷𝗼 𝗺𝗮𝗶𝗻 𝗸𝗵𝗲𝗻𝗮 𝘀𝗮𝗸𝗮,,_•🫣🥀\n\n—! 🎀,,𝗺𝗲𝗿𝗶 𝗱𝘂𝗻𝗶𝘆𝗮 𝘁𝘂𝗺𝗵𝗶 𝗵𝗼,,,💖👉🏻👈🏻____\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n_শহর জুড়ে বৃষ্টি নামুক🌧️☔,\n\n তুমি খুঁজে নিও ঠাঁই!♡!!-🩷🌻\n\n প্রতিটা বৃষ্টির ফোঁটায় লেখা থাকুক..-!\n\nআমি শুধু তোমাকেই চাই☺️🫶\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\nযতবার ভেবেছি ভুলে যাব😅💔,\n\n তারও বেশি মনে পড়ে যায়!🖤\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",     
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🍂🌸\n\n__۵ღরেখে দেন না আমাকে আপনার করে\n\n আমি থাকতে চাই আপনার পুরো শহর'টা জুড়ে...༊☺️🦋\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n❤️‍🩹🌼🍒  _ হাঁজাঁরোঁ অঁশাঁন্তিঁরঁ ভিঁড়েঁ..!!❤️🌼\n\n🐰🍒🌼 `তুমি` আঁমাঁর এঁকঁমাঁএঁ মাঁনঁসিঁকঁ শাঁন্তিঁ..!!😔❤️‍🩹\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",  
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉 (✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🐰🍒শী্ঁত্ঁ শী্ঁত্ঁ ভা্ঁব্ঁ কি্ঁসে্ঁর্ঁ জা্ঁনি্ঁ এ্ঁক্ঁটা্ঁ অ্ঁভা্ঁব্ঁ_🙊🙈\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :  𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n--ღღ🦋🖤✨-\n\n--𝐋𝐨𝐯𝐞 𝐢'𝐬 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 __☺️🦋✨\n\n--𝐥𝐟 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞 𝐢𝐬 𝐫𝐢𝐠𝐡𝐭..!🦋🍁💫\n\n-ভালোবাসা সুন্দর ___,🖤🦋\n\n- যদি প্রিয় মানুষটি সঠিক হয়....!☺️🖤🙂✨🌼\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷) ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n❥◎⃝! শূন্যতায় ভাসি🙃 \n\n❥কখনো হাসি -😁💚_আবার কাঁদি!-😅\n\n❥বেলা শেষে 🌌শূন্যতায় জড়িয়ে ও পূর্ণতা খুঁজি😊❤\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n ❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n\n___💚__পৃথিবীটা আজ...\n\nমিথ্যে মায়াতে ভরা...!💚🌺\n\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\n\nঅভিনয়ের সেরা...👎🥀\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n💜🔐🌈 ___\n\n- 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨\n\n🍁_সবাই তো খুশি চায়_আর আমি প্রতিটা খুশিতে তোমাকে চাই⚜️— -!!-) 😊🖤\n\n___💜🔐🌈\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n>🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\n\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤🐰\n\n💖🦋\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:༅༎💙🦋\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨\n\n😽︵۵মানুষ! হচ্ছে!বৃষ্টির!মতো!Life a ! অনেক মানুষ !আসবে!অনেক মানুষ !যাবে!💔🥰\n\n:༅༎💙🦋 সঠিক!মানুষটা!ঠিকই!ছায়া!হয়ে!পাশে!থাকবে -/ ఌ︵💚🌻\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:(-𝙄 𝙖𝙢 𝘼𝙙𝙙𝙞𝙘𝙩𝙚𝙙 𝙏𝙤👀🙈\n\n_')𝙈𝙮 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙋𝙚𝙧𝙨𝙤𝙣..!\n\n🐰🦋 -(^আমি আমার প্রিয় মানুষটার প্রতি আসক্ত >!💖🔐🍭)😇\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷)",

"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭\n\n🐰' —'পারফেক্ট' কাউকে পাবার থেকে'কাউকে' পারফেক্ট' বানিয়ে নিতে পারাটা' বড় অর্জন'--)🌼💜\n\n___🍒🖇️✨___\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝙈𝘼𝙃𝘼𝘽𝙐𝙍_𝙭_𝙍𝘼𝙃𝘼𝙈𝘼𝙉(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n°🐹💙🍒\n\n_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n°\n\n__!!☁️✨🌺আপনাকে পাওয়ার দাবি!আমি মৃত্যুর পরও ছাড়বো না,,🔐💚 🙂\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝕄𝔸ℍ𝔸𝔹𝕌ℝ(✷‿✷)"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=19d49_0kVksANWK_dWhijJYciyTL28NSy","https://drive.google.com/uc?id=19xCcjqVnxiNLlEzpQndWgZsyHaFAqEni","https://drive.google.com/uc?id=1A36v6oQ-uROruOQQuOAfo1CKRg_MLSVx","https://drive.google.com/uc?id=1A4IncrmSG5U7EOEjo4uziqRDQbGs4gH","https://drive.google.com/uc?id=1A0PPm5-Nr_K819dURVugnHHXGfAPt2HN","https://drive.google.com/uc?id=1A8vd4U0cB0nvjBp0aWtVpu_Mqm14AVvN","https://drive.google.com/uc?id=19hYub5lP9tesXzDwOA9Rp7xPHnyr4pdy","https://drive.google.com/uc?id=18J-oIUff8gT7yf-HhRh_IWhdlF6GZtBP","https://drive.google.com/uc?id=17obwe8njLbpUlrib-wWUH7jkF138FYvx","https://drive.google.com/uc?id=186rJxO247aM-u87sJH59iLU1QDDhbe3B","https://drive.google.com/uc?id=189r_fv3rB2eJ2b49QyEaB1sgLYtyeyd-","https://drive.google.com/uc?id=14rPSaCJzfNa8cc2pM-YJvE16bZVlH7pV","https://drive.google.com/uc?id=17585edZNLDIYMbxZzYy3Xtqny1xWL9Ud","https://drive.google.com/uc?id=178dOeRg7vxjkX3EKBgg9z-c82Vj24_fn"
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
