const gif = require("./commands/gif.js")
const hello = require("./commands/hello.js")

const commands = { hello, gif }

module.exports = async function (msg) {
  if (msg.channel.id == "945701235154096171") {
    let tokens = msg.content.split(" ")
    let command = tokens.shift()
    if (command.charAt(0) === "!") {
      command = command.substring(1)
      commands[command](msg, tokens)
    }
  }
}
