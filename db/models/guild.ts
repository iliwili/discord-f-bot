import { User } from './user'

export interface Guild {
  id: string
  name: string
  joined?: Date
  init?: Boolean
  users?: User[]
}
