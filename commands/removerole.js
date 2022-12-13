const { SlashCommandBuilder } = require('discord.js');
const { tempRoleId } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removerole')
		.setDescription('Remove o cargo "@chegou-agora" de todos os membros'),
	async execute(interaction) {
		const { guild = {} } = interaction;
		const role = guild.roles.cache.get(tempRoleId);
		const guildMembers = guild.members.cache;

		guildMembers.forEach(member => {
			member.roles.remove(tempRoleId);
		});

		await interaction.reply({ content: `O cargo temporário "@${role.name}" foi removido de todos os membros`, ephemeral: true });
	},
};