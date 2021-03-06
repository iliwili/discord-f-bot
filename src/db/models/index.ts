interface Guild {
  id: string
  name: string
  joined?: Date
  init?: Boolean
  users?: User[]
}

interface User {
  id?: number
  discId: string
  name: string
  tag: string
  fCount?: number
  guildId: string
}

export { Guild, User }
