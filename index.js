const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTY5MjQ2NDc3MTk1MDI2NDQy.YmqnHw.o9l09OzSaPtsgeG7ijXXAjwmGEk"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hey Bot"){
        message.reply("Hello There!")
    }
})

client.login(process.env.TOKEN)