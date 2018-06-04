const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame('Bot is online');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if(message.content == '!informatieteg') {

        let botembed = new Discord.RichEmbed()
        .setDescription("informatie over teg [TheExplosiveGuy]")
        .setColor("#365b96")
        .addField("Alexander:", "Alexander is zelf 12 jaar oud en is YouTube begonnen omdat hij dat leuk leek.")
        .addField("TEG Zelf:", "TheExplosiveGuy is een gaming channel waarop verschillende games worden geupload zoals Fortnite,Minecraft en veel meer dingen.");
        
        return message.channel.send(botembed);
    }
  if(cmd === `!report`){
  
        
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user.");
      let rreason = args.join(" ").slice(22);
  
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", rreason);
  
      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
  
  
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
  
      return;
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welkom, ${member}, op de server!`);
  });

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANNAGE_MESSAGES")) return message.reply("oof.");
    if(!args[0]) return message.channel.send("oof");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`cleared ${args[0]}$ messages`).then(msg => msg.delete(1000));
    })
}

module.exports.help = {
    name: "clear"
}

client.login(process.env.BOT_TOKEN);
