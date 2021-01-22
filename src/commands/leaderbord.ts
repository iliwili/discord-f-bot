import { Message } from 'discord.js'
import UserRepo from '../db/repository/userRepo'

export const name = '*leaderboard'

const userRepo = new UserRepo()

export async function execute (msg: Message, args: string[]): Promise<void> {
  if (msg.guild == null) return

  const users = await userRepo.getTop10(msg.guild.id)

  const names = users.map(u => u.name)
  const fCounts = users.map(u => u.fCount)

  const exampleEmbed = {
    color: 0x0099ff,
    title: 'F Leaderboard',
    fields: [
      {
        name: 'User',
        value: `${names.join('\n')}`,
        inline: true
      },
      {
        name: 'F Count',
        value: `${fCounts.join('\n')}`,
        inline: true
      }
    ],
    timestamp: new Date()
  }

  await msg.channel.send({ embed: exampleEmbed })
}
