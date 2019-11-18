const { RichEmbed } = require("discord.js");
const leveling = require('discord-leveling')

module.exports = {
    name: "profile",
    category: "leveling",
    aliases: ["level", "exp"],
    description: "Displays your Current level",
    usage: "",
    run: async (client, message, args) => {        
        
        var user = message.mentions.users.first() || message.author
        var output = await leveling.Fetch(user.id)
        
        const embed = new RichEmbed()
         .setTitle(`${user.tag}'s Profile`)
        .setColor("RANDOM")
        .addField("Level:", `Your current level is **${output.level}**`)
        .addField("XP:", `Your current xp is **${output.xp}** xp!`)

         message.channel.send(embed)
      }
  	}