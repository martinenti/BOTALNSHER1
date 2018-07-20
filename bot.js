const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 

 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏مطفر وما معك فلوس
تريد دولارات عشان تشتري بيها العاب
او اي شي 
عندي لك الحل سيرفر مضمون جدا جدا جدا جدا معي تجربت ي الشخصيه والله مضمون 
اقسم بالله لك مضمون ولو مو مضمون اخرج بس جرب
هذا السيرفر اجنبي
هذا رابط الدعوه 
اريدك تدعيلي فقط
:

https://discord.gg/tKGfub3

joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏مطفر وما معك فلوس
تريد دولارات عشان تشتري بيها العاب
او اي شي 
عندي لك الحل سيرفر مضمون جدا جدا جدا جدا معي تجربتي الشخصيه والله مضمون 
اقسم بالله لك مضمون ولو مو مضمون اخرج بس جرب
هذا السيرفر اجنبي
هذا رابط الدعوه 
اريدك تدعيلي فقط
:

https://discord.gg/tKGfub3
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})





client.login(process.env.BOT_TOKEN);
