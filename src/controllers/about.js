const { Scenes, Markup } = require('telegraf');

const aboutScene = new Scenes.BaseScene('about');
aboutScene.enter((ctx) => {
  ctx.reply(
    'Добро пожаловать в модуль "Информация"',
    Markup.keyboard(['/back']).resize()
  );
});

aboutScene.command('back', (ctx) => {
  ctx.scene.enter('menu');
});

module.exports = aboutScene;
