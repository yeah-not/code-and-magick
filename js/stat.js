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

var getMaxEl = function (arr) {
  var maxEl = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxEl) {
      maxEl = arr[i];
    }
  }

  return maxEl;
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  var players = ['Вы', 'Кекс', 'Енот', 'Рудольф']; // temp
  var times = [1300, 2000, 1500, 700]; // TEMP:

  var maxTime = getMaxEl(times);

  for (var i = 0; i < players.length; i++) {
    // BAR_MAX - BAR_WIDTH
    // BAR[i] - x
    // x = BAR[i] * BAR_WIDTH / BAR_MAX
    var currentBarWidth = times[i] * barWidth / maxTime;

    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, currentBarWidth, BAR_HEIGHT);
  }
};

window.renderStatistics(ctx);
