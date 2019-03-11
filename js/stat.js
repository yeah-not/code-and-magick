'use strict';

// Temp
var canvas = document.querySelector('.demo .canvas');
var ctx = canvas.getContext('2d');

var CLOUD_WIDTH = 500,
    CLOUD_HEIGHT = 200,
    CLOUD_X = 100,
    CLOUD_Y = 50,
    GAP = 10,
    FONT_GAP = 15,
    TEXT_WIDTH = 50,
    BAR_HEIGHT = 20;

var barWidth = CLOUD_WIDTH - GAP * 2 - TEXT_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * 0);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * 0, barWidth, BAR_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.fillText('Кот', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * 1);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * 1, barWidth, BAR_HEIGHT);

  ctx.fillText('Вася', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * 2);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * 2, barWidth, BAR_HEIGHT);

  ctx.fillText('Пупкин', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * 3);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * 3, barWidth, BAR_HEIGHT);
};

window.renderStatistics(ctx);
