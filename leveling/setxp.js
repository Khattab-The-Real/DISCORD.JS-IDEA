const { RichEmbed } = require("discord.js");
const leveling = require('discord-leveling')

module.exports = {
    name: "setxp",
    category: "leveling",
    aliases: [],
    description: "Sets your current XP to an ammount that is chosen MOD'S",
    usage: "<amount of xp>",
    run: async (client, message, args) => {
        var amount = args[0]
        var user = message.mentions.users.first() || message.author
        var output = await leveling.SetXp(user.id, amount)

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.reply("❌ You do not have permissions to manage your current xp! please contact a mod about this!")
                .then(m => m.delete(5000));
        }
        
        var embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`New xp set for ${user.tag}`)
        .setDescription(`Hey ${user.tag}! You now have ${amount} xp!`)

        message.channel.send(embed)
	}
}