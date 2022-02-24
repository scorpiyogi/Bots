const fetch = require("node-fetch")

module.exports = async function (msg, args) {
  let keywords = "excited"
  if (args.length > 0) {
    keywords = args.join("")
  }

  /** gif  API from Tenor **/
  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8`
  let response = await fetch(url)
  let json = await response.json()
  const index = Math.floor(Math.random() * json.results.length)
  msg.channel.send(json.results[index].url)
  msg.channel.send("GIF form Tenor:" + keywords)
}
