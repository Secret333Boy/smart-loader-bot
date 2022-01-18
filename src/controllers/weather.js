const { Scenes, Markup } = require('telegraf');
const Weather = require('../utils/Weather.js');

const weatherScene = new Scenes.BaseScene('weather');
weatherScene.enter((ctx) => {
  ctx.reply(
    'Добро пожаловать в модуль "Погода"',
    Markup.keyboard(['/now', '/back']).resize()
  );
});
weatherScene.command('now', async (ctx) => {
  try {
    const data = await Weather.getCurrent();
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
weatherScene.command('back', (ctx) => ctx.scene.enter('menu'));
module.exports = weatherScene;
