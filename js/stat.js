'use strict';

// Temp
var canvas = document.querySelector('.demo .canvas');
var ctx = canvas.getContext('2d');

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 200;
var CLOUD_Y = 10;
var ARC_RADIUS = 20;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;

var barWidth = CLOUD_WIDTH - GAP * 2 - TEXT_WIDTH;
var arcsNum = Math.floor(CLOUD_WIDTH / (ARC_RADIUS * 2));
var arcsSep = Math.floor((CLOUD_WIDTH % (ARC_RADIUS * 2)) / arcsNum);
var realWidth = ARC_RADIUS * 2 * arcsNum + arcsSep * (arcsNum - 1);
// var arcsSep = 10;
console.log(realWidth);

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#aaa';
  ctx.beginPath();
  // ctx.moveTo(x, y + ARC_RADIUS);


  for (var i = 0; i < arcsNum; i++) {
    ctx.arc(x + ARC_RADIUS + ARC_RADIUS * 2 * i + arcsSep * i, y + ARC_RADIUS, ARC_RADIUS, 0, (Math.PI/180)*180, true);
  }
  // ctx.arc(x + ARC_RADIUS + ARC_RADIUS * 2 * 0 + arcsSep * 0, y + ARC_RADIUS, ARC_RADIUS, 0, (Math.PI/180)*180, true);
  // ctx.arc(x + ARC_RADIUS + ARC_RADIUS * 2 * 1 + arcsSep * 1, y + ARC_RADIUS, ARC_RADIUS, 0, (Math.PI/180)*180, true);
  // ctx.arc(x + ARC_RADIUS + ARC_RADIUS * 2 * 2 + arcsSep * 2, y + ARC_RADIUS, ARC_RADIUS, 0, (Math.PI/180)*180, true);
  ctx.moveTo(x + ARC_RADIUS * 2 + ARC_RADIUS * 2 * (arcsNum - 1) + arcsSep * (arcsNum - 1), y + ARC_RADIUS);
  ctx.lineTo(x + realWidth, y + CLOUD_HEIGHT);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x, y + ARC_RADIUS);

  // ctx.closePath();
  // ctx.stroke();
  ctx.fill();
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
  // renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // TEMP:
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  var players = ['Вы', 'Кекс', 'Енот', 'Рудольф'];
  var times = [1300, 2000, 1500, 700];

  var maxTime = getMaxEl(times);

  for (var i = 0; i < players.length; i++) {
    // BAR_MAX - BAR_WIDTH
    // BAR[i] - x
    // x = BAR[i] * BAR_WIDTH / BAR_MAX
    var currentBarWidth = times[i] * barWidth / maxTime;

    // ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * i);
    // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, currentBarWidth, BAR_HEIGHT);
  }
};

window.renderStatistics(ctx);
