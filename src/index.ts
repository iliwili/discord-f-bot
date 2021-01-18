/* eslint @typescript-eslint/no-misused-promises: "off" */
import dotenv from 'dotenv'
import DiscordService from './discord/discordService'
import Prisma from './db/prisma'
import { GuildRepo } from './db/repository/guildRepo'

dotenv.config()

const client: DiscordService = new DiscordService()

// prisma
const prisma = new Prisma()
prisma.connectToDb()

// repo
const guildRepo = new GuildRepo()

client.bot.on('ready', () => {
  console.log(`${client.bot.user?.tag ?? 'Bot'} is active in ${client.bot.guilds.cache.size} ${client.bot.guilds.cache.size === 1 ? 'server' : 'servers'}!`)
})

client.bot.on('guildCreate', async g => {
  const cGuild = await guildRepo.getGuild(g.id)

  if (cGuild != null) {
    console.log(`We already joined server with id ${g.id}!`)
  } else {
    const newGuild = await guildRepo.createGuild({
      id: g.id,
      name: g.name
    })

    console.log(`New guild has joined! ${newGuild.name}`)
  }
})

client.bot.on('message', async msg => {
  const args = msg.content.split(/ +/)

  const execCommand = client.commands.find((r, n) => n.includes(args[0]))
  if (execCommand == null) return

  try {
    execCommand(msg, args)
  } catch (error) {
    console.error(error)
    msg.reply('there was an error trying to execute that command!').then(() => {}).catch(() => console.log('error sending this message'))
  }
})
