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
  var players = ['Вы', 'Кекс', 'Енот', 'Рудольф']

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, barWidth, BAR_HEIGHT);
  }
};

window.renderStatistics(ctx);
