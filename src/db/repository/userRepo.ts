import Prisma from '../prisma'
import { User } from '../models'

export default class UserRepo {
  prisma: Prisma

  constructor () {
    this.prisma = new Prisma()
  }

  /**
   * get a user
   * @param  {string} discId the discord user id of the user
   * @param  {string} guildId the guild id of the user
   * @returns Promise<User | null>
   */
  async getUser (discId: string, guildId: string): Promise<User | null> {
    return await this.prisma.getDB().user.findFirst({
      where: {
        discId: discId,
        guildId: guildId
      }
    })
  }

  /**
   *
   * get the top 10 users that dropped f's in the chat of a server
   * @param  {string} guildId the guildId of the server
   * @returns Promise<User[]>
   */
  async getTop10 (guildId: string): Promise<User[]> {
    return await this.prisma.getDB().user.findMany({
      where: {
        guildId: guildId
      },
      orderBy: {
        fCount: 'desc'
      },
      take: 10
    })
  }

  /**
   * create a user
   * @param  {User} user the new user
   * @returns Promise<User>
   */
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

  /**
   * update a users fCount
   * @param  {number} id the id of the user
   * @param  {number} count the new count of ther user
   * @returns Promise<User>
   */
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

  /**
   * delete a user
   * @param  {number} id the id of the user
   * @returns Promise<User>
   */
  async deleteUser (id: number): Promise<User> {
    return await this.prisma.getDB().user.delete({
      where: {
        id: id
      }
    })
  }
}
