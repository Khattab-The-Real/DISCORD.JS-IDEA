const { RichEmbed } = require("discord.js");
const eco = require('discord-economy')
const fs = require('fs')

module.exports = {
    name: "leaderboard",
    category: "economy",
    aliases: [],
    description: "displays the economy leaderboard for the top 3 (3300+ coins required )",
    usage: "[userMention search]",
    run: async (client, message, args) => {

          //If you use discord-economy guild based you can use the filter() function to only allow the database within your guild
    //(message.author.id + message.guild.id) can be your way to store guild based id's
    //filter: x => x.userid.endsWith(message.guild.id)
 
    //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
    if (message.mentions.users.first()) {
 
        var output = await eco.Leaderboard({
          filter: x => x.balance > 3300,
          search: message.mentions.users.first().id
        })
        message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} on my leaderboard!`);
   
      } else{
   
        eco.Leaderboard({
          limit: 3, //Only takes top 3 ( Totally Optional )
          filter: x => x.balance > 3300 //Only allows people with more than 3300 balance ( Totally Optional )
        }).then(async users => { //make sure it is async
   
          if (users[0]) var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
          if (users[1]) var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
          if (users[2]) var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place
   
          const embed = new RichEmbed()
          .addField("🥇First Place", `${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}`)
          .addField("🥈Second Place", `${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}`)
          .addField("🥉Third Place", `${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}`)
          .setFooter("Economy Leaderboard | Top 3")
           .setColor("GREEN")
          message.channel.send(embed)

	            })
            }
         }
    }