import Prisma from '../prisma'
import { User } from '../models'

export default class UserRepo {
  prisma: Prisma

  constructor () {
    this.prisma = new Prisma()
  }

  async getUsers (): Promise<User[]> {
    return await this.prisma.getDB().user.findMany()
  }

  async getUser (id: string): Promise<User | null> {
    return await this.prisma.getDB().user.findUnique({
      where: {
        id: id
      }
    })
  }

  async createUser (user: User): Promise<User> {
    return await this.prisma.getDB().user.create({
      data: {
        id: user.id,
        name: user.name,
        tag: user.tag,
        guild: { connect: { id: user.guildId } }
      }
    })
  }

  async updateUser (id: string, count: number): Promise<User> {
    return await this.prisma.getDB().user.update({
      where: {
        id: id
      },
      data: {
        fCount: count
      }
    })
  }
}
