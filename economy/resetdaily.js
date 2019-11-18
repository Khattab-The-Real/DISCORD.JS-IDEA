const { RichEmbed } = require("discord.js");
const eco = require('discord-economy')

module.exports = {
    name: "resetdaily",
    category: "economy",
    aliases: [],
    description: "Resets your daily rewards time!",
    usage: "",
    run: async (client, message, args) => {

        var output = await eco.ResetDaily(message.author.id)
 
        message.reply(output) //It will send 'Daily Reset.'
	}
}