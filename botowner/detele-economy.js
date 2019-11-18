const { RichEmbed } = require("discord.js");
const eco = require('discord-economy')
const ownerID = "583022139792162915"; 

module.exports = {
    name: "delete-economy",
    category: "botowner",
    aliases: ["$delete"],
    description: "Deletes a user from the database (complete reset in economy for that user)",
    usage: "<User>",
    run: async (client, message, args) => {
        if(message.author.id !== ownerID) return message.reply("YOU... ARE... NOT... THE... BOT... OWNER...")

        var user = message.mentions.users.first()
        if (!user) return message.reply('Please specify a user I have to delete in my database!')

        var output = await eco.Delete(user.id)
        if (output.deleted == true) return message.reply('Successfully deleted the user out of the database!')
     
        message.reply('Error: Could not find the user in database.')
    }
}

