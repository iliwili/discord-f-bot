import { PrismaClient } from '@prisma/client'

export default class Prisma {
  prisma!: PrismaClient

  constructor () {
    this.connectToDb()
  }

  connectToDb (): void {
    this.prisma = new PrismaClient()
  }

  getDB (): PrismaClient {
    return this.prisma
  }
}
