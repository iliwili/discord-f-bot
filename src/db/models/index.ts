interface Guild {
  id: string
  name: string
  joined?: Date
  init?: Boolean
  users?: User[]
}

interface User {
  id: String
  name: String
  tag: String
  fCount: Number
  guildId: String
}

export { Guild, User }
