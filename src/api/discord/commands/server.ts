// @ts-ignore
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Helps manage the server')
        .addSubcommand((subcommand: any) =>
            subcommand.setName('status')
                .setDescription('Informs if the server is ON or OFF')
        )
    ,
    async execute(interaction: any) {
        if (interaction.options.getSubcommand() === 'status') {
            return await interaction.reply('Current status is OFF');
        }

        return await interaction.reply('Server functionality not yet linked to DigitalOcean');
    },
};