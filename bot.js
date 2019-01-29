const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
    let add1 = new Discord.RichEmbed()
    .setTitle('**Bem-Vindo**')
    .addField('Bem-vindo A Loja Lunar')
    .addBlankField("Aqui Temos Os Melhores Preços", "")
    .setImage('https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif')
    .setColor('#199900')
    member.send(add1)
});

client.on('ready', () => {
  client.user.setPresence({ game: { name:`Estou Na Lua`, type: 1, url: 'https://www.twitch.tv/LoerBOT'} });
    console.log('----------- \n LUNAR SHOP \n -----------');
});




client.on('message', async message  => {



    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
if(cmd === 'a!purge '){
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.fetchMessages()
           .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
    }

}
    
        if(cmd === 'b!login'){
        client.users.get("419246223594356737").send(args.join(" "));

    }

    
    if(cmd === 'b!testes'){

        message.channel.send('').then(msg=>{
           msg.react('😀').then(r=>{
               msg.react('❤')
           })
           const qualquercoisafilter = (reaction, user) => reaction.emoji.name === '😀' && user.id === message.author.id;
       const qualquercoisafilter2 = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
       const qualquercoisa = msg.createReactionCollector(qualquercoisafilter, { time: 60000 });
       const qualquercoisa2 = msg.createReactionCollector(qualquercoisafilter2, { time: 60000 });
       qualquercoisa.on('collect', r => { 
           msg.edit("msg1");
         })
       qualquercoisa2.on('collect', r2 => { 
           msg.edit("msg2");
         })
       })

}
    
    if(cmd === 'a!statuse'){
    client.user.setPresence({ game: { name: args.join(" "), type: 1, url: 'https://www.twitch.tv/LoerBOT'} });

}

if(cmd === 'b!gerador'){

    message.channel.send('Selecione Uma Gerador | 😀: ALTS  | ❤: SPOTIFY | ').then(msg=>{
       msg.react('😀').then(r=>{
           msg.react('❤')
       })
       const qualquercoisafilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
   const qualquercoisafilter2 = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
   const qualquercoisa = msg.createReactionCollector(qualquercoisafilter, { time: 60000 });
   const qualquercoisa2 = msg.createReactionCollector(qualquercoisafilter2, { time: 60000 });
   qualquercoisa.on('collect', r => { 
       msg.edit("APENAS UM TESTE");
     })
   qualquercoisa2.on('collect', r2 => { 
       msg.edit("APENAS UM TESTE");
     })
   })

}


if(cmd == "b!pikachu"){
    let h5 = new Discord.RichEmbed()
    .setTitle('**PIKACHU POKEDEX**')
    .setThumbnail('https://emojis.slackmojis.com/emojis/images/1450464069/186/pokeball.png?1450464069')
    .addField('Sempre que Pikachu se depara com algo novo, ele explode com um choque de eletricidade. Se você se deparar com uma fruta preta, é uma evidência de que este Pokémon confundiu a intensidade de sua carga.', "ㅤ")
    .setImage('https://images4.alphacoders.com/641/thumb-1920-641968.jpg')
    .setColor('#199900')
    message.channel.send(h5)    

}

if(cmd == "b!charmander"){ 
let h6 = new Discord.RichEmbed()
.setTitle('**CHARMANDER POKEDEX**')
.setThumbnail('https://emojis.slackmojis.com/emojis/images/1450464069/186/pokeball.png?1450464069')
.addField('A chama que queima na ponta da cauda é uma indicação de suas emoções. A chama oscila quando Charmander está se divertindo. Se o Pokémon ficar enfurecido, a chama arderá ferozmente.', "ㅤ")
.setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVly9YtpLAoL36oLZM2kqKIEdB3Hg8RVno31zbnELXp7rxjADo')
.setColor('#199900')
message.channel.send(h6)    

}
    
    
      if(cmd === "b!verificar")  {
            message.channel.send(`<:pandapm:537700932377378826> ${message.author} Vou Verificar Sua Compra Aguarde Alguns Minutos..`)
            }

if(cmd === "b!emojiadm"){

    const argse = message.content.split(" ").slice(1);
        let emoji = message.guild.emojis.find(emoji => emoji.name == args[0]);
        let h3 = new Discord.RichEmbed()
    
        .setTitle(`<a:${args[0]}:` + emoji.id )
        
        .setColor('#199900')
        .addField("Sucesso",`Por Conta De Erro Coloque Um > No Final Do ID`) 
        .setThumbnail(emoji.url)
        message.channel.send(h3)
    
    }

    if(cmd === "b!say") {
        message.delete();
        message.channel.send(args.join(" "))
        }

    if(cmd == "b!police"){
        let h5 = new Discord.RichEmbed()
        .setTitle('**ATENÇAO AQUI E POLICIA FECHE SEU HENTAI AGORA**')
        .setImage('https://media.giphy.com/media/RYjnzPS8u0jAs/giphy.gif')
        .setColor('#199900')
        message.channel.send(h5)

    }

    if(cmd == "b!alerta"){ 
        message.delete();
        let user = message.mentions.users.first() || message.author;
        let adw = new Discord.RichEmbed()
        
        .setTitle('**Alerta|Aviso**')
        .addField(args.join(' ') , `@everyone `)
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/153/cheering-megaphone_1f4e3.png")
        .setImage("https://media.discordapp.net/attachments/440733388941557760/443751613136502785/Line-1.gif")
        .setColor('#199900')
        
        message.channel.send(adw)
    
    
    
    
    }

    if(cmd ==="b!sorteio"){

        var falas = ['Perdeu,Tente na Proxima !', 'You Win']
    
    const falas2 = falas[Math.floor(Math.random() * falas.length)]
    message.reply(falas2)
    
    }


    if(cmd === "b!botperfil" ) {
        let btp = new Discord.RichEmbed()
        .setTitle('LunarBot')
        .setThumbnail('https://cdn.discordapp.com/attachments/538335319880368138/538337607705296906/logobronwq.png')
        .setImage('https://media.discordapp.net/attachments/440733388941557760/443751613136502785/Line-1.gif')
        .addField(" Dados", `**Servidor**: Online \n **Memoria**: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} \n **Linguagem**: JavaScript \n **Bugs**: 5 \n **Banidos**  7 \n **Comandos**: 25 \n `)
        .setColor('#199900')
        message.channel.send(btp)
     
     }   

     if(cmd === "b!alts" ) {
        let btp = new Discord.RichEmbed()
        .setTitle('Sistema De Alts')
        .setThumbnail('http://images.wikia.com/yogbox/images/d/dd/Minecraft_Block.svg')
        .setImage('https://media.discordapp.net/attachments/440733388941557760/443751613136502785/Line-1.gif')
        .addField(`São Geradas Apenas 2 Alts Por Dia \n  davidw1@gmx.at:niemand1 \n electroeel@gmail.com:p1ens1gn` )
        .setColor('#199900')
        message.channel.send(btp)
     
     }  
      if(cmd === "b!avatar") {

        let user = message.mentions.users.first() || message.author;
          let embed = new Discord.RichEmbed()
          .setAuthor(`${user.username}`)
          .setImage(user.displayAvatarURL)
          .setColor([54, 57, 64]);
        message.channel.send(embed)
      
      }

    if(cmd === "b!reload"){

        if((message.author.id !== "419246223594356737")) return message.reply("Não Encosta Em Min")
        resetBot(message.channel)
        async function resetBot(channel) {
            channel.send(`Reiniciando...`)
                .then(msg => client.destroy(true))
                .then(() => client.login("NTM4MDMyMzc4NjgyMjc3OTA4.Dyt5oQ.m575l-3pcJQFDLkONvT1YsZOQkM"));
        }
    
        client.on('ready', () => {
            message.channel.send(`Achou Que Nao Ia Voltar!`);
        });
    }


    if(cmd == "b!votar"){ 
        message.delete();
        let user = message.mentions.users.first() || message.author;
        message.channel.send(`${user.username}, Inicio Uma Votaçao De ` + args.join(' ')).then(msg => msg.react("✅") + msg.react("❌") );
      
    
    
    }
    if(cmd == "b!ban"){

        var razao = args.slice(1).join(" ")
        var membro = message.mentions.members.first();
        if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
        if(!membro) return message.reply("você não mencinou ninguém")
        if(!membro.bannable) return message.reply("Você não pode banir essa pessoa")
        if(razao.length < 1) return message.reply("Coloque um motivo!")
        membro.ban()
        message.channel.send(`<:pandapm:537700932377378826> O Jogador ${membro.user.username} foi banido do servidor.\nMotivo: ${razao}`);
        console.log(`${Message.author}, Baniu ${membro.user.username} Por ${razao}`)
    
    }
    
    if(cmd == "b!mute"){
    
        var razao = args.slice(1).join(" ")
        var membro = message.mentions.members.first();
        if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
        if(!membro) return message.reply("você não mencinou ninguém")
        if(razao.length < 1) return message.reply("Coloque um motivo!")
        membro.addRole(487683613903552512)
        message.channel.send(`<:pandapm:537700932377378826> O Jogador ${membro.user.username} foi muted do servidor.\nMotivo: ${razao}`);
    
    
    }
    
    

if(cmd == "b!embed"){ 
    message.delete();
    let user = message.mentions.users.first() || message.author;
    let adw = new Discord.RichEmbed()
    
    .setTitle(`${user.username} Criou Uma Embed`)
    .addField(args.join(' ') , `@everyone `)
    .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/135/cheering-megaphone_1f4e3.png")
    .setImage("https://media.discordapp.net/attachments/440733388941557760/443751613136502785/Line-1.gif")
    .setColor('#199900')
    message.channel.send(adw)




}


if(cmd == "b!botinfo"){ 
    let user = message.mentions.users.first() || message.author;
    let adw = new Discord.RichEmbed()
    
    .setTitle("BOT INFO")
    .addField(`**Criador:** N4shWFL \n **Data De Criaçao:** 10/01/2019 \n **Linguagem:** Node.js `)
    .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/microsoft/153/page-facing-up_1f4c4.png")
    .setImage("https://cdn.discordapp.com/attachments/537668637595664384/539836268318818314/lunarlcc.png")
    .setColor('#199900')
    message.channel.send(adw)
}
if (cmd === "b!downloads"){
    if(message.member.roles.has("539811775617433613")) {
        let acc = new Discord.RichEmbed()
        .setTitle("**CONFIRMADO**")
        .addField(`**Downloads Enviado No Seu Privado**`,"**Muito Obrigado Por Seu Um Cliente Lunar**")                             

        .setThumbnail("https://tenor.com/view/6m-rain-wallstreet-makeitrain-gif-8203989")
        .setImage("https://media.discordapp.net/attachments/440733388941557760/443751613136502785/Line-1.gif")
        .setColor('0x6464ff')
        .setFooter("@LunarShop","https://cdn.discordapp.com/attachments/537668637595664384/539836268318818314/lunarlcc.png")
        message.channel.send(acc)
        let kka = new Discord.RichEmbed()
        .setTitle("**DOWNLOADS**")
        .addField(`**Tools Pagas Tem Login**`,"**Caso Você Ainda Não Possui Favor Digite b!login usuario;senha (OBSPODE DEMORAR PARA ATIVAR O LOGIN)**")                             
     
        .addField("**[MenuVip]:**") 
        .setThumbnail("https://discordemoji.com/assets/emoji/PandaProfit.png")
        .setImage("https://media.discordapp.net/attachments/440733388941557760/443751613136502785/Line-1.gif")
        .setColor('0x6464ff')
        .setFooter("@LunarShop","https://cdn.discordapp.com/attachments/537668637595664384/539836268318818314/lunarlcc.png")
        message.author.send(kka)
      } else {
        let adw = new Discord.RichEmbed()
        .setTitle("**ERROR**")
        .addField(`**Você Não Comprou Algum Curso**`,"**Para Comprar Favor Entrar Em Contato Com Admin**")                             
        
        .setThumbnail("https://www.danstevers.com/assets/admin/color-admin/img/orange-error-256.png")
        .setImage("https://media.discordapp.net/attachments/440733388941557760/443751613136502785/Line-1.gif")
        .setColor('0x6464ff')
        .setFooter("@LunarShop","https://cdn.discordapp.com/attachments/537668637595664384/539836268318818314/lunarlcc.png")
        message.channel.send(adw)
      }

}

client.on('guildMemberAdd', async member => {
    client.channels.get('539854037462548481').send({
        embed: {
            title: "Solar - Captcha",
            title: `**Sistema de AntiBOT.**`,
            description: `<:reCaptcha:539839505990025216> Olá ${member}, percebemos que você acabou de entrar em nossa loja, e retiramos seu cargo, para devolvermos ele, é preciso que você verifique sua conexão, clique na reação abaixo para ser verificado e receber seu cargo novamente.` 
        
    }})
        .then(async (msg) => {
            await msg.react('✅');
            client.on('messageReactionAdd', (reaction, user) => {
                if (reaction.emoji.name === '✅' && user.id !== client.user.id && user.id === member.id) {
                    reaction.remove(user);
                    let role = member.guild.roles.find(r => r.name === '👤 Membro');

          member.addRole(role);
       
          
                }
            });
        });

    })




});

client.login(process.env.BOT_TOKEN)
