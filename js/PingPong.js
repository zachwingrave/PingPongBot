const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});
const permissionsInteger = 68672;

const inviteURL = `https://discord.com/api/oauth2/authorize?client_id=953975649851293717&permissions=${permissionsInteger}&scope=bot`;

const token = process.env.DISCORD_TOKEN;

client.on('ready', () => {
  console.log(`Ping, pong! 🏓 ${client.user.tag}`);
});

client.on('messageCreate', (msg) => {
  console.log(`Message received: ${msg}`);
  lowerMsg = msg.content.toLowerCase();

  // if (msg.author.tag === 'affableTechnologist#2117') {
  //   console.log('Cool guy Super Admin ™ 😎');
  // }

  if (msg.author.tag === 'Seedy#5603') {
    badWords = [
      'pang',
      'peng',
      'pong',
      'pung',
      'piing',
      'go fish',
      'yahtzee',
      'you sunk my battleship'
    ];
    //   msg.react('😭');
    for (let i = 0; i < badWords.length; i++) {
      if (lowerMsg.includes(badWords[i])) {
        msg.reply('You make Ping Pong Bot sad 😢');
      }
    }
  }

  if (msg.content === 'Ping!') {
    msg.reply('Pong! 🏓');
    msg.react('🏓');
  }
});

console.log(`Logging in. Add this bot to your server: ${inviteURL}`);

client.login(token);
