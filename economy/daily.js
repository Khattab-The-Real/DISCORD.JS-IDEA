const { RichEmbed } = require("discord.js");
const eco = require('discord-economy')

module.exports = {
    name: "daily",
    category: "economy",
    aliases: [],
    description: "Gives you your daily reward.",
    usage: "",
    run: async (client, message, args) => {
    
        var output = await eco.Daily(message.author.id)
        //output.updated will tell you if the user already claimed his/her daily yes or no.
     
        if (output.updated) {
     
          var profile = await eco.AddToBalance(message.author.id, 100)
          message.reply(`You claimed your daily money successfully! You now own $${profile.newbalance}.`);
     
        } else {
          message.channel.send(`Sorry, you already claimed your daily money!\nBut no worries, over the time **${output.timetowait}** you can get your daily reward again!`)
        }
    }
}