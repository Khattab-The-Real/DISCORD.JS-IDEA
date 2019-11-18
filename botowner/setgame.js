const { RichEmbed } = require("discord.js");
const ownerID = "583022139792162915"; 

module.exports = {
    name: "setgame",
    category: "botowner",
    aliases: [],
    description: "Sets the game of the bot (OWNER ONLY!)",
    usage: "<game>",
    run: async (client, message, args) => {
        if(message.author.id !== ownerID) return message.reply("YOU... ARE... NOT... THE... BOT... OWNER...")


        if(args.length < 0){
            message.channel.send("no game specified");
            return;
        }
    
        var gameName = "";
        for(var i = 1; i < args.length; i++){
            gameName += args[i] + " ";
        }
        client.user.setActivity(gameName)
            .then(user => console.log("--> Game set: " + gameName + `by ${message.author.username}`))
            .catch(console.error);
    }
}