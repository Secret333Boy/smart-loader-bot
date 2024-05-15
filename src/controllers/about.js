const { Scenes, Markup } = require('telegraf');

const aboutScene = new Scenes.BaseScene('about');
aboutScene.enter((ctx) => {
  ctx.reply(
    'Добро пожаловать в модуль "Информация"',
    Markup.keyboard(['Контактная информация', '/back']).resize()
  );
});

aboutScene.command('back', (ctx) => {
  ctx.scene.enter('menu');
});

aboutScene.hears('Контактная информация', (ctx) => {
  ctx.reply(
    `Создатель: @Secret333Boy
Github проекта: https://github.com/Secret333Boy/mrJarvisBot`
  );
});

module.exports = aboutScene;
