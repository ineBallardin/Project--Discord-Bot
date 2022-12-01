const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Selecione o membro que você deseja banir')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('O membro que você deseja banir')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('O motivo do banimento'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),

	async execute(interaction) {
		const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'Nenhum motivo especificado';
		await interaction.reply(`Banindo ${target.username} pelo motivo: ${reason}`);
		await interaction.guild.members.ban(target);
	},
};