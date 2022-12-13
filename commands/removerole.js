const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { tempRoleId } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('removerole')
		.setDescription('Remove o cargo "@chegou-agora" de todos os membros')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const { guild = {} } = interaction;
		const guildMemberManager = guild.members;
		const fetchedMembers = await guildMemberManager.fetch();
		const filterMembers = member => member.roles.cache.has(tempRoleId);
		const totalMembersWithRole = fetchedMembers.filter(filterMembers);

		totalMembersWithRole.forEach((member) => {
			member.roles.remove(tempRoleId)
				.then(() => {
					console.log(`Cargo removido de ${member.user.tag}`);
				})
				.catch(err => {
					console.log(`Oopps, algo deu ruim! \n ${err}`);
				});
		});

		await interaction.reply({ content: 'O cargo temporário "**@chegou-agora**" foi removido de todos os membros', ephemeral: true });
	},
};