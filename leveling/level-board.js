const { RichEmbed } = require("discord.js");
const leveling = require("discord-leveling")

module.exports = {
    name: "level-board",
    category: "leveling",
    aliases: ["xp-board"],
    description: "Displays the top 3 people with the highest level",
    usage: "[userMention (mention someone to search for them in the leaderbaord)]",
    run: async (client, message, args) => {

         //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
    if (message.mentions.users.first()) {
 
        var output = await leveling.Leaderboard({
          search: message.mentions.users.first().id
        })
        message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`);
   
        //Searches for the top 3 and outputs it to the user.
      } else {
   
        leveling.Leaderboard({
          limit: 3 //Only takes top 3 ( Totally Optional )
        }).then(async users => { //make sure it is async
   
          if (users[0]) var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
          if (users[1]) var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
          if (users[2]) var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place
   
         var embed = new RichEmbed()
         .addField("🥇First Place", `${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].level || 'None'} : ${users[0] && users[0].xp || 'None'}`)
         .addField("🥈Second Place", `${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].level || 'None'} : ${users[0] && users[0].xp || 'None'}`)
         .addField("🥉Third Place", `${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].level || 'None'} : ${users[0] && users[0].xp || 'None'}`)
         .setFooter("Economy Leaderboard | Top 3")
         .setColor("RANDOM")
            message.channel.send(embed)
        })
      }
	}
}

