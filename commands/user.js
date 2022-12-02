const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('usuario')
		.setDescription('Retorna informações de um usuário.'),
	async execute(interaction) {
		await interaction.reply(`Comando executado por ${interaction.user.username}, que ingressou em ${interaction.member.joinedAt}.`);
	},
};