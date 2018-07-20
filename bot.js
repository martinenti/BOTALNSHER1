const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
هذا افضل سيرفر يعطيك دولارات مقابل الدعوه

لو تريد دولارات تفضل انضم


واللله ما بضحك عليك

هذا الرابط


https://discord.gg/QDgUaQZ

}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
                      
هذا افضل سيرفر يعطيك دولارات مقابل الدعوه

لو تريد دولارات تفضل انضم


واللله ما بضحك عليك

هذا الرابط


https://discord.gg/QDgUaQZ
                      
}).catch(console.error)
})












client.login(process.env.BOT_TOKEN);
