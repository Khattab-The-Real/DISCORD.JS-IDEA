const { RichEmbed } = require("discord.js");
const math = require("mathjs")

module.exports = {
    name: "calculator",
    category: "other fun",
    aliases: ["calc"],
    description: "",
    usage: "<thing you want to solve (e.x : 5 inches to cm)>",
    run: async (client, message, args) => {

        if(!args[0]) return message.reply('Please give me a calculation to solve');

        var resp;
        try {
            resp = math.eval(args.join(' '));
        }catch (e) {
            return message.channel.send('Please put a valid calculation')
        }
        const embed = new RichEmbed()
            .setColor("#00ffff")
            .setTitle('Math Calculation')
            .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
            .addField('Calculation', `\`\`\`js\n${resp}\`\`\``)

        message.channel.send(embed);
	}
}