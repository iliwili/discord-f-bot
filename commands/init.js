module.exports = {
  name: '!init',
  description: 'Initialise server in the database',
  async execute (msg, args) {
    await msg.guild.members.fetch().then(members => {
      members.map(member => {
        if (!member.user.bot) {
          msg.channel.send(`${member.user} is in this server`);
        }
      })
    });
  }
}
