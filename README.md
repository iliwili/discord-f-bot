<h1 align="center">
    <br>
    Discord F Bot
    <br>
    <br>
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/ts-standard"><img src="https://badgen.net/badge/icon/v6.14.11?icon=npm&label=npm"></a>
    <a href="https://github.com/standard/standard/blob/master/LICENSE"><img src="https://badgen.net/badge/icon/MIT?icon&label=license"></a>
    <a href="https://github.com/standard/ts-standard"><img src="https://badgen.net/badge/icon/typescript?icon=typescript&label=code-style" alt="typescript code style"></a>
    <a href="https://www.prisma.io/"><img src="https://badgen.net/badge/icon/v2.14.0?icon&label=prisma"></a>
</p>

## Tech/framework used
<b>Built with</b>
- [Node.js](https://nodejs.org)
- [Prisma](https://www.prisma.io)

## How to use?
Commands:
```
npm install
```
Add a .env file with your discord bot token and database url
```
BOT_TOKEN={bot_token}
DATABASE_URL={mysql_db_url}
```
Start the project
```
npm run start
```
Migrate prisma scheme
```
npx prisma migrate dev --preview-feature
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
