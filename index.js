require('dotenv').config();
const { Telegraf } = require('telegraf');
const token = process.env.BOT_TOKEN;
if (!token) throw new Error('Token should be provided');
const bot = new Telegraf(token);
bot.start((ctx) => {
  ctx.reply('Hey!');
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
