const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function getAllGuilds () {
  return prisma.guild.findMany()
}

function getGuild (id) {
  return prisma.guild.findUnique({
    where: {
      id: id
    }
  })
}

function createGuild (guild) {
  return prisma.guild.create({
    data: {
      id: guild.id,
      name: guild.name
    }
  })
}

function deleteGuild (id) {
  return prisma.guild.delete({
    where: {
      id: id
    }
  })
}

module.exports = {
  getAllGuilds, getGuild, createGuild, deleteGuild
}
