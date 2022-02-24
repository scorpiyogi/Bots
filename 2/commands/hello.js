const replies = ["hey!!Whatsup", "Good to see you", "Call me", "morning"]

module.exports = function (msg, args) {
  const index = Math.floor(Math.random() * replies.length)
  msg.channel.send(replies[index])
}
