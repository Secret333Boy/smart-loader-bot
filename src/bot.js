const { Telegraf, Scenes } = require('telegraf');
const session = require('./session.js');
const menuScene = require('./controllers/menu.js');
const weatherScene = require('./controllers/weather.js');

const token = process.env.BOT_TOKEN;
if (!token) throw new Error('Token should be provided');
const bot = new Telegraf(token);

const stage = new Scenes.Stage([menuScene, weatherScene]);

bot.use(session());
bot.use(stage.middleware());
bot.start((ctx) => {
  ctx.scene.enter('menu');
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
module.exports = bot;
