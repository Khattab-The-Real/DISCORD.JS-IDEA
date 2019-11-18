const { RichEmbed } = require("discord.js");
const eco = require("discord-economy");


module.exports = {
    name: "balance",
    category: "economy",
    aliases: ["money", "vault", "piggy-bank", "paypal", "wallet"],
    description: "Shows your current balance",
    usage: "",
    run: async (client, message, args) => {
    var user = message.mentions.users.first() || message.author
    var output = await eco.FetchBalance(user.id)

    const embed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`${user.tag}'s Balance`)
    .addField("Balance:", `${user.tag} owns $${output.balance}`)
    
        message.channel.send(embed)
    }
}