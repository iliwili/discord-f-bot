/* eslint @typescript-eslint/no-var-requires: "off" */
import { Intents, Message, Client, Collection } from 'discord.js'
import { readdir } from 'fs'

export default class DiscordService {
  bot: Client
  token: string
  commands: Collection<string, (msg: Message, args: string[]) => any>

  constructor () {
    const intents = new Intents([
      Intents.NON_PRIVILEGED, // include all non-privileged intents, would be better to specify which ones you actually need
      "GUILD_MEMBERS", // lets you request guild members (i.e. fixes the issue)
    ]);
    this.bot = new Client({ ws: { intents } })
    this.token = process.env.BOT_TOKEN ?? ''
    this.commands = new Collection()

    this.login()

    this.initialiseCommands()
  }

  login (): void {
    this.bot.login(this.token)
      .then(() => console.log('Bot logged in!'))
      .catch(err => console.log(err))
  }

  initialiseCommands (): void {
    readdir('src/commands/', (err: any, files: string[]) => {
      if (err != null) console.log(err)
      if (files.length <= 0) console.log('No commands found!')
      else {
        for (const file of files) {
          const props = require(`../commands/${file}`) as {name: string, execute: () => any}
          this.commands.set(props.name, props.execute)
        }
      }
    })
  }
}
