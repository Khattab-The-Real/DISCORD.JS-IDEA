const { RichEmbed } = require("discord.js");
const eco = require('discord-economy')
const fs = require('fs')

module.exports = {
    name: "slots",
    category: "economy",
    aliases: [],
    description: "Test your luck and earn money if your luck is on your side!",
    usage: "<amount to gamble>",
    run: async (client, message, args) => {

        
    var amount = args[0] //Coins to gamble
 
    if (!amount) return message.reply('Specify the amount you want to gamble!')
 
    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')
 
    var gamble = await eco.Slots(message.author.id, amount, {
      width: 3,
      height: 1
    }).catch(console.error)
    const embed = new RichEmbed()
    .addField('Gamble Results:', `${gamble.grid}`)
    .setColor("RANDOM")
    message.channel.send(embed)

    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)
 
     } 
  }
