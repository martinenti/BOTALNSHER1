const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

تريد بوت شامل بيه كل شي اغاني العاب اوامر عامه اوامر اداريه ومعاه بوت نشر مجاني شغال 24 ساعه ب 30 الف كريديتس برو بوت ؟؟

**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

تريد بوت شامل بيه كل شي اغاني العاب اوامر عامه اوامر اداريه ومعاه بوت نشر مجاني شغال 24 ساعه ب 30 الف كريديتس برو بوت ؟؟

joined info-selfie
! Selfie.                              
**`) 
}).catch(console.error)
})












client.login(process.env.BOT_TOKEN);
