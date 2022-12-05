const { SlashCommandBuilder } = require('discord.js');

/* module.exports = {
	data: new SlashCommandBuilder()
		.setName('usuario')
		.setDescription('Retorna informações de um usuário.'),
	async execute(interaction) {
		await interaction.reply(`Comando executado por ${interaction.user.username}, que ingressou em ${interaction.member.joinedAt}.`);
	},
};*/

module.exports = {
	data: new SlashCommandBuilder()
		.setName('temprole')
		.setDescription('Atribui cargo temporário para o usuário'),
	async execute(interaction) {
		const date = new Date;
		const m = date.getMonth;

		const guildMemberManager = interaction.guild.members;
		guildMemberManager.fetch().then(fetchedMembers => {
			const totalMembers = fetchedMembers.filter(member => member.joinedAt.getMonth >= m && member.joinedAt <= m);
			console.log(totalMembers);
		});

		await interaction.reply({ content: 'ok', ephemeral: true });
	},
};