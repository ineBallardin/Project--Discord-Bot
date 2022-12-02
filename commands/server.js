const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servidor')
		.setDescription('Retorna informações deste servidor.'),
	async execute(interaction) {
		await interaction.reply(`Este é o servidor ${interaction.guild.name} e ele tem ${interaction.guild.memberCount} membros.`);
	},
};