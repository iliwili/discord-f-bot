/* eslint @typescript-eslint/no-misused-promises: "off" */
import dotenv from 'dotenv'
import DiscordService from './discord/discordService'
import Prisma from './db/prisma'
import GuildRepo from './db/repository/guildRepo'
import UserRepo from './db/repository/userRepo'
import { Message } from 'discord.js'
import { Guild, User } from './db/models'

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

client.bot.on('guildBanAdd', async (g, u) => {
  const user = await userRepo.getUser(u.id, g.id)
  if (user === null) return

  if (user.id !== undefined) {
    await userRepo.deleteUser(user.id).then(user => console.log(`a member is banned from guild ${g.name} + ${user.tag}`))
  }
})

client.bot.on('guildMemberAdd', async m => {
  const user = await userRepo.getUser(m.user.id, m.guild.id)

  if (user == null) {
    await userRepo.createUser({
      discId: m.user.id,
      name: m.user.username,
      tag: m.user.tag,
      guildId: m.guild.id
    }).then((u: User) => {
      console.log(`a user joins a guild: ${u.tag}`)
    })
  }
})

client.bot.on('message', async (msg: Message) => {
  const args = msg.content.split(/ +/)

  const execCommand = client.commands.get(args[0])

  if (execCommand === undefined) return
  if (msg.author.bot) return

  try {
    await initialiseGuild(msg).catch(err => console.log(err))

    execCommand(msg, args)
  } catch (error) {
    console.error(error)
    msg.reply('there was an error trying to execute that command!').then(() => {}).catch(() => console.log('error sending this message'))
  }
})
/**
 * initialise a guild
 * @param  {Message} msg
 * @returns Promise<void>
 */
async function initialiseGuild (msg: Message): Promise<void> {
  let guild: Guild | null

  if (msg.guild != null) {
    guild = await guildRepo.getGuild(msg.guild.id)

    if (guild == null) return
    if (guild.init == null) return

    if (guild.init === false) {
      await msg.guild?.members.fetch().then(members => {
        members.filter(member => !member.user.bot).map(async member => {
          await userRepo.createUser({
            discId: member.user.id,
            name: member.user.username,
            tag: member.user.tag,
            guildId: guild?.id ?? ''
          })
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
