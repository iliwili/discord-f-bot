import Prisma from '../prisma'
import { Guild } from '../models'

export default class GuildRepo {
  prisma: Prisma

  constructor () {
    this.prisma = new Prisma()
  }

  async getAllGuilds (): Promise<Guild[]> {
    return await this.prisma.getDB().guild.findMany()
  }

  async getGuild (id: string): Promise<Guild | null> {
    return await this.prisma.getDB().guild.findUnique({
      where: {
        id: id
      }
    })
  }

  async createGuild (guild: Guild): Promise<Guild> {
    return await this.prisma.getDB().guild.create({
      data: {
        id: guild.id,
        name: guild.name
      }
    })
  }

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

  async deleteGuild (id: string): Promise<Guild> {
    return await this.prisma.getDB().guild.delete({
      where: {
        id: id
      }
    })
  }
}