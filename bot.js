var Discord = require("discord.js");
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  switch (msg.content) {
    case '#minecraftsucks':
      msg.reply('FUCKKK YOOU!!!! MINECRAFT IS THE BEST GAME!!!!  YOOU JUST PLAY GAY ASS MARIO!  AND GAY ASS ZELDA!');
      break;
    case 'rd':
      msg.reply('Can you just fuck off? Actually learn a programming language.');
      break;
    case '#invite':
      msg.reply('https://discordapp.com/oauth2/authorize?&client_id=229794047865126913&scope=bot&permissions=0');
      break;
    case '#hack':
      msg.reply('Trolled. You cannot hack discord you skid unless you are a faggot.');
      break;
    case '#help':
      msg.reply('`#minecraftsucks | Get a SMK-type response.` `rd | Cancer.` `#invite | Gives an invite to the bot.` `#hack | Runs a dank exploit that gives you ownership.` `#avatar | Gets your avatar.` `#yee | Yee.`');
      break;
    case 'memz': // kill me now
      msg.reply('https://www.youtube.com/watch?v=2k0SmqbBIpQ');
      break;
    case 'hunter': // god help us
      msg.reply('Hunter is dead.  LLOL NVM HE BACK LOL HE SUCK MORE JULIA PUSSY! HE WILL SHOVE MEMZ UP HER BUTTHOLE AGAIN! PLOT TWIST! I AM ACTUALLY THEREALSTINGY/VVPOOPS VV/WHATEVER FAKE NAME I WANT TO USE');
      break;
    case 'recursive tag': // recursion
      msg.channel.sendMessage('.tag recursive');
      break;
    case 'doom': // lol
      msg.reply('https://www.youtube.com/watch?v=QLKZhu_dgxA');
      break;
    case '#goatse': // gooatse
      msg.reply('http://goatse.info/hello.jpg');
      break;
    case '#yee': // yee
      msg.reply('https://www.youtube.com/watch?v=q6EoRBvdVPQ');
      break;
    case '#avatar': // this should do it
      msg.reply(msg.author.avatarURL);
      break;
    case '*15':
      msg.channel.sendMessage('hi guyz astrik 15 hr and tody we wll be runnn the new rc7');
      break;
}});

client.login('token goes here');
