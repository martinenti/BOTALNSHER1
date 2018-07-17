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




const botstats = {
	totalGuildsID: '468779433692758016',
	totalUsersID: '468779034302480384',
	totalChannelsID: '468779680632274963',
	
	
	
	
	client.on('guildCreate', guild => {
		
	client.channel.get(botstats.totalGuildID).setname('Total Guilds : ${client.guilds.size}');
	client.channel.get(botstats.totalUsersID).setname('Total Users : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}');
	client.channel.get(botstats.totalChannelsID).setname('Total Channels : ${client.channels.size}');
		
		
		
	);
		
		
	client.on('guildDelete', guild => {
	
	
	client.channel.get(botstats.totalGuildID).setname('Total Guilds : ${client.guilds.size}');
	client.channel.get(botstats.totalUsersID).setname('Total Users : ${client.guilds.reduce((a, g) => a + g.memberCount, 0)}');
	client.channel.get(botstats.totalChannelsID).setname('Total Channels : ${client.channels.size}');
	
	
	
	
	
	
	);


client.login(process.env.BOT_TOKEN);
