const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('temprole')
		.setDescription('Atribui cargo temporário para o usuário'),
	async execute(interaction) {
		const currentMonth = new Date().getMonth();

		const { guild = {} } = interaction;
		const guildMemberManager = guild.members;
		const fetchedMembers = await guildMemberManager.fetch();
		const filterMembers = member => member.joinedAt.getMonth() >= currentMonth && member.joinedAt.getMonth() <= currentMonth;
		const totalMembers = fetchedMembers.filter(filterMembers);
		console.log(totalMembers);

		await interaction.reply({ content: 'ok', ephemeral: true });
	},
};