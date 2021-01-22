import Prisma from '../prisma'
import { Guild } from '../models'

export default class GuildRepo {
  prisma: Prisma

  constructor () {
    this.prisma = new Prisma()
  }

  /**
   * get a guild
   * @param  {string} id the id of the guild
   * @returns Promise<Guild | null>
   */
  async getGuild (id: string): Promise<Guild | null> {
    return await this.prisma.getDB().guild.findUnique({
      where: {
        id: id
      }
    })
  }

  /**
   * create a guild
   * @param  {Guild} guild
   * @returns Promise<Guild>
   */
  async createGuild (guild: Guild): Promise<Guild> {
    return await this.prisma.getDB().guild.create({
      data: {
        id: guild.id,
        name: guild.name
      }
    })
  }

  /**
   * update a guild
   * @param  {string} id the id of the guild
   * @param  {boolean} init the init variable of a guild
   * @returns Promise<Guild>
   */
  async updateGuild (id: string, init: boolean): Promise<Guild> {
    return await this.prisma.getDB().guild.update({
      where: {
        id: id
      },
      data: {
        init: init
      }
    })
  }

  /**
   * delete a guild
   * @param  {string} id the id of the guild
   * @returns Promise<Guild>
   */
  async deleteGuild (id: string): Promise<Guild> {
    return await this.prisma.getDB().guild.delete({
      where: {
        id: id
      }
    })
  }
}
