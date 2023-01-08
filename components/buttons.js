const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const btnQuestion1 = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setCustomId('homem')
                .setLabel('🚹 | Homem')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('mulher')
                .setLabel('🚺 | Mulher')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('LGBTQIAP+')
                .setLabel('🏳️‍🌈 | LGBTQIAP+')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('nao-informar')
                .setLabel('❌ | Prefiro não informar')
                .setStyle(ButtonStyle.Primary),
        ])

const btnQuestion2 = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setCustomId('agilidade')
                .setLabel('♻〡agilidade')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('backend')
                .setLabel('🔧〡backend')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('dados')
                .setLabel('📈〡dados')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('frontend')
                .setLabel('🚪〡frontend')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('gestão')
                .setLabel('⚡〡gestão')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('infra')
                .setLabel('🧱〡infra')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('mobile')
                .setLabel('📱〡mobile')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('qa')
                .setLabel('🔗〡qa')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('ux-ui')
                .setLabel('🎨〡ux-ui')
                .setStyle(ButtonStyle.Primary),
        ])
    

    const btnQuestion3 = new ActionRowBuilder()
            .addComponents([
                new ButtonBuilder()
                    .setCustomId('livros-carreira')
                    .setLabel('Leituras que me ajudem a decolar na carreira')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('livros-geral')
                    .setLabel('Livros sobre qualquer assunto')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('challenges')
                    .setLabel('Resolver desafios de lógica de programação')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('eventos-comunidade')
                    .setLabel('Participar das eventos da comunidade (AMA, Papo-cabeça, etc...)')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lives')
                    .setLabel('Assistir a lives')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('network')
                    .setLabel('Fazer network')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ingles')
                    .setLabel('Aprender ou aprimorar meu inglês')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gamer')
                    .setLabel('Adoro games')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('carreira')
                    .setLabel('Adoro saber sobre carreira e desenvolver novas habilidades')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('investimentos')
                    .setLabel('Gosto de falar ou aprender sobre investimentos')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('musica')
                    .setLabel('Curto ouvir uma boa música')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('esportes')
                    .setLabel('Amo falar sobre esportes')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('animais')
                    .setLabel('Adoro animais')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('oportunidades')
                    .setLabel('Ficar por dentro de novas oportunidades de emprego')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cupons')
                    .setLabel('cupons de desconto')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('filmes-series')
                    .setLabel('assistir filmes e séries')
                    .setStyle(ButtonStyle.Primary),
            ])

module.exports = {
    btnQuestion1,
    btnQuestion2,
    btnQuestion3,
  };