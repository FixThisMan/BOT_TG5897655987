process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const debug = require('./helpers');
const token = '1178156722:AAEyAyM7E8m9peeIITtIgZV7y9eqPtsV8OY';

console.log('Bot has been started....')

const bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 2000
        }
    }
});

bot.on('message', msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Клавиатура', {
        reply_markup: {
            keyboard: [
                ['1', '2'],
                ['3'],
                ['5'],['6'],
            ]
        }
    })
})

