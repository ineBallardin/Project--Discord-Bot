const { SlashCommandBuilder } = require('discord.js');
const { tempRoleId } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removerole')
		.setDescription('Remove o cargo "@chegou-agora" de todos os membros'),
	async execute(interaction) {
		const { guild = {} } = interaction;
		const guildMemberManager = guild.members;
		const fetchedMembers = await guildMemberManager.fetch();
		const filterMembers = member => member.roles.cache.has(tempRoleId);
		const totalMembersWithRole = fetchedMembers.filter(filterMembers);

		totalMembersWithRole.forEach((member, i) => {
			setTimeout(function() {
				member.roles.remove(tempRoleId);
			}, i * 1000);
		});

		await interaction.reply({ content: `O cargo temporário "**@${tempRoleId.name}**" foi removido de todos os membros`, ephemeral: true });
	},
};