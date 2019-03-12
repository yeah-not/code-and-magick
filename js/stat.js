'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;

var barWidth = CLOUD_WIDTH - GAP * 2 - TEXT_WIDTH;

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
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxEl(times);

  for (var i = 0; i < players.length; i++) {
    var currentBarWidth = times[i] * barWidth / maxTime;

    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, currentBarWidth, BAR_HEIGHT);
  }
};
