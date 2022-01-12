const { Telegraf } = require('telegraf');
const utoolslib = require('utoolslib');
const { fetch } = utoolslib.tools;
const token = process.env.BOT_TOKEN;
if (!token) throw new Error('Token should be provided');
const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply('Hey!');
});
bot.hears('hello', (ctx) => {
  ctx.replyWithPhoto(
    `https://img.freepik.com/free-vector/hello-greeting-typography-style-vector_53876-56876.jpg?size=338&ext=jpg`
  );
});
bot.command('weather', async (ctx) => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=ru&units=metric`
    );
    const weather = `Погода: ${data.weather[0].description}
Температура сейчас: ${data.main.temp}°C
Минимум за день: ${data.main.temp_min}°C
Максимум за день:${data.main.temp_max}°C
Ветер: ${data.wind.speed}м/с, ${data.wind.deg}°`;
    ctx.reply(weather);
  } catch (e) {
    console.error(e);
    ctx.reply('Error...');
  }
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
module.exports = bot;
