import { Guild } from './guild'

export interface User {
  id: String
  name: String
  tag: String
  fCount: Number
  guild: Guild
  guildId: String
}
