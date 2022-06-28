const { Client, Intents } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] });

const prefix = "!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message: any) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'hi')
        return message.reply('Hello there!');

    if (command === 'server')
        return message.reply('No service yet attached for that');
});

client.login(process.env.DISCORD_BOT_TOKEN);