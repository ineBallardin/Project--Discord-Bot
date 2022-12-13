const { Events } = require('discord.js');
const { tempRoleId } = require('../config.json');

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member) {
		const ROLE = member.guild.roles.cache.find(
			(role) => role.id === tempRoleId,
		);

		if (!member.user.bot) {
			member.roles.add(ROLE);
		}

		console.log(`O cargo ${ROLE.name} foi adicionado ao usuário ${member.user.tag}`);
	},
};