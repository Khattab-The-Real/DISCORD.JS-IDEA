const { RichEmbed } = require("discord.js");
const eco = require('discord-economy')
const fs = require('fs')

module.exports = {
    name: "work",
    category: "economy",
    aliases: ["job"],
    description: "gives you a Job so you can earn some money :)",
    usage: "",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setTitle("!!WARNING!!")
        .addField("PLEASE READ THE FOLLOWING MESSAGE:", `There is a 50% chance that you will not earn money. so do not start reporting to me that there is an error. it is a 50% chance you will fail your Job. and that is why you need to study more kids!`)
        message.channel.send(embed)

        var output = await eco.Work(message.author.id)
    //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.
    if (output.earned == 0) return message.reply('Awh, you did not do your job well so you earned nothing!')
    message.channel.send(`${message.author.username}
    You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
    You now own :money_with_wings: ${output.balance}`)
	}
}