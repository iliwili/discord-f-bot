import { Message } from 'discord.js'
import { UserRepo } from '../db/repository/userRepo'

const userRepo = new UserRepo()

export const name = '!init'

export function execute (msg: Message, args: string[]): void {
  userRepo.getUsers().then(users => {
    console.log(users)
  }).catch(err => {
    console.error(err)
    console.log('Error getting all the users')
  })
}
