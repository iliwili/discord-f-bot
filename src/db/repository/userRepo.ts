import Prisma from '../prisma'
import { User } from '../models'

export class UserRepo {
  prisma: Prisma

  constructor () {
    this.prisma = new Prisma()
  }

  async getUsers (): Promise<User[]> {
    return await this.prisma.getDB().user.findMany()
  }
}
