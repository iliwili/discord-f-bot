import { Message } from 'discord.js'
import UserRepo from '../db/repository/userRepo'

export const name = 'f'

const userRepo = new UserRepo()
// TODO: add count in db
export async function execute (msg: Message, args: string[]): Promise<void> {
  const user = await userRepo.getUser(msg.author.id)

  if (user == null) return

  if (user.fCount !== undefined) {
    await userRepo.updateUser(user.id, user.fCount + 1).then(async () => {
      await msg.reply('dropped a F in the chat!')
    }).catch(err => console.error(err))
  }
}
