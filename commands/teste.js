const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('teste')
		.setDescription('Responde com OK!'),
	async execute(interaction) {
		await interaction.reply({ content:'OK!', ephemeral: true });
		await wait(2000);
		await interaction.followUp({ content: 'OK (3x))!', ephemeral: true });
	},
};