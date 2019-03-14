'use strict';

// Temp
var canvas = document.querySelector('.demo .canvas');
var ctx = canvas.getContext('2d');

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 23;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var FONT_SIZE = 16;
var LINE_HEIGHT = 1.2;
var FONT_GAP = 15;

var fontHeight = FONT_SIZE * LINE_HEIGHT;
// var barWidth = CLOUD_WIDTH - GAP * 2 - TEXT_WIDTH;
// var barWidth = CLOUD_WIDTH - GAP * 2 - TEXT_WIDTH;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxEl = function (arr) {
  var maxEl = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxEl) {
      maxEl = arr[i];
    }
  }

  return maxEl;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // TEMP:
  ctx.fillStyle = '#000';
  var players = ['Вы', 'Кекс', 'Енот', 'Рудольф'];
  var times = [1300, 2000, 1500, 700];

  ctx.font = FONT_SIZE + 'px/' + LINE_HEIGHT + ' PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + fontHeight);

  var maxTime = getMaxEl(times);

  for (var i = 0; i < players.length; i++) {
    // BAR_MAX - BAR_HEIGHT
    // BAR[i] - x
    // x = BAR[i] * BAR_HEIGHT / BAR_MAX
    var currentBarHeight = times[i] * BAR_HEIGHT / maxTime;

    // ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * i);
    // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, currentBarWidth, BAR_HEIGHT);
    ctx.fillText(players[i], CLOUD_X + GAP + BAR_WIDTH * 2 * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + GAP + BAR_WIDTH * 2 * i, CLOUD_Y + (CLOUD_HEIGHT - GAP - currentBarHeight - fontHeight), BAR_WIDTH, currentBarHeight);
  }
};

window.renderStatistics(ctx);
