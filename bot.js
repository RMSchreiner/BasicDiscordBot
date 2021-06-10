//we will run our bot on HEROKU we would push this to GitHub
//we would create a new app on heroku then connect to github type in repo name and search
//if we make changes to our code and push it will update server 
//set up an env var for the bot token in heroku in variables
//finally do a manual deploy and get confirmation i logs that the bot is running

require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
partials: ["MESSAGE"]
})


const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on('ready', () => {
    console.log("Bot is Ready to go")
} )

client.on('messageDelete',msg => {
    msg.channel.send("Stop deleting messages")
})

client.on('message', msg => {
    if (msg.content == 'I love WDS'){
        msg.react("❤️")
    }

    if (msg.content == `${BOT_PREFIX}${MOD_ME_COMMAND}`){
        modUser(msg.member)
    }
})

function modUser(member){
    member.roles.add("852592543895650334")
}

client.login(process.env.BOT_TOKEN)