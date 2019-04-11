'use strict';

// Константы
// ---------------
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUM = 4;

// Утилиты
// ---------------
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var randomizeFillColor = function (element, colors) {
  var color = colors[getRandomInt(0, colors.length - 1)];
  element.style.fill = color;
  return color;
};

var randomizeBgColor = function (element, colors) {
  var color = colors[getRandomInt(0, colors.length - 1)];
  element.style.backgroundColor = color;
  return color;
};
