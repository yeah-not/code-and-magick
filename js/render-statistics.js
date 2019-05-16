'use strict';

// Статистика игры
// ---------------
(function () {
  // Константы
  // ---------------
  var Cloud = {
    WIDTH: 420,
    HEIGHT: 270,
    X: 100,
    Y: 10,
  };
  var SHADOW_GAP = 10;
  var GAP = 25;
  var BAR_WIDTH = 40;
  var CHART_HEIGHT = 150;
  var FONT_SIZE = 16;
  var LINE_HEIGHT = 1.2;
  var HEADING_GAP = 20;
  var BAR_TEXT_GAP = 7;

  // Функции
  // ---------------
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, Cloud.WIDTH, Cloud.HEIGHT);
  };

  var renderTimeBar = function (ctx, player, time, playerIndex, maxTime) {
    time = Math.round(time);
    var currentBarHeight = time * barHeight / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(player, Cloud.X + GAP + BAR_WIDTH * 2 * playerIndex, Cloud.Y + Cloud.HEIGHT - GAP);
    ctx.fillText(time, Cloud.X + GAP + BAR_WIDTH * 2 * playerIndex, Cloud.Y + Cloud.HEIGHT - GAP - currentBarHeight - fontHeight - BAR_TEXT_GAP);

    if (playerIndex === 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.round(Math.random() * 100);
      ctx.fillStyle = 'hsl(240, ' + saturation + '%, 50%)';
    }

    ctx.fillRect(Cloud.X + GAP + BAR_WIDTH * 2 * playerIndex, Cloud.Y + (Cloud.HEIGHT - GAP - currentBarHeight - fontHeight), BAR_WIDTH, currentBarHeight);
  };

  // Переменные
  // ---------------
  var fontHeight = FONT_SIZE * LINE_HEIGHT;
  var barHeight = CHART_HEIGHT - fontHeight * 2 - BAR_TEXT_GAP;

  // Экспорт
  // ---------------
  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, Cloud.X + SHADOW_GAP, Cloud.Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, Cloud.X, Cloud.Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = FONT_SIZE + 'px/' + LINE_HEIGHT + ' PT Mono';
    ctx.fillText('Ура вы победили!', Cloud.X + GAP, Cloud.Y + GAP + HEADING_GAP);
    ctx.fillText('Список результатов:', Cloud.X + GAP, Cloud.Y + GAP + HEADING_GAP + fontHeight);

    var maxTime = Math.round(window.util.getMaxElement(times));

    for (var i = 0; i < players.length; i++) {
      renderTimeBar(ctx, players[i], times[i], i, maxTime);
    }
  };

})();
