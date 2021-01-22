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

  async getUser (discId: string, guildId: string): Promise<User | null> {
    return await this.prisma.getDB().user.findFirst({
      where: {
        discId: discId,
        guildId: guildId
      }
    })
  }

  async createUser (user: User): Promise<User> {    
    return await this.prisma.getDB().user.create({
      data: {
        discId: user.discId,
        name: user.name,
        tag: user.tag,
        guild: { connect: { id: user.guildId } }
      }
    })
  }

  async updateUser (id: number, count: number): Promise<User> {
    return await this.prisma.getDB().user.update({
      where: {
        id: id
      },
      data: {
        fCount: count
      }
    })
  }

  async deleteUser (id: number): Promise<User> {
    return await this.prisma.getDB().user.delete({
      where: {
        id: id
      }
    })
  }
}
