const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 

 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
pls join and i will join in your server

https://discord.gg/UvEdzHq

joined info-selfie
! Selfie.                             
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

pls join and i will join in your server

https://discord.gg/UvEdzHq

joined info-selfie
! Selfie.                             
**`)
}).catch(console.error)
})





client.login(process.env.BOT_TOKEN);
