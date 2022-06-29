const { Scenes, Markup } = require('telegraf');

const settingsScene = new Scenes.BaseScene('settings');
settingsScene.enter((ctx) => {
  ctx.reply(
    'Добро пожаловать в модуль "Настройки"',
    Markup.keyboard(['Language', '/back']).resize()
  );
});

settingsScene.command('back', (ctx) => {
  ctx.scene.enter('menu');
});

settingsScene.hears('Language', (ctx) => {
  ctx.reply('In development...');
});

module.exports = settingsScene;
