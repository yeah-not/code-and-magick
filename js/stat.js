'use strict';

// Temp
var canvas = document.querySelector('.demo .canvas');
var ctx = canvas.getContext('2d');

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var GAP = 25;
var BAR_WIDTH = 40;
var CHART_HEIGHT = 150;
var FONT_SIZE = 16;
var LINE_HEIGHT = 1.2;
var HEADING_GAP = 20;
var BAR_TEXT_GAP = 7;

var fontHeight = FONT_SIZE * LINE_HEIGHT;
var barHeight = CHART_HEIGHT - fontHeight * 2 - BAR_TEXT_GAP;

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
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // TEMP:
  ctx.fillStyle = '#000';
  var players = ['Вы', 'Кекс', 'Енот', 'Рудольф'];
  var times = [1300, 2000, 1500, 700];

  ctx.font = FONT_SIZE + 'px/' + LINE_HEIGHT + ' PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + HEADING_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + HEADING_GAP + fontHeight);

  var maxTime = getMaxEl(times);

  for (var i = 0; i < players.length; i++) {
    // BAR_MAX - barHeight
    // BAR[i] - x
    // x = BAR[i] * barHeight / BAR_MAX
    var currentBarHeight = times[i] * barHeight / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + BAR_WIDTH * 2 * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(times[i], CLOUD_X + GAP + BAR_WIDTH * 2 * i, CLOUD_Y + CLOUD_HEIGHT - GAP - currentBarHeight - fontHeight - BAR_TEXT_GAP);

    if (i === 0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.round(Math.random() * 100);
      ctx.fillStyle = 'hsl(240, ' + saturation + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP + BAR_WIDTH * 2 * i, CLOUD_Y + (CLOUD_HEIGHT - GAP - currentBarHeight - fontHeight), BAR_WIDTH, currentBarHeight);
  }
};

window.renderStatistics(ctx);
