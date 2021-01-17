require('dotenv').config()
const discord = require('discord.js')
const bot = new discord.Client()

const botToken = process.env.BOT_TOKEN

bot.commands = new discord.Collection()
const botCommands = require('./commands')

const { getGuild, createGuild } = require('./queries/queries')

bot.login(botToken)

bot.on('ready', () => {
  console.log(`${bot.user.tag} is active in ${bot.guilds.cache.size} ${bot.guilds.cache.size === 1 ? 'server' : 'servers'}!`)
})

bot.on('guildCreate', async g => {
  const guild = await getGuild(g.id)

  if (guild != null) {
    console.log('We joined a server that already exists!')
  } else {
    const newGuild = await createGuild({
      id: g.id,
      name: g.name
    })

    console.log(`New guild has joined! ${newGuild.name}`)
  }
})

Object.keys(botCommands).map(key => {
  return bot.commands.set(botCommands[key].name, botCommands[key])
})

bot.on('message', async msg => {
  const args = msg.content.split(/ +/)
  const command = args.shift().toLowerCase()

  if (!bot.commands.has(command)) return

  try {
    bot.commands.get(command).execute(msg, args)
  } catch (error) {
    console.error(error)
    msg.reply('there was an error trying to execute that command!')
  }
})
