/* eslint @typescript-eslint/no-misused-promises: "off" */
import dotenv from 'dotenv'
import DiscordService from './discord/discordService'
import Prisma from './db/prisma'
import GuildRepo from './db/repository/guildRepo'
import UserRepo from './db/repository/userRepo'
import { Message } from 'discord.js'
import { Guild } from './db/models'

dotenv.config()

const client: DiscordService = new DiscordService()

// prisma
const prisma = new Prisma()
prisma.connectToDb()

// repo
const guildRepo = new GuildRepo()
const userRepo = new UserRepo()

client.bot.on('ready', () => {
  console.log(`${client.bot.user?.tag ?? 'Bot'} is active in ${client.bot.guilds.cache.size} ${client.bot.guilds.cache.size === 1 ? 'server' : 'servers'}!`)
})

client.bot.on('guildCreate', async g => {
  const guild = await guildRepo.getGuild(g.id)

  if (guild != null) {
    console.log(`We already joined server with id ${g.id}!`)
  } else {
    const newGuild = await guildRepo.createGuild({
      id: g.id,
      name: g.name
    })

    console.log(`New guild has joined! ${newGuild.name}`)
  }
})

client.bot.on('message', async (msg: Message) => {
  const args = msg.content.split(/ +/)

  const execCommand = client.commands.find((r, n) => n.includes(args[0]))
  if (execCommand == null) return

  try {
    await initialiseGuild(msg).catch(err => console.log(err))
    execCommand(msg, args)
  } catch (error) {
    console.error(error)
    msg.reply('there was an error trying to execute that command!').then(() => {}).catch(() => console.log('error sending this message'))
  }
})

// TODO: delete user if he gets banned from server NOT 'leaves'

async function initialiseGuild (msg: Message): Promise<void> {
  let guild: Guild | null

  if (msg.guild != null) {
    guild = await guildRepo.getGuild(msg.guild.id)

    if (guild == null) return
    if (guild.init == null) return
    
    if (guild.init === false) {
      await msg.guild?.members.fetch().then(members => {
        members.map(async member => {
          if (member.user.bot) {
            await userRepo.createUser({
              id: member.user.id,
              name: member.user.username,
              tag: member.user.tag,
              // this can be better i guess
              guildId: guild?.id ?? ''
            })
          }
        })
      })

      await guildRepo.updateGuild(msg.guild.id, true).then(g => {
        console.log(`${g.name} server is updated.`)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
