const { Scenes, Markup } = require('telegraf');
const menuScene = new Scenes.BaseScene('menu');
menuScene.enter((ctx) => {
  ctx.reply(
    'Hey!',
    Markup.keyboard([
      ['/start', '/weather'],
      ['/settings', '/about'],
    ]).resize()
  );
});
menuScene.command('weather', (ctx) => {
  ctx.scene.enter('weather');
});
menuScene.hears('hello', (ctx) => {
  ctx.replyWithPhoto(
    `https://img.freepik.com/free-vector/hello-greeting-typography-style-vector_53876-56876.jpg?size=338&ext=jpg`
  );
});
module.exports = menuScene;
