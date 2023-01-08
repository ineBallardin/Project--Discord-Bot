const { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, EmbedBuilder, Events } = require('discord.js');
const { question1, question2, question3 } = require('../components/embeds')
const { btnQuestion1, btnQuestion2, btnQuestion3 } = require('../components/buttons')

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member, interaction) {

		const { guild: { channels: { cache = [] } } } = member;

		const channelId = '991058223064838157'
		const channel = cache.find(({ id }) => id === channelId);
		
		if (!channel) {
			console.log(`${channelId} not found`);
			return;
		}

		const buttonStart = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('botaoComecar')
					.setLabel('COMEÇAR!')
					.setStyle(ButtonStyle.Primary),
			);

		const dmChannel = await member.createDM(true)

		const sentMessage = await member.send({ components: [buttonStart] })
		.then(member.send({ embeds: [question1], components: [btnQuestion1] }))
		.then(member.send({ embeds: [question2], components: [btnQuestion2] }))
		.then(member.send({ embeds: [question2], components: [btnQuestion2] }));
				
		console.log(`get sentmessage ${sentMessage}`);


		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel('Acessar DM')
					.setStyle(ButtonStyle.Link)
					.setURL(`${dmChannel.url}`)
				);
		
		const embed = new EmbedBuilder()
			.setColor(0x6A00E4)
			.setTitle(`:purple_heart: Que bom ter você por aqui, ${member.user.username}!`)
			.setDescription('Clique no botão abaixo para montar seu perfil lá na sua DM! :wink:');

		await channel.send({ embeds: [embed], components: [row] });
	},
};