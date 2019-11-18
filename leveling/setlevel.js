const { RichEmbed } = require("discord.js");
const leveling = require('discord-leveling')

module.exports = {
    name: "setlevel",
    category: "leveling",
    aliases: [],
    description: "sets a user's level MOD'S",
    usage: "<amount of levels>",
    run: async (client, message, args) => {
        var amount = args[0]
        var user = message.mentions.users.first() || message.author
        var output = await leveling.SetLevel(user.id, amount)

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.reply("❌ You do not have permissions to manage your current xp! please contact a mod about this!")
                .then(m => m.delete(5000));
        }

        var embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`New level set for ${user.tag}`)
        .setDescription(`Hey ${user.tag}! You now have ${amount} levels!`)
        
        message.channel.send(embed)

	    }
    }

