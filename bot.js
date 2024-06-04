// const TelegramApi = require('node-telegram-bot-api')
//
// const token = '5508404295:AAGaKITDbz9PNDllJ-mH0bDbmB9qrTyzUVk'
//
// const bot = new TelegramApi(token, {polling: true})
//
// bot.on("message", msg => {
//     const name = msg.name
//     const email = msg.email
//     const phone = msg.phone
//     const company = msg.company
//     const message = msg.message
//     const chatId = msg.chat.id
//     console.log(msg)
//
//     bot.sendMessage(chatId, "My name is ${name}")
// })