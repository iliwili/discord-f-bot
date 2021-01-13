require('dotenv').config();
const discord = require('discord.js');
const bot = new discord.Client();
const bot_token = process.env.BOT_TOKEN;
bot.commands = new discord.Collection();
const botCommands = require('./commands');

bot.login(bot_token);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.username}!`);
});

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on('message', msg => {
    
    if (msg.content == 'f') {
        console.log('tester');
    }

    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(`Called command: ${command}`);
  
    if (!bot.commands.has(command)) return;
  
    try {
      bot.commands.get(command).execute(msg, args);
    } catch (error) {
      console.error(error);
      msg.reply('there was an error trying to execute that command!');
    }
});