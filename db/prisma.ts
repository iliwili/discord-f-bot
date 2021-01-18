import { PrismaClient } from '@prisma/client'

export default class Prisma {
  prisma: PrismaClient

  constructor () {
    this.prisma = new PrismaClient()
  }

  connectToDb (): void {
    this.prisma = new PrismaClient()
  }

  getDB (): PrismaClient {
    return this.prisma
  }
}
