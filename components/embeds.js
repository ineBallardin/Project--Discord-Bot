const { EmbedBuilder } = require('discord.js');

const question1 = new EmbedBuilder()
			.setColor(0x6A00E4)
			.setTitle(`Você se identifica como:`)
			.setFooter('Escolha apenas uma das opções:');

const question2 = new EmbedBuilder()
			.setColor(0x6A00E4)
			.setTitle(`Quais áreas você tem interesse ou experiência:`)
			.setFooter('Escolha quantas opções quiser');

const question3 = new EmbedBuilder()
			.setColor(0x6A00E4)
			.setTitle(`Quais seus hobbies ou interesses`)
			.setFooter('Escolha quantas opções quiser');


module.exports = {
    question1,
    question2,
    question3
  };