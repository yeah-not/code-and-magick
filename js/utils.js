'use strict';

(function () {
  // Константы
  // ---------------
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  window.utils = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    },
    isEmpty: function (obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    },
    getElementCoords: function (el) {
      var elCoords = {
        x: el.offsetLeft,
        y: el.offsetTop
      };

      return elCoords;
    },
    setElementCoords: function (el, coords) {
      el.style.left = coords.x + 'px';
      el.style.top = coords.y + 'px';
    },
  };
})();

// Константы
// ---------------
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUM = 4;

// Утилиты
// ---------------

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
