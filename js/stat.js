'use strict';

// Temp
var canvas = document.querySelector('.demo .canvas');
var ctx = canvas.getContext('2d');

var CLOUD_WIDTH = 500,
    CLOUD_HEIGHT = 200;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 50, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 110, 75);
  ctx.fillRect(160, 60, 430, 20);

  ctx.fillStyle = '#000';
  ctx.fillText('Кот', 110, 105);
  ctx.fillRect(160, 90, 430, 20);

  ctx.fillStyle = '#000';
  ctx.fillText('Вася', 110, 135);
  ctx.fillRect(160, 120, 430, 20);
};

window.renderStatistics(ctx);
