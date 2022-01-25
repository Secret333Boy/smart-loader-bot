const { Scenes, Markup } = require('telegraf');

const settingsScene = new Scenes.BaseScene('settings');
settingsScene.enter((ctx) => {
  ctx.reply(
    'Добро пожаловать в модуль "Настройки"',
    Markup.keyboard(['/back']).resize()
  );
});

settingsScene.command('back', (ctx) => {
  ctx.scene.enter('menu');
});

module.exports = settingsScene;
