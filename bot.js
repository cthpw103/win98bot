var Discord = require("discord.js");
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === '#minecraftsucks') {
    msg.reply('FUCKKK YOOU!!!! MINECRAFT IS THE BEST GAME!!!!  YOOU JUST PLAY GAY ASS MARIO!  AND GAY ASS ZELDA!')
    };
  if (msg.content === 'rd') {
    msg.reply('Can you just fuck off? Actually learn a programming language.')
    };
  if (msg.content === '#invite') {
    msg.reply('silly you this is a selfbot')
    };
  if (msg.content === '#hack') {
    msg.reply('Trolled. You cannot hack discord you skid unless you are a faggot.')
    };
  if (msg.content === '#help') {
    msg.reply('`#minecraftsucks | Get a SMK-type response.` `rd | Cancer.` `#invite | Gives an invite to the bot.` `#hack | Runs a dank exploit that gives you ownership.` `#avatar | Gets your avatar.`')
    };
// kill me now
  if (msg.content === 'memz') {
    msg.reply('https://www.youtube.com/watch?v=2k0SmqbBIpQ')
    };
// god help us
  if (msg.content === 'hunter') {
    msg.reply('Hunter is dead.  LLOL NVM HE BACK LOL HE SUCK MORE JULIA PUSSY! HE WILL SHOVE MEMZ UP HER BUTTHOLE AGAIN!')
    };
// recursion
  if (msg.content === 'recursive tag') {
    msg.reply('.tag recursive')
    };
// lol
  if (msg.content === 'doom') {
    msg.reply('https://www.youtube.com/watch?v=QLKZhu_dgxA')
    };
// gooatse
  if (msg.content === '#goatse') {
    msg.reply('http://goatse.info/hello.jpg')
    };
// yee
  if (msg.content === '#yee') {
    msg.reply('https://www.youtube.com/watch?v=q6EoRBvdVPQ')
    };
// this should do it
  if (msg.content === '#avatar') {
    msg.reply(msg.author.avatarURL)
  };
});

client.login('token goes here');
