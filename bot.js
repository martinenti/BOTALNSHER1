const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

 تبي تشتري بوت عام مثل برو بوت
بيه:
اغاني
العاب
اوامر عامه
اوامر اداريه
شغال 24 ساعه 
طول الحياه\
+ 
هديه بوت نشر شغال 24 ساعه طول الحياه
العسر 30 الف كريديت برو بوت فقط 
لو تريد كلمني
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
		      
		      
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
تبي تشتري بوت عام مثل برو بوت
بيه:
اغاني
العاب
اوامر عامه
اوامر اداريه
شغال 24 ساعه 
طول الحياه\
+ 
هديه بوت نشر شغال 24 ساعه طول الحياه
العسر 30 الف كريديت برو بوت فقط 
لو تريد كلمني
}).catch(console.error)

})
 






client.login(process.env.BOT_TOKEN);
